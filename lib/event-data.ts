import {
  Bot,
  ScanEye,
  ShieldCheck,
  Cog,
  Rocket,
  type LucideIcon,
} from 'lucide-react'

export const EVENT = {
  name: 'Automation Expo 2026',
  organizer: 'DOeximexpo',
  tagline: 'Where Industry Meets Innovation',
  startISO: '2027-04-21T09:00:00+05:30',
  dateLabel: '21\u201323 April 2027',
  venue: 'Bombay Exhibition Centre, Mumbai, India',
  venueShort: 'Mumbai, India',
}

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
    date: 'Wed, 18 March 2026',
    theme: 'The Automated Factory',
    sessions: [
      { time: '09:30 \u2013 10:15', title: 'Grand Opening & Ribbon Ceremony', speaker: 'Ministry of Industry', role: 'Chief Guest', hall: 'Main Stage', track: 'Keynote' },
      { time: '10:30 \u2013 11:15', title: 'The State of Industrial Automation in India', speaker: 'Dr. Anjali Rao', role: 'CTO, BharatRobotics', hall: 'Main Stage', track: 'Keynote' },
      { time: '11:30 \u2013 12:30', title: 'Robotics on the Shop Floor: A Live Demo', speaker: 'Vikram Shah', role: 'Head of Automation, AxisRobo', hall: 'Hall 1', track: 'Robotics' },
      { time: '13:30 \u2013 14:30', title: 'Machine Vision for Zero-Defect Manufacturing', speaker: 'Meera Iyer', role: 'VP Engineering, NovaVision', hall: 'Hall 2', track: 'Vision' },
      { time: '15:00 \u2013 16:00', title: 'Panel: Skilling the Automation Workforce', speaker: 'Industry Leaders Panel', role: 'Moderated Session', hall: 'Main Stage', track: 'Panel' },
    ],
  },
  {
    id: 'day2',
    label: 'Day 2',
    date: 'Thu, 19 March 2026',
    theme: 'Intelligence & Inspection',
    sessions: [
      { time: '09:45 \u2013 10:30', title: 'AI at the Edge: Real-Time Quality Control', speaker: 'Rahul Menon', role: 'Founder, VisionEdge', hall: 'Hall 2', track: 'Vision' },
      { time: '10:45 \u2013 11:45', title: 'Cobots & Human-Robot Collaboration', speaker: 'Sara Fernandes', role: 'Product Lead, CoboWorks', hall: 'Hall 1', track: 'Robotics' },
      { time: '12:00 \u2013 13:00', title: 'Metrology Masterclass: Precision at Scale', speaker: 'Dr. Karan Bhatt', role: 'Chief Metrologist, PrecisionMetric', hall: 'Hall 2', track: 'Inspection' },
      { time: '14:00 \u2013 15:30', title: 'Buyer-Seller Deal Room (Curated Meetings)', speaker: 'Matched Delegates', role: 'B2B Networking', hall: 'Deal Room', track: 'Networking' },
      { time: '16:00 \u2013 17:00', title: 'Startup Pitch Battle: Live Finals', speaker: 'Top 10 Startups', role: 'Investor Jury', hall: 'Hall 4', track: 'Innovation' },
    ],
  },
  {
    id: 'day3',
    label: 'Day 3',
    date: 'Fri, 20 March 2026',
    theme: 'Future & Frontier',
    sessions: [
      { time: '10:00 \u2013 11:00', title: 'Digital Twins & the Predictive Factory', speaker: 'Nisha Kapoor', role: 'CEO, ForgeAI', hall: 'Main Stage', track: 'Keynote' },
      { time: '11:15 \u2013 12:15', title: 'Assembly Automation for High-Mix Production', speaker: 'Arjun Nair', role: 'Director, AssembleX', hall: 'Hall 3', track: 'Assembly' },
      { time: '13:00 \u2013 14:00', title: 'Sustainability Through Smart Manufacturing', speaker: 'Panel of Experts', role: 'Moderated Session', hall: 'Main Stage', track: 'Panel' },
      { time: '14:30 \u2013 15:30', title: 'Awards Ceremony & Innovation Honours', speaker: 'DOeximexpo Committee', role: 'Closing', hall: 'Main Stage', track: 'Keynote' },
      { time: '15:30 \u2013 16:00', title: 'Closing Remarks & Networking Toast', speaker: 'DOeximexpo', role: 'Organizer', hall: 'Main Stage', track: 'Keynote' },
    ],
  },
]

export const COUNTRIES = [
  'India', 'United States', 'United Kingdom', 'Germany', 'Japan', 'China',
  'United Arab Emirates', 'Singapore', 'South Korea', 'Italy', 'France',
  'Australia', 'Canada', 'Other',
]
