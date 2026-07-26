/** Equipment listings ported verbatim from www.yanta.com.au/equipment (scraped 2026-07-26). */

export interface Machine {
  name: string;
  type: string;
  /** Basename in src/assets/img/site — listing/detail photo */
  image?: string;
  /** Machines with a detail page */
  slug?: string;
  detailTitle?: string;
  detail?: string;
  /** Search-result description, kept under 160 chars. `detail` is too long to reuse. */
  metaDescription?: string;
}

export const equipmentIntro = {
  kicker: 'Equipment',
  heading: 'Our Equipment for Hire',
  lead: 'At Yanta, we offer a wide range of high-quality equipment for hire, perfect for construction, landscaping, and industrial projects of any scale. Our reliable, well-maintained machinery is designed for maximum efficiency, safety, and ease of use. With flexible hire options, competitive pricing, and expert guidance, we make it simple to get the right equipment quickly and conveniently, exactly when and where you need it.',
  hireEmail: 'hire@yanta.com.au',
} as const;

export const equipment: readonly Machine[] = [
  {
    name: 'Tecnodue Bushranger 630',
    type: 'Poly welder',
    image: 'equip-bushranger-630',
    slug: 'bushranger-630',
    detailTitle: 'The Tecnodue Bushranger 630',
    detail: 'High pressure tracked poly welding machine capable of pipe sizes ranging from 315mm up to 630mm in diameter. Semi-automatic machine making for a safer, more productive operation.',
    metaDescription:
      'Tecnodue Bushranger 630 for hire — high pressure tracked butt fusion poly welder, 315mm to 630mm, semi-automatic. Rockhampton and Central Queensland.',
  },
  {
    name: 'Hitachi ZX225USLC-5B Excavator 25T',
    type: 'Excavator',
    image: 'equip-excavator-25t',
    slug: 'excavator-25t',
    detailTitle: 'Excavator — 25T',
    detail: 'A zero-swing machine with tilt-hitch. Outstanding comfort and reliability.',
    metaDescription:
      'Hitachi ZX225USLC-5B 25 tonne excavator for hire — zero-swing with tilt-hitch, outstanding comfort and reliability. Rockhampton and Central Queensland.',
  },
  {
    name: 'Hitachi ZW180-5 PL Loader — Integrated Tool Carrier',
    type: 'Loader — integrated tool carrier',
    image: 'equip-zw180-loader',
    slug: 'zw180-loader',
    detailTitle: 'ZW180 Loader',
    detail: 'A mid-sized, versatile wheel loader from Hitachi’s ZW series. It’s well suited for construction, infrastructure, mining support, and general loading work where strength, reliability, and fuel efficiency are needed. Its design balances power with operator comfort and maintenance access, making it a solid choice for contractors who need a responsive, durable loader without stepping up to the largest classes.',
    metaDescription:
      'Hitachi ZW180-5 PL wheel loader for hire — mid-sized integrated tool carrier for construction, infrastructure, mining support and general loading work.',
  },
  {
    name: 'Kubota Posi Track SVL75-3CHRW',
    type: 'Posi track',
    image: 'equip-kubota-posi-track',
    slug: 'kubota-posi-track',
    detailTitle: 'Kubota Posi-Track',
    detail: 'Engineered to handle the toughest jobs in the harshest of conditions with safety and reliability.',
    metaDescription:
      'Kubota Posi-Track SVL75-3CHRW for hire — engineered to handle the toughest jobs in the harshest conditions with safety and reliability.',
  },
  {
    name: 'Wacker Neuson DPU6555H Compactor',
    type: 'Compactor',
    image: 'equip-dpu6555',
    slug: 'dpu6555',
    detailTitle: 'DPU6555',
    detail: 'A medium-weight reversible vibratory plate compactor made by Wacker Neuson, built for heavy duty compaction tasks. It’s used in road works, subbases, paving, and similar applications where you need high performance, durability, and operator comfort. It features forward and reverse travel, high compaction force, good ground coverage, and rugged components.',
    metaDescription:
      'Wacker Neuson DPU6555H reversible vibratory plate compactor for hire — heavy duty compaction for road works, subbases and paving.',
  },
  { name: 'Hitachi ZX55U-5 Excavator 5T', type: 'Excavator' },
  { name: 'Hitachi ZX135US-7 Excavator 13T', type: 'Excavator' },
  { name: 'Hitachi ZX360LC-5B Excavator 36T', type: 'Excavator' },
  { name: 'Merlo P72.10 Telehandler', type: 'Telehandler' },
  { name: 'Iveco S-Way 3 Axle Rigid 6x4', type: 'Flattop truck' },
  { name: 'Iveco S-Way 3 Axle Rigid 6x4 Tipper', type: 'Tipper truck' },
  { name: 'Hyundai Flat Top Truck', type: 'Truck' },
  { name: 'Rammer 1322E', type: 'Rock breaker' },
];

export const featuredEquipment = equipment.filter((m) => m.slug);
