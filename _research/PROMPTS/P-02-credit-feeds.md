# P-02 — Credit desk live-data feeds (run in Perplexity deep research)
**Return as:** `_research/RETURNS/R-02-credit-feeds.md`

---

PASTE FROM HERE:

I run a public market-intelligence website with a credit-markets page. Several tiles currently read "feed pending" because I refuse to publish invented numbers. I need a rigorous sourcing plan for automating these metrics. For EACH metric below, give me: (1) the best free or low-cost programmatic source (FRED series ID, public API endpoint, or a named vendor page that publishes the figure on a schedule), (2) update frequency and typical publication lag, (3) exact field/series definition and units, (4) licensing/redistribution constraints for displaying the value publicly with attribution, (5) a fallback source, and (6) any gotchas (revisions, methodology changes, discontinued series).

Metrics:
1. US Investment-Grade corporate OAS (I believe FRED BAMLC0A0CM — confirm series ID, definition, lag).
2. US High-Yield corporate OAS (confirm FRED BAMLH0A0HYM2).
3. HY distress ratio (share of HY index trading ≥1000bps OAS) — is there a free programmatic source, or only Marty Fridson/S&P/Moody's publications? What is the most credible regularly-updated public figure?
4. Trailing 12-month US HY default rate — best public source (Moody's, S&P, Fitch monthly summaries?), publication cadence, and whether a stable URL/feed exists.
5. US IG and HY new-issue volume (weekly or monthly) — free sources?
6. CDX IG and CDX HY index levels — any free/delayed public source that permits display?
7. EMBI Global Diversified spread — I have a source; list alternatives and their lags for redundancy.
8. Leveraged-loan index level or spread (Morningstar/LSTA) — any public/free variant?

Also answer: (A) For FRED specifically — API key terms, rate limits, and exact REST call shape for daily series retrieval. (B) Which of the above CANNOT be responsibly automated from free sources, so I keep them as honest "feed pending" tiles? Be explicit — I would rather show nothing than a stale or unlicensed number. Cite every claim with links.
