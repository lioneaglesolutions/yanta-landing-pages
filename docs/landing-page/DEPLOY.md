# Deploying the Yanta landing page

Single static HTML file. No build step, no framework, no dependencies.

## 1. Fill in the four placeholders

Search `index.html` for each:

| Find | Replace with | Where to get it |
|---|---|---|
| `YOUR_PIXEL_ID` (2 places) | Your Meta Pixel ID | Events Manager → Data Sources → your pixel |
| `YOUR_FORMSPREE_ID` | Your form endpoint ID | formspree.io → free plan → New Form |
| `[$X]` (3 places) | Real "from" prices | Your own pricing worksheet |
| `PHOTO —` divs | `<img src="img/...">` | Ian's phone (see shot list) |

**Formspree setup (5 min):** create the form, set notifications to `admin@yanta.com.au` **plus an inbox that pushes to a phone**. A form nobody sees in time is worse than no form. Free plan allows 50 submissions/month — plenty for this test, and if you outgrow it that's a good problem.

**Prefer no third party?** Swap the form action for a Vercel serverless function at `/api/lead.js` using Resend or Nodemailer. Formspree is faster to stand up and one less thing to debug in week 1.

## 2. Add the privacy policy

Meta **requires** a reachable privacy policy URL for lead ads. Create `privacy.html` in the same folder — a short page covering what you collect (name, phone, email, job details), why (to quote and contact you), that you don't sell it, and how to request deletion.

## 3. Deploy

```bash
cd landing-page
npx vercel          # first run walks you through login + project creation
npx vercel --prod   # ship it
```

Or drag the folder onto [vercel.com/new](https://vercel.com/new).

## 4. Custom domain

Vercel → Project → Settings → Domains → add `hire.yanta.com.au`, then add the CNAME Vercel gives you at whoever hosts yanta.com.au's DNS.

Use a **subdomain of the existing domain**, not a new one. A brand new domain has no trust and no history; `hire.yanta.com.au` inherits both.

## 5. Verify before you spend money

- [ ] Open on a **real phone** — the sticky call bar should sit at the bottom
- [ ] Tap the phone number — it should open the dialler
- [ ] Submit a test enquiry — did the email land? On a phone? Within seconds?
- [ ] Meta **Events Manager → Test Events** — confirm `PageView` and `Lead` both fire
- [ ] Verify the domain in Business Settings → Brand Safety → Domains
- [ ] Run it through PageSpeed Insights — should be near 100 unless the images are huge

## Image sizing

Compress everything before uploading. Hero: 1600px wide, under 250KB. Cards: 800px wide, under 120KB. Use [squoosh.app](https://squoosh.app) — free, in-browser, no signup. Uncompressed phone photos are 4–8MB each and will destroy your load time, which costs you leads and raises your CPM.

## Add UTMs to your ad links

In the ad's website URL field:

```
https://hire.yanta.com.au/?utm_source=facebook&utm_campaign=rural_packages&utm_content=a1_beforeafter
```

The page stamps this into the form submission, so your inbox tells you which ad produced each lead.
