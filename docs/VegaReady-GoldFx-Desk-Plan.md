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
