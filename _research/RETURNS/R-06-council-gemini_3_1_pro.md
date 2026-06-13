# Programmatic Data Fetch Strategies for the Four Credit Tiles

This analysis explores viable programmatical fetch paths for four closely guarded credit metrics: the US High-Yield distress ratio, CDX.NA.IG/HY indices, the EMBI Global Diversified spread, and the Morningstar LSTA US Leveraged Loan Index. Due to aggressive commercial gating by ICE, S&P/Markit, J.P. Morgan, and Morningstar, the focus is on uncovering secondary regulatory feeds, proxy derivatives, and semi-regular publications.

---

## 1. US High-Yield Distress Ratio

The canonical metric (percentage of the HY market trading with an OAS $\geq$ 1000 bps) is commercially held by ICE BofA and privately derived by players like J.P. Morgan and FridsonVision. Since constituent-level spread data is not available on public FRED indices, we must construct proxies.

### (a) Direct or Delayed Feeds
A direct API or free CSV feed for the exact ICE BofA aggregate distress ratio does not exist. FRED provides the aggregate ICE BofA US High Yield Index OAS ([BAMLH0A0HYM2](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)), but not the constituent data necessary to compute a 1000 bps cutoff. 

### (b) Regulatory Public-Dissemination Channels
Corporate bond trades are reported to FINRA's TRACE. While TRACE offers a delayed public feed of bond prices, computing an OAS requires maturity-matched Treasury yields and bond-level optionality data, which TRACE does not supply. TRACE is insufficient for deriving a daily distress ratio cleanly.

### (c) Computable Proxies from Public Constituent Files
The most robust path is calculating a proxy ratio from daily ETF holdings files.
- **Path:** Download the daily constituent CSV for the iShares iBoxx $ High Yield Corporate Bond ETF (HYG). 
- **URL:** `https://www.ishares.com/us/products/239565/ishares-iboxx-high-yield-corporate-bond-etf/1467271812596.ajax?fileType=csv&fileName=HYG_holdings&dataType=fund`
- **Format:** CSV.
- **Cadence/Lag:** Daily, typically T-1.
- **Definition/Units:** HYG publishes a "Yield to Worst (%)" field. While not OAS, one can estimate a proxy spread by subtracting the yield of a benchmark Treasury (e.g., 5-year or 10-year depending on the bond's duration) from the YTW. The distress ratio is then calculated as the percentage of the ETF's market value or issue count with this proxy spread $\geq$ 1000 bps. 
- **Fragility:** Low to Moderate. BlackRock occasionally changes exact parameter names in the CSV. The proxy inherently diverges from an exact OAS calculation because it uses yield-to-worst minus a static benchmark rate rather than a curve-matched OAS.

### (d) Scheduled Publications
Firms like Boyd Watterson ([Boyd Watterson](https://boydwatterson.com/)) and SSGA ([Mind on the Market](https://www.ssga.com/hk/en/institutional/insights/mind-on-the-market-01-august-2025)) occasionally quote the metric in their market commentaries, but not on a strict, automatable cadence. Morgan Stanley's quarterly High Yield Market Monitor PDF also includes it, but parsing quarterly PDFs introduces a massive lag.

**RECOMMENDATION:**
- **PRIMARY:** Compute a proxy from the HYG ETF daily holdings CSV.
- **FALLBACK:** Fall back to the aggregate HY OAS on FRED (BAMLH0A0HYM2) as a directional gauge if the constituent proxy breaks.
- **HONEST LABEL:** "HY Distress Proxy (% of HYG Market Value with Estimated Spread $\geq$ 1000 bps, Source: iShares)"

---

## 2. CDX.NA.IG and CDX.NA.HY Index Levels

Official closing levels for CDX on-the-run indices are held tightly behind Markit (S&P Global) subscription walls. However, the nature of these products as cleared derivatives forces their trades into the public domain via regulatory mandates.

### (a) Direct or Delayed Feeds
Broker pages (like Investing.com) offer synthesized proxies that track poorly and do not represent institutional trading levels. There is no legitimate, direct, free API for end-of-day Markit levels.

### (b) Regulatory Public-Dissemination Channels (SDRs)
Under CFTC Part 43 real-time reporting rules, all US swap trades must be disseminated publicly. DTCC operates the primary Swap Data Repository (SDR) and provides a public dashboard.
- **Path:** DTCC Public Price Dissemination (PPD) Dashboard / Cumulative SEC Reports.
- **URL:** `https://pddata.dtcc.com/ppd/secdashboard`
- **Format:** Downloadable zipped CSVs (Slice Reports / Cumulative Reports).
- **Cadence/Lag:** Intraday slices published frequently (minutes to hours).
- **Definition/Units:** Real-time trade prints for credit swaps. The data contains raw swap transactions. You must filter for the on-the-run series (e.g., "CDX.NA.IG.41"). IG is quoted in spread (bps, referencing a 100 bps coupon), and HY is quoted in price (referencing a 500 bps coupon). 
- **Gotchas:** Block trades are capped in notional size to protect anonymity. The data contains both cleared and uncleared trades, and noise from life-cycle events (e.g., novations) must be filtered out by selecting only new trades.
- **Fragility:** Moderate. The dashboard format is reasonably stable due to regulatory mandates, but DTCC's URLs and dashboard UIs can change during site revamps. The raw data requires heavy programmatic filtering to identify the median or last-traded price for the relevant on-the-run series.

### (c) Computable Proxies from Public Constituent Files
Not applicable. CDX indices are derivatives, not cash bond portfolios.

### (d) Scheduled Publications
The ISDA and the CFTC publish weekly swap reports, but these aggregate notional volumes rather than providing daily executable price levels.

**RECOMMENDATION:**
- **PRIMARY:** Scrape and filter the DTCC PPD SEC Dashboard CSVs for the most recent trade prints of the on-the-run series. 
- **FALLBACK:** There is no viable fallback for the true index level if the SDR feed breaks.
- **HONEST LABEL:** "On-The-Run Traded Levels (SDR Trade Prints, Source: DTCC PPD)"

---

## 3. EMBI Global Diversified Spread

The J.P. Morgan EMBI Global Diversified is the benchmark for hard-currency emerging market sovereign debt. J.P. Morgan strictly licenses this data.

### (a) Direct or Delayed Feeds
No direct API or FRED equivalent exists for the sovereign EMBI. FRED provides an EM Corporate spread, but not the sovereign equivalent.

### (b) Regulatory Public-Dissemination Channels
Sovereign bond trades do not run through the same standardized derivatives clearing channels as CDX, meaning there is no SDR equivalent for the cash index.

### (c) Computable Proxies from Public Constituent Files
The most reliable proxy is derived from the ETF that tracks the index: the iShares J.P. Morgan USD Emerging Markets Bond ETF (EMB).
- **Path:** Download the daily constituent CSV for the EMB ETF.
- **URL:** `https://www.ishares.com/us/products/239572/ishares-jp-morgan-usd-emerging-markets-bond-etf/1467271812596.ajax?fileType=csv&fileName=EMB_holdings&dataType=fund`
- **Format:** CSV.
- **Cadence/Lag:** Daily, typically T-1.
- **Definition/Units:** The CSV contains a "Yield to Worst (%)" field for the constituent bonds. To approximate the index spread, one must calculate the market-value-weighted average YTW of the portfolio and subtract a matched US Treasury yield (e.g., the 7-year Treasury yield, as EMB's duration is typically 6-7 years). 
- **Fragility:** Low to Moderate. Similar to the HYG proxy, it relies on BlackRock maintaining the exact structure of the CSV and providing the YTW column. It inherently differs from J.P. Morgan's official curve-matched Z-spread calculation.

### (d) Scheduled Publications
Fund fact sheets (e.g., VanEck, MFS, Candriam) quote the EMBI spread, but these are released monthly with a lag of several weeks.

**RECOMMENDATION:**
- **PRIMARY:** Calculate a market-value-weighted proxy spread from the EMB ETF daily holdings CSV.
- **FALLBACK:** None available for daily data.
- **HONEST LABEL:** "ETF-Derived Proxy Spread (Weighted YTW minus Treasury, Source: iShares EMB Holdings)"

---

## 4. Morningstar LSTA US Leveraged Loan Index

Originally the S&P/LSTA Index, this benchmark was rebranded in 2022 when Morningstar acquired LCD from S&P. Morningstar heavily gates the data, and its public index portal requires a login.

### (a) Direct or Delayed Feeds
Morningstar does not provide a free public endpoint for the index level. 

### (b) Regulatory Public-Dissemination Channels
Loans are not securities in the same way bonds are, and they do not print to TRACE. They are private bilateral agreements. Therefore, there is no TRACE or SDR equivalent for the leveraged loan cash market.

### (c) Computable Proxies from Public Constituent Files
Senior loan ETFs, such as the Invesco Senior Loan ETF (BKLN) which tracks the Morningstar LSTA US Leveraged Loan 100 Index, provide holdings files. 
- **Path:** Download the daily constituent CSV for BKLN from Invesco.
- **URL:** Requires navigating the Invesco site structure: `https://www.invesco.com/us/financial-products/etfs/holdings/main/holdings/0?audienceType=Investor&action=download&ticker=BKLN`
- **Format:** CSV/XLS.
- **Cadence/Lag:** Daily.
- **Gotchas:** Bank loans pay floating rates (Base Rate + Spread). While ETF holdings files provide market prices, they rarely provide clean "Discount Margin" (the loan equivalent of a spread) or "Yield to 3-year takeout" metrics for individual loans because these calculations require assumptions about prepayments and forward SOFR curves. You can track the weighted average price of the portfolio, but not cleanly derive a daily index spread or discount margin purely from the CSV.

### (d) Scheduled Publications
The LSTA (Loan Syndications and Trading Association) itself regularly publishes index analysis.
- **Path:** LSTA Market Analysis blog posts.
- **URL:** `https://www.lsta.org/tag/morningstar-lsta-leveraged-loan-index/`
- **Format:** HTML/PDF articles.
- **Cadence/Lag:** Weekly to Monthly.
- **Definition/Units:** The LSTA publishes periodic summaries (e.g., "Morningstar LSTA Leveraged Loan Index Analysis") that include the index return and occasionally current discount margins. 
- **Fragility:** High. Requires HTML scraping of natural language text or PDF parsing. The cadence is at the whim of the LSTA's publishing schedule.

**RECOMMENDATION:**
- **PRIMARY:** If a proxy is acceptable, track the weighted average market price from the BKLN ETF holdings file as a daily gauge of market health.
- **FALLBACK:** Scrape the LSTA's tag archive (`https://www.lsta.org/tag/morningstar-lsta-leveraged-loan-index/`) for periodic updates on official performance, accepting the weekly/monthly lag.
- **HONEST LABEL:** "Weighted Average Loan Price (ETF-Derived Proxy, Source: Invesco BKLN)" OR "As published by LSTA (Delayed)" depending on the route chosen. 
