# Google Ads playbook
### Rockhampton plant hire + poly welding. Search only. Reallocates budget away from Facebook.

---

## The short answer: yes, and it should probably come first

Facebook and Google do different jobs:

| | Facebook | Google Search |
|---|---|---|
| What it does | **Demand generation** — interrupts people who weren't looking | **Demand capture** — catches people typing "excavator hire rockhampton" right now |
| Best for | Rural landowners who didn't know they could hire a machine | Contractors who need iron *this week* |
| Intent | Low to moderate | **Very high** |
| Cost per click | ~$1.50–2.50 | ~$4–9 in a regional market |
| Cost per *qualified* lead | Higher | **Lower** |
| Volume available | Large | **Small but nearly all of it winnable** |

**For contractors, GPS hire and especially poly welding, Google is the better channel.** Somebody searching "poly welder hire" has a pipeline job and a problem. Nobody idly Googles that.

**The counter-intuitive good news: Rockhampton's search volume is low.** That sounds bad, it isn't. It means $12–15/day can capture most of the high-intent demand that exists locally. You physically cannot spend $750/month on "excavator hire rockhampton" — you'd run out of searches. So Google is cheap to saturate and Facebook mops up the rest.

### Revised budget split

| Total | Google Search | Facebook | Reasoning |
|---|---|---|---|
| **$25/day** (current) | **$12** | **$13** | Google captures existing demand, FB generates new |
| $40/day | $15 | $25 | Google is near-saturated at $15; extra goes to FB |
| $60/day | $18 | $42 | Same — Google has a ceiling in a market this size |

**Don't push Google past about $18/day in this market.** Once you're capturing the available searches, extra budget just bids up your own CPCs. Facebook is where incremental spend scales.

**Benchmarks to judge against:** the Australian average CPC is around $3.81. Trades sit at roughly $9.25 median. "Service + city" searches run $13.70 in Adelaide up to $23.21 in Sydney — but those are capital-city figures. **Rockhampton should come in well under them** because there's far less competition. If you're paying Sydney prices in Rocky, something's misconfigured.

---

## Landing pages — yes, and this bit matters more on Google than on Facebook

**Never send Google traffic to yanta.com.au.** It's a mining and civil corporate site. Someone searching "poly welder hire" lands there, doesn't immediately see a poly welder for hire, and leaves — and Google punishes you twice: once in conversion rate, once in Quality Score, which raises your CPC on every future click.

**Message match is the rule.** The page has to visibly answer the exact phrase they typed, in the headline, above the fold. Google grades "landing page experience" as one of three Quality Score components, so a dedicated page literally makes your clicks cheaper. This is not a nice-to-have.

### Three pages, mapped to ad groups

| Ad group | Sends to | Status |
|---|---|---|
| Excavator hire · Plant & earthmoving · Telehandler | `hire.yanta.com.au/` | ✅ built |
| **Poly welder hire · Poly welding services** | `hire.yanta.com.au/poly-welder-hire` | ✅ **built** |
| GPS / machine control | `hire.yanta.com.au/gps-excavator-hire` | 15-min variant, spec below |

Three, not six. One page per *theme*, not per keyword — beyond that you're maintaining pages nobody visits.

### What's different about a Google landing page

Facebook traffic is cold and needs convincing. Google traffic already knows what it wants and is comparing suppliers. So:

- **Phone number bigger and higher.** Most plant hire conversions on Google are calls, not forms. The poly page has it in the sticky header, a sticky mobile bar, the hero and the footer.
- **Shorter.** Cut the "why you might want to hire a machine" education — they're past that.
- **Answer "do you actually have it?" in the first three seconds.** Machine name, size range, location. The poly page leads with "Tecnodue Bushranger 630, 315–630mm, based near Rockhampton".
- **Give the price objection a home.** A "what's it cost" FAQ that explains why there's no headline rate beats silence, and it stops the back-button.
- **Use a Google Ads call forwarding number** on the page if you want call conversions attributed. Otherwise you'll never know which keyword produced the phone call.

### Building the GPS variant (15 minutes)

Copy `poly-welder-hire.html` to `gps-excavator-hire.html` and swap six things:

1. **Title:** `GPS Excavator Hire — Trimble Earthworks 14T | Rockhampton & CQ`
2. **H1:** `GPS excavator hire — dig straight to the design.`
3. **Hero sub:** 14T with Trimble Earthworks 3D machine control and rubber pads. Wet or dry hire.
4. **Two paths:** "Machine + GPS-trained operator" / "Dry hire — you supply the operator"
5. **Spec table:** machine, tonnage, Trimble Earthworks, rubber pads, correction source, wet/dry
6. **FAQ:** swap in — *do you supply the base station or RTK corrections · can you load our design file · what format do you need the design in · do we need a GPS-trained operator · does it work on finished surfaces*

Points 5 and 6 are the ones that matter. **Answer the RTK correction and design-file questions honestly on the page** — if a contractor arrives expecting corrections included and there's no base station, that's a refund and a bad review, not a sale.

---

## Before you spend a cent

- [ ] **Google Business Profile** — free, and it puts you in the map pack for "excavator hire rockhampton". Set it up first. Ads perform better alongside a strong local profile.
- [ ] **Landing page live** at `hire.yanta.com.au` — Google quality score depends on it, and the page is already built
- [ ] **Conversion tracking, properly.** This is the one that gets skipped and it wrecks everything. You need three:
  - Form submit on the landing page (Google Tag)
  - **Calls from ads** (Google counts calls over 60 seconds)
  - **Calls from the website** (a Google forwarding number on the page)
- [ ] Set **calls as a primary conversion.** In plant hire most of your conversions will be phone calls, not forms. If you only track forms, Google optimises toward the minority of your actual business.
- [ ] Turn **auto-apply recommendations OFF.** Google will otherwise quietly add broad keywords and burn your budget.

---

# Campaign 1 — `Search | Plant Hire | Rockhampton`
**$7/day**

| Setting | Value |
|---|---|
| Campaign type | **Search only.** Uncheck the Display Network. Uncheck "search partners" for the first month. |
| Locations | Rockhampton + 150km radius. Add Gladstone, Emerald, Yeppoon, Gracemere, Biloela. |
| Location option | **"Presence: people in or regularly in your targeted locations."** Not the default "presence or interest" — that shows your ads to people in Melbourne reading about Rockhampton. |
| Languages | English |
| Bidding | **Maximise clicks with a max CPC cap of $9** for the first 2–3 weeks. Switch to Maximise conversions once you have 15–30 conversions. |
| Ad rotation | Optimise |
| Match types | **Phrase and exact only.** No broad match at this budget — it's how small accounts haemorrhage money. |

### Ad group 1.1 — Excavator hire

```
[excavator hire rockhampton]
[digger hire rockhampton]
[excavator hire gracemere]
[excavator hire yeppoon]
[excavator hire gladstone]
[excavator hire emerald]
"excavator hire near me"
"excavator dry hire"
"excavator wet hire"
"14 tonne excavator hire"
"35 tonne excavator hire"
"excavator and operator hire"
```

### Ad group 1.2 — Plant & earthmoving (generic)

```
[plant hire rockhampton]
[machinery hire rockhampton]
[earthmoving equipment hire rockhampton]
"earthmoving hire rockhampton"
"heavy machinery hire rockhampton"
"plant hire central queensland"
```

### Ad group 1.3 — Telehandler

```
[telehandler hire rockhampton]
[telehandler hire gladstone]
"telehandler hire"
"telehandler dry hire"
"7 tonne telehandler hire"
"telehandler and operator"
```

### Ad group 1.4 — GPS / machine control ★ tiny volume, near-zero competition, superbly qualified

```
"gps excavator hire"
"machine control hire"
"trimble excavator hire"
"gps machine control hire"
"3d machine control hire"
"gps excavator hire queensland"
```

This ad group will get very few impressions. Run it anyway — the clicks it does get are contractors mid-tender, and they'll be some of the cheapest genuinely qualified leads in the whole account.

---

# Campaign 2 — `Search | Poly Welding | QLD` ★ your best Google opportunity
**$5/day**

Separate campaign because the **geography is completely different**. A 630mm butt fusion machine is scarce enough that people will freight it interstate — so don't confine this to a 150km radius.

| Setting | Value |
|---|---|
| Locations | **Queensland statewide**, plus northern NSW and NT if you're willing to freight. Bowen Basin, Surat Basin and the Fitzroy irrigation districts are the demand centres. |
| Location option | Presence |
| Bidding | Maximise clicks, max CPC $12 (higher cap — these leads are worth far more) |
| Match types | Phrase and exact |

### Ad group 2.1 — Poly welder hire ★ the money ad group

```
[poly welder hire]
[poly welding machine hire]
[butt fusion welder hire]
[butt welder hire]
[hdpe welder hire]
[poly pipe welder hire]
"poly welding machine rental"
"630mm butt welder hire"
"butt fusion machine hire"
"poly fusion machine hire"
"electrofusion welder hire"
"poly welder hire queensland"
```

### Ad group 2.2 — Poly welding services (they want the job done, not the machine)

```
[poly welding rockhampton]
[poly welding contractor]
[hdpe pipe welding rockhampton]
[poly welding central queensland]
"poly welding services"
"hdpe welding contractor queensland"
"poly pipe welding contractor"
"poly welder rockhampton"
```

**Ad group 2.2 may be worth more than 2.1.** Someone searching "poly welding contractor" wants Yanta's actual core service — the welding done, with certified welders and weld reports. That's a far bigger ticket than a machine rental, and it's the business your parents already know how to run.

---

## Negative keywords — add these before you launch

Paste into a shared negative list applied to both campaigns. **This list is the difference between Google working and Google being a money fire.**

```
# job seekers
jobs, job, careers, career, employment, employ, vacancy, vacancies
salary, salaries, wage, wages, pay, hourly rate, apprentice, apprenticeship
traineeship, seek, indeed, gumtree jobs

# training (huge for poly welding — most searches are people wanting tickets)
course, courses, training, train, certificate, certification, cert iii
ticket, tickets, licence, license, licensing, pmbweld, tafe, rto
how to, how do, what is, tutorial, learn, qualification, vocational
assessment, refresher

# buying, not hiring
for sale, buy, buying, purchase, used, second hand, secondhand
new, price list, cost of, finance, lease to buy, auction, trade in

# parts and repairs
parts, spare parts, spares, repair, repairs, service manual, manual
pdf, wiring, hydraulic hose, tracks for sale, bucket for sale

# irrelevant
free, cheap, cheapest, diy, toy, toys, rc, remote control, model
simulator, game, games, minecraft, roblox, gta, fs22, farming simulator
youtube, video, images, wikipedia, definition, meaning

# competitors & retail (add back later only if you deliberately want to compete)
kennards, coates, bunnings, onsite rental, brooks hire, conplant
kubota dealer, cat dealer
```

**Then check the Search Terms report every single week for the first month.** Whatever nonsense you find, add it as a negative. This is the single highest-return 15 minutes in Google Ads and almost nobody does it.

---

## Responsive Search Ads

Google wants 15 headlines and 4 descriptions per ad group. Mix in the keyword, the location, and the differentiators.

### Ad group 1.1 — Excavator hire

**Headlines** (30 characters each)
```
Excavator Hire Rockhampton
14T & 35T Excavator Hire
Wet Or Dry Hire - You Choose
Written Price In 4 Hours
Float Included In The Price
GPS Machine Control Onboard
Family Owned, 30+ Years
Rubber Pads - No Surface Damage
Central Queensland Wide
On Site When We Say
Operator Supplied If You Need
No Minimum-Hour Surprises
Call Ian On 0429 165 375
Serviced, Insured, Ready To Go
Rockhampton Based Plant Hire
```

**Descriptions** (90 characters each)
```
14T with Trimble GPS & rubber pads, plus a 35T. Wet or dry hire across Central QLD.
Tell us the job. Written price back within 4 business hours, float included. No surprises.
On site when we say, or the float's free. Family owned near Rockhampton, 30+ years.
Rubber pads mean we work on concrete and asphalt without wrecking it. Call Ian direct.
```

**Pin discipline:** pin `Excavator Hire Rockhampton` to Headline position 1 so the keyword always shows. Leave the rest unpinned so Google can optimise.

### Ad group 1.3 — Telehandler

**Headlines**
```
7 Tonne Telehandler Hire
Telehandler Hire Rockhampton
Double The Usual Capacity
CN Ticketed Operator Included
Most Are 3T. Ours Is 7T.
Shed & Steel Builds
Written Price In 4 Hours
Central Queensland Wide
Call Ian On 0429 165 375
Industrial & Shutdown Work
```

**Descriptions**
```
7T telehandler - portal frames, purlins, precast, plant components. Rocky & CQ.
Over 3T with a jib needs a CN ticket. We supply the operator so you don't chase one.
Tell us the lift. Written price back within 4 business hours, float included.
Family owned near Rockhampton, 30+ years on the machines. Call Ian direct.
```

### Ad group 2.1 — Poly welder hire

**Headlines**
```
Poly Welder Hire - QLD
Butt Fusion Welder Hire
315-630mm Poly Welding
Tecnodue Bushranger 630
Certified Welder Available
HDPE Pipe Welding Machine
Based In Central Queensland
Dry Hire Or With A Welder
Semi-Automatic, Tracked
Weld Data Reports Supplied
Call Ian On 0429 165 375
No Interstate Freight Wait
```

**Descriptions**
```
Tecnodue Bushranger 630 - high pressure tracked butt welder, 315mm to 630mm pipe.
Dry hire to certified crews, or we supply a qualified welder and weld reports.
Based in Central QLD. No waiting on interstate freight. Call Ian direct.
Mining, CSG, civil and irrigation pipelines. Tell us the job for a written price.
```

---

## Assets and extensions — set all of these up

| Asset | What to put in it | Why |
|---|---|---|
| **Call asset** | `0429 165 375` | **Most important one.** Tradies tap to call, they don't fill forms. |
| **Location asset** | Link your Google Business Profile | Local proof, and it lifts CTR |
| **Sitelinks** | 14T GPS Excavator · 7T Telehandler · Poly Welder Hire · Get A Price | Free real estate, more clicks |
| **Callouts** | Float Included · Wet Or Dry Hire · 30+ Years · Written Price In 4hrs | |
| **Structured snippet** | Type: Services → Excavator Hire, Telehandler Hire, Poly Welding, Earthworks, GPS Machine Control | |
| **Call-only ads** | Consider a separate small campaign, business hours only | For "excavator hire near me" style urgent searches, a call-only ad converts hard |

**Ad schedule:** run 6am–7pm. Tradies search early. Overnight clicks on trade terms are mostly rubbish — but check your own data before you cut hours entirely.

---

## What NOT to do

| Don't | Why |
|---|---|
| **Performance Max** | Google's black box. It'll spend your $12/day on Display and YouTube junk and you'll never see where it went. Search only until you have real conversion volume. |
| **Display Network** | Terrible for this. Uncheck it every time. |
| **Broad match** | At $12/day it will find you "excavator toys" and "digger cake". |
| **Bid on competitors yet** | Expensive, low conversion, and it starts a fight. Revisit later. |
| **Set and forget** | Check the Search Terms report weekly for the first month. Non-negotiable. |
| **YouTube** | You've got no video, and it's the wrong intent anyway. |

---

## What good looks like

| Metric | Good | Watch it | Fix it |
|---|---|---|---|
| CTR (search) | over 8% | 4–8% | under 3% — your ad doesn't match the keyword |
| Average CPC | under $7 | $7–12 | over $15 in a regional market means something's wrong |
| Conversion rate (click → call or form) | over 10% | 5–10% | under 3% — landing page or keyword mismatch |
| Cost per conversion | under $80 | $80–150 | over $200 |
| Impression share | over 60% | 40–60% | under 30% — budget-limited, which in a market this small is fine to fix |

**Search Google Ads' own "Search terms" report weekly.** If you see terms you don't want, negative them. If you see terms you *do* want that aren't in your keyword list, add them as exact match.

---

## First fortnight, in order

```
DAY 1   Google Business Profile created and submitted for verification
        Google Ads account created, billing added
        Conversion tracking: form submit + calls from ads + calls from website
        Turn OFF auto-apply recommendations

DAY 2   Build Campaign 1 (Plant Hire, $7/day) - 4 ad groups
        Build Campaign 2 (Poly Welding, $5/day) - 2 ad groups
        Paste in the negative keyword list BEFORE going live
        Add all assets: call, location, sitelinks, callouts, snippets
        Launch.

DAY 4   Check the Search Terms report. Add negatives. Do not change bids yet.

DAY 7   Search Terms report again. More negatives.
        Check which ad groups are actually getting impressions.

DAY 14  First real read. Pause keywords with clicks and zero conversions.
        Move budget toward whichever ad group is converting.
        If you've got 15+ conversions, switch to Maximise Conversions.

DAY 30  Decide: does Google beat Facebook on cost per booked job?
        Shift the split accordingly. Expect Google to win on the
        contractor and poly welding side.
```

---

## Sources

- [Google Ads benchmarks by industry 2025 — average CPC across 23 industries](https://www.rockingweb.com.au/google-ads-benchmarks-by-industry-2025/)
- [How much does Google Ads cost in Australia, 2026 update](https://www.whitepeakdigital.com/blog/google-ads-cost-australia/)
- [Google Ads cost in Australia 2025](https://digital8.com.au/how-much-does-running-google-ads-cost-in-australia/)
- [Google Ads pricing guide for trades](https://tradiedigital.co/how-much-does-google-ads-cost/)
- [Yanta — Tecnodue Bushranger 630 specifications](https://www.yanta.com.au/tecnoduebushranger630)
