# yanta.com.au

The Yanta website — corporate site plus paid-campaign landing pages, on one domain.
Astro 6 · Tailwind CSS v4 · TypeScript (strictest) · static output · Vercel.

Replaces the previous Wix site. All copy and photography was ported from it (see
`docs/` for the scrape sources and the original campaign build spec).

## Routes

**Corporate site** — `chrome="corporate"` (white header with nav, footer with sitemap)

| Route | Notes |
|---|---|
| `/` | Home — capability statement, services, equipment and project teasers |
| `/about` | Mission, why choose us, what we do |
| `/services` | Five service groups, full item lists |
| `/equipment` | Featured machines + full fleet table |
| `/equipment/[slug]` | 5 machine detail pages |
| `/projects` | Grouped by client (Talison Lithium, Cracow Gold Mine) |
| `/projects/[slug]` | 8 project case studies with spec sheets and galleries |
| `/contact` | Contact details + enquiry form |
| `/privacy` | Required by Meta for lead ads |

**Campaign landing pages — currently drafted, not published.** The four ad landing pages
live in `src/pages/_drafts/`, which Astro excludes from routing, so they build no routes and
appear in no sitemap. Their copy is still in `src/content/pages/*.ts` and still Zod-validated
at build. See `src/pages/_drafts/README.md` to publish them again.

Every old Wix URL redirects to its new home — see `redirects` in `astro.config.mjs`.

`@astrojs/sitemap` emits `/sitemap-index.xml` plus `/sitemap-0.xml`. Because crawlers and people
both try `/sitemap.xml` first, `vercel.json` **rewrites** (not redirects) `/sitemap.xml` to the
index, so the conventional URL serves the real thing with a 200. `robots.txt` advertises
`/sitemap.xml`. That rewrite has no equivalent in `astro.config.mjs`, so if `vercel.json` is ever
regenerated from the Astro redirect list, re-add the `rewrites` block.

## How it's put together

**All copy lives in content modules**, never in components:

- `src/content/corporate/` — `services.ts`, `equipment.ts`, `projects.ts`, `contact-form.ts`
- `src/content/pages/*.ts` — the four landing pages, Zod-validated (`src/content/schema.ts`)
- `src/content/site.ts` — phone, email, nav, footer text

Landing pages are driven by one layout (`src/layouts/LandingPage.astro`) that maps each page's
ordered `sections` array onto section components. Corporate pages are composed from shared
pieces in `src/components/corporate/`. `Base.astro` switches chrome via the `chrome` prop.

Photography lives in `src/assets/img/site/` and is referenced by basename (`SiteImage`,
`PhotoBand`) — Astro generates AVIF/WebP at build.

Zero client JavaScript except the analytics tags, a small form-enhancement script and the
mobile nav toggle (~1.5KB gzipped total). Everything works with JavaScript disabled: forms
fall back to a native POST, and the nav simply stays expanded instead of collapsing.

## Forms

Every form on the site — the four landing pages and `/contact` — is the same component
(`src/components/sections/LeadForm.astro`) driven by a typed config, and all of them POST to
one endpoint: `PUBLIC_FORM_ENDPOINT`.

**Right now that endpoint is a placeholder** (`https://formspree.io/f/REPLACE_ME`) so nothing
is delivered. The build prints a warning while it's unset. To go live: create a form at
formspree.io, then set `PUBLIC_FORM_ENDPOINT` in the Vercel project's environment variables
and redeploy. No code change — the action is read from the env var at build.

Each submission carries, besides the visible answers:

| Field | Purpose |
|---|---|
| `_subject` | Per-form subject line so the inbox is scannable (e.g. `NEW GPS EXCAVATOR ENQUIRY`) |
| `page` | Which page the enquiry came from |
| `source` | `utm_*` / `gclid` / `fbclid` captured on first visit, so you know which ad produced the lead |
| `_gotcha` | Honeypot — bots fill it, humans can't see it. Formspree silently drops those |

With JavaScript on, submitting runs a `fetch`, swaps in the thank-you panel without a page
load, and fires the `lead` conversion to Meta/GA4/Google Ads. With JavaScript off, the browser
does a normal POST and Formspree shows its own confirmation page. If the request fails, the
user still sees the thank-you plus a prominent "ring Ian direct" line, and no conversion is
recorded (the lead didn't actually arrive).

Configure Formspree to notify **two** addresses, one of which pushes to a phone —
speed-to-lead is the highest-correlation variable in the whole campaign. Note the free tier
caps at 50 submissions/month; if that binds, swap the endpoint for a Vercel function
(`src/pages/api/lead.ts` with `export const prerender = false`) sending via Resend. That's a
one-line env change on the front end.

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm check      # astro check (types) — must be clean
pnpm build      # static build to dist/
```

## Before going live

1. **Form endpoint** — create a Formspree form, set `PUBLIC_FORM_ENDPOINT` in Vercel env vars.
   Notifications to admin@yanta.com.au AND an inbox that pushes to a phone.
2. **Tags** — set `PUBLIC_META_PIXEL_ID`, `PUBLIC_GA4_ID`, `PUBLIC_GOOGLE_ADS_ID` and the two
   conversion labels. Tags only render when their ID is set.
3. **Packages prices** — `src/content/pages/plant-hire.ts` ships "Priced to the job" instead of
   "from $X". Only matters when that landing page is un-drafted; put real numbers in
   (genuinely achievable, per ACL) or drop `'packages'` from the `sections` array.
4. **DNS cutover** — point `www.yanta.com.au` at Vercel, away from Wix. Verify the domain in
   Meta Business Settings and submit `/sitemap-index.xml` in Google Search Console.

## Deploy

```bash
pnpm dlx vercel        # preview
pnpm dlx vercel --prod
```
