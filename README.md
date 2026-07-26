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

**Campaign landing pages** — `chrome="landing"` (navy header, sticky mobile call bar, no nav)

| Route | Ad traffic |
|---|---|
| `/plant-hire` | Excavator hire · Plant & earthmoving (Google), Broad/Rural (Meta) |
| `/gps-excavator-hire` | GPS / machine control |
| `/telehandler-hire` | Telehandler |
| `/poly-welder-hire` | Poly welder hire · Poly welding services |

Every old Wix URL redirects to its new home — see `redirects` in `astro.config.mjs`.

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

Zero client JavaScript except the analytics tags and a small form-enhancement script
(~1.2KB gzipped total). Forms work with JavaScript disabled via native POST.

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
   "from $X"; put real numbers in (genuinely achievable, per ACL) or drop `'packages'` from
   the `sections` array.
4. **DNS cutover** — point `www.yanta.com.au` at Vercel, away from Wix. Verify the domain in
   Meta Business Settings and submit `/sitemap-index.xml` in Google Search Console.

## Deploy

```bash
pnpm dlx vercel        # preview
pnpm dlx vercel --prod
```
