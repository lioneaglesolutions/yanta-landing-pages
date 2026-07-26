# Stack decision
### Your instinct is right. Static. And the answer is Astro, not Next.

---

## The honest comparison

What these pages actually are: **five marketing pages, one email form, three tracking scripts.** No database, no auth, no user accounts, no dynamic content. That's the whole brief — and it should drive the decision.

| Option | Verdict | Why |
|---|---|---|
| **Laravel** | ✗ **Wrong tool** | A full server-side framework — ORM, migrations, queues, auth, Blade — for content that never changes per-visitor. You'd run PHP infrastructure to serve static text. There is no database in this project. Only sane reason to pick it: you already run Laravel and want one stack to maintain. |
| **Vue SPA** | ✗ **Actively harmful here** | A client-rendered SPA for landing pages means JS-dependent rendering, worse LCP and a crawler seeing an empty shell. On paid traffic that's money. (Nuxt with static generation would be fine — but then you're just choosing Astro with extra steps.) |
| **Next.js** | ~ **Works, but overkill** | Can absolutely go static. But you're shipping a React runtime to render text that never changes. Benchmarks in 2026 put a comparable Next site at **~463KB of JS vs Astro's ~9KB**, and 2–3× slower loads. |
| **Plain HTML + CSS** | ~ **Nearly right** | Zero build, zero dependencies, deploys anywhere. Real problem: no templating, so header, footer and nav get duplicated across five files. That's exactly the drift I warned about in the build spec. |
| **★ Astro** | ✓ **This one** | Static HTML output, **zero JS shipped by default**, real component templating, type-safe content collections. Purpose-built for content and marketing sites. |

**Astro 6.3.1** is current (Astro 6 shipped February 2026). The team was acquired by Cloudflare in January 2026, and Google, Microsoft, Adobe, Porsche and IKEA run it in production — so it's not a risky bet.

---

## Why Astro specifically, for this job

**1. It's genuinely static.** Builds to plain HTML files. Deploys to Vercel, Netlify or Cloudflare Pages as nothing but files on a CDN. No server, no cold starts, no runtime to break at 6am when a contractor is looking for a machine.

**2. Zero JavaScript by default.** Every kilobyte of JS is latency on a 4G connection in Gracemere. Your pages need JS in exactly two places — the form and the tracking tags — and Astro's islands model lets you ship JS *only* there. Best possible LCP, which matters twice over: conversion rate, and Google Quality Score feeding back into your CPC.

**3. It solves the templating problem without a framework tax.** `.astro` components give you one `<Header>`, one `<Footer>`, one `<LandingPage>` layout — the exact architecture from the build spec — with none of React's weight.

**4. Content collections are the content model I specced.** Type-safe, schema-validated content files with build-time errors if you forget a field. That's precisely the "copy lives in one typed place so headline tests are one-line edits" requirement, and it's a first-class feature rather than something you hand-roll.

**5. It's the "latest stuff" answer.** You wanted modern. Astro 6 with content collections and Tailwind v4 *is* the current best practice for this category — arguably more so than Next, which is optimised for applications.

---

## The one thing static doesn't solve: the form

This is the only real reason people reach for Next or Laravel here, and it's easily handled. Three options:

| Option | Effort | Notes |
|---|---|---|
| **★ Astro server endpoint** (hybrid) | ~1 hour | Astro supports static pages + one server route. Deploy on Vercel or Cloudflare with the adapter; everything stays static except `/api/lead`. Full control, your own email templates, no third-party in the path. |
| **Hosted form service** (Formspree, Web3Forms, Basin) | 5 minutes | Genuinely fine. Free tier covers your volume. Fastest possible launch — you could be live tonight. Downside: a third party in the lead path, less control over the email format. |
| **Cloudflare Worker / Netlify Forms** | ~30 min | Netlify Forms is built in and needs almost no code if you host there. |

**Recommendation: launch on a hosted form service, add the Astro endpoint later.** Speed to first lead matters more than form architecture. You can swap the endpoint without touching the pages.

Either way, keep the two non-negotiables from the spec: leads go to **two inboxes** — one being something that pushes to a phone — and the subject line has to be readable at a glance: `NEW LEAD — 14T GPS — Gracemere — THIS WEEK`.

---

## What changes in the build spec

`BUILD-SPEC-Nextjs-Landing-Pages.md` is ~85% stack-agnostic. These sections change:

| Section | Change |
|---|---|
| **1. Stack** | Astro 6.3.x + Tailwind v4 + TypeScript. `@astrojs/tailwind` (or the Vite plugin), plus `@astrojs/vercel` only if you use a server endpoint. |
| **3. Structure** | `src/pages/*.astro` for routes · `src/layouts/LandingPage.astro` · `src/components/**/*.astro` · `src/content/pages/*.ts` with `defineCollection` + Zod · `src/styles/global.css` for the `@theme` block. |
| **6. Content model** | Becomes an Astro **content collection** with a Zod schema — the `PageContent` interface converts almost line-for-line. Better than the Next version: build fails on a missing field. |
| **7. Components** | Drop all `'use client'` distinctions. Everything is `.astro` (zero JS) except the form, which is either a plain progressively-enhanced `<form>` or one small island. |
| **8. Forms** | Server Action → Astro endpoint (`src/pages/api/lead.ts` with `export const prerender = false`) **or** a hosted form action. Zod validation, honeypot and rate limiting all carry over unchanged. |
| **9. Tracking** | `next/script` → plain `<script>` in the layout. Simpler. The `conv('lead'\|'call')` helper is unchanged. |
| **10. SEO** | Next Metadata API → props on an `<SEO>` component. `@astrojs/sitemap` handles the sitemap. JSON-LD identical. |
| **11. Fonts** | `next/font` → self-host Montserrat via Fontsource (`@fontsource-variable/montserrat`) with `font-display: swap`. |
| **Unchanged** | Sections 2 (one template, content-driven), 4 (route map), 5 (design tokens — `@theme` is Tailwind, framework-independent), 12 (accessibility), 13 (env vars), 14 (deployment/DNS), 16 (acceptance checklist). |

**Section 2 is still the most important thing in the spec** — one template, content-driven, ordered optional sections. That's a stronger fit in Astro than it was in Next.

---

## The question that would change my answer

**Does this ever become an application?** Online booking, live availability calendar, customer accounts, automated quoting, invoicing.

If yes — and for a hire business that's a plausible two-year direction — you'd still want the marketing pages static and separate. Decoupling is correct: the landing pages are conversion infrastructure that changes weekly with ad testing, the booking system is an application that changes with releases. Different jobs, different cadences, different risk profiles. Don't couple them, and don't pre-build for it now.

**If you already run Laravel elsewhere** and one stack genuinely reduces your maintenance burden more than the performance costs you — that's a legitimate reason to override everything above. It's your time being spent. But for five pages and a form, on paid traffic, static wins on the merits.

---

## Sources

- [Astro vs Next.js 2026 — 9KB vs 463KB JS, tested](https://tech-insider.org/astro-vs-nextjs-2026/)
- [Astro in 2026 — why it's beating Next.js for content sites, and the Cloudflare acquisition](https://dev.to/polliog/astro-in-2026-why-its-beating-nextjs-for-content-sites-and-what-cloudflares-acquisition-means-6kl)
- [Best static site generators 2026 — Astro, Next.js, Hugo](https://thesoftwarescout.com/best-static-site-generators-2026-astro-next-js-hugo-more/)
- [Astro 5/6 zero-JavaScript framework guide](https://byteiota.com/astro-zero-javascript-framework/)
- [Building fast sites with Astro — 2026](https://tech-insider.org/astro-tutorial-content-site-13-steps-2026/)
