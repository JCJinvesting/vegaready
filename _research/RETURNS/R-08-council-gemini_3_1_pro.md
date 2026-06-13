# US Credit Markets: Quantitative Factors, Technicals, and Cross-Asset Dynamics

**Executive Summary:** The evolution of the US credit market over the last two decades demands a shift from qualitative macro-narratives to precise, practitioner-grade quantitative framing. Our analysis bridges three critical knowledge gaps for the credit-markets desk. First, we define and contextualize standard credit factors (Carry, Quality, Momentum, and Duration-Times-Spread), tracing their performance through major stress episodes to provide a canonical factor rotation matrix. Second, we map the hidden technical infrastructure of modern credit—from dealer inventory and TRACE liquidity gauges to index swaptions—clarifying how to distinguish fundamental repricing from forced selling. Finally, we establish a cross-asset regime framework, defining exactly when and why historical correlations (such as the stock-bond sign flip or VIX-OAS dynamics) invert, culminating in a granular scenario-by-cohort matrix.

## 1. Credit Factors: Definitions, Stress Performance, and Regime Rotation

Factor investing, long established in equities, has become the dominant systematic framing in corporate credit. The market relies on four primary factors, evaluated on a risk-adjusted basis using the standard risk unit of Duration-Times-Spread (DTS).

### Definitions

*   **Duration Times Spread (DTS):** The canonical measure of spread volatility and credit risk. DTS is calculated as spread duration (OASD) multiplied by the Option-Adjusted Spread (OAS). Because empirical spread volatility is proportional to the spread level itself, DTS accurately sizes the risk of proportional spread changes. For example, a bond with a 5-year duration and 200 bps spread has a DTS of 1000; a 10% spread widening (20 bps) causes a 1% price drop. ([Ryan O'Connell Finance](https://ryanoconnellfinance.com/duration-times-spread/))
*   **Carry:** Often measured as the OAS minus expected loss, or simply the yield/spread advantage of a bond after adjusting for its term structure and default probability. In credit, high carry is structurally correlated with high risk (higher duration, lower rating, higher beta). ([Robeco/CTF Assets](https://assets.ctfassets.net/tl4x668xzide/4MujAXqGc3WPksku8CfQ9S/b1e08febc549d28bb2cee805e78e5530/201707-does-carry-add-value-to-existing-credit-factors.pdf))
*   **Quality / Low Risk:** A factor targeting lower-volatility, higher-rated bonds within a given universe (e.g., A-rated vs Baa-rated in IG, or BB vs CCC in HY). It captures the "low-risk anomaly" where safer bonds historically offer superior risk-adjusted returns (higher Sharpe ratios) than the riskiest bonds. ([Robeco/CTF Assets](https://assets.ctfassets.net/tl4x668xzide/4MujAXqGc3WPksku8CfQ9S/b1e08febc549d28bb2cee805e78e5530/201707-does-carry-add-value-to-existing-credit-factors.pdf), [Lancaster Univ](http://wp.lancs.ac.uk/fofi2020/files/2020/04/FoFI-2020-059-Hendrik-Kaufmann.pdf))
*   **Momentum (Equity/Bond) & Value:** Equity momentum (going long bonds of companies with positive trailing stock returns) is highly predictive of credit returns. Value involves buying bonds that trade cheap relative to fundamental default risk (often using Merton Distance-to-Default models). ([Lancaster Univ](http://wp.lancs.ac.uk/fofi2020/files/2020/04/FoFI-2020-059-Hendrik-Kaufmann.pdf))

### Factor Performance During Stress Episodes

*   **2008 Global Financial Crisis:** Characterized by a massive liquidity freeze. **Carry** suffered historic drawdowns as high-yield OAS spiked to roughly 2,000 bps. **Quality** (moving up to Aaa-Aa) protected capital, while bonds with high **DTS** suffered proportional devastation. ([Fello](https://fello.in/blogs/sip-performance-during-2008-2020-2022-crashes/), [GovSpending](https://govspending.org/compare/vix-vs-high-yield-spread/))
*   **2011 Euro-Sovereign Crisis & 2015-16 Energy/Commodity Distress:** The 2015-16 shock was sector-specific. **Carry** was punished in the energy sector, while **Momentum** effectively flagged the deterioration early as equity prices of energy firms collapsed ahead of bonds.
*   **2020 COVID Dash-for-Cash:** A unique liquidity event where corporate credit lines were drawn down en masse, pressuring bank capital. High **Carry** and High **DTS** bonds gapped wider (HY OAS hit 1,100 bps), but the Federal Reserve's intervention rapidly rescued Carry strategies. ([SUERF](https://www.suerf.org/publications/suerf-policy-notes-and-briefs/how-credit-line-drawdowns-and-repayments-affected-bank-performance-during-covid-19/), [GovSpending](https://govspending.org/compare/vix-vs-high-yield-spread/))
*   **2022 Rate-Shock:** Driven by aggressive Fed hikes. Here, the traditional defense failed. Because both rates and spreads widened (positive stock-bond correlation regime), **Quality** (often longer duration) suffered severe total return losses due to rate exposure, while short-duration **Carry** outperformed on a relative basis.

### Canonical Credit Factor Rotation

| Regime | Leading Factor (Overweight) | Lagging Factor (Underweight) | Rationale |
| :--- | :--- | :--- | :--- |
| **Early Cycle (Recovery)** | Carry, Value | Quality | Risk premiums compress; high-DTS and distressed assets re-rate. |
| **Mid Cycle (Expansion)** | Momentum, Carry | Value | Stable growth supports yield-seeking; equity momentum translates to credit. |
| **Late Cycle (Overheating)** | Quality, Low Risk | Carry | Balance sheet leverage peaks; low-risk anomaly historically outperforms. |
| **Recession / Crisis** | Quality | Carry, Value | Flight to safety; default risk dominates; high-DTS assets face severe drawdowns. |

*(Note: Real-time factor premia indices are proprietary to asset managers like Robeco, AQR, and BlackRock; daily public free readings are not available, though broad IG/HY OAS spreads are accessible via FRED.)*


## 2. Positioning & Technicals: Distinguishing Flow from Fundamentals

To differentiate fundamental credit deterioration from technical forced-selling, analysts must monitor market plumbing.

### Primary Dealer Inventory and the SLR
The NY Fed publishes weekly **Primary Dealer Statistics**, tracking net aggregate positioning in U.S. Treasuries, agency debt, and corporate bonds. Following the 2008 crisis, the Supplementary Leverage Ratio (SLR) structurally constrained dealer balance sheets. When dealers are "stuffed" with inventory (e.g., massive net long positioning), they lack the capacity to intermediate selling pressure, leading to technical spread widening even if fundamentals are sound. A two-standard-deviation drawdown in dealer inventory historically precedes a 30% widening in bid-ask spreads. ([NY Fed](https://www.financialresearch.gov/short-term-funding-monitor/datasets/nypd/), [Convex](https://convextrade.com/glossary/net-dealer-treasury-positioning), [Verified Investing](https://verifiedinvesting.com/blogs/education/the-liquidity-mirage-what-happens-when-market-depth-evaporates))

### Liquidity Proxies: TRACE and ETFs
**FINRA TRACE** provides transaction-level data for corporate bonds. While individual trade volumes are capped, breadth and bid-ask elasticity (the volume required to move the mid-price by 1 basis point) are critical. When depth thins quietly, it is the first sign of a liquidity drain. Furthermore, massive discounts to Net Asset Value (NAV) in fixed-income ETFs (e.g., a -2% to -5% discount on an IG bond fund) signal severe secondary market dysfunction and forced selling, as seen in March 2020. ([Verified Investing](https://verifiedinvesting.com/blogs/education/the-liquidity-mirage-what-happens-when-market-depth-evaporates))

### CDX Swaptions and Index Hedging
Options on credit default swap indices (CDX Swaptions) reveal institutional positioning. Payer swaptions (the right to buy protection/sell risk) act as credit puts. The implied volatility skew on these options indicates hedging pressure. If the skew steepens dramatically (payers command a massive premium over receivers), it signals that macro accounts are aggressively buying downside protection. LCH calibrates margin requirements against these volatility smiles. ([Jaeckel](http://www.jaeckel.org/OptionsOnCreditDefaultIndexSwaps.pdf), [Federal Register](https://www.govinfo.gov/content/pkg/FR-2020-12-03/pdf/2020-26597.pdf))

### Interpreting Technical vs Fundamental Widenings
**The Tell:** If high-yield OAS widens sharply but the VIX remains suppressed (e.g., VIX < 15), the move is likely technical—driven by heavy primary issuance, a dealer inventory glut, or localized fund outflows (tracked weekly by EPFR/Lipper). However, if HY OAS and VIX spike synchronously alongside tightening funding metrics (like the GC-SOFR repo spread), the market is pricing fundamental, systemic risk. ([GovSpending](https://govspending.org/compare/vix-vs-high-yield-spread/), [The Markets Unplugged](https://www.themarketsunplugged.com/high-yield-spread-vs-vix/))


## 3. Cross-Asset and Regime Correlations

Credit does not trade in a vacuum. Its relationship with equities and rates is governed by macroeconomic regimes.

### Regime-Dependent Correlations
*   **OAS vs. VIX:** Highly correlated (0.7 to 0.85). Both measure systemic risk (one via equity options, one via credit default premium). When HY OAS widens but VIX is quiet, credit is warning of a late-cycle turn. When VIX spikes without HY confirming, it is usually equity-specific noise. ([Convex](https://convextrade.com/compare/vix-vs-hy-spreads), [The Markets Unplugged](https://www.themarketsunplugged.com/high-yield-spread-vs-vix/))
*   **OAS vs. Treasury Curve Shape:** Historically, a parallel shift down in rates (economic weakness) correlated with wider spreads. Yield curve *flattening* historically coincided with narrowing credit spreads, while *steepening* (often early recovery) was associated with higher spreads across sectors. ([Barclays/Arxiv](https://arxiv.org/pdf/1312.1578.pdf))
*   **The Stock-Bond Correlation Sign Flip:** From 2000 to 2021, stocks and bonds were negatively correlated (a "good inflation" regime where bonds hedged equity risk). In 2022, due to stagflationary shocks, this flipped to a **positive correlation**. When the correlation is positive, inflation is viewed as toxic to growth; positive inflation surprises fail to tighten credit spreads, and balanced portfolios lose their diversification. ([SUERF](https://www.suerf.org/publications/suerf-policy-notes-and-briefs/good-inflation-bad-inflation-and-the-dynamics-of-credit-risk/), [Allspring](https://www.allspringglobal.com/globalassets/assets/insights/pdf/tl_glidepath-resilience-and-correlation-regimes_v5_l_nt.pdf))

### Scenario × Cohort Matrix

| Scenario | IG Corporates | HY Corporates | Leveraged Loans | EM Sovereign |
| :--- | :--- | :--- | :--- | :--- |
| **Risk-Off / Flight to Quality** | **Widen slightly** (safe haven vs HY, but liquidity premium rises) | **Widen sharply** (default risk dominates; low recovery expectations) | **Price drop** (retail outflows; high beta to equity) | **Widen sharply** (capital flight to USD; FX depreciation) |
| **Rate Shock (Inflationary, e.g. 2022)** | **Total return loss** (high duration vulnerability) | **Outperform IG** (shorter duration, carry buffer) | **Outperform fixed** (floating rate coupon resets) | **Severe stress** (strong USD forces external debt distress) |
| **Growth Re-acceleration** | **Tighten** (stable earnings) | **Tighten aggressively** (default fears recede; momentum factor leads) | **Rally** (M&A and LBO activity resumes) | **Tighten** (commodity demand rises; FX stabilizes) |
| **Commodity/Energy Shock** | **Stable to wide** (depends on sector mix) | **Bifurcated** (Energy tightens; cyclical consumers widen) | **Mixed** (depends on CLO collateral composition) | **Bifurcated** (Exporters rally; Importers collapse) |
| **Dollar-Funding Squeeze** | **Widen** (liquidity preference; dealer balance sheets constrained) | **Widen** (primary market shuts down) | **Widen** (CLO formation freezes) | **Crisis** (inability to roll hard-currency debt) |

**When to distrust correlations:** Do not trust the traditional "bonds hedge stocks" dynamic during supply-side inflationary shocks (like 2022) or when the stock-bond correlation sits firmly in positive territory. In these regimes, duration provides no harbor against equity drawdowns.

---
*Note: Public real-time data for specific institutional factor indices (e.g. AQR Carry), EPFR fund flows, and exact LCH swaption skews reside behind paywalls (Bloomberg, FactSet). The analyses above rely on structural practitioner frameworks and historical precedents.*