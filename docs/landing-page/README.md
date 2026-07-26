# Archived — not the live site

These HTML files are the **original hand-built prototypes** from before the Astro rebuild.
They are kept only as the provenance for the ported copy, FAQ answers and form question sets.

**Nothing in this folder is served, built, or deployed.** If you open `index.html` or
`poly-welder-hire.html` you will see stale placeholders that look alarming but are inert:

| You'll see | Reality |
|---|---|
| `action="https://formspree.io/f/YOUR_FORMSPREE_ID"` | The live forms post to the Formspree **project** endpoint — see `src/lib/constants.ts` |
| `fbq('init', 'YOUR_PIXEL_ID')` | The live pixel only renders when `PUBLIC_META_PIXEL_ID` is set |
| `gtag('config', 'GA_MEASUREMENT_ID')` | The live Google Ads tag is `AW-18350194707` |
| `from [$X]` prices | The live packages read "Priced to the job" |

To check what the site actually renders, build it and look at `dist/`, or run `pnpm dev`.

```bash
pnpm build && grep -o 'action="[^"]*"' dist/contact/index.html
```
