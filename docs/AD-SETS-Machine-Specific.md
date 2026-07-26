# Machine-specific ad sets
### Static creative only. Every ad set below is buildable tonight; five of the creatives need no photos at all.

---

## Read this before you build anything

You asked for ad sets per machine. Here's the full architecture — but there's a budget constraint you need to decide on first, because it determines whether you launch all of them or sequence them.

**Meta needs roughly 50 conversions per ad set per week to optimise properly.** At $25/day split three ways, each ad set gets $8/day, which at a $30 cost per lead is about two leads a week per ad set. Meta learns nothing from that, and neither do you.

| Option | Budget | Structure | Trade-off |
|---|---|---|---|
| **A — Sequenced** *(recommended at your budget)* | **$25/day** | One ad set, 4 machine-specific creatives. Meta's creative optimisation tells you which machine the market wants. Split into machine-specific ad sets in week 4. | Slower to isolate each machine, but you actually learn something |
| **B — Parallel** | **$75/day** | Three machine-specific ad sets from day one, $25 each | Fastest clean read per machine. Triple the spend. |
| **C — Split the difference** | **$40/day** | Two ad sets: GPS/precision $25, telehandler $15 | Reasonable compromise if you can stretch |

**Option A is the honest recommendation.** The creative-level reporting inside a single ad set will still tell you whether GPS, rubber pads or the telehandler is pulling — you just read it at the ad level instead of the ad-set level. Everything below is built so you can flip to the machine-specific structure the moment you see a winner or the budget grows.

---

## Naming convention — set this up now

You'll thank yourself in a month. Use pipes so it's readable in the reporting table.

```
CAMPAIGN   YANTA | LEADS | [theme]
AD SET     AS | [audience] | [geo] | [budget]
AD         AD | [machine] | [angle] | [format] | v[n]
```

Examples:
```
YANTA | LEADS | Capability Test
  AS | Broad | Rocky 100km | $25
    AD | 14T | GPS-MachineControl | Static-Text | v1
    AD | 14T | RubberPads | Static-Photo | v1
    AD | 7T-TH | Scarcity-3vs7 | Static-Text | v1
    AD | 35T | AvailableNow | Static-Photo | v1
```

---

# PHASE 1 — Weeks 1–3

## Campaign: `YANTA | LEADS | Capability Test`

| Setting | Value |
|---|---|
| Objective | **Leads** |
| Conversion location | **Instant forms** |
| Budget | **$25/day, campaign level (CBO)** |
| Attribution | 7-day click, 1-day view (default) |
| Special ad category | **None** — you're not credit/housing/employment/politics |

### Ad Set: `AS | Broad | Rocky 100km | $25`

| Setting | Value |
|---|---|
| Location | **Rockhampton + 100km radius**, "People living in this location" |
| Age | 25 – 65+ |
| Gender | All |
| Detailed targeting | **None.** Leave it broad. |
| Advantage+ audience | **On** |
| Placements | **Advantage+ / automatic** |
| Optimisation | Leads |
| Ads | 4 (one per capability — below) |

**Why no interest targeting:** the pool inside 100km of Rocky is small enough that interest layers starve delivery, and Meta has pruned most of the useful B2B interests anyway. Modern Meta finds the right people from *creative signals* — a GPS machine-control ad self-selects contractors far better than an interest list does. Let the creative do the targeting.

**Then leave it alone for 7 days.** Every edit restarts the learning phase.

### The four Phase 1 ads

| # | Ad name | Machine | Angle | Photo needed? |
|---|---|---|---|---|
| 1 | `AD \| 14T \| GPS-MachineControl \| Static-Text \| v1` | 14T | Trimble Earthworks | **No** ✅ |
| 2 | `AD \| 14T \| RubberPads \| Static-Photo \| v1` | 14T | Surface-safe | Yes |
| 3 | `AD \| 7T-TH \| Scarcity-3vs7 \| Static-Text \| v1` | Telehandler | 7T vs 3T | **No** ✅ |
| 4 | `AD \| 35T \| AvailableNow \| Static-Photo \| v1` | 35T | Availability | Yes |

Two of the four need no photography. Launch with those two tonight if Ian hasn't shot anything yet, then add 2 and 4 when he has.

**Read at day 14 / ~$350 spend.** Kill any ad under 0.7% CTR or above 2× the best ad's cost per lead. Whichever *machine* wins becomes your Phase 2 primary ad set.

---

# PHASE 2 — Week 4 onward: the machine-specific ad sets

Build all four. Switch on the ones the Phase 1 data justifies.

---

## Ad Set A — `AS | GPS-Precision | Rocky 150km | $15`
### The 14T with Trimble Earthworks. Your premium asset.

| Setting | Value |
|---|---|
| Location | **Rockhampton + 150km** — widen it. Contractors will float a GPS machine further because the capability is scarce, and this is your highest-value work. Include Gladstone and Emerald. |
| Age | 28 – 60 |
| Detailed targeting | Try, in this order — use whatever Meta actually offers you: `Civil engineering` · `Construction` · `Heavy equipment` · `Surveying` · `Construction management` · `General contractor`. Under **Demographics → Work → Industries**, add `Construction and Extraction`. Under **Behaviours**, add `Small business owners`. |
| Advantage+ audience | **Try OFF here** — look for "switch to original audience options". This is the one ad set where narrowing genuinely helps, because you want contractors, not landowners. If Meta forces Advantage+ on, accept it; the creative is specific enough to self-select. |
| Budget | $15/day |
| Form | **Form GPS** (below) |
| Success metric | Cost per *qualified* lead under $150. This machine earns a premium rate, so a $120 lead is cheap. |

**Ads in this set:** G1, G2, G3, G4 (below). Run 3 at a time.

**Note:** Meta removed a lot of niche B2B interests in recent years, so some of the above may not appear in your account. Use what exists, and don't force it — if you can only find `Construction`, that plus this creative is enough.

---

## Ad Set B — `AS | SurfaceSafe-RubberPads | Rocky 100km | $10`
### The 14T's second, separate market. Different buyer, different pain.

| Setting | Value |
|---|---|
| Location | Rockhampton + 100km. This is town work — tighten it if anything. |
| Age | 28 – 60 |
| Detailed targeting | `Plumbing` · `Construction` · `Concrete` · `Landscaping` · `Property management` · `Facility management`. Behaviours: `Small business owners`. |
| Budget | $10/day |
| Form | **Form GENERAL** |
| Success metric | Cost per qualified lead under $80 |

**Why this deserves its own ad set:** the rubber-pad buyer isn't the GPS buyer. A plumber doing a driveway repair, a facilities manager at a shopping centre, and a council footpath crew all care about *not damaging a surface* and don't care at all about machine control. Different message, different person, same machine — that's textbook grounds for a separate ad set.

**Ads:** R1, R2 (below).

---

## Ad Set C — `AS | Telehandler-7T | Rocky 150km | $15`
### The scarce machine. Sells as wet hire.

| Setting | Value |
|---|---|
| Location | **Rockhampton + 150km**, incl. Gladstone, Biloela, Emerald. 7T telehandlers are rare enough that people will pay to bring one in. |
| Age | 25 – 60 |
| Detailed targeting | `Steel` · `Structural engineering` · `Construction` · `Welding` · `Warehouse` · `Industrial engineering` · `Agriculture` (shed builds on rural properties). Behaviours: `Small business owners`. |
| Budget | $15/day |
| Form | **Form TELEHANDLER** (below) |
| Success metric | Cost per qualified lead under $120 |

**Ads:** T1, T2, T3 (below).

---

## Ad Set D — `AS | 35T-BulkEarthworks | Rocky 200km | $10`
### The commodity machine. Run it lean; fill it by phone instead.

| Setting | Value |
|---|---|
| Location | **Rockhampton + 200km.** A 35T floats a long way for a big job. |
| Age | 30 – 65 |
| Detailed targeting | `Civil engineering` · `Construction` · `Heavy equipment` · `Mining`. Behaviours: `Small business owners`. |
| Budget | $10/day, or **$0** |
| Form | **Form GENERAL** |
| Success metric | Honestly? Low expectations. |

**Be realistic about this one.** Big-iron hire is won on availability and relationships, not Facebook ads. The 35T will almost certainly be filled faster by ringing other hire companies for cross-hire (see the Week 1 sprint) than by any amount of ad spend. Run this ad set only if there's budget spare after A and C, and don't judge the campaign on it.

---

## Ad Set E — `AS | Rural-Packages | Rocky 120km | $10`
### Keep it, but demote it.

Everything from the original plan (dam clean-outs, house pads, fenceline clearing) still works and produces the cheapest leads you'll get. It's just no longer the lead strategy — it's calendar filler between contractor jobs. Broad targeting, age 35–65+, ads A1/A6 from the main swipe file.

---

## Ad Set F — `AS | Retarget-AllTraffic | $5`
### From week 5, once the pixel has ~100 events.

Audiences to include: landing page visitors who didn't submit · instant-form openers who didn't submit (Meta offers this natively — very high intent) · Page and Instagram engagers, 90 days · your uploaded customer list.

**Exclude:** anyone who already submitted a lead form. Run the guarantee card (A5) and the "still need that machine?" copy.

---

## Budget allocation at a glance

```
$25/DAY  (Phase 1, weeks 1-3)
└── AS | Broad | Rocky 100km ........................ $25
    4 creatives, one per machine. Discovery.

$40/DAY  (Phase 2 minimum)
├── AS | GPS-Precision | 150km ...................... $25
└── AS | Telehandler-7T | 150km ..................... $15

$75/DAY  (Phase 2 full)
├── AS | GPS-Precision | 150km ...................... $25
├── AS | Telehandler-7T | 150km ..................... $15
├── AS | SurfaceSafe-RubberPads | 100km ............. $10
├── AS | Rural-Packages | 120km ..................... $10
├── AS | 35T-BulkEarthworks | 200km ................. $10
└── AS | Retarget-AllTraffic ........................ $5
```

**If you only ever run two ad sets: GPS-Precision and Telehandler-7T.** They're the scarce capabilities, they command premium rates, and they face the least local competition.

---

# INSTANT FORM VARIANTS

Three forms, not one. A GPS enquiry and a telehandler enquiry need different qualifying questions, and asking the right ones is what separates a real job from a tyre-kicker.

All three: form type **Higher intent** · **review screen ON** · **tap-to-call button on the completion screen** · completion text *"Got it — we'll text you within 5 minutes. In a hurry? Ring Ian now."*

## Form GPS

| # | Question | Options |
|---|---|---|
| 1 | What's the job? | Building/shed pad · Drainage or pipe grades · Detention basin or dam · Road or subgrade · Bulk earthworks · Something else |
| 2 | Have you got machine control on your own gear? | No — that's why I'm asking · Yes, but need another machine · Not sure what that means |
| 3 | Have you got a design file or survey model? | Yes, ready to go · Surveyor's working on it · No — need help with that |
| 4 | Operator? | Yes, bring one · No, dry hire (we have a GPS-trained operator) · Not sure |
| 5 | When? | This week · Next 2 weeks · This month · Just pricing |
| 6 | Where's the job? | *short answer* |

**Question 2 is the money question.** "No — that's why I'm asking" is your best lead in the entire funnel. **Question 3 protects you** — it surfaces the design-file problem before you've promised anything.

## Form TELEHANDLER

| # | Question | Options |
|---|---|---|
| 1 | What are you lifting? | Steel / portal frames / purlins · Precast or panels · Pallets or bulk bags · Plant or machinery components · Something else |
| 2 | Heaviest lift? | Under 3 tonne · 3–5 tonne · 5–7 tonne · Not sure |
| 3 | How high? | Under 6m · 6–12m · Over 12m · Not sure |
| 4 | Have you got a CN-ticketed operator? | No — need one supplied · Yes · Not sure what that is |
| 5 | When and how long? | *multiple choice* |
| 6 | Where's the job? | *short answer* |

**Question 4 does two jobs:** it qualifies them, and it plants the idea that they'll need your operator — which is the higher-value sale.

## Form GENERAL

The six-question form from the main strategy doc. Use for rubber pads, 35T and rural.

---

# STATIC CREATIVES

Nothing below needs video. The ✅ ones need no photograph either — I've generated those as upload-ready PNGs in `/ad-creative`.

---

## GPS / machine control — Ad Set A

### G1 ✅ — "Haven't got machine control?" *(no photo — file supplied)*

**Creative:** Navy `#002B5C`, white Montserrat, green rule.
```
HAVEN'T GOT
MACHINE CONTROL?
—————
WE HAVE.
14T · TRIMBLE EARTHWORKS
```

**Primary text**
```
Haven't got machine control on your own gear?

We've got a 14 tonne excavator running Trimble Earthworks — full 3D grade control. Load the design, dig straight to it. No string lines, no batter boards, nobody standing in the trench with a level, and no going back over it.

Contractors running machine control reckon it about halves the time on grade work. It also stops you over-digging and then buying fill back.

Rubber pads on the tracks as well, so it works on driveways, car parks and footpaths without wrecking them.

Rockhampton and across Central Queensland. Wet or dry hire. Tell us the job and you'll have a written price within 4 business hours — float included.
```
**Headline:** `GPS excavator hire — dig straight to design`
**Description:** `Trimble Earthworks 14T · Rocky & CQ`
**CTA:** `Get quote`

### G2 — The spec card *(photo optional)*

**Creative:** 14T on a job with the Trimble screen visible in the cab if you can get it. Overlay panel listing: `3D GRADE CONTROL` / `RUBBER PADS` / `WET OR DRY` / `ROCKHAMPTON & CQ`

**Primary text**
```
What you're actually hiring:

→ 14 tonne excavator
→ Trimble Earthworks 3D machine control — dig to design, first pass
→ Rubber pads, so it won't mark concrete, asphalt or pavers
→ Wet or dry hire
→ 30+ years' experience, family owned, based near Rockhampton

Pads, drainage grades, detention basins, subgrade, batters, trenching.

There aren't many GPS machines available for hire in Central Queensland. If you've got a job with a design to hit, this is the one.
```
**Headline:** `Trimble-equipped 14T excavator — CQ`
**CTA:** `Get quote`

### G3 ✅ — The cost-of-rework angle *(no photo — file supplied)*

**Creative:** Navy, white text.
```
DIG IT ONCE.
—————
TRIMBLE EARTHWORKS 14T
ROCKHAMPTON & CQ
```

**Primary text**
```
Every load of dirt you over-excavate, you pay for twice — once to dig it out, once to buy fill and put it back.

Machine control stops that. Our 14 tonne runs Trimble Earthworks, so it digs to the design surface, not to someone's best guess. Fewer passes, less rework, fewer survey checks, and you're off site sooner.

Wet or dry hire. Rockhampton and across CQ.

Send us the job — written price back within 4 business hours.
```
**Headline:** `Stop paying for over-excavation`
**CTA:** `Get quote`

### G4 — Surveyor-relief angle *(photo optional)*

**Primary text**
```
How much are you spending on set-out?

String lines, batter boards, a surveyor back on site every time the design changes, someone in the trench with a staff. Then you check it, and it's out, and you do it again.

Our 14 tonne runs Trimble Earthworks 3D machine control. The design goes in the machine. The operator digs to it and sees the cut and fill on screen as he goes.

Rockhampton and across Central Queensland. Wet or dry hire.
```
**Headline:** `Fewer set-outs, fewer checks, less rework`
**CTA:** `Get quote`

---

## Rubber pads / surface-safe — Ad Set B

### R1 ✅ — "Won't wreck your concrete" *(no photo — file supplied)*

**Creative:** Navy, white text, green rule.
```
WON'T WRECK
YOUR CONCRETE
—————
RUBBER-PADDED 14T
```

**Primary text**
```
Steel tracks across a client's new driveway is a conversation nobody wants to have.

Our 14 tonne runs rubber pads. It tracks over concrete, asphalt and pavers without marking them — so no plywood, no track mats, and no resurfacing bill at the end of the job.

Driveway repairs, car parks, footpaths, service stations, factories, schools, aged care — anywhere the client is watching and the surface has to survive.

It's also running Trimble Earthworks GPS, so if there's a design to hit, we'll hit it.

Rockhampton and across CQ. Wet or dry hire.
```
**Headline:** `Rubber-tracked 14T — works on finished surfaces`
**Description:** `No track mats. No resurfacing bill.`
**CTA:** `Get quote`

### R2 — The close-up *(photo needed)*

**Creative:** Tight shot of the rubber pads sitting on clean concrete. This one photo is worth taking specifically — it's the entire proof of the claim in one frame.

**Primary text**
```
That's a 14 tonne excavator sitting on a concrete driveway. No mats, no plywood, no damage.

Rubber pads. It means we can get into jobs most machines can't go near — driveway and pipe repairs through finished surfaces, car parks, footpaths, hardstand inside factories and workshops.

Rockhampton and across Central Queensland. Wet or dry hire, and there's Trimble GPS on board if you've got a design to dig to.
```
**Headline:** `14 tonne. On concrete. No damage.`
**CTA:** `Get quote`

---

## 7T telehandler — Ad Set C

### T1 ✅ — "Most are 3 tonne. Ours is 7." *(no photo — file supplied)*

**Creative:** Navy split panel, `3T` vs `7T` with the 7 dominant in green.

**Primary text**
```
Most telehandlers you'll hire around here are 3 tonne. Ours is 7.

Portal frames, purlin bundles, precast, bulk bags, plant components, awkward lifts at height — the stuff a 3 tonne can't touch and a crane is overkill for.

One thing worth knowing: over 3 tonne with a jib fitted, the operator needs a CN ticket. We bring one, so you don't have to go looking for one.

Shed builds, industrial maintenance, shutdowns, solar. Rockhampton and across Central Queensland.

Tell us the lift and we'll come back with a written price.
```
**Headline:** `7 tonne telehandler — operator included`
**Description:** `Double the capacity of a standard hire unit`
**CTA:** `Get quote`

### T2 ✅ — The ticket angle *(no photo — file supplied)*

**Creative:** Navy, white text.
```
WE BRING
THE CN TICKET
—————
7T TELEHANDLER · ROCKY & CQ
```

**Primary text**
```
A telehandler over 3 tonne with a jib on it legally needs a CN non-slewing crane licence to operate. Most people ringing us haven't got one, and finding a ticketed operator at short notice is a nightmare.

So we bring the operator with the machine.

7 tonne telehandler. Steel, precast, bulk bags, plant components, lifts at height. Shed builds, industrial maintenance, shutdown work.

Rockhampton and across Central Queensland. Tell us the lift.
```
**Headline:** `7T telehandler + ticketed operator`
**CTA:** `Get quote`

### T3 — Shed builders, specifically *(photo needed)*

**Creative:** Telehandler with a portal frame or purlin bundle at height.

**Primary text**
```
Putting up a shed and short of a machine?

7 tonne telehandler available out of Rockhampton — plenty for portal frames, purlins, roof sheets and the awkward stuff up high. Operator supplied with a CN ticket, so you're not chasing one.

Cheaper and quicker to get on site than a crane for most shed and industrial builds.

Rockhampton and across CQ. Tell us the job and the lift weights.
```
**Headline:** `7T telehandler for shed & steel builds`
**CTA:** `Get quote`

---

## 35T — Ad Set D

### D1 ✅ — Availability *(no photo — file supplied)*

**Creative:** Navy, white text, `35 TONNE / AVAILABLE NOW`

**Primary text**
```
35 tonne excavator available now, out of Rockhampton.

Bulk earthworks, dam construction, civil, demolition, rock. Wet or dry hire, and we travel across Central Queensland.

Float included in the quoted price. No minimum-hour surprises. On site when we say, or the float's free.

If you're a contractor who's over-committed and needs a machine at short notice, ring Ian direct on 0429 165 375.
```
**Headline:** `35 tonne excavator — available now`
**CTA:** `Get quote`

*Note the last line — it's aimed squarely at cross-hire from other operators, which is the fastest realistic way to fill this machine.*

---

# LAUNCH ORDER — what to do tonight

**You've already got photos, so you can launch the strong versions immediately.** Run `make-photo-ads.py` in `/ad-creative` — it turns your photos into branded ads at all three ratios in about two minutes.

```
TONIGHT   Pull 5 photos from your library:
            1. Rubber pads on clean concrete   ← most valuable single photo
            2. 14T working, Trimble screen visible in cab
            3. 7T telehandler with a load up high
            4. 35T side profile, low angle
            5. A before/after pair, or a finished dam or pad

          Run make-photo-ads.py  ->  15 branded ad files

          Campaign: YANTA | LEADS | Capability Test
          One ad set, $25/day, Rocky 100km, broad, Advantage+
          Load 4 ads — mix photo and text so you learn which style wins:
            • PHOTO  14T + Trimble          (copy: G1)
            • PHOTO  rubber pads on concrete (copy: R1)
            • TEXT   T1-3-vs-7-tonne         (copy: T1)
            • TEXT   G1-machine-control      (copy: G3)

          Build Form GPS + Form TELEHANDLER. Tap-to-call on completion.
          Publish.

DAY 7     First read. Don't touch anything before this.

DAY 14    Kill under 0.7% CTR or 2x the best CPL.
          Identify the winning MACHINE and the winning STYLE (photo vs text).

WEEK 4    Split into Phase 2 ad sets, weighted to the winner.
          Add retargeting once the pixel has ~100 events.
```

**Mixing photo and text ads in the same ad set is deliberate.** Text-only "ugly ads" regularly beat polished creative for local trades, and photo ads usually win on trust. You don't know which applies to CQ plant hire until you run both — and it costs nothing extra to find out.

---

# The rule that still decides everything

Ad sets, targeting and creative are the easy part. **Every lead gets a text inside 5 minutes and a written price inside the hour.** A GPS enquiry from a contractor who's mid-tender will go to whoever answers first — and it won't be the mob who ring back Thursday.

---

*Copy for the rural and general ads is in `Ad-Copy-Swipe-File.md`. Positioning rationale is in `FLEET-DIFFERENTIATION-Revised-Positioning.md`.*
