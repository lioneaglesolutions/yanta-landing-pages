/**
 * Yanta's live Google Ads tag. Not a secret — it ships to the browser either way.
 * Defaulted here so production is tagged without depending on a Vercel env var,
 * and shared so the build-time env schema and the client-side conv() helper can
 * never disagree about which account they're reporting to.
 *
 * Deliberately zod-free: track.ts runs in the browser and must not pull the
 * validation library into the client bundle.
 */
export const DEFAULT_GOOGLE_ADS_ID = 'AW-18350194707';
