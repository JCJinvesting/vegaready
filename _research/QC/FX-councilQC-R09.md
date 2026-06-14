# gap-R09 — Rates dossier (P-09) mined for the Dollar/FX/Gold analyst page

**Scope.** Deep QC re-read of all four R-09 files (synthesis incl. §L curator gap-fill; Opus 4.8, GPT-5.5, Gemini 3.1 Pro councils), filtered for what *strengthens the FX/gold desk*: the dollar's real-rate engine, the fiscal/term-premium driver, the rates plumbing that transmits to FX, gold↔real-yield, the cross-asset dashboard, and foreign UST demand. Measured against the current FX page (§0–§10, incl. the 8+1 forced-seller taxonomy, TIC scoreboard, dollar smile, Triffin/twin-deficits, gold-vs-real-yields, Hormuz chains).

**Page-integrity reminder:** the FX page must present all of this as the desk's own analysis. Cite only DATA sources (FRED / NY Fed / Treasury TIC / CFTC / Fed FEDS Notes / Chicago Fed / EIA / BLS). Never reference "R-09", "council", or model names.

---

## (A) Per-council unique contributions (FX-relevant)

### Claude Opus 4.8 — unique, not fully in synthesis-as-used
- **Gold↔real-yield *decoupling as a signal in its own right*.** Gold at record (~$4,365) *despite* DFII10 **+2.16%** says the market is pricing geopolitical/fiat-trust risk *above* the ordinary opportunity-cost calculus. Opus uniquely frames the decoupling itself as the diagnostic (not just "gold up, rates up"). Mechanism cross-link: the same fiat-trust premium that bids gold is the slow de-dollarization driver. Falsifier (also Opus, in Losers): *if real yields rise AND geopolitical risk eases simultaneously, gold loses on both legs* — a clean two-legged falsifier the FX §3 lacks.
- **ACM vs Kim-Wright methodology — *when to trust the term-premium signal*.** ACM = yields-only linear-regression; KW = survey-augmented Kalman MLE; ~0.86 correlation over 9,074 daily obs since 1990, ACM averages ~0.26pp above KW, **but currently converged within ~3–13bp**. Read: when the two agree (now), the term-premium read is robust to model choice; when they diverge it's a survey-vs-yields story — don't trade the point estimate. Directly relevant because term premium is the FX page's "slow anchor under the dollar" driver in §4/scenario matrix.
- **Negative swap spreads quantified + mechanism** — 5y ~**−29bp**, 30y ~**−78bp**; the "balance-sheet rental fee" (SLR/eSLR + G-SIB surcharges make warehousing UST capital-expensive) plus pension/insurer pay-fixed demand. This is a *dealer-capacity stress gauge* that conditions how violently a forced-seller/basis unwind transmits to the dollar — sharpens the §7 plumbing.
- **QT formally ended 1 Dec 2025; "reserve management" since Jan 2026; watch first RMPs (technical, not QE).** Regime fact the FX page should state so "QT draining dollar liquidity" isn't presented as still-active.
- **"MBS-convexity Beast"** — ~$2tn near-par 5%+ coupons (~4× three years ago); Goldman ~$40bn-10y-equivalent May selling; Barclays' Nashikkar "more destabilizing than 2023." QT linkage: Fed MBS runoff shifted negative convexity back into private hands.

### GPT-5.5 — unique HARD figures + framings
- **Oil→CPI elasticity, full decomposition (Fed FEDS Note):** a *permanent +10% oil* raises **energy CPI ~1.5% on impact, ~2.3% after two quarters; food CPI ~0.3% over eight quarters; core CPI ~0.1% over eight quarters.** The FX page (Chain A) cites only "~1.5% on impact" — the **2-quarter and core tails are missing**, and the core +0.1% is the *anchored-expectations* evidence that lets the Fed look through (and keeps the carry leg of the dollar intact).
- **Hormuz scale (EIA):** ~**20 million b/d in 2024**, ~**20% of global petroleum liquids consumption**, **>25% of seaborne oil trade.** Hard physical-shock anchor for §9 / the petrodollar chain (FX page narrates Hormuz but doesn't quantify the choke).
- **Term premium, exact prints:** ACM **0.6697% (2026-05-29, NY Fed CSV)**; Kim-Wright/THREEFYTP10 **0.8019% (2026-06-05, FRED)**. The decomposition: 10y ≈ ~3.78% expected-path + ~0.67% premium. **Absent from the FX page entirely** — the page asserts "term premium" as a dollar driver without a level or a source.
- **The valuation question reframed for FX:** not "is 4.5% high" but "**is 0.7–0.8% enough term premium to hold 8–16yr duration in a world of uncertain inflation + reduced central-bank absorption**" — the precise lens for whether foreign buyers keep funding the deficit (the dollar's bid).
- **Historical analogues with archive dates (for §6 crisis ledger / §8 scenarios):** 1990 Gulf — 10y **8.91% (1990-08-22) → 8.05% (1991-01-17), −86bp** (growth/Fed-easing beat oil-inflation, i.e., the de-escalation-bull template); 2s fell ~−88bp 1990-10-15→1991-02-28. 2023 tantrum — 10y **3.97%→4.98% (+101bp)**, 30y **4.02%→5.11% (+109bp)**, *term-premium-driven*. 2013 taper — 10y **1.66%→2.98% (+132bp)**, 30y +106bp. 2022–23 — 2y **1.95%→5.05% (+310bp)**. These date/yield pairs are stronger than narrative for the FX crisis ledger.
- **DV01 sizing discipline:** size moves in **DV01 × bp + convexity**, not yield language — a 25bp move in 30s ≈ 8× the price effect of 25bp in 2s. (FX page has a "DV01 ruler" in §7 — confirm it's framed this way.)
- **Front-end administered-rate corridor (the carry leg, exact):** DFF **3.62%**, SOFR **3.60%**, IORB **3.65% (eff. 2026-06-15)**, ON RRP award **3.50%** — the precise corridor that pins the dollar's carry.

### Gemini 3.1 Pro — unique framings + one flagged error
- **Communication-ready scenario labels** (useful if the FX page wants parallel naming): "Sticky-Inflation Bear-Steepener," "De-escalation Bull-Steepener," "Grinding Stagflation Flattening."
- **"Grinding Stagflation" as a distinct base case** — Fed *paralyzed*: can't cut (sticky inflation), won't hike (recession risk); curve dis-inverted but flat at elevated levels; 10y range 4.25–4.75%, 2s10s +10→+40bp. A useful *third* state between escalation and de-escalation that maps to a range-bound-firm dollar.
- **MOVE (rate vol) as the toxic input for MBS / convexity hedging** — Gemini ties elevated MOVE explicitly to MBS negative-convexity damage; relevant to the FX page only as the volatility regime that conditions forced-seller flows.
- **[QC — DO NOT USE] Gemini's ACMTP10 = 0.06%** and its **"bull steepener" curve label** are both rejected by the synthesis (Opus/GPT confirm term premium ~0.67–0.80%; the regime is a *bear*-steepener). Flagged here so neither leaks into the FX page.

---

## (B) Prioritized GAPS the FX page should add / deepen

### P1 — material, directly sharpens a core FX section

**P1-1 · Put a NUMBER + source on the term-premium driver (→ §4 fundamentals; §1 regime; scenario matrix).**
The page treats term premium as "the slow anchor under the dollar" and has a "Term premium blows out" scenario cell, but never states the level. Add: **ACM ~0.67% (NY Fed) and Kim-Wright ~0.80% (FRED THREEFYTP10), the two converged within ~13bp → the positive-term-premium read is robust.** Frame for FX: a positive, model-agnostic term premium is what makes foreign buyers demand more to fund the deficit — the structural pressure under the dollar's Treasury anchor. Source as NY Fed ACM / FRED THREEFYTP10 only.

**P1-2 · Complete the oil→CPI→Fed elasticity (→ §9 Chain A; §1 competing drivers).**
Page has only "+10% oil → energy CPI ~1.5% on impact." Add the tail: **~2.3% after two quarters; food +0.3% and core +0.1% over eight quarters** (Fed FEDS Note). The core +0.1% is the load-bearing point for FX: *low core pass-through is exactly why the Fed can look through and keep the dollar's carry leg intact* — and why a T5YIFR break >2.5% is the trigger that flips it. Ties the carry leg to a falsifier.

**P1-3 · The Treasury basis trade as a systemic forced-seller amplifier with HARD scale (→ §7 plumbing / 8+1 forced-seller taxonomy; §8 scenario matrix).**
The page already names UK/Cayman TIC lines as "basis-trade leverage, fragile to repo haircuts" — good, but it lacks the scale/fragility numbers and the official warning. Add (all free Fed/Chicago-Fed sources):
- HF reached **10.3% of the Treasury cash market in Q1 2025** (above the 9.4% pre-pandemic peak); official data **undercounts basis positions by ~$1.4tn (end-2024)**, concentrated in Cayman funds.
- **~73.8% of HF repo borrowing is at zero or negative haircuts** — extreme leverage, thin loss-absorption → forced-unwind risk.
- Fed Gov. Lisa Cook flagged the basis trade can make the **$30tn Treasury market "more vulnerable to stress."**
- The trade's unwind was central to the **March 2020 dash-for-cash**.
This is the leverage channel that turns a UST dislocation into a dollar/forced-seller event — it upgrades the §7 "basis/SRF master-tell" from a label to a quantified mechanism.

**P1-4 · The SEC Treasury central-clearing mandate as a DATED calendar catalyst (→ §9 catalysts; §7).**
**Cash clearing by 31 Dec 2026; repo clearing by 30 Jun 2027.** Reshapes basis-trade economics and is a hard, free, watchable event — the FX page's catalyst section has no forward-dated structural item of this kind. Add to the catalyst calendar.

**P1-5 · Foreign UST total + trajectory to anchor the de-dollarization read (→ §4 fundamentals; §7 TIC scoreboard; §9 de-dollarization).**
The page has the per-country TIC scoreboard but not the aggregate. Add: **foreign holdings ~$9.5tn (Feb 2026), +6% y/y from ~$8.9tn** — i.e., foreign demand is *growing in absolute terms*, which **complicates the simple "foreigners are leaving" narrative** and supports the page's own "de-dollarization is glacial" thesis with a hard number. Pair with the de-marginal read: **China falling (nominal + share); Japan stable $1.0–1.2tn.** Explicitly note the **TIC "Caribbean Banking Centres" line is the known proxy for Cayman hedge-fund basis-trade holdings** — this ties P1-3 and the TIC scoreboard together (the page's Cayman row already hints at it; make the corroboration explicit).

### P2 — strengthens depth / honesty; not core-thesis-changing

**P2-1 · "Activist Treasury Issuance" / bill-share debate as a term-premium (→ dollar) driver (→ §4; §9 calendar).**
Supply *mix* not just quantity: Treasury's skew toward **T-bills (~15–20% of marketable debt, per TBAC)** suppresses term premium by minimizing duration added; a **shift back to heavy coupon issuance would be a term-premium catalyst** → pressure on the dollar's anchor. Free source: quarterly **QRA + TBAC**. Add QRA dates to the catalyst calendar. New angle the FX page doesn't carry.

**P2-2 · Quantify negative swap spreads + dealer-capacity framing (→ §7).**
**5y ~−29bp, 30y ~−78bp**; the "balance-sheet rental fee" (SLR/eSLR + G-SIB) plus pension pay-fixed demand. Conditions how violently a forced-seller unwind hits the dollar. Honest-gap note: no free real-time swap-spread feed (FRED's classic series discontinued) — scaffold honestly.

**P2-3 · State QT-over / RMP regime explicitly (→ §1 / §7).**
**QT formally ended 1 Dec 2025; "reserve management" since Jan 2026; RRP drained to ~$0.45bn from >$2.5tn peak; reserves ~$3.08tn now the marginal cushion.** So "QT draining dollar liquidity" is *past tense*; the live watch is the first RMPs and whether a marginal drain now hits reserves directly (the SOFR-spike → funding-stress → dollar channel).

**P2-4 · Gold↔real-yield decoupling: name the two-legged falsifier (→ §3 gold-vs-real-yields).**
Add the clean falsifier: the decoupling *breaks* — gold loses on both legs — **if real yields rise AND geopolitical/fiat-trust risk eases at the same time.** Sharpens §3 from "gold defies real yields" to a testable condition.

**P2-5 · Hormuz physical-shock scale (→ §9 chains / petrodollar).**
**~20 million b/d (2024), ~20% of global liquids consumption, >25% of seaborne oil trade** (EIA). Anchors the petrodollar/Hormuz narrative to a hard number.

### P3 — optional polish / cross-asset dashboard completeness

**P3-1 · Cross-asset rates dashboard spine (→ §8 / §10 decoders).** The minimal free rates panel under FX: **DGS2, DGS10, DFII10, T10YIE/T5YIFR, SOFR** + honest no-free-feed placeholders for DXY, spot gold, MOVE, live swap spreads. Confirms the FX page's data board names the rates inputs it leans on.

**P3-2 · 1990 Gulf de-escalation analogue with dates (→ §6 crisis ledger).** 10y **−86bp (8.91%→8.05%, Aug-1990→Jan-1991)** as growth/Fed-easing overran oil-inflation — the historical template for the de-escalation/dollar-soft branch.

**P3-3 · "Grinding Stagflation" as a named third state (→ §1 smile / §8).** Fed-paralyzed, range-bound-firm dollar — a middle scenario between escalation and de-escalation, if the page wants a three-state regime map.

**P3-4 · CFTC COT positioning read (→ §7).** Lev-fund net SHORT in Treasury futures = the basis-trade footprint; asset managers run the offsetting net LONG; a sudden COT short-cover is the deleveraging tell. Free, weekly (~3-day lag). The page cites COT as a source — add the actual directional read.

---

## (C) QC flags (stale / contradictory / overconfident / re-verify)

- **[REJECT] Gemini ACMTP10 = 0.06%** — stale/wrong field; synthesis adopts ACM ~0.67% / KW ~0.80%. Do not let 0.06% appear anywhere.
- **[REJECT] Gemini "bull steepener" label** — the regime is a **bear-steepener** (front end pinned, long end cheapened); Opus + GPT confirm. The FX page's term-premium/dollar logic depends on the bear-steepener reading; don't import the bull-steepener framing.
- **[STALE] Hormuz/STEO timing** — GPT/synthesis cite the May EIA STEO assuming "resumption in June," but the realized live environment is more severe (full flows only by 2027). Build to the realized state; treat the STEO line as a now-stale forecast.
- **[RECONCILE — already handled, keep consistent] 10y 4.45% (FRED EOD) vs 4.49% (desk live)** — ~4bp publication noise; FX §0 should keep the live print as anchor and footnote FRED, not present them as a discrepancy.
- **[RE-VERIFY at build — values move]** All point-in-time numbers are mid-June-2026 snapshots: DFII10 +2.16%, term premium ACM 0.67% / KW 0.80%, foreign UST ~$9.5tn, TIC top-holders (Japan ~$1.19tn / UK ~$0.93tn / China ~$0.65tn / Cayman ~$0.46tn), SOFR 3.60% / IORB 3.65% / RRP $0.454bn / reserves $3.081tn, MORTGAGE30US 6.52%, Brent ~$87, gold ~$4,365. Re-pull before shipping. The **framing, mechanisms, source IDs, and scenario logic are the durable deliverable**; the numbers are a refreshable snapshot.
- **[OVERCONFIDENCE GUARD] term premium is a model residual** — unobservable, in-sample, sample-sensitive. Present ACM/KW as a *directional decomposition*, not a tradeable number; the dual-model agreement is the confidence signal, not the level. Keep the dollar-driver claim appropriately hedged.
- **[NO-FREE-FEED honesty — carry into FX scaffolding]** MOVE (rate vol), live SOFR swap spreads, Fed-funds-futures probability curve, DXY real-time spot, spot gold real-time, Brent intraday, MBS OAS/convexity analytics — all paywalled or delayed. The FX page already scaffolds DXY/gold/cross-currency-basis honestly; ensure MOVE and swap spreads get the same treatment if referenced.
- **[CONSISTENCY] CPI vintage** — use the synthesis/GPT BLS figures (**May CPI +4.2% y/y, energy +23.5% y/y, gasoline +40.5% y/y**); the earlier-vintage "+17.9% energy YoY (April)" stat appears in one council draft — don't mix vintages on the page.

---

*QC pass for the Dollar/FX/Gold analyst page, drawing on the US-rates research family. Present all content as the desk's own analysis; cite only the underlying DATA sources named above.*
