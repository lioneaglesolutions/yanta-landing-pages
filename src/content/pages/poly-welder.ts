import { definePage } from '../schema';

/** `/poly-welder-hire` — copy ported verbatim from landing-page/poly-welder-hire.html */
export default definePage({
  slug: 'poly-welder-hire',
  meta: {
    title: 'Poly Welder Hire 315–630mm | Butt Fusion | Central QLD',
    description:
      'Tecnodue Bushranger 630 poly welder for hire in Central Queensland. 315–630mm butt fusion. Dry hire, or machine plus PMBWELD-certified welder & weld reports.',
  },
  serviceType: 'Poly welder hire and HDPE butt fusion welding',
  hero: {
    eyebrow: '315–630mm · Central Queensland',
    h1: 'Poly welder hire, without the interstate freight wait.',
    sub: '<b>Tecnodue Bushranger 630</b> — high pressure tracked butt fusion machine, 315mm to 630mm, semi-automatic. Based near Rockhampton. <b>Dry hire to ticketed crews, or we supply a PMBWELD-certified welder and weld data reports.</b>',
    fineprint: 'Ian & Kate Mooring · 30+ years welding poly, not just renting the machine',
    primaryCta: { label: 'Get a written price', href: '#quote' },
    secondaryCta: { label: 'Call Ian now', href: 'tel' },
  },
  sections: ['trust', 'paths', 'spec', 'applications', 'bundle', 'form', 'faq'],
  trust: [
    '315–630mm butt fusion',
    'Certified welder available',
    'Weld data reports',
    'Based in Central QLD',
    '30+ years on poly',
    'Mining & CSG experienced',
  ],
  pathsIntro: {
    heading: 'Two ways to do this',
    lead: 'Tell us which one suits and we’ll price it properly.',
    footnote:
      'Want the whole job done instead? Poly welding and HDPE pipework is Yanta’s core business — we’ve been doing tailings lines, plant piping and civil mains across Queensland for 30+ years. Just say so in the form.',
  },
  paths: [
    {
      badge: 'Most popular',
      featured: true,
      title: 'Machine + certified welder',
      blurb: 'We bring the Bushranger 630 and a PMBWELD-qualified welder. You get compliant joints and the paperwork to prove it.',
      points: [
        'No need to find a ticketed welder',
        'Weld data records for every joint',
        '30+ years’ poly experience on site',
        'Stands up to inspection and handover',
      ],
    },
    {
      badge: 'Dry hire',
      featured: false,
      title: 'Machine only',
      blurb: 'If you’ve got a current PMBWELD-certified welder, take the machine and run it yourself.',
      points: [
        'Daily, weekly and monthly rates',
        'Delivered and demonstrated',
        'Current PMBWELD301E/302E evidence required',
        'Ancillary gear available',
      ],
    },
  ],
  specIntro: {
    heading: 'The machine',
    footnote:
      'Need a smaller diameter, electrofusion, or ancillary gear like pipe cutters, re-rounding clamps or squeeze-offs? Ask — tell us the job and we’ll tell you straight what we can and can’t cover.',
  },
  spec: [
    { label: 'Machine', value: 'Tecnodue Bushranger 630' },
    { label: 'Pipe diameter range', value: '315mm – 630mm' },
    { label: 'Type', value: 'High pressure tracked butt fusion welder' },
    { label: 'Operation', value: 'Semi-automatic — safer and more productive than manual gear' },
    { label: 'Hire options', value: 'Dry hire, or with a PMBWELD-certified welder' },
    { label: 'Based', value: 'Ridgelands, near Rockhampton — Central Queensland wide' },
  ],
  applicationsIntro: {
    heading: 'What we weld',
    lead: 'Central Queensland is HDPE country. These are the jobs the 630 gets used on.',
  },
  applications: [
    { title: 'Mining & tailings', blurb: 'Tailings lines, dewatering, slurry transfer, site reticulation' },
    { title: 'CSG & gas', blurb: 'Gathering lines, produced water, brine — Bowen & Surat basins' },
    { title: 'Water & sewer mains', blurb: 'Council renewals, rising mains, pressure mains' },
    { title: 'Civil & stormwater', blurb: 'Subdivisions, drainage, TMR works' },
    { title: 'Irrigation', blurb: 'Cane, cotton and horticulture mains — Fitzroy, Emerald, Biloela' },
    { title: 'Landfill & environmental', blurb: 'Leachate and gas collection lines, liner works' },
  ],
  bundle: {
    heading: 'Or get the whole pipeline crew from one yard',
    lead: 'Most contractors end up coordinating three or four suppliers on an HDPE job. You don’t have to.',
    steps: [
      { title: '14T excavator with Trimble Earthworks GPS', blurb: 'Trench dug to design grade, first pass — no string lines, no rework' },
      { title: 'Tecnodue Bushranger 630', blurb: 'Fusion welds 315–630mm, on site' },
      { title: 'PMBWELD-certified welder', blurb: 'Compliant joints plus weld data reports' },
      { title: '7 tonne telehandler', blurb: 'Pipe and materials handling — operator with CN ticket supplied' },
      { title: '35T excavator', blurb: 'Bulk excavation and backfill' },
    ],
    kicker: 'One supplier. One invoice. One phone call instead of four.',
  },
  form: {
    heading: 'Tell us about the job',
    lead: 'Takes about 30 seconds. We’ll text you within 5 minutes and have a written price across within 4 business hours.',
    subject: 'NEW POLY WELDER ENQUIRY',
    fields: [
      {
        kind: 'radio', name: 'need', label: '1. What do you need?', columns: 1,
        options: [
          'Machine + certified welder',
          'Machine only — we’ve got a ticketed welder',
          'Full package — you do the welding job',
          'Not sure — need advice',
        ],
      },
      {
        kind: 'radio', name: 'diameter', label: '2. Pipe diameter?',
        options: ['Under 315mm', '315 – 450mm', '450 – 630mm', 'Over 630mm', 'Mixed, or not sure'],
      },
      {
        kind: 'radio', name: 'application', label: '3. What’s the application?',
        options: ['Mining / tailings', 'CSG / gas', 'Water or sewer main', 'Civil / stormwater', 'Irrigation', 'Landfill / other'],
      },
      {
        kind: 'radio', name: 'welder', label: '4. Have you got a PMBWELD-certified welder?', columns: 1,
        options: ['Yes — current ticket', 'No — we’d need one supplied', 'Not sure what that means'],
      },
      {
        kind: 'radio', name: 'timing', label: '5. When do you need it?',
        options: ['Urgent — this week', 'Next 2 weeks', 'This month', 'Pricing a tender'],
      },
      {
        kind: 'text', name: 'location', label: '6. Where’s the job?',
        placeholder: 'Town, region or mine site', required: true,
      },
      {
        kind: 'textarea', name: 'details', label: 'Anything else? (optional)',
        placeholder: 'e.g. approx 400 joints of 500mm PN16, site access is good, need weld reports for handover',
      },
      { kind: 'text', name: 'name', label: 'Your name', placeholder: 'Your name', required: true },
      { kind: 'tel', name: 'phone', label: 'Mobile number', placeholder: 'Mobile number', required: true },
      { kind: 'text', name: 'company', label: 'Company', placeholder: 'Company' },
      { kind: 'email', name: 'email', label: 'Email', placeholder: 'Email' },
    ],
    submitLabel: 'Get my written price →',
    thanks: {
      heading: 'Got it — thanks.',
      body: 'We’ll text you within 5 minutes and have a written price across within 4 business hours.',
    },
  },
  faqIntro: { heading: 'Questions we get asked' },
  faq: [
    {
      q: 'Do I need a ticket to run the machine?',
      a: 'For butt fusion welding, yes — the industry competency is PMBWELD301E (butt welding) and PMBWELD302E (electrofusion), and a biennial refresher assessment is the recommended standard. We’ll ask for current evidence before the machine leaves the yard. If you haven’t got a ticketed welder, we’ll supply one — for most people that works out easier and the weld records come with it.',
    },
    {
      q: 'Do you supply weld data reports?',
      a: 'When we supply the welder, yes — you get records for the joints, which is what most pressure-pipe contracts and handover packages require. Tell us up front what format the specification asks for and we’ll confirm we can meet it before you commit.',
    },
    {
      q: 'How far will you travel?',
      a: 'We’re near Rockhampton and work across Central Queensland — Bowen Basin, Gladstone, Emerald, Biloela, the Capricorn Coast and out west. For longer hires we’ll go further. Mobilisation is quoted up front, not added to the invoice afterwards.',
    },
    {
      q: 'Why not just hire from Perth or Melbourne?',
      a: 'You can, and plenty of people do. But you’ll wait on freight both ways and pay for it, and if something goes wrong mid-job the machine is a long way from support. We’re a few hours away with 30 years of poly welding behind us. On an urgent job that difference is the whole ballgame.',
    },
    {
      q: 'What’s it cost?',
      a: 'Depends on the diameter, the number of joints, whether you need a welder supplied, how long you need it and how far we’re travelling. Rather than post a rate that’s wrong for almost everybody, tell us the job and we’ll send a written price — mobilisation included — within 4 business hours.',
    },
    {
      q: 'Can you do the whole pipeline, not just the welding?',
      a: 'Yes, and it’s usually the better option. We’ve got a 14 tonne excavator running Trimble GPS for trenching to grade, the 630 welder, certified welders, a 7 tonne telehandler for pipe handling and a 35 tonne for bulk work. One supplier for the lot.',
    },
    {
      q: 'Can you help in an emergency?',
      a: 'Ring us. Burst mains and shutdown failures are exactly the situation where being local matters. Callout rates apply, and we’ll tell you what they are before we roll.',
    },
  ],
});
