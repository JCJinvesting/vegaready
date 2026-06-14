# FX Content Blueprint — "Dollar, FX & Gold" Analyst Desk
**Source mining of validated research: R-09.1 (foreign dollar demand — PRIMARY FX source), R-09.2 (rates gap-fill), R-09 (rates desk), plus R-09.x council files.**
Live environment for all figures: mid-June 2026. Strait of Hormuz closed since 4 Mar 2026. DXY ~100. US 10y 4.45–4.49% / real 10y +2.16%. Hawkish Fed (market prices a hike, not cuts, by year-end). INR ~96.9/$. Gold record ~$4,365.

**Tag legend:** `[HARD]` = number+date+named source (verbatim). `[DIR]` = qualitative/directional. `[DURABLE]` = evergreen structural analysis, safe for a live page. `[LIVE]` = depends on a current data print, must be build-time re-pulled.
**Confidence:** H/M/L as marked in source.

> **Richness map (read this first):** §5 Cohorts, §6 Factors, §7 Positioning/plumbing, and §9 Catalysts are the RICHEST sections — the research is overwhelmingly built around the sovereign-dollar-demand mechanism, the carry complex, the 8-tool (now 9-tool) forced-seller taxonomy, and the Hormuz/de-dollarization chains. §2 Structure (safe-haven hierarchy, historical templates) and §3 Valuation (gold↔real-yield) are well-supported. THIN spots flagged at the end: the per-cross EUR/JPY/CHF/GBP/CNY *valuation* detail (REER/PPP by pair), EM-FX importer/exporter split as a named taxonomy, silver/PGM specifics, and the "2026 record-then-correction" gold arc — these are desk-state framing, NOT in the research; gold is anchored at the record ~$4,365 only.

---

## §0 — STATE (regime call + headline numbers)

**One-line regime call `[DURABLE-framing / LIVE-numbers]`:**
The dollar is *firm and structurally bid* (DXY ~100) on a hawkish-Fed-on-oil narrative and the most restrictive real yields in years — a partial "funding destination" rather than a funding source — while gold sits at a record despite +2%+ real yields because a safe-haven / de-dollarization / fiat-trust bid is overwhelming the ordinary real-rate drag. The live question is never "is the dollar finished" but **which channel meets global dollar demand, and whether that channel forces or relieves UST selling.** `[DIR, M]`

**Headline numbers (all `[LIVE]`, re-pull at build):**
- DXY ~100 `[HARD-M]` — "live-environment input, no official free real-time feed" (GPT-5.5). DXY inflection line: sustained >100 with hawkish Fed = continued EM dollar stress; <100 = pressure eases.
- US 10y nominal 4.45% (FRED DGS10, 2026-06-11) / 4.49% desk-live `[HARD-H]`.
- **Real 10y +2.16%** (FRED DFII10, 2026-06-11) `[HARD-H]` — "the market demands a >2% real return to lend to Treasury for 10 years; firmly restrictive (0% = free money; 2%+ = restrictive)."
- **Gold record ~$4,365** `[HARD-M, "prompt/live-environment input"]` — decoupled from real yields (see §3, §8).
- INR ~96.9/$ `[HARD]`; rupee down ~9.5% over FY26.
- COFER USD reserve share **~56.8–56.9%, Q3 2025** — 25-year low, down from **72% peak in 2001** `[HARD-M; DURABLE]`.
- Foreign UST holdings **$9.349tn** (Mar-2026 TIC); foreign-official subtotal **$3.902tn** `[HARD-H; LIVE]`.

---

## §1 — REGIME (dollar level/trend + dollar-smile mechanics + why firm now)

**The read `[DURABLE]`:** The dollar is firm because the US offers *both* legs of the smile at once — high real carry AND a haven premium. At real 10y +2.16% and Fed-funds effective 3.62% (target 3.50–3.75%), "the dollar itself has become a partial funding *destination* rather than a funding source," stripping marginal carry capital away from traditional EM targets (R-09.1 §2). `[HARD-H]`

**Dollar-smile mechanics (2–4 paras of raw material) `[DURABLE]`:**
- *Left side of the smile (risk-off / haven bid):* in a Hormuz-escalation/flight-to-quality event the dollar is bid as the world reaches for safety. The research frames this as the safe-haven channel that "supports the dollar" on a hawkish-Fed-on-oil narrative (R-09 §2.8). The carry-unwind history (§6) shows the funding currency (yen/franc/dollar) is *frantically bid back* when leverage forces liquidation.
- *Right side of the smile (US-outperformance / high-carry bid):* "higher front-end real rates usually support the dollar by improving cash yield and tightening global financial conditions" (GPT-5.5, R-09 §2.8). `[DIR, M]` The US is "the ultimate high-yield low-risk vacuum" (R-09.1 §2).
- *Bottom of the smile (synchronized global growth / risk-on):* capital leaves the dollar for higher-beta EM carry — the de-escalation scenario where "EM carry re-attracts inflows" and "DXY back below 100" (R-09.1 Scenario B).
- **Why firm NOW specifically:** the realized oil-supply inflation shock (May CPI +4.2% y/y; energy +23.5% y/y; gasoline +40.5% y/y, BLS) has the Fed pricing *zero 2026 cuts and ~37% Oct hike odds* — both smile legs (carry + haven) are simultaneously active because the catalyst is *both* inflationary and geopolitical. `[HARD-H; LIVE on CPI prints]`

**The structural frame `[DURABLE]`:** This whole desk is the **Triffin dilemma / "exorbitant privilege"** in action — the world needs dollars (official reserves, trade invoicing, and now private stablecoins), which sustains UST demand even amid de-dollarization headlines (R-09.1 M.2). `[DIR, M]`

**Free data + cadence:** DXY — no free real-time feed (use FRED Broad Dollar lagged proxy; scaffold honest placeholder). DFII10, DFF, DGS10 — FRED daily, live. Fed path: CME FedWatch / Polymarket (no FRED real-time feed; `source_identified` only).
**Lead/lag:** Real-yield differential leads dollar level; Fed path expectations lead real yields.

---

## §2 — STRUCTURE (safe-haven hierarchy + historical templates + breadth)

### Safe-haven hierarchy this cycle (USD / CHF / gold / JPY) `[DURABLE]`
The research does not give a single ranked table, but the components are all present:
- **Gold is leading the haven complex this cycle** — record ~$4,365 *despite* +2.16% real yields; "the safe-haven/de-dollarization/geopolitical bid is overwhelming the real-yield drag" (R-09 §2.8). The decoupling is itself the signal: "the market is pricing geopolitical/fiat-trust risk above the ordinary real-rate calculus." `[DIR, M]`
- **USD** retains its haven role (firm ~100) but is *contested* by gold this cycle — the de-dollarization camp argues the haven bid is leaking to gold.
- **CHF and JPY are the classic *funding-currency* havens** — they appreciate violently in carry unwinds (BIS named "yen + Swiss franc appreciation" in Aug 2024; 1998 saw yen +15–20% in days; BIS 2008: "yen +15%, Swiss franc +9% over the 10 months to Apr 2008") `[HARD-H]`. JPY is the "largest *concentrated* tail risk — both as funding currency and as the largest UST holder."

### Historical haven/crisis templates (the dated set) `[DURABLE]`
| Year | Event | Haven behavior + magnitude | Source |
|---|---|---|---|
| **1979** | (Gulf-War-era analogue referenced for gold spiking on oil + equity plunge — LA Times 1990 cited) | Gold spikes on oil + equity plunge template | R-09 council (Opus) `[DIR]` |
| **1990** | Gulf War | Gold spiked on oil + equity plunge (the live 2026 analogue) | LA Times 1990-09-25 `[DIR, M]` |
| **1994** | "Bond massacre" | Fed 3.0%→5.5% over the year; **Mexican peso broke Dec 1994** (3.5→5.75/$ in days, ~$50bn IMF/US bailout). Lesson: Fed tightening transmits to EM with a **~10-month lag** | Brookings/Richmond Fed `[HARD]` |
| **1998** | LTCM / Russia default (the archetype) | Russia defaulted 17 Aug 1998; NY Fed ~$3.6bn LTCM rescue 23 Sep; **yen +15–20% in days**; 10y UST troughed **4.16% on 5 Oct 1998** (flight-to-quality won); VIX peak **49.53 on 8 Oct 1998**. Speed: <2 weeks, systemic | Fed IFDP 899; Eco3min `[HARD-H]` |
| **2008** | GFC / yen-carry unwind | **yen +15%, Swiss franc +9% over 10 months to Apr 2008** (BIS AR 2008); AUD/JPY −7.7% single day 16 Aug 2007 | BIS Annual Report 2008; CESifo WP 2707 `[HARD]` |
| **2020** | COVID dash-for-cash | Fed swap lines peaked **~$450bn late May 2020** (BoJ $223bn, ECB $145bn) | Fed BSD `[HARD-H]` |
| **2022** | DXY surge / global tightening | China spent **~$1tn of reserves 2015–16** defending yuan (largest mechanism-(a) ever, cited as the secular cause of China's UST decline); Japan MOF intervened ~$19–20bn Sep + ~$42–43bn Oct 2022 | MOF CSV `[HARD-H]` |
| **Aug 2024** | Yen-carry unwind (most instructive recent) | BoJ hike 31 Jul → weak US payrolls 2 Aug → peak stress **5 Aug 2024**: TOPIX −12%, S&P −3.0%, **VIX intraday 65.73 (third-highest ever)**; only **10–15% of the yen book unwound**, leaving ~$4tn intact; S&P recovered all losses by Fri 9 Aug | BIS Bulletin 90 `[HARD-H]` |

### Breadth of dollar strength `[LIVE]`
TIC scoreboard (Mar-2026) shows the dollar-strength footprint as *official selling vs private/custody absorption*: total foreign UST +$294.5bn y/y but **foreign-official −$21.2bn y/y** — "the official sector is the net UST-demand soft spot right now." Japan −$47.7bn m/m, China −$41.0bn m/m / −$113.1bn y/y, UK +$29.6bn m/m, Cayman +$16.4bn m/m. `[HARD-H]` (Full table in §7.)

**Free data:** VIX (CBOE), TIC MFH (Treasury, ~2-month lag, monthly), gold via LBMA fix/futures (no free real-time). **Lead/lag:** VIX spike leads carry-unwind haven moves by 0–3 days; TIC lags 2 months.

---

## §3 — VALUATION (REER/PPP + gold vs real-yield + 2026 arc)

### REER/PPP framework `[THIN — see gap note]`
The research does NOT contain an explicit REER/PPP table per currency. The closest durable framing is the structural "exorbitant privilege"/Triffin frame (§1) and the **DXY ~100 inflection line** as the valuation tell (R-09.1 desk bottom-line: ">100 with hawkish Fed = EM dollar stress; <100 = pressure eases"). For a REER/PPP build you will need to source BIS REER indices (free, monthly) and OECD/Big-Mac PPP separately — flag as a build-time add, not from R-09.x.

### Gold vs real-yield relationship `[DURABLE — the centerpiece]`
**The textbook relationship and its 2026 break (2–4 dense paras of material):**
- *Normal relationship:* gold pays no coupon, so **higher real yields raise its opportunity cost** → gold and real yields move inversely. (R-09 §2.8) `[DIR, H]`
- *The 2026 decoupling:* "gold is at a record ~$4,365 *despite* DFII10 +2.16%, because the safe-haven/de-dollarization/geopolitical bid is overwhelming the real-yield drag (echoing the Gulf-War episode where gold spiked on oil + equity plunge)." `[DIR, M]`
- *Why the decoupling is itself a signal:* "it says the market is pricing geopolitical/fiat-trust risk above the ordinary real-rate calculus." The doom-loop tell in Scenario D is **"gold rising simultaneously with rising real yields (indicating a fundamental loss of confidence in the fiat anchor)."** `[DIR, H]`
- *Two-sided caution (GPT-5.5):* "gold's rate sensitivity makes it vulnerable if real yields rise faster than geopolitical risk premia" — the decoupling can snap back. `[DIR, M]`
- *Misconception to debunk:* "Gold and Treasuries always move together as havens" — false; gold can soar while real yields stay high (2026's decoupling). (R-09 council)

### The 2026 record-then-correction arc `[THIN / DESK-STATE, not in research]`
The research anchors gold ONLY at the record ~$4,365 (mid-June 2026). The "record-then-correction" arc the brief references is **desk-state framing (the existing GoldFxDesk used a $5,595 figure)** and is NOT corroborated in R-09.x. Treat the record as ~$4,365 from research; if a higher peak + correction is used, source it fresh at build and flag the provenance — do not attribute to R-09.

**Free data:** DFII10 (FRED, daily, live) for real yields; gold no free real-time (LBMA fix / rights-cleared futures, scaffold). **Lead/lag:** real yields normally lead gold; in 2026 the geopolitical premium decouples them.

---

## §4 — FUNDAMENTALS (real-rate diffs, twin deficits, terms of trade, exorbitant privilege, Triffin)

**Real-rate differentials `[DURABLE + LIVE]`:** US real 10y +2.16% is the anchor that makes the dollar a "funding destination." Funding-currency real/nominal rates (mid-2026): JPY ~0.75%, CHF 0.0%, CNH ~3.0%, EUR ~2.4%; the global funding-cost floor is *rising* (Indonesia + Brazil hiking; ECB ~+60bp, BoJ ~+40bp expected by year-end — Gramercy) — "a carry-unfriendly regime." `[HARD; LIVE]`

**Twin deficits / fiscal `[DURABLE]`:** CBO-projected **~6%-of-GDP deficit (incl. interest)** is the supply driver behind the term-premium repricing and the "buyer's strike" tail (Scenario D). Persistent ~6%-of-GDP deficits "raising net supply" is one of four named drivers of the post-Aug-2024 positive term premium. `[DIR, M]`

**Terms of trade / petrodollar `[DURABLE]`:** the 1974 petrodollar arrangement made oil exporters a "perpetual buyer" of USTs — oil exporters earn dollar surpluses, park them in Treasuries. Hormuz cuts both ways (bullish revenue per barrel at sustained Brent $87+ vs bearish lost volume/willingness — see §9). `[DIR]`

**Reserve-currency "exorbitant privilege" + Triffin `[DURABLE — anchor concept]`:** "the world needs dollars (official reserves, trade invoicing, and now private stablecoins), which sustains UST demand even amid de-dollarization headlines" (R-09.1 M.2). Misconceptions to debunk: (1) "Foreigners hold all US debt" — false, foreign investors hold ~$9.5tn = only ~25% of total outstanding (~$36tn); (2) "If China sells its Treasuries, the US goes bankrupt" — false, the US borrows in its own currency; threat is to *market stability*, not solvency. `[DURABLE; H]`

**Free data:** DFII10 + foreign policy rates (central-bank sites); CBO deficit projections (free); TIC for foreign-held share. **Lead/lag:** fiscal/supply is slow-moving (structural); real-rate diffs move daily.

---

## §5 — COHORTS (major crosses, EM-FX split, metals + CB buying) — RICH

### Major crosses `[DURABLE framing + LIVE rates]`
The research treats crosses through the *sovereign-response* lens (which tool each country uses) rather than a pip-level technical table. Per-cross material:
- **USD/JPY** — JPY is the **largest concentrated tail risk**: both the largest single official UST holder ($1.1916tn) and the dominant carry funding currency. "USD/JPY breaking below 140 is the trigger to monitor" for a violent repatriation/carry unwind. MOF intervention history: ~$19–20bn (Sep 2022), ~$42–43bn (Oct 2022), **¥9.7885tn ≈ $62bn (Apr 29 + May 1 2024)**; May-2026 MOF page shows **¥11.7349tn (28 Apr–27 May), direction NOT yet disclosed** `[HARD-H / flagged-M]`.
- **USD/CNY (CNH)** — the **structural pressure point**: PBOC interventions via state banks are "not in TIC or BIS data — no free feed." China is a *structural slow seller* (−$113.1bn y/y), tools (b) drawdown + (g) gold + (h) local-currency bonds. 2015: PBOC cut the fix ~2% on 11 Aug 2015, then spent ~$1tn defending CNY into 2016. `[HARD / DIR-H]`
- **USD/CHF** — franc is a funding-currency haven (appreciated +9% over 10 months to Apr 2008; BIS named it in Aug 2024). SNB policy rate 0.0%. `[HARD]`
- **EUR/USD** — EUR policy rate ~2.4%; ECB expected ~+60bp by year-end; a funding leg whose simultaneous hike (with BoJ) is the carry-compression tail. `[HARD; LIVE]`
- **GBP/USD** — UK is the #2 TIC holder ($926.9bn, +$29.6bn m/m, +$147.6bn y/y) but this is **private/custody/basis-trade**, not a sovereign-reserve read. `[HARD-H]`

### EM-FX split: energy-importers vs commodity-exporters `[DURABLE — strong material, needs assembly]`
The research has the components for this split but does not label it as one table — assemble it:
- **Energy importers (forced sellers / defenders):** INR (canonical 2026 case — RBI sold $53.13bn FY26, drawdown ~$46bn, repo HELD at 5.25% — pivoting to diaspora deposits, not rate hikes); TRY (extreme rate-defense: 8.5%→50% in <1yr, +4,150bp); IDR + BRL (hiking mid-June 2026 to defend); KRW (FX smoothing + NPS hedge changes). `[HARD-H]`
- **Commodity exporters (revenue-cushioned):** Saudi (UST +$18bn y/y *despite* m/m fall; revenue UST-positive at sustained Brent $87+); UAE; Brazil (high real rates attract carry; defends via (c) rate hikes more than (a) — Selic 13.75% Aug-2022). `[HARD-H]`
- **"Fragile Five" historical template:** INR, IDR, BRL, ZAR, TRY — all running CAD + fiscal deficits with loose policy — hit hardest in 2013 taper tantrum (INR −20% May→Aug 2013 to ~68.85/$). `[HARD-H]`

### Metals + central-bank buying `[DURABLE — strong]`
- Gold record ~$4,365 (see §3).
- **Central-bank gold:** WGC April 2026 net CB purchases **19t** (Poland 14t, China 8t, Czech 3t); **36-mo average 29t/month** ≈ $3.1bn/mo at $3,300/oz ≈ **$37bn/yr of reserve flow diverted from USTs** ≈ ~$30mn/bp of 10y DV01 of annual demand removal `[HARD-H; LIVE on monthly print]`. "Steady-flow, not liquidation."
- **Silver / PGMs `[THIN — not in research]`:** R-09.x has no silver/platinum/palladium specifics. Build these from a fresh source and flag provenance.

**Free data:** WGC monthly CB gold (free, monthly); MOF intervention CSV (free, ~monthly); TIC (monthly); central-bank policy rates. **Lead/lag:** intervention is reactive (lags FX move by days); CB gold is structural/slow.

---

## §6 — FACTORS (carry, value/REER, momentum, dollar-smile risk + unwind history) — RICH

### The carry factor + funding/recipient configuration `[DURABLE + LIVE]`
The carry trade borrows in low-yielding funding currencies (JPY, CHF, at times EUR/CNH) to buy higher-yielding assets. Mid-2026 config: funding JPY ~0.75% / CHF 0.0% / CNH ~3.0% / EUR ~2.4%; recipients TRY ~37% / BRL ~14.5% / MXN ~6.5% / ZAR ~7.0% / INR 5.25%. The US (Fed ~5.5% effective floor, real 10y +2.16%) is "the ultimate high-yield low-risk vacuum." `[HARD]`

**Carry mechanics + unwind triggers `[DURABLE]`:** profit = rate spread minus hedging cost (if hedged) or FX depreciation (if unhedged). Triggers: (1) hawkish pivot by funding CB; (2) sudden VIX spike >35; (3) rapid recipient-currency depreciation wiping years of yield in days. **"The funding currency need not be touched by any policy change for the carry to unwind — leverage forces the hand" (1998 LTCM lesson).** `[DIR-H]`

**Typical unwind quantification (Gemini's "carry math") `[DURABLE]`:** a *major* carry unwind = funding currency appreciates **5–12% vs high-beta recipients within 3–10 days**, VIX spikes **>35**, **10%+ global equity market cap erased** before central-bank stabilization. Holds across 1998, Aug 2024, Jan/Oct 2008.

### Value / REER + momentum factors `[THIN as named FX factors]`
The research does not isolate "value/REER" and "momentum" as named FX risk factors with backtest stats. The dollar-smile *is* treated as a risk factor (see §1). For a full factor lab you will need to source standard FX-factor (carry/value/momentum/dollar) literature at build — flag as not-from-R-09.

### Carry-trade-unwind crisis history (the dated ledger) `[DURABLE — RICH]`
| Episode | Trigger | Magnitude / speed | Source |
|---|---|---|---|
| **1994 bond massacre** | Fed 3.0%→5.5% | Global bond rout; **Mexican peso broke Dec 1994** with ~10-month lag | Brookings/Richmond Fed `[HARD]` |
| **1998 LTCM/Russia (archetype)** | Russia default 17 Aug 1998 | **yen +15–20% in days**; 10y troughed 4.16% (5 Oct); VIX 49.53 (8 Oct); ~$3.6bn LTCM rescue. <2 weeks, systemic | Fed IFDP 899; Eco3min `[HARD-H]` |
| **2003–07 yen-carry buildup** | ZIRP-funded risk | First crack 16 Aug 2007: **AUD/JPY −7.7% single day** (vs 0.7% avg); yen +15%/CHF +9% to Apr 2008 | CESifo WP 2707; BIS AR 2008 `[HARD]` |
| **2013 taper tantrum** | Bernanke taper signal | US 10y +100bp; **INR −20% May→Aug 2013 to ~68.85/$**; "Fragile Five" hit; 4-month bleed | RBI; SPJIMR `[HARD-H]` |
| **11 Aug 2015 CNH deval** | PBOC fix −2% | Multi-week global equity selloff; China spent ~$1tn 2015–16 defending CNY | PBOC `[HARD]` |
| **2018 Fed QT + EM** | Fed hiking into QT | TRY −44% over the year; sharp EM-carry drawdown | `[DIR-M]` |
| **Aug 2024 yen unwind (most instructive)** | BoJ hike 31 Jul + weak payrolls 2 Aug | Going in: yen carry ~¥40tn/~$250bn; futures ~¥2tn/$14bn; offshore yen claims >¥80tn/~$500bn. Peak 5 Aug: TOPIX −12%, S&P −3.0%, **VIX 65.73**; only **10–15% unwound** (~$4tn left); BIS named yen+CHF+CNH appreciation, MXN/BRL/ZAR losses; 3-day event | BIS Bulletin 90 `[HARD-H]` |

### The 2026 tail risk `[DURABLE]`
"BoJ + ECB hike simultaneously into a hawkish Fed, compressing remaining carry at all three funding legs at once. Aug 2024 unwound 10–15% of the yen book in 72 hours and triggered crisis-level vol — if 25–40% of the remaining ~$4tn book unwound under a synchronized squeeze, the transmission could exceed any post-2008 event." `[DIR-H]`

**Council disagreement to surface (carry → USTs):** Gemini = "severely negative, +20–40bp spike in days"; GPT-5.5 + Opus = "ambiguous — flight-to-quality bid and forced selling can coexist (1998: 10y troughed 4.16%; Aug 2024: 10y briefly dropped then mean-reverted)." **Synthesis: ambiguous; direction depends on the co-state — bearish if US fiscal stress is salient, mild safe-haven bullish if not; either way VIX >35.** `[DIR-H]`

**Free data:** VIX; CFTC COT net-short yen futures (weekly, free, delayed); cross-currency basis (no free real-time). **Lead/lag:** funding-CB hawkish signal → unwind in days; VIX is coincident-to-leading.

---

## §7 — POSITIONING & PLUMBING — RICHEST SECTION

### The 8-tool sovereign forced-seller taxonomy + the forced-selling ledger `[DURABLE — the spine of the desk]`
"When a foreign sovereign faces a strong dollar / high US real rates / a dollar-funding shock, which responses force more UST selling and which substitute for it?" Eight mechanisms (plus a 9th private channel, M.1):

| Mechanism | What it does | UST sign | Key hard figures |
|---|---|---|---|
| **(a) FX intervention via UST sales (spot)** | CB sells dollars from reserves (liquidates USTs) | **Amplifies** (the canonical forced-seller) | Japan ¥9.7885tn≈$62bn (Apr–May 2024); India $53.13bn FY26 spot; China ~$1tn 2015–16 `[HARD-H]` |
| **(b) Reserve accumulation/drawdown** | Cycle-aggregate of (a); drawdowns hit bills first | Drawdown amplifies; accumulation = demand | India reserves $728.49bn (27 Feb) → $682.3bn (29 May 2026), −$46bn `[HARD-H]` |
| **(c) Policy-rate defense (hiking)** | Raise domestic rates to stem outflows | **Reduces** (avoids reserve sale) | Turkey 8.5%→50% (+4,150bp <1yr); Brazil Selic 13.75% (Aug-2022); India repo HELD 5.25% (declined this tool, 5 Jun 2026) `[HARD-H]` |
| **(d) Diaspora deposits/bonds** | Pull private non-resident dollars into the banking system | **Reduces** (1:1 first order) | India 2026 FCNR(B) — full detail below |
| **(e) FIMA repo + Fed swap lines** | Borrow dollars against USTs instead of selling | **Strongest reducer** (when used) | FIMA repo $1mn / CB swaps $28mn (10 Jun 2026); swaps peaked ~$450bn May 2020 `[HARD-H]` |
| **(f) Capital controls / macroprudential** | Restrict outflows, export-realization rules, gold curbs | Short-run reducer, long-run ambiguous | Nigeria naira 461/$→900/$ (2023); India restored 9-mo export-realization 2026 `[HARD-M]` |
| **(g) Gold accumulation / diversification** | Buy gold instead of USTs | **Slow structural reducer** | WGC 29t/mo 36-mo avg ≈ $37bn/yr diverted `[HARD-H]` |
| **(h) Local-currency bond development** | Deepen domestic markets, borrow in own currency | Relative reducer of global UST demand | India joined JPMorgan GBI-EM 28 Jun 2024, ~$20–25bn over 10 mo `[HARD-M]` |
| **(i) Private dollarization via stablecoins (9th, M.1)** | Households/firms hold USD stablecoins privately | Bullish T-bills; ambiguous for EM sovereign | Stablecoins ≈ $230bn (USDT ≈$142bn, USDC ≈$60bn); Tether UST exposure ≈ $113–127bn (≈18th-largest sovereign holder); GENIUS Act 2025 mandates HQLA backing `[HARD-M]` |

**The synthesis insight `[DURABLE]`:** India mid-2026 has *already* spent heavily on (a)/(b) — $53bn spot, $46bn drawdown, ~$110–115bn forward book — and is now deliberately pivoting to (d), having *declined* (c). That pivot is the live behavioral-layer answer.

### The DV01 ruler (GPT-5.5's single most useful number) `[DURABLE]`
At 10y 4.45% and duration 8.1, DV01 ≈ **$0.81mn per $1bn per bp**. A **$50bn 10y-equivalent sale ≈ $40.5mn/bp**. Street clearing elasticity ~1bp per $7.5bn → $50bn ≈ **6–7bp of mechanical term-premium pressure**. Japan+China's combined Mar-2026 drop of $88.7bn ≈ **~$72mn/bp dropped on the market in one month**. `[HARD-H]`

### CFTC COT, cross-currency basis, FIMA/swap lines `[DURABLE]`
- **CFTC COT** — net-short yen futures positioning is the carry-positioning gauge (free, weekly, delayed).
- **Cross-currency basis (EUR/JPY → USD)** — widening to crisis levels is an escalation lead indicator; FRA/OIS another offshore-funding-stress gauge. **The single best early-warning is the spread between offshore dollar funding stress (cross-currency basis, FRA/OIS) and the FIMA/SRF administered rate — NOT current FIMA outstanding.** `[DIR-H]`
- **FIMA / swap lines** — explicitly "an alternative to open-market Treasury sales"; option value >> observed balance ($1mn now). A $50bn FIMA draw removes ~$40.5mn/bp of immediate DV01 from private absorption. Standing swap lines: only the 5 core CBs (ECB, BoJ, BoE, SNB, BoC); FIMA covers ~250+ approved counterparties.
- **SRF (domestic backstop, R-09.2 §4.1)** — made permanent July 2021; with QT-drained reserves, **SRF take-up is now the single best real-time gauge of genuine funding stress.** NY Fed publishes results free, daily.

### FX intervention incl. MOF `[DURABLE + LIVE]`
Japan MOF verified ops: ¥2.8382tn (22 Sep 2022, ~$19–20bn), ¥5.6202tn + ¥0.7296tn (Oct 2022, ~$42–43bn), ¥5.9185tn + ¥3.8700tn (Apr 29 + May 1 2024, ≈$62bn at ¥157). **May-2026 page: ¥11.7349tn (28 Apr–27 May), direction unconfirmed — flag.** Free: MOF intervention CSV. `[HARD-H / flagged-M]`

### TIC scoreboard (Mar-2026, full table) `[HARD-H; LIVE]`
| Holder | Mar-2026 | m/m | y/y | Flow read |
|---|---:|---:|---:|---|
| Japan | $1.1916tn | −$47.7bn | +$60.8bn | Current seller if yen defense persists; biggest official DV01 swing |
| UK | $926.9bn | +$29.6bn | +$147.6bn | Private/custody/basis amplifier |
| China | $652.3bn | −$41.0bn | −$113.1bn | Structural reducer |
| Cayman | $459.4bn | +$16.4bn | +$5.8bn | Leveraged fund / basis-trade demand; fragile |
| Belgium | $454.0bn | −$0.7bn | +$51.9bn | Euroclear/custody |
| India | $183.0bn | −$7.6bn | −$56.9bn | Seller/drawdown; FCNR(B) substitutes |
| Brazil | $168.0bn | −$2.6bn | −$40.4bn | Carry > reserves |
| Saudi | $149.6bn | −$10.8bn | +$18.0bn | Oil-revenue UST-positive y/y |
| S. Korea | $136.8bn | −$4.1bn | +$11.0bn | FX smoothing + NPS hedge |
| UAE | $114.1bn | −$5.8bn | +$9.8bn | Oil channel positive; SWF undercounted |
| **Total foreign** | **$9.3487tn** | **−$138.4bn** | **+$294.5bn** | Selling/valuation month, not yet a y/y buyer strike |
| **Foreign official** | **$3.9022tn** | **−$108.7bn** | **−$21.2bn** | **The net UST-demand soft spot** |
*TIC caveat: collected from US-based custodians; m/m = flow + valuation + custody-location signal, not pure transactions.* The Caribbean line (UK+Cayman +$46.0bn m/m vs Japan+China −$88.7bn) is heavily **basis-trade leverage** (long cash UST / short futures / levered repo) — **fragile**: if repo haircuts rise, it can flip to forced seller.

### The India FCNR(B) "17%" reconciliation `[DURABLE — the flagship explainer]`
**The 2026 program (every verified parameter):** Announced 5 Jun 2026; circular 8 Jun 2026; RBI bears **full** hedging cost for fresh **3–5yr** FCNR(B) deposits; window 8 Jun → 30 Sep 2026; bank swap access to 16 Oct 2026; 1-yr lock-in; **swap at par (both legs at FBIL — banks bear ZERO hedging cost)**; CRR/SLR exempt; expected USD deposit rate **~5.5–7%** (SBI "5.5%+", Emkay 6.0–6.5%, ET BFSI 6–7.1%); current pre-program 3-yr FCNR ~3.05–3.35%; interest tax-free; **no official RBI target** (Jefferies $50–70bn; IDFC First ~$40bn; ETBFSI $40–50bn FY27). Companion ECB swap window at fixed 1.5%/yr to Dec 2026. `[HARD-H]`

**The structural upgrade vs 2013:** 2013 offered a *fixed concessional* 3.5%/yr swap (banks still bore 3.5%); 2026 is **at par** — RBI absorbs the *entire* >3% cost. "This single mechanism shift offsets the much thinner 2026 India–US rate differential (~1.5–2% vs ~5.5–6% in 2013)." `[HARD-H]`

**The "17%" verdict — PARTIALLY CONFIRMED, SYSTEMATICALLY MIS-STATED `[DURABLE; H]`:** The 17% is **NOT the deposit coupon** (~5.5–7% USD). It is a **leveraged dollar IRR** from a Jefferies note: *"with 7–10x leverage and spread of 1.5–2 percent, customers can generate 17–27 percent US$-IRR annually over 3–5 years."* Worked math: NRI puts $100k equity, borrows $700k at ~5% (SBLC-backed), deposits $800k at ~6.5% → $800k×6.5% − $700k×5% = **$52k − $35k = $17k on $100k = 17% USD IRR**. Currency risk sits with RBI, not the depositor. Historical echo: NRIs earned "17–18%" via the identical structure in 2013. The "3 years" = tenor/lock-in, NOT a yield horizon. "Any guaranteed-17%-in-dollars framing is rumor-grade marketing." **Council disagreement surfaced:** Gemini argued it's a "synthetic INR-hedged 17%" — synthesis *rejects* this (depositor takes no INR exposure; RBI's subsidy goes to the bank's hedging cost, not the depositor's coupon).

**Substitution math `[DURABLE]`:** first-order 1:1 — a successful $50–70bn raise more than offsets BOTH the FY26 $53bn spot intervention AND the $46bn drawdown ≈ $40.5–57mn/bp avoided DV01. **Two hedges:** (1) round-tripping leakage (much "inflow" is overseas-bank money lent to leveraged NRIs — Ananth Narayan's 2013 critique: India effectively raised 3-yr dollars at ~5.00% ≈ 4.35% over USTs); (2) maturity cliff (must repay in 3–5yr; 2013 faced ~$20bn redemption outflow). **Council estimate: $25–50bn realized inflow (vs $50–70bn headline), ~$20–40mn/bp — meaningful at India's level, marginal at global.**

**Diaspora track record (other countries) `[DURABLE]`:** Israel DCI >$54bn cumulative (record ~$8bn 2024) = only truly *structural* program; Pakistan RDA $11.31bn cumulative by Oct 2025; Nigeria $300m 2017 bond (130% oversubscribed, redeemed); Ethiopia = textbook failure; Sri Lanka SLDBs swept into 2022 default. India lineage: IDB 1991 $1.6bn → RIB 1998 $4.2bn (7.75% USD) → IMD 2000 $5.5bn (8.5% USD, redeemed $7.08bn) → FCNR(B) 2013 $26bn (~$34bn incl ECB). `[HARD-H]`

### DV01 sizing + stablecoin 9th channel
Covered above (DV01 ruler; mechanism (i)).

### The council's quantitative bottom line `[DURABLE]`
GPT-5.5 central **6-month net foreign UST demand: +$60bn** (range −$75bn to +$175bn). Decomposition: official −$120bn, private/custody +$110bn, oil-recycling +$50bn, FIMA substitution +$20bn. "Composition is bearish for term premium even at the central point because liquid duration is supplied by official sellers and absorbed by leveraged private holders." Stress case (−$200bn official net selling) ≈ $162mn/bp → +15–25bp on the long end.

**Free data:** TIC (monthly, 2-mo lag); CFTC COT (weekly); MOF CSV; NY Fed SRF + FIMA/H.4.1 (daily/weekly); WGC (monthly); RBI weekly reserve prints. **Lead/lag:** offshore-basis/SRF-spread leads; TIC lags 2 months.

---

## §8 — CROSS-ASSET (normal relationship + what breaks each) `[DURABLE]`

| Pair | Normal relationship | What breaks it |
|---|---|---|
| **Dollar ↔ commodities** | Strong dollar = cheaper commodities (priced in USD); petrodollar recycling cushions oil spikes | Hormuz chokes *physical volume* → revenue capacity destroyed; recycling loop breaks (degree disputed) |
| **Dollar ↔ rates** | Higher US real rates → firmer dollar (carry + tighter conditions) | A de-escalation/cut narrative weakens dollar; a buyer's-strike pushes rates up *and* could weaken dollar (fiscal-trust loss) |
| **Gold ↔ real yields** | Inverse (gold's opportunity cost rises with real yields) | 2026 decoupling — gold record despite +2.16% real (geopolitical/fiat-trust premium dominates); snaps back if real yields rise faster than risk premia |
| **Gold ↔ Bitcoin** | `[THIN — not in research]` | Both framed as fiat-debasement hedges; BTC plumbing is the Crypto desk (P-12). No R-09 hard figure. |
| **Dollar ↔ EM equities** | Strong dollar = EM-equity headwind (tighter $ liquidity, carry outflows) | Carry unwind crushes EM (Aug 2024 named MXN/BRL/ZAR losses); de-escalation reverses (carry re-attracts inflows) |

**Anchor cross-asset facts:** "Rates sit *under* every other asset class." DGS2/DGS10/DFII10/T10YIE/SOFR is the best free cross-asset rates dashboard; DXY, spot gold, MOVE, live swap spreads are no-free-feed (scaffold). The 2023 "Treasury tantrum" template: 10y rose <4%→>5%→3.9%, *primarily term-premium-driven* (QT, issuance, uncertainty). `[HARD-H]`

**Free data:** FRED rates series (daily); DXY/gold/MOVE scaffold only. **Lead/lag:** rates/real-yields lead FX and gold; DXY leads EM equity stress.

---

## §9 — CATALYSTS (Iran/Hormuz, petrodollar recycling, de-dollarization) — RICH `[DURABLE]`

### Iran/Hormuz transmission chains to dollar + gold + funding
**The physical shock:** EIA — Hormuz handled **~20mn b/d in 2024 ≈ ~20% of global petroleum liquids ≈ >1/4 of global seaborne oil trade**. Live: closed since 4 Mar 2026; OPEC output down 30%+; Brent $101→$87 on fragile ceasefire. `[HARD-H; LIVE]`

**The chains (which are active now):**
- **Chain A — Oil → CPI → Fed → front end (ACTIVE, DOMINANT):** Brent spike → energy CPI +23.5% y/y → headline +4.2% → Fed prices out all 2026 cuts + ~37% Oct hike → front end pinned → **dollar firm** (carry leg). Fed elasticity: permanent +10% oil raises energy CPI ~1.5% on impact / ~2.3% after 2 quarters, core ~0.1% after 8 quarters. `[HARD-H]`
- **Chain B — Safe-haven bid (INTERMITTENT):** escalation headline → flight-to-quality → **dollar + gold bid, long-end rally**. "Currently dormant but one headline away from reactivation."
- **Chain C — Supply/deficit → term premium (ACTIVE, STRUCTURAL):** war-driven fiscal needs + ~6%-GDP deficit + foreign-demand questions → bear-steepening → pressure on the dollar's UST anchor.
- **Chain D — MBS-convexity amplifier (CONDITIONAL):** any decisive yield break triggers convexity selling (~$40bn-equivalent in May 2026).
- **Gold-specific:** Hormuz/geopolitical premium is the dominant driver of the gold decoupling (§3). Escalation markers: Brent >$95–100, T5YIFR de-anchoring >2.5%, an actual Fed hike. De-escalation: Brent <$80, cut odds returning, DXY <100.

### Petrodollar recycling `[DURABLE — council's biggest disagreement, surface it]`
1974 arrangement = oil exporters park dollar surpluses in USTs (a "perpetual buyer"). Hormuz cuts both ways:
- **Bullish channel:** sustained Brent $87+ vs $60s pre-conflict → larger Gulf surpluses → potentially MORE recycling. Saudi UST +$18bn y/y, +$12bn over 2025.
- **Bearish channel:** Gulf reportedly lost ~$50bn export revenue from disrupted flows; *threatened* to price oil in yuan absent Fed swap lines (`[DIR-L]` — single uncorroborated video; **treat as rumor**).
- **Council split:** Gemini = "petrodollar fracture, severely net-negative"; Opus/GPT = "ambiguous — Saudi still a y/y BUYER; revenue capacity unchanged or higher." **Synthesis: fracture is PARTIAL not complete. What shifted is the *willingness* to recycle (now politically conditional), not the *capacity* (revenue).** `[DIR]`

### De-dollarization `[DURABLE]`
- **COFER USD share ~56.8–56.9% Q3 2025** — 25-yr low, from 72% peak 2001 (COFER now covers 100% of reserves, 147 reporters, after Q3-2025 elimination of the unallocated portion). `[HARD-M]`
- **Central-bank gold tonnage:** 29t/mo 36-mo avg ≈ $37bn/yr diverted from USTs. `[HARD-H]`
- **BRICS local-currency settlement + mBridge:** named as the structural-diversification vector; "gold cannot facilitate a $100tn global trading system" (the skeptic camp).
- **Council split:** Camp A (real, accelerating — COFER low, yuan-pricing threats, mBridge, gold pace) vs Camp B (marginal — Saudi still prices in dollars, network effects don't unwind overnight, Saudi UST *rose* $12bn 2025, no viable alternative with UST's depth/liquidity/legal protection). **Synthesis: real but GLACIAL — Hormuz raises the temperature on a multi-decade shift; does not break it.** Gemini's "complete fracture" = tail scenario, not base case. `[DIR]`

**Free data:** EIA Hormuz/STEO; IMF COFER (quarterly, exact table not free-feed-exposed — flag); WGC (monthly); TIC for Gulf holdings (monthly). **Lead/lag:** oil → CPI → Fed has a multi-quarter lag; COFER/gold are structural.

---

## §10 — EVIDENCE (free data sources per tile + falsifiers)

### Free data sources + cadence `[DURABLE]`
| Tile | Free source | Cadence | Feed-state |
|---|---|---|---|
| Real yields | FRED DFII10 | Daily | LIVE |
| US rates / curve | FRED DGS2/DGS10/DGS3MO/T10Y2Y | Daily | LIVE |
| Breakevens | FRED T10YIE, T5YIFR | Daily | LIVE |
| Fed path | CME FedWatch / Polymarket / Atlanta Fed Mkt Prob Tracker | Daily | source_identified (no FRED real-time) |
| TIC foreign holdings | Treasury TIC MFH | Monthly (~2-mo lag) | LIVE-lagged |
| FX intervention (Japan) | MOF intervention CSV | ~Monthly | LIVE (direction sometimes lagged) |
| CB gold | World Gold Council | Monthly | LIVE |
| COFER USD share | IMF COFER | Quarterly | exact table NOT free-feed-exposed — flag |
| Carry positioning | CFTC COT (net-short yen futures) | Weekly | LIVE-delayed |
| Funding stress | NY Fed SRF results; FIMA/swaps via H.4.1 | Daily/weekly | LIVE |
| SOFR/repo | FRED SOFR, IORB, RRPONTSYAWARD | Daily | LIVE |
| RBI reserves / FCNR take-up | RBI weekly statistical supplement | Weekly | LIVE (FCNR realized inflow — no official series yet) |
| Oil / Hormuz | EIA Hormuz + STEO | Monthly/event | LIVE |
| Stablecoins | Tether attestation / Circle 2a-7 reports | Monthly | LIVE (asymmetric disclosure — flag) |
| **DXY / spot gold / MOVE / live swap spreads** | **NO FREE REAL-TIME FEED** | — | **Scaffold honest placeholder** (FRED Broad Dollar lagged proxy; LBMA fix for gold) |

### Falsifiers / what-would-prove-us-wrong `[DURABLE]`
- **Dollar-firm thesis falsified by:** DXY sustained <100 with de-escalation; cut odds returning to FedWatch; resumption of strong foreign-official TIC buying.
- **Substitution thesis (FCNR) falsified by:** deposit rates rise but inflows fail (spread too thin) → RBI forced back to (a) UST selling. Success markers: bank FCNR card rates climbing toward 7%, RBI reserve prints stabilizing, INR-USD basis tightening, visible weekly swap-auction take-up.
- **Petrodollar-fracture (Gemini) falsified by:** Saudi remaining a y/y UST buyer (it is, +$18bn) + Gulf establishing alt pipeline routes restoring revenue + recycling.
- **De-dollarization-accelerating falsified by:** Saudi UST holdings rising (they did, +$12bn 2025); dollar still pricing Gulf oil; no viable deep liquid alternative.
- **Carry-unwind-as-bearish-for-USTs falsified by:** flight-to-quality dominating (1998 precedent: 10y troughed 4.16%); Japanese institutions hedging rather than selling underlying.
- **Gold-decoupling thesis falsified by:** gold snapping back if real yields rise faster than geopolitical risk premia.
- **Earliest-warning indicator (the master tell):** the spread between offshore dollar funding stress (cross-currency basis, FRA/OIS) and the FIMA/SRF administered rate — NOT current FIMA outstanding ($1mn).

---

## BUILD-TIME RE-VERIFY LIST (live values move) `[LIVE]`
Re-pull at build: latest TIC (Japan/China/UK/India/Saudi + foreign-official subtotal); RBI FCNR(B) actual inflow vs $50–70bn estimate; MOF May-2026 intervention *direction* (flagged unconfirmed); stablecoin circulation + Tether/Circle T-bill exposure; WGC monthly CB gold; FIMA/swap H.4.1; COFER USD share; DXY; spot gold; real 10y; Fed path odds. **The mechanisms, taxonomy, substitution math, carry history, gold↔real-yield logic, and the "17%" reconciliation are the DURABLE deliverable; point-in-time values are a snapshot to refresh.**

---

## GAPS WHERE RESEARCH IS THIN (read before building)
1. **REER/PPP per currency (§3, §4):** no REER/PPP table in R-09.x. Source BIS REER (free, monthly) + OECD/Big-Mac PPP at build. Only DXY ~100 inflection is research-grounded.
2. **Per-cross valuation detail (§5):** EUR/JPY/CHF/GBP/CNY are covered through the *sovereign-tool* lens, not pip-level technicals or fair-value models. Strong on JPY (tail risk) and CNY (no-feed pressure point); thinner on EUR/GBP fundamentals.
3. **EM-FX importer/exporter split (§5):** the components exist (INR/TRY/IDR/BRL importers vs Saudi/UAE/Brazil exporters; Fragile Five) but are NOT a single named taxonomy in the research — assemble it.
4. **Value/momentum as named FX factors (§6):** the dollar-smile is treated as a risk factor; carry is deep; but value/REER and momentum are not isolated with backtests — source standard FX-factor literature at build.
5. **Silver / PGMs (§5):** zero coverage — gold only. Source fresh, flag provenance.
6. **Gold ↔ Bitcoin (§8):** not in research (BTC is Crypto desk P-12). Frame cautiously.
7. **The "2026 record-then-correction" gold arc (§3):** research anchors gold ONLY at record ~$4,365 (mid-June 2026). The correction/$5,595 framing is desk-state, NOT corroborated by R-09 — source fresh and flag.
8. **mBridge / BRICS specifics (§9):** named as vectors but no hard tonnage/volume figures beyond COFER + gold pace.

*Blueprint compiled from R-09.1 (read in full), R-09 §1 + spine §2.1–§2.10 (read in full), R-09.2 §4 + bottom line + gaps (read in full), and the R-09.x council files (mined for gold/FX/de-dollarization figures). All [HARD] figures carried verbatim with source attribution. Live environment: mid-June 2026.*
