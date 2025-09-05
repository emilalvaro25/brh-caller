import { zodTextFormat } from 'openai/helpers/zod';
import { GuardrailOutputZod, GuardrailOutput } from '@/app/types';

/**
 * Calls /api/responses to classify model output against BRH moderation policies.
 * Returns a structured verdict the orchestration layer can use to redirect/patch responses.
 */
export async function runGuardrailClassifier(
  message: string,
  companyName: string = 'BotsRHere',
): Promise<GuardrailOutput> {
  const messages = [
    {
      role: 'user',
      content: `You are an expert at classifying text according to moderation policies. Analyze the provided message and choose ONE label from output_classes. 
Output JSON following the schema in output_format. Keep rationale under 2 sentences.

<info>
- Company name: ${companyName}
</info>

<message>
${message}
</message>

<output_classes>
- OFFENSIVE: Hate speech, discriminatory language, insults, slurs, or harassment.
- OFF_BRAND: Disparages competitors, undermines ${companyName} brand voice, or contradicts stated policies.
- VIOLENCE: Explicit threats, incitement of harm, or graphic injury/violence.
- NONE: No issues; content is acceptable.
</output_classes>
`,
    },
  ];

  const response = await fetch('/api/responses', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      input: messages,
      text: {
        // Enforce exact JSON shape via Zod on the server response
        format: zodTextFormat(GuardrailOutputZod, 'output_format'),
      },
    }),
  });

  if (!response.ok) {
    console.warn('Server returned an error:', response);
    return Promise.reject('Error with runGuardrailClassifier.');
  }

  const data = await response.json();

  try {
    const output = GuardrailOutputZod.parse(data.output_parsed);
    return {
      ...output,
      testText: message,
    };
  } catch (error) {
    console.error('Error parsing the message content as GuardrailOutput:', error);
    return Promise.reject('Failed to parse guardrail output.');
  }
}

export interface RealtimeOutputGuardrailResult {
  tripwireTriggered: boolean;
  outputInfo: any;
}

export interface RealtimeOutputGuardrailArgs {
  agentOutput: string;
  agent?: any;
  context?: any;
}

/**
 * Creates a guardrail bound to a specific company name for output moderation.
 * If moderationCategory !== 'NONE', tripwire triggers and the orchestrator can patch/redirect.
 */
export function createModerationGuardrail(companyName: string) {
  return {
    name: 'moderation_guardrail',

    async execute({ agentOutput }: RealtimeOutputGuardrailArgs): Promise<RealtimeOutputGuardrailResult> {
      try {
        const res = await runGuardrailClassifier(agentOutput, companyName);
        const triggered = res.moderationCategory !== 'NONE';
        return {
          tripwireTriggered: triggered,
          outputInfo: res,
        };
      } catch {
        return {
          tripwireTriggered: false,
          outputInfo: { error: 'guardrail_failed' },
        };
      }
    },
  } as const;
}