/** Copy ported verbatim from www.yanta.com.au/services (scraped 2026-07-26). */

export interface ServiceGroup {
  slug: string;
  title: string;
  /** Short blurb used on teaser cards (from the home/about pages). */
  blurb: string;
  items: readonly string[];
  image: string;
}

/**
 * Ported from the old Wix site, which listed these in the /services page metadata.
 * NOTE: AS4801 was superseded by ISO 45001 (transition closed 2021) — confirm with
 * Ian whether the current certificate is AS4801 or ISO 45001 before tender use.
 */
export const certifications = [
  { standard: 'ISO 9001', label: 'Quality Management' },
  { standard: 'ISO 14001', label: 'Environmental Management' },
  { standard: 'AS 4801', label: 'Occupational Health & Safety' },
] as const;

export const peopleStatement =
  'What sets us apart is more than technical capability — it’s our people. Backed by decades of experience, our dedicated workforce brings innovation, reliability, and unmatched workmanship to every site. Supported by strong project management, HSE systems, and logistics, we mobilise quickly and deliver seamlessly.';

export const servicesIntro = {
  kicker: 'Services',
  heading: 'Your Project, Our Knowledge',
  lead: 'Poly welding, HDPE piping, mining and civil construction services in Rockhampton and Central Queensland. Based in Rockhampton, Yanta is a trusted engineering and construction partner delivering expert poly welding, HDPE pipe installation, geosynthetic lining, mining services, civil construction and industrial infrastructure solutions across Central Queensland, Queensland and Australia.',
  lead2:
    'With more than 30 years of industry experience, our team provides safe, reliable and compliant project delivery for mining, pipeline, water and infrastructure projects. Whether you need poly welding in Rockhampton, HDPE pipe welding, civil construction or specialised industrial services, Yanta has the expertise and capability to mobilise quickly and deliver quality outcomes every time.',
} as const;

export const services: readonly ServiceGroup[] = [
  {
    slug: 'water-management',
    title: 'Water Management Systems',
    blurb: 'Pump installation, dewatering and water infrastructure for mine and industrial sites.',
    items: [
      'Return water pump installation and commissioning',
      'Flow meter and valve installations',
      'Pit dewatering services',
      'Water infrastructure installations',
      'Return water pump rebuilds, repairs and replacement',
    ],
    image: 'pit-pump-close',
  },
  {
    slug: 'tailings-management',
    title: 'Tailings Management Solutions',
    blurb: 'Comprehensive tailings dam construction, lining, and piping for safe operations.',
    items: [
      'Tailings pump station installation and commissioning',
      'Tailings pipework removal, relocation and reinstallation',
      'HDPE pipework procurement and installation',
      'Tailings distribution piping and valve installation',
      'Seepage sump pump installation',
      'BGM and HDPE liner installation',
    ],
    image: 'liner-sandbags',
  },
  {
    slug: 'plant-installation',
    title: 'Plant Installation & Maintenance',
    blurb: 'Expert solutions for equipment, piping, and structural installations, ensuring smooth operations.',
    items: [
      'Vertical mill installation and commissioning',
      'Structural modifications and steelwork',
      'Civil works and excavation',
      'Piping and valve installation (steel & HDPE)',
      'Equipment commissioning',
    ],
    image: 'weld-pipeline',
  },
  {
    slug: 'civil-structural',
    title: 'Civil & Structural Services',
    blurb: 'Delivering excavation, infrastructure, and steelwork with precision, safety, and reliability.',
    items: [
      'Excavation and civil works for industrial projects',
      'Structural installations and modifications',
      'Dam lifts and related civil infrastructure',
    ],
    image: 'concrete-pour',
  },
  {
    slug: 'procurement',
    title: 'Procurement & Project Management',
    blurb: 'Procurement, QA and mobilisation managed end to end, from tender to practical completion.',
    items: [
      'Procurement of pipes, pumps, valves and steel spools',
      'QA management, testing, package compilation and submission',
      'Comprehensive project mobilisation and logistics management',
    ],
    image: 'pipe-unload',
  },
];
