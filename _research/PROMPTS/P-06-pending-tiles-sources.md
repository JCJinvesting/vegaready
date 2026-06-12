# P-06 — Hunting fetchable sources for the four pending credit tiles

**Return file:** save the result as `_research/RETURNS/R-06-pending-tiles-sources.md`
**Run in:** Perplexity (deep research mode). Paste everything below the line as one prompt.

---

I run a public cross-asset market-intelligence website. My credit desk has four tiles I could not wire to data because my earlier research concluded no FREE PROGRAMMATIC source publishes these numbers at all. My display policy is: I will publish any figure I can reliably fetch, **with full source attribution**; my only hard rules are accuracy (never invent a number, never present a stale number as fresh, always label the methodology) and operational reliability. Licensing caution is NOT a constraint for this research — do not exclude a source because its terms-of-use restrict republication; I only care whether the number EXISTS somewhere fetchable on a reliable cadence.

The four metrics, and what I already know:

**1. US High-Yield distress ratio** (share of the HY universe trading ≥1000bp). Known: Fridson/FridsonVision publishes it in a paid letter; J.P. Morgan's variant appears in quarterly fund literature (e.g., Eaton Vance HY Market Monitor, spread-to-worst convention); ICE has a Distressed HY subindex; FRED only carries the aggregate HY OAS (`BAMLH0A0HYM2`), not constituent data.
**2. CDX.NA.IG and CDX.NA.HY index levels** (on-the-run). Known: official levels are Markit/S&P, behind registered-user walls; Investing.com's "CDX" page is a site-specific construct, not the real index; HY quotes in price (500bp coupon), IG in spread (100bp coupon); series roll each March/September.
**3. EMBI Global Diversified spread** (J.P. Morgan EM sovereign). Known: no free feed; fund fact sheets quote it monthly with lag; EMB (iShares) tracks the index family; FRED's `BAMLEMCBPIOAS` is EM *corporate*, not sovereign.
**4. Morningstar LSTA US Leveraged Loan index level / spread.** Known: rebranded from S&P/LSTA Aug 2022; Morningstar gates performance pages; weekly dealer commentaries quote a 3-yr discount margin; LSTA publishes news/commentary pages.

For EACH of the four metrics, find every realistic fetch path, including and especially:

(a) **Direct or delayed feeds** — any API, JSON/CSV endpoint, RSS, or stable URL that carries the actual number (even delayed EOD or T-1): index-provider public pages, broker/dealer public dashboards, exchange or SEF pages, financial-data aggregators (Investing.com, MarketWatch, CNBC, WSJ market-data pages, TradingView symbols), Bloomberg's free web tickers, central-bank or IMF/World Bank mirrors, academic/GitHub mirror datasets.
(b) **Regulatory public-dissemination channels** — this matters most for CDX: U.S. swap-data repositories publicly disseminate index-CDS trade prints under CFTC real-time reporting (e.g., DTCC's public price dissemination platform). Can on-the-run CDX.NA.IG/HY trade levels be programmatically extracted from a public SDR/SEF feed (URL, format, fields, lag, gotchas like cleared-vs-uncleared, price vs spread quoting, block-trade caps)? Similarly check OFR, FINRA, CFTC weekly swaps reports for anything carrying CDX or EM-sovereign-spread levels.
(c) **Computable proxies from public constituent files** — this matters most for the distress ratio and EMBI: ETF issuers publish full daily holdings files (iShares HYG/EMB, SPDR JNK, Invesco BKLN, etc.), often as programmatic CSV/XLS with per-bond price, yield, and sometimes spread fields. Specify exactly which funds publish which fields at which URLs, whether a per-bond spread or yield-to-worst is included, and whether a credible "share of holdings trading distressed" or "portfolio-level EM sovereign spread" can be computed and honestly labeled as an ETF-derived proxy. Name the field definitions precisely.
(d) **Scheduled publications quotable on a cadence** — monthly/weekly PDFs, research blogs, LSTA news posts, agency commentaries that reliably contain the figure, with their cadence and a stable landing URL I can poll.

For every path you find, report: the exact URL · fetch format (API/CSV/HTML+selector/PDF) · update cadence and lag · the precise definition and units of the figure at that location (and how it differs from the canonical index, if it does) · fragility assessment (how likely the URL/format breaks) · and a final per-metric recommendation: PRIMARY path, FALLBACK path, and what honest label the tile must carry (e.g., "ETF-derived proxy," "SDR trade prints, on-the-run series," "as published [source], [date]").

If for any metric genuinely nothing fetchable exists even at this standard, say so plainly and state what the nearest honest substitute is. Do not pad: a confirmed dead end stated clearly is more valuable than a speculative maybe. Cite every claim with a working link.
