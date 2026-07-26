import { definePage } from '../schema';

/**
 * `/telehandler-hire` — copy drawn from the T1/T2/T3 ads and "Form TELEHANDLER"
 * in AD-SETS-Machine-Specific.md, positioning from FLEET-DIFFERENTIATION-Revised-Positioning.md.
 */
export default definePage({
  slug: 'telehandler-hire',
  meta: {
    title: '7T Telehandler Hire — Operator Included | Rockhampton & CQ',
    description:
      'Most hire telehandlers are 3 tonne. Ours is 7. Portal frames, precast, bulk bags, lifts at height — CN-ticketed operator supplied. Rockhampton & Central QLD.',
  },
  serviceType: '7 tonne telehandler hire with CN-ticketed operator',
  hero: {
    eyebrow: '7 tonne · Rockhampton & Central Queensland',
    h1: '7 tonne telehandler hire — operator included.',
    sub: 'Most telehandlers you’ll hire around here are 3 tonne. <b>Ours is 7.</b> Portal frames, purlin bundles, precast, bulk bags, plant components, awkward lifts at height — the stuff a 3 tonne can’t touch and a crane is overkill for. <b>Over 3 tonne with a jib means the operator needs a CN ticket. We bring one</b>, so you don’t have to go looking.',
    fineprint: 'Family owned · 30+ years in Central Queensland · Ian & Kate Mooring',
    primaryCta: { label: 'Tell us the lift', href: '#quote' },
    secondaryCta: { label: 'Call Ian now', href: 'tel' },
  },
  sections: ['trust', 'guarantee', 'paths', 'spec', 'applications', 'form', 'faq'],
  trust: [
    '7 tonne — double the usual capacity',
    'CN-ticketed operator included',
    'Shed & steel builds',
    'Industrial & shutdown work',
    'Written price in 4 business hours',
    '30+ years’ experience',
  ],
  guarantee: {
    headline: 'On site when we say —',
    emphasis: 'or the float’s free.',
    body: 'If we’re not there inside the window we agreed, you don’t pay the float. In writing, on every quote. And every machine goes out serviced with a written condition report, so you’re never paying for someone else’s damage.',
  },
  pathsIntro: {
    heading: 'Two ways to do this',
    lead: 'Tell us which one suits and we’ll price it properly.',
    footnote:
      'Finding a ticketed operator at short notice is a nightmare — that’s exactly why we hire this machine wet by default.',
  },
  paths: [
    {
      badge: 'Most popular',
      featured: true,
      title: 'Machine + CN-ticketed operator',
      blurb: 'A telehandler over 3 tonne with a jib on it legally needs a CN non-slewing crane licence to operate. Most people ringing us haven’t got one — so we bring the operator with the machine.',
      points: [
        'No chasing a ticketed operator at short notice',
        'Steel, precast, bulk bags, plant components, lifts at height',
        'Cheaper and quicker to get on site than a crane for most builds',
        'Machine, operator and float quoted together — one rate',
      ],
    },
    {
      badge: 'Dry hire',
      featured: false,
      title: 'Dry hire — you’ve got the ticket',
      blurb: 'If you’ve got a CN-ticketed operator of your own (any slewing crane class counts too), take the machine and run it yourself.',
      points: [
        'Daily, weekly and monthly rates',
        'Current CN (or slewing crane class) evidence required',
        'Your own insurance required',
        'Delivered and demonstrated',
      ],
    },
  ],
  specIntro: {
    heading: 'The machine',
    footnote:
      '7 tonne telehandlers are rare in hire fleets — most stock sub-3T units precisely so anyone can run them. If your lift is past what a 3 tonne can touch, this is the one.',
  },
  spec: [
    { label: 'Machine', value: '7 tonne telehandler' },
    { label: 'Capacity', value: '7 tonnes — double a typical hire unit' },
    { label: 'Licence', value: 'Over 3 tonne with a jib fitted requires a CN non-slewing mobile crane licence — our operator carries one' },
    { label: 'Hire options', value: 'Wet hire with a CN-ticketed operator, or dry hire to ticketed operators' },
    { label: 'Based', value: 'Ridgelands, near Rockhampton — Central Queensland wide' },
  ],
  applicationsIntro: {
    heading: 'What it gets used on',
    lead: 'Shed builds, industrial maintenance, shutdowns, solar. Rockhampton and across Central Queensland.',
  },
  applications: [
    { title: 'Shed & steel builds', blurb: 'Portal frames, purlins, roof sheets and the awkward stuff up high' },
    { title: 'Industrial & mining maintenance', blurb: 'Shutdown work and component change-outs' },
    { title: 'Precast & panels', blurb: 'Panel and precast handling on site' },
    { title: 'Pallets & bulk bags', blurb: 'Materials handling where a forklift runs out of reach' },
    { title: 'Solar farm construction', blurb: 'Materials handling across large sites' },
    { title: 'Where a crane is overkill', blurb: 'Too slow to mobilise, too dear, or can’t get access' },
  ],
  form: {
    heading: 'Tell us the lift',
    lead: 'Takes about 30 seconds. We’ll text you within 5 minutes and have a written price across within 4 business hours.',
    subject: 'NEW TELEHANDLER ENQUIRY',
    fields: [
      {
        kind: 'radio', name: 'lifting', label: '1. What are you lifting?',
        options: ['Steel / portal frames / purlins', 'Precast or panels', 'Pallets or bulk bags', 'Plant or machinery components', 'Something else'],
      },
      {
        kind: 'radio', name: 'weight', label: '2. Heaviest lift?',
        options: ['Under 3 tonne', '3–5 tonne', '5–7 tonne', 'Not sure'],
      },
      {
        kind: 'radio', name: 'height', label: '3. How high?',
        options: ['Under 6m', '6–12m', 'Over 12m', 'Not sure'],
      },
      {
        kind: 'radio', name: 'operator', label: '4. Have you got a CN-ticketed operator?', columns: 1,
        options: ['No — need one supplied', 'Yes', 'Not sure what that is'],
      },
      {
        kind: 'radio', name: 'timing', label: '5. When do you need it?',
        options: ['This week', 'Next 2 weeks', 'This month', 'Just pricing'],
      },
      {
        kind: 'radio', name: 'duration', label: '6. How long for?',
        options: ['1–2 days', 'About a week', '2–4 weeks', 'A month or more'],
      },
      {
        kind: 'text', name: 'location', label: '7. Where’s the job?',
        placeholder: 'Town, suburb or site', required: true,
      },
      {
        kind: 'textarea', name: 'details', label: 'Anything else? (optional)',
        placeholder: 'e.g. portal frame shed, heaviest lift about 4t to 8m, site access is good',
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
      q: 'Do I need a licence to operate it?',
      a: 'With a jib fitted and a rated capacity over 3 tonnes, the operator needs a CN non-slewing mobile crane high-risk work licence as a minimum — any slewing crane class also counts. Most people ringing us haven’t got one, and finding a ticketed operator at short notice is a nightmare, so we bring the operator with the machine. If you’ve got your own ticket, dry hire is available — we’ll check the evidence before the machine leaves.',
    },
    {
      q: 'Why 7 tonne instead of 3?',
      a: 'Most telehandlers you’ll hire around here are 3 tonne. Portal frames, purlin bundles, precast, bulk bags and plant components are exactly the stuff a 3 tonne can’t touch — and a 7 tonne handles them without bringing in a crane.',
    },
    {
      q: 'Wouldn’t a crane be better?',
      a: 'Sometimes — and we’ll tell you if so. But for most shed and industrial builds a telehandler is cheaper and quicker to get on site than a crane, and it keeps working between lifts. Where a crane is overkill, too slow to mobilise, or can’t get access, this is the machine.',
    },
    {
      q: 'How far do you travel?',
      a: 'Rockhampton and across Central Queensland — Gladstone, Biloela, Emerald and beyond. 7 tonne telehandlers are rare enough that people pay to bring one in. Float cost is built into the quoted price so you know the real number before you commit.',
    },
    {
      q: 'What’s it cost?',
      a: 'Depends on the lift, how long you need it, whether we supply the operator and how far we’re floating the machine. Tell us the lift and we’ll come back with a written price within 4 business hours — float included, no minimum-hour surprises.',
    },
  ],
});
