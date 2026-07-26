import { definePage } from '../schema';

/**
 * `/gps-excavator-hire` — built per GOOGLE-ADS-Playbook.md §"Building the GPS variant",
 * copy drawn from FLEET-DIFFERENTIATION-Revised-Positioning.md and the G1/G3/R1/R2 ad copy
 * in AD-SETS-Machine-Specific.md. Form is "Form GPS" from AD-SETS-Machine-Specific.md.
 */
export default definePage({
  slug: 'gps-excavator-hire',
  meta: {
    title: 'GPS Excavator Hire — Trimble 14T | Rockhampton & CQ',
    description:
      'Trimble Earthworks 14T excavator for hire in Rockhampton & CQ. Load the design, dig straight to it. Rubber pads — works on finished surfaces. Wet or dry hire.',
  },
  serviceType: 'GPS excavator hire — Trimble Earthworks 3D machine control',
  hero: {
    eyebrow: 'Trimble Earthworks · 14T · Rockhampton & CQ',
    h1: 'GPS excavator hire — dig straight to the design.',
    sub: '<b>14 tonne excavator running Trimble Earthworks</b> — full 3D machine control. Load the design, dig to it. No string lines, no batter boards, no going back over it. <b>Rubber pads on the tracks</b>, so it works on finished surfaces without wrecking them. Wet or dry hire.',
    fineprint: 'Family owned · 30+ years in Central Queensland · Ian & Kate Mooring',
    // hero.image: drop a real photo (e.g. 14T with the Trimble screen visible) into
    // src/assets/img/ and reference its basename here — no stock imagery.
    primaryCta: { label: 'Get my written price', href: '#quote' },
    secondaryCta: { label: 'Call Ian now', href: 'tel' },
  },
  sections: ['trust', 'guarantee', 'paths', 'spec', 'applications', 'form', 'faq'],
  trust: [
    'Trimble Earthworks 3D machine control',
    'Rubber pads — no surface damage',
    'Wet or dry hire',
    'Written price in 4 business hours',
    '30+ years’ experience',
    'Based near Rockhampton',
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
      'Haven’t got machine control on your own gear? That’s exactly who this machine is for. Contractors running machine control reckon it about halves the time on grade work — and it stops you over-digging and then buying fill back.',
  },
  paths: [
    {
      badge: 'Most popular',
      featured: true,
      title: 'Machine + GPS-trained operator',
      blurb: 'We bring the 14T and an operator who runs Trimble Earthworks every week. The design goes in the machine; he digs to it and sees the cut and fill on screen as he goes.',
      points: [
        'No string lines, no batter boards, no spotter in the trench',
        'Fewer passes, less rework, fewer survey checks',
        'You supply the base station, corrections and design file — we dig to it',
        'Fuel included — one rate, no surprises',
      ],
    },
    {
      badge: 'Dry hire',
      featured: false,
      title: 'Dry hire — you supply the operator',
      blurb: 'If you’ve got an operator who’s run machine control before, take the machine and run it yourself.',
      points: [
        'Daily, weekly and monthly rates',
        'Delivered and demonstrated',
        'Your own base station, corrections and design file required',
        'Your own tickets and insurance required',
      ],
    },
  ],
  specIntro: {
    heading: 'The machine',
    footnote:
      'There aren’t many GPS machines available for hire in Central Queensland. If you’ve got a job with a design to hit, this is the one.',
  },
  spec: [
    { label: 'Machine', value: '14 tonne excavator' },
    { label: 'Machine control', value: 'Trimble Earthworks — semi-automatic 3D grade control' },
    { label: 'Tracks', value: 'Rubber pads — works on concrete, asphalt and pavers without marking them' },
    { label: 'RTK corrections', value: 'Not supplied — you’ll need your own base station or network correction subscription' },
    { label: 'Design files', value: 'Not supplied — you (or your surveyor) provide and load your own design or survey model' },
    { label: 'Hire options', value: 'Wet hire with a GPS-trained operator, or dry hire' },
    { label: 'Based', value: 'Ridgelands, near Rockhampton — Central Queensland wide' },
  ],
  applicationsIntro: {
    heading: 'What it gets used on',
    lead: 'Anyone digging to a design, and anyone working on or beside a finished surface.',
  },
  applications: [
    { title: 'Drainage & pipe grades', blurb: 'Trench to design grade, first pass — no one standing in the trench with a level' },
    { title: 'Building & shed pads', blurb: 'Pads cut to design, first time, ready for the builder' },
    { title: 'Detention basins & dams', blurb: 'Batters and floors to the model, better material yield' },
    { title: 'Roads & subgrade', blurb: 'Subgrade, batters and boxing to design without repeat set-outs' },
    { title: 'Solar farms', blurb: 'Pad and pile accuracy across large areas' },
    { title: 'Finished surfaces', blurb: 'Driveways, car parks, footpaths, hardstand — rubber pads, no track mats, no resurfacing bill' },
  ],
  form: {
    heading: 'Tell us about the job',
    lead: 'Takes about 30 seconds. We’ll text you within 5 minutes and have a written price across within 4 business hours.',
    subject: 'NEW GPS EXCAVATOR ENQUIRY',
    fields: [
      {
        kind: 'radio', name: 'job', label: '1. What’s the job?',
        options: ['Building or shed pad', 'Drainage or pipe grades', 'Detention basin or dam', 'Road or subgrade', 'Bulk earthworks', 'Something else'],
      },
      {
        kind: 'radio', name: 'machine_control', label: '2. Have you got machine control on your own gear?', columns: 1,
        options: ['No — that’s why I’m asking', 'Yes, but need another machine', 'Not sure what that means'],
      },
      {
        kind: 'radio', name: 'design_file', label: '3. Have you got a design file or survey model?', columns: 1,
        options: ['Yes, ready to go', 'Surveyor’s working on it', 'No — need help with that'],
      },
      {
        kind: 'radio', name: 'operator', label: '4. Operator?', columns: 1,
        options: ['Yes, bring one', 'No, dry hire — we’ve got our own GPS-experienced operator', 'Not sure'],
      },
      {
        kind: 'radio', name: 'timing', label: '5. When do you need it?',
        options: ['This week', 'Next 2 weeks', 'This month', 'Just pricing'],
      },
      {
        kind: 'text', name: 'location', label: '6. Where’s the job?',
        placeholder: 'Town, suburb or site', required: true,
      },
      {
        kind: 'textarea', name: 'details', label: 'Anything else? (optional)',
        placeholder: 'e.g. 900m of stormwater to grade, design file is 12d, access is good',
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
      q: 'Do you supply the base station or RTK corrections?',
      a: 'No — we supply the machine with Trimble Earthworks on board, but not the corrections. You’ll need your own base station or a network correction subscription for the machine to dig to design. If you’re not set up for that, say so in the form and we’ll talk it through before you book, rather than discover it on site.',
    },
    {
      q: 'Can you load our design file?',
      a: 'No — you or your surveyor provide and load the design or survey model. Tell us what you’re running when you enquire and we’ll confirm your setup and the machine will talk to each other before anything’s promised.',
    },
    {
      q: 'What do we need to have ready?',
      a: 'Your own base station or network corrections, and a design file or survey model loaded by you or your surveyor. For dry hire, add an operator who’s run machine control, plus your own tickets and insurance. Missing any of that? Pick “need help with that” in the form and we’ll tell you straight what your options are.',
    },
    {
      q: 'Do we need a GPS-trained operator?',
      a: 'For wet hire, no — our operator comes with the machine and runs Trimble Earthworks every week. For dry hire you’ll need an operator who’s run machine control before, plus your own tickets and insurance, and we’ll check both before the machine leaves.',
    },
    {
      q: 'Does it really work on finished surfaces?',
      a: 'Yes — the 14 tonne runs rubber pads. It tracks over concrete, asphalt and pavers without marking them, so no plywood, no track mats, and no resurfacing bill at the end of the job. Driveway repairs, car parks, footpaths, hardstand inside factories — anywhere the surface has to survive.',
    },
    {
      q: 'What does machine control actually save me?',
      a: 'Every load of dirt you over-excavate, you pay for twice — once to dig it out, once to buy fill and put it back. Machine control digs to the design surface, not to someone’s best guess: fewer passes, less rework, fewer survey checks, and you’re off site sooner. Contractors running it reckon it about halves the time on grade work.',
    },
    {
      q: 'What’s it cost?',
      a: 'A GPS machine on a job with a design file is a different number to a bare machine pushing dirt, and we’d rather quote you properly than post a rate that’s wrong for you. Tell us the job and you’ll have a written price back within 4 business hours — float included.',
    },
  ],
});
