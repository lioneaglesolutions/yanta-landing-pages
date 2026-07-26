# Yanta Hire — landing pages

Static campaign landing pages for [Yanta](https://www.yanta.com.au) plant hire, built to
`docs/BUILD-SPEC-Astro-Landing-Pages.md`. Astro 6 · Tailwind CSS v4 · TypeScript (strictest) ·
static output · Vercel.

## Routes

| Route | Ad traffic |
|---|---|
| `/` | Excavator hire · Plant & earthmoving (Google), Broad/Rural (Meta) |
| `/gps-excavator-hire` | GPS / machine control |
| `/telehandler-hire` | Telehandler |
| `/poly-welder-hire` | Poly welder hire · Poly welding services |
| `/privacy` | Required by Meta for lead ads |

Redirects (`/hire`, `/gps`, `/telehandler`, `/poly-welding`, `/excavator-hire`) are in `astro.config.mjs`.

## How it's put together

**All copy lives in `src/content/pages/*.ts`** — typed objects validated with Zod at build time
(`src/content/schema.ts`). One layout (`src/layouts/LandingPage.astro`) maps each page's ordered
`sections` array onto section components. To change a headline, edit the content file. To add a
page: add a content file, register it in `src/content/pages/index.ts`, add a ~6-line route file.

Zero client JavaScript except the analytics tags and a small form-enhancement script.
Forms work with JavaScript disabled (native POST to the hosted form endpoint).

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm check      # astro check (types)
pnpm build      # static build to dist/
```

## Before launching ads

1. **Form endpoint** — create a Formspree form, set `PUBLIC_FORM_ENDPOINT` in Vercel env vars.
   Notifications to admin@yanta.com.au AND an inbox that pushes to a phone.
2. **Tags** — set `PUBLIC_META_PIXEL_ID`, `PUBLIC_GA4_ID`, `PUBLIC_GOOGLE_ADS_ID` and the two
   conversion labels. Tags only render when their ID is set.
3. **Photos** — drop real photos into `src/assets/img/` and reference the basename from
   `hero.image` / `fleet[].image` in the content files. No stock imagery.
4. **Packages prices** — `src/content/pages/plant-hire.ts` ships "Priced to the job" instead of
   "from $X"; put real numbers in (they must be genuinely achievable under ACL) or remove
   `'packages'` from the `sections` array.

## Deploy

```bash
pnpm dlx vercel        # preview
pnpm dlx vercel --prod
```

Then: add `hire.yanta.com.au` in Vercel → Domains, add the CNAME at yanta.com.au's DNS host,
verify the domain in Meta Business Settings, add the property in Google Search Console and
submit `/sitemap-index.xml`. Full checklist: `docs/BUILD-SPEC-Astro-Landing-Pages.md` §14–16.
