# Build spec — Yanta Hire landing pages
### Astro 6 · Tailwind v4 · TypeScript · static output · Vercel
**This supersedes `BUILD-SPEC-Nextjs-Landing-Pages.md`. Hand this file to Claude Code — the prompt is Section 15.**

---

## Contents

1. [Stack and versions](#1)
2. [The one architectural decision that matters](#2)
3. [Project structure](#3)
4. [Route map](#4)
5. [Design tokens — Tailwind v4 `@theme`](#5)
6. [Content model](#6)
7. [Component inventory](#7)
8. [Form handling](#8)
9. [Analytics and conversion tracking](#9)
10. [SEO and structured data](#10)
11. [Performance, images, fonts](#11)
12. [Accessibility](#12)
13. [Environment variables](#13)
14. [Deployment and DNS](#14)
15. [The Claude Code prompt](#15)
16. [Acceptance checklist](#16)

---

<a name="1"></a>
## 1. Stack and versions

| Thing | Version | Notes |
|---|---|---|
| **Astro** | **6.3.x** | Astro 6 shipped Feb 2026. Static output by default. |
| **Tailwind CSS** | **v4.x** | **No `tailwind.config.js`.** Design system lives in `@theme` in CSS. Install via the **`@tailwindcss/vite` plugin**, not the legacy `@astrojs/tailwind` integration. |
| **TypeScript** | latest stable | `strict: true`, use Astro's `strictest` tsconfig preset. |
| **Zod** | latest | Validates content objects at build time and form input at runtime. |
| **Fonts** | `@fontsource-variable/montserrat` | Self-hosted, stable. (Astro's built-in font API is still experimental — skip it.) |
| **Sitemap** | `@astrojs/sitemap` | |
| **Adapter** | `@astrojs/vercel` | **Only if** you build your own form endpoint. Not needed for pure static + hosted form. |
| **Hosting** | Vercel | Cloudflare Pages equally fine — it's static files. |
| **Package manager** | pnpm | |

**Verify versions before installing:** `npm view astro version`, `npm view tailwindcss version`. Pin exact versions in `package.json` — no `^` — so a minor bump can't break the build mid-campaign.

**Output mode:** static. Astro prerenders everything by default. If you add the form endpoint, that single route opts out with `export const prerender = false` and needs the Vercel adapter. Everything else stays static files on a CDN.

**Deliberately NOT using:**

- No React, Vue or Svelte — `.astro` components only. Adding a UI framework here reintroduces exactly the JS weight we chose Astro to avoid.
- No `tailwind.config.js` — that's v3 thinking
- No UI kit, no CSS-in-JS, no CMS, no client-side state library
- No `@astrojs/tailwind` integration — deprecated in favour of the Vite plugin for v4

---

<a name="2"></a>
## 2. The one architectural decision that matters

**Four landing pages, ~75% identical. Do not build four pages.**

One `LandingPage.astro` layout, driven by typed content objects. Each route file ends up ~12 lines: import content, pass to layout, done.

The reason is operational, not aesthetic. The entire purpose of these pages is iterating copy against ad performance. Copy spread across four hand-built page files means every headline test is a four-file diff and things silently drift apart. Copy in one typed content module means a one-line edit, and the build fails if you break something.

```
        ┌───────────────────────────────────────────┐
        │  src/content/pages/*.ts                   │
        │  typed objects, Zod-validated at build     │
        │  ← ALL COPY LIVES HERE                     │
        └────────────────────┬──────────────────────┘
                             │
        ┌────────────────────▼──────────────────────┐
        │  src/layouts/LandingPage.astro            │
        │  maps content.sections → section components│
        └────────────────────┬──────────────────────┘
                             │
   ┌──────────┬──────────────┼──────────────┬──────────────┐
   ▼          ▼              ▼              ▼              ▼
index    gps-excavator-  telehandler-   poly-welder-   (page 5,
.astro     hire.astro     hire.astro     hire.astro    zero template
                                                        changes)
```

**Sections are optional and order-driven.** The poly page needs a spec table and applications grid; the hub needs a fleet grid and rural packages. So content carries `sections: SectionKey[]` and the layout maps over it against a component lookup record. No conditional JSX chains, no template edits to add a page.

---

<a name="3"></a>
## 3. Project structure

```
yanta-hire/
├── src/
│   ├── layouts/
│   │   ├── Base.astro                  # <html>, head, fonts, analytics, header, footer
│   │   └── LandingPage.astro           # the template — maps content.sections
│   │
│   ├── pages/
│   │   ├── index.astro                 # /
│   │   ├── gps-excavator-hire.astro
│   │   ├── telehandler-hire.astro
│   │   ├── poly-welder-hire.astro
│   │   ├── privacy.astro
│   │   ├── 404.astro
│   │   └── api/
│   │       └── lead.ts                 # OPTIONAL — prerender = false
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   └── MobileCallBar.astro
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── TrustBar.astro
│   │   │   ├── Guarantee.astro
│   │   │   ├── HirePaths.astro
│   │   │   ├── FleetGrid.astro
│   │   │   ├── SpecTable.astro
│   │   │   ├── Applications.astro
│   │   │   ├── PricingExplainer.astro
│   │   │   ├── Packages.astro
│   │   │   ├── PipelineBundle.astro
│   │   │   ├── LeadForm.astro
│   │   │   └── Faq.astro
│   │   ├── ui/
│   │   │   ├── Button.astro
│   │   │   ├── Section.astro
│   │   │   └── CallLink.astro
│   │   ├── seo/
│   │   │   ├── Seo.astro
│   │   │   └── JsonLd.astro
│   │   └── analytics/
│   │       └── Analytics.astro
│   │
│   ├── content/
│   │   ├── schema.ts                   # Zod schemas + inferred TS types
│   │   ├── site.ts                     # phone, email, trust points, nav, ABN
│   │   └── pages/
│   │       ├── plant-hire.ts
│   │       ├── gps-excavator.ts
│   │       ├── telehandler.ts
│   │       ├── poly-welder.ts
│   │       └── index.ts                # PAGES registry — sitemap reads this
│   │
│   ├── lib/
│   │   ├── lead-schema.ts
│   │   ├── attribution.ts              # utm / gclid / fbclid capture
│   │   └── track.ts                    # conv('lead' | 'call')
│   │
│   ├── styles/
│   │   └── global.css                  # @import "tailwindcss" + @theme
│   │
│   └── assets/img/                     # processed by astro:assets
│
├── public/                             # favicon, robots.txt, static files
├── astro.config.mjs
├── tsconfig.json
├── .env.example
└── package.json
```

### `astro.config.mjs`

```js
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
// import vercel from '@astrojs/vercel';   // only if using src/pages/api/lead.ts

export default defineConfig({
  site: 'https://hire.yanta.com.au',
  output: 'static',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  image: { formats: ['avif', 'webp'] },
  // adapter: vercel(),
  redirects: {
    '/hire': '/',
    '/excavator-hire': '/',
    '/gps': '/gps-excavator-hire',
    '/poly-welding': '/poly-welder-hire',
    '/telehandler': '/telehandler-hire',
  },
});
```

---

<a name="4"></a>
## 4. Route map

Each route maps to specific ad groups. **Message match is a Google Quality Score component — the wrong page raises CPC on every click.**

| Route | Targets | Google ad groups | Meta ad sets |
|---|---|---|---|
| `/` | All machines, general plant hire | Excavator hire · Plant & earthmoving | Broad, Rural |
| `/gps-excavator-hire` | 14T + Trimble Earthworks + rubber pads | GPS / machine control | GPS-Precision, SurfaceSafe |
| `/telehandler-hire` | 7T telehandler | Telehandler | Telehandler-7T |
| `/poly-welder-hire` | Bushranger 630, 315–630mm | Poly welder hire · Poly welding services | PolyWelding |
| `/privacy` | Required by Meta for lead ads | — | — |

Redirects are in the config above — cheap insurance against a mistyped ad URL landing on a 404.

---

<a name="5"></a>
## 5. Design tokens — Tailwind v4 `@theme`

Colours **sampled from the live yanta.com.au** so ads, pages and website match. `src/styles/global.css`:

```css
@import "tailwindcss";

@theme {
  /* brand — sampled from yanta.com.au */
  --color-navy:        #002B5C;   /* header, headlines, dark panels */
  --color-navy-2:      #013A78;   /* form field backgrounds */
  --color-navy-deep:   #001B3A;   /* footer */
  --color-green:       #41AD49;   /* accent: badges, ticks, rules */
  --color-green-btn:   #2F9139;   /* buttons — white text needs the darker one */
  --color-green-wash:  #EEF8EF;
  --color-green-light: #7FD187;   /* highlight on navy */
  --color-muted:       #406085;   /* body copy on white */
  --color-wash:        #F3F6FA;   /* alt section background */
  --color-line:        #DCE4ED;   /* borders */

  --font-sans: "Montserrat Variable", ui-sans-serif, system-ui, sans-serif;

  --text-hero:    clamp(28px, 5.6vw, 48px);
  --text-section: clamp(23px, 3.8vw, 33px);

  --radius-card: 0.75rem;
}
```

**Contrast — do not skip this.** The website's `#41AD49` with white text is ~2.9:1, which fails WCAG AA. Use `--color-green-btn` (`#2F9139`) wherever white text sits on green; it clears the 3:1 large-text threshold. Keep `#41AD49` for fills, badges, ticks and rules that don't carry text. This audience is substantially 50+, reading a phone in Queensland sun — it's not a checkbox item.

Import once in `Base.astro`: `import '../styles/global.css';`

---

<a name="6"></a>
## 6. Content model

**Use plain typed TypeScript modules, not Astro content collections.**

Content collections are the right tool for markdown prose — blog posts, case studies. This content is *structured page configuration*: nested objects, form field definitions, ordered section keys. In TS you get comments, shared fragments, real IDE autocomplete and no JSON/YAML escaping pain. Validate with Zod at build time and you get the same safety collections would give you.

*(If they later want markdown case studies or a blog, add a content collection then. Don't force it now.)*

`src/content/schema.ts`:

```ts
import { z } from 'zod';

export const sectionKey = z.enum([
  'trust','guarantee','paths','fleet','spec',
  'applications','pricing','packages','bundle','form','faq',
]);
export type SectionKey = z.infer<typeof sectionKey>;

export const formField = z.discriminatedUnion('kind', [
  z.object({ kind: z.literal('radio'), name: z.string(), label: z.string(),
             options: z.array(z.string()).min(2), required: z.boolean().default(true),
             columns: z.union([z.literal(1), z.literal(2)]).default(2) }),
  z.object({ kind: z.enum(['text','tel','email']), name: z.string(), label: z.string(),
             placeholder: z.string().optional(), required: z.boolean().default(false) }),
  z.object({ kind: z.literal('textarea'), name: z.string(), label: z.string(),
             placeholder: z.string().optional(), required: z.boolean().default(false) }),
]);

export const pageContent = z.object({
  slug: z.string(),
  meta: z.object({ title: z.string().max(65), description: z.string().max(160) }),
  hero: z.object({
    eyebrow: z.string(),
    h1: z.string(),
    sub: z.string(),                 // may include <b> — see note below
    fineprint: z.string().optional(),
    image: z.string().optional(),
    primaryCta: z.object({ label: z.string(), href: z.string() }),
    secondaryCta: z.object({ label: z.string(), href: z.string() }).optional(),
  }),
  sections: z.array(sectionKey),     // ORDER MATTERS
  trust: z.array(z.string()).optional(),
  guarantee: z.object({ headline: z.string(), emphasis: z.string(), body: z.string() }).optional(),
  paths: z.array(z.object({ badge: z.string(), featured: z.boolean().default(false),
    title: z.string(), blurb: z.string(), points: z.array(z.string()) })).optional(),
  fleet: z.array(z.object({ title: z.string(), image: z.string().optional(),
    uses: z.array(z.string()), tag: z.string(), href: z.string().optional() })).optional(),
  spec: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
  applications: z.array(z.object({ title: z.string(), blurb: z.string() })).optional(),
  pricing: z.object({ heading: z.string(), lead: z.string(),
    drivers: z.array(z.object({ title: z.string(), body: z.string() })),
    promise: z.string() }).optional(),
  packages: z.array(z.object({ title: z.string(), price: z.string(),
    priceNote: z.string(), blurb: z.string() })).optional(),
  bundle: z.object({ heading: z.string(), lead: z.string(),
    steps: z.array(z.object({ title: z.string(), blurb: z.string() })),
    kicker: z.string() }).optional(),
  form: z.object({
    heading: z.string(), lead: z.string(),
    fields: z.array(formField),
    submitLabel: z.string(),
    thanks: z.object({ heading: z.string(), body: z.string() }),
  }),
  faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
});

export type PageContent = z.infer<typeof pageContent>;

/** Parse at module load — a bad content file fails the BUILD, not production. */
export const definePage = (input: unknown): PageContent => pageContent.parse(input);
```

Each content file ends with `export default definePage({ ... })`. `src/content/pages/index.ts` exports a `PAGES` array that the sitemap and any nav read from, so a new page can't be forgotten.

**On the `<b>` tags in `hero.sub`:** allow a tiny hand-rolled allowlist that converts `<b>`/`</b>` to real elements, or split the copy into typed segments. **Do not pass content through `set:html` unfiltered** — even with your own content, it's a habit that bites later.

### Where the copy comes from — do not write new copy

All four pages' copy already exists in this repo, researched and deliberately worded:

| Page | Source |
|---|---|
| `/` | `landing-page/index.html` — hero, trust, guarantee, fleet, pricing explainer, packages, FAQ |
| `/poly-welder-hire` | `landing-page/poly-welder-hire.html` — complete: paths, spec, applications, bundle, form, FAQ |
| `/gps-excavator-hire` | `FLEET-DIFFERENTIATION-Revised-Positioning.md` + `GOOGLE-ADS-Playbook.md` §"Building the GPS variant" |
| `/telehandler-hire` | `AD-SETS-Machine-Specific.md` — T1/T2/T3 copy + Form TELEHANDLER questions |

### Per-page form questions differ on purpose — they're the qualification engine

| Page | The question that earns its keep |
|---|---|
| `/gps-excavator-hire` | *"Have you got machine control on your own gear?"* — "No, that's why I'm asking" is the best lead in the funnel. Plus *"have you got a design file?"*, which surfaces that problem before anything's promised. |
| `/telehandler-hire` | *"Have you got a CN-ticketed operator?"* — qualifies them and plants the higher-value wet hire. |
| `/poly-welder-hire` | *"Have you got a PMBWELD-certified welder?"* — "No" is the premium sale walking in the door. |
| `/` | *"When do you need it?"* including "just getting pricing" — routes tyre-kickers away from call time. |

---

<a name="7"></a>
## 7. Component inventory

**Everything is `.astro` and ships zero JavaScript.** There is no `'use client'` concept — that complexity disappears. The only JS on any page is the analytics tags and a small inline form-enhancement script.

| Component | Ships JS? | Notes |
|---|---|---|
| `LandingPage.astro` | no | `const SECTIONS = { trust: TrustBar, hero: Hero, ... }` then map `content.sections`. No conditional chains. |
| `Header.astro` | no | Sticky navy, 4px green bottom border, brand left, tap-to-call right |
| `MobileCallBar.astro` | no | Fixed bottom, `md:hidden`, green, tap-to-call. CSS only. |
| `Hero.astro` | no | Optional bg image + navy gradient overlay for text contrast |
| `TrustBar.astro` | no | Green ticks, wraps, `bg-wash` |
| `Guarantee.astro` | no | Navy panel, 8px green left border, emphasis in `green-light` |
| `HirePaths.astro` | no | 2-col; `featured` gets green border + shadow |
| `FleetGrid.astro` | no | 2-col cards, `astro:assets` `<Image />`, optional link to that machine's page |
| `SpecTable.astro` | no | Semantic `<table>`, label column tinted |
| `Applications.astro` | no | 3-col tiles, green left border |
| `PricingExplainer.astro` | no | Navy-bordered box, numbered drivers, green-wash promise block |
| `Packages.astro` | no | 3-col, green top border, "from $X" |
| `PipelineBundle.astro` | no | Navy panel, numbered green circles |
| `LeadForm.astro` | **~2KB inline** | Plain `<form method="POST">` that works with JS off. Inline script upgrades it to fetch + in-place thank-you and fires the conversion. |
| `Faq.astro` | no | Native `<details>/<summary>`, CSS `+`/`–` marker. Emits FAQPage JSON-LD. |
| `Button.astro` | no | Variants `hi` / `ghost` / `navy` |
| `CallLink.astro` | no | `tel:` link; conversion fires via one delegated listener in `Analytics.astro` |

**Radio-as-card pattern** (used heavily in the forms): visually-hidden `<input class="peer sr-only">` plus a styled `<span>` sibling using `peer-checked:` and `peer-focus-visible:`. Pure CSS, no JS. **Do not replace inputs with divs** — keyboard and screen reader support must survive.

**Tap-to-call tracking:** one delegated `click` listener on `document` matching `a[href^="tel:"]`, inside `Analytics.astro`. Don't attach a handler per link.

---

<a name="8"></a>
## 8. Form handling

**Launch on a hosted form service. Add your own endpoint later if you want it.**

Speed to first lead beats form architecture, and the endpoint is swappable without touching a page. The form's `action` comes from an env var so switching is a one-line change.

### Phase 1 — hosted (5 minutes)

`action={import.meta.env.PUBLIC_FORM_ENDPOINT}` pointing at Formspree or Web3Forms. Free tiers cover this volume.

- Keep the `<form method="POST">` working with JS disabled
- Inline script upgrades to `fetch`, swaps in the thank-you panel, fires `conv('lead')`
- Honeypot: `<input name="_gotcha" class="hidden" tabindex="-1" autocomplete="off">`
- Hidden `page` and `source` fields (Section 9)
- Configure notifications to **two** addresses — one must push to a phone

### Phase 2 — own endpoint (optional, ~1 hour)

`src/pages/api/lead.ts` with `export const prerender = false;` plus the Vercel adapter. Zod-validate with `src/lib/lead-schema.ts`, reject non-empty honeypot silently (return success — don't educate bots), rate limit by IP at 5/hour, send via Resend.

### The email is the actual product

Ian and Kate act on this on a phone, in a ute, possibly with dirty hands. The subject line has to carry the decision:

```
NEW LEAD — 14T GPS — Gracemere — THIS WEEK
```

Body: every answer as a labelled line, `source` last. **Phone number as a `tel:` link** so it's one tap to ring back. `replyTo` set to the enquirer's email if given.

**Reliability:** if the send fails, still show the user success **and** surface the phone number prominently in the thank-you state, then log the failure. Never make a prospect feel they've done something wrong because a mail provider is down.

**Speed-to-lead is the highest-correlation variable in this entire project.** A lead nobody sees for an hour is worth a fraction of one seen in five minutes. That's why two inboxes, and why the thank-you panel always offers a call button.

---

<a name="9"></a>
## 9. Analytics and conversion tracking

`Analytics.astro`, included once in `Base.astro`. Three tags — Meta Pixel, GA4, Google Ads — as plain `<script>`. Use `is:inline` for the pixel/gtag bootstraps so Astro doesn't bundle and defer them.

`src/lib/track.ts` exports a single `conv(kind: 'lead' | 'call', extra?)` that fires the right event on both platforms. Components call that, never the platforms directly.

| Event | Meta | Google |
|---|---|---|
| Page load | `PageView` | GA4 `page_view` |
| Form success | `Lead` | Ads conversion + GA4 `generate_lead` |
| Tap-to-call | `Contact` | Ads call conversion + GA4 `phone_call_click` |

**Track phone calls as a primary conversion.** In plant hire most conversions are calls, not form fills. Track only forms and Google Ads optimises toward the minority of the actual business. Set up all three: calls from ads (Google counts >60s), calls from website (forwarding number swapped in), and the click-to-call event above.

**Attribution** — `src/lib/attribution.ts`: on first load read `utm_*`, `gclid`, `fbclid`; persist to `sessionStorage`; inject into the hidden `source` field. This is how the inbox tells you which ad produced which lead.

```
https://hire.yanta.com.au/gps-excavator-hire?utm_source=google&utm_medium=cpc&utm_campaign=gps&utm_term={keyword}
```

**Consent:** the Australian Privacy Act doesn't mandate a GDPR-style banner, but Meta and Google both require a reachable privacy policy URL. Ship `/privacy` covering what's collected, why, retention and deletion. Skip the banner unless targeting the EU.

---

<a name="10"></a>
## 10. SEO and structured data

`Seo.astro` takes `title`, `description`, `canonical` and optional `image`, and renders title, meta description, canonical, OG and Twitter tags. `Base.astro` accepts them as props from each page's `content.meta`.

- `@astrojs/sitemap` with `site` set in the config
- `public/robots.txt` referencing the sitemap
- `lang="en-AU"` on `<html>`
- Per-page OG images — static files in `public/og/`

**JSON-LD, three types**, via a `JsonLd.astro` helper that takes an object and `JSON.stringify`s it (never hand-write JSON in a template literal):

| Schema | Where | Why |
|---|---|---|
| `LocalBusiness` | `Base.astro` | Name, phone, address (Ridgelands QLD), geo, `areaServed`, hours |
| `Service` | each landing page | Service type, provider, `areaServed`, `hasOfferCatalog` |
| `FAQPage` | pages with a FAQ | Eligible for rich results — free SERP real estate |

---

<a name="11"></a>
## 11. Performance, images, fonts

**Target: Lighthouse 100 on mobile, LCP under 1.5s.** Astro should hit this comfortably — these are static HTML files with almost no JS. If Performance lands below 95, something's wrong; investigate rather than accepting it. These pages carry paid traffic, so load time is both conversion rate and Quality Score feeding back into CPC.

**Fonts:** `@fontsource-variable/montserrat`, imported in `Base.astro`, `font-display: swap`, preload the variable woff2. Self-hosted — no third-party request, no layout shift.

**Images:** `astro:assets` `<Image />` for everything in `src/assets/`.
- Hero: `loading="eager"`, `fetchpriority="high"`, explicit dimensions
- Cards: lazy, explicit `width`/`height` to reserve space
- AVIF + WebP via the config `image.formats`
- **Compress before committing.** An uncompressed phone photo is 4–8MB and will destroy LCP.
- **Real photos only — stock equipment imagery reads as a scam in this industry.**

Priority photos, in order: **rubber pads on clean concrete** (this photo *is* the proof for that whole angle) · 14T with the Trimble screen visible in the cab · 7T telehandler with a load at height · Bushranger 630 on a job · 35T low-angle side profile.

**Also:** no view transitions, no client router, no prefetch beyond Astro's default. Five pages don't need an SPA shell.

---

<a name="12"></a>
## 12. Accessibility

Not optional. A large share of this audience is 50+, reading a phone in bright sun.

- Semantic landmarks: `header`, `main`, `footer`
- One `<h1>` per page, no skipped heading levels
- Every input has an associated `<label>`; radio groups in `<fieldset>` + `<legend>`
- `focus-visible` rings on every interactive element — never `outline: none` without a replacement
- Tap targets ≥ 44×44px
- Contrast ≥ 4.5:1 body, ≥ 3:1 large text (hence `#2F9139` for buttons)
- `<details>/<summary>` for FAQ — keyboard accessible for free
- Form errors in `aria-live="polite"`, linked via `aria-describedby`
- Test keyboard-only, then a screen reader, then at 200% zoom

---

<a name="13"></a>
## 13. Environment variables

`.env.example` — commit this, never commit `.env`:

```bash
# Form (Phase 1: hosted service)
PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx

# Form (Phase 2: own endpoint) — server-side only, no PUBLIC_ prefix
RESEND_API_KEY=
LEAD_TO_EMAIL=admin@yanta.com.au
LEAD_TO_EMAIL_MOBILE=
LEAD_FROM_EMAIL=leads@yanta.com.au

# Analytics — PUBLIC_ = exposed to browser, correct for tag IDs
PUBLIC_META_PIXEL_ID=
PUBLIC_GA4_ID=
PUBLIC_GOOGLE_ADS_ID=
PUBLIC_GOOGLE_ADS_LEAD_LABEL=
PUBLIC_GOOGLE_ADS_CALL_LABEL=

# Site
PUBLIC_SITE_URL=https://hire.yanta.com.au
PUBLIC_PHONE=+61429165375
```

Note Astro uses the `PUBLIC_` prefix (not `NEXT_PUBLIC_`). Validate at build with Zod in `src/lib/env.ts` so a missing key fails the build rather than silently dropping leads.

---

<a name="14"></a>
## 14. Deployment and DNS

```bash
pnpm create astro@latest yanta-hire -- --template minimal --typescript strictest
cd yanta-hire
pnpm add -D @tailwindcss/vite tailwindcss @astrojs/sitemap
pnpm add zod @fontsource-variable/montserrat
# build per this spec
pnpm build          # must pass clean
pnpm dlx vercel
pnpm dlx vercel --prod
```

**Domain: `hire.yanta.com.au`** — a subdomain of the existing site, so it inherits Yanta's brand trust and domain history. A brand-new domain has neither.

1. Vercel → Project → Settings → Domains → add `hire.yanta.com.au`
2. Add the CNAME Vercel provides at whoever hosts yanta.com.au's DNS
3. Wait for TLS (usually minutes)
4. Verify the domain in Meta Business Settings → Brand Safety → Domains
5. Add the property in Google Search Console, submit the sitemap
6. **Add a "Plant Hire" nav link on yanta.com.au** pointing at the subdomain — free internal link, helps both

---

<a name="15"></a>
## 15. The Claude Code prompt

Paste this with this spec and the other docs in the repo:

> Build a static marketing site for a Central Queensland plant hire business, following `BUILD-SPEC-Astro-Landing-Pages.md` in this repo exactly. Ignore `BUILD-SPEC-Nextjs-Landing-Pages.md` — it's superseded.
>
> **Stack:** Astro 6, Tailwind CSS v4 (CSS-first `@theme`, **no `tailwind.config.js`**, installed via the `@tailwindcss/vite` plugin not `@astrojs/tailwind`), TypeScript strictest, static output, deployed to Vercel. Verify current versions with `npm view` before installing and pin exact versions.
>
> **Zero JavaScript except the analytics tags and a ~2KB inline form enhancement.** No React, Vue or Svelte components — `.astro` only. If you find yourself adding a UI framework, stop: shipping JS is the thing we chose Astro to avoid.
>
> **Critical architecture:** four landing pages that are ~75% identical. Build ONE `LandingPage.astro` layout driven by typed content objects in `src/content/pages/*.ts`, with an ordered optional `sections` array mapped against a component lookup record. Each route file should be ~12 lines. Do not hand-build four pages — copy must be editable in one place because we'll iterate headlines against ad performance.
>
> **Content:** plain typed TS modules validated with Zod at build time (Section 6) — **not** Astro content collections. This is structured page config, not prose.
>
> **Copy:** all four pages' copy already exists in this repo — `landing-page/index.html`, `landing-page/poly-welder-hire.html`, `FLEET-DIFFERENTIATION-Revised-Positioning.md`, `AD-SETS-Machine-Specific.md`. **Do not invent marketing copy.** It's been researched and deliberately worded. Port it verbatim into the content objects.
>
> **Design tokens:** exactly as Section 5. Navy `#002B5C`, green `#41AD49`, but buttons use `#2F9139` — the lighter green fails WCAG contrast with white text. Montserrat via Fontsource.
>
> **Forms:** plain `<form method="POST">` that works with JS disabled, action from `PUBLIC_FORM_ENDPOINT`, upgraded by an inline script to fetch + in-place thank-you + conversion event. Honeypot. Per-page qualifying questions per Section 6 — they differ by page on purpose.
>
> **Tracking:** Meta Pixel, GA4, Google Ads as inline scripts. A single `conv('lead'|'call')` helper. One delegated listener fires `conv('call')` on every `tel:` link — phone calls are this business's primary conversion, not form fills. Capture `utm_*`/`gclid`/`fbclid` into a hidden `source` field.
>
> **Non-negotiables:** Lighthouse 100 mobile (investigate anything under 95). WCAG AA. No UI kit, no CSS-in-JS, no CMS, no view transitions.
>
> Work section by section. Run `pnpm build` and `pnpm astro check` before telling me it's done, then give me the Section 16 acceptance checklist with each item ticked or explained.

---

<a name="16"></a>
## 16. Acceptance checklist

**Build**
- [ ] `pnpm build` passes with zero errors; `pnpm astro check` clean
- [ ] No `tailwind.config.js` exists
- [ ] `@tailwindcss/vite` used, not `@astrojs/tailwind`
- [ ] Adding a fifth landing page needs only a new content file — no template edits
- [ ] A deliberately broken content file **fails the build** (Zod), not production

**JS budget**
- [ ] View source on `/`: HTML is fully rendered, no client-side hydration
- [ ] Total JS under 10KB gzipped excluding third-party tags
- [ ] Every page works with JavaScript disabled, form included

**Routes**
- [ ] All five routes render; `404.astro` present; redirects from Section 3 work
- [ ] `/sitemap-index.xml` generates and lists all public routes
- [ ] `robots.txt` references the sitemap

**Content**
- [ ] All copy ported verbatim — nothing invented
- [ ] Per-page form questions match Section 6 exactly
- [ ] `/gps-excavator-hire` FAQ honestly answers the **RTK correction source** and **design file** questions — a contractor arriving expecting corrections that aren't supplied is a refund, not a sale
- [ ] `/poly-welder-hire` states PMBWELD301E/302E is required for dry hire

**Forms**
- [ ] Submits with JS off (native POST) and with JS on (fetch + in-place thanks)
- [ ] Honeypot rejects silently
- [ ] Email arrives at both addresses in seconds; subject scannable on a phone
- [ ] Phone number in the email is a tappable `tel:` link
- [ ] Send failure still shows success **plus** the phone number
- [ ] Thank-you state includes a call button

**Tracking**
- [ ] Meta Test Events shows `PageView`, `Lead`, `Contact`
- [ ] GA4 realtime shows pageviews and `generate_lead`
- [ ] Google Ads conversion fires (Tag Assistant)
- [ ] `?utm_source=test&gclid=abc123` appears in the lead email's source field
- [ ] Every `tel:` link fires `conv('call')`

**Quality**
- [ ] Lighthouse mobile: Performance ≥95 (expect 100), Accessibility 100, Best Practices ≥95, SEO 100
- [ ] LCP under 1.5s throttled 4G
- [ ] Keyboard-only navigation end to end; visible focus everywhere
- [ ] Tap targets ≥44px; contrast passes AA
- [ ] Renders correctly at 320px wide and at 200% zoom
- [ ] JSON-LD validates in Google's Rich Results Test

**Launch**
- [ ] `hire.yanta.com.au` live with TLS
- [ ] Domain verified in Meta Business Settings
- [ ] Search Console property added, sitemap submitted
- [ ] Real test lead sent and received on a phone
- [ ] "Plant Hire" link added to yanta.com.au nav

---

## What already exists that carries over

The static HTML in `landing-page/` is **reference, not deliverable** — worked-out layout, hierarchy, brand colours, form question sets, FAQ answers and researched copy. Port it; don't restart it.

| File | Use for |
|---|---|
| `landing-page/index.html` | `/` layout and copy, pricing explainer, packages, FAQ |
| `landing-page/poly-welder-hire.html` | `/poly-welder-hire` — complete |
| `landing-page/DEPLOY.md` | Vercel and DNS steps |
| `GOOGLE-ADS-Playbook.md` | Ad-group-to-route mapping, UTM structure, GPS page variant spec |
| `AD-SETS-Machine-Specific.md` | Telehandler copy, all per-page form question sets |
| `FLEET-DIFFERENTIATION-Revised-Positioning.md` | GPS page positioning and proof points |
| `POLY-WELDER-The-Best-Asset-You-Have.md` | Poly page positioning, the pipeline bundle |
| `STACK-DECISION.md` | Why Astro over Next/Laravel/Vue |

---

## Sources

- [Astro docs](https://docs.astro.build)
- [Astro vs Next.js 2026 — 9KB vs 463KB JS, tested](https://tech-insider.org/astro-vs-nextjs-2026/)
- [Astro in 2026 — content sites and the Cloudflare acquisition](https://dev.to/polliog/astro-in-2026-why-its-beating-nextjs-for-content-sites-and-what-cloudflares-acquisition-means-6kl)
- [Tailwind CSS v4 — CSS-first configuration and migration](https://noqta.tn/en/tutorials/tailwind-css-v4-complete-guide-2026)
- [Astro zero-JavaScript framework guide](https://byteiota.com/astro-zero-javascript-framework/)
