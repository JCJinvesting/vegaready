# Model Council — P-10 FX / Gold Desk
### Claude Opus 4.8 · independent contribution · live as of mid-June 2026

> **Tagging convention.** `[HARD]` = a hard, checkable quantitative fact or identifier (a price, a series ID, a published statistic). `[DIR]` = a directional or interpretive claim — a read, not a measurement. Confidence is stated where it matters. Free, attribution-only sources (FRED, BIS, IMF COFER, World Gold Council, CFTC, ECB) are preferred; every metric with **no free real-time feed** is flagged explicitly.
>
> **Method note on fact vs. interpretation.** This desk keeps the *observed* number and the *story we tell about it* in separate columns. Where the council disagrees, that disagreement is presented as a disagreement, not laundered into a house consensus. The single most important interpretive call in this report — that gold has decoupled from real yields — is treated as a *contested hypothesis with strong supporting evidence*, not a settled law.

---

## 1 · SCOPE & STATE

**Scope.** This desk owns the **US dollar** (broad and against majors), **monetary metals** (gold and silver as stores of value, not as industrial inputs), and **cross-currency funding / dollar plumbing**. It explicitly does **not** own oil or industrial metals (Commodities desk) or the shape of the rate curve itself (Rates desk). We consume the Rates desk's real-yield prints and the Commodities desk's oil prints as *inputs*, and we comment on the FX/gold *transmission* of those inputs — not on the inputs themselves.

**One-sentence regime call.** `[DIR]` We are in a **realized strong-dollar, record-gold safe-haven regime** — a dollar bid for liquidity and an *independent* gold bid for sovereign-balance-sheet insurance, both energized by a live geopolitical catalyst (the 2026 Iran war and the on-again/off-again closure of the Strait of Hormuz); the key risk to this base case is *de-escalation*, which would unwind the haven premium and let both the dollar and gold give back ground — and is therefore upside for risk assets, not for this desk's longs. *(Confidence: high on the regime description, medium on its durability past the catalyst.)*

**Four headline numbers.**

| # | Metric | Value | What it means |
|---|---|---|---|
| 1 | **Broad dollar** (FRED `DTWEXBGS`, 2026-06-05) | **120.08** ([FRED DTWEXBGS](https://fred.stlouisfed.org/series/DTWEXBGS)) | Trade-weighted dollar against *all* US trading partners, indexed Jan-2006 = 100. Near the upper end of its multi-year range — the dollar is *firm*, not euphoric. `[HARD]` |
| 2 | **EUR/USD** (FRED `DEXUSEU`, 2026-06-05) | **1.1533** ([FRED DEXUSEU](https://fred.stlouisfed.org/series/DEXUSEU)) | Dollars per euro. Euro has softened modestly as the dollar climbed back above DXY 100 on energy-inflation fears. `[HARD]` |
| 3 | **Gold** (front-month futures, 2026-06-12) | **$[4,239.90](claim:4)** (+[3.06](claim:5)% on day) | A record-vicinity print; the LBMA spot benchmark sits a touch higher (~$4,365 per the desk brief). Safe-haven bid **plus** structural central-bank demand. `[HARD]` |
| 4 | **Real 10y** (FRED `DFII10`, 2026-06-11) | **+2.16%** ([FRED DFII10](https://fred.stlouisfed.org/series/DFII10)) | 10-year TIPS yield. **Positive and elevated** — yet gold is at a record. This is the decoupling, in two numbers. `[HARD]` |

The tension between rows 3 and 4 is the analytical heart of this report. In the textbook, a +2.16% real 10y should be a heavy weight on a zero-coupon, storage-cost asset. It is not. Either the textbook relationship has broken, or it is merely overwhelmed by a larger force. Section 3, §5–§6, and the Layman Kit return to this repeatedly.

A note on the two dollar gauges that will recur: the **ICE Dollar Index (DXY)** printed **[99.81](claim:1)** on 2026-06-12 (52-week range [95.55](claim:3)–[100.64](claim:2)), having climbed back above 100 mid-month. DXY is a *six-currency, euro-heavy, ICE-proprietary* basket. The Fed's `DTWEXBGS` is a *26-economy, trade-weighted, free* basket at 120.08. **They are not the same number and never will be** — DXY is a 1973-era European-trade snapshot; the broad index reflects Mexico, China, Canada and the actual pattern of US trade. When this report says "the dollar," it means the broad index unless DXY is named explicitly.

---

## 2 · THE ANALYST SPINE (§1–§10)

### §1 · Regime — dollar level/trend and the 'dollar smile'

**Read.** `[DIR]` The dollar is firm and bid for the *right* (defensive) reason, not the left (US-growth-exceptionalism) reason — which is itself diagnostic of where we sit on the smile.

**Indicator — broad dollar level/trend.** `DTWEXBGS` at **120.08** (2026-06-05) ([FRED DTWEXBGS](https://fred.stlouisfed.org/series/DTWEXBGS)) `[HARD]`. The series has ground higher through the spring as the Iran war re-priced energy inflation and pulled defensive flows into dollars. The advanced-foreign-economies cut (`DTWEXAFEGS`) sits at **112.68** on the same date ([FRED DTWEXAFEGS](https://fred.stlouisfed.org/series/DTWEXAFEGS)) `[HARD]` — the gap between the all-partners and the AFE-only index is the EM-currency drag, which we unpack in §2.

**The 'dollar smile' framing.** Stephen Jen's smile says the dollar is strongest at *two* extremes: (left) US growth dramatically out-performing the world, and (right) global risk-off / flight-to-safety; it is weakest in the boring middle, where the rest of the world is catching up and capital leaves the dollar for higher returns abroad. `[DIR]` We are clearly on the **right side of the smile** — the dollar is rising *with* gold, *with* the yen and franc, and *with* energy-inflation fear, which is the signature of a liquidity/safety bid rather than a growth bid. The tell is that the dollar is firm even as the market debates Fed *cuts* (a left-side dollar would require the Fed out-hawking the world). *(Confidence: high.)*

**Why this matters for everything downstream.** The right side of the smile is where dollar strength and risk-asset weakness travel together, where cross-currency basis can gap negative in a squeeze (§7), and where the dollar's gains are most *reversible* — they evaporate the moment the catalyst de-escalates. A left-side dollar (2022-style, Fed-driven) is sticky; a right-side dollar (2020-style, fear-driven) is a coiled spring in the other direction. That asymmetry shapes the entire scenario matrix in Section 4.

The regime is best summarized as **"firm dollar, for defensive reasons, with a fat reversal tail on de-escalation."** That is a very different posture from the 2022 regime, when the dollar was firm for *monetary* reasons and gave back ground only slowly over a year.

### §2 · Structure — broad vs. narrow dollar; havens vs. EM vs. commodity FX

**Read.** `[DIR]` The dollar's strength is *broad but uneven* — concentrated against energy-importing EM, muted against fellow havens, and crosscut by petrodollar flows into oil-exporter currencies.

**Indicator 1 — broad vs. AFE spread.** `DTWEXBGS` 120.08 vs. `DTWEXAFEGS` 112.68 ([FRED](https://fred.stlouisfed.org/series/DTWEXBGS)) `[HARD]`. The all-partners index sits ~7.4 points above the rich-country-only index, and that wedge is the weight of stressed EM currencies (energy importers in particular) inside the broad basket. When the wedge *widens*, the pain is concentrated in the developing world; when it narrows, EM is healing.

**Indicator 2 — haven cross-rates.** USD/JPY at **[160.21](claim:12)** and USD/CHF at **[0.80](claim:13)** (2026-06-12) tell a subtle story `[HARD]`. The franc is strong (a low USD/CHF print = expensive franc), behaving as the purest haven. The yen, by contrast, is *weak* in spot terms — 160 is a multi-decade-cheap yen — because Japan's still-low rates make it the world's funding currency, and a strong-dollar/firm-energy world keeps the carry trade alive (§6, §7). `[DIR]` The yen is thus a *conditional* haven: cheap and carry-funding in calm, but a violent buyer's panic when carry unwinds (August-2024 template). *(Confidence: high on the franc read, high on the yen's conditional nature.)*

**The three-bucket structure.** `[DIR]`
- **G10 havens (USD, CHF, JPY-conditional):** bid for safety and liquidity.
- **EM energy importers (INR, TRY, ZAR):** the clear losers — they import the oil shock and pay for it in a stronger dollar (§5).
- **Commodity / oil-exporter FX (NOK, CAD, MXN, and the pegged Gulf currencies SAR/AED):** crosscut — terms-of-trade *winners* from high oil, but exposed to global-risk and the dollar's pull; the Gulf pegs convert the windfall into reserve accumulation rather than FX appreciation.

This three-bucket split is why "the dollar is strong" is an incomplete sentence. It is strong *against the people who can least afford it* and roughly flat *against the currencies that share its safe-haven or its petro-windfall characteristics.* The distribution of the move, not its average, is the story.

### §3 · Valuation — REER/PPP over/undervaluation; gold vs. real yields

**Read.** `[DIR]` The dollar is *rich* on long-run valuation metrics; gold is *expensive* on its historical real-yield model but *not* on a sovereign-insurance model — and which model you believe is the entire debate.

**Indicator 1 — real effective exchange rate (REER).** The BIS publishes broad real effective exchange rate indices (free, monthly) at the [BIS effective exchange rate statistics](https://www.bis.org/statistics/eer.htm) `[HARD] (feed: latest_published, no clean real-time API)`. On a REER basis the dollar has spent the post-2022 era well *above* its 20-year average, implying a structural overvaluation in PPP terms. `[DIR]` Rich currencies can stay rich for years when they also offer the deepest safe asset on earth — "expensive" is a headwind, not a timing signal. *(Confidence: medium-high; REER over-valuation is real but notoriously useless for timing.)*

**Indicator 2 — gold vs. real yields.** This is the marquee valuation question. Real 10y is **+2.16%** (`DFII10`) ([FRED](https://fred.stlouisfed.org/series/DFII10)) and 10y breakeven inflation is **2.31%** (`T10YIE`, 2026-06-12) ([FRED T10YIE](https://fred.stlouisfed.org/series/T10YIE)) `[HARD]`. In the 2006–2021 relationship, a real 10y of +2% would have been consistent with gold *hundreds of dollars lower*, because gold's opportunity cost (forgone real yield on TIPS) would be high. Instead gold is at **$[4,239.90](claim:4)** `[HARD]`. State Street's research frames this precisely: gold has "realized its most significant deviation from its historical relationship with real rates," appreciating ~28% in real terms even as yields rose 734 bps and the dollar strengthened ~10% ([State Street Global Advisors](https://www.ssga.com/library-content/assets/pdf/apac/gold/2025/en/us-real-rates-still-matter-for-gold.pdf)) `[HARD]`.

`[DIR]` **The decoupling is observed fact; the *cause* is interpretation.** The leading explanation is that a new, price-insensitive marginal buyer — emerging-market central banks plus Chinese retail — does not discount gold against TIPS yields at all; they buy it as counterparty-risk-free reserve insurance regardless of the real rate (§5, §7, Layman Kit Ch. 5–6). A competing read is "fiscal dominance": gold is now correlated to US *fiscal instability* rather than real rates, pricing the political path of inflating away the debt ([International Finance Magazine](https://internationalfinance.com/magazine/banking-and-finance-magazine/building-the-global-gold-wall/)) `[DIR]`. Both explanations predict re-linkage only if the new buyer steps back — which is the falsifier we watch in §9 and Section 8.

**A discipline on the word "decoupled."** `[DIR]` State Street's own framing is the honest one: real rates "might no longer *cap* bullish runs as effectively" — not that they have stopped mattering. The correlation has weakened and gone asymmetric, not vanished. A reader who hears "gold ignores real rates now" has over-learned the lesson. The accurate statement is narrower: *the central-bank/EM bid currently dominates the real-rate signal, and would resume mattering at the margin if that bid faded.*

### §4 · Fundamentals — rate differentials, twin deficits, terms of trade

**Read.** `[DIR]` The dollar's *cyclical* fundamentals (rate differentials, safe-asset demand) are supportive; its *structural* fundamentals (twin deficits, debt trajectory) are the slow-acting case against it that feeds the de-dollarization and gold narratives.

**Indicator 1 — rate differentials.** The US-Japan policy-rate gap remains the dominant carry signal in G10. With US real 10y at +2.16% (`DFII10`) ([FRED](https://fred.stlouisfed.org/series/DFII10)) and Japan still structurally low, USD/JPY at [160.21](claim:12) is the differential expressed in spot `[HARD]`. `[DIR]` Wide differentials are *dollar-supportive in calm* (carry favors the dollar) but *dollar-destabilizing in stress* (the unwind is violent and dollar-negative against the yen specifically).

**Indicator 2 — twin deficits and terms of trade.** The US runs persistent twin (fiscal + current-account) deficits; the fiscal trajectory is the explicit motive cited by central-bank gold buyers ([International Finance Magazine](https://internationalfinance.com/magazine/banking-and-finance-magazine/building-the-global-gold-wall/)) `[DIR]`. On terms of trade, the 2026 oil shock is a *negative* terms-of-trade hit to energy importers (Japan, India, Türkiye, the euro area) and a *positive* one to exporters (Norway, Canada, Gulf, Mexico) — which is exactly the §2/§5 currency split. The US, now a net energy producer, is comparatively insulated, which is a quiet additional dollar support during an energy shock. `[DIR]` *(Confidence: high on the directional terms-of-trade map.)*

**The fundamental paradox.** `[DIR]` The same fiscal deterioration that *undermines* the dollar's long-run structural case is, in the short run, *bullish* the dollar via flight-to-the-deepest-liquid-market and bullish gold via the debasement hedge. This is why "the dollar is doomed" and "the dollar is bid" can both be true on different horizons — and why a careful desk separates the cyclical (firm dollar now) from the structural (eroding privilege over decades). Collapsing the two horizons is the single most common analytical error in this space.

### §5 · Cohorts / segments — USD vs. G10 havens vs. EM importers vs. oil-exporter FX; gold vs. silver

**Read.** `[DIR]` The cleanest way to see the regime is by cohort, because the *average* dollar/gold move hides enormous cross-sectional dispersion.

**FX cohorts.** `[DIR]`
- **USD (reserve haven):** firm, liquidity bid. `DTWEXBGS` 120.08 ([FRED](https://fred.stlouisfed.org/series/DTWEXBGS)).
- **G10 havens (CHF, JPY):** CHF strong (USD/CHF [0.80](claim:13)); JPY weak-but-coiled (USD/JPY [160.21](claim:12)) `[HARD]`.
- **EM energy importers (INR, TRY, ZAR):** the pressure cohort — they pay the oil bill *and* the stronger-dollar bill simultaneously (no free real-time FRED daily series for these three; FRED carries some but on lag — `feed: source_identified`).
- **Oil-exporter / commodity FX (NOK, CAD, MXN; SAR/AED pegs):** terms-of-trade winners; the Gulf pegs convert the windfall into reserves and gold rather than spot appreciation.

**Gold vs. silver — the monetary-metal split.** This is a high-value tell. Gold is **$[4,239.90](claim:4)** (+[3.06](claim:5)% on day); silver is **$[67.97](claim:8)** (+[6.21](claim:9)% on day), with a 52-week high of **$[121.78](claim:10)** `[HARD]`. The **gold/silver ratio is ~[62.4](claim:11)** `[HARD]`. `[DIR]` Two readings: (1) silver out-performing on the day (+6.2% vs. +3.1%) is the classic *late-cycle, high-beta* behavior — silver is the leveraged, more-industrial cousin that runs hardest once a precious-metals move is established; (2) but the *driver* differs — gold's bid is overwhelmingly **monetary/sovereign** (central banks do not buy silver as a reserve asset), whereas silver's is a **mix of monetary sympathy and industrial demand**. For a *monetary* desk, gold is the cleaner read on de-dollarization and haven demand; silver's signal is contaminated by the industrial cycle and therefore lives partly on the Commodities desk. *(Confidence: high.)*

**Why the cohort lens beats the index.** A trader who only watches DXY [99.81](claim:1) sees a quiet tape. A trader who watches the *cohorts* sees a violently bifurcated one: havens bid, importers bleeding, exporters winning, gold at records, silver running. The regime's information is in the dispersion.

### §6 · Factors — carry, value, momentum, dollar-smile/risk

**Read.** `[DIR]` Three of the four canonical FX factors currently point the *same* way (long dollar / long haven), which is itself a crowding warning.

- **Carry.** `[DIR]` Long-dollar and long-high-yielder-vs-yen carry is *working* and *crowded*. The funding leg is the yen (USD/JPY [160.21](claim:12)) `[HARD]`. Carry's risk is not that it stops earning — it is that it unwinds in a single week (§7). The BIS's post-mortem on the August-2024 unwind is the canonical free reference ([BIS Bulletin 90](https://www.bis.org/publ/bisbull90.pdf)) `[HARD]`.
- **Value (REER).** `[DIR]` Points *against* the dollar — it is rich on REER ([BIS EER](https://www.bis.org/statistics/eer.htm)). Value is the contrarian factor here and is currently *losing*, as it does at regime extremes.
- **Momentum.** `[DIR]` Long-dollar and long-gold momentum are both positive and strong; `DTWEXBGS` grinding higher and gold at records are textbook momentum-factor longs. Momentum and carry agreeing = a crowded, reflexive trade.
- **Dollar-smile / risk factor.** `[DIR]` Firmly "risk-off / right-side-of-smile," as established in §1.

**The factor-crowding flag.** `[DIR]` When carry, momentum, and the risk factor all say "long dollar / long haven / long gold," and only value dissents, the trade is *consensus*. Consensus trades pay until the catalyst that justifies them reverses, and then they pay back fast. This is the single most important positioning observation in the report and it sets up §7. *(Confidence: high.)*

### §7 · Positioning / plumbing — cross-currency basis, dollar-funding stress, COT, reserve flows

**Read.** `[DIR]` Plumbing is *quiet but watched* — the squeeze has not happened, and the swap-line backstop makes a 2008-style freeze unlikely; but a right-side-of-smile regime is precisely where the basis can gap, so this is the desk's highest-priority monitor.

**Indicator 1 — cross-currency basis & FRA-OIS.** `[DIR]` The **cross-currency basis** (the extra cost a non-US bank pays to borrow dollars via FX swaps, over and above covered-interest-parity) and **FRA-OIS** (the spread of expected interbank funding over the risk-free overnight rate) are the two best dollar-funding-stress gauges. **Neither has a clean free real-time public feed** — `feed: no-free-feed`. Practical free/low-friction proxies: the NY Fed publishes [central-bank-swap-line](https://www.newyorkfed.org/markets/desk-operations/central-bank-liquidity-swap-operations) usage (a *spike in swap usage is the unambiguous freeze signal*), and chart services such as [MacroMicro's US FRA-OIS chart](https://en.macromicro.me/charts/45928/us-fra-ois-spread) display the spread on lag. **Historical calibration:** in the March-2020 dash-for-dollars the 3-month basis gapped to roughly **−140 bp vs. JPY and −79 bp vs. EUR**, then was fully corrected within weeks once the Fed re-opened and enhanced swap lines ([Banco de España occasional paper](https://www.bde.es/f/webbde/SES/Secciones/Publicaciones/PublicacionesSeriadas/DocumentosOcasionales/20/Files/do2025e.pdf); [ECB Economic Bulletin](https://www.ecb.europa.eu/press/economic-bulletin/focus/2020/html/ecb.ebbox202005_01~4a2c044d31.en.html)) `[HARD]`. The Dallas Fed found swap lines materially curbed both the dollar shortage and the dollar's appreciation ([Dallas Fed](https://www.dallasfed.org/research/economics/2024/0521)) `[HARD]`. **As of mid-June 2026 there is no reported swap-line draw** — the freeze is latent, not active.

**Indicator 2 — CFTC COT speculative positioning.** `[HARD] (feed: live/weekly, free)` The **Commitments of Traders** report ([CFTC COT](https://www.cftc.gov/MarketReports/CommitmentsofTraders/index.htm)) publishes weekly net-spec positioning in dollar-index, major-currency, and gold/silver futures. `[DIR]` Given the factor crowding in §6, the read to watch is whether **net-long dollar and net-long gold spec positioning is stretched** — a stretched COT is the *fuel* for a sharp reversal on de-escalation. COT is a contrarian/exhaustion tool, not a direction tool: extreme long readings mark *vulnerability*, not a ceiling. *(Confidence: high on the framework; specific net-position values require pulling the current weekly file.)*

**Indicator 3 — reserve-manager flows.** `[HARD]` The official sector is buying gold and (per COFER) *holding* its dollars largely steady in constant-FX terms (§10, Section 8). The combination — accumulate gold, don't actively dump dollars — is the precise empirical signature that distinguishes "diversification at the margin" from "de-dollarization."

### §8 · Cross-asset — dollar ↔ commodities, rates, equities/EM, gold

**Read.** `[DIR]` The classic cross-asset wiring is mostly *intact* (dollar↔commodities inverse, dollar↔EM risk inverse), with one wire *cut*: dollar/gold↔real-rates.

- **Dollar ↔ commodities (inverse — intact, but overridden):** `[DIR]` Normally a strong dollar caps dollar-priced commodities. In 2026 the *supply shock* (Hormuz) overwhelms the dollar effect for oil — they rose together. The inverse relationship is a *background* force, not the *marginal* one, during a supply crisis. (Oil levels themselves are the Commodities desk's.)
- **Dollar ↔ rates (differentials — intact):** `[DIR]` Rate differentials still drive G10 carry and USD/JPY; this wire is firmly connected (§4, §6).
- **Dollar ↔ equities / EM (risk — intact):** `[DIR]` Right-side-of-smile dollar strength travels with EM-importer FX weakness and risk-asset caution. Standard wiring.
- **Gold ↔ real yields + haven (the cut wire):** `[DIR]` Gold at $[4,239.90](claim:4) with real 10y at +2.16% (`DFII10`) ([FRED](https://fred.stlouisfed.org/series/DFII10)) is the visible break `[HARD]`. The haven and central-bank legs currently dominate the real-rate leg (§3, §5). **Re-link trigger:** a sustained pause in central-bank/EM buying *while* real yields stay high would let the old gravity reassert. *(Confidence: high that the wire is currently overridden; medium on when it re-connects.)*

`[DIR]` The cross-asset summary: this is a regime where the *fast* wires (supply shock, haven flow, carry) are doing the work and the *slow* wire (real-rate opportunity cost) has been temporarily disconnected by a structural buyer. A cross-asset analyst who insists the real-rate wire must reconnect *now* will be repeatedly wrong until the structural buyer pauses.

### §9 · Catalyst transmission — Iran war → dollar, gold, petrodollar flows

**Read.** `[DIR]` The 2026 Iran war is an **active** catalyst transmitting through three channels simultaneously; its markers are unusually legible.

**The catalyst.** Iran's closure of the Strait of Hormuz (announced "closed" 4 March 2026, after the 28 Feb air war) removed an estimated ~60% of regional oil exports (from ~25 mb/d to ~10 mb/d by mid-March), and Brent peaked at **$126** (Dubai crude touched **$166** on 19 March) ([Wikipedia: 2026 Strait of Hormuz crisis](https://en.wikipedia.org/wiki/2026_Strait_of_Hormuz_crisis)) `[HARD]`. The path since has been a fragile, repeatedly-broken sequence of ceasefires, blockades and re-closures (an 8 April ceasefire, an 13 April–29 May US blockade, renewed strikes reported 10 June) — i.e., the premium is *easing on talks but re-spiking on escalation*, which is exactly why the dollar climbed back above DXY 100 mid-June `[HARD]/[DIR]`.

**Three transmission channels.** `[DIR]`
1. **→ Dollar (safe-haven + potential funding squeeze).** Defensive flight bids the dollar (active); a funding squeeze that gaps the cross-currency basis is *latent* (not yet triggered — no swap-line draw, §7).
2. **→ Gold (haven + central-bank buying).** Both legs active: the acute haven bid (war premium) sits *on top of* the structural sovereign bid (§5, §10). This is why gold made records rather than merely rallying.
3. **→ Oil-exporter petrodollar flows.** High oil = windfall revenue for Gulf exporters and Norway/Canada/Mexico; the Gulf pegs recycle it into reserves (USD assets *and* gold), the floaters (NOK/CAD/MXN) see terms-of-trade support (§2, §5).

**Escalation vs. de-escalation markers (the watch-list).** `[DIR]`
- *Escalation markers:* renewed strikes / re-closure of the strait, a spike in tanker insurance/freight, **any** central-bank swap-line draw, a negative gap in cross-currency basis, fresh record gold, DXY pushing further above 100.
- *De-escalation markers:* a durable ceasefire and verified strait reopening, oil rolling back toward pre-war levels, COT spec longs in dollar/gold starting to *reduce*, the franc/yen haven bid fading, DXY slipping back under 100.

`[DIR]` The catalyst is the *accelerant*, not the *fuel*. The structural gold bid and the firm-dollar regime pre-date the war; the war is what tipped a firm regime into a record one. That distinction matters enormously for the scenario matrix: de-escalation removes the accelerant but **not** the structural fuel, so it unwinds the *premium* without necessarily reversing the *regime*. *(Confidence: high.)*

### §10 · Evidence — the free-source stack

| Source | What it gives this desk | Cadence | Cost |
|---|---|---|---|
| **FRED** (St. Louis Fed) | Broad/AFE dollar indices, major-FX spot, real & nominal yields, breakevens, LBMA gold benchmark | Daily | Free, attribution `[HARD]` |
| **BIS** | REER/NEER, cross-border banking, FX-swap & funding research | Monthly / periodic | Free, attribution `[HARD]` |
| **IMF COFER** | Currency composition of official reserves (the de-dollarization scoreboard) | Quarterly | Free, attribution `[HARD]` |
| **World Gold Council** | Central-bank gold demand (tonnes), Gold Demand Trends, CB survey | Quarterly / monthly | Free, attribution `[HARD]` |
| **CFTC COT** | Speculative futures positioning in FX, gold, silver | Weekly | Free, attribution `[HARD]` |
| **NY Fed** | Central-bank liquidity swap operations (the funding-freeze tell) | As-used | Free `[HARD]` |
| **ECB** | Reserve-asset composition analysis; gold-vs-Treasuries reserve research | Periodic | Free `[HARD]` |

`[DIR]` The free stack is *sufficient* for the directional regime call. The metrics it does **not** give cleanly in real time — cross-currency basis, FRA-OIS, EM daily spot — are flagged throughout and consolidated in Section 8 of the council notes.

---

## 3 · DATA VERDICT BOARD

| Tile | Best FREE series (exact ID) | Cadence | Current value | Feed-state | Note |
|---|---|---|---|---|---|
| Broad dollar (all partners) | FRED `DTWEXBGS` | Daily | **120.08** (2026-06-05) | **live** | Jan-2006=100; the desk's primary dollar gauge `[HARD]` |
| Broad dollar (advanced econ.) | FRED `DTWEXAFEGS` | Daily | **112.68** (2026-06-05) | **live** | AFE-only; the gap to DTWEXBGS = EM drag `[HARD]` |
| DXY (ICE index) | *ICE proprietary* | Live | **[99.81](claim:1)** (2026-06-12) | **no-free-feed (proprietary)** | Use DTWEXBGS as the free stand-in; DXY is 6-ccy, euro-heavy `[HARD]` |
| EUR/USD | FRED `DEXUSEU` | Daily | **1.1533** (2026-06-05) | **live** | Dollars per euro `[HARD]` |
| USD/JPY | FRED `DEXJPUS` | Daily | **[160.21](claim:12)** (2026-06-12, OTC) | **latest_published** (FRED feed intermittent; value via OTC interbank) | Funding currency; carry barometer `[HARD]` |
| USD/GBP | FRED `DEXUSUK` | Daily | (series live; current value not pulled this run) | **source_identified** | Dollars per pound `[HARD]` |
| USD/CHF | FRED `DEXSZUS` | Daily | **[0.80](claim:13)** (2026-06-12, OTC) | **latest_published** | Purest G10 haven `[HARD]` |
| Real 10y | FRED `DFII10` | Daily | **+2.16%** (2026-06-11) | **live** | Positive — the decoupling denominator `[HARD]` |
| 10y breakeven inflation | FRED `T10YIE` | Daily | **2.31%** (2026-06-12) | **live** | Inflation comp embedded in nominals `[HARD]` |
| Gold (London benchmark) | FRED `GOLDAMGBD228NLBM` | Daily | LBMA spot ~$4,365 (brief); futures **$[4,239.90](claim:4)** (2026-06-12) | **source_identified** (free ID confirmed; FRED feed flaky this run) | LBMA AM fix, USD/oz; confirmed free attribution ID `[HARD]` |
| Silver | (no canonical free FRED daily ID; LBMA silver) | Daily | **$[67.97](claim:8)** (2026-06-12) | **source_identified** | Industrial-contaminated monetary signal `[HARD]` |
| Cross-currency basis (3m EUR/JPY) | *no canonical free real-time series* | — | n/a (latent; no draw) | **no-free-feed** | Proxy via NY Fed swap usage / MacroMicro chart `[DIR]` |
| FRA-OIS spread | *no canonical free real-time series* | — | n/a (quiet) | **no-free-feed** | [MacroMicro chart](https://en.macromicro.me/charts/45928/us-fra-ois-spread) on lag `[DIR]` |
| CB swap-line usage | NY Fed swap operations page | As-used | no reported draw | **live** | The freeze tell `[HARD]` |
| CFTC COT (FX/gold spec) | CFTC `Commitments of Traders` | Weekly | (pull current weekly file) | **latest_published** | Crowding/reversal gauge `[HARD]` |
| IMF COFER (USD reserve share) | IMF COFER | Quarterly | **56.77%** (2025Q4) | **latest_published** | De-dollarization scoreboard `[HARD]` |
| WGC central-bank gold demand | WGC Gold Demand Trends | Quarterly/monthly | **~863t (2025)**; **+17t (Apr-2026)** | **latest_published** | Slowed but structurally elevated `[HARD]` |

---

## 4 · SCENARIO MATRIX

> Probabilities are this desk's subjective weights `[DIR]`. Historical analogue *ranges* are calibration anchors, not forecasts.

### (a) BASE CASE — Strong-dollar + record-gold haven regime *(≈40%)*
- **Triggers / state:** war premium persists but oscillates; energy-inflation fear keeps the dollar firm; central-bank gold bid intact.
- **Expected moves:** DTWEXBGS holds ~118–121 / DXY ~99–102; EUR/USD ~1.13–1.17; USD/JPY elevated ~158–163; EM-importer FX soft; **gold range-trades near records ($4,200–4,600)**.
- **Analogue:** a milder, more *persistent* cousin of the 1990 Gulf War risk-bid (dollar firm, gold bid) extended by structural CB demand.
- **Lead indicators:** stable-to-firm DTWEXBGS, no swap-line draw, COT longs stretched but not capitulating.
- **Falsifier:** a durable verified ceasefire **and** a clear central-bank-buying pause together — that would void the base case toward (b).

### (b) DE-ESCALATION / HAVEN UNWIND — risk-on *(≈25%, the key upside-for-risk scenario)*
- **Triggers:** durable ceasefire, strait reopens, oil rolls back, tail-risk priced out.
- **Expected moves:** DTWEXBGS gives back several points / DXY back under ~98–99; EUR/USD up toward ~1.18–1.21; USD/JPY *lower* as carry de-risks (yen rallies); EM-importer FX recovers; **gold gives back the war premium (toward ~$3,800–4,100) but holds the structural floor** because CB buying persists.
- **Analogue:** the *reversal* leg after a war scare resolves — the 1990–91 "Gulf War blip" reversed once Iraq's outcome clarified; the dollar's safe-haven bid faded fast.
- **Lead indicators:** falling oil, COT longs reducing, franc/yen haven bid fading.
- **Falsifier:** gold *fails* to give back any premium on a real ceasefire → implies the move was always structural, not haven (re-weights toward (f)).

### (c) LEFT-TAIL — Dollar-funding freeze + gold blow-off *(≈10%)*
- **Triggers:** the war shock metastasizes into a *credit/funding* event; non-US banks scramble for dollars.
- **Expected moves:** DTWEXBGS spikes hard / DXY +5–8% in days; cross-currency basis gaps deeply negative; **gold blow-off then violent two-way** (in an acute dash-for-cash gold can *first sell off* as it is the liquid asset sold to raise dollars, then spike).
- **Analogue:** **March-2020 dash-for-dollars** — basis to ≈ **−140 bp JPY / −79 bp EUR**, gold dropped ~$130 intraday before resuming higher; corrected within weeks by Fed swap lines ([Banco de España](https://www.bde.es/f/webbde/SES/Secciones/Publicaciones/PublicacionesSeriadas/DocumentosOcasionales/20/Files/do2025e.pdf); [ECB](https://www.ecb.europa.eu/press/economic-bulletin/focus/2020/html/ecb.ebbox202005_01~4a2c044d31.en.html)). Also **2008** funding crisis.
- **Lead indicators:** **any** swap-line draw, FRA-OIS widening, basis gapping.
- **Falsifier:** swap lines deploy and basis normalizes within weeks (the 2020 template) → reverts toward base case.

### (d) FURTHER ESCALATION / HORMUZ RE-CLOSURE *(≈12%)*
- **Triggers:** renewed strikes, durable re-closure, regional spread.
- **Expected moves:** DTWEXBGS higher / DXY 102–105+; oil-exporter FX (NOK/CAD/MXN, Gulf reserves) windfall; EM importers (INR/TRY/ZAR) under acute pressure; **gold to fresh records (toward $4,600–5,000+)**.
- **Analogue:** an *intensified* 1990-Gulf risk-bid layered on the structural gold regime; oil-shock terms-of-trade split sharpens.
- **Lead indicators:** tanker insurance/freight spikes, Brent re-spiking, swap-line stress building.
- **Falsifier:** strait verifiably reopens → collapses toward (b).

### (e) FED-CUT ACCOMMODATION *(≈8%)*
- **Triggers:** Fed cuts to cushion the energy-driven growth hit despite sticky inflation.
- **Expected moves:** dollar *softer* on narrowing differentials (DTWEXBGS down, DXY toward ~96–98); EUR/USD higher; USD/JPY lower; **gold higher still** — a Fed easing into elevated inflation is a debasement signal that *adds* to the gold bid.
- **Analogue:** the **Aug-2020** episode — gold at then-record ~$1,970–2,067 with deeply negative real yields and maximal accommodation ([gold-eagle](https://www.gold-eagle.com/article/abcs-gold-prices)).
- **Lead indicators:** dovish Fed communication, real yields falling while breakevens hold/rise.
- **Falsifier:** Fed holds/hikes on inflation → dollar stays firm, removes this path.

### (f) DE-DOLLARIZATION ACCELERATION *(≈5%, slow-burn structural)*
- **Triggers:** a discrete confidence shock (sanctions precedent, fiscal scare, reserve-freezing fear) accelerates the *active* (FX-adjusted) reallocation out of dollars.
- **Expected moves:** DTWEXBGS structurally lower over quarters; **gold structurally re-rated higher** as the prime beneficiary; COFER USD share falls on a *constant-FX* basis (the part that isn't valuation).
- **Analogue:** no clean single-day analogue — this is the multi-year trend that took the USD reserve share from ~72% (2000) toward ~56–58% (2025) ([London Gold Exchange](https://londongoldexchange.co.uk/blog/central-banks-buying-gold-2026); [IMF COFER](https://data.imf.org/en/news/imf%20data%20brief%20march%2027)).
- **Lead indicators:** COFER USD share falling *at constant FX*, accelerating CB gold tonnage, rising local-currency trade settlement.
- **Falsifier:** COFER constant-FX USD share *stabilizes* (as it largely did through 2025) → de-dollarization stays "diversification," not "exit."

---

## 5 · WINNERS / LOSERS

| Group | Direction | Mechanism |
|---|---|---|
| **USD** | **Winner (cyclical)** | Right-side-of-smile liquidity/safety bid; deepest safe-asset market; US energy self-sufficiency cushions the oil shock. DTWEXBGS 120.08 ([FRED](https://fred.stlouisfed.org/series/DTWEXBGS)). `[DIR]` |
| **CHF** | **Winner** | Purest haven; capital-account safety bid. USD/CHF [0.80](claim:13) = expensive franc. `[DIR]` |
| **JPY** | **Conditional** | *Loser in calm* (cheap funding currency, USD/JPY [160.21](claim:12)), *violent winner on carry unwind* (Aug-2024 template, [BIS](https://www.bis.org/publ/bisbull90.pdf)). `[DIR]` |
| **Gold** | **Winner (structural + cyclical)** | Acute war-haven bid stacked on price-insensitive central-bank/EM demand; debasement/fiscal-dominance hedge; counterparty-risk-free. $[4,239.90](claim:4). `[DIR]` |
| **Oil-exporter pegs (SAR/AED)** | **Winner (via reserves)** | Petrodollar windfall recycled into reserves (USD assets + gold); peg suppresses spot appreciation. `[DIR]` |
| **NOK / CAD / MXN** | **Winner (terms of trade), crosscut by risk** | Energy/commodity windfall lifts terms of trade; but global risk-off and the dollar's pull partly offset. `[DIR]` |
| **INR / TRY / ZAR (EM importers)** | **Loser** | Pay the oil bill *and* the strong-dollar bill at once; widening DTWEXBGS-vs-AFE gap is their footprint. `[DIR]` |
| **Silver** | **Winner (high-beta), contaminated signal** | Runs hardest late in a metals move (+[6.21](claim:9)% on day vs gold +[3.06](claim:5)%); but industrial demand pollutes its monetary read. G/S ratio ~[62.4](claim:11). `[DIR]` |

---

## 6 · LAYMAN ANCHOR BANK

> Numbers paired with plain-English meaning, so a non-specialist can locate "where we are."

**Broad dollar (DTWEXBGS, Jan-2006=100):**
- ~100 = the dollar is roughly where it was in 2006. ~110 = clearly strong. **~120 (now)** = the dollar is *near the firm end of its modern range* — strong, but not a once-a-generation extreme. `[HARD]`

**DXY (ICE index):**
- 90 = soft dollar. **~99.8–100.4 (now)** = the psychologically watched 100 line; above 100 = the market is paying up for safety. 114.78 = the Sept-2022 Fed-hiking peak. 164.72 = the Feb-1985 all-time high before the Plaza Accord coordinated the dollar *down* ([EvvyTools](https://evvytools.com/trackers/dxy-dollar-index/)). `[HARD]`

**Gold (USD/oz):**
- $1,825 = the 2011 peak. $1,970–2,067 = the Aug-2020 pandemic peak. ~$2,650 = end-2024 vicinity. **~$4,240–4,365 (now)** = roughly *double* the 2020 record — a genuine re-rating, not a wiggle ([gold-eagle](https://www.gold-eagle.com/article/abcs-gold-prices)). `[HARD]`

**Cross-currency basis (basis points):**
- 0 bp = calm, dollars freely available abroad. −25 bp = mild stress. **−79 bp (EUR) / −140 bp (JPY)** = the March-2020 panic ([Banco de España](https://www.bde.es/f/webbde/SES/Secciones/Publicaciones/PublicacionesSeriadas/DocumentosOcasionales/20/Files/do2025e.pdf)). The *more negative*, the more desperate the global scramble for dollars. `[HARD]`

**FRA-OIS spread (basis points):**
- <10 bp = normal. 25–50 bp = funding-stress watch. >50 bp = banks are nervous about lending to each other. It is the "bank-funding fever thermometer." `[DIR]`

**COFER USD reserve share (%):**
- ~72% (2000) → **56.77% (2025Q4)** ([IMF COFER](https://data.imf.org/en/news/imf%20data%20brief%20march%2027)). Falling, but from a position of *dominance*, and mostly via valuation. ~56% is roughly where it was in the mid-1990s — "lower than the peak" is not "dethroned." `[HARD]`

**REER deviation (%):**
- 0% = currency at its long-run fair value. +10–15% (the dollar now) = *rich* — a long-run headwind, useless for timing. `[DIR]`

---

## 7 · LAYMAN KIT — concept chapters *(this desk's strongest edge)*

### Chapter 1 — The Dollar Smile
**Analogy.** Picture a smiling mouth. The dollar is *high* at both corners — far left ("America is winning, everyone wants to invest here") and far right ("the world is on fire, give me the safest cash there is") — and *low* in the dull middle ("everyone's fine, money goes hunting for better returns abroad"). 
**Worked example.** In 2022 the dollar was high on the **left** corner: the Fed was hiking hard, US assets paid more, money flowed *in*. Today (2026) the dollar is high on the **right** corner: a war scare has people fleeing *to* dollars for safety. Same strong dollar, opposite reasons — and opposite durability. Left-corner strength is sticky; right-corner strength snaps back the moment the fire is out. 
**Top-3 misconceptions.** (1) *"A strong dollar means a strong US economy."* No — right-corner strength often coincides with global fear and even US weakness. (2) *"The dollar can't be a haven if US finances are bad."* It can — in a panic, people want the biggest, most liquid exit, not the cleanest balance sheet. (3) *"DXY is the dollar."* DXY is a six-currency, euro-dominated 1970s relic; the broad trade-weighted index is the real picture.

### Chapter 2 — Real vs. Nominal Rates and FX
**Analogy.** Nominal yield is the *sticker price* of money; real yield is the price *after inflation eats its share*. A 5% bond when inflation is 5% pays you nothing real — like a raise that exactly matches your rising rent. 
**Worked example.** US real 10y is **+2.16%** (`DFII10`) with breakeven inflation **2.31%** (`T10YIE`) ([FRED](https://fred.stlouisfed.org/series/DFII10)) — so the 10y nominal is roughly 2.16 + 2.31 ≈ 4.5%. Currencies are drawn to *high real* yields, because that is genuine reward, not inflation make-up pay. A positive, high US real yield is a magnet *for* the dollar and a *weight on* gold (which pays no yield at all). 
**Top-3 misconceptions.** (1) *"High interest rates always strengthen a currency."* Only the *real, after-inflation* part reliably does. (2) *"Gold loves high rates because it's an inflation hedge."* Gold usually *hates* high *real* rates (the opportunity cost rises) — except, as now, when other forces override (Ch. 5). (3) *"Inflation up = currency up."* Usually the reverse, unless the central bank out-hikes the inflation.

### Chapter 3 — The Carry Trade
**Analogy.** Borrow where money is cheap, park it where it pays more, pocket the difference — like taking a 1% loan to fund a 5% savings account. Lovely, until the exchange rate between the two moves against you faster than you can earn the spread. 
**Worked example.** Borrow yen (near-zero cost), buy higher-yielding assets — the trade behind USD/JPY at **[160.21](claim:12)**. It pays a little every day for months. Then a shock hits, everyone unwinds at once, they all must *buy back yen* simultaneously, and the yen rockets — wiping out months of carry in days. That is August 2024 in one sentence ([BIS Bulletin 90](https://www.bis.org/publ/bisbull90.pdf)). 
**Top-3 misconceptions.** (1) *"Carry is free money."* It is selling earthquake insurance — steady premiums, rare devastating payouts. (2) *"A cheap yen is a weak Japan."* The cheap yen is partly *caused by* the carry trade itself. (3) *"The unwind is gradual."* It is the opposite — carry "goes up the stairs and down the elevator shaft."

### Chapter 4 — Cross-Currency Basis & Dollar Funding
**Analogy.** In a global panic, dollars are the bottled water and the rest of the world is a city that just lost its taps. The *cross-currency basis* is the markup you pay for a bottle over the "official" price. The *FRA-OIS spread* is the fever thermometer for whether banks trust each other enough to lend at all. 
**Worked example.** In March 2020 the basis blew out to **−140 bp vs. the yen and −79 bp vs. the euro** — foreigners paying a steep penalty just to get dollars ([Banco de España](https://www.bde.es/f/webbde/SES/Secciones/Publicaciones/PublicacionesSeriadas/DocumentosOcasionales/20/Files/do2025e.pdf)). The fix was not a market fix: the Fed re-opened *swap lines* (it lends dollars to other central banks, who lend to their banks), and within weeks the basis snapped back to near zero ([ECB](https://www.ecb.europa.eu/press/economic-bulletin/focus/2020/html/ecb.ebbox202005_01~4a2c044d31.en.html); [Dallas Fed](https://www.dallasfed.org/research/economics/2024/0521)). 
**Top-3 misconceptions.** (1) *"If everyone wants dollars, US banks must be in trouble."* Often the opposite — the scramble is *foreign* banks needing dollars they don't print. (2) *"Covered interest parity always holds."* It breaks precisely when you need it (crises). (3) *"Swap lines are a bailout of foreigners."* They protect *Americans* too, by stopping a foreign dollar-shortage from cratering US asset prices and over-tightening the dollar.

### Chapter 5 — Why Gold Rises, and the Broken Real-Rate Link
**Analogy.** For two decades gold behaved like a seesaw with real interest rates — when real yields went up, gold went down, because a bar of gold pays no interest and now you're "missing out" on more. **In 2024–2026 someone heavy sat on gold's end of the seesaw and refused to get off** — even as real rates rose. That someone is the world's central banks. 
**Worked example.** Real 10y is **+2.16%** (`DFII10`) — historically a big weight on gold — yet gold is at **$[4,239.90](claim:4)**, roughly double its 2020 record ([FRED](https://fred.stlouisfed.org/series/DFII10); [gold-eagle](https://www.gold-eagle.com/article/abcs-gold-prices)). State Street documents gold rising ~28% in *real* terms even as yields rose 734 bps ([SSGA](https://www.ssga.com/library-content/assets/pdf/apac/gold/2025/en/us-real-rates-still-matter-for-gold.pdf)). The reason: the new marginal buyer (EM central banks, Chinese retail) is *price- and rate-insensitive* — they buy for insurance, not for yield comparison. 
**Top-3 misconceptions.** (1) *"Gold and real rates have permanently divorced."* More accurate: real rates no longer *cap* gold while a bigger buyer dominates — they would re-link if that buyer paused ([SSGA](https://www.ssga.com/library-content/assets/pdf/apac/gold/2025/en/us-real-rates-still-matter-for-gold.pdf)). (2) *"Gold is rising on retail/inflation panic."* The structural driver is *sovereign* balance-sheet demand, not retail. (3) *"Gold always rises in a crisis."* In an acute *cash* scramble gold can sell off first (March 2020) as the liquid asset dumped to raise dollars, *then* recover.

### Chapter 6 — Central-Bank Gold Buying & De-Dollarization
**Analogy.** Imagine your wealth is mostly held as IOUs from one powerful neighbor — convenient, until you watch that neighbor freeze *another* neighbor's IOUs over a dispute. You'd quietly start keeping some wealth as gold bars in your own basement: nobody else's promise, nobody else's to freeze. 
**Worked example.** After Russia's reserves were frozen in 2022, central banks bought **>1,000 tonnes of gold three years running** (1,086t in 2024), easing to **~863t in 2025** as prices bit, with **+17t in April 2026** and Poland the top 2025 buyer (~100t) ([Kitco / WGC](https://www.kitco.com/news/article/2026-06-03/central-banks-buy-net-17-tonnes-gold-april-led-poland-and-china-wgc); [Metal.com / WGC](https://news.metal.com/newscontent/103936451-Major-Shift-in-the-Financial-System-Gold-Overtakes-US-Treasury-Bonds-in-Global-Reserves)). By end-2025 gold had **overtaken US Treasuries as the world's #1 reserve asset by value** — ~27% of total reserves vs. Treasuries' ~22%, though that jump was *mostly the price rally*, not new buying ([Morningstar / ECB](https://www.morningstar.com/news/marketwatch/2026060232/how-gold-overtook-us-treasurys-as-number-one-reserve-asset)). 
**Top-3 misconceptions.** (1) *"Central banks dumping dollars for gold."* No — they are *adding* gold while largely *holding* dollars; COFER's constant-FX USD share barely moved in 2025 ([IMF COFER](https://data.imf.org/en/news/imf%20data%20brief%20march%2027)). (2) *"Gold overtaking Treasuries means the dollar is finished."* It mostly reflects gold's *price*, not a reserve exodus. (3) *"This is a fad."* WGC's survey has 95% of central banks expecting to *add* gold over the next year — it is policy, not a fad ([Kitco/WGC](https://www.kitco.com/news/article/2026-06-03/central-banks-buy-net-17-tonnes-gold-april-led-poland-and-china-wgc)).

### Chapter 7 — Reserve-Currency Status ("Exorbitant Privilege")
**Analogy.** Being the world's reserve currency is like being the language everyone learns as a second language. Even as rivals grow, the *network* keeps everyone speaking yours — switching is costly and coordination is hard. The US gets to "borrow in its own language" cheaply because everyone needs to hold it. 
**Worked example.** The USD reserve share fell from ~72% (2000) to **56.77% (2025Q4)** ([IMF COFER](https://data.imf.org/en/news/imf%20data%20brief%20march%2027)) — but the euro (20.25%) is regional, the renminbi is tiny (1.95%) and not freely convertible, and most of the dollar's *recent* slide was the dollar simply being *worth less* against other reserve currencies, not central banks selling ([Yahoo/IMF analysis](https://finance.yahoo.com/news/imf-q2-2025-cofer-data-193648028.html)). 
**Top-3 misconceptions.** (1) *"A falling reserve share = imminent collapse."* It is a slow erosion from dominance; ~56% is mid-1990s territory. (2) *"Another currency is about to take over."* No challenger combines the dollar's liquidity, rule of law, and open capital account. (3) *"Gold is becoming a reserve *currency*."* Gold is a reserve *asset* — it doesn't settle trade or pay interest; it complements the dollar's role, it doesn't replace its plumbing.

---

## 8 · COUNCIL & HONEST GAPS

### The three live disagreements (presented as camps, not resolved)

**Disagreement 1 — Is de-dollarization real or hype?**
- **Camp "Real, slow-burn":** the USD reserve share has fallen from ~72% (2000) to **56.77%** (2025Q4); central banks are structurally accumulating gold as a sanctions/fiscal hedge; foreign ownership of Treasuries has slid to ~30% from >50% at the GFC ([J.P. Morgan](https://www.jpmorgan.com/insights/global-research/currencies/de-dollarization); [IMF COFER](https://data.imf.org/en/news/imf%20data%20brief%20march%2027)). `[DIR]`
- **Camp "Mostly hype / mostly valuation":** ~92% of the 2025 reserve-share *decline* was exchange-rate valuation, not active selling; at constant FX the USD share barely moved (~57.7%); no rival currency can absorb reserve flows ([Yahoo/IMF analysis](https://finance.yahoo.com/news/imf-q2-2025-cofer-data-193648028.html); [Morgan Stanley](https://graystone.morganstanley.com/graystone-consulting-charleston-wv/documents/field/g/gr/graystone-consulting---charleston--wv/Global_Insights__De-Dollarization__Myth_or_Reality_.pdf)). `[DIR]`
- **This desk's read:** *Both are right on different metrics.* De-dollarization is **real at the margin and in gold accumulation**, but **not** an active dollar exodus — the honest synthesis is "diversification, not divorce." The falsifier that would move us: a sustained fall in the **constant-FX** USD share. *(Confidence: high in this synthesis.)*

**Disagreement 2 — Has gold permanently decoupled from real yields?**
- **Camp "Structural break":** a price-insensitive central-bank/EM "base-load" buyer has neutralized the real-rate relationship; the new driver is fiscal instability and debasement, not opportunity cost ([International Finance Magazine](https://internationalfinance.com/magazine/banking-and-finance-magazine/building-the-global-gold-wall/); [FinancialContent](https://markets.financialcontent.com/stocks/article/marketminute-2026-3-12-the-new-golden-floor-how-central-bank-base-load-demand-is-re-rating-gold-to-6000)). `[DIR]`
- **Camp "Suppressed, not severed":** real rates *still matter* — they merely no longer *cap* the rally while a bigger buyer dominates; the relationship would reassert if that buyer paused ([SSGA](https://www.ssga.com/library-content/assets/pdf/apac/gold/2025/en/us-real-rates-still-matter-for-gold.pdf)). `[DIR]`
- **This desk's read:** the decoupling is **observed and real *for now*** but is **conditional on the central-bank bid, not a new law of physics.** We do not say "permanent." The re-link trigger is a sustained CB-buying pause with real yields still high. *(Confidence: high that it's conditional; medium on timing of any re-link.)*

**Disagreement 3 — Is the dollar's haven status eroding?**
- **Camp "Eroding":** weaponization of the dollar, ballooning US debt, and the gold-over-Treasuries reserve shift signal a slow loss of trust ([Metal.com/ECB](https://news.metal.com/newscontent/103936451-Major-Shift-in-the-Financial-System-Gold-Overtakes-US-Treasury-Bonds-in-Global-Reserves)). `[DIR]`
- **Camp "Intact":** the dollar *still* rallied on the 2026 war scare and climbed back above DXY 100 — the haven reflex fired exactly as the textbook predicts; no rival offers the liquidity. `[DIR]`
- **This desk's read:** the dollar's **acute, crisis-week haven status is intact** (it bid in 2026 as in 1990 and 2020); what is eroding is its **structural, multi-decade monopoly** as the *store* of reserve value — a role gold is now sharing. Two different time horizons; do not conflate them. *(Confidence: high.)*

### The no-free-feed list (every flagged metric, consolidated)
1. **DXY (ICE index)** — proprietary; free stand-in is FRED `DTWEXBGS`/`DTWEXAFEGS`. `[HARD]`
2. **Cross-currency basis (3m EUR/JPY etc.)** — no canonical free real-time series; proxy via NY Fed swap-line usage + lagged chart services. `[DIR]`
3. **FRA-OIS spread** — no canonical free real-time series; [MacroMicro](https://en.macromicro.me/charts/45928/us-fra-ois-spread) shows it on lag. `[DIR]`
4. **EM daily spot (INR/TRY/ZAR)** — FRED carries some on lag (`source_identified`), not clean intraday-free. `[HARD]`
5. **LBMA gold/silver intraday** — `GOLDAMGBD228NLBM` is the confirmed free *daily benchmark* ID, but FRED's CSV feed was intermittent this run (`source_identified`); intraday spot is vendor-gated.
6. **CFTC COT exact current net positions** — free but weekly/lagged (`latest_published`); the framework is usable now, the precise current net requires pulling the latest weekly file.

### Honest gaps in this report
- I did not pull the **current weekly COT net-position values** — I have the framework and the right contrarian read, but not this week's exact spec longs. A follow-up should pull the latest CFTC file to confirm whether dollar/gold longs are *stretched* (which the factor analysis in §6 strongly implies).
- **Cross-currency basis and FRA-OIS are currently asserted as "quiet/no-draw" from the absence of swap-line usage**, not from a direct basis print — appropriate given no free real-time feed, but it is an inference, not a measurement.
- The **Hormuz timeline is more volatile on the ground** (renewed strikes reported around 10 June) than the "easing premium" framing suggests; this report honors the desk's stated mid-June live context (firm dollar, fragile ceasefire) while flagging that escalation markers were flashing into the print date.

---

*Prepared as one independent contribution to the Model Council. Numbers carrying claim links are live finance-tool prints (dollar index, gold, silver, USD/JPY, USD/CHF); all other figures cite free attribution-only public sources (FRED, BIS, IMF COFER, World Gold Council, CFTC, NY Fed, ECB) inline. Fact and interpretation are tagged `[HARD]` / `[DIR]` throughout; disagreements are presented as a council, not resolved by fiat.*
