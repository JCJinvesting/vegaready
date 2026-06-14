# Dollar, FX & Gold desk — build plan (route: /markets/gold-fx)

**Goal:** rebuild the existing `/markets/gold-fx` page (currently the **old AnalysisLayout/cards format**, pre-redesign) into the new desk standard — a `GoldFxDesk.astro` component + its own skin + the dual-URL/Skim-Deep model + chapters + Wayfinder — per `docs/VegaReady-Desk-Build-Playbook.md`. **Start with the Analyst Deep master** (tier-dependency law §1). This is a *migration + upgrade*, like the equities rebuild.

**Desk name (owner confirm):** lead with the master variable → **"Dollar, FX & Gold"** (route stays `gold-fx`). Old title was "Gold, Precious Metals & FX"; nav pill said "Dollar & FX". Recommend "Dollar, FX & Gold."

---
## 1 · Evidence base (and a hard integrity flag)
Three sources, in order of trust:
1. **R-09.1** (validated council, mid-June 2026) — the Rates⇄FX bridge: the dollar (firm ~100), FX **intervention** (MOF ¥-ops), the **carry complex** (yen, Aug-2024 unwind), **gold↔real-yield decoupling**, **de-dollarization** (COFER <57%), diaspora/FX-defense, TIC. This is *most of the FX spine* and is build-ready.
2. **My June-2026 grounding** — broad dollar ~100 (DXY proprietary), gold ~$4,365 (record), JPY ~155–159, real 10y +2.16%, Iran-war/Hormuz realized.
3. **The OLD `gold-fx.astro`** — rich gold/FX/yen/petrodollar/de-dollarization cards, BUT **unverified and internally inconsistent with the verified data** (it claims a gold ATH ~$5,595 and April close $4,611; R-09.1 + grounding put gold ~$4,365 in June and call *that* a record). **⚠ Do NOT carry the old page's numbers on sight** — mine it for *structure/themes*, re-verify every figure, and treat **P-10 (the FX/Gold council dossier, pending) as the authoritative input.**

**Pending inputs / placeholders (owner's "P-09.2 placeholders"):** build honest `research pending (P-10)` placeholders where the full FX/Gold dossier is needed (valuation/REER, rate-differential fundamentals depth, the full data verdict board), and `feed pending`/`source ready` tile states for live data (DXY, gold, COT, basis — see §3). Never invent a number.

---
## 2 · Analyst Deep §-spine (the content structure)
Mirrors the proven 10-section master, adapted to FX; each section tagged by evidence readiness: **[R]** solid from R-09.1/grounding now · **[P]** needs P-10 (placeholder).

- **§0 State** — the one-sentence regime call + 4 headline tiles (broad dollar, gold, a major cross [USD/JPY], real 10y). **[R]** *"Firm dollar (~100) on a safe-haven + high-real-rate bid; record gold despite +2% real yields (decoupled); yen pinned weak with intervention; the dollar is winning the short-run haven race while its long-run reserve role erodes."*
- **§1 Regime** — the dollar's level/trend + the **"dollar smile"** (bid in both boom and panic), and *why* it's firm now (real-rate + net-energy-exporter haven). **[R]**
- **§2 Structure** — is dollar strength broad or narrow? the **safe-haven hierarchy** this cycle (USD > CHF > gold), havens vs EM FX vs commodity FX. **[R/P]**
- **§3 Valuation** — REER/PPP over/undervaluation; **gold vs real yields** (the decoupling as a signal). **[P]** (gold-decoupling [R]; REER/PPP [P])
- **§4 Fundamentals** — rate differentials, current-account/twin deficits, terms of trade. **[P]** (rate-diff framing [R])
- **§5 Cohorts** — the major crosses (EUR/JPY/CHF/GBP/CNY) + **EM-FX energy-importer stress** (TRY/EGP/INR/IDR) + the **metals** (gold/silver/PGMs). **[R/P]** (EM stress + metals themes from R-09.1 + old page; verify)
- **§6 Factors** — carry, value (REER), momentum, the dollar-smile/risk factor; the **carry trade** (yen funding leg, unwind mechanics). **[R]** (R-09.1 §2 is gold here)
- **§7 Positioning / plumbing** — **cross-currency basis & dollar-funding** (FIMA/swap lines), **CFTC COT** spec positioning, reserve flows, **MOF/EM intervention** (the forced-seller channel). **[R]**
- **§8 Cross-asset** — dollar ↔ commodities (inverse), rates (differentials), equities/EM (risk), gold (real-yield + haven), crypto/stablecoins (private dollarization — link P-14). **[R]**
- **§9 Catalyst transmission** — Iran war/Hormuz → dollar (haven + funding squeeze), gold, **petrodollar recycling** disruption, **de-dollarization** (BRICS/mBridge). **[R]**
- **§10 Evidence** — sources (FRED DTWEXBGS, LBMA gold, CFTC, IMF COFER, BIS, WGC, MOF). **[R]**

**The gold sub-complex** (woven into §1/§5/§9, not a separate desk): central-bank buying (price-inelastic, the 2022-reserve-freeze driver), physical-vs-paper, the gold-oil ratio, gold-as-(non)haven-vs-BTC. **De-dollarization** lives in §9 + links the future P-17 page.

---
## 3 · Data verdict board (seed; full board pending P-10/P-09.2)
`tile | free series | state` — **broad dollar** DTWEXBGS (FRED, live) — note **DXY itself = no-free-feed**, use broad-dollar proxy; **gold** LBMA/FRED (live-ish); **real 10y** DFII10 (live); **USD/JPY, EUR/USD** FRED bilateral (live); **COT** CFTC (weekly); **MOF intervention** MOF CSV (monthly); **gold-vol GVZ / cross-ccy basis** = flag no-free-feed. Honest chips per the kit's five-state system.

---
## 4 · Signature visuals (analyst — propose 2–3, owner picks at build)
- **The dollar smile** — a U-curve (weak-growth haven ↔ strong-growth bid) with "you are here."
- **Safe-haven hierarchy ladder** — USD > CHF > gold (this cycle), vs the 1979/1990 template where gold led — the "non-obvious inversion."
- **Gold vs real-yield decoupling** — two lines diverging (gold up, real yield up) — the regime signal.
- **The carry gauge** — funding-vs-recipient spread + an unwind-risk band (Aug-2024 marker).
- **Gold-oil ratio** dial; **EM-FX stress heatmap**; **petrodollar/de-dollarization flow**.
All at the kit's chart scale, semantic tints, the desk skin's accents.

---
## 5 · Design decision (this step — colors + visuals)
FX needs its **own approved combo** (not credit-brass, not equities-steel-WB8). Since the desk *is* Dollar + Gold, the brand's **Navy → Gold value arc** ("gold beside evidence") is the natural fit — using a gold accent distinct from credit's brass. **Three options presented via `visualize`** (owner picks):
1. **Sovereign Navy + JCJ Gold** (A4/A1 family) — deep navy canvas, parchment ink, JCJ teal data tone, **JCJ Gold** accent. The canonical dollar-as-reserve + gold-value-arc; maximally on-theme. (Differentiate from the A4 front door via a deeper desk navy.)
2. **Heritage Juniper + Old Gold** (A9) — juniper green-black canvas, ivory ink, verdigris data tone, **Old Gold** accent. "Established house / gold heritage"; a green base no other desk uses; gold-family but muted.
3. **Maritime Petrol + Champagne** (WB4) — petrol-black canvas, cool-paper ink, teal-mist data tone, **Champagne** accent. "Global currency flows, cool quant"; coolest, most FX-forward, crypto-adjacent.
Recommendation: **#1 (Sovereign Navy + JCJ Gold)** — strongest thematic fit for a Dollar+Gold desk and visually distinct from the two shipped desks; #2 if we want a warmer, more ownable heritage read. Chapter-accent sweep + full token set derived from the chosen combo at build.

---
## 6 · Build sequence (Analyst Deep first; loops, staged+verified each)
GF-L1 scaffold + chosen skin + Wayfinder + secnav. → GF-L2 §0 State + §1 Regime (data-wired). → GF-L3 §5 Cohorts (crosses + EM-FX + metals). → GF-L4 §6 Factors (carry) + §7 Positioning (intervention/plumbing). → GF-L5 §8 Cross-asset + §9 Catalyst (petrodollar/de-dollarization). → GF-L6 §2/§3/§4 (structure/valuation/fundamentals — most P-10-dependent; placeholders until P-10). → GF-L7 §10 Evidence + analyst-Deep QC. Then (later tiers) analyst Skim → layman Deep → layman Skim.

---
## 7 · Owner decisions — LOCKED (2026-06-14)
1. **Palette → Heritage Juniper + Old Gold.** Built as `src/styles/skin-juniper.css` (`html[data-skin="juniper"]`): juniper green-black canvas, ivory ink, verdigris cool data tone, old-gold accent, `--chA..--chI` heritage sweep for the future layman wing.
2. **Desk name → "Dollar, FX & Gold."** Route stays `/markets/gold-fx`; component `GoldFxDesk.astro`; `data-skin="juniper"`.
3. **P-10 timing → build now with honest placeholders.** Build the spine + the R-09.1/grounding-backed sections; `research pending (P-10)` placeholders elsewhere; never carry the legacy page's unverified gold numbers.

---
*Drafted 2026-06-14. Rebuild of the legacy gold-fx page to the desk standard; Analyst Deep master first; built from R-09.1 + grounding with honest placeholders pending P-10.*

---
## 8 · P-09.2 integration + analyst-density upgrade (2026-06-14)

After GF-L1, the owner flagged two issues and delivered R-09.2: (a) the first build **read too layman** for an analyst Deep; (b) the gold **$5,595** figure was wrongly framed as a rejection. Both fixed in this pass, plus R-09.2 filed and mapped.

### 8a · Gold, set straight (verified 2026-06-14)
Independent research confirms the legacy page's ATH was **correct**: gold broke $5,000 on Jan 26, **peaked $5,595/oz on Jan 29, 2026**, then **corrected ~19%** to a ~$4,170 floor by March (Hormuz oil shock → inflation/real-yields up → position unwind), and is **consolidating ~$4,300–4,540** now. So the current ~$4,365 is **off the record, not a new one**. The desk now tells the accurate arc (record → real-yield-driven correction → price-inelastic central-bank base; WGC sees 750–850t official buying in 2026) in §0/§3/§5/§10 — and the §10 "Gold, set straight" callout retires the false-rejection note. The gold↔real-yield "decoupling" is reframed as **regime-dependent** (broke on the way up, reasserted in the correction), which is both honest and more interesting.

### 8b · Analyst-density upgrade (addresses "reads layman")
GoldFxDesk.astro rebuilt to the CreditDesk register: **source-tier (T1–T4) + value-type + feed-state decoder strip** in §0; a **hover glossary** (DXY, real yield, dollar smile, REER, carry/unwind, x-ccy basis, FIMA, COT, TIC, COFER, DV01, mBridge, petrodollar); and **quantified tables in every section** instead of light bullets — §2 haven-hierarchy scoreboard, §5 crosses/EM-FX/metals tables with levels, §6 factor table + the Aug-2024 unwind attribution (10–15% of book, VIX 65.73) + the "17% = leveraged USD IRR" decoder, §7 the **8-tool forced-seller taxonomy** (MOF ¥11.7tn, FIMA ~$0, reserve-sale DV01 $50bn≈$40.5mn/bp, COT, TIC), §8 cross-asset correlation pairs with a "what breaks it" column, §9 reserve-order scoreboard (COFER <57%, CB gold 750–850t, mBridge $55bn). Lead/lag row added to §1. Mined from R-09.1 (the Rates⇄FX bridge).

### 8c · R-09.2 content map — where each piece lands (no gaps)
R-09.2 is primarily a **Rates-desk** dossier; only its data-wiring audit touches FX directly. Routing:

| R-09.2 content | Destination | Status |
|---|---|---|
| **Data-wiring audit** (DXY=scaffold→DTWEXBGS proxy; gold=scaffold→LBMA fix; GVZ/x-ccy basis=no free feed) | **FX desk §10** "data-wiring verdicts" table + §0 tile feed-states | **DONE this pass** — DXY/gold honestly labelled, no faked live |
| Treasury **buybacks** (two buckets, caps, U-shaped demand, signal-reading rule, NOT-QE/not-stress) | **Future Rates desk** §2.7 plumbing (new buyback tile + sector offer-to-max/fill baseline) | Queued for Rates build (per O-18) |
| **Debt ceiling NOT LIVE 2026** (OBBBA $41.1tn, ~$1.88tn cushion, 2027 flashpoint) | **Future Rates desk** §2.9 catalysts — *correct stale X-date framing* | Queued; also a cross-asset/catalyst note |
| **2026 shutdowns** (two; coupons keep paying; data blackout) | Future Rates §2.9 + Cross-Asset catalyst calendar | Queued |
| **TGA / RRP** (~$800bn rebuilt; ON RRP ~0 → reserve-drain first-order; ~$1tn late-Jul peak) | Future Rates §2.7 (TGA tile via DTS API) | Queued — highest-value plumbing change |
| **SRF take-up = true acute-stress gauge** (§4.1 open floor #1) | Future Rates §2.7 — **build the SRF tile** (free NY Fed daily) | Queued — flagged as the #1 follow-up |
| WAM/bill-skew quantified; SOMA/MMF-reform | Future Rates §4 / P-16 fiscal page | Queued |

**Net:** FX desk consumes R-09.2's data-wiring verdicts now; the buybacks/fiscal/TGA/SRF body is the spine of the **Rates desk** build (next target per O-18) and must carry the "debt ceiling not live in 2026" correction + the SRF tile.

### 8d · Still pending for FX (unchanged)
P-10 (the FX/Gold core dossier) fills §2 breadth decomposition, §3 REER/PPP, §4 quantified differential map, and wires the live gold/COT tiles. Then the lower tiers: analyst Skim → layman Deep → layman Skim.

---
## 9 · Analyst-Deep depth rebuild (2026-06-14, v2) — the REAL master

Owner feedback after the first densify pass: the page still **read as a thin draft** — leaning on user-facing "research pending / see R-09.1" placeholders (meaningless to a public reader) and nowhere near the **length/thoroughness of the shipped Credit & Equities analyst Deep pages**. This rebuild fixes that to the proven depth standard.

### 9a · The load-bearing principle (from a full audit of CreditDesk + EquitiesDesk)
**Zero empty "research pending" sections.** Every section is saturated with durable, sourced, framework-grade content authored from the research. The ONLY thing ever marked pending is the **live numeric value of an individual tile** — and even those tiles are fully built (label + value-type chip + source + meaning), with just the number showing a state chip. A `.feedph` "data wiring" block at each spine section names the exact source series coming. No internal research references on the page (no "R-09.1", "P-10", "council") — all presented as the desk's own analysis; only data SOURCES (FRED series, LBMA, TIC, MOF…) are cited.

### 9b · The depth architecture now built (mirrors the reference desks)
- **§0 State** — headline call + live **desk panel** (mix of live + source-ready tiles) + **"30-second read"** (5 framed bullets) + **"What would change this call"** falsifiers (4).
- **Competing-drivers** attribution block (6 buckets incl. a named residual).
- **§1–§4 spine** via a `T{}` topic-spec object map — each = rich lead (with hover-glossary spans) + 4 KPI tiles + illustrative inline **SVG** + **"what we track"** list (M/N badges) + **leading-indicator-value** box + source line + **data-wiring** mapping. (Regime/dollar-smile, Structure/haven-hierarchy + dated crisis-template table, Valuation/gold-vs-real-yield + the "gold set straight" callout, Fundamentals/Triffin + privilege.)
- **§5 Cohorts** — sortable sensitivity matrix (cohort × rate-diff/carry-role/USD-vuln) + **dcard cohort libraries** ×3 (major crosses JPY/CNY/CHF/EUR; EM importer vs exporter blocs; metals gold/silver/PGMs), each card = drivers/sensitivities/KPIs/leads/risks/lead-lag.
- **§6 Factors** — carry/value/momentum + "carry is not clean alpha" callout + carry-configuration table + **carry-unwind crisis-history ledger** (1994/1998/2007–08/2013/Aug-2024) + the 2026 synchronized-squeeze tail.
- **§7 Positioning** — the flagship: the **8+1-tool forced-seller taxonomy** table (UST effect + hard figures), the **DV01 ruler** callout, the **TIC scoreboard** (Japan→Saudi + official/total, m/m + y/y, tinted), the **"17%" FCNR(B) explainer** callout, and the **master-tell** (basis/SRF spread) callout.
- **§8 Cross-asset** — correlation "normal vs what-breaks-it" pairs + **scenario→asset matrix** (5 scenarios × dollar/gold/EM-FX/USTs, tone-tinted) + the dash-for-cash **kill-switch** callout.
- **§9 Catalysts** — Hormuz transmission tile grid (live/pending) + the **four chains** + petrodollar partial-fracture callout + the **reserve-order scoreboard** (COFER/gold/mBridge/petrodollar).
- **§10 Evidence** — value-type + source-tier + feed-state **decoders** + full **glossary list** + **primary-sources pill grid** + the two-confidence lead.
- **~19 hover-glossary terms** wired via `gl()`; sortable cohort matrix; juniper skin retained.

### 9c · Content provenance
Authored from the validated research mined into `outputs/fx-content-blueprint.md` (R-09.1 primary + R-09.2 + R-09) cross-referenced with the depth target in `outputs/depth-spec.md`. Gaps the research didn't cover (REER/PPP per cross, silver/PGM specifics, gold↔BTC, the gold record-then-correction arc) are written from durable domain analysis + the independently-verified gold path (public reporting), each clearly evergreen, never an invented live number. Live point-in-time values remain build-time re-verify items; the mechanisms/taxonomy/history are the durable deliverable.

### 9e · Council deep-read QC pass (2026-06-14, v3)
After the v2 depth rebuild, all **12** research files (3 synthesis + **9 council** model files) were deep-read — one subagent per prompt-family — to find what the syntheses compressed out. Full record + per-family audits stored in `_research/QC/` (`FX-councilQC-MASTER.md` + `FX-councilQC-R09/R091/R092.md` + the blueprint + depth-spec). 13 P1 improvements + the QC fixes were applied to the page: the clearing-elasticity yield-move ruler (+$60bn≈$49mn/bp; −$200bn≈$162mn/bp≈+15–25bp), term premium quantified (ACM ~0.67%/KW ~0.80%), the oil→CPI core-pass-through tail (~0.1% over 8q = the Fed look-through), the basis-trade systemic scale (10.3% of cash market, ~$1.4tn undercount, 73.8% zero-haircut repo, Cook's $30tn warning), the covered-intervention FCNR mechanic + bear case, the petrodollar-fracture bear case as a labeled split, the TGA→reserves→repo funding callout (RRP >$2.5tn→~0), SRF+SOFR–IORB as the stress gauge, the SEC central-clearing dates (cash 31 Dec 2026 / repo 30 Jun 2027), foreign-UST ~$9.5tn (+6% y/y), data-honesty precision ("free=lagged", no-synthesized-gold-vol, LBMA=fix), and CBO $1.9tn/5.8%. QC fixes: gold reserve-diversion recomputed $37bn→~$49bn/yr at the live price; unresolved questions shown as splits; rumor-grade items (Gulf yuan-pricing, unconfirmed MOF direction) kept off the page. Deferred P2/P3 (swap spreads, COT directional read, diaspora peer table, stablecoin sizing) listed in the master doc for the next iteration.

### 9d · Next tiers (unchanged order)
Analyst master (this) → analyst **Skim** (designed digest tier) → **layman Deep** (the `/layman/markets/gold-fx` wing — currently a graceful placeholder per the tier law) → layman Skim. P-10 fills the remaining REER/breadth/differential tiles and wires live gold/COT.

---
## 10 · Architecture decision — one desk, hub-and-spoke (2026-06-14)

**Question raised:** should USD/FX and Gold live on one page or split to separate URLs?

**Decision: keep them on ONE desk — `/markets/gold-fx`, "Dollar, FX & Gold" — and manage length with the established hub-and-spoke pattern, not a split.** Reasoning, grounded in the project's own plan:
- **The desk taxonomy is locked at six desks** (PROJECT-CONTEXT §4/§9, owner decision O-18): Equities, Credit, **Dollar/FX/Gold**, Commodities (energy), Crypto, Cross-Asset. FX+Gold is *one* desk by design; the Wayfinder sibling rail already encodes it.
- **The thesis demands gold sit with the dollar.** The page's spine *is* gold-vs-dollar: gold vs real yields, gold as the anti-dollar / de-dollarization hedge, central-bank gold as the reserve-diversification signal. P-10's own §1 scope statement confirms the boundary: the desk owns **USD (broad + majors) + monetary metals (gold + silver) + cross-currency funding/plumbing**, and explicitly does **not** own oil/industrial metals (Commodities) or the rate curve (Rates). Splitting gold off would sever the argument.
- **Length is handled by the reading model + spokes, not by splitting the desk.** Credit and equities are also long single pages; the designed Skim tier (already built) is the digestibility valve. When a section grows too heavy, spin it to a **spoke sub-page** under `/markets/gold-fx/{…}` — exactly the precedent equities set with `/markets/equities/{episodes,factor-lab,plumbing}`. Candidate future spokes: `gold-fx/funding` (the §7 plumbing deep-dive) and `gold-fx/gold` (a gold deep-dive).
- **Adjacent structural content is already site-mapped OFF this desk** as its own pages: **de-dollarization → P-17**, **stablecoins → P-14**, **global non-USD rates → P-15**, **US fiscal → P-16**. So §9's reserve-order block should eventually become a *summary + cross-link* to the P-17 page, not the full treatment — the natural pressure-release valve. Cross-link, don't duplicate.

**Net:** no split. Continue building the single master desk; plan spokes + cross-links to P-14/P-15/P-16/P-17 as those pages are built.

## 11 · P-10 integration (2026-06-14) — corrections + council adds
The P-10 dossier (synthesis + 3 councils) was filed (`R-10-*`), the councils deep-read (`_research/QC/` → `gap-R10.md` findings), and integrated. **Verdict on the gaps I'd flagged for a P-10.1: ~80% duplicate** — REER is covered and *wireable* (`RBUSBIS` 107.06, free), silver is covered, PGMs are deliberately out of scope (Commodities desk); only a quantified FX factor-premia backtest would be net-new (optional). **Corrections applied:** broad dollar and DXY are different gauges — `DTWEXBGS` ~120 (free, Jan-2006=100) vs ICE DXY ~99.8 (proprietary); USD/JPY ~160 (not 157); COFER 56.77% (Q4-2025) with the constant-FX ~57.7% nuance (~92% of the fall was valuation). **Council adds:** the gold-decoupling tripwire (CB buying < ~400t/qtr while real 10y > +2%), the permanence split framed as the de-escalation experiment, the four-condition kill-switch AND-gate (basis −50bp + rising swaps + falling EM-FX + gold bid), the DXY historical anchors (164.72 Plaza-1985, 114.78 Sep-2022), the broad/AFE/EM dispersion (120.08/112.68/129.38), and SOFR/AFE/EM rows on the data board. **Deferred (P2/P3, logged in gap-R10.md):** WGC tonnage ladder, gold venue-spread, EUR/RMB reserve component shares, verbatim council color quotes, $6,000 "golden floor" marker. **QC carried:** the $5,595 gold ATH is *not* in R-10 (externally sourced via public reporting/P-09.2 — kept, not attributed to the dossier); EUR/USD 1.1533 (not 1.1679), gold COT +173,837 (not ~154K), USD/MXN re-verify `DEXMXUS`.
