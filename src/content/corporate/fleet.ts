/**
 * The Yanta fleet register, transcribed from "Equipment List July 2026.pdf"
 * (the sheet itself is headed "Effective 1st May 2026").
 *
 * AVAILABILITY IS NOT IN THE SOURCE DOCUMENT. The PDF is an asset register, not a
 * booking system — it says what Yanta owns, not what's free this week. Every unit
 * below is therefore seeded as 'available' and must be corrected by hand. The page
 * states the review date and tells people to ring and confirm, so nothing here
 * reads as a live booking feed.
 *
 * To update: change `availability` on a unit and redeploy, and bump FLEET_REVIEWED.
 */

export type Availability = 'available' | 'on-hire' | 'service';

export const availabilityLabels: Record<Availability, string> = {
  available: 'Available',
  'on-hire': 'On hire',
  service: 'In service',
};

export interface FleetUnit {
  id: string;
  type: string;
  description: string;
  /** Odometer/hour meter as recorded on the register, e.g. "1700hrs", "17435km" */
  usage?: string;
  availability: Availability;
  /** Link to a detail page where one exists */
  href?: string;
}

export interface FleetCategory {
  slug: string;
  title: string;
  units: FleetUnit[];
}

/** Date the availability column was last reviewed. Bump when you update statuses. */
export const FLEET_REVIEWED = '1 May 2026';

export const fleet: readonly FleetCategory[] = [
  {
    slug: 'excavators',
    title: 'Excavators',
    units: [
      { id: 'YAN041', type: 'Excavator 35 tonne', description: 'Hitachi ZX360LC-5B Excavator, 2000 tilt bucket, 1800 GP, 750 GP. TOPCON GPS wiring.', usage: '1700hrs', availability: 'available' },
      { id: 'YAN025', type: 'Excavator 25 tonne', description: 'Hitachi ZX225USLC-5B Excavator, tilt hitch, 1800 mud bucket, 1200 GP, 600 GP.', usage: '1450hrs', availability: 'available', href: '/equipment/excavator-25t' },
      { id: 'YAN050', type: 'Excavator 13.5 tonne with GPS', description: 'Hitachi 13.5 Tonne Excavator — GPS fitted, Trimble Earthworks. Blade, 1500 mud bucket, 900 GP bucket, 600 GP bucket, rubber pads.', usage: '600hrs', availability: 'available', href: '/gps-excavator-hire' },
      { id: 'YAN008', type: 'Excavator 5 tonne', description: 'Hitachi ZX55U-5 Excavator, 1200 mud bucket, 600 GP, 300 GP, ripper.', usage: '1045hrs', availability: 'available' },
      { id: 'YAN006', type: 'Excavator 1.7 tonne', description: 'Kubota', usage: '1100hrs', availability: 'available' },
    ],
  },
  {
    slug: 'material-handling',
    title: 'Material handling',
    units: [
      { id: 'YAN022', type: 'Integrated tool carrier', description: 'Hitachi ZW180-5 PL Loader — ITC. Hydraulic positioning forks with grab, jib, bucket.', usage: '1845hrs', availability: 'available', href: '/equipment/zw180-loader' },
      { id: 'YAN024', type: 'Telehandler', description: 'Merlo P72.10 Telehandler. 2200mm wide hydraulic positioning fork carriage, jib, bucket.', usage: '1735hrs', availability: 'available', href: '/telehandler-hire' },
      { id: 'YAN049', type: 'Telehandler', description: 'Merlo P72.10 Telehandler.', usage: '1089hrs', availability: 'available', href: '/telehandler-hire' },
      { id: 'YAN045', type: 'Posi track', description: 'Kubota SVL75-3 Posi Track. Bucket, jib, forks.', usage: '401hrs', availability: 'available', href: '/equipment/kubota-posi-track' },
      { id: 'YAN007', type: 'Skid steer', description: 'Hyundai HSL 650-7A. 4-in-1 bucket, forks.', usage: '600hrs', availability: 'available' },
    ],
  },
  {
    slug: 'trucks-vehicles',
    title: 'Trucks & vehicles',
    units: [
      { id: 'YAN037', type: 'Flattop', description: 'Iveco Beavertail Truck', usage: '17,435km', availability: 'available' },
      { id: 'YAN052', type: 'Tipper truck', description: 'IVECO 11 cubic metre tipper', usage: '8200km', availability: 'available' },
      { id: 'YAN053', type: 'Light truck', description: 'Hyundai light truck.', usage: '4000km', availability: 'available' },
      { id: 'YAN016', type: 'Crew cab truck', description: 'Mitsubishi Fuso Canter 4x4 Truck, Kevrek crane.', usage: '17,930km', availability: 'available' },
      { id: 'YAN031', type: 'Minibus', description: 'Toyota Commuter Minibus. Mine spec.', usage: '19,225km', availability: 'available' },
      { id: 'YAN040', type: 'Light vehicle — van', description: 'Hyundai Staria Light Vehicle', usage: '25,704km', availability: 'available' },
      { id: 'YAN LV', type: 'Light vehicles', description: 'All Yanta LVs — 4x4 dual cabs, mine spec', availability: 'available' },
    ],
  },
  {
    slug: 'poly-welding',
    title: 'Poly welding',
    units: [
      { id: 'YPW010', type: 'Poly welder', description: 'Bushranger 630 Track Poly Welder', usage: '2434hrs', availability: 'available', href: '/equipment/bushranger-630' },
      { id: 'YPW011', type: 'Poly welder', description: 'Worldpoly Poly Force 500 Track Welder', usage: '447hrs', availability: 'available' },
      { id: 'YPW012', type: 'Poly welder', description: 'Tecnodue Poly Welder', availability: 'available' },
      { id: 'YPW007', type: 'Poly welder', description: 'Ritmo butt welder', availability: 'available' },
      { id: 'YPW008', type: 'Poly welder', description: 'Dixon EHF 225 butt welder', availability: 'available' },
      { id: 'YPW009', type: 'Poly welder', description: 'Dixon HF225 butt welder', availability: 'available' },
    ],
  },
  {
    slug: 'attachments-compaction',
    title: 'Attachments & compaction',
    units: [
      { id: 'YAN065', type: 'Rock breaker', description: 'Rammer 1332E to suit Hitachi 13.5T', availability: 'available' },
      { id: 'YAN061', type: 'DPU compactor', description: 'Wacker Neuson DPU6555H Compactor', availability: 'available', href: '/equipment/dpu6555' },
      { id: 'TBA', type: 'Trench compactor', description: 'Trench compactor', availability: 'available' },
      { id: 'BGMDP2', type: 'Deployment beam', description: 'GCL / BGM / HDPE deployment beam', availability: 'available' },
    ],
  },
  {
    slug: 'power-air',
    title: 'Power & air',
    units: [
      { id: 'YAN030', type: 'Air compressor', description: 'Airman Air Compressor', usage: '600hrs', availability: 'available' },
      { id: 'YAN043', type: 'Generator', description: 'Kubota GL6000D Generator', availability: 'available' },
      { id: 'YAN044', type: 'Generator', description: 'Shindaiwa DGA20EM Generator', availability: 'available' },
      { id: 'YAN010', type: 'Generator', description: 'Shindaiwa Generator', availability: 'available' },
      { id: 'YAN042', type: 'Generator', description: 'Shindaiwa Generator', availability: 'available' },
    ],
  },
  {
    slug: 'site-facilities',
    title: 'Site facilities',
    units: [
      { id: 'OFF1', type: 'Office', description: '12m x 3m office', availability: 'available' },
      { id: 'OFF2', type: 'Office', description: '6m x 3m office', availability: 'available' },
      { id: 'CRIB1', type: 'Crib room', description: '12m x 3m crib room', availability: 'available' },
      { id: 'IGLOO', type: 'Igloo dome shelter', description: '12m or 6m', availability: 'available' },
      { id: 'CON1', type: 'Shipping container', description: '6m', availability: 'available' },
      { id: 'CON2', type: 'Shipping container', description: '6m', availability: 'available' },
      { id: 'CON3', type: 'Shipping container', description: '6m', availability: 'available' },
    ],
  },
];

export const fleetCount = fleet.reduce((n, c) => n + c.units.length, 0);
