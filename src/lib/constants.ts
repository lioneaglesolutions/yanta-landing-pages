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

/**
 * Google Ads "Contact" conversion action. Used for both a completed enquiry and a
 * tap-to-call, because that's the single action currently configured in the account.
 *
 * To report calls separately (worth doing — in plant hire most conversions are calls),
 * create a second conversion action in Google Ads and set PUBLIC_GOOGLE_ADS_CALL_LABEL.
 */
export const DEFAULT_GOOGLE_ADS_LEAD_LABEL = 'ZI6-CPHT2dYcEJOAh65E';
export const DEFAULT_GOOGLE_ADS_CALL_LABEL = 'ZI6-CPHT2dYcEJOAh65E';

/**
 * Formspree project ID (from the CLI dashboard) and the form key defined in
 * formspree.json. Both are public — they end up in the form's `action` attribute
 * either way, so committing them is safe. The *deploy* key is a different thing
 * entirely: it is a secret, lives only in a gitignored .env, and never ships.
 *
 * Every form on the site posts here; they're told apart by the `_subject` and
 * `page` hidden fields. Override with PUBLIC_FORM_ENDPOINT if that ever changes.
 */
export const FORMSPREE_PROJECT_ID = '3054195937539784183';
export const FORMSPREE_FORM_KEY = 'website';
export const DEFAULT_FORM_ENDPOINT = `https://formspree.io/p/${FORMSPREE_PROJECT_ID}/f/${FORMSPREE_FORM_KEY}`;
