import { z } from 'zod';

export const sectionKey = z.enum([
  'trust', 'guarantee', 'paths', 'fleet', 'spec',
  'applications', 'pricing', 'packages', 'bundle', 'form', 'faq',
]);
export type SectionKey = z.infer<typeof sectionKey>;

export const formField = z.discriminatedUnion('kind', [
  z.object({
    kind: z.literal('radio'), name: z.string(), label: z.string(),
    options: z.array(z.string()).min(2), required: z.boolean().default(true),
    columns: z.union([z.literal(1), z.literal(2)]).default(2),
  }),
  z.object({
    kind: z.enum(['text', 'tel', 'email']), name: z.string(), label: z.string(),
    placeholder: z.string().optional(), required: z.boolean().default(false),
  }),
  z.object({
    kind: z.literal('textarea'), name: z.string(), label: z.string(),
    placeholder: z.string().optional(), required: z.boolean().default(false),
  }),
]);
export type FormField = z.infer<typeof formField>;

export const pageContent = z.object({
  slug: z.string(),
  meta: z.object({
    // Google truncates around these lengths in search results.
    title: z.string().max(60),
    description: z.string().max(160),
  }),
  /** schema.org Service type for the page's JSON-LD, e.g. "Excavator hire" */
  serviceType: z.string(),
  hero: z.object({
    eyebrow: z.string(),
    h1: z.string(),
    sub: z.string(),                 // may include <b> — rendered via a strict allowlist, never set:html
    fineprint: z.string().optional(),
    image: z.string().optional(),
    primaryCta: z.object({ label: z.string(), href: z.string() }),
    secondaryCta: z.object({ label: z.string(), href: z.string() }).optional(),
  }),
  sections: z.array(sectionKey),     // ORDER MATTERS
  trust: z.array(z.string()).optional(),
  guarantee: z.object({ headline: z.string(), emphasis: z.string(), body: z.string() }).optional(),
  paths: z.array(z.object({
    badge: z.string(), featured: z.boolean().default(false),
    title: z.string(), blurb: z.string(), points: z.array(z.string()),
  })).optional(),
  pathsIntro: z.object({ heading: z.string(), lead: z.string(), footnote: z.string().optional() }).optional(),
  fleet: z.array(z.object({
    title: z.string(), image: z.string().optional(),
    uses: z.array(z.string()), tag: z.string(), href: z.string().optional(),
  })).optional(),
  fleetIntro: z.object({ heading: z.string(), lead: z.string() }).optional(),
  spec: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
  specIntro: z.object({ heading: z.string(), footnote: z.string().optional() }).optional(),
  applications: z.array(z.object({ title: z.string(), blurb: z.string() })).optional(),
  applicationsIntro: z.object({ heading: z.string(), lead: z.string() }).optional(),
  pricing: z.object({
    heading: z.string(), lead: z.string(), intro: z.string(),
    drivers: z.array(z.object({ title: z.string(), body: z.string() })),
    outro: z.string(),
    promise: z.string(),
  }).optional(),
  packages: z.array(z.object({
    title: z.string(), price: z.string(),
    priceNote: z.string(), blurb: z.string(),
  })).optional(),
  packagesIntro: z.object({ heading: z.string(), lead: z.string(), footnote: z.string().optional() }).optional(),
  bundle: z.object({
    heading: z.string(), lead: z.string(),
    steps: z.array(z.object({ title: z.string(), blurb: z.string() })),
    kicker: z.string(),
  }).optional(),
  form: z.object({
    heading: z.string(), lead: z.string(),
    subject: z.string(),
    fields: z.array(formField),
    submitLabel: z.string(),
    /** Small print under the submit button. Defaults to the landing-page promise. */
    fineprint: z.string().optional(),
    thanks: z.object({ heading: z.string(), body: z.string() }),
  }),
  faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  faqIntro: z.object({ heading: z.string() }).optional(),
});

export type PageContent = z.infer<typeof pageContent>;

/** Parse at module load — a bad content file fails the BUILD, not production. */
export const definePage = (input: unknown): PageContent => pageContent.parse(input);
