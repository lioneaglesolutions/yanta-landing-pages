import { pageContent } from '../schema';

/** Standalone enquiry form for /contact — validated by the same schema as the landing pages. */
export const contactForm = pageContent.shape.form.parse({
  heading: 'Send us an enquiry',
  lead: 'Tell us about the project and we’ll come back to you quickly. For anything urgent, ring Ian direct.',
  subject: 'NEW YANTA WEBSITE ENQUIRY',
  fields: [
    {
      kind: 'radio',
      name: 'enquiry',
      label: 'What’s the enquiry about?',
      options: [
        'Project or work package',
        'Equipment hire',
        'Poly welding / HDPE pipework',
        'Something else',
      ],
    },
    {
      kind: 'text',
      name: 'location',
      label: 'Where’s the project?',
      placeholder: 'Site, town or region',
      required: true,
    },
    {
      kind: 'textarea',
      name: 'details',
      label: 'Tell us about it',
      placeholder: 'Scope, quantities, timing — whatever you’ve got.',
    },
    { kind: 'text', name: 'name', label: 'Your name', placeholder: 'Your name', required: true },
    { kind: 'tel', name: 'phone', label: 'Phone', placeholder: 'Phone', required: true },
    { kind: 'text', name: 'company', label: 'Company', placeholder: 'Company' },
    { kind: 'email', name: 'email', label: 'Email', placeholder: 'Email' },
  ],
  submitLabel: 'Send enquiry →',
  fineprint: 'No obligation. We’ll get back to you quickly.',
  thanks: {
    heading: 'Got it — thanks.',
    body: 'We’ll be in touch shortly. If it’s urgent, ring Ian direct on 0429 165 375.',
  },
});
