# R-09 · RATES DESK — MODEL COUNCIL SYNTHESIS v2
**File:** `_research/RETURNS/R-09-rates-desk.md`
**Desk:** Rates (US interest rates & government bonds — the risk-free curve)
**As-of:** Mid-June 2026 · **Council:** Claude Opus 4.8, Gemini 3.1 Pro, GPT-5.5
**Live environment (treated as given):** Strait of Hormuz closed since 4 Mar 2026; OPEC output −30%+; fragile US–Iran ceasefire just pulled Brent ~$101→$87; 10y 4.49% / 2y 4.09% / 3m 3.71%; curve dis-inverted (10y−3m +77bp, 10y−2y +40bp); Fed hawkish, no 2026 cuts priced, hike odds rising; dollar firm (~100); gold record (~$4,365).

This document merges three independent deep-dive dossiers into a single research-grade synthesis. It is deliberately longer than any individual contribution, because the user asked for the *best of all three* organized into one canonical reference. The synthesis preserves council-style disagreement where it exists, and consolidates the consensus into the cleanest possible build-ready spine.

**Tagging convention.** Every numerical claim is marked `[HARD]` (number+date+source) or `[DIR]` (directional / qualitative / structural), with confidence (H/M/L). Sources are inline. Free attribution-only sources (FRED, Federal Reserve H.15/SEP, NY Fed, BIS, TreasuryDirect/Fiscal Data) are preferred. Every metric without a free real-time feed is flagged.

---

## A · COUNCIL COMPARISON TABLES

### A.1 · Where Models Agree

| Finding | Opus 4.8 | Gemini 3.1 Pro | GPT-5.5 | Evidence |
|---|---|---|---|---|
| Regime is upward-sloping / dis-inverted, restrictive, positive-term-premium; oil-driven inflation pinning the front end, long end contested | ✓ | ✓ | ✓ | DGS10 ~4.45–4.49%, DFII10 +2.16%, T10Y2Y ~+39–40bp, T10Y3M ~+70–77bp ([FRED DGS10](https://fred.stlouisfed.org/series/DGS10), [FRED DFII10](https://fred.stlouisfed.org/series/DFII10), [FRED T10Y2Y](https://fred.stlouisfed.org/series/T10Y2Y)) |
| Catalyst is two-sided: oil→CPI→Fed→front end (active, dominant) vs safe-haven/growth-fear→long end (intermittent) | ✓ | ✓ | ✓ | Brent path $101→$87 on ceasefire; May CPI +4.2% y/y, gasoline +40.5% y/y ([BLS CPI Summary](https://www.bls.gov/news.release/cpi.nr0.htm)) |
| ACM and Kim-Wright both show 10y term premium positive (~0.67–0.83%) — model levels differ but direction is robust | ✓ | ✓ | ✓ | ACM 0.67% (2026-05-29), KW/THREEFYTP10 0.80% (2026-06-05) ([NY Fed ACM](https://www.newyorkfed.org/medialibrary/media/research/data_indicators/acmPlot_data.csv), [FRED THREEFYTP10](https://fred.stlouisfed.org/series/THREEFYTP10)) |
| The MOVE index has NO free real-time feed — ICE-licensed/paywalled, only delayed/EOD via aggregators | ✓ | ✓ | ✓ | Confirmed across all three (ICE/BofA proprietary; TradingView/Investing.com/Convex delayed only) |
| RRP buffer is drained (~$0.45bn from >$2.5tn 2023 peak); reserves $3.08tn are now the marginal QT cushion | ✓ | ✓ | ✓ | [FRED RRPONTSYD](https://fred.stlouisfed.org/series/RRPONTSYD), [FRED WRESBAL](https://fred.stlouisfed.org/series/WRESBAL) |
| TIPS likely outperform nominals under a realized oil-CPI shock; front-end carry beats duration in this regime | ✓ | ✓ | ✓ | Breakeven 2.31% vs realized energy CPI +23.5% y/y, gasoline +40.5% y/y |
| Left-tail scenario is sticky-inflation + fiscal supply glut → bear-steepener / term-premium spike (2023 tantrum analogue) | ✓ | ✓ | ✓ | 2023 Tantrum: 10y +101bp, 30y +109bp Jul→Oct ([Fed Tantrum note](https://www.federalreserve.gov/econres/notes/feds-notes/the-treasury-tantrum-of-2023-20240903.html)) |
| MBS negative convexity is a regime amplifier (hedging flows feed back into rates) | ✓ | ✓ | ✓ | ~$2tn near-par 5%+ coupons; Goldman ~$40bn-equivalent May episode |
| Dis-inversion is NOT automatically "all-clear" — quality of steepening (bull vs bear) matters more than the sign | ✓ | ✓ | ✓ | Current episode is bear-steepening, not classic pre-recession bull-steepening |
| Inflation expectations elevated but not unanchored (T10YIE ~2.31%, T5YIFR ~2.23%) — gives Fed room to NOT hike | ✓ | ✓ | ✓ | [FRED T10YIE](https://fred.stlouisfed.org/series/T10YIE), [FRED T5YIFR](https://fred.stlouisfed.org/series/T5YIFR) |

### A.2 · Where Models Disagree

| Topic | Opus 4.8 | Gemini 3.1 Pro | GPT-5.5 | Why They Differ |
|---|---|---|---|---|
| **Term premium direction interpretation** | Regime change since Aug 2024 — durably positive, structural QT/deficit/r-star drivers | Term premium rebounded — describes shift more cautiously, gives a lower ACMTP10 ~0.06% figure | Model-uncertainty stance — ACM 0.67% vs KW 0.80%, neither is executable; focus on whether 0.7–0.8% is "enough" duration compensation | Opus leans regime-change narrative; Gemini cited a different data point (~0.06% appears to be a stale reading; Opus/GPT both confirm ~0.67–0.83%); GPT is most agnostic on the level |
| **Curve shape characterization** | Bear-steepener (long-led repricing) is the *active* quadrant and key tell | Calls dis-inversion a "bull steepener" shape; treats it as recession harbinger | Currently bear-steepened vs 2022–24 inverted era; next impulse two-sided | Gemini's "bull steepener" framing conflicts with Opus/GPT, who note the front end has NOT collapsed (no Fed cuts), so it can't be a bull steepener — this is a real analytical disagreement |
| **Will the Fed hike on oil-inflation?** | Three-camp council; ~37% Oct hike odds priced; will hike only if T5YIFR breaks >2.5% | Implies Fed remains paralyzed in "grinding stagflation" base case | Asymmetric reaction function — likely look-through unless expectations/wage data move | All three frame uncertainty similarly; Opus/Gemini land slightly more on "hold" while GPT emphasizes the data-dependent threshold |
| **Severity of left-tail bear-steepener** | 10y → 4.9–5.3%+; 2s10s +80bp+ | 10y breaches 5.50% in their sticky-inflation tail | 10y +100–175bp (i.e., toward 5.4–6.2%); 30y +125–200bp | Gemini's 5.50% is comparable to Opus' 5.3%; GPT's range is widest, anchored to 2013 taper (+132bp) and 2023 (+101bp) historical analogues |
| **Depth of treatment of auction microstructure** | Qualitative narrative of weak Mar–Apr auctions; flags no-clean-free-time-series gap | Treats Treasury supply heavy but light on auction-level details | Pulls specific 6/10 10y reopening (2.57 b/c, $39bn) and 6/11 30y reopening (2.33 b/c, $22bn) from Fiscal Data API | GPT did the actual Fiscal Data API call; Opus reconstructed from Newsquawk/Reuters; Gemini stayed at narrative level |
| **Treatment of duration/convexity math** | Qualitative duration discussion | Seesaw analogy, light on math | Full worked examples: 2y −1.88%, 10y −7.62%, 30y −13.77% on +100bp; 30y +17.32% on −100bp; carry+roll estimates | GPT produced explicit DV01/convexity numerics with saved JSON; Opus/Gemini stay at level of intuition |
| **5y belly characterization** | Convexity-sensitive zone; cites May 4.35% high & 33k-block convexity hedging | Belly hypersensitive to shifting rate-cut odds | "Collision zone between Fed path and term premium"; 5y 4.18%, duration 4.47 | Opus emphasizes convexity hedging anecdote; GPT gives the cleanest math; Gemini stays general |
| **Decoupled gold / real-yields relationship** | Strong emphasis — gold at record $4,365 *despite* 2%+ real yields signals geopolitical/de-dollarization premium | Mentions briefly | Acknowledges two-sided; calls gold a no-free-feed | Opus uniquely flags this as a regime-signal in its own right |
| **Negative swap spreads detail** | Quantifies: 5y ~−29bp, 30y ~−78bp; cites Pensford/BIS WP705 with mechanism (SLR, dealer balance sheets, pension receive-fixed) | Mentions in NO-FREE-FEED list only | Treats as structural post-crisis feature; flags discontinued FRED swap series as the data gap | Opus has the deepest swap-spreads treatment; GPT has the cleanest data-availability honesty; Gemini light here |

### A.3 · Unique Discoveries

| Model | Unique Finding | Why It Matters |
|---|---|---|
| Claude Opus 4.8 | The ACM–KW convergence within 3bp on the most recent print (8 May 2026) — historically they differ by ~26bp on average, with ~0.86 correlation over 9,074 daily obs since 1990. When the two models agree, term-premium signal is robust to model choice; when they diverge, gap is usually a surveys-vs-yields-only story | A discriminating piece of methodological intelligence — tells the desk *when* to trust the term-premium signal at face value vs treat it as noisy |
| Claude Opus 4.8 | "MBS-convexity Beast has awakened" — ~$2tn of near-par 5%+ coupons (~4x level of three years ago); Goldman ~$40bn-equivalent May selling; Barclays' Nashikkar saying it's "more destabilizing than 2023." QT linkage: as Fed ran off MBS, negative convexity shifted from Fed balance sheet back to private market | The single most important amplification mechanism in the current regime; explains why the May selloff was so violent |
| Claude Opus 4.8 | Gold-real-yield decoupling itself is a *signal* — gold at $4,365 with DFII10 +2.16% says markets are pricing geopolitical/fiat-trust risk above the ordinary opportunity-cost calculus | Cross-asset diagnostic that goes beyond the conventional rates-gold mechanic |
| Claude Opus 4.8 | Specific April 30y auction details — 2.39x cover, +0.5bp tail, dealers 11.6%; but April 20y came strong at 2.71x with 72% indirect (foreign) bid — demand is bifurcated, not uniformly failing | Granular auction-microstructure read that the desk would otherwise miss |
| Claude Opus 4.8 | The Fed formally ended QT on **1 Dec 2025** and shifted to "reserve management" in Jan 2026; market now watches for first Reserve Management Purchases (RMPs) — technical, not QE | Critical regime-shift fact for plumbing analysis |
| Claude Opus 4.8 | Negative swap spreads quantified across the curve (5y ~−29bp, 30y ~−78bp); mechanism via SLR/eSLR + pension/insurance pay-fixed demand; eSLR relief 2025 narrowed but didn't eliminate negativity | Concrete "balance-sheet rental fee" gauge with mechanism |
| Gemini 3.1 Pro | The cleanest articulation of the "Great Disagreement: Classic Recessionists vs Supply/Term Premium Realists" — frames the disinversion debate as two coherent camps with explicit trade implications | Crystallizes the most important live debate into a usable mental model |
| Gemini 3.1 Pro | The cleanest layperson scenario framing — "Sticky-Inflation Bear-Steepener" / "De-escalation Bull-Steepener" / "Grinding Stagflation Flattening" — communication-ready labels | Pedagogically clean labels useful for the plain-language page |
| GPT-5.5 | Hard auction-microstructure numbers pulled directly from Fiscal Data API: **6/10 10y reopening: $39.0bn accepted, $100.0bn tendered, 2.57 b/c, 4.538% high yield, $30.44bn indirect**; **6/11 30y reopening: $22.0bn accepted, 2.33 b/c, 5.020% high yield, $13.16bn indirect** | The only model that fetched live, machine-readable auction microstructure — the most current, hardest data point in any of the three reports |
| GPT-5.5 | Full duration/convexity worked examples with saved JSON: 2y duration ~1.88, 5y ~4.47, 10y ~8.00, 30y ~15.54; 30y convexity ~355; +100bp shocks: −1.88%/−4.35%/−7.62%/−13.77%; carry+roll: 4.20%/4.34%/4.85%/5.33% | Quantitative spine the other two models lack; essential for the layman kit and winners/losers analysis |
| GPT-5.5 | Fed FEDS-note parameter for oil-CPI transmission: a permanent **10% oil price increase → energy CPI +1.5% on impact, +2.3% after two quarters; food CPI +0.3% over eight quarters; core CPI +0.1% over eight quarters** | The only model giving the desk a usable elasticity for sizing the oil→CPI chain |
| GPT-5.5 | EIA data point: Strait of Hormuz carries ~**20 million b/d in 2024 (~20% of global petroleum liquids consumption, ~>25% of seaborne oil trade)** — quantifies the physical shock scale | Anchors the catalyst chain to a hard EIA number rather than a market narrative |
| GPT-5.5 | Treasury historical analogues with exact archive dates: 2y 1.95% (2022-03-16) → 5.05% (2023-03-08) = +310bp front-end shock; 1990 10y 8.91% (1990-08-22) → 8.05% (1991-01-17) = −86bp; 2013 taper 10y 1.66% (2013-05-02) → 2.98% (2013-09-05) = +132bp; 2023 10y 3.97%→4.98% = +101bp | Best-sourced historical-analogue data set in the council |
| GPT-5.5 | Reserves and TGA explicit: WRESBAL **$3.081tn 2026-06-10**, WTREGEN **$828.1bn 2026-06-10** — the full balance-sheet identity for QT mechanics | Plumbing accounting completeness none of the others match |
| GPT-5.5 | Math identity for the desk: P&L should be sized in **DV01 × bp move + convexity adjustment**, not in yield language alone (a 25bp move in 30s ≈ 8× the price effect of 25bp in 2s in the worked examples) | Risk-management discipline framing |

### A.4 · Comprehensive Analysis (council convergence/divergence narrative)

**High-confidence findings — where convergence means reliability.** All three models — Claude Opus 4.8, Gemini 3.1 Pro, and GPT-5.5 — converge on the headline regime call: the US Treasury curve has dis-inverted into an upward-sloping, *restrictive* configuration where the front end is policy-pinned by a hawkish Fed responding to a realized oil-driven inflation impulse (May CPI +4.2% y/y, gasoline +40.5% y/y per BLS), while the long end sits in a tug-of-war between intermittent safe-haven duration grabs (each Hormuz escalation flash) and a structural fiscal/supply/term-premium push that wants yields higher. The four headline numbers are essentially identical across reports — DGS10 ≈ 4.45–4.49%, DGS2 ≈ 4.05–4.09%, DGS3MO ≈ 3.71–3.78%, DFII10 +2.16% — with H.15-versus-task-live discrepancies on the order of 1–4bp, well within end-of-day publication noise. All three independently flag that the MOVE index is the single most important *missing* data point, with no free real-time feed because ICE licenses it as a proprietary product, leaving only delayed/EOD prints via TradingView, Investing.com, or Convex. All three also confirm that the ON RRP cushion is drained to ~$0.45bn from a >$2.5tn 2023 peak, that the Fed formally ended QT in late 2025 and shifted to a reserve-management posture, and that ACM and Kim-Wright term-premium models both place the 10y premium positive — Opus citing ~+0.73–0.83%, GPT citing 0.67% (ACM 2026-05-29) and 0.80% (KW 2026-06-05). The combination of FRED-confirmed real yields above +2.16%, dis-inverted positive slope (T10Y2Y +39bp on FRED), and positive term premium across two independent models is what makes the regime call "restrictive but normalized" rather than "recessionary bond-bull." Critically, all three also converge on the structural left tail: a "sticky-inflation + supply-glut → bear-steepener / term-premium spike" scenario echoing the 2023 long-end selloff and 1990 Gulf War oil-shock dynamics, with the 2023 episode well-documented by Fed staff as primarily term-premium-driven (the official Treasury archive shows 10y rose from 3.97% on 2023-07-31 to 4.98% on 2023-10-19, with 30y +109bp over the same window — a fact GPT-5.5 anchored with hard archive numbers and Opus reinforced with the MBS-convexity-amplification narrative).

The TIPS-over-nominals and front-end-over-long-bond winner calls are also unanimous, and importantly each model arrives at them through a different mechanism: Opus emphasizes that breakevens at 2.3% are not pricing the realized energy-CPI surge fully, Gemini frames it through the "Fed perceived as behind the curve" lens, and GPT-5.5 grounds it in the explicit oil-CPI elasticities from a Fed FEDS Note (a permanent 10% oil shock = energy CPI +1.5–2.3% on impact, core +0.1% over eight quarters). The convergence-by-different-routes pattern is the cleanest possible robustness check: when three models with different analytical styles independently land on the same trade expression for different but compatible reasons, you can buy that signal with confidence. The mortgage-MBS convexity amplifier as a regime amplifier is similarly convergent — Opus has the deepest mechanism walkthrough (the ~$2tn near-par 5%+ coupons, Goldman's ~$40bn-equivalent May selling estimate, Barclays calling it "more destabilizing than 2023"), Gemini characterizes it qualitatively, and GPT-5.5 anchors it to MORTGAGE30US 6.52% on 2026-06-11 with the duration-extension mechanism.

**Areas of divergence — where models reach different conclusions.** The most consequential analytical disagreement is on *curve-shape characterization*. Gemini 3.1 Pro calls the current dis-inversion a "bull steepener" and frames it as a recession harbinger; Claude Opus 4.8 explicitly characterizes it as a **bear-steepener** (long-end-led repricing) and treats this distinction as the single most important real-time tell for the desk; GPT-5.5 sides with Opus, noting that the steepening has clearly *not* been a front-end collapse driven by recessionary cuts. The disagreement is substantive, not semantic: a bull-steepener implies an imminent Fed-easing cycle (with all the implications that has for duration positioning, breakeven trades, and equity discount rates), while a bear-steepener implies a fiscal/supply/term-premium regime where long duration is structurally challenged regardless of Fed policy. The weight of evidence in the dossier strongly favors the Opus/GPT bear-steepener reading — the front end is still pinned at 4.05–4.09% with no 2026 cuts priced, while the long end is the segment that has cheapened relative to expectations; this is the textbook definition of a bear-steepener, not a bull-steepener. Gemini's framing appears to apply the *traditional* bull-steepener "recession-front-running" label to *any* dis-inversion, missing the qualitative distinction.

The second divergence is on *term-premium level*. Gemini reports ACMTP10 at 0.06% (a number that doesn't appear in the Opus or GPT readings and may reflect an earlier-vintage data point or a different field within the NY Fed CSV), while Opus reports ~+0.73–0.83% and GPT reports 0.67% (ACM) / 0.80% (KW) with explicit dates. The Opus and GPT readings are mutually consistent and well-sourced (NY Fed ACM CSV and FRED THREEFYTP10 directly), and Opus's deeper methodological treatment — ACM is yields-only linear-regression while KW augments with Blue Chip surveys and uses Kalman-filtered MLE, with the convexity definition causing a ~20bp mechanical gap and the two models historically correlating 0.86 with ACM averaging ~26bp higher than KW but currently converged within 3bp — provides the discriminating context. The build should adopt the ~+0.67–0.83% range and treat 0.06% as either stale or an error. The third divergence is on the *severity of the left-tail bear-steepener*: Opus models 10y → 4.9–5.3%+, Gemini calls 5.50%+, GPT calls +100–175bp from the current 4.45% level (i.e., 5.45–6.20%). GPT's range is widest because it anchors explicitly to the 2013 taper tantrum (+132bp) and 2023 tantrum (+101bp) historical analogues; the others compress the range based on the proximity of recent 2023 highs (~5.00%) as a likely resistance level.

The fourth divergence is *depth of treatment* rather than disagreement: GPT-5.5 produced the only full duration/convexity numerical spine (2y −1.88%/+100bp, 10y −7.62%/+100bp, 30y −13.77%/+100bp; carry+roll estimates), while Opus produced the only swap-spread quantification (5y ~−29bp, 30y ~−78bp) with the SLR/pension-pay-fixed mechanism, and Gemini produced the cleanest layperson scenario labels. The synthesis adopts all three. Finally, on the *will-the-Fed-hike* debate, all three lean to "hold/look-through" as the central case (matching the ~96% June hold probability on Polymarket cited by Opus), with the ~37% October hike odds (Opus) priced as the conditional-on-de-anchoring tail risk; GPT-5.5 adds the useful framing that the bond market's term-premium repricing can *substitute* for Fed hikes, doing the tightening for the committee — a point that helps resolve the apparent Fed-paralysis paradox Gemini surfaces in its "grinding stagflation" scenario.

**Unique insights worth noting.** Three Opus-only contributions are particularly load-bearing. First, the ACM–KW convergence-within-3bp on the most recent print is a methodological intelligence point that tells the desk *when* to trust the term-premium signal at face value (when the two models agree, you can; when they diverge by tens of bp, the gap is usually a survey-vs-yields story and the point estimate is unreliable). Second, the MBS-convexity "Beast awakened" framing with the QT linkage (as the Fed ran off MBS, negative convexity shifted from the Fed's balance sheet back into private hands, amplifying any directional yield break) is the cleanest mechanistic explanation in any of the three reports for why the May selloff was so violent and why volatility, not level, is the proximate MBS risk. Third, the gold–real-yields *decoupling* as itself a signal — gold at $4,365 with DFII10 +2.16% says the market is pricing geopolitical/fiat-trust risk above the conventional opportunity-cost calculus — is a cross-asset diagnostic the other models miss. From GPT-5.5, the standout unique contributions are the actual Fiscal Data API auction microstructure (6/10 10y at 2.57 b/c with $30.4bn indirect; 6/11 30y at 2.33 b/c with $13.2bn indirect), the worked duration/convexity numerics with saved JSON, and the Fed FEDS-Note oil-CPI elasticity (10% oil shock → energy CPI +1.5–2.3%, core +0.1% over eight quarters). From Gemini 3.1 Pro, the standout contribution is the cleanest pedagogical/communication framing — the named scenarios ("Sticky-Inflation Bear-Steepener," "De-escalation Bull-Steepener," "Grinding Stagflation") are exactly the labels the plain-language page needs.

**Recommendations.** Adopt the bear-steepener (Opus/GPT) reading over the bull-steepener (Gemini) framing for the live regime call; adopt the ~+0.67–0.83% term-premium range (Opus/GPT, NY Fed ACM and FRED THREEFYTP10 directly) and disregard the 0.06% figure; use GPT-5.5's auction-microstructure and duration/convexity math as the quantitative spine of the analyst page; use Opus's swap-spread mechanism (5y ~−29bp, 30y ~−78bp) and MBS-convexity "Beast" narrative as the plumbing-section centerpiece; use Gemini's scenario labels for the layman page; and treat the MOVE index as the single highest-priority data gap, with all three models confirming no free real-time feed and the convexity-amplified regime making it the variable you most want and can least obtain.

---

## B · MERGED LONG-FORM DOSSIER (the canonical build spine)

### §1 · SCOPE & STATE

**What the Rates desk owns.** The US Rates desk is the franchise for the *risk-free* term structure: the nominal UST curve from bills to the 30-year, the real curve (TIPS), the inflation curve embedded between them (breakevens, 5y5y forwards), the *term premium* (the model-derived residual between observed yields and the expected average short-rate path), and the *funding/plumbing* layer that prices the collateral value of Treasuries — SOFR/repo, the Fed's balance sheet (reserves, RRP, QT/RMPs), Treasury supply/auctions, and swap spreads. The desk's job is to have a view on the *level* of the risk-free rate, the *shape* of the curve, the *decomposition* of yields into expectations versus premium, and the *flow/positioning* that moves them. `[DIR]` (H)

**What the Rates desk does NOT own.** Corporate credit spreads belong to the Credit desk — Rates owns the risk-free base over which those spreads sit, not the spread itself. FX rate-differential trades (carry, basis, cross-currency) belong to the FX desk — Rates owns the dollar leg's rate, not the currency view. Equity index level belongs to Equities — Rates owns the discount-rate input. The boundary discipline matters in the current regime because the Iran/Hormuz shock transmits *across* all four desks simultaneously, and the Rates desk must isolate the rate-specific signal (term premium, real yields, Fed path) from the cross-asset noise. `[DIR]` (H)

**Regime call (one sentence).** *The curve has dis-inverted into a positively-sloped, restrictive, positive-term-premium regime in which a realized oil-supply inflation shock is pinning the front end high (no cuts, rising hike odds) while the long end is caught in a tug-of-war between an intermittent safe-haven/growth-fear bid and a structural fiscal/supply/term-premium push — a two-sided catalyst where the base case is "higher-for-longer real rates with a fat left tail of a bear-steepener."* `[DIR]` (M-H)

**Four headline numbers.**

| Metric | Current | FRED ID | One-line meaning |
|---|---|---|---|
| **10y nominal** | **4.49%** (desk live) / 4.45% (FRED 2026-06-11) | DGS10 | The risk-free anchor for the economy; restrictive but not extreme. `[HARD]` (H) ([FRED DGS10](https://fred.stlouisfed.org/series/DGS10), [H.15 2026-06-12](https://www.federalreserve.gov/releases/h15/)) |
| **2s10s slope** | **+40bp** (desk) / +39bp (FRED 2026-06-12) | T10Y2Y | Dis-inverted — positive sign restored; the multi-year inversion has ended. `[HARD]` (M-H) ([FRED T10Y2Y](https://fred.stlouisfed.org/series/T10Y2Y)) |
| **Real 10y** | **+2.16%** (2026-06-11) | DFII10 | Deeply restrictive: real cost of 10y money >2%, historically associated with policy tightness. `[HARD]` (H) ([FRED DFII10](https://fred.stlouisfed.org/series/DFII10)) |
| **Fed path** | **No 2026 cuts priced; ~37% Oct hike odds; target 3.50–3.75%; SEP-2026 median 3.4%** | (CME FedWatch + DFEDTARU/L; SEP) | Market prices Fed *on hold to hawkish*, with next move more likely a hike than a cut. `[HARD]` (M) ([March 2026 SEP](https://www.federalreserve.gov/monetarypolicy/fomcprojtabl20260318.htm), [CNBC 2026-05-12](https://www.cnbc.com/2026/05/12/markets-raise-chances-for-a-fed-rate-hike-following-hot-inflation-report.html)) |

The four numbers tell a coherent story: a high real rate (DFII10 2.16%) and a hawkish front end (no cuts) confirm *restrictive policy*; positive 2s10s confirms the *curve has normalized its sign* but not its message; and the 10y at ~4.45–4.49% sits in the "elevated but not crisis" band that leaves room in both directions depending on whether oil re-escalates or the ceasefire holds. `[DIR]` (H)

**Important official-vs-desk discrepancies (housekeeping):** H.15 shows DGS10 4.45% on 2026-06-11 vs the desk live 4.49% — normal end-of-day-publication noise (~4bp), not a regime difference. Both numbers tell the same story. The desk should use the live print as the analyst-page anchor and flag any FRED divergence inline. `[HARD]` (H)

---

### §2 · THE ANALYST SPINE (§2.1–§2.10)

#### §2.1 Regime — level & direction of the 10y and Fed stance

**The read.** The risk-free rate is *restrictive and range-bound at an elevated level*, with the front end anchored by a hawkish, on-hold-to-hiking Fed responding to a realized oil-driven inflation impulse. The 10y has spent 2026 oscillating in a roughly 4.4–4.7% corridor, spiking toward 4.69% during the May convexity-amplified selloff and easing back toward 4.45–4.49% on the June ceasefire/peace-talk de-escalation that pulled Brent from ~$101 to ~$87 ([U.S. News/Reuters 2026-05-21](https://money.usnews.com/investing/news/articles/2026-05-21/analysis-us-treasuries-selloff-exacerbated-as-mortgage-investors-hedge-against-rising-yields); [CNBC 2026-06-12](https://www.cnbc.com/2026/06/12/treasury-yields-oil-iran-deal.html)). `[HARD]` (H) The defining feature of the regime is that the *front end is policy-pinned* (Fed-funds effective DFF 3.62% on 2026-06-11, target 3.50–3.75%) while the *long end is contested* — this is what produces the positive slope. `[HARD]` (H) ([FRED DFF](https://fred.stlouisfed.org/series/DFF), [H.15 2026-06-12](https://www.federalreserve.gov/releases/h15/))

The directional bias is *asymmetric and two-sided*. On the upside for yields: a Hormuz re-closure or ceasefire collapse re-ignites the oil→CPI→Fed-hike chain, lifting the whole curve with a front-end-led bear-flattening followed by a term-premium-led bear-steepening. On the downside for yields: a durable peace deal pulls oil lower, disinflation resumes, cuts return to the table, and the curve bull-steepens. `[DIR]` (M-H) The Fed's reaction function is the hinge: with May CPI at +4.2% y/y (energy CPI +23.5% y/y, gasoline +40.5% y/y per BLS) the committee has explicitly prioritized inflation persistence over growth risk, which is *why no 2026 cuts are priced* ([BLS CPI Summary](https://www.bls.gov/news.release/cpi.nr0.htm); [Polymarket 2026-06-04](https://polymarket.com/hi/event/fed-decision-in-june-825); [March 2026 SEP](https://www.federalreserve.gov/monetarypolicy/fomcprojtabl20260318.htm)). `[HARD]` (M)

**Best indicators:** DGS10 (level), Fed-funds-futures/FedWatch hike-vs-cut distribution (path).
**Free series:** DGS10 — **4.45% (2026-06-11)** [HARD, live]. Fed path: no FRED real-time feed for futures-implied probabilities → `source_identified` only (CME FedWatch, Polymarket); FRED DFEDTARU/DFEDTARL give only the band.

#### §2.2 Structure — curve shape & dis-inversion message

**The read.** The curve is **upward-sloping / dis-inverted**: T10Y2Y +39bp on 2026-06-12 (FRED), T10Y3M +70bp on 2026-06-12 (FRED), with the desk live print at +40 / +77bp respectively. `[HARD]` (H) ([FRED T10Y2Y](https://fred.stlouisfed.org/series/T10Y2Y), [FRED T10Y3M](https://fred.stlouisfed.org/series/T10Y3M)) This is a *normalization of the sign* of the curve after the longest inversion in the modern record (2022–mid-2024). `[DIR]` (H)

**The crucial interpretive point:** dis-inversion has happened via a **bear-steepener** dynamic — the long end has repriced higher (term-premium and real-rate driven) faster than the front end has fallen — rather than the classic *bull-steepener* (front end falling fast on cuts) that usually precedes recession. Two of three council models (Opus, GPT-5.5) explicitly note that the front end has not collapsed (DGS2 still 4.05%, no Fed cuts priced) so this cannot be a bull-steepener; the long end is what has moved. Gemini's "bull steepener" label is a council-minority view that the synthesis does not adopt. `[DIR]` (M-H)

**The bull/bear × steepen/flatten quadrant** is the desk's core structural map:
- **Bull-steepener** (front falls faster than long): classic early-easing / recession-front-running. *Not the current regime.*
- **Bear-steepener** (long rises faster than front): fiscal/supply/term-premium/inflation-risk regime. **This is the active regime and the left-tail risk.** `[DIR]` (M-H)
- **Bull-flattener** (long falls faster): safe-haven duration grab / growth scare. *Active in flashes on each Hormuz escalation headline.* `[DIR]` (M)
- **Bear-flattener** (front rises faster): Fed hiking into the front end. *The upside risk if the Fed actually hikes on oil-inflation.* `[DIR]` (M)

The two-sided catalyst maps directly onto these quadrants: escalation → bear-flattener (Fed hike) then bear-steepener (supply/premium); de-escalation → bull-steepener (cuts return). The desk should watch *which way the steepening is driven* — front-end-led vs long-end-led — as the single most informative real-time tell. `[DIR]` (H)

**Best indicators:** T10Y2Y, T10Y3M. **Free series:** T10Y2Y **+39bp** (2026-06-12, live); T10Y3M **+70bp** (2026-06-12, live). `[HARD]` (H)

#### §2.3 Valuation — real yields & term premium (the analytical centerpiece)

**The read.** Real yields are the most restrictive part of the picture: **DFII10 at +2.16% (2026-06-11)** means the market demands a >2% real return to lend to the Treasury for 10 years — firmly in the "restrictive" band (0% = free money; 2%+ = restrictive). `[HARD]` (H) ([FRED DFII10](https://fred.stlouisfed.org/series/DFII10)) The 5-year real is ~1.78%, the 30-year real ~2.72% per H.15 — a *positively-sloped real curve*, which is itself a normalization signal (real curves were inverted/flat through the hiking cycle). `[HARD]` (M-H) ([H.15 2026-06-12](https://www.federalreserve.gov/releases/h15/))

**Term premium is the analytical centerpiece of this dossier.** Two independent free models bracket the level:
- **NY Fed ACM:** **0.67% on 2026-05-29** (per the official NY Fed ACM CSV) ([NY Fed ACM CSV](https://www.newyorkfed.org/medialibrary/media/research/data_indicators/acmPlot_data.csv)). `[HARD]` (H)
- **Federal Reserve Board Kim-Wright (THREEFYTP10):** **0.80% on 2026-06-05** ([FRED THREEFYTP10](https://fred.stlouisfed.org/series/THREEFYTP10)). `[HARD]` (H)

The decomposition of the 10y is illuminating: if DGS10 = 4.45%, then ACM splits it into roughly **~3.78% expected-short-rate path + ~0.67% term premium**, while KW splits it into roughly **~3.65% expected path + ~0.80% term premium**. Both models agree term premium is durably positive — a regime change that occurred when ACMTP10 crossed above zero in August 2024 after eight years negative, with converging drivers: QT returning duration to private hands, persistent ~6%-of-GDP deficits raising net supply, a higher r-star repricing the long-term anchor, and reduced foreign/reserve-manager demand. `[DIR]` (M)

**ACM vs Kim-Wright — methodological contrast and how to read them now.** Both are no-arbitrage *affine Gaussian* term-structure models that define term premium as yield minus the expected average short-rate path. The differences are methodological and they matter for reading levels:

- **Estimation:** ACM (Adrian–Crump–Moench 2013) splits estimation into fast *linear excess-return regressions*; KW (Kim–Wright 2005, Fed Board) uses one-shot *maximum-likelihood* with Kalman-filtered latent factors ([Fed FEDS Note 2017-04-03](https://www.federalreserve.gov/econres/notes/feds-notes/robustness-of-long-maturity-term-premium-estimates-20170403.html)). `[HARD]` (H)
- **Information set:** ACM uses *Treasury yields only* (monthly, 1961→); KW *augments yields with Blue Chip survey expectations of the short rate* (weekly, 1990→). This is the single biggest driver of level differences — the Fed's own analysis shows that when you add surveys to ACM, its term-premium estimate converges to KW's. `[HARD]` (H)
- **Convexity:** KW's definition *embeds* the (negative, ~−20bp at 10y) convexity premium; ACM's differs from the "pure" term premium by a small constant convexity term (~20bp at 10y), which mechanically makes one slightly lower than the other ([Fed three-factor model page](https://www.federalreserve.gov/data/three-factor-nominal-term-structure-model.htm)). `[HARD]` (H)
- **Agreement now:** the two correlate ~**0.86** over 9,074 daily observations (1990–2026), with ACM averaging ~**0.26pp higher** than KW historically — *but as of the most recent KW print (8 May 2026 / 5 June 2026) the two are within 3–15bp of each other*. `[HARD]` (M)

**Read for the desk:** when ACM and KW *agree* (as now), the term-premium signal is robust to model choice — both place it solidly positive and partially normalized. When they *diverge*, the gap is usually a survey-expectations story (KW's surveys anchoring the short-rate path differently from ACM's pure-yield extraction), and neither point estimate should be trusted as gospel. The honest caveat: term premium is *unobservable* — it is a model residual, sensitive to sample period and estimated in-sample — so use it as a *directional decomposition tool*, not a tradeable number. `[DIR]` (H) A third estimate, the San Francisco Fed's **Christensen–Rudebusch (CR)** model, decomposes into expectations + premium + a model *residual* and is a useful free triangulation ([SF Fed Treasury Yield Premiums](https://www.frbsf.org/research-and-insights/data-and-indicators/treasury-yield-premiums/)). `[DIR]` (M)

**Best indicators:** DFII10 (real yield), ACMTP10 / THREEFYTP10 (term premium). **Free series:** DFII10 **2.16%** (live, FRED); NY Fed ACM **0.67%** (2026-05-29, latest_published); THREEFYTP10 (KW) **0.80%** (2026-06-05, latest_published).

#### §2.4 Fundamentals / cycle — inflation & growth expectations, Fed reaction function

**The read.** Breakeven inflation is *elevated but not unanchored*. The 10y breakeven (T10YIE) sits at **2.31% on 2026-06-12** and the 5y5y forward (T5YIFR) at **2.23% on 2026-06-12** — above the Fed's 2% target but *well short of de-anchoring*, which is the single most important fact in the regime: the market believes the oil shock is a *level* shock to near-term CPI, not a *regime* shift in long-run inflation expectations ([FRED T10YIE](https://fred.stlouisfed.org/series/T10YIE), [FRED T5YIFR](https://fred.stlouisfed.org/series/T5YIFR)). `[HARD]` (H)

Realized inflation is the hot spot: BLS May 2026 CPI-U **+0.5% m/m and +4.2% y/y**, energy **+3.9% m/m and +23.5% y/y**, gasoline **+7.0% m/m and +40.5% y/y** ([BLS CPI Summary](https://www.bls.gov/news.release/cpi.nr0.htm)). `[HARD]` (H)

**The Fed reaction function — quantitative parameters from staff research.** A Federal Reserve staff note estimates that a permanent **10% oil-price increase** raises:
- **Energy CPI by ~1.5% on impact and ~2.3% after two quarters**
- **Food CPI by ~0.3% after eight quarters**
- **Core CPI by ~0.1% after eight quarters**

([Fed FEDS Note "Second-Round Effects of Oil Prices"](https://www.federalreserve.gov/econres/notes/feds-notes/second-round-effects-of-oil-prices-on-inflation-in-the-advanced-foreign-economies-accessible-20231215.htm)). `[HARD]` (M-H) These elasticities give the desk a usable framework: a 20–30% Brent move can plausibly add multiple tenths to headline inflation for several quarters but only a fraction to core, *provided expectations stay anchored* — which is exactly the credibility test T5YIFR represents.

The March 18, 2026 SEP revised 2026 PCE *up* to 2.7% (from 2.4% in December) and revised the 2026 fed-funds median to 3.4%, signaling the committee will *look through growth softness to inflation persistence* — the classic supply-shock dilemma where a central bank cannot simultaneously cushion growth and contain inflation ([March 2026 SEP](https://www.federalreserve.gov/monetarypolicy/fomcprojtabl20260318.htm), [March 2026 FOMC statement](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260318a.htm)). `[HARD]` (H) The resulting path: ~96–98% hold probability at the June 16–17 FOMC; ~37–38% *hike* probability by October; *zero* cuts priced for 2026 (vs ~30% expecting a June cut as recently as March 4, before the war). `[HARD]` (M)

The key tension the desk must hold: a classic oil *supply* shock is *stagflationary* — it pushes inflation up and growth down at once. The front end is pricing the inflation leg (no cuts/hikes); the long end is partly pricing the growth leg (the safe-haven flashes, the bull-flattener impulses). The breakevens staying anchored is what gives the Fed cover *not* to hike aggressively — if T5YIFR broke above ~2.5% and kept going, the calculus flips toward forced hikes. `[DIR]` (H)

**Best indicators:** T10YIE, T5YIFR, CPI energy/gasoline subindexes, FOMC language. **Free series:** T10YIE **2.31%** (live); T5YIFR **2.23%** (live); BLS CPI tables (monthly). `[HARD]` (H)

#### §2.5 Cohorts / segments — front-end vs belly vs long-bond, nominal vs TIPS, bills vs coupons

**The read.** The curve's segments are telling *different stories*, which is the essence of a dis-inverted, contested regime:

- **Front end (bills/2y):** policy-anchored. DGS3MO **3.78%**, DGS2 **4.05%** (both 2026-06-11), 4-week bill ~3.61% — all tethered to the 3.50–3.75% target with a small term/credit pickup ([FRED DGS3MO](https://fred.stlouisfed.org/series/DGS3MO), [FRED DGS2](https://fred.stlouisfed.org/series/DGS2), [H.15 2026-06-12](https://www.federalreserve.gov/releases/h15/)). `[HARD]` (H) Demand here is *strong* — auction flows show appetite "concentrated in the front-end." `[DIR]` (M)
- **Belly (5y–7y) — the collision zone between Fed path and term premium.** DGS5 **4.18% on 2026-06-11**. A 5y par-bond modified-duration example at that yield has duration ~**4.47**, losing about **−1.11%** on a +25bp parallel shock before carry ([FRED DGS5](https://fred.stlouisfed.org/series/DGS5)). The May selloff drove 5y to 4.35%, a 15-month high, with heavy 5y-futures convexity-hedging volume (a single 33,000-contract block reported). `[HARD]` (M-H)
- **Long bond (30y) — the fiscal/supply/term-premium battleground.** DGS30 **4.95% on 2026-06-11** (~4.97% intra-day briefly). A 30y par-bond example at 4.95% has modified duration ~**15.54** and convexity ~**355**, losing about **−3.77%** on a +25bp shock before carry. Auctions show the steepest demand softness here: the April 30y tailed +0.5bp at 2.39× cover with dealer takedown jumping to 11.6%, while the 2026-06-11 30y reopening printed 2.33× cover, 5.020% high yield, $13.16bn indirect (foreign) accepted ([Fiscal Data auctions API](https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/od/auctions_query)). `[HARD]` (H)
- **Nominal vs TIPS:** the breakeven (nominal − TIPS) of ~2.31% is the inflation-compensation wedge; TIPS *outperform* nominal in a realized-inflation regime because the principal accretes with CPI — which is exactly why TIPS are a regime winner (see §B.5). `[DIR]` (H)
- **Bills vs coupons:** bills avoid duration drawdown but reinvest at whatever the Fed does next; coupons lock yields and add roll-down/convexity exposure that helps only if yields stabilize or fall. The current high-real-yield + dis-inverted-curve regime makes the *liquidity vs convexity* trade-off non-trivial. `[DIR]` (H)

**Cohort takeaway:** the demand curve is *downward-sloping in maturity*. Investors want the front end (high carry, policy certainty, low duration risk) and are reluctant on the long end (duration risk, supply glut, term-premium repricing). This is the *structural* reason the curve is steepening from the long end up. `[DIR]` (M-H)

#### §2.6 Factors — duration, carry/roll-down, curve, convexity

**The read.** Bond returns decompose into a handful of orthogonal factors the desk trades around. The synthesis adopts GPT-5.5's full quantitative spine here.

**Duration (level)** is first-order. Worked par-bond examples (yields as of 2026-06-11):

| Tenor | Yield | Mod duration | Convexity | +100bp price impact (before carry) | −100bp price impact (before carry) |
|---|---:|---:|---:|---:|---:|
| 2y | 4.05% | ~1.88 | ~4 | **−1.88%** | +1.95% |
| 5y | 4.18% | ~4.47 | ~24 | **−4.35%** | +4.59% |
| 10y | 4.45% | ~8.00 | ~74 | **−7.62%** | **+8.38%** |
| 30y | 4.95% | ~15.54 | ~355 | **−13.77%** | **+17.32%** |

`[HARD]` (M-H) (calculations from GPT-5.5 contribution, saved to `/home/user/workspace/rates_math_examples.json`)

**Convexity** is second-order but decisive in tails: the 30y example *gains* +17.32% on −100bp but loses only −13.77% on +100bp — the price function is convex, so rallies help more than equal-sized selloffs hurt in a *plain* Treasury. This is exactly *opposite* for MBS (see §2.7), which is the regime's defining amplification asymmetry. `[HARD]` (M-H)

**Carry & roll-down.** With a positively-sloped curve, owning the belly and rolling down the curve earns both coupon carry and roll-down — *newly positive* after years of inverted-curve negative carry. Illustrative one-year carry-plus-roll estimates under an unchanged curve: **2y 4.20%, 5y 4.34%, 10y 4.85%, 30y 5.33%**. But those returns can be erased by +50–75bp long-end shocks in 10s/30s — meaning the duration trade-off is acute even with positive carry restored. `[HARD]` (M)

**Curve (steepener/flattener).** The regime structurally favors *steepeners* (fiscal/supply/term-premium), with *bear-steepener* (long-led) rather than *bull-steepener* (front-led) realization. A 2s10s or 5s30s steepener can make money while an outright long-duration position loses, if both rates rise and long rises more. `[DIR]` (M-H)

**Risk-management identity for the desk.** P&L should be sized in **DV01 × bp move + convexity adjustment**, not in yield language alone. A 25bp move in 30s is approximately 8× the price effect of 25bp in 2s in the worked examples. `[DIR]` (H)

#### §2.7 Positioning / plumbing — supply, swap spreads, SOFR/repo, QT/RRP/reserves, MBS convexity

**This is where the regime's fragility lives. Five interlocking plumbing signals:**

**(a) Treasury supply & auctions — demand is fraying at the long end.** Recent auction microstructure (from Fiscal Data API):
- **6/10/2026 10y reopening:** $39.0bn accepted, $100.0bn tendered, **bid-to-cover 2.57**, high yield 4.538%, primary-dealer accepted $3.68bn, direct $4.80bn, **indirect (foreign) $30.44bn**. `[HARD]` (H)
- **6/11/2026 30y reopening:** $22.0bn accepted, $51.2bn tendered, **bid-to-cover 2.33**, high yield 5.020%, primary-dealer accepted $3.24bn, direct $5.56bn, **indirect $13.16bn** — adequate but not euphoric for long duration. `[HARD]` (H)
- **Late-March 2026 stack** (per Opus): 2y produced +1.8bp tail (vs −0.2bp avg) with directs collapsing to 16.5% and dealers forced to absorb 2.25× their average; 5y bid-to-cover fell to 2.29× (lowest since Sept 2022) with dealers taking 15.6% (highest since May 2024). April 30y was "soft" (2.39× cover, 0.5bp tail, dealers 11.6%) but April 20y printed a strong 2.71× cover with 72% indirect takedown — *demand is bifurcated, not uniformly failing*. `[HARD]` (M)

*Reading the tells:* a **tail** (auction stops above when-issued) and a **rising dealer takedown** both mean private demand fell short and dealers had to backstop — a real-time demand gauge. Tails require contemporaneous when-issued yields not available on a free real-time feed; bid-to-cover and bidder takedown are free via Fiscal Data API. `[DIR]` (H)

**(b) Negative swap spreads — the balance-sheet rental fee.** Swap spreads are *negative across the curve* (Treasury yields above matched-maturity swap rates): **5y swap spread ~−29bp, 30y ~−78bp** in early-2026 readings ([Pensford 2026-01-01](https://www.pensford.com/industry-news/why-are-swaps-cheaper-than-treasurys); [Yahoo/Reuters](https://finance.yahoo.com/news/trump-deregulation-push-boosts-appeal-171013078.html)). `[HARD]` (M) The mechanism: post-2008 leverage rules (SLR/eSLR, G-SIB surcharges) make it *capital-expensive* for dealers to warehouse Treasuries, so they charge a premium to hold them — pushing UST yields *above* swaps. Negative swap spreads are therefore a *balance-sheet-constraint stress gauge*: the more negative, the tighter dealer capacity. eSLR relief in 2025 narrowed (less-negative) spreads, but they remain ~25bp inside Treasuries. `[DIR]` (M-H) BIS work attributes part of the long-end negativity to pension/insurance duration-hedging demand to *receive fixed* in swaps ([BIS WP705](https://www.bis.org/publ/work705.pdf)). `[DIR]` (M) **Honest gap:** FRED's classic swap-rate series is discontinued, so live SOFR swap-spread levels require paid market data ([FRED swaps category](https://fred.stlouisfed.org/categories/32299)).

**(c) SOFR / repo — currently calm, but the canary.** SOFR is **3.60% on 2026-06-11**, IORB is **3.65% (effective 2026-06-15)**, and the ON RRP award rate is **3.50% on 2026-06-12** — secured overnight market trading inside the administered-rate corridor, no spike, no collateral stress at present ([FRED SOFR](https://fred.stlouisfed.org/series/SOFR), [FRED IORB](https://fred.stlouisfed.org/series/IORB), [FRED RRPONTSYAWARD](https://fred.stlouisfed.org/series/RRPONTSYAWARD)). `[HARD]` (H) But the desk should watch it like a hawk: a SOFR print spiking above IORB (as in Sept 2019) signals reserves have fallen below "ample," and given that RRP is *drained* (see (d)), the buffer that absorbed prior shocks is gone. `[DIR]` (M)

**(d) QT / RRP / reserves — the buffer is empty and QT is over.** The Fed *formally ended QT on 1 December 2025* and shifted to a "reserve management" regime as of January 2026; the **ON RRP facility effectively reached zero in early January 2026** ([FinancialContent 2026-01-19](https://www.financialcontent.com/article/marketminute-2026-1-19-the-great-unwind-concludes-federal-reserve-formally-ends-quantitative-tightening)). `[HARD]` (M)

Current balance-sheet identity (all FRED, 2026-06-10/12):
- **RRPONTSYD: $0.454bn** (essentially drained from >$2.5tn 2022–23 peak) ([FRED RRPONTSYD](https://fred.stlouisfed.org/series/RRPONTSYD))
- **WRESBAL: $3.081tn** (reserves are now the marginal QT cushion) ([FRED WRESBAL](https://fred.stlouisfed.org/series/WRESBAL))
- **WTREGEN (TGA): $828.1bn** (reserve-drain/offset account) ([FRED WTREGEN](https://fred.stlouisfed.org/series/WTREGEN))
- **WALCL (Fed assets): $6.725tn** (down from $8.96tn 2022 peak) ([FRED WALCL](https://fred.stlouisfed.org/series/WALCL))

`[HARD]` (H) *Mechanics for the desk:* QT drained reserves and removed the Fed bid for long-end duration (estimates attribute 50–80bp of the 2022–23 10y rise to QT). With RRP at zero, any further drain hits *bank reserves directly* — the "liquidity cliff" risk that forced QT's end. The market is now watching for the first "reserve management purchases" (RMPs) — *not QE*, but technical reserve-additions to keep funds-rate control. The balance-sheet identity for the desk: **Fed assets ↓ via QT must be mirrored by liabilities ↓ or capital/other-factors changing; if ON RRP is near zero, the marginal drain hits reserves or is offset by TGA/currency changes** ([BIS Quarterly Review](https://www.bis.org/publ/qtrpdf/r_qt2309d.htm)). `[DIR]` (H)

**(e) MBS-convexity hedging — the "Beast" has awakened.** This is the single most important amplification mechanism in the current regime. ~$2 trillion of MBS now carry 5%+ coupons (~4× the level of three years ago), and ~one-third of outstanding MBS trade near par — *exactly where convexity sensitivity is highest* ([WTMS 2026-06-04](https://www.wellthatmakessense.com/mortgage-today-am-06-04-26/); [FuTu/Bloomberg 2026-06-05](https://news.futunn.com/en/post/74143944/is-the-us-treasury-market-s-monster-returning-wall-street); [FRED MORTGAGE30US](https://fred.stlouisfed.org/series/MORTGAGE30US) — 30y mortgage at 6.52% on 2026-06-11). `[HARD]` (H)

The mechanism: MBS have *negative convexity* from the embedded prepayment option. When rates rise, refis slow, prepayments fall, and MBS *duration extends* — so prices fall *faster* than a vanilla bond. To re-hedge the extending duration, MBS holders (REITs, insurers, money managers) *sell Treasury futures*, which pushes yields *higher still*, extending MBS duration *more* — a self-reinforcing feedback loop. `[DIR]` (H) During the May 2026 selloff this was decisive: Goldman estimated the episode added duration risk equivalent to **~$40bn of 10y Treasury selling**; Barclays' Nashikkar called it "more destabilizing for rates" than 2023 at comparable yield levels because higher coupons mean larger, less predictable duration extensions ([U.S. News/Reuters 2026-05-21](https://money.usnews.com/investing/news/articles/2026-05-21/analysis-us-treasuries-selloff-exacerbated-as-mortgage-investors-hedge-against-rising-yields)). `[HARD]` (M)

**The QT linkage:** as the Fed ran off ~$35bn/month of MBS into bills, it effectively *shifted negative convexity back from the Fed's balance sheet into the market* — amplifying the effect. The end of QT should eventually *stop* adding to that pile, but the existing stock is the structural amplifier already in place. `[DIR]` (M-H)

#### §2.8 Cross-asset — rates as the spine of everything

**The read.** Rates sit *under* every other asset class:
- **Rates ↔ Dollar:** the broad dollar is firm (~100), consistent with a restrictive Fed and high real yields drawing capital in; the rate-differential channel is FX's desk, but Rates owns the dollar's *rate input*. A hawkish-Fed-on-oil narrative supports the dollar; a de-escalation/cut narrative weakens it. *DXY not available as a free FRED real-time series; treat as desk-live input.* `[DIR]` (M)
- **Rates ↔ Equities (discount rate):** the 10y real yield (DFII10 +2.16%) is the equity discount-rate anchor; restrictive real rates compress multiples, especially for long-duration growth equity. The two-sided catalyst is two-sided for stocks too: oil→inflation→higher discount rate is a headwind; de-escalation→lower rates is a tailwind. The 2023 "Treasury tantrum" template is instructive: Fed staff documented the 10y rise from <4% to >5% and back to 3.9% was *primarily term-premium-driven* linked to QT, issuance, and uncertainty ([Federal Reserve 2023 Treasury Tantrum note](https://www.federalreserve.gov/econres/notes/feds-notes/the-treasury-tantrum-of-2023-20240903.html)). `[HARD]` (H)
- **Rates ↔ Credit (spreads over rates):** credit spreads sit *over* the risk-free curve — that's the Credit desk's variable, but the *all-in* corporate yield = UST + spread, so a rising risk-free base raises corporate funding costs even if spreads are stable. A front-end oil/Fed repricing hurts floating-rate borrowers less on mark-to-market but more through cash interest expense; a long-end term-premium repricing hurts fixed-rate issuers through new-issue concessions. `[DIR]` (M-H)
- **Rates ↔ Gold (real-yield link — and the decoupling signal):** the textbook inverse relationship (gold pays no coupon, so higher real yields raise its opportunity cost) has *decoupled* — gold is at a record ~$4,365 *despite* DFII10 +2.16%, because the safe-haven/de-dollarization/geopolitical bid is overwhelming the real-yield drag (echoing the Gulf-War episode where gold spiked on oil + equity plunge). This decoupling is itself a *signal*: it says the market is pricing geopolitical/fiat-trust risk above the ordinary real-rate calculus. `[DIR]` (M)

**Best free cross-asset rates dashboard:** DGS2/DGS10/DFII10/T10YIE/SOFR plus no-free-feed placeholders for DXY, spot gold, MOVE, and live swap spreads.

#### §2.9 Catalyst transmission — Iran war / Hormuz → rates

**The physical shock is large.** EIA: Strait of Hormuz handled about **20 million b/d in 2024**, around **20% of global petroleum liquids consumption** and more than one-quarter of global seaborne oil trade ([EIA Hormuz chokepoint](https://www.eia.gov/todayinenergy/detail.php?id=65504)). `[HARD]` (H) The live environment: Strait closed since 2026-03-04, OPEC output down 30%+, Brent $101→$87 on fragile ceasefire/peace-talks; EIA's May STEO assumed closure through late May with gradual resumption in June ([EIA STEO global oil](https://www.eia.gov/outlooks/steo/report/global_oil.php)). `[HARD]` (M)

**The explicit chains, with which are active now (mid-June, post-ceasefire headline):**

**Chain A — Oil → CPI → Fed → front end (ACTIVE, DOMINANT).** Hormuz closure → crude/gasoline shock → headline CPI → inflation expectations → Fed path → bills/2s/SOFR higher. Parameter rule: a permanent 10% oil rise can add ~0.4pp to headline CPI in broad estimates; in the Fed FEDS-Note decomposition, raise energy CPI 1.5–2.3% on impact-to-two-quarters, with smaller persistent food/core effects. The active mechanism: Brent ~$101 → energy CPI +23.5% y/y → headline CPI +4.2% → Fed prices out all 2026 cuts and ~37% hike odds → front end pinned at 4.05% (2y) / 3.78% (3m). *This is the realized base case.* `[HARD]` (H)

**Chain B — Safe-haven bid → long end (INTERMITTENT, flashes on escalation).** Hormuz closure → growth-tax / safe-haven shock → lower risk appetite → long-end rally or bull-flattening. Each escalation headline triggers a flight-to-quality duration grab that bull-flattens the curve; the June ceasefire/peace-talk headlines did the *opposite* — pulled Brent down and let yields drift down on disinflation hope rather than haven demand. The haven channel is *currently dormant but one headline away from reactivation.* `[DIR]` (M)

**Chain C — Supply / deficit → term premium → long end (ACTIVE, STRUCTURAL).** War-driven fiscal needs + CBO-projected ~6%-of-GDP deficit (including interest) + foreign demand questions → rising net Treasury supply → dealers demand more premium to warehouse → term-premium repricing → *bear-steepening*. The 2023 Treasury Tantrum is the live analogue: Fed staff attribute the 10y move from <4% to >5% primarily to term premium driven by QT, issuance, and uncertainty — Treasury archive shows 10y rose from 3.97% (2023-07-31) to 4.98% (2023-10-19), about +101bp, and 30y from 4.02% to 5.11%, about +109bp ([Treasury daily rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/daily-treasury-rates)). The weak Mar–Apr 2026 auctions and rising dealer takedown are this chain made visible. `[HARD]` (H)

**Chain D — MBS-convexity amplifier (CONDITIONAL).** Layered on top of Chains A and C: any decisive break higher in yields triggers convexity-hedging selling that *amplifies* the move (the May ~$40bn-equivalent episode). Active only on large directional moves. `[DIR]` (M)

**Escalation markers to watch:** Hormuz re-closure / ceasefire collapse; Brent back above ~$95–100; energy-CPI re-acceleration; a *de-anchoring* of T5YIFR above ~2.5%; an actual Fed hike. → *bear-flattener then bear-steepener, MBS amplification.*

**De-escalation markers:** durable peace deal; Brent sustained below ~$80; energy disinflation feeding through to headline CPI; cut probabilities returning to FedWatch. → *bull-steepener, the upside scenario.* `[DIR]` (H)

#### §2.10 Evidence base

Primary free sources used throughout:
- **FRED** (DGS-series, DFII10, T10YIE, T5YIFR, SOFR, IORB, RRPONTSYD, RRPONTSYAWARD, WALCL, WRESBAL, WTREGEN, THREEFYTP10, T10YFF, MORTGAGE30US, DFF) — daily/weekly, mostly live ([FRED](https://fred.stlouisfed.org/))
- **Federal Reserve H.15** Selected Interest Rates — daily ([H.15 2026-06-12](https://www.federalreserve.gov/releases/h15/))
- **NY Fed** ACM term premia and yield-curve-as-leading-indicator research ([NY Fed term premia](https://www.newyorkfed.org/research/data_indicators/term-premia-tabs.html), [NY Fed ACM CSV](https://www.newyorkfed.org/medialibrary/media/research/data_indicators/acmPlot_data.csv), [NY Fed YCFAQ](https://www.newyorkfed.org/research/capital_markets/ycfaq), [NY Fed SOFR methodology](https://www.newyorkfed.org/markets/reference-rates/sofr))
- **Federal Reserve Board** Kim-Wright three-factor model and FEDS Notes ([Fed three-factor page](https://www.federalreserve.gov/data/three-factor-nominal-term-structure-model.htm), [FEDS Note on TP robustness](https://www.federalreserve.gov/econres/notes/feds-notes/robustness-of-long-maturity-term-premium-estimates-20170403.html), [2023 Treasury Tantrum note](https://www.federalreserve.gov/econres/notes/feds-notes/the-treasury-tantrum-of-2023-20240903.html), [Oil second-round effects note](https://www.federalreserve.gov/econres/notes/feds-notes/second-round-effects-of-oil-prices-on-inflation-in-the-advanced-foreign-economies-accessible-20231215.htm))
- **SF Fed** Christensen–Rudebusch ([SF Fed Treasury Yield Premiums](https://www.frbsf.org/research-and-insights/data-and-indicators/treasury-yield-premiums/))
- **March 2026 SEP** and FOMC statement ([SEP](https://www.federalreserve.gov/monetarypolicy/fomcprojtabl20260318.htm), [Statement](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260318a.htm))
- **TreasuryDirect / Fiscal Data API** auction results (machine-readable: auction_date, security_term, high_yield, bid_to_cover_ratio, total_tendered/accepted, bidder categories) ([Fiscal Data auctions](https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/od/auctions_query)) and historical daily rates ([Treasury daily rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/daily-treasury-rates))
- **BLS** CPI (energy/gasoline subindexes) ([BLS CPI Summary](https://www.bls.gov/news.release/cpi.nr0.htm))
- **EIA** Hormuz chokepoint and STEO ([EIA Hormuz](https://www.eia.gov/todayinenergy/detail.php?id=65504), [EIA STEO](https://www.eia.gov/outlooks/steo/report/global_oil.php))
- **BIS** working papers on term premium, swap spreads, QT mechanics ([BIS WP993](https://www.bis.org/publ/work993.pdf), [BIS WP705](https://www.bis.org/publ/work705.pdf), [BIS Quarterly Review on QT](https://www.bis.org/publ/qtrpdf/r_qt2309d.htm))

Secondary/market color: Reuters, CNBC, Bloomberg-sourced reporting on convexity, auctions, and Iran/oil headlines.

---

## C · DATA VERDICT BOARD (consolidated)

| Tile | Best FREE series (exact ID) | Cadence | Current value (date) | Feed-state | Note |
|---|---|---|---|---|---|
| 3m bill yield | **DGS3MO** | Daily | 3.78% (2026-06-11) | live | Anchored to target band; front-end demand strong ([FRED](https://fred.stlouisfed.org/series/DGS3MO)) |
| 2y yield | **DGS2** | Daily | 4.05% FRED / 4.09% desk live (2026-06-11) | live | Policy-pinned; weak Mar auctions ([FRED](https://fred.stlouisfed.org/series/DGS2)) |
| 5y yield | **DGS5** | Daily | 4.18% (2026-06-11) | live | Convexity-sensitive belly; 4.35% May high ([FRED](https://fred.stlouisfed.org/series/DGS5)) |
| 10y yield | **DGS10** | Daily | 4.45% FRED / 4.49% desk live (2026-06-11) | live | The anchor; restrictive corridor ([FRED](https://fred.stlouisfed.org/series/DGS10)) |
| 30y yield | **DGS30** | Daily | 4.95% (2026-06-11) | live | Long-end battleground; softest auction demand ([FRED](https://fred.stlouisfed.org/series/DGS30)) |
| 2s10s slope | **T10Y2Y** | Daily | +0.39% / +40bp (2026-06-12) | live | Dis-inverted; positive sign restored ([FRED](https://fred.stlouisfed.org/series/T10Y2Y)) |
| 10y−3m slope | **T10Y3M** | Daily | +0.70% / +77bp (2026-06-12) | live | Steeper than 2s10s; bear-steepener shape ([FRED](https://fred.stlouisfed.org/series/T10Y3M)) |
| 10y − Fed funds | **T10YFF** | Daily | +0.83% (2026-06-11) | live | Positive; policy below long-rate ([FRED](https://fred.stlouisfed.org/series/T10YFF)) |
| Real 10y | **DFII10** | Daily | +2.16% (2026-06-11) | live | Deeply restrictive ([FRED](https://fred.stlouisfed.org/series/DFII10)) |
| 10y breakeven | **T10YIE** | Daily | 2.31% (2026-06-12) | live | Elevated, not de-anchored ([FRED](https://fred.stlouisfed.org/series/T10YIE)) |
| 5y5y fwd inflation | **T5YIFR** | Daily | 2.23% (2026-06-12) | live | Long-run anchor holding ([FRED](https://fred.stlouisfed.org/series/T5YIFR)) |
| Effective Fed funds | **DFF** | Daily | 3.62% (2026-06-11) | live | Overnight policy rate ([FRED](https://fred.stlouisfed.org/series/DFF)) |
| Overnight SOFR | **SOFR** | Daily | 3.60% (2026-06-11) | live | Calm; inside band, no repo stress ([FRED](https://fred.stlouisfed.org/series/SOFR), [NY Fed](https://www.newyorkfed.org/markets/reference-rates/sofr)) |
| IORB | **IORB** | Daily | 3.65% (effective 2026-06-15) | live | Interest on reserve balances ([FRED](https://fred.stlouisfed.org/series/IORB)) |
| ON RRP award rate | **RRPONTSYAWARD** | Daily | 3.50% (2026-06-12) | live | Bottom of corridor ([FRED](https://fred.stlouisfed.org/series/RRPONTSYAWARD)) |
| 10y term premium (ACM) | **NY Fed ACM CSV (TERMYld field; ACMTP10 not verified on FRED)** | Daily file (monthly in current CSV release) | 0.67% (2026-05-29) | source_identified / latest_published | Use NY Fed CSV directly ([NY Fed ACM CSV](https://www.newyorkfed.org/medialibrary/media/research/data_indicators/acmPlot_data.csv)) |
| 10y term premium (KW) | **THREEFYTP10** | Weekly-to-daily | 0.80% (2026-06-05) | latest_published | Survey-augmented; converged w/ ACM now ([FRED](https://fred.stlouisfed.org/series/THREEFYTP10)) |
| Overnight RRP usage | **RRPONTSYD** | Daily | $0.454bn (2026-06-12) | live | Drained to ~zero; buffer gone ([FRED](https://fred.stlouisfed.org/series/RRPONTSYD)) |
| Bank reserves | **WRESBAL** | Weekly | $3.081tn (2026-06-10) | latest_published | Marginal QT cushion now ([FRED](https://fred.stlouisfed.org/series/WRESBAL)) |
| TGA | **WTREGEN** | Weekly | $828.1bn (2026-06-10) | latest_published | Reserve-drain/offset ([FRED](https://fred.stlouisfed.org/series/WTREGEN)) |
| Fed balance sheet | **WALCL** | Weekly | $6.725tn (2026-06-10) | latest_published | QT ended 1-Dec-2025; stable ([FRED](https://fred.stlouisfed.org/series/WALCL)) |
| 30y mortgage rate | **MORTGAGE30US** | Weekly (Thu) | 6.52% (2026-06-11) | latest_published | MBS convexity / borrower-rate anchor ([FRED](https://fred.stlouisfed.org/series/MORTGAGE30US)) |
| Auction microstructure | **TreasuryDirect / Fiscal Data API** | Per-auction | 6/10 10y: 2.57 b/c, 4.538% HY, $30.4bn indirect; 6/11 30y: 2.33 b/c, 5.020% HY, $13.2bn indirect | latest_published | b/c and bidder takedown free; **tails require contemporaneous WI yields — no free real-time WI feed** ([Fiscal Data API](https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/od/auctions_query)) |
| **MOVE index (rate vol)** | **NONE — ICE-licensed** | Daily EOD via aggregators only | ~65.7 (17 Apr 2026, Convex 3rd-party) | **no-free-feed** | **THE critical gap. See flag below.** |
| SOFR swap spreads | **No official free real-time series** | Live market | placeholder only | **no-free-feed** | FRED swap series discontinued; live OIS swap rates require paid/venue data ([FRED swaps category](https://fred.stlouisfed.org/categories/32299)) |
| Fed-funds futures probabilities | **No official free real-time curve** | Live market | "no 2026 cuts priced; ~37% Oct hike" (desk live) | **no-free-feed** | CME FedWatch and Polymarket are public proxies, not clean time series |

> **CRITICAL — MOVE index feed-state.** The ICE BofA MOVE index (the benchmark *implied rate-volatility* gauge, the "VIX of bonds") has **no free real-time feed**. It is **not carried on FRED**. ICE licenses it as a real-time/intraday product through ICE Data Indices / ICE Consolidated Feed ([ICE](https://developer.ice.com/fixed-income-data-services/catalog/ice-data-indices-move-index)). Free *delayed/EOD* values exist on third-party aggregators (Investing.com shows a related MERMOVE1M series; Convex republishes a daily value, e.g. **~65.7 on 17 Apr 2026**) but these are **not first-party, not real-time, and may carry redistribution limits** ([Investing.com](https://uk.investing.com/indices/merrill-lynch-move-index-1-month-historical-data); [Convex MOVE 2026-04-17](https://convextrade.com/metrics/move-index)). **Verdict: `no-free-feed` for real-time; `latest_published` at best via aggregator EOD.** This is the most important data gap on the desk — in a convexity-amplified regime, *rate vol is the variable you most want and the one you cannot get free in real time.* All three council models independently flagged this. `[HARD]` (H)

---

## D · SCENARIO MATRIX (6 scenarios)

| # | Scenario | Triggers | Level move (10y, 30y) | Slope move | Historical analogue (range/date) | Lead indicators | Falsifiers |
|---|---|---|---|---|---|---|---|
| **1** | **Base case: realized oil-inflation shock persists** | Hormuz partial restriction; Brent ~$85–100; CPI stays ~4%; Fed holds, hike risk simmers | Range-bound 10y 4.4–4.7%, biased up; 30y 4.9–5.2% | Mild bear-steepener; 2s10s +40→+60bp | 2022–23 hiking late-stage; Treasury archive shows 2y rose from 1.95% (2022-03-16) to 5.05% (2023-03-08), +310bp front-end ([Treasury daily rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/daily-treasury-rates)) | CPI/energy prints; FedWatch hike odds; auction tails; T10YIE | Clean CPI miss <3.5%; oil sustained <$75; T5YIFR drops <2.2% |
| **2** | **Upside for bonds: de-escalation / disinflation — BULL-STEEPENER** | Durable US–Iran peace; Hormuz reopens; Brent <$75; energy disinflation; cuts return to FedWatch | 10y → 3.9–4.2%; 30y → 4.4–4.7% | **Bull-steepener** (front falls on cuts faster than long) | 1990 Gulf relief: 10y fell from 8.91% (1990-08-22) to 8.05% (1991-01-17), −86bp; 1990–91 also saw 2y fall in parallel as Fed eased ([Treasury daily rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/daily-treasury-rates)) | Brent <$80; cut odds reappear on FedWatch; breakevens fall | Oil re-spikes; CPI stays sticky despite lower oil; Fed rejects cuts |
| **3** | **LEFT TAIL: sticky-inflation + supply glut → BEAR-STEEPENER / term-premium spike** | Oil stays high *and* deficits/supply overwhelm demand; foreign bid fades; auctions fail repeatedly; ACM/KW premium ↑ | 10y → 5.4–6.2% (+100–175bp); 30y → 6.2–7.0% (+125–200bp) | **Bear-steepener** — 30y leads, 2s10s +80bp+, 5s30s widens | 2023 Treasury Tantrum: 10y rose from 3.97% (2023-07-31) to 4.98% (2023-10-19), +101bp; 30y from 4.02% to 5.11%, +109bp ([Fed Tantrum note](https://www.federalreserve.gov/econres/notes/feds-notes/the-treasury-tantrum-of-2023-20240903.html)); 2013 Taper Tantrum 10y +132bp ([Treasury archive](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/daily-treasury-rates)); 1990 oil-driven 30y to 9.17% | Rising auction tails + dealer takedown; ACMTP10 rising >+100bp; MBS convexity selling; SOFR creep; T5YIFR breaking >2.5% | Strong auctions; foreign indirect bid returns (cf. 20y 72% indirect April); term premium falls; Fed slows QT (already done) or starts RMPs |
| **4** | **Escalation safe-haven shock — BULL-FLATTENER** | Ceasefire collapses; regional war widens; equity plunge; oil spike with growth fear dominating | 10y → 4.0–4.3% (flight-to-quality) | **Bull-flattener** (long rallies on haven bid despite inflation) | 2023 Israel-Hamas haven bid that capped the 5% selloff; 1990 initial Gulf shock briefly saw similar haven flows ([Reuters via UBS 2023-10-24](https://www.ubs.com/global/en/wealthmanagement/insights/chief-investment-office/house-view/daily/2023/latest-24102023.html)) | Equity vol spike; gold surge; oil spike *with* falling long yields; VIX rising | Inflation channel dominates haven channel; long yields rise *with* oil |
| **5** | **Fed capitulates and HIKES on oil-inflation — BEAR-FLATTENER then steepener** | CPI breaks >4.5%; T5YIFR de-anchors >2.5%; Fed delivers 25–50bp | Front +; 10y to 4.7–4.9%; 30y +50–100bp | **Bear-flattener** first (front leads), then bear-steepener | 2022 front-led bear-flattening / inversion onset (DGS2 +310bp Mar-2022→Mar-2023) | T5YIFR breakout; FedWatch hike >50%; hawkish SEP revision; wage inflation acceleration | Fed holds despite hot CPI (current revealed preference); market does the tightening instead |
| **6** | **Plumbing accident — repo/funding seizure** | RRP at zero + reserves dip below "ample" → SOFR spike; dealer balance sheets jam at quarter-end | Volatile spike then Fed RMP intervention | Whippy; front-end dislocation; swap spreads gap more negative | Sept-2019 repo spike (conceptual analogue); Mar-2020 dash-for-cash | SOFR > IORB band top; negative swap spreads deepening; failed auction; WRESBAL approaching scarce zone | SOFR stays inside corridor; Fed RMPs pre-empt; reserves stable |

**Key asymmetry across scenarios:** a de-escalation rally is front-end led if it revives cuts (bull-steepener), whereas an inflation/supply selloff is long-end led if it reprices term premium (bear-steepener). Falsification should focus on *directional consistency* across oil, breakevens, real yields, and the Fed path — a single lower 10y yield print is not enough to call a bullish regime if 2y and breakevens are still rising. The live environment is unusually two-sided because the same geopolitical event can be a stagflation shock, a safe-haven shock, or a term-premium shock depending on whether oil, expectations, or risk appetite dominates. Scenario probabilities are deliberately omitted: the live environment lacks a free real-time oil/order-flow feed, and false precision is worse than a well-specified trigger map. `[DIR]` (H)

---

## E · WINNERS / LOSERS (under the current regime)

### Winners

**Short duration / front end / floating-rate.** *Mechanism:* with the Fed on hold-to-hawkish and the curve positively sloped, the front end pays ~3.6–4.1% with minimal duration risk; floating-rate (SOFR-linked) instruments reset higher if the Fed hikes, capturing the upside without price loss. The worked-example math: a +100bp shock costs ~−1.88% in 2y vs −7.62% in 10y vs −13.77% in 30y. In a rising/sticky-rate regime, *carry beats duration*. `[DIR]` (H)

**TIPS over nominals.** *Mechanism:* in a *realized* inflation shock (energy CPI +23.5% y/y, gasoline +40.5% y/y), TIPS principal accretes with CPI, so they outperform matched nominal bonds when inflation surprises *high* — and breakevens at ~2.31% are not yet pricing the full realized-inflation risk, leaving a relative-value cushion. *Caveat:* TIPS lose this edge if oil/breakevens collapse in a de-escalation. `[DIR]` (M-H)

**Curve steepeners (long-end-led).** *Mechanism:* fiscal/supply/term-premium dynamics structurally favor a steeper curve; a 2s10s or 5s30s steepener profits as the long end cheapens relative to the policy-pinned front end. `[DIR]` (M-H)

**Belly duration as the compromise trade.** Worked example: 5y carry-plus-roll ~4.34% under an unchanged curve, with less term-premium tail risk than 30s. But a +100bp shock still costs −4.35% before carry. `[DIR]` (M)

**Auction concession buyers.** *Mechanism:* when weak auctions tail and then stabilize, the new-issue cheapness captures alpha; pre-auction longs lose when dealer balance-sheet constraints force bigger concessions. `[DIR]` (M)

**Repo lenders and collateral-rich accounts** during SOFR/repo stress episodes — cash earns more against Treasury collateral. `[DIR]` (M-H)

### Losers

**Long duration / the long bond.** *Mechanism:* the 30y carries the most duration risk *and* the most exposure to term-premium repricing, supply glut, and weak auction demand. Worked example: a +100bp shock costs −13.77% in 30y vs −7.62% in 10y. The long bond is the cheapest segment for a reason. *Caveat:* in scenario 4 (bull-flattener), long duration is the *winner* on a haven bid — high-variance loser, not a one-way bet. The convexity asymmetry means a −100bp rally in 30s gains +17.32%, so tail-long-duration is asymmetrically rewarded if a Fed-cut surprise materializes. `[DIR]` (M)

**MBS (negative convexity) — the headline loser on volatility.** *Mechanism:* in a rising/volatile-rate regime, MBS extend duration just as you don't want them to, fall faster than vanilla bonds, and force convexity-hedging selling that compounds the loss; ~$2tn of near-par 5%+ coupons makes the negative convexity acute. The May 2026 episode is the live evidence (Goldman's ~$40bn-equivalent estimate). *Caveat:* the high coupons offer fat carry if rates *stabilize* — MBS are a loser on *volatility*, not on *level*. `[DIR]` (H)

**Nominal long-end holders without inflation protection.** They bear both the duration loss and the inflation erosion of fixed coupons — the worst of both legs of a stagflationary supply shock. `[DIR]` (M)

**Pre-auction long-duration positions** — dealer balance-sheet constraints can force outsized new-issue concessions; the 30y 6/11 auction at 5.020% high yield is the recent example. `[DIR]` (M)

**Leveraged RV books in repo-stress episodes** — financing costs can jump faster than asset carry, particularly at quarter-ends with G-SIB capital-ratio printings. `[DIR]` (M-H)

**Gold as a pure rate-hedge** — the decoupling from real yields means gold's traditional inverse-real-yield mechanic is currently overwhelmed by geopolitical/de-dollarization bid; if real yields rise *and* geopolitical risk eases simultaneously, gold can lose on both legs. `[DIR]` (M)

---

## F · LAYMAN ANCHOR BANK

| Number | Plain meaning | Reference scale |
|---|---|---|
| **10y at 4.49%** | What it costs the US government (and roughly the economy) to borrow for 10 years | 2020 low ~0.5% (free money) · 2010s "new normal" ~2% · 2023 high ~5.0% · 1981 high ~15.8% (inflation era). 4.49% = "elevated but normal — back to pre-2008 levels." |
| **2s10s at +40bp** | The curve slopes *up* again — long rates above short rates | −50bp = deeply inverted (recession-warning) · 0 = flat · +250bp = steep/healthy. +40bp = "barely positive, just normalized — but the *type* of steepening matters more than the sign." |
| **10y−3m at +77bp** | Long rates exceed near-cash rates | Negative = classic recession signal · 0 = flat · +200bp = steep/healthy. Positive slope usually lowers simple curve-model recession pressure, but dis-inversion can still be late-cycle. |
| **Real 10y (DFII10) +2.16%** | The *inflation-adjusted* cost of 10y money — the true tightness gauge | <0% = free money (2020) · 0% = neutral · 1% = neutral-ish · 2%+ = restrictive (now). "Policy is squeezing." |
| **3m bill 3.71% (desk) / 3.78% (FRED)** | What near-cash / T-bills pay; tracks the Fed | Tracks Fed-funds 3.50–3.75%. "Cash pays ~3.7% risk-free." |
| **2y at 4.05–4.09%** | The market's rough two-year Fed-policy expectation plus risk premium | Above overnight DFF 3.62% = front end prices policy risk above current cash. |
| **Term premium +0.67–0.83%** | Extra yield investors demand just for *locking up money long*, beyond rate expectations | Negative (2010s, −0.5%) = investors paid up for safety · 0 = neutral · +0.67–0.83% = "premium is back, ~35th %ile of history." |
| **Breakeven 10y 2.31% / 5y5y 2.23%** | The market's *expected inflation* baked into bond prices | <2% = below Fed target · 2% = on target · >2.5% = worry zone. 2.31% = "above target, not panicking." |
| **SOFR 3.60% / IORB 3.65%** | Overnight Treasury repo / interest-on-reserves | Inside Fed band 3.50–3.75% = calm · SOFR > IORB sustained = funding stress (Sept-2019 SOFR spike hit ~10%). "Plumbing is calm." |
| **RRP $0.454bn** | Spare cash parked at the Fed overnight — the system's "shock absorber" | >$2,000bn (2023 peak) = huge buffer · ~$0 (now) = buffer empty. "The cushion is gone." |
| **Reserves $3.081tn** | Bank reserve balances at the Fed | Pre-COVID ~$1.6tn was "ample"; peak ~$4.2tn in 2021. $3.08tn = "still large but now the marginal buffer." |
| **Fed balance sheet $6.725tn** | Total Fed assets | Pre-COVID ~$4tn · 2022 peak $8.96tn · now $6.725tn. QT formally ended 1-Dec-2025. |
| **30y mortgage 6.52%** | What households pay to borrow long-term against a home | 2021 low ~3% · 2023 peak ~7.8% · now ~6.5%. Tracks the 10y plus the MBS-spread + convexity uplift. |
| **MOVE index ~65–80** | Implied rate volatility — the "VIX of bonds" | <50 = calm · 80 = elevated · 120+ = crisis (Mar-2020, Mar-2023 SVB). ~65–80 = "watchful, not panicking." *No free real-time feed.* |
| **Gold $4,365** | Per troy ounce — global safe-haven / fiat-debasement gauge | 2020 ~$1,900 · 2024 ~$2,700 · 2026 record ~$4,365. Up ~130% from 2020 lows, *despite* high real yields → signals geopolitical/de-dollarization bid overwhelming opportunity-cost. |
| **Brent $87** (desk live) | Global oil benchmark per barrel | 2020 low ~$20 · 2022 Russia spike ~$120 · 2024 ~$80 · 2026 spike to ~$101, now $87 on ceasefire. |

**How a layperson should read these four levers together:** cash rates say what money earns today; 2y says what the Fed may do; 10y says the economy's long discount rate; breakevens say how much inflation compensation is embedded. The curve slope is a weather forecast, not a thermometer — it tells you how markets expect today's policy to affect future growth and inflation. The real yield is the "after-inflation rent" the government pays to borrow money, and it matters for every asset that competes with safe real return. RRP and reserves are plumbing numbers, but they matter because a market can have the right macro view and still lose money if financing becomes scarce. Auction demand is the market's periodic exam: if investors demand bigger concessions to absorb duration, term premium can rise even when the Fed is not hiking. `[DIR]` (H)

---

## G · LAYMAN KIT (9 chapter concepts)

### 1. The yield curve & inversion

**Analogy:** a savings-account menu. Normally a 10-year CD pays more than a 3-month one (you lock money up longer, you get paid more). When the 3-month pays *more* than the 10-year, the menu is "inverted" — the bank is signaling it expects to cut rates soon (i.e., a slowdown).

**Worked example:** 10y 4.49% − 3m 3.71% = +0.78pp → upward-sloping, *dis-inverted*. A year ago it was negative (inverted).

**Top-3 misconceptions:**
1. "Inversion *causes* recession" — no, it *forecasts* by predicting Fed cuts.
2. "Dis-inversion = all-clear" — historically recessions often start *after* the curve re-steepens, not during inversion. The *type* of steepening matters: bear-steepener (current) ≠ bull-steepener (classic pre-recession).
3. "One spread is the curve" — 2s10s and 10y3m can disagree; watch both.

### 2. Real vs nominal yields

**Analogy:** your raise vs your raise *after* the grocery bill went up. A 5% raise with 3% inflation is really a 2% raise.

**Worked example:** nominal 10y 4.45% − breakeven inflation 2.31% ≈ real 10y 2.16% (the DFII10 print, which essentially matches the math).

**Top-3 misconceptions:**
1. "High nominal = tight policy" — not if inflation is higher; *real* yield is the tightness gauge.
2. "Real yields can't be negative" — they were for years (you *lost* purchasing power to hold safe bonds).
3. "TIPS yield = real yield exactly" — close, but TIPS carry a small liquidity premium and inflation-risk premium.

### 3. Term premium

**Analogy:** hazard pay. The *extra* interest a friend demands to lend you money for 10 years rather than rolling 1-year loans — compensation for "what if rates/inflation surprise me over a decade?"

**Worked example:** 10y 4.45% ≈ ~3.78% (expected average short rate) + ~0.67% (ACM term premium). The premium is the "uncertainty tax."

**Top-3 misconceptions:**
1. "It's observable" — no, it's a *model estimate* (ACM and Kim-Wright disagree by tens of basis points historically; agree within ~13bp now).
2. "It's always positive" — it was *negative* for most of the 2010s.
3. "Higher premium = higher rate expectations" — no, it's the part of the yield that is *not* rate expectations.

### 4. Duration

**Analogy:** a seesaw — the longer the plank (maturity), the more the far end moves when rates tip. A 10y bond's price moves ~8% for a 1pp rate move; a 3m bill barely budges.

**Worked example:** +100bp on a 10y par bond (duration ~8.00) ≈ −7.62% price; on a 30y (duration ~15.54) ≈ −13.77%; on a 2y (duration ~1.88) ≈ −1.88%. Same rate view, very different P&L by tenor.

**Top-3 misconceptions:**
1. "Bonds are safe" — long bonds can lose 20%+ in a year (2022).
2. "Maturity = duration" — duration is shorter than maturity for coupon bonds.
3. "Duration is constant" — it changes with yields (and *extends* badly for MBS, the opposite of what you want).

### 5. Convexity

**Analogy:** a car suspension — convexity softens (or amplifies) price reactions as rate moves get large.

**Worked example:** a 30y par-bond loses −13.77% for +100bp but *gains +17.32% for −100bp* — the price function is convex, so large rallies help more than equal-sized selloffs hurt in a *plain* Treasury. This is exactly *opposite* for MBS, which extend duration when rates rise (hurting you more) and shorten when rates fall (helping you less) — *negative convexity*.

**Top-3 misconceptions:**
1. "Convexity is always free" — no, you pay for it via lower yield in option-free Treasuries; you *give it up* (and get extra yield) in MBS.
2. "MBS convexity behaves like Treasury convexity" — opposite sign; the reason MBS amplify selloffs.
3. "Convexity matters only to options desks" — false; it's the dominant amplifier in tail moves, even for outright bond holders.

### 6. Breakevens / inflation expectations

**Analogy:** the over/under line on next decade's inflation — the gap between a normal bond and an inflation-protected one.

**Worked example:** nominal 10y 4.45% − TIPS 10y 2.16% = ~2.29% breakeven (FRED prints T10YIE 2.31%; the small difference is liquidity/risk-premium noise).

**Top-3 misconceptions:**
1. "Breakeven = pure forecast" — it includes an inflation-*risk* premium, so it slightly overstates.
2. "Rising breakeven = bad" — modestly rising toward target can be healthy; the de-anchoring threshold is roughly T5YIFR >2.5%.
3. "5y5y = near-term" — no, it's inflation *5 to 10 years out*, the long-run anchor gauge.

### 7. Fed policy & the dots

**Analogy:** the captain setting the ship's speed (the funds rate) and publishing a chart of where each officer thinks speed should go (the SEP "dot plot").

**Worked example:** funds target 3.50–3.75%; March 2026 SEP raised 2026 PCE to 2.7%; market prices *no cuts, ~37% Oct hike odds.* The market is *more hawkish* than the median dot.

**Top-3 misconceptions:**
1. "Dots are promises" — they're forecasts, revised constantly.
2. "Fed controls all rates" — it controls the *front end*; the long end is the market's (and is currently telling a different story).
3. "Fed always cuts in a slowdown" — not in a *supply shock* with high inflation (the current bind).

### 8. QT / RRP / reserves

**Analogy:** the banking-system bathtub. Fed assets are the water source; reserves, RRP, TGA, currency-in-circulation are basins/drains.

**Worked example:** Fed assets $6.725tn, reserves $3.081tn, TGA $828bn, RRP $0.454bn. Further QT would have less RRP water to drain before reserves become the marginal adjustment item. QT formally ended 1-Dec-2025; the market is now watching for the first "reserve management purchases" (RMPs) — technical, *not* QE.

**Top-3 misconceptions:**
1. "QT = rate hikes" — separate tools; QT works on the *balance sheet / long end*.
2. "Ending QT = QE" — no, it's neutral "reserve management."
3. "QT only drains banks" — it first drained the RRP buffer; further drains hit reserves directly (the "liquidity cliff" that forced QT's end).

### 9. Auctions & supply

**Analogy:** the government holding a regular bake sale of IOUs — if too few buyers show up, it has to cut the price (raise the yield), and the "dealers" (banks required to attend) get stuck with the leftovers.

**Worked example:** a "tail" = the sale clears at a *higher* yield than expected (weak demand); the 6/11 30y reopening cleared at 5.020% with bid-to-cover 2.33×. The March 2026 2y tailed +1.8bp with dealers forced to take 2.25× their usual share.

**Top-3 misconceptions:**
1. "Auctions always succeed" — they can be ugly; demand can fade.
2. "Foreign buyers always show" — indirect (foreign) bids swing a lot (April 20y had 72% indirect, while March 5y had a 15.6% dealer takedown — bifurcated demand).
3. "Supply doesn't move yields" — a supply glut *raises* term premium and yields; the 2023 Treasury Tantrum is the live template.

### Bonus 10. Safe-haven demand

**Analogy:** in a storm, money runs to the strongest shelter — and US Treasuries are the global shelter, so their price rises (yield falls) in a crisis.

**Worked example:** during the Oct-2023 Israel-Hamas shock and the early-2026 Iran escalations, flight-to-quality capped Treasury selloffs even amid high inflation. The June 2026 ceasefire headlines did the *reverse* — pulled Brent down and let yields drift down on disinflation hope, not haven demand.

**Top-3 misconceptions:**
1. "Crisis always lowers yields" — not if the crisis is *inflationary* (oil); the two forces fight.
2. "Gold and Treasuries always move together as havens" — gold can soar (record $4,365) while real yields stay high (2026's decoupling).
3. "Safe-haven = no risk" — havens can still lose to inflation.

### Bonus 11. Repo / SOFR

**Analogy:** an overnight pawn shop for Treasuries — borrow cash overnight by leaving a Treasury as collateral.

**Worked example:** SOFR 3.60%, IORB 3.65%, ON RRP award 3.50% — secured overnight market trading inside the administered-rate corridor (calm). A SOFR spike above IORB sustained = repo stress (Sept-2019).

**Top-3 misconceptions:**
1. "Repo is only a back-office issue" — it's the plumbing that finances the dealer balance sheet that absorbs auction supply.
2. "SOFR cannot spike if the Fed is on hold" — false; it can spike on collateral scarcity or balance-sheet constraints independently of policy.
3. "All Treasury collateral is equally easy to finance" — "specials" (on-the-run bonds in demand for shorts) can trade meaningfully below GC.

---

## H · COUNCIL & HONEST GAPS

### Open Debate 1 — Is the positive term premium back *for good*?

**Camp A (regime change):** The August-2024 durable cross above zero, sustained through 2026, is a structural break driven by QT returning duration to private hands, persistent ~6%-of-GDP deficits, higher r-star, and reduced foreign/reserve-manager demand — the premium will stay positive and could rise further. `[DIR]` (M)

**Camp B (mean-reversion skeptics):** The estimate is a *model residual*, sample-sensitive and in-sample; ACM at +0.67% is only the ~35th percentile of its full distribution and could revert toward zero if a growth scare brings the safe-haven bid back and the Fed eases. `[DIR]` (M)

**Camp C (model-agnostic):** ACM and KW currently agree within ~13bp (a tight gap by historical standards), so *whatever* the level, the *direction* (out of the negative ZIRP regime) is robust — but don't trade the point estimate ([Fed FEDS Note](https://www.federalreserve.gov/econres/notes/feds-notes/robustness-of-long-maturity-term-premium-estimates-20170403.html)). `[DIR]` (M)

### Open Debate 2 — Does dis-inversion still signal recession?

**Camp A (signal is broken/delayed):** The 2022–24 inversion *failed* to produce a recession; structural forces (excess savings, fiscal support, strong labor) defanged the indicator, so the current dis-inversion carries little forecasting weight. `[DIR]` (M)

**Camp B (the lag is the point — watch the re-steepening):** Historically recessions often begin *after* the curve re-steepens (bull-steepens) as the Fed starts cutting — so dis-inversion is not the all-clear; it's potentially the *late-cycle warning*, and the current dis-inversion being a *bear*-steepener (not bull) is the crucial distinction that *delays* but does not eliminate the signal ([NY Fed YCFAQ](https://www.newyorkfed.org/research/capital_markets/ycfaq); [Reuters 2024-07-29](https://www.reuters.com/markets/rates-bonds/us-yield-curve-nears-flip-with-jury-out-recession-signal-2024-07-29/)). `[DIR]` (M-H)

**Camp C (regime-dependent):** The signal's reliability depends on *why* it inverted/dis-inverted; a supply-shock-driven curve carries different information than a demand-driven one — apply with judgment, not mechanically ([Chicago Fed Letter](https://www.chicagofed.org/publications/chicago-fed-letter/2018/404)). `[DIR]` (M)

### Open Debate 3 — Will the Fed actually HIKE on oil-inflation?

**Camp A (hold / look-through — inflation-dominant but credibility-protected):** Oil is a *supply* shock; hiking into it deepens the growth hit without addressing the cause — the Fed will hold and look through, as its revealed preference (96–98% June hold, no hikes delivered yet) shows. `[DIR]` (M)

**Camp B (hike if it de-anchors):** If T5YIFR breaks above ~2.5% or CPI re-accelerates past 4.5%, the Fed hikes to defend credibility — the ~37% October hike odds price exactly this risk. `[DIR]` (M)

**Camp C (the market does the tightening):** As in Oct-2023, rising long yields *substitute* for hikes ("equivalent of a 25bp hike" was the line then), so the Fed can stay on hold while the bond market does the tightening for it ([S&P Global 2023-10-19](https://www.spglobal.com/market-intelligence/en/news-insights/articles/2023/10/us-treasury-yields-surge-cooling-fed-s-rate-hike-prospects-77991418)). `[DIR]` (M)

### Open Debate 4 — Is MBS-convexity hedging *systemically* destabilizing now?

**Camp A (the Beast is real and underpriced):** ~$2tn of near-par 5%+ MBS, Goldman's ~$40bn-equivalent May estimate, and Barclays calling it "more destabilizing than 2023" mean any decisive yield break triggers self-reinforcing flows the market underestimates. `[DIR]` (M)

**Camp B (transient / QT-linked):** The amplification was partly QT pushing MBS negative convexity into the market; with QT over, the flow should fade and the effect is a *volatility* event, not a *level* regime. `[DIR]` (M)

### Open Debate 5 — Are swap spreads signaling scarcity or merely balance-sheet cost?

**Camp A (Treasury-specific cheapness):** Treats negative swap spreads as Treasury-specific cheapness from supply, repo, and dealer balance-sheet constraints — i.e., a *buy signal* on Treasuries relative to swaps. `[DIR]` (M)

**Camp B (structural post-crisis feature):** Treats them as a structural post-crisis feature of collateralized OIS discounting, bank leverage rules, and Treasury specialness rather than a simple buy signal — the level is the *new normal*. `[DIR]` (M)

**Honest gap:** no official free real-time SOFR swap-spread feed exists; levels and intraday moves require a licensed source. `[HARD]` (H)

### Open Debate 6 — Are we in a bull-steepener or bear-steepener?

**Camp A (bear-steepener — Opus/GPT council majority):** The front end has not collapsed (DGS2 still 4.05%, no Fed cuts priced) and the long end has cheapened (DGS30 ~4.95%, weak auctions, term premium positive) — this is the textbook bear-steepener (long-led repricing on supply/term-premium dynamics). `[DIR]` (M-H)

**Camp B (bull-steepener — Gemini-style):** The dis-inversion itself can be read as the classic late-cycle bull-steepener that precedes recession, with the front-end fall yet to materialize as the Fed eventually pivots. `[DIR]` (L-M)

**Synthesis verdict:** strong weight on Camp A; the current evidence requires a front-end collapse that has not happened to qualify as a bull-steepener. Camp B's framing may become correct *later* if the Fed pivots, but it is not the regime *today*.

### Consolidated NO-FREE-FEED list (the honest gaps)

1. **MOVE index (implied rate volatility)** — *the* critical gap. No FRED series; ICE-licensed real-time; only delayed/EOD via third-party aggregators (Investing.com, Convex, TradingView). In a convexity-amplified regime this is the variable you most need and can least get free. `[HARD]` (H)
2. **SOFR swap spreads (real-time)** — FRED's classic swap-rate series is discontinued; live OIS swap rates require paid/venue data ([FRED swaps category](https://fred.stlouisfed.org/categories/32299)). Reconstructible from DGS-series minus a paid swap-rate source. `[HARD]` (H)
3. **Fed-funds-futures implied probability distribution (hike/cut odds)** — no first-party free real-time series; public proxies are CME FedWatch and Polymarket (not official, not a clean time series). FRED gives only the target band (DFEDTARU/DFEDTARL). `[DIR]` (M)
4. **Auction tails (when-issued data)** — TreasuryDirect publishes per-auction results free; bid-to-cover and bidder takedown are free via Fiscal Data API; **tails require contemporaneous when-issued yields from market data and are not available on a free real-time feed**. `[DIR]` (M)
5. **ACMTP10 / THREEFYTP10 latency** — both are free (NY Fed CSV / FRED) but `latest_published`, not live; ACM daily lags by days, KW is weekly-to-daily with a lag. Fine for regime reading, not intraday. `[DIR]` (M)
6. **Christensen–Rudebusch (CR) decomposition** — free from SF Fed but published monthly with lag (`latest_published`). `[DIR]` (M)
7. **Intraday repo/SOFR distribution stress** — SOFR EOD is free (FRED, NY Fed); the *intraday* percentile distribution and bilateral-repo stress signals are not free in real time. `[DIR]` (M)
8. **DXY / broad dollar real-time spot** — no official free real-time feed; the desk's "DXY ~100" is a live-environment input. `[DIR]` (M)
9. **Spot gold real-time** — no official free real-time feed; the desk's "$4,365" is a live-environment input. `[DIR]` (M)
10. **MBS option-adjusted spread / convexity analytics** — proprietary; paid only. `[HARD]` (H)
11. **Brent intraday** — EIA publishes daily; intraday futures require a paid feed. `[DIR]` (M)
12. **CFTC COT positioning** — free but delayed (weekly with one-week lag). `[DIR]` (M)

---

## I · SUPPORTING AUDIT FILES (sandbox workspace)

The GPT-5.5 contribution saved the following machine-readable working files:
- `/home/user/workspace/rates_recent_auctions.json` — Fiscal Data API auction microstructure (6/10 10y, 6/11 30y, etc.)
- `/home/user/workspace/rates_acm_latest.json` — ACM CSV snapshot summary
- `/home/user/workspace/rates_treasury_analogues.json` — historical analogue date/yield pairs (1990 Gulf, 2013 Taper, 2023 Tantrum)
- `/home/user/workspace/rates_math_examples.json` — duration/convexity/carry+roll worked examples by tenor

---

## J · DESK-SPECIFIC EDGES — INTEGRATED RESTATEMENT

### (a) Term-premium decomposition (ACM vs Kim-Wright) — how to read it now

ACM 0.67% (2026-05-29) and KW 0.80% (2026-06-05) place the 10y term premium solidly positive and within ~13bp of each other — well inside the historical ~26bp average gap between the two and well below the model-disagreement-noise threshold. Read the convergence as **the term-premium signal is robust to model choice right now** (the regime call is safe). The decomposition implies the 10y is roughly 80–85% expected-short-rate path plus 15–20% term-premium compensation — restrictive policy expectations doing most of the work, with positive premium providing a real-yield bonus that has been absent for most of the post-GFC era. The model-residual nature of term premium is the central caveat: use it as a *directional decomposition tool*, not a tradeable spread. The free Christensen-Rudebusch model provides a useful triangulation.

### (b) Auction tails / dealer takedown as a demand gauge

Bid-to-cover and bidder-category takedown are free via the Fiscal Data API; tails require contemporaneous when-issued yields not available on a free feed. The desk should track bid-to-cover decline + dealer-takedown rise as the composite "weakening demand" signal. Recent prints: 6/10 10y reopening b/c 2.57 with $30.4bn indirect (healthy); 6/11 30y reopening b/c 2.33 with $13.2bn indirect (adequate, not euphoric); March 2026 2y +1.8bp tail with directs collapsing to 16.5% (clear demand softness); April 20y 2.71x with 72% indirect (foreign bid intact for that tenor). The bifurcation is the read: foreign demand selectively strong, dealer-warehouse stress present at the long end.

### (c) Negative swap spreads & SOFR spikes as balance-sheet/collateral stress

Negative swap spreads (5y ~−29bp, 30y ~−78bp) are the *balance-sheet rental fee* dealers charge to hold Treasuries given post-2008 leverage rules; they are also amplified by pension/insurance pay-fixed demand (BIS WP705). eSLR relief 2025 narrowed but did not eliminate negativity. SOFR currently 3.60% inside the IORB 3.65% / RRP-award 3.50% corridor — no stress; but with RRP at $0.454bn the historical Sept-2019 cushion is gone, and a SOFR sustained-above-IORB print would be the canary. **Honest gap:** live swap spreads require paid data; FRED's classic swap-rate series is discontinued.

### (d) The curve-as-recession-lead debate post-dis-inversion

The 2022–24 inversion failed to produce a recession on the textbook timeline; the current dis-inversion is *bear*-led (long-end cheapening), not *bull*-led (front-end collapsing). Two of three council models treat this distinction as load-bearing for the recession-signal call: a bear-steepener is a *supply/term-premium* regime signal, not the classic pre-recession Fed-pivot bull-steepener. Watch the *quality* of the steepening, not its sign.

### (e) MBS-convexity hedging amplifying big moves

The single most important amplifier. ~$2tn near-par 5%+ MBS, Goldman ~$40bn-equivalent May 2026 selling, Barclays "more destabilizing than 2023." The QT linkage (Fed runoff of MBS shifted negative convexity into the market) is the mechanism that explains why this episode is more violent at the same yield level than 2023. With QT formally over since 1-Dec-2025, new MBS runoff has stopped, but the existing stock is the structural amplifier.

### (f) QT / RRP / reserves mechanics linking the Fed balance sheet to rate levels

Fed assets $6.725tn (from $8.96tn 2022 peak); reserves $3.081tn (still ample but now the marginal cushion); RRP $0.454bn (drained); TGA $828bn (variable offset). QT formally ended 1-Dec-2025; the system is now in "reserve management" mode, watching for first RMPs (Reserve Management Purchases — technical, *not* QE). The desk's mental model: any further Fed asset drain hits reserves directly now that RRP is depleted; the "liquidity cliff" risk forced QT's end and is the implicit floor on how restrictive the Fed can be on the balance-sheet axis.

---

## K · ONE-PAGE EXECUTIVE TAKEAWAY (build-ready summary)

The US Rates desk is operating in a **restrictive, dis-inverted, positive-term-premium regime** where (a) an Iran/Hormuz oil-supply shock has lifted realized inflation (May CPI +4.2%, gasoline +40.5%) and pinned the Fed hawkish (no 2026 cuts priced, ~37% Oct hike odds), keeping the front end at 2y 4.05% / 3m 3.78%; (b) the long end (10y 4.45–4.49%, 30y 4.95%) is contested by intermittent safe-haven duration grabs vs structural fiscal/supply/term-premium pressure, with the dis-inversion happening as a **bear-steepener** (long-led) rather than the classic pre-recession bull-steepener (front-led); (c) real yields are deeply restrictive (DFII10 +2.16%), the term premium is positive across both ACM (0.67%) and KW (0.80%) models that currently agree, and breakevens are elevated but not unanchored (T10YIE 2.31%, T5YIFR 2.23%), giving the Fed cover not to hike; (d) the plumbing is fragile — RRP drained, reserves the marginal QT cushion, QT formally over since 1-Dec-2025, MBS-convexity hedging is the dominant amplifier with ~$2tn near-par 5%+ coupons, and swap spreads remain negative across the curve as a balance-sheet rental fee; (e) the catalyst is two-sided — escalation = bear-flattener → bear-steepener with MBS amplification; de-escalation = bull-steepener with cuts returning to the path. The left tail is a 2023-tantrum analogue with 10y +100–175bp and 30y +125–200bp. The MOVE index is the most important data gap (no free real-time feed). Best winners under the current regime: short duration / front end / floating-rate, TIPS over nominals, curve steepeners (long-end-led). Best losers: long duration, MBS (negative convexity on volatility), nominal long-end without inflation protection.

---

*Synthesis register: sober, no hype. Disagreement preserved as a standing council, not resolved. All live-environment parameters treated as given and cross-checked against FRED/H.15/BLS/EIA/Fed sources where a public series exists. The "best of all three" approach: GPT-5.5's quantitative spine (duration math, auction microstructure, historical-analogue dates), Claude Opus 4.8's methodological depth (ACM vs KW, MBS-convexity Beast, swap-spread mechanics, gold-decoupling signal), and Gemini 3.1 Pro's pedagogical labels (named scenarios, plain-language framing). Prepared as the Model Council synthesis for the US Rates desk build, R-09 v2.*


---

## L · CURATOR'S QC & GAP-FILL (VegaReady, 2026-06-14 — not model content)
A content-QC pass over the council synthesis found it complete and internally consistent on the curve, term premium, valuation, plumbing (swap spreads / SOFR / QT-RRP / MBS convexity), the catalyst chains, and the layman kit. Four genuine positioning/plumbing gaps were identified and are filled below from current free sources so the §7 build is not thin. Each is tagged in-house and slots into **§2.7 Positioning/plumbing** (and the noted scenarios / data board).

### L.1 — The Treasury cash-futures BASIS TRADE (the missing systemic amplifier) — belongs in §2.7 + Scenario 6
The single biggest omission. Hedge funds run a **long-cash / short-futures** arbitrage on the small price gap, **financed in repo and levered heavily** — and it is now a first-order financial-stability risk the desk must track. `[DIR]` (H)
- **Scale:** hedge funds reached **10.3% of the Treasury cash market in Q1 2025** (above the 9.4% pre-pandemic peak); official data **undercounts basis positions by ~$1.4tn (end-2024)**, concentrated in Cayman-domiciled funds. `[HARD]` (M) ([Fed FEDS Notes on HF Treasury/repo positions, 2023–25](https://www.federalreserve.gov/econres/notes/feds-notes/recent-developments-in-hedge-funds-treasury-futures-and-repo-positions-20230830.html); [Fed cross-border basis-trail note 2025-10-15](https://www.federalreserve.gov/econres/notes/feds-notes/the-cross-border-trail-of-the-treasury-basis-trade-20251015.html))
- **Leverage/fragility:** **~73.8% of HF repo borrowing is at zero or negative haircuts** — extreme leverage with thin loss-absorption; a sharp move can force rapid unwind. `[HARD]` (M)
- **Official warning:** Fed Gov. Lisa Cook flagged that the growing basis trade can make the **$30tn market "more vulnerable to stress"** and disrupt functioning in extremis. `[DIR]` (H) ([Hedgeweek](https://www.hedgeweek.com/us-fed-official-flags-hedge-fund-basis-trades-as-risk-to-30tn-treasury-market/))
- **Precedent:** the trade's unwind was central to the **March 2020 "dash-for-cash"** Treasury dislocation. `[DIR]` (H)
- **Structural catalyst:** the **SEC Treasury central-clearing mandate** (cash by **31 Dec 2026**, repo by **30 Jun 2027**) will reshape basis-trade economics and is a dated event the desk should put on its calendar. `[HARD]` (M) ([Chicago Fed primer 2026](https://www.chicagofed.org/publications/chicago-fed-letter/2026/516))
- **Why it matters here:** it is the leverage channel that turns the dossier's **Scenario 6 (plumbing accident)** from tail to plausible — a basis unwind hits SOFR/repo and the long end simultaneously, on top of the MBS-convexity amplifier. Add it to §2.7 and to Scenario 6's triggers/lead-indicators.

### L.2 — Live POSITIONING read via CFTC COT (the synthesis listed it as a source but never read it) — §2.7
The free **CFTC Commitments of Traders** report (weekly, ~3-day lag) is the desk's positioning gauge: **leveraged funds' large net SHORT in Treasury futures is the basis-trade footprint**, while **asset managers run the offsetting net LONG**. Record leveraged-short extremes = crowded basis trade = elevated unwind risk; a sudden COT short-covering is the tell that a deleveraging is underway. `[DIR]` (M) Free, but `latest_published` (weekly lag), so a position read, not an intraday signal. ([CFTC COT](https://www.cftc.gov/MarketReports/CommitmentsofTraders/index.htm)) **Build-time action:** pull the latest leveraged-fund net-position extreme and state it.

### L.3 — FOREIGN DEMAND via TIC (the term-premium "reduced foreign demand" driver had no hard source) — §2.7 / §2.9 + data board
Foreign holders fund a large slice of the deficit, so their behavior is core to the term-premium story the dossier leans on. The free **Treasury International Capital (TIC)** system (monthly, ~6-week lag) is the source. `[HARD]` (M) ([Treasury TIC](https://home.treasury.gov/data/treasury-international-capital-tic-system))
- **Foreign holdings ~$9.5tn (Feb 2026), +6% y/y** from ~$8.9tn — foreign demand is *growing in absolute terms*, complicating the simple "foreigners are leaving" narrative. `[HARD]` (M)
- **Top holders (Dec 2025): Japan ~$1.2tn · UK ~$0.9tn · China ~$0.7tn.** China is **falling** (nominal and share) — the de-dollarization-at-the-margin signal; Japan stable in a $1.0–1.2tn band. `[HARD]` (M) ([CRS Major Foreign Holders](https://www.congress.gov/crs_external_products/RS/HTML/RS22331.web.html))
- **Connective tissue:** the TIC **"Caribbean Banking Centres" line is a known proxy for hedge-fund (Cayman) basis-trade holdings** — so TIC and L.1/L.2 corroborate each other. `[DIR]` (M) **Add a data-board row** (TIC, `latest_published`, free) and use it to anchor the foreign-demand leg of Chains C/§2.9.

### L.4 — ISSUANCE COMPOSITION / "activist Treasury" (ATI) bill-share debate — §2.7
The dossier covers *supply quantity* but not *supply mix*. The Treasury's **skew toward T-bill issuance** (vs coupons) is argued to **suppress term premium** by minimizing duration added to the market — the "Activist Treasury Issuance" critique. The free source is the quarterly **Treasury Refunding Announcement (QRA)** + the TBAC bill-share recommendation (~15–20% of marketable debt). `[DIR]` (M) A *shift back toward heavy coupon issuance* would be a term-premium catalyst — a dated, free, watchable event. ([Treasury Quarterly Refunding](https://home.treasury.gov/policy-issues/financing-the-government/quarterly-refunding)) **Add QRA dates to the desk calendar.**

### L.5 — Minor reconciliations (no errors, just tightening)
- **Hormuz state vs STEO:** §2.9 cites the May EIA STEO assuming "resumption in June," but the realized live environment (UAE: full flows only by **2027**) is *more severe*. Build with the realized state; treat the STEO line as a now-stale forecast. `[DIR]` (M)
- **10y 4.45 (FRED) vs 4.49 (desk):** already reconciled in §1 as EOD-publication noise — keep the live print as the anchor and footnote FRED. ✓
- **Layman kit has 11 concepts** (9 + 2 bonus); the desk's layman wing uses ~9 chapters — select/merge at build (e.g. fold Repo/SOFR into the QT/plumbing chapter).

### L.6 — Data-board additions (append to Section C)
| Tile | Best FREE series | Cadence | Feed-state | Note |
|---|---|---|---|---|
| Foreign UST holdings | **Treasury TIC** (Major Foreign Holders) | Monthly (~6wk lag) | latest_published | Japan/UK/China; Caribbean line = basis-trade proxy |
| Leveraged-fund positioning | **CFTC COT** (Treasury futures) | Weekly (~3-day lag) | latest_published | Lev-fund net short = basis-trade footprint |
| Issuance mix / refunding | **Treasury QRA + TBAC** | Quarterly (event) | source_identified | Bill-share vs coupon skew; term-premium driver |
| Central-clearing milestone | SEC mandate dates | Event | n/a (calendar) | Cash 31-Dec-2026 · repo 30-Jun-2027 |

### L.7 — Build-time re-verify list (live values move)
Re-pull at build: DGS10/DGS2/DGS3MO/DGS5/DGS30, T10Y2Y/T10Y3M, DFII10, T10YIE/T5YIFR, SOFR/IORB, RRPONTSYD/WRESBAL/WALCL, ACM & THREEFYTP10, MORTGAGE30US, the latest two auctions (Fiscal Data API), latest CPI (BLS), latest COT lev-fund net, latest TIC top-holders, Brent (de-escalation may have moved it materially). The dossier's **framing, mechanisms, scenario map, anchor scales, and source IDs are the durable deliverable**; the point-in-time numbers are a snapshot to refresh.

*Curator QC by VegaReady, 2026-06-14. Gap-fills sourced to free Fed/Treasury/CFTC/Chicago-Fed material and tagged in-house; they extend, not overwrite, the model council's content above.*
