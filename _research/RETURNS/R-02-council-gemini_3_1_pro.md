# Credit Market Data Sourcing Plan: Licensing Reality Check

This report evaluates the sourcing options for automating eight credit market metrics on a public-facing website. The analytical angle focuses heavily on the legal and licensing constraints of data redistribution—specifically, what index providers actually permit versus what technical workarounds (like the FRED API) enable.

## FRED API: Terms, Limits, and the "Redistribution Trap"

The Federal Reserve Economic Data (FRED) API is a powerful tool, but it is often misunderstood as a blanket license to republish its contents.
*   **API Key and Rate Limits:** Access requires a free API key registered at [fred.stlouisfed.org](https://fred.stlouisfed.org/docs/api/api_key.html). The standard rate limit is 120 requests per minute ([Alteryx Community](https://community.alteryx.com/discussion/586941/problem-with-alteryx-and-fred-api)). The endpoint for daily series retrieval is `/fred/series/observations`, requiring `series_id` and `api_key` parameters.
*   **The Copyright Trap:** The FRED API Terms of Use explicitly state that providing access through the API does *not* override third-party copyrights: "You are solely responsible for complying with any requirements or restrictions imposed on usage of the data series by their respective owners." ([Federal Reserve Bank of St. Louis](https://fred.stlouisfed.org/docs/api/terms_of_use.html)). Scraping FRED to publicly display third-party index data without a commercial license from the index provider violates these terms.

## Metric-by-Metric Sourcing and Licensing Analysis

### 1. US Investment-Grade corporate OAS
*   **Best Free Programmatic Source:** FRED series ID `BAMLC0A0CM` (ICE BofA US Corporate Index Option-Adjusted Spread).
*   **Lag:** Calculated end-of-day by ICE Data Services and published by FRED the following business day ([Eco3min Research](https://eco3min.fr/en/us-investment-grade-credit-spread-dataset/)).
*   **Definition:** The calculated spread between a computed OAS index of all bonds in the rating category (BBB or better) and a spot Treasury curve, weighted by market capitalization. Expressed in percent (e.g., 0.75 = 75 bps).
*   **Licensing Constraints:** **Cannot be publicly displayed.** ICE Data Indices explicitly states on the FRED release page: "Reproduction of this data in any form is prohibited except with the prior written permission of ICE Data Indices." It further clarifies that the data is "for your internal use only and you are not authorized or permitted to publish, distribute or otherwise furnish Top Level Data to any third-party" ([Federal Reserve Bank of St. Louis](https://fred.stlouisfed.org/series/BAMLC0A0CM)).
*   **Fallback:** None free. Commercial license required.
*   **Gotchas:** As of April 2026, FRED restricts the history of this series to a rolling 3-year window ([Federal Reserve Bank of St. Louis](https://fred.stlouisfed.org/series/BAMLC0A0CM)).

### 2. US High-Yield corporate OAS
*   **Best Free Programmatic Source:** FRED series ID `BAMLH0A0HYM2` (ICE BofA US High Yield Index Option-Adjusted Spread).
*   **Lag:** Next business day.
*   **Definition:** The OAS for below-investment-grade (BB or below) corporate debt over the spot Treasury curve. Expressed in percent.
*   **Licensing Constraints:** **Cannot be publicly displayed.** Subject to the exact same ICE Data Indices restrictions as the IG index ("internal use only") ([Federal Reserve Bank of St. Louis](https://fred.stlouisfed.org/graph/?g=OnbQ)).
*   **Fallback:** None free.
*   **Gotchas:** Also restricted to a rolling 3-year window as of April 2026 ([Eco3min Research](https://eco3min.fr/en/credit-spreads-recession-risk-dataset/)).

### 3. HY Distress Ratio
*   **Source:** There is no free programmatic API feed. The most credible regularly updated public figures come from reports by S&P Global Market Intelligence/IHS Markit or Moody's, usually monthly or ad-hoc.
*   **Definition:** Typically defined as the share of the high-yield index constituents trading with an annual benchmark spread greater than 1000 bps (e.g., using the Markit iBoxx $ Liquid High Yield Index as a proxy) ([IHS Markit](https://www.spglobal.com/marketintelligence/en/mi/research-analysis/09022016-credit-distressed-bond-numbers-escalate-at-alarming-pace.html)).
*   **Licensing:** Reports and proprietary indices (like Markit iBoxx) are copyrighted. Extracting the number from a PDF or press release to power a dashboard tile without permission infringes on the publisher's intellectual property.
*   **Gotchas:** Index compositions vary between providers, meaning the ratio will differ depending on whether S&P, Moody's, or ICE BofA data is used as the denominator.

### 4. Trailing 12-month US HY Default Rate
*   **Source:** No free, stable URL or API feed exists. This figure is published in monthly credit strategy reports or press releases from rating agencies (Moody's, S&P, Fitch).
*   **Definition:** The percentage of speculative-grade corporate issuers that defaulted over the trailing 12 months.
*   **Licensing:** These reports are copyrighted. For example, CFA Institute reports quoting Moody's data explicitly state that no part of the publication may be reproduced without permission ([CFA Institute](https://rpc.cfainstitute.org/sites/default/files/-/media/documents/survey/FINAL_CFA-COVID_SURVEY_P2_REPORT-WEB.pdf)). Scraping agency PDFs violates their terms of service.
*   **Gotchas:** Definitions of "default" can vary slightly between agencies (e.g., how distressed exchanges are treated).

### 5. US IG and HY New-Issue Volume
*   **Source:** The Securities Industry and Financial Markets Association (SIFMA) publishes "US Corporate Bonds Statistics."
*   **Lag:** Updated monthly.
*   **Definition:** Gross issuance volume of corporate bonds, segmented by IG and HY.
*   **Licensing:** SIFMA generally allows the use of their statistics provided proper attribution is given.
*   **Gotchas:** It is not available via a clean API; it requires downloading Excel files manually ([SIFMA](https://www.sifma.org/research/statistics/us-corporate-bonds-statistics)), making it difficult to automate reliably without a custom scraper that risks breaking upon formatting changes.

### 6. CDX IG and CDX HY Index Levels
*   **Source:** S&P Global (formerly Markit) owns the CDX indices. There is no free API or delayed public feed.
*   **Definition:** Tradable credit default swap index levels for North American investment grade and high yield baskets.
*   **Licensing:** **Cannot be publicly displayed.** Real-time or delayed data requires a commercial redistribution license from S&P Global.

### 7. EMBI Global Diversified Spread
*   **Source:** J.P. Morgan owns the EMBI indices. There is no free API.
*   **Fallback:** FRED provides a proxy via `BAMLEMCBPIOAS` (ICE BofA Emerging Markets Corporate Plus Index Option-Adjusted Spread).
*   **Lag (Fallback):** Next business day.
*   **Licensing:** As with other ICE BofA indices on FRED, `BAMLEMCBPIOAS` requires a commercial license for public display and is restricted to "internal use only" ([Federal Reserve Bank of St. Louis](https://fred.stlouisfed.org/series/BAMLEMCBPIOAS)). The actual J.P. Morgan EMBI data is also strictly proprietary.
*   **Gotchas:** The FRED proxy is restricted to a 3-year rolling window.

### 8. Leveraged-Loan Index Level or Spread
*   **Source:** S&P/LSTA (formerly Morningstar/LSTA) Leveraged Loan Index.
*   **Lag:** No free API feed.
*   **Definition:** An index tracking the performance and spreads of U.S. leveraged loans.
*   **Licensing:** **Cannot be publicly displayed.** The data is proprietary and requires a commercial license from S&P/LSTA for redistribution.

## Conclusion: Which Metrics Must Remain "Feed Pending"?

Because your website operates publicly and you refuse to violate licensing agreements or publish unverified data, **almost all of these metrics must remain "feed pending" unless you purchase commercial redistribution licenses.**

Specifically, the following cannot be responsibly automated from free sources:

1.  **US IG Corporate OAS** (ICE BofA terms explicitly forbid third-party redistribution).
2.  **US HY Corporate OAS** (ICE BofA terms forbid redistribution).
3.  **HY Distress Ratio** (Requires scraping copyrighted vendor reports).
4.  **Trailing 12-month US HY Default Rate** (Requires scraping copyrighted agency reports).
5.  **CDX IG & HY Index Levels** (Proprietary to S&P Global).
6.  **EMBI Global Diversified Spread** (Proprietary to J.P. Morgan; ICE BofA proxy forbids redistribution).
7.  **Leveraged-Loan Index Level/Spread** (Proprietary to S&P/LSTA).

Only **US IG and HY New-Issue Volume (monthly)** via SIFMA could potentially be displayed, provided you attribute SIFMA correctly and accept that automation will be fragile due to the lack of an API. For the rest, the choice is binary: pay the vendors for a display license or keep the tiles empty.