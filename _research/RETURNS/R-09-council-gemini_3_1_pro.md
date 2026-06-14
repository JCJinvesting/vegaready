# Model Council: 2026 US Rates Desk Research Dossier
By Gemini 3.1 Pro

## 1 · SCOPE & STATE

The US Rates desk focuses on the pricing and trading of US sovereign debt, analyzing the nominal Treasury curve, real yields (TIPS), breakeven inflation, the decomposition of yields into expected rate paths and term premia, and the complex funding plumbing that supports this market (repo, SOFR). It explicitly does *not* cover corporate credit risk (the purview of the Credit desk) or cross-border yield differentials driving currency pairs (the domain of the FX desk).

**Regime Call:** The market is caught in a stagflationary crosscurrent where an oil-driven supply shock pulls the Fed path higher (pushing the front end up) while simultaneous growth fears and safe-haven flows cap long-end yields, resulting in an upward-sloping but deeply conflicted curve.

*   **10y Treasury Yield:** 4.49% (The bedrock discount rate for global assets, currently reflecting sustained inflation risks despite growth headwinds).
*   **2s10s Spread:** +40 bp (The curve is newly dis-inverted, signaling an imminent regime shift or recession as the Fed is forced to pause or pivot).
*   **Real 10y Yield:** ~2.16% (The true cost of capital for the US economy, remaining restrictive to combat sticky inflation).
*   **Fed Path (SOFR):** 3.60% (The overnight benchmark, anchoring the front end and indicating no immediate rate cuts are priced in).

## 2 · THE ANALYST SPINE (§1–§10)

*   **§1 Regime (Level & Stance):** The 10y yield remains elevated near 4.49%, anchored by a hawkish Fed reacting to the Iran-driven oil shock. The path of overnight rates remains restrictive, with zero 2026 cuts priced.
    *   *Indicators:* DGS10 (10-Year Treasury Constant Maturity Rate), SOFR (Secured Overnight Financing Rate).
    *   *Free Series:* FRED DGS10, FRED SOFR.
    *   *Current Value:* DGS10: 4.49% [HARD] (2026-06-12, FRED); SOFR: 3.60% [HARD] (2026-06-11, FRED).
*   **§2 Structure (Curve Shape):** The curve has dis-inverted into a "bull steepener" shape, traditionally a recession harbinger, though currently complicated by the dual shock of inflation and growth fears.
    *   *Indicators:* T10Y2Y (10y-2y spread), T10Y3M (10y-3m spread).
    *   *Free Series:* FRED T10Y2Y, FRED T10Y3M.
    *   *Current Value:* T10Y2Y: +40bp [HARD] (2026-06-12, Prompt Data); T10Y3M: +77bp [HARD] (2026-06-12, Prompt Data).
*   **§3 Valuation (Real Yields & Term Premium):** Real yields are firmly positive, ensuring tight financial conditions. The term premium has rebounded into positive territory, demanding compensation for inflation volatility and fiscal supply.
    *   *Indicators:* DFII10 (10-Year TIPS Yield), ACMTP10 (NY Fed Term Premium).
    *   *Free Series:* FRED DFII10, FRED ACMTP10 (or NY Fed directly).
    *   *Current Value:* DFII10: ~2.16% [HARD] (2026-06-11, FRED); ACMTP10: 0.06% [HARD] (2026-05-29, Eco3min via NY Fed).
*   **§4 Fundamentals/cycle (Inflation & Growth):** Market-implied inflation expectations are stubbornly high, reflecting the oil supply constraint, complicating the Fed's reaction function which must balance this against creeping growth fears.
    *   *Indicators:* T10YIE (10-Year Breakeven Inflation Rate), T5YIFR (5-Year, 5-Year Forward Inflation Expectation Rate).
    *   *Free Series:* FRED T10YIE, FRED T5YIFR.
    *   *Current Value:* T10YIE: 2.35% [HARD] (June 2026, Trading Economics via FRED); T5YIFR: ~2.3% [DIR] (Historically anchored around this level, checking recent data).
*   **§5 Cohorts/segments (Curve Segments):** The front end (bills) is anchored by the hawkish Fed, the belly (2y-5y) is hypersensitive to shifting rate-cut odds, and the long end (10y-30y) is buffering safe-haven flows against term premium expansion. TIPS outperform nominals given the inflation shock.
    *   *Indicators:* Various DGS series (DGS3MO, DGS2, DGS5, DGS30).
    *   *Free Series:* FRED.
    *   *Current Value:* DGS3MO: 3.71% [HARD] (2026-06-12, Prompt Data); DGS2: 4.09% [HARD] (2026-06-12, Prompt Data).
*   **§6 Factors (Return Drivers):** Carry is attractive given high absolute yields, but duration risk is elevated due to rate volatility. The steepening curve benefits specific flattener/steepener pair trades.
    *   *Indicators:* MOVE Index (Rate Volatility).
    *   *Free Series:* ICE BofA MOVE (NO FREE REAL-TIME FEED).
    *   *Current Value:* ~67-79 [DIR] (Recent ranges, TradingView/Investing.com delayed data).
*   **§7 Positioning/plumbing (Supply & Repo):** Treasury supply remains heavy, pressuring the term premium. Auction metrics (bid-to-cover, tails) are critical gauges of dealer capacity. The RRP facility continues to drain, shifting reserves.
    *   *Indicators:* RRPONTSYD (Overnight Reverse Repo), Treasury Auction Results (Bid-to-Cover).
    *   *Free Series:* FRED RRPONTSYD, TreasuryDirect.
    *   *Current Value:* RRPONTSYD: $0.454 Trillion [HARD] (2026-06-12, FRED).
*   **§8 Cross-asset (Intermarket Links):** The firm dollar (~100) reflects the hawkish Fed and safe-haven flows. Record gold (~$4,365) signals acute geopolitical fear and a hedge against fiat debasement amidst sticky inflation, despite high real yields.
    *   *Indicators:* DXY (Dollar Index), Gold Prices.
    *   *Free Series:* Various.
    *   *Current Value:* DXY: ~100 [HARD] (Prompt Data); Gold: ~$4,365 [HARD] (Prompt Data).
*   **§9 Catalyst transmission (Iran War):** The Strait of Hormuz closure acts as a massive negative supply shock (oil $87, down from $101 on ceasefire hopes). Transmission: Oil spikes -> headline CPI rises -> Fed stays hawkish/hikes -> front-end yields rise. Conversely: War escalation -> growth fears/flight to safety -> long-end yields fall. The interplay dictates the curve slope.
    *   *Indicators:* Brent Crude, CPI.
    *   *Free Series:* EIA, BLS.
    *   *Current Value:* Brent: ~$87 [HARD] (Prompt Data).
*   **§10 Evidence (Sources):** Primary data relies on FRED (Federal Reserve Economic Data), TreasuryDirect for auction specifics, and the NY Fed for term premium models (ACM).

## 3 · DATA VERDICT BOARD

| tile | best FREE series (exact ID) | cadence | current value | feed-state | note |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 10y Yield | FRED DGS10 | Daily | 4.49% | live | Bedrock discount rate |
| 2y Yield | FRED DGS2 | Daily | 4.09% | live | Proxies near-term Fed path |
| 3m Yield | FRED DGS3MO | Daily | 3.71% | live | Anchored to current target rate |
| 2s10s Spread | FRED T10Y2Y | Daily | +40 bp | live | Curve shape indicator |
| 3m10s Spread | FRED T10Y3M | Daily | +77 bp | live | Preferred recession indicator |
| Real 10y Yield | FRED DFII10 | Daily | ~2.16% | live | Inflation-adjusted cost of capital |
| 10y Breakeven | FRED T10YIE | Daily | 2.35% | live | Market-implied inflation expectation |
| 5y5y Forward | FRED T5YIFR | Daily | ~2.3% | live | Long-term inflation anchor |
| SOFR | FRED SOFR | Daily | 3.60% | live | Secured overnight funding rate |
| Term Premium | FRED ACMTP10 / NY Fed | Monthly | 0.06% | latest_published | Compensation for duration risk |
| Reverse Repo | FRED RRPONTSYD | Daily | $0.454T | live | Excess liquidity gauge |
| Fed Balance Sheet| FRED WALCL | Weekly | Varies | live | Total assets, tracks QT progress |
| 30y Mortgage | FRED MORTGAGE30US | Weekly | Varies | live | Consumer borrowing cost |
| Rate Volatility | **ICE BofA MOVE** | Daily | ~67-79 | **no-free-feed** | **CRITICAL: No free real-time API. TradingView/Investing.com offer delayed/chart-only views. Institutional data via Bloomberg/ICE required for live pricing.** |

## 4 · SCENARIO MATRIX

**Scenario 1: The "Sticky-Inflation" Bear-Steepener (Left Tail)**
*   *Triggers:* Ceasefire collapses, Strait remains closed indefinitely. Oil surges back >$100. Fiscal deficits remain unchecked.
*   *Mechanics:* Inflation expectations de-anchor. The Fed is forced to hike further (front end rises). Crucially, the term premium spikes violently as investors demand immense compensation to hold long-term debt amid fiscal dominance and uncontained inflation (long end rises even faster).
*   *Historical Analogue:* 1990 Gulf War (oil shock) combined with the 2023 long-end selloff (fiscal/term premium fears).
*   *Expected Move:* 10y breaches 5.50%. Curve steepens dramatically (bear steepener).
*   *Lead Indicators:* Brent > $110, T10YIE > 2.8%, ACMTP10 > 1.0%.

**Scenario 2: The "De-escalation" Bull-Steepener (Upside)**
*   *Triggers:* Durable peace treaty signed. Strait reopens fully. OPEC output normalizes.
*   *Mechanics:* Oil plummets <$70. Inflation fears evaporate. Growth concerns come to the fore, allowing the Fed to aggressively pivot to rate cuts. The front end collapses as cuts are priced in, while the long end falls but more slowly.
*   *Historical Analogue:* The 2023-2024 "pivot party" expectations, or post-1991 Gulf War resolution.
*   *Expected Move:* 2y plunges toward 3.00%. 10y settles near 3.50%. Curve steepens further (bull steepener).
*   *Lead Indicators:* Brent < $75, SOFR futures price in 3+ cuts for 2026.

**Scenario 3: The "Grinding Stagflation" Flattening (Base Case Continuation)**
*   *Triggers:* Status quo maintains. Strait partially restricted. Oil stable $85-$95.
*   *Mechanics:* The Fed remains paralyzed—unable to cut due to sticky inflation, reluctant to hike and precipitate a deep recession. The curve remains dis-inverted but relatively flat at elevated levels.
*   *Historical Analogue:* 2022-2023 hiking cycle plateau.
*   *Expected Move:* 10y range-bound 4.25%-4.75%. 2s10s spread hovers near +10bp to +40bp.
*   *Lead Indicators:* Range-bound oil, sticky Core PCE, neutral Fed speak.

## 5 · WINNERS / LOSERS (Under Current Regime)

*   **TIPS vs. Nominal:** **WINNER: TIPS.** The realized oil shock provides a direct tailwind to inflation accruals. If the Fed is perceived as behind the curve on inflation, TIPS break evens will widen, outperforming nominal equivalents.
*   **Front End vs. Long Bond:** **WINNER: Front End (for carry).** With the 3-month at 3.71% and the 2y at 4.09%, the front end offers attractive, lower-volatility carry. The long bond is vulnerable to term premium expansion (fiscal fears) and inflation surprises.
*   **Floating-Rate vs. Fixed:** **WINNER: Floating-Rate.** With no 2026 cuts priced and a hawkish Fed, floating-rate assets (leveraged loans, certain MBS) benefit from sustained high SOFR, avoiding the duration risk of fixed-rate bonds in a volatile environment.
*   **MBS (Mortgage-Backed Securities):** **LOSER.** The high rate volatility (elevated MOVE index) is toxic for MBS due to negative convexity (prepayment risk vanishes as rates rise, extending duration exactly when you don't want it). Hedging flows amplify rate swings.

## 6 · LAYMAN ANCHOR BANK

| number | plain meaning | reference scale |
| :--- | :--- | :--- |
| **4.49%** (10y Yield) | The baseline interest rate for the economy; affects everything from mortgages to corporate loans. | Pre-2008 normal: ~4.5%. 2010s "New Normal": ~2%. Current: Back to pre-2008 highs. |
| **+40 bp** (2s10s Spread) | The difference between 10-year and 2-year borrowing costs. Normally positive. | Negative (inverted) = Recession warning. Positive +40 = Normalizing, but highly volatile. |
| **2.16%** (Real 10y) | The true cost of borrowing after stripping out expected inflation. | < 0% = Free money (2020). > 2% = Very tight financial conditions. |
| **3.60%** (SOFR) | The rate banks charge each other for overnight loans; heavily influenced by the Fed. | 0% during COVID. Peak ~5.3% in 2023-2024. Current 3.6% = Restrictive but easing from peak. |

## 7 · LAYMAN KIT

1.  **Yield Curve & Inversion:**
    *   *Analogy:* Getting a mortgage. You expect to pay a higher rate for a 30-year fixed than a 5-year ARM because you're locking up money longer. When the 5-year costs more than the 30-year, the market is broken—an "inversion."
    *   *Example:* 2y yield = 5%, 10y yield = 4%. The curve is inverted by -1%.
    *   *Misconception:* Inversions *cause* recessions. Reality: They *predict* them, signaling the Fed has raised short rates too high to kill inflation, which will eventually hurt growth.
2.  **Real vs. Nominal Yields:**
    *   *Analogy:* Your salary. If you get a 5% raise (nominal), but inflation is 7%, your actual buying power (real) went down 2%.
    *   *Example:* 10y Treasury (Nominal) = 4.5%. Expected Inflation = 2.5%. Real Yield = 2.0%.
    *   *Misconception:* High nominal rates mean tight money. Reality: Only high *real* rates restrict the economy.
3.  **Term Premium:**
    *   *Analogy:* Hazard pay. If you take a job that might be dangerous in the future, you demand extra money upfront, regardless of the base salary.
    *   *Example:* You buy a 10y bond. You get the expected path of short-term rates (say, 3.5%) PLUS an extra 0.5% (term premium) for the risk that inflation or government deficits explode over the next decade.
    *   *Misconception:* It's directly observable. Reality: It's an invisible metric calculated by complex economic models (like the ACM model).
4.  **Duration:**
    *   *Analogy:* A seesaw. The longer the board (duration), the more violently the ends move when the middle shifts.
    *   *Example:* A bond with a duration of 10 years will lose 10% of its value if interest rates rise by 1%.
    *   *Misconception:* Duration is just the time until a bond matures. Reality: It's a measure of *price sensitivity* to interest rate changes.
5.  **Breakevens / Inflation Expectations:**
    *   *Analogy:* The Vegas over/under line for future inflation.
    *   *Example:* 10y Nominal Yield (4.5%) - 10y TIPS Yield (2.2%) = 2.3% Breakeven. The market is betting inflation will average 2.3% over the next decade.
    *   *Misconception:* Breakevens are perfect predictors. Reality: They include an "inflation risk premium" and liquidity factors, not just pure expectations.
6.  **Fed Policy & Dots:**
    *   *Analogy:* A GPS routing you to your destination. The "dots" are the Fed officials voting on where they think the destination (interest rates) will be over the next few years.
    *   *Example:* The median "dot" for 2026 shows 1 rate cut. The market might be pricing in 0 cuts.
    *   *Misconception:* The Fed's dot plot is a promise. Reality: It's a snapshot of current guesses, highly subject to change.
7.  **QT (Quantitative Tightening) & RRP:**
    *   *Analogy:* Draining a bathtub. The Fed is letting water (money) out of the financial system to cool things down. The RRP is an overflow tank; draining it first protects the main tub (bank reserves).
    *   *Example:* The Fed lets $60B of bonds mature every month without reinvesting.
    *   *Misconception:* QT directly controls interest rates. Reality: It operates in the background, affecting liquidity and the term premium more than short-term rates.
8.  **Auctions & Supply:**
    *   *Analogy:* A massive bake sale. If the government brings too many cakes (bonds) to the market and buyers aren't hungry, they have to slash prices (meaning yields go up).
    *   *Example:* A "tail" at an auction means the government had to offer a higher yield than the pre-auction trading level to sell all the bonds.
    *   *Misconception:* The government can always sell its debt easily. Reality: Auction metrics (bid-to-cover, dealer takedown) show waning demand when deficits get too large.
9.  **Safe-Haven Demand:**
    *   *Analogy:* Running inside when a storm hits. When global crises erupt (like a war in the Middle East), investors sell risky assets and buy the safest thing they can find: US Treasuries.
    *   *Example:* A missile strike occurs. Stocks drop 2%, but the 10y Treasury yield falls 10 basis points as buyers flood in.
    *   *Misconception:* Safe-haven demand is permanent. Reality: It's a temporary reflex; fundamentals eventually take over.

## 8 · COUNCIL & HONEST GAPS

**The Great Disagreement: The Signal of the Dis-Inverted Curve**
*   **Camp 1: The Classic Recessionists:** They argue the recent dis-inversion (2s10s returning to positive) is the final nail in the coffin. Historically, recessions begin *after* the curve un-inverts as the Fed panics and cuts short rates aggressively to save the economy.
*   **Camp 2: The Supply/Term Premium Realists:** They counter that this dis-inversion is "bearish" (driven by the long end rising faster due to massive fiscal issuance and a spiking term premium), not "bullish" (driven by short rates falling). Thus, it signals sticky inflation and fiscal dominance, not an imminent recession.

**Consolidated NO-FREE-FEED List:**
1.  **ICE BofA MOVE Index:** The critical gauge of rate volatility. No real-time, programmatic free feed exists. It is fiercely paywalled by ICE/Bloomberg.
2.  **Live Dealer Takedown/Auction Tails:** While the raw data is buried in TreasuryDirect PDFs, parsed, historical time-series of these specific micro-metrics are generally paywalled on institutional platforms.
3.  **Real-Time OIS/Swap Spreads:** Intraday swap spread data (measuring balance sheet stress) is not available for free; requires institutional feeds.
