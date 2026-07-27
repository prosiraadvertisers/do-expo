import {
  Bot,
  ScanEye,
  ShieldCheck,
  Cog,
  Rocket,
  type LucideIcon,
} from 'lucide-react'

export const EVENT = {
  name: 'DoExim Global Trade Expo 2027',
  organizer: 'Doeximexpo',
  tagline: 'Exporting India to the World \u2014 Vision 2030',
  startISO: '2027-04-21T09:00:00+05:30',
  dateLabel: '21\u201323 April 2027',
  venue: 'Bombay Exhibition Centre, Mumbai, India',
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
    description: 'The Buyer Seller Meeting Zone \u2014 curated, pre-scheduled B2B meetings between exporters and international buyers.',
  },
  {
    name: 'Media Center & Product Launch Lounge',
    description: 'A dedicated space for press interactions, product launches and DoExim partner announcements.',
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
    title: 'DoExim Digital Platform Experience Centre',
    description: 'Hands-on with the DoExim.com platform:',
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
  slug: string
  name: string
  icon: LucideIcon
  hall: string
  image: string
  short: string
  description: string
  highlights: string[]
}

export const ZONES: Zone[] = [
  {
    slug: 'robotics',
    name: 'Robotics Zone',
    icon: Bot,
    hall: 'Hall 1',
    image: '/images/zone-robotics.png',
    short: 'Industrial robots, cobots and autonomous mobile systems.',
    description:
      'Experience the cutting edge of industrial and collaborative robotics — from six-axis arms and SCARA systems to autonomous mobile robots transforming logistics and manufacturing.',
    highlights: ['6-axis & SCARA robots', 'Collaborative cobots', 'AMRs & AGVs', 'Robotic welding'],
  },
  {
    slug: 'machine-vision',
    name: 'Machine Vision Zone',
    icon: ScanEye,
    hall: 'Hall 2',
    image: '/images/zone-vision.png',
    short: 'Smart cameras, sensors and AI-powered vision systems.',
    description:
      'Discover AI-driven vision systems, smart cameras and 3D sensors that power defect detection, guidance and traceability across modern production lines.',
    highlights: ['AI defect detection', '3D vision & sensors', 'Barcode & OCR', 'Vision-guided robotics'],
  },
  {
    slug: 'quality-inspection',
    name: 'Quality Inspection Zone',
    icon: ShieldCheck,
    hall: 'Hall 2',
    image: '/images/zone-inspection.png',
    short: 'Metrology, testing and in-line quality assurance.',
    description:
      'Precision metrology, non-destructive testing and in-line inspection technologies that guarantee zero-defect manufacturing and full compliance.',
    highlights: ['CMM & metrology', 'Non-destructive testing', 'In-line QA', 'Digital calibration'],
  },
  {
    slug: 'assembly-automation',
    name: 'Assembly Automation Zone',
    icon: Cog,
    hall: 'Hall 3',
    image: '/images/zone-assembly.png',
    short: 'Automated assembly, conveyors and end-of-line systems.',
    description:
      'End-to-end assembly automation — pick-and-place, conveyors, fastening, dispensing and packaging solutions that maximise throughput and uptime.',
    highlights: ['Pick & place', 'Conveyor systems', 'Fastening & dispensing', 'End-of-line packaging'],
  },
  {
    slug: 'innovation-startup',
    name: 'Innovation & Startup Zone',
    icon: Rocket,
    hall: 'Hall 4',
    image: '/images/zone-startup.png',
    short: 'Emerging tech, deep-tech startups and live demos.',
    description:
      'Meet the disruptors — deep-tech startups, university spin-offs and R&D labs showcasing tomorrow\u2019s automation breakthroughs and pitching live on stage.',
    highlights: ['Startup pavilion', 'Live pitch stage', 'Deep-tech demos', 'Investor connect'],
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
  { label: 'Free Visitor Registration', href: '/free-visitor-registration', action: 'visitor' },
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
  | 'Robotics'
  | 'Machine Vision'
  | 'Quality Inspection'
  | 'Assembly Automation'
  | 'Innovation'

export type Exhibitor = {
  id: string
  name: string
  category: ExhibitorCategory
  booth: string
  description: string
  color: string
}

export const EXHIBITOR_CATEGORIES: ExhibitorCategory[] = [
  'Robotics',
  'Machine Vision',
  'Quality Inspection',
  'Assembly Automation',
  'Innovation',
]

export const EXHIBITORS: Exhibitor[] = [
  { id: 'e1', name: 'AxisRobo', category: 'Robotics', booth: 'A-12', description: 'Six-axis industrial robots and turnkey robotic welding cells for heavy manufacturing.', color: 'oklch(0.55 0.18 265)' },
  { id: 'e2', name: 'CoboWorks', category: 'Robotics', booth: 'A-08', description: 'Collaborative cobots designed for safe human-robot assembly and machine tending.', color: 'oklch(0.6 0.16 200)' },
  { id: 'e3', name: 'NovaVision', category: 'Machine Vision', booth: 'B-21', description: 'AI-powered smart cameras for high-speed defect detection and traceability.', color: 'oklch(0.62 0.17 160)' },
  { id: 'e4', name: 'OptiScan', category: 'Machine Vision', booth: 'B-14', description: '3D sensors and vision-guided robotics for precision pick-and-place.', color: 'oklch(0.58 0.2 300)' },
  { id: 'e5', name: 'PrecisionMetric', category: 'Quality Inspection', booth: 'C-05', description: 'Coordinate measuring machines and digital metrology suites.', color: 'oklch(0.6 0.15 85)' },
  { id: 'e6', name: 'InspectPro', category: 'Quality Inspection', booth: 'C-11', description: 'In-line quality assurance and non-destructive testing platforms.', color: 'oklch(0.55 0.19 25)' },
  { id: 'e7', name: 'AssembleX', category: 'Assembly Automation', booth: 'D-03', description: 'Modular assembly lines with fastening, dispensing and packaging automation.', color: 'oklch(0.52 0.18 275)' },
  { id: 'e8', name: 'ConveyoTech', category: 'Assembly Automation', booth: 'D-09', description: 'Smart conveyor and material-handling systems for continuous production.', color: 'oklch(0.6 0.14 220)' },
  { id: 'e9', name: 'FlexLine', category: 'Assembly Automation', booth: 'D-17', description: 'Flexible end-of-line automation and palletising robots.', color: 'oklch(0.63 0.16 145)' },
  { id: 'e10', name: 'DeepMotion', category: 'Innovation', booth: 'E-02', description: 'Deep-tech startup building AI motion planning for autonomous machines.', color: 'oklch(0.5 0.21 320)' },
  { id: 'e11', name: 'SenseGrid', category: 'Innovation', booth: 'E-06', description: 'IIoT sensor mesh and predictive-maintenance analytics.', color: 'oklch(0.58 0.18 190)' },
  { id: 'e12', name: 'ForgeAI', category: 'Innovation', booth: 'E-10', description: 'Generative design and digital-twin software for smart factories.', color: 'oklch(0.55 0.2 290)' },
  { id: 'e13', name: 'RoboArm Systems', category: 'Robotics', booth: 'A-19', description: 'Payload-optimised robotic arms for automotive assembly.', color: 'oklch(0.57 0.17 255)' },
  { id: 'e14', name: 'VisionEdge', category: 'Machine Vision', booth: 'B-27', description: 'Edge-AI inspection cameras with on-device inference.', color: 'oklch(0.6 0.16 175)' },
  { id: 'e15', name: 'MetroLab', category: 'Quality Inspection', booth: 'C-18', description: 'Laser scanning and reverse-engineering metrology services.', color: 'oklch(0.62 0.14 95)' },
  { id: 'e16', name: 'PackMate', category: 'Assembly Automation', booth: 'D-22', description: 'Robotic packaging and case-erecting solutions.', color: 'oklch(0.54 0.17 310)' },
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
      { time: '10:30 \u2013 11:30', title: 'Grand Inauguration', speaker: 'Chief Minister of Maharashtra, Union Minister of Commerce & Industry, DGFT, APEDA Chairman, FIEO President & International Ambassadors', role: 'Lighting of Lamp \u00b7 National Anthem \u00b7 Launch of DoExim.com', hall: 'Main Stage', track: 'Keynote' },
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
      { time: '10:45 \u2013 11:45', title: 'Digital Export Marketing', speaker: 'DoExim Team', role: 'Export Branding, International SEO, CRM Automation', hall: 'Knowledge Summit', track: 'Marketing' },
      { time: '12:00 \u2013 13:00', title: 'Export Success Stories', speaker: '10 Successful Exporters', role: 'First Export Order, Challenges, Scaling Globally', hall: 'Knowledge Summit', track: 'Panel' },
      { time: '13:30 \u2013 14:30', title: 'Investor & Startup Pitch', speaker: 'Venture Capital \u00b7 Banks \u00b7 Export Investors \u00b7 Govt Incubators', role: 'Live Pitch Session', hall: 'Business Matchmaking Lounge', track: 'Investment' },
      { time: '15:00 \u2013 16:15', title: 'Closing Ceremony', speaker: 'DoExim Committee', role: 'Export Excellence Awards, Innovation Awards, Partnership Announcements', hall: 'Main Stage', track: 'Keynote' },
    ],
  },
]

export const COUNTRIES = [
  'India', 'United States', 'United Kingdom', 'Germany', 'Japan', 'China',
  'United Arab Emirates', 'Singapore', 'South Korea', 'Italy', 'France',
  'Australia', 'Canada', 'Other',
]