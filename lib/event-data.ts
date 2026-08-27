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
  venue: 'Bombay Exhibition Centre, Nesco Mumbai, India',
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
    label: 'Day 1',
    date: 'Wed, 21 April 2027',
    theme: "India's Export Vision & Starting Your Export Journey",
    sessions: [
      { time: '09:30 \u2013 10:15', title: 'Registration', speaker: 'All Delegates', role: 'Check-in', hall: 'Main Foyer', track: 'Registration' },
      { time: '10:30 \u2013 11:30', title: 'Grand Inauguration', speaker: 'Chief Minister of Maharashtra, Union Minister of Commerce & Industry, DGFT, APEDA Chairman, FIEO President & International Ambassadors', role: 'Lighting of Lamp \u00b7 National Anthem \u00b7 Launch of doexim.com', hall: 'Main Stage', track: 'Keynote' },
      { time: '11:45 \u2013 12:45', title: "India's Export Vision 2030", speaker: 'Government of India Speakers', role: 'Export Promotion Mission, Districts as Export Hubs, Make in India, ODOP', hall: 'Knowledge Summit', track: 'Keynote' },
      { time: '13:45 \u2013 14:45', title: 'Why Every MSME Should Export', speaker: 'Industry Experts', role: 'Domestic vs Export Business, Global Demand, Success Stories', hall: 'Knowledge Summit', track: 'MSME' },
      { time: '15:00 \u2013 16:00', title: 'Government Schemes Every Exporter Must Know', speaker: 'DGFT Officials', role: 'RoDTEP, Duty Drawback, EPCG, Advance Authorization', hall: 'Knowledge Summit', track: 'Policy' },
      { time: '16:15 \u2013 17:15', title: 'Role of FIEO', speaker: 'FIEO Representatives', role: 'Membership, RCMC, Trade Fairs, Certificate of Origin', hall: 'Knowledge Summit', track: 'Policy' },
      { time: '17:30 \u2013 18:30', title: 'APEDA Masterclass', speaker: 'APEDA Officials', role: 'Registration, Quality Certification, Export Subsidies', hall: 'Knowledge Summit', track: 'Policy' },
    ],
  },
  {
    id: 'day2',
    label: 'Day 2',
    date: 'Thu, 22 April 2027',
    theme: 'Export Operations Masterclass',
    sessions: [
      { time: '09:30 \u2013 10:30', title: 'Export Documentation Workshop', speaker: 'Trade Documentation Experts', role: 'Live Demonstration \u2014 Invoice, Packing List, Bill of Lading, LC', hall: 'Knowledge Summit', track: 'Documentation' },
      { time: '10:45 \u2013 11:45', title: 'Freight Forwarder Masterclass', speaker: 'CEOs, Leading Freight Companies', role: 'Ocean & Air Freight, LCL/FCL, Multimodal Transport', hall: 'Knowledge Summit', track: 'Logistics' },
      { time: '12:00 \u2013 13:00', title: 'CHA (Custom House Agent) Deep Dive', speaker: 'Exporter \u00b7 CHA \u00b7 Customs Officer', role: 'Panel Discussion \u2014 ICEGATE, HS Code, Customs Clearance', hall: 'Knowledge Summit', track: 'Customs' },
      { time: '14:00 \u2013 15:00', title: 'Banking & International Payments', speaker: 'SBI \u00b7 EXIM Bank \u00b7 ECGC \u00b7 ICICI \u00b7 HDFC', role: 'LC, TT, Forex, ECGC Insurance, Export Finance', hall: 'Knowledge Summit', track: 'Banking' },
      { time: '15:15 \u2013 16:15', title: 'Logistics Technology', speaker: 'Logistics-Tech Providers', role: 'AI in Logistics, Blockchain, RFID, Supply Chain Visibility', hall: 'Knowledge Summit', track: 'Technology' },
    ],
  },
  {
    id: 'day3',
    label: 'Day 3',
    date: 'Fri, 23 April 2027',
    theme: 'Winning Global Markets',
    sessions: [
      { time: '09:30 \u2013 10:30', title: 'How to Find International Buyers', speaker: 'Trade Facilitation Experts', role: 'Market Research, Trade Portals, AI for Lead Generation', hall: 'Knowledge Summit', track: 'Marketing' },
      { time: '10:45 \u2013 11:45', title: 'Digital Export Marketing', speaker: 'doexim Team', role: 'Export Branding, International SEO, CRM B2B global trade', hall: 'Knowledge Summit', track: 'Marketing' },
      { time: '12:00 \u2013 13:00', title: 'Export Success Stories', speaker: '10 Successful Exporters', role: 'First Export Order, Challenges, Scaling Globally', hall: 'Knowledge Summit', track: 'Panel' },
      { time: '13:30 \u2013 14:30', title: 'Investor & Startup Pitch', speaker: 'Venture Capital \u00b7 Banks \u00b7 Export Investors \u00b7 Govt Incubators', role: 'Live Pitch Session', hall: 'Business Matchmaking Lounge', track: 'Investment' },
      { time: '15:00 \u2013 16:15', title: 'Closing Ceremony', speaker: 'doexim Committee', role: 'Export Excellence Awards, Innovation Awards, Partnership Announcements', hall: 'Main Stage', track: 'Keynote' },
    ],
  },
]

export const COUNTRIES = [
  'India', 'United States', 'United Kingdom', 'Germany', 'Japan', 'China',
  'United Arab Emirates', 'Singapore', 'South Korea', 'Italy', 'France',
  'Australia', 'Canada', 'Other',
]