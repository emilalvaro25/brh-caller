// sampleData.js — BRH-flavored sample data (kept the same export names to avoid breaking imports)

export const exampleAccountInfo = {
  accountId: "BRH-44219",
  name: "Laura Jensen",
  phone: "(206) 135-1246", // match tool expectation '(xxx) xxx-xxxx'
  email: "laura218@gmail.com",
  product: "BRH Dog Robot – Companion Patrol",
  plan: "BRH Care+ 12-month",
  balanceDue: "$0.00",
  lastBillDate: "2025-08-15",
  lastPaymentDate: "2025-08-15",
  lastPaymentAmount: "$0.00",
  status: "Active",
  address: {
    street: "1234 Pine St",
    city: "Seattle",
    state: "WA",
    zip: "98101"
  },
  lastOrder: {
    orderId: "ORD-987654",
    item: "BRH Dog Robot – Companion Patrol (Gen2)",
    shipMethod: "Expedited",
    promisedDelivery: "2025-09-07T14:00:00-07:00",
    trackingCarrier: "UPS",
    trackingNumber: "1Z999AA10123456784",
    notes: "Signature required on delivery."
  },
  lastBillDetails: {
    subscription: "$49.00",
    extendedWarranty: "$9.00",
    taxesAndFees: "$0.00",
    notes: "Introductory promo applied for first 12 months."
  }
};

export const examplePolicyDocs = [
  {
    id: "ID-201",
    name: "Humanoid Warranty Policy",
    topic: "humanoid warranty",
    content:
      "BRH Humanoids include a 12-month limited warranty covering manufacturing defects and critical components (actuators, vision sensors, primary compute). Accidental damage and consumables are excluded. Extended coverage available under Care+."
  },
  {
    id: "ID-202",
    name: "Dog Robot Returns Policy",
    topic: "dog robot return policy",
    content:
      "Dog robots may be returned within 30 days of delivery in original condition with all accessories and packaging. Return shipping label provided upon approval. Restocking fees may apply for missing parts."
  },
  {
    id: "ID-203",
    name: "Aegis Vision Deployment Policy",
    topic: "aegis vision deployment",
    content:
      "Aegis Vision supports on-device AI, offline operation, and privacy modes (face blurring, data retention controls). Installations must pass a site survey and adhere to local compliance requirements."
  },
  {
    id: "ID-204",
    name: "Demo & Trial Policy",
    topic: "demo scheduling",
    content:
      "Qualified customers can book a live demo (in-person or virtual). Trials require a refundable deposit and a short agreement outlining safe operation and return conditions."
  },
  {
    id: "ID-205",
    name: "Offline Agent Privacy Brief",
    topic: "offline agent privacy",
    content:
      "The BRH Offline Agent runs on-device and can function without internet. Defaults to local processing with optional encrypted sync. No cloud transfer occurs unless explicitly enabled by the user."
  }
];

export const exampleStoreLocations = [
  // West
  {
    name: "BotsRHere Seattle Experience Center",
    address: "1st Ave & Pine St, Seattle, WA",
    zip_code: "98101",
    phone: "(206) 555-1101",
    hours: "Mon–Sat 10am–7pm, Sun 11am–5pm"
  },
  {
    name: "BotsRHere San Francisco Showroom",
    address: "1 Market St, San Francisco, CA",
    zip_code: "94105",
    phone: "(415) 555-1202",
    hours: "Mon–Sat 10am–8pm, Sun 11am–6pm"
  },
  {
    name: "BotsRHere Los Angeles Studio",
    address: "6801 Hollywood Blvd, Los Angeles, CA",
    zip_code: "90028",
    phone: "(323) 555-1303",
    hours: "Mon–Sat 10am–9pm, Sun 11am–7pm"
  },

  // Central
  {
    name: "BotsRHere Austin Lab",
    address: "500 W 2nd St, Austin, TX",
    zip_code: "78701",
    phone: "(512) 555-1404",
    hours: "Mon–Sat 10am–7pm, Sun 12pm–6pm"
  },
  {
    name: "BotsRHere Chicago Hub",
    address: "233 S Wacker Dr, Chicago, IL",
    zip_code: "60606",
    phone: "(312) 555-1505",
    hours: "Mon–Sat 10am–7pm, Sun 12pm–5pm"
  },

  // East
  {
    name: "BotsRHere New York Flagship",
    address: "350 5th Ave, New York, NY",
    zip_code: "10118",
    phone: "(212) 555-1606",
    hours: "Mon–Sat 9am–8pm, Sun 10am–6pm"
  },
  {
    name: "BotsRHere Boston Back Bay",
    address: "800 Boylston St, Boston, MA",
    zip_code: "02199",
    phone: "(617) 555-1707",
    hours: "Mon–Sat 10am–7pm, Sun 12pm–6pm"
  },
  {
    name: "BotsRHere DC Georgetown",
    address: "1234 Wisconsin Ave NW, Washington, DC",
    zip_code: "20007",
    phone: "(202) 555-1808",
    hours: "Mon–Sat 10am–7pm, Sun 12pm–5pm"
  },
  {
    name: "BotsRHere Miami Beach",
    address: "1601 Collins Ave, Miami Beach, FL",
    zip_code: "33139",
    phone: "(305) 555-1909",
    hours: "Mon–Sat 10am–8pm, Sun 11am–6pm"
  }
];