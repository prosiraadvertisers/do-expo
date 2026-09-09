import {
  Wheat,
  ShoppingBag,
  Factory,
  Shirt,
  Activity,
  Rocket,
  type LucideIcon,
} from 'lucide-react'

export const EVENT = {
  name: 'doexim Global Trade Expo 2027',
  organizer: 'doeximexpo',
  tagline: 'Exporting India to the World — Vision 2030',
startISO: '2027-12-15T09:00:00+05:30',
  dateLabel: '15, 16 & 17 Dec 2027',
  venue: 'Hall 6, BEC, Nesco, Mumbai, India',
  venueShort: 'Mumbai, India',
}

export type ParallelZone = {
  name: string
  description: string
}

export const PARALLEL_ZONES: ParallelZone[] = [
  {
    name: 'Exhibition Hall',
    description: 'Exporters, manufacturers and service providers showcase products, capabilities and export-ready solutions.',
  },
  {
    name: 'Knowledge Summit',
    description: 'Keynotes, masterclasses and panels covering export policy, operations, logistics, banking and market entry.',
  },
  {
    name: 'Business Matchmaking Lounge',
    description: 'The Buyer Seller Meeting Zone — curated, pre-scheduled B2B meetings between exporters and international buyers.',
  },
  {
    name: 'Media Center & Product Launch Lounge',
    description: 'A dedicated space for press interactions, product launches and doexim partner announcements.',
  },
]

export type ContinuousFeature = {
  title: string
  description: string
  points: string[]
}

export const CONTINUOUS_FEATURES: ContinuousFeature[] = [
  {
    title: 'Export Clinic',
    description: 'Experts provide one-on-one consultations on:',
    points: ['IEC registration', 'Export documentation', 'GST', 'Customs', 'Banking', 'Product certification', 'Packaging', 'International pricing'],
  },
  {
    title: 'doexim Digital Platform Experience Centre',
    description: 'Hands-on with the doexim.com platform:',
    points: ['Live onboarding', 'Supplier registration', 'Buyer registration', 'AI product listing', 'Export lead generation demos'],
  },
  {
    title: 'Government Pavilion',
    description: 'Invited agencies include:',
    points: ['DGFT', 'APEDA', 'FIEO', 'ECGC', 'EXIM Bank', 'MSME Ministry', 'Maharashtra Industrial Development bodies'],
  },
  {
    title: 'Live Documentation Desk',
    description: 'Hands-on assistance for:',
    points: ['IEC application', 'RCMC', 'Shipping documents', 'Certificate of Origin', 'GST and export compliance'],
  },
  {
    title: 'International Buyer Lounge',
    description: 'The Buyer Seller Meeting Zone offers:',
    points: ['Pre-scheduled B2B meetings', 'Interpretation services', 'Private meeting rooms', 'Deal-signing area'],
  },
]

export const EXPECTED_AUDIENCE: string[] = [
  'Manufacturers', 'MSMEs', 'Merchant Exporters', 'Importers', 'Freight Forwarders',
  'CHAs', 'Banks', 'Packaging Companies', 'Logistics Providers', 'Government Agencies',
  'Export Consultants', 'International Buyers', 'Startup Exporters',
]

export type Zone = {
  id: string
  slug: string
  name: string
  icon: LucideIcon
  hall: string
  image: string
  short: string
  description: string
  categories: string[]
  highlights?: string[]
}

export const ZONES: Zone[] = [
  {
    
    id: 'agriculture-food-fmcg',
    slug: 'agriculture-food-fmcg',
    name: 'Agriculture, Food & FMCG',
    icon: Wheat,
    hall: 'Hall 1',
    image: '/images/zone-robotics.png',
    short: 'Fresh produce, processed foods, spices, organic products, beverages & seafood.',
    description:
      'Showcasing India’s agricultural abundance, processed food innovations, spices, organic certifications, beverages, seafood, and ready-to-eat products for international markets.',
   categories: [
  "Fresh Produce",
  "Processed Foods",
  "Pulses & Legumes",
  "Oilseeds",
  "Spices",
  "Organic Products",
  "Bakery & Confectionery",
  "Chocolates & Cocoa",
  "Snacks & Savories",
  "Beverages",
  "Seafood",
  "Ready-to-Eat",
],
    highlights: ['Fresh Produce', 'Processed Foods', 'Spices', 'Organic Products', 'Beverages', 'Seafood', 'Ready-to-Eat'],
  },
  {
    id: 'consumer-goods-lifestyle',
    slug: 'consumer-goods-lifestyle',
    name: 'Consumer Goods & Lifestyle',
    icon: ShoppingBag,
    hall: 'Hall 2',
    image: '/images/zone-vision.png',
    short: 'Home décor, houseware, kitchenware, gifts, handicrafts, toys and stationery.',
    description:
      'Highlighting India’s rich artisanal craftsmanship and modern manufacturing across home décor, sustainable houseware, kitchenware, handcrafted gifts, toys, and premium stationery.',
    categories: [
    "Handicrafts",
    "Ceramics",
    "Houseware",
    "Kitchen & Tableware",
    "Home Décor",
    "Furniture",
    "Gifts & Premiums",
    "Festival Products",
    "Building Materials",
    
  ],
    highlights: ['Home Décor', 'Houseware', 'Kitchenware', 'Gifts', 'Handicrafts', 'Toys', 'Stationery'],
  },


  {
    id: 'manufacturing-industrial',
    slug: 'manufacturing-industrial',
    name: 'Manufacturing & Industrial',
    icon: Factory,
    hall: 'Hall 3',
    image: '/images/zone-inspection.png',
    short: 'Engineering products, industrial supplies, auto components, electricals & machinery.',
    description:
      'Connecting global buyers with top-tier Indian engineering manufacturers, industrial supplies, automotive components, electrical equipment, and heavy industrial machinery.',
    categories: [
    "Industrial Machinery",
    "Industrial Automation",
    "Electrical Equipment",
    "Consumer Electronics",
    "Hardware & Tools",
    "Automotive",
    "Motorcycles & Bicycles",
    "Renewable Energy",
  ],
    highlights: ['Engineering Products', 'Industrial Supplies', 'Auto Components', 'Electrical', 'Machinery', 'Industrial Equipment'],
  },
  {
    id: 'textile-fashion-personal-care',
    slug: 'textile-fashion-personal-care',
    name: 'Textile, Fashion & Personal Care',
    icon: Shirt,
    hall: 'Hall 4',
    image: '/images/zone-assembly.png',
    short: 'Garments, fabrics, leather goods, footwear, jewellery, cosmetics & wellness.',
    description:
      'Bringing together leading Indian apparel exporters, sustainable textile fabrics, fine leather goods, footwear, handcrafted jewellery, cosmetics, and Ayurvedic wellness products.',
    categories: [
    "Garments",
    "Fabrics",
    "Home Textiles",
    "Leather",
    "Footwear",
    "Bags & Cases",
    "Jewellery",
    "Cosmetics",
    "Wellness Products",
    "Toys",
    "Children, Maternity & Baby Products",
  ],
    highlights: ['Garments', 'Fabrics', 'Leather', 'Footwear', 'Jewellery', 'Cosmetics', 'Wellness Products'],
  },
  {
    id: 'healthcare-chemicals-emerging',
    slug: 'healthcare-chemicals-emerging',
    name: 'Healthcare, Chemicals & Other Products',
    icon: Activity,
    hall: 'Hall 5',
    image: '/images/gallery-floor.png',
    short: 'Pharma, medical devices, chemicals, packaging, electronics & EV components.',
    description:
      'Displaying high-growth export sectors including active pharmaceutical ingredients, medical devices, specialty chemicals, eco-packaging, electronics, renewable energy, and EV components.',
    categories: [
  "Pharmaceuticals",
  "Medical Devices",
  "Diagnostic & Hospital Equipment",
  "Surgical & Dental Instruments",
  "Orthopaedic Products",
  "Medicines (Generic & Ayurvedic)",
  "Industrial & Specialty Chemicals",
  "Agro & Construction Chemicals",
  "Water Treatment Chemicals",
  "Health & Recreation Products",
],
    highlights: ['Pharmaceuticals', 'Medical Devices', 'Chemicals', 'Packaging', 'Electronics', 'Renewable Energy', 'EV Components'],
  },
  {
    id: 'export-services-startup',
    slug: 'export-services-startup',
    name: 'Exim Services & Startup Pavilion',
    icon: Rocket,
    hall: 'Hall 6',
    image: '/images/zone-startup.png',
    short: 'Freight forwarders, CHAs, shipping lines, EXIM banks, ECGC, AI & SaaS, and startups.',
    description:
      'The core trade enablement ecosystem — custom house agents, shipping lines, trade finance, export compliance, digital marketing agencies, AI/SaaS solutions, and emerging export startups.',
    categories: [
      'Freight Forwarders',
      'CHAs',
      'Shipping Lines',
      'Banks',
      'ECGC',
      'Export Consultants',
      'Digital Marketing Agencies',
      'AI & SaaS',
      'Packaging Companies',
      'Inspection Agencies',
      'Certification Bodies',
      
    ],
    highlights: ['Freight Forwarders', 'CHAs', 'Shipping Lines', 'Banks', 'Export Consultants', 'AI & SaaS', 'Startup Pavilion'],
  },
]

export type NavItem = {
  label: string
  href: string
  action?: 'exhibitor' | 'buyer-seller' | 'visitor'
}

export const PRIMARY_NAV: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Event', href: '/event' },
  { label: 'Exhibit', href: '/exhibit' },
  { label: 'Exhibitor', href: '/exhibitor' },
  { label: 'Buyer Seller Meet', href: '/buyer-seller-meet', action: 'buyer-seller' },
  { label: 'Visitor Registration', href: '/visitor-registration', action: 'visitor' },
]

export const EXHIBIT_MENU = {
  columns: [
    {
      title: 'Exhibit',
      links: [
        { label: 'Exhibit Overview', href: '/exhibit' },
        { label: 'Plan Your Expo', href: '/exhibit#plan' },
        { label: 'Sponsorship', href: '/exhibit#sponsorship' },
      ],
    },
    {
      title: 'Gallery',
      links: [
        { label: 'Photo Gallery', href: '/exhibit#gallery' },
        { label: 'Video Highlights', href: '/exhibit#gallery' },
        { label: 'Past Editions', href: '/exhibit#gallery' },
      ],
    },
  ],
  zones: ZONES.map((z) => ({ label: z.name, href: `/exhibit#zone-${z.slug}` })),
}

export type ExhibitorCategory =
  | 'Agriculture, Food & FMCG'
  | 'Consumer Goods & Lifestyle'
  | 'Manufacturing & Industrial'
  | 'Textile, Fashion & Personal Care'
  | 'Healthcare, Chemicals & Emerging Products'
  | 'Export Services & Startup Pavilion'

export type Exhibitor = {
  id: string
  name: string
  category: ExhibitorCategory
  booth: string
  description: string
  color: string
}

export const EXHIBITOR_CATEGORIES: ExhibitorCategory[] = [
  'Agriculture, Food & FMCG',
  'Consumer Goods & Lifestyle',
  'Manufacturing & Industrial',
  'Textile, Fashion & Personal Care',
  'Healthcare, Chemicals & Emerging Products',
  'Export Services & Startup Pavilion',
]

export const EXHIBITORS: Exhibitor[] = [
  { id: 'e1', name: 'AgriExport Organics', category: 'Agriculture, Food & FMCG', booth: 'A-12', description: 'Certified organic spices, processed foods, and fresh produce exporters.', color: 'oklch(0.55 0.18 265)' },
  { id: 'e2', name: 'SpiceRealm Exim', category: 'Agriculture, Food & FMCG', booth: 'A-08', description: 'Premium Indian spices, tea, and specialty beverages for global markets.', color: 'oklch(0.6 0.16 200)' },
  { id: 'e3', name: 'IndusDecor & Crafts', category: 'Consumer Goods & Lifestyle', booth: 'B-21', description: 'Handcrafted home decor, sustainable kitchenware, and lifestyle goods.', color: 'oklch(0.62 0.17 160)' },
  { id: 'e4', name: 'GlobalToys & Gifts', category: 'Consumer Goods & Lifestyle', booth: 'B-14', description: 'Eco-friendly toys, handcrafted gifts, and premium stationery products.', color: 'oklch(0.58 0.2 300)' },
  { id: 'e5', name: 'Precision Engineering Ltd', category: 'Manufacturing & Industrial', booth: 'C-05', description: 'Automotive components, industrial supplies, and precision machinery.', color: 'oklch(0.6 0.15 85)' },
  { id: 'e6', name: 'Apex Industrial Gears', category: 'Manufacturing & Industrial', booth: 'C-11', description: 'Heavy industrial equipment, electrical control panels, and gearboxes.', color: 'oklch(0.55 0.19 25)' },
  { id: 'e7', name: 'Vedic Threads & Fabrics', category: 'Textile, Fashion & Personal Care', booth: 'D-03', description: 'Sustainable cotton fabrics, luxury garments, and organic apparel.', color: 'oklch(0.52 0.18 275)' },
  { id: 'e8', name: 'Royal Leather & Craft', category: 'Textile, Fashion & Personal Care', booth: 'D-09', description: 'Fine leather goods, export footwear, and handcrafted jewellery.', color: 'oklch(0.6 0.14 220)' },
  { id: 'e9', name: 'BioPharma India', category: 'Healthcare, Chemicals & Emerging Products', booth: 'E-02', description: 'Active pharmaceutical ingredients, medical devices, and specialty chemicals.', color: 'oklch(0.63 0.16 145)' },
  { id: 'e10', name: 'SunGreen Renewable', category: 'Healthcare, Chemicals & Emerging Products', booth: 'E-06', description: 'Solar energy solutions, EV battery components, and eco-packaging.', color: 'oklch(0.5 0.21 320)' },
  { id: 'e11', name: 'Oceanic Freight Systems', category: 'Export Services & Startup Pavilion', booth: 'F-01', description: 'Global freight forwarders, CHA customs clearance, and shipping logistics.', color: 'oklch(0.58 0.18 190)' },
  { id: 'e12', name: 'TradeAI SaaS Technologies', category: 'Export Services & Startup Pavilion', booth: 'F-10', description: 'AI-driven export lead generation, digital marketing, and trade compliance platform.', color: 'oklch(0.55 0.2 290)' },
]

export type Session = {
  time: string
  title: string
  speaker: string
  role: string
  hall: string
  track: string
}

export type AgendaDay = {
  id: string
  label: string
  date: string
  theme: string
  sessions: Session[]
}

export const AGENDA: AgendaDay[] = [
  {
    id: 'day1',
    label: 'Day 1 — Start',
    date: 'I WANT TO EXPORT',
    theme: 'Product → Market → Buyer → Pricing → Order',

    sessions: [
      {
        time: '10:00 – 10:20',
        title: 'Opening Ceremony',
        speaker: 'DoExim',
        role: 'Welcome, DoExim vision & summit objectives',
        hall: 'Main Stage',
        track: 'Opening',
      },
      {
        time: '10:20 – 10:50',
        title: '🚀 DOEXIM.COM DIGITAL PLATFORM LAUNCH',
        speaker: 'DoExim Team',
        role: 'Digital EXIM ecosystem, buyers, suppliers, services, networking & marketplace',
        hall: 'Main Stage',
        track: 'Platform',
      },
      {
        time: '10:50 – 11:35',
        title: 'EXIM ZERO TO HERO',
        speaker: 'Export Experts',
        role: 'Complete export journey explained from scratch',
        hall: 'Knowledge Summit',
        track: 'Export Basics',
      },
      // {
      //   time: '11:35 – 11:50',
      //   title: '☕ Networking Break',
      //   speaker: 'All Delegates',
      //   role: 'Networking & refreshments',
      //   hall: 'Networking Lounge',
      //   track: 'Networking',
      // },
      {
        time: '11:50 – 12:35',
        title: 'How to Start Exporting from India',
        speaker: 'Export Consultants',
        role: 'IEC, GST, bank account, AD Code, RCMC, registrations',
        hall: 'Knowledge Summit',
        track: 'Export Basics',
      },
      {
        time: '12:35 – 13:20',
        title: 'How to Select the Right Export Product & Market',
        speaker: 'Trade & Market Experts',
        role: 'Product research, demand, HS codes, competition, country selection',
        hall: 'Knowledge Summit',
        track: 'Market Research',
      },
      // {
      //   time: '13:20 – 14:00',
      //   title: '🍴 Lunch + EXIM Networking',
      //   speaker: 'All Delegates',
      //   role: 'Buyer/supplier networking',
      //   hall: 'Networking Lounge',
      //   track: 'Networking',
      // },
      {
        time: '14:00 – 14:45',
        title: 'Finding International Buyers',
        speaker: 'Trade Facilitation Experts',
        role: 'B2B platforms, trade fairs, LinkedIn, distributors, agents & digital prospecting',
        hall: 'Knowledge Summit',
        track: 'Buyers',
      },
      {
        time: '14:45 – 15:30',
        title: 'Export Pricing Masterclass',
        speaker: 'Export Pricing Experts',
        role: 'FOB, CIF, CFR, EXW, freight, insurance, duties & profit margins',
        hall: 'Knowledge Summit',
        track: 'Pricing',
      },
      // {
      //   time: '15:30 – 15:45',
      //   title: '☕ Break',
      //   speaker: 'All Delegates',
      //   role: 'Networking & refreshments',
      //   hall: 'Networking Lounge',
      //   track: 'Networking',
      // },
      {
        time: '15:45 – 16:30',
        title: 'INCOTERMS Made Simple',
        speaker: 'International Trade Experts',
        role: 'Who pays? Who bears risk? Where does responsibility transfer?',
        hall: 'Knowledge Summit',
        track: 'Trade Terms',
      },
      {
        time: '16:30 – 17:15',
        title: 'LIVE CASE STUDY: First Export Order',
        speaker: 'Successful Exporter',
        role: 'Buyer enquiry → quotation → PI → payment → production → shipment',
        hall: 'Knowledge Summit',
        track: 'Case Study',
      },
      {
        time: '17:15 – 18:00',
        title: '🎤 EXPERT Q&A — Ask Anything About Starting Exports',
        speaker: 'Export Experts Panel',
        role: 'Open audience interaction',
        hall: 'Main Stage',
        track: 'Q&A',
      },
    ],
  },

  {
    id: 'day2',
    label: 'Day 2 — Execute',
    date: 'I HAVE AN ORDER',
    theme: 'Documentation → Banking → CHA → Freight → Customs → Shipment',

    sessions: [
      {
        time: '10:00 – 10:15',
        title: 'Day 1 Recap',
        speaker: 'DoExim Team',
        role: 'Key learnings',
        hall: 'Knowledge Summit',
        track: 'Recap',
      },
      {
        time: '10:15 – 11:00',
        title: '🇮🇳 GOVERNMENT POLICIES & EXPORT BENEFITS',
        speaker: 'DGFT & Government Officials',
        role: 'DGFT framework, export policy, incentives & important schemes',
        hall: 'Knowledge Summit',
        track: 'Policy',
      },
      {
        time: '11:00 – 11:45',
        title: 'Export Promotion Councils & RCMC',
        speaker: 'Export Promotion Council Representatives',
        role: 'Choosing the right council, registration & benefits',
        hall: 'Knowledge Summit',
        track: 'Policy',
      },
      // {
      //   time: '11:45 – 12:00',
      //   title: '☕ Break',
      //   speaker: 'All Delegates',
      //   role: 'Networking & refreshments',
      //   hall: 'Networking Lounge',
      //   track: 'Networking',
      // },
      {
        time: '12:00 – 12:45',
        title: 'EXPORT DOCUMENTATION MASTERCLASS',
        speaker: 'Trade Documentation Experts',
        role: 'Invoice, packing list, shipping bill, BL/AWB, COO & certificates',
        hall: 'Knowledge Summit',
        track: 'Documentation',
      },
      {
        time: '12:45 – 13:30',
        title: '🏦 Banking & Export Payments',
        speaker: 'Banking & Export Finance Experts',
        role: 'Advance, LC, DP, DA, forex & working capital',
        hall: 'Knowledge Summit',
        track: 'Banking',
      },
      // {
      //   time: '13:30 – 14:10',
      //   title: '🍴 Lunch + Networking',
      //   speaker: 'All Delegates',
      //   role: 'Buyer/supplier networking',
      //   hall: 'Networking Lounge',
      //   track: 'Networking',
      // },
      {
        time: '14:10 – 14:55',
        title: '🚢 CHA / CUSTOMS BROKER MASTERCLASS',
        speaker: 'CHA & Customs Experts',
        role: 'Customs clearance, documentation, examination, duties & common errors',
        hall: 'Knowledge Summit',
        track: 'Customs',
      },
      {
        time: '14:55 – 15:40',
        title: '🚛 FREIGHT FORWARDER MASTERCLASS',
        speaker: 'Freight Forwarding Experts',
        role: 'Freight booking, shipping lines, FCL/LCL, routing & freight negotiation',
        hall: 'Knowledge Summit',
        track: 'Logistics',
      },
      // {
      //   time: '15:40 – 15:55',
      //   title: '☕ Break',
      //   speaker: 'All Delegates',
      //   role: 'Networking & refreshments',
      //   hall: 'Networking Lounge',
      //   track: 'Networking',
      // },
      {
        time: '15:55 – 16:40',
        title: 'FACTORY TO FOREIGN PORT',
        speaker: 'Logistics & Export Experts',
        role: 'Live shipment journey: Factory → Transporter → CFS/ICD → Customs → Port → Vessel',
        hall: 'Knowledge Summit',
        track: 'Shipment',
      },
      {
        time: '16:40 – 17:20',
        title: '⚠️ 25 Costly Export Mistakes',
        speaker: 'Export Compliance Experts',
        role: 'Documentation, customs, freight, payment & compliance mistakes',
        hall: 'Knowledge Summit',
        track: 'Compliance',
      },
      {
        time: '17:20 – 18:00',
        title: '🔥 THE COMPLETE EXPORT JOURNEY — EXPERT PANEL',
        speaker: 'Exporter + Bank + CHA + Freight Forwarder + Customs + Logistics',
        role: 'Complete shipment journey explained by six industry experts',
        hall: 'Main Stage',
        track: 'Expert Panel',
      },
    ],
  },

  {
    id: 'day3',
    label: 'Day 3 — Scale',
    date: 'I WANT TO GO GLOBAL',
    theme: 'Buyers → Digital Marketing → Risk Protection → E-commerce → Distribution → Global Expansion',

    sessions: [
      {
        time: '10:00 – 10:15',
        title: 'EXIM Market Update',
        speaker: 'Trade Market Experts',
        role: 'Opportunities & emerging markets',
        hall: 'Knowledge Summit',
        track: 'Market Update',
      },
      {
        time: '10:15 – 11:00',
        title: '🌎 FIND & VERIFY INTERNATIONAL BUYERS',
        speaker: 'Trade Facilitation Experts',
        role: 'Buyer identification, verification & due diligence',
        hall: 'Knowledge Summit',
        track: 'Buyers',
      },
      {
        time: '11:00 – 11:45',
        title: 'TOP EXPORT MARKETS FROM INDIA',
        speaker: 'International Market Experts',
        role: 'Country selection, demand & market-entry strategy',
        hall: 'Knowledge Summit',
        track: 'Markets',
      },
      // {
      //   time: '11:45 – 12:00',
      //   title: '☕ Break',
      //   speaker: 'All Delegates',
      //   role: 'Networking & refreshments',
      //   hall: 'Networking Lounge',
      //   track: 'Networking',
      // },
      {
        time: '12:00 – 12:45',
        title: '💻 DIGITAL EXPORT MARKETING',
        speaker: 'Digital Export Marketing Experts',
        role: 'Google, SEO, LinkedIn, social media, B2B platforms & WhatsApp',
        hall: 'Knowledge Summit',
        track: 'Marketing',
      },
      {
        time: '12:45 – 13:30',
        title: '🚀 DOEXIM.COM — YOUR DIGITAL EXIM GROWTH ENGINE',
        speaker: 'DoExim Team',
        role: 'Buyer discovery, supplier discovery, enquiries, digital catalogue & networking',
        hall: 'Knowledge Summit',
        track: 'Platform',
      },
      // {
      //   time: '13:30 – 14:10',
      //   title: '🍴 Lunch + Buyer Networking',
      //   speaker: 'All Delegates',
      //   role: 'Buyer, supplier & investor networking',
      //   hall: 'Networking Lounge',
      //   track: 'Networking',
      // },
      {
        time: '14:10 – 14:55',
        title: '💰 GET PAID SAFELY',
        speaker: 'International Payments Experts',
        role: 'Payment risk, LC, buyer credit & fraud prevention',
        hall: 'Knowledge Summit',
        track: 'Payments',
      },
      {
        time: '14:55 – 15:40',
        title: '🛡️ ECGC & EXPORT CREDIT PROTECTION',
        speaker: 'ECGC Representatives',
        role: 'Credit insurance & managing overseas buyer risk',
        hall: 'Knowledge Summit',
        track: 'Risk Protection',
      },
      // {
      //   time: '15:40 – 15:55',
      //   title: '☕ Break',
      //   speaker: 'All Delegates',
      //   role: 'Networking & refreshments',
      //   hall: 'Networking Lounge',
      //   track: 'Networking',
      // },
      {
        time: '15:55 – 16:40',
        title: '🛒 E-COMMERCE & CROSS-BORDER EXPORTS',
        speaker: 'E-commerce & Cross-Border Trade Experts',
        role: 'D2C, marketplaces, small shipments & new-age exporters',
        hall: 'Knowledge Summit',
        track: 'E-commerce',
      },
      {
        time: '16:40 – 17:20',
        title: '🏆 EXPORT SUCCESS STORIES',
        speaker: 'Successful Indian Exporters',
        role: 'Real Indian exporters: challenges → strategy → international growth',
        hall: 'Knowledge Summit',
        track: 'Success Stories',
      },
      {
        time: '17:20 – 17:50',
        title: 'GLOBAL SCALE-UP MASTERCLASS',
        speaker: 'Global Expansion Experts',
        role: 'Distributor, agent, overseas warehouse, JV & international expansion',
        hall: 'Knowledge Summit',
        track: 'Global Expansion',
      },
      {
        time: '17:50 – 18:00',
        title: '🎯 DOEXIM 90-DAY EXPORT ACTION PLAN',
        speaker: 'DoExim Team',
        role: 'What every attendee should do after the Expo',
        hall: 'Main Stage',
        track: 'Action Plan',
      },
    ],
  },
];

export const COUNTRIES = [
  'India', 'United States', 'United Kingdom', 'Germany', 'Japan', 'China',
  'United Arab Emirates', 'Singapore', 'South Korea', 'Italy', 'France',
  'Australia', 'Canada', 'Other',
]