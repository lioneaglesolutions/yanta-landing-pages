import { z } from 'zod';

/**
 * Build-time env validation — a malformed key fails the build, not production.
 * Analytics IDs are optional: their tags only render when set, so dev stays clean.
 * The form endpoint falls back to a placeholder so the repo builds before the
 * Formspree account exists — replace it in .env / Vercel before launching ads.
 */
const envSchema = z.object({
  PUBLIC_FORM_ENDPOINT: z.url().default('https://formspree.io/f/REPLACE_ME'),
  PUBLIC_META_PIXEL_ID: z.string().optional(),
  PUBLIC_GA4_ID: z.string().optional(),
  PUBLIC_GOOGLE_ADS_ID: z.string().optional(),
  PUBLIC_GOOGLE_ADS_LEAD_LABEL: z.string().optional(),
  PUBLIC_GOOGLE_ADS_CALL_LABEL: z.string().optional(),
  PUBLIC_SITE_URL: z.url().default('https://www.yanta.com.au'),
  PUBLIC_PHONE: z.string().default('+61429165375'),
});

export const env = envSchema.parse({
  PUBLIC_FORM_ENDPOINT: import.meta.env.PUBLIC_FORM_ENDPOINT || undefined,
  PUBLIC_META_PIXEL_ID: import.meta.env.PUBLIC_META_PIXEL_ID || undefined,
  PUBLIC_GA4_ID: import.meta.env.PUBLIC_GA4_ID || undefined,
  PUBLIC_GOOGLE_ADS_ID: import.meta.env.PUBLIC_GOOGLE_ADS_ID || undefined,
  PUBLIC_GOOGLE_ADS_LEAD_LABEL: import.meta.env.PUBLIC_GOOGLE_ADS_LEAD_LABEL || undefined,
  PUBLIC_GOOGLE_ADS_CALL_LABEL: import.meta.env.PUBLIC_GOOGLE_ADS_CALL_LABEL || undefined,
  PUBLIC_SITE_URL: import.meta.env.PUBLIC_SITE_URL || undefined,
  PUBLIC_PHONE: import.meta.env.PUBLIC_PHONE || undefined,
});

if (env.PUBLIC_FORM_ENDPOINT.includes('REPLACE_ME')) {
  console.warn(
    '\n⚠️  PUBLIC_FORM_ENDPOINT is still the placeholder — forms will not deliver leads.' +
    '\n   Create a Formspree form and set PUBLIC_FORM_ENDPOINT before launching ads.\n',
  );
}
