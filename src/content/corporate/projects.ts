/** Project case studies ported verbatim from www.yanta.com.au project pages (scraped 2026-07-26). */

export interface Project {
  slug: string;
  title: string;
  /** Shorter title for the <title> tag, which the full one would push past ~60 chars. */
  metaTitle?: string;
  client: 'Cracow Gold Mine' | 'Talison Lithium' | 'Cracow Gold Mine / Outotec';
  group: 'Cracow Gold Mine' | 'Talison Lithium';
  summary: string;
  specs: { label: string; value: string }[];
  image: string;
  /** Extra gallery images (basenames in src/assets/img/site) */
  gallery?: string[];
}

export const projects: readonly Project[] = [
  {
    slug: 'talison-bgm-liner',
    title: 'Tailings Dam — Bituminous Geomembrane Liner',
    metaTitle: 'Tailings Dam BGM Liner',
    client: 'Talison Lithium',
    group: 'Talison Lithium',
    summary: 'Bituminous Geomembrane Liner ES1 & ES3 — 600,000m² of installed BGM.',
    specs: [
      { label: 'Client', value: 'Talison Lithium' },
      { label: 'Engineer', value: 'GHD' },
      { label: 'Purpose', value: 'Tailings dam' },
      { label: 'Manufacturer', value: 'Coletanche' },
      { label: 'Materials', value: 'Bituminous Geomembrane Liner ES1 & ES3' },
      { label: 'Quantities', value: '600,000m² of installed BGM' },
      { label: 'Duration', value: '12 months (completed June 2025)' },
    ],
    image: 'dam-aerial-bgm',
    gallery: ['liner-deploy', 'liner-sunset'],
  },
  {
    slug: 'talison-hdpe-pipeline',
    title: 'Tailings Dam — HDPE Pipeline',
    client: 'Talison Lithium',
    group: 'Talison Lithium',
    summary: 'HDPE pipe up to DN630 — 13km of pipe installed, welded and commissioned.',
    specs: [
      { label: 'Client', value: 'Talison Lithium' },
      { label: 'Engineer', value: 'GHD' },
      { label: 'Purpose', value: 'Tailings dam' },
      { label: 'Materials', value: 'HDPE pipe up to DN630' },
      { label: 'Quantities', value: '13km of pipe installed, welded & commissioned' },
      { label: 'Duration', value: '2 years (completed June 2025)' },
    ],
    image: 'dam-aerial-hdpe',
    gallery: ['pipe-stockpile', 'weld-pipeline'],
  },
  {
    slug: 'talison-bgm-liner-1265mrl',
    title: 'Tailings Dam — BGM Liner, 1265mRL Raise',
    metaTitle: 'Tailings Dam BGM Liner, 1265mRL',
    client: 'Talison Lithium',
    group: 'Talison Lithium',
    summary: 'Bituminous Geomembrane Liner ES1 & ES3 — 400,000m² of installed BGM.',
    specs: [
      { label: 'Client', value: 'Talison Lithium' },
      { label: 'Engineer', value: 'GHD' },
      { label: 'Purpose', value: 'Tailings dam' },
      { label: 'Manufacturer', value: 'Coletanche' },
      { label: 'Materials', value: 'Bituminous Geomembrane Liner ES1 & ES3' },
      { label: 'Quantities', value: '400,000m² of installed BGM' },
      { label: 'Duration', value: '9 months (completed June 2024)' },
    ],
    image: 'bgm-field',
    gallery: ['liner-ballast'],
  },
  {
    slug: 'cracow-tailings-dam',
    title: 'Tailings Dam — HDPE Liner & Poly Pipe',
    metaTitle: 'Tailings Dam HDPE Liner & Pipe',
    client: 'Cracow Gold Mine',
    group: 'Cracow Gold Mine',
    summary: 'Tailings dam HDPE and poly pipe — pipes delivery and return, pumps, and instrumentation.',
    specs: [
      { label: 'Client', value: 'Cracow Gold Mine' },
      { label: 'Engineer', value: 'SLR' },
      { label: 'Purpose', value: 'Tailings dam HDPE and poly pipe, pipes delivery and return, pumps and instrumentation' },
      { label: 'Materials', value: 'HDPE liner and poly pipe' },
      { label: 'Quantities', value: '200,000m², 13km of pipeline procurement' },
      { label: 'Duration', value: '6 months (completed 2021)' },
    ],
    image: 'liner-ballast',
    gallery: ['earthworks-aerial'],
  },
  {
    slug: 'cracow-pit-dewatering',
    title: 'Pit Dewatering Pumps',
    client: 'Cracow Gold Mine',
    group: 'Cracow Gold Mine',
    summary: 'Installation of dewatering pumps in pits — tanks, pumps and standpipe.',
    specs: [
      { label: 'Client', value: 'Cracow Gold Mine' },
      { label: 'Purpose', value: 'Installation of dewatering pump in pits (tanks and pumps, standpipe)' },
      { label: 'Duration', value: '4 weeks (completed 2020)' },
    ],
    image: 'pit-pump',
    gallery: ['pit-pump-close'],
  },
  {
    slug: 'cracow-tailings-lift',
    title: 'Tailings Dam Lift ‘TD1’',
    client: 'Cracow Gold Mine',
    group: 'Cracow Gold Mine',
    summary: 'Tailings dam lift — decant pumps, HDPE pipe install and delivery pipe work.',
    specs: [
      { label: 'Client', value: 'Cracow Gold Mine' },
      { label: 'Engineer', value: 'SLR' },
      { label: 'Purpose', value: 'Tailings lift ‘TD1’ — decant pumps, HDPE pipe install, delivery pipe work' },
      { label: 'Materials', value: 'HDPE pipe DN200' },
      { label: 'Quantities', value: '3km of pipe installed, welded and commissioned' },
      { label: 'Duration', value: '6 weeks (completed 2015)' },
    ],
    image: 'cracow-aerial',
  },
  {
    slug: 'cracow-bioremediation-pits',
    title: 'Workshop Bioremediation Pits',
    client: 'Cracow Gold Mine',
    group: 'Cracow Gold Mine',
    summary: 'Underground workshop bioremediation pits — concrete and block work.',
    specs: [
      { label: 'Client', value: 'Cracow Gold Mine' },
      { label: 'Purpose', value: 'Underground workshop bioremediation pits (civil works, block work, igloo install, treatment of waste from wash down bay)' },
      { label: 'Materials', value: 'Concrete' },
      { label: 'Quantities', value: '30 × 20m' },
      { label: 'Duration', value: '4 weeks (completed 2015)' },
    ],
    image: 'bioremediation',
    gallery: ['concrete-pour', 'rebar'],
  },
  {
    slug: 'cracow-hig-mill',
    title: 'High Intensity Grinding (HIG) Mill',
    metaTitle: 'High Intensity Grinding Mill',
    client: 'Cracow Gold Mine / Outotec',
    group: 'Cracow Gold Mine',
    summary: 'HIG mill construction, installation, commissioning and maintenance.',
    specs: [
      { label: 'Client', value: 'Cracow Gold Mine / Outotec' },
      { label: 'Purpose', value: 'HIG mill construction, installation, commissioning and maintenance' },
      { label: 'Duration', value: '10 weeks (completed 2016)' },
    ],
    image: 'hig-mill',
    gallery: ['hig-mill-2'],
  },
];

export const projectGroups = ['Talison Lithium', 'Cracow Gold Mine'] as const;
