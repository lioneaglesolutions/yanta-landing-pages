import { definePage } from '../schema';

/** `/` — copy ported verbatim from landing-page/index.html */
export default definePage({
  slug: 'plant-hire',
  meta: {
    title: 'Excavator & Plant Hire — Rockhampton & Central QLD | Yanta',
    description:
      '15T & 35T excavators, telehandler, utes and vans for hire across Central Queensland. Wet or dry hire. Written price in 4 business hours, float included.',
  },
  serviceType: 'Excavator and plant hire',
  hero: {
    eyebrow: 'Rockhampton & Central Queensland',
    h1: 'Excavators, telehandlers and vehicles for hire.',
    sub: '15 tonne and 35 tonne excavators, telehandler, utes and vans. <b>Wet hire or dry hire</b> — you choose. Tell us the job and you’ll have a <b>written price back within 4 business hours</b>, float included.',
    fineprint: 'Family owned · 30+ years in Central Queensland · Ian & Kate Mooring',
    primaryCta: { label: 'Get my price & availability', href: '#quote' },
    secondaryCta: { label: 'Call Ian now', href: 'tel' },
  },
  sections: ['trust', 'guarantee', 'fleet', 'pricing', 'packages', 'form', 'faq'],
  trust: [
    '30+ years’ experience',
    'Family owned, Rockhampton based',
    'BYDA Safety Partner',
    'Mine-site experienced',
    'Insured & fully maintained',
    'Wet or dry hire',
  ],
  guarantee: {
    headline: 'On site when we say —',
    emphasis: 'or the float’s free.',
    body: 'If we’re not there inside the window we agreed, you don’t pay the float. In writing, on every quote. And every machine goes out serviced with a written condition report, so you’re never paying for someone else’s damage.',
  },
  fleetIntro: {
    heading: 'What we’ve got, and what it’s for',
    lead: 'Not sure which machine suits your job? Send us a photo in the form below — we’ll tell you straight, and we’ll tell you if you don’t need us.',
  },
  fleet: [
    {
      title: '15 Tonne Excavator',
      uses: ['House and shed pads', 'Dams, drainage and trenching', 'Driveways and access tracks', 'Land and fenceline clearing'],
      tag: 'Wet or dry hire',
    },
    {
      title: '35 Tonne Excavator',
      uses: ['Bulk earthworks and civil', 'Mining and industrial sites', 'Large dam construction', 'Demolition and rock work'],
      tag: 'Wet or dry hire',
    },
    {
      title: 'Telehandler',
      uses: ['Shed and steel erection', 'Materials handling on site', 'Awkward, high or heavy lifts'],
      tag: 'Dry hire · daily, weekly, monthly',
      href: '/telehandler-hire',
    },
    {
      title: 'Utes, Vans & Vehicles',
      uses: ['Site vehicles and crew transport', 'Short term or long term', 'Project-length hire welcome'],
      tag: 'Weekly & monthly rates',
    },
  ],
  pricing: {
    heading: 'Why we don’t publish one price',
    lead: 'Every other hire company writes “price on application” and leaves you guessing. Here’s the actual answer instead.',
    intro: 'Hire rates move with three things:',
    drivers: [
      {
        title: 'Whether you need an operator.',
        body: 'Wet hire includes the machine, an experienced operator and fuel. Dry hire is the machine only — you’ll need your own tickets and insurance.',
      },
      {
        title: 'How far we float the machine.',
        body: 'Getting a 35 tonne out to Marlborough costs more than dropping a 15 tonne at Gracemere. We include it in the quoted price rather than adding it to the invoice later.',
      },
      {
        title: 'How long you need it.',
        body: 'Weekly and monthly rates are substantially cheaper per day than a single day’s hire.',
      },
    ],
    outro:
      'A 15 tonne on a week’s dry hire is a completely different number to a 35 tonne wet for two days two hours away. Any single headline rate we published would be wrong for almost everybody.',
    promise:
      'So here’s what we do instead: tell us the job, and we’ll send you a written price — float, fuel and minimum hours all included — within 4 business hours. No surprises on the invoice.',
  },
  packagesIntro: {
    heading: 'Fixed-price jobs for rural blocks',
    lead: 'For the common jobs, we can give you a price up front. Machine, operator, fuel and float all included.',
    footnote:
      'Prices are a starting point for a standard job and depend on access, ground conditions and distance. We’ll confirm in writing before anything starts.',
  },
  packages: [
    {
      title: 'Dam clean-out',
      price: 'Priced to the job',
      priceNote: 'machine, operator, fuel & float included',
      blurb: 'Desilt, reshape the batters and spread the spoil. Best done before the wet.',
    },
    {
      title: 'House or shed pad',
      price: 'Priced to the job',
      priceNote: 'machine, operator, fuel & float included',
      blurb: 'Strip, cut, fill, level and compact to your footprint, ready for the builder.',
    },
    {
      title: 'Fenceline & firebreak clearing',
      price: 'Priced to the job',
      priceNote: 'per kilometre',
      blurb: 'Push and windrow. Get it done before fire season rather than during it.',
    },
  ],
  form: {
    heading: 'Tell us about the job',
    lead: 'Takes about 30 seconds. We’ll text you within 5 minutes and have a written price to you within 4 business hours.',
    subject: 'NEW YANTA HIRE LEAD',
    fields: [
      {
        kind: 'radio', name: 'machine', label: '1. What do you need?',
        options: ['15 tonne excavator', '35 tonne excavator', 'Telehandler', 'Ute, van or vehicle', 'Not sure — need advice'],
      },
      {
        kind: 'radio', name: 'hire_type', label: '2. Do you need an operator?',
        options: ['Yes — bring an operator', 'No — dry hire', 'Not sure yet'],
      },
      {
        kind: 'radio', name: 'timing', label: '3. When do you need it?',
        options: ['This week', 'Next 2 weeks', 'This month', 'Just getting pricing'],
      },
      {
        kind: 'radio', name: 'duration', label: '4. How long for?',
        options: ['1–2 days', 'About a week', '2–4 weeks', 'A month or more'],
      },
      {
        kind: 'text', name: 'location', label: '5. Where’s the job?',
        placeholder: 'Town or suburb — e.g. Gracemere', required: true,
      },
      {
        kind: 'textarea', name: 'details', label: '6. Briefly, what’s the job? (optional)',
        placeholder: 'e.g. Dam’s silted up, about 30m across. Truck access is OK.',
      },
      { kind: 'text', name: 'name', label: 'Your name', placeholder: 'Your name', required: true },
      { kind: 'tel', name: 'phone', label: 'Mobile number', placeholder: 'Mobile number', required: true },
      { kind: 'email', name: 'email', label: 'Email (optional)', placeholder: 'Email (optional)' },
    ],
    submitLabel: 'Get my written price →',
    thanks: {
      heading: 'Got it — thanks.',
      body: 'We’ll text you within 5 minutes and have a written price across to you within 4 business hours.',
    },
  },
  faqIntro: { heading: 'Questions we get asked' },
  faq: [
    {
      q: 'Do I need a licence or ticket to hire a machine?',
      a: 'For dry hire, yes — you’ll need the appropriate tickets and your own insurance, and we’ll check both before the machine leaves. If you haven’t got them, go wet hire instead: we bring an experienced operator and fuel, and you don’t need anything. For most acreage owners that’s the easier and safer option, and often the cheaper one because the job gets done faster.',
    },
    {
      q: 'How far do you travel?',
      a: 'We’re based near Rockhampton and regularly work across Central Queensland — Gracemere, Yeppoon, Mount Morgan, Marlborough, Gladstone, Emerald and out west. Float cost is built into the quoted price so you know the real number before you commit. Further afield is usually still fine for longer hires — just ask.',
    },
    {
      q: 'What’s the minimum hire?',
      a: 'Generally one day for excavators, but it depends on the machine and how far we’re floating it. We’ll spell out the minimum in your written quote rather than surprising you with it on the invoice.',
    },
    {
      q: 'Is the float included or extra?',
      a: 'Included in the price we quote you, both ways. This is the number one thing people get stung on in plant hire, so we build it in from the start.',
    },
    {
      q: 'How quickly can you get a machine to me?',
      a: 'Often within a day or two, sometimes same day, depending on what’s already out. Tell us when you need it and we’ll give you a straight answer rather than stringing you along.',
    },
    {
      q: 'What happens if it rains?',
      a: 'On wet hire, if the site’s unworkable we’d rather reschedule than burn your money. For longer dry hires we can talk about a standby rate for days you can’t work. Say the word when you’re booking.',
    },
    {
      q: 'I don’t know what size machine I need.',
      a: 'Pick “not sure — need advice” in the form and describe the job, or send us a photo. Thirty years in, we can usually tell you in one look — including if a smaller machine and an extra day works out cheaper for you. We’ll also tell you if you don’t need us at all.',
    },
    {
      q: 'Are you insured?',
      a: 'Yes — public liability and plant insurance, and we’re a BYDA Safety Partner with mine-site experience. Happy to send certificates of currency and our capability statement if you need them for a site induction.',
    },
  ],
});
