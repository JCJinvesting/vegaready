# Credit-Markets Feed Sourcing Plan — Methodological Rigor and the "Honest Feed Pending" Test

**Prepared by Claude Opus 4.8 · Analytical angle: methodological rigor and a firm, reasoned stance on what can and cannot be responsibly automated for *public* display.**

> Note on naming: this report responds to a request that referenced "Claude Opus 4.7," which is not in the current model catalog. It was produced by Claude Opus 4.8, the closest available frontier Anthropic model.

---

## Executive summary: the uncomfortable truth about your tiles

You asked for sourcing rigor, and the most rigorous finding cuts against the grain of what most "free data" guides will tell you. **The single biggest risk on a public credit page is not stale data — it is *unlicensed* data.** Several of your tiles can be *fetched* for free, but cannot be *publicly redistributed* for free. The two are not the same thing, and conflating them is exactly the kind of quiet error that gets a public-facing site a cease-and-desist letter from a data vendor.

The cleanest way to frame your eight metrics is a three-bucket triage:

| Bucket | Metrics | Verdict |
|---|---|---|
| **Green — automate with confidence** | IG OAS, HY OAS (display the *value*, with caveats below), IG/HY new-issue volume (SIFMA) | Free, programmatic, redistributable with attribution |
| **Yellow — automate the *narrative*, not a live number** | TTM HY default rate, leveraged-loan spread | Free to read on a schedule, but no clean free redistributable live feed; show the latest *published* figure with date stamp and source, refreshed manually/semi-automatically |
| **Red — keep as honest "feed pending"** | HY distress ratio, CDX IG/HY live levels, EMBI Global Diversified live spread | No responsible free, licensed, programmatic public-display source exists. Showing nothing is the correct, defensible choice. |

The thread running through all three buckets is the distinction between a *number you can compute or read* and a *number you are licensed to publish*. I make the "no" call most clearly on the distress ratio, CDX, and EMBI — and I explain below exactly why each "no" is the responsible answer rather than a lazy one.

A second cross-cutting theme is **revision and methodology risk**, which is acute precisely in the metrics that look most automatable. The ICE BofA OAS series carry a month-end rebalancing rule and an April 2026 change that truncates the FRED history to three years; default rates are routinely *restated* as distressed exchanges are reclassified; and the leveraged-loan benchmark itself was rebranded mid-stream (S&P/LSTA → Morningstar LSTA) in 2022, which silently breaks any hard-coded series name. None of these are reasons to abandon the metric — they are reasons to design the tile around the revision behavior rather than against it.

---

## The licensing principle you should hard-code into your pipeline

Before the metric-by-metric analysis, internalize the two governing rules, because they decide five of the eight calls.

**Rule 1 — FRED is a delivery mechanism, not a license grant.** FRED's own terms are explicit: data series available through FRED "may be owned by third parties and may be protected by copyrights," and "before using data series owned by third parties for anything other than your own personal use, you must contact the data owner to obtain permission." The St. Louis Fed states plainly that it "cannot give you such permission" and that making the series available "does not constitute permission" ([FRED Terms of Use](https://fred.stlouisfed.org/legal/)).

**Rule 2 — The ICE BofA "Top Level Data" restriction is the sharpest version of Rule 1.** Both OAS series carry an unusually strict notice: the end-of-day index values, returns and statistics ("Top Level Data") "are being provided for your internal use only and you are not authorized or permitted to publish, distribute or otherwise furnish Top Level Data to any third-party without prior written approval of ICE Data" ([FRED — ICE BofA US Corporate Index OAS, BAMLC0A0CM](https://fred.stlouisfed.org/series/BAMLC0A0CM); [FRED — ICE BofA US High Yield Index OAS, BAMLH0A0HYM2](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)). Read literally, this restriction sits in tension with publicly displaying the live number on a commercial market-intelligence page.

How to reconcile this with the fact that countless sites *do* show these spreads: FRED separately grants a **FRED Graphs license** that lets you "display and reproduce FRED charts and graphs, and permit others to publish, reproduce, and distribute them," provided you do not remove the FRED logo, data source, or titles, and the embedded chart is *self-citing* ([FRED Terms of Use](https://fred.stlouisfed.org/legal/)). The practical, defensible path for the two OAS tiles is therefore **embed the official FRED graph/widget (which carries its own attribution and keeps ICE in the loop), rather than extracting the raw number via the API and re-publishing it as your own bare figure.** That is the difference between a licensed display and an unlicensed redistribution. I flag this distinction explicitly for each OAS metric below.

---

## Metric 1 — US Investment-Grade corporate OAS

**Series ID confirmed: `BAMLC0A0CM`** — "ICE BofA US Corporate Index Option-Adjusted Spread." Your recollection is correct ([FRED BAMLC0A0CM](https://fred.stlouisfed.org/series/BAMLC0A0CM)).

- **(1) Best source:** FRED series `BAMLC0A0CM`, via the official chart/widget for display, or the API for internal computation. Primary owner: ICE Data Indices, LLC; release "ICE BofA Indices."
- **(2) Frequency & lag:** Daily, close. Publication lag is roughly one business day — e.g., the page captured on Jun 9, 2026 9:02 AM CDT showed a latest observation of Jun 8, 2026 (value 0.75%) ([FRED BAMLC0A0CM](https://fred.stlouisfed.org/series/BAMLC0A0CM)). Treat it as "T-1 by mid-morning US Central time."
- **(3) Definition & units:** The OAS is the market-cap-weighted spread between an OAS index of all constituent bonds and a spot Treasury curve. The underlying ICE BofA US Corporate Index tracks USD-denominated, investment-grade (avg. of Moody's/S&P/Fitch), publicly issued US-domestic corporate debt with >1yr remaining maturity, fixed coupon, and ≥$250 million outstanding. **Units: percent, not seasonally adjusted** — so 0.75 means 75 bps; multiply by 100 if your tile shows bps ([FRED BAMLC0A0CM](https://fred.stlouisfed.org/series/BAMLC0A0CM)).
- **(4) Licensing for public display:** Restricted. Copyright ICE Data Indices; "reproduction of this data in any form is prohibited except with the prior written permission of ICE Data Indices," and the "internal use only" Top Level Data clause applies ([FRED BAMLC0A0CM](https://fred.stlouisfed.org/series/BAMLC0A0CM)). **Display via the FRED self-citing graph/widget (FRED Graphs license), not as a re-published raw figure** ([FRED Terms of Use](https://fred.stlouisfed.org/legal/)).
- **(5) Fallback:** None that is both free *and* cleanly redistributable. The honest fallback is a *qualitative* source — IG corporate spread color in free weekly commentaries (e.g., the Bloomberg US Corporate Index spread of 73 bps quoted in [Nuveen's fixed-income weekly](https://www.nuveen.com/en-us/insights/fixed-income/fixed-income-weekly-commentary)) — which you can cite as context, not as your live tile.
- **(6) Gotchas:** (a) **April 2026 truncation** — FRED now retains only three years of observations for this series; for longer history you must go to the source ([FRED BAMLC0A0CM](https://fred.stlouisfed.org/series/BAMLC0A0CM)). Any chart needing >3yr history will silently lose its tail. (b) **Month-end rebalancing** — the index rebalances on the last calendar day of the month using info through the third business day prior; weekend observations can appear at month-ends due to accrued-interest adjustments. (c) **Units trap** — percent, not bps.

**Verdict: GREEN, with a license asterisk.** The number is rigorous and timely. Display it through the FRED widget, not as a naked figure, and you are on solid ground.

---

## Metric 2 — US High-Yield corporate OAS

**Series ID confirmed: `BAMLH0A0HYM2`** — "ICE BofA US High Yield Index Option-Adjusted Spread." Correct ([FRED BAMLH0A0HYM2](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)).

- **(1) Best source:** FRED `BAMLH0A0HYM2` (the "High Yield Master II" OAS). Owner ICE Data Indices.
- **(2) Frequency & lag:** Daily, close; ~T-1. Page captured Jun 10, 2026 9:29 AM CDT showed Jun 9 (2.78%) as latest ([FRED BAMLH0A0HYM2](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)).
- **(3) Definition & units:** Same OAS construction, but over bonds rated below investment grade (BB or below), USD-denominated, US-domestic, >1yr maturity, fixed coupon, ≥**$100 million** outstanding (note the lower size floor vs. IG's $250m). **Units: percent, NSA** — 2.78 = 278 bps ([FRED BAMLH0A0HYM2](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)).
- **(4) Licensing:** Identical to Metric 1 — ICE Top Level Data "internal use only," reproduction prohibited without written permission. Display via FRED widget.
- **(5) Fallback:** Qualitative only — e.g., the Bloomberg US HY 2% Issuer Capped Index spread (265 bps) in free dealer/asset-manager weeklies ([Nuveen weekly](https://www.nuveen.com/en-us/insights/fixed-income/fixed-income-weekly-commentary)). Different index, so it is corroboration, not a substitute feed.
- **(6) Gotchas:** Same April 2026 three-year truncation, month-end rebalancing, weekend month-end prints, and percent-vs-bps trap ([FRED BAMLH0A0HYM2](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)). Additional subtlety: defaulted securities are excluded from the index, so the *level* can mechanically tighten when a large distressed name finally defaults and exits — a methodology nuance worth a tooltip.

**Verdict: GREEN, same license asterisk as IG.**

---

## Metric 3 — HY distress ratio (share of HY index with OAS ≥1000 bps)

This is the metric where I plant the flag most firmly: **RED. Keep "feed pending."**

There is no free, programmatic, redistributable source that publishes the HY distress ratio on a schedule. The figure most credibly and regularly produced is **Marty Fridson's (FridsonVision / Lehmann Livian Fridson Advisors)**, and it is explicitly a proprietary research product. Fridson defines and uses exactly your metric — "x = Percentage of issues in the ICE BofA US High Yield Index with option-adjusted spread" at/above the distress threshold — inside a paid strategy letter, reporting, for example, a distress ratio of 6.96% as of May 31, 2024 ([FridsonVision High Yield Strategy](https://fridson.com/wp-content/uploads/2024/06/Fridson-High-Yield-Strategy.pdf)). That is a point-in-time figure from a subscription publication, not a feed.

Why you cannot responsibly synthesize it yourself for free, even though the definition is simple:
1. **The denominator is licensed.** Computing the ratio requires constituent-level OAS for every bond in the ICE BofA US HY Index. That underlying data is the same ICE intellectual property that carries the "internal use only / reproduction prohibited" restriction ([FRED BAMLH0A0HYM2](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)). FRED only exposes the *aggregate* OAS, not the constituent distribution, so you cannot derive the ratio from any free public field.
2. **Threshold conventions vary.** Some analysts use ≥1000 bps OAS; others use the dedicated "ICE BofA US Distressed High Yield Index" subindex; Fridson's own work layers an additional BB-rating filter inside the distressed cohort ([FridsonVision](https://fridson.com/wp-content/uploads/2024/06/Fridson-High-Yield-Strategy.pdf)). Publishing "the" distress ratio without specifying which convention would itself be a methodological misrepresentation.
3. **S&P and Moody's distress-ratio variants are equally gated** behind their respective research products.

**Most credible regularly-updated public figure:** none that is free and live. Fridson's number is the gold standard but is paid and periodic. The honest move is to keep the tile as "feed pending," or — if you want to show *something* — display a manually-curated, clearly-dated quote from a public Fridson/CFA Institute commentary (he writes for the CFA Institute Research & Policy Center, e.g., his analysis of the +1000 bps spread threshold) with explicit attribution and an "as of" date, never presented as live ([CFA Institute — "Think We've Seen the Last +1000-BPS High Yield Spread?"](https://rpc.cfainstitute.org/blogs/enterprising-investor/2025/think-weve-seen-the-last-1000-bps-high-yield-spread-think-again)).

**Verdict: RED.** This is the clearest "no" of the eight. A live distress-ratio tile would be either invented, unlicensed, or methodologically ambiguous — possibly all three.

---

## Metric 4 — Trailing 12-month US HY default rate

**Verdict: YELLOW.** Automate the *published figure with its date and source*, not a live computed number. There is no free real-time feed, but there *is* a reliable monthly publication cadence you can track.

- **(1) Best sources (free to read, on a schedule):**
  - **Moody's Monthly Default Report.** Moody's has "long published" a trailing-12-month speculative-grade default rate "back to 1970" in its Monthly Default Report ([Moody's — Dollar Volume-Weighted Default Rates](https://www.moodys.com/sites/products/DefaultResearch/2001900000419787.pdf)). Headline figures circulate publicly: the US speculative-grade rate stood at 5.3% in October 2025, with Moody's baseline seeing it fall to 4.4% by December 2025 ([Moody's TTM default summary, via LinkedIn](https://www.linkedin.com/posts/mironas_moodys-reported-that-its-trailing-12-month-activity-7396566015083671553-zeIm)).
  - **Fitch Ratings leveraged-finance default research**, published roughly monthly, with a convenient free aggregator: the **LSTA's Fitch Ratings Commentary Page** links each monthly release on a stable URL (e.g., "U.S. Default Rates Hold Steady…" posted March 16, 2026) ([LSTA — Fitch Ratings Commentary Page](https://www.lsta.org/content/fitch-ratings-commentary-page/); [Fitch — US HY/Loan Default Rates Rise Modestly](https://www.fitchratings.com/research/corporate-finance/us-hy-loan-default-rates-rise-modestly-credit-conditions-stay-constructive-17-02-2026)).
- **(2) Cadence & lag:** Monthly summaries, typically released mid-month for the prior month-end; the TTM rate inherently lags by design (it covers the prior 12 months).
- **(3) Definition & units:** Percent. Note that "default rate" is *not one number*. Moody's headline is **issuer-weighted**, but it also publishes a **dollar-volume-weighted** speculative-grade rate (defaulted dollar volume over the past 12 months ÷ dollar volume outstanding at the start of the period) ([Moody's — Dollar Volume-Weighted Default Rates](https://www.moodys.com/sites/products/DefaultResearch/2001900000419787.pdf)). Critically, **whether distressed exchanges (DDEs) are included swings the number by a factor of ~3**: Moody's reported an all-HY rate of 5.8% in June 2025 that fell to 2.1% once distressed restructurings were excluded, with DDEs comprising 64% of first-half-2025 credit events ([Moody's — Corporate Credit Risk, July 2025](https://www.moodys.com/web/en/us/insights/resources/us-report-july-2025.pdf)). You must label which definition your tile shows.
- **(4) Licensing:** The rating agencies' reports are copyrighted research. *Reading* a free summary and *quoting one figure with attribution and date* (e.g., "US spec-grade TTM default rate: 5.3%, Moody's, Oct 2025") is normal journalistic/market-commentary use; *re-publishing their data tables or building a live mirror feed* is not. Stay on the right side by quoting the single headline number with full attribution, never reconstructing their series.
- **(5) Fallback:** S&P Global Ratings default studies, and Fitch's separate bond vs. loan series. For loans specifically, Fitch's monthly "Leveraged Loan Default Insight" (e.g., July 2025 edge-higher note) provides a parallel cadence ([Fitch — Leveraged Loan Default Rate Edges Higher in July](https://www.fitchratings.com/research/corporate-finance/leveraged-loan-default-rate-edges-higher-in-july-ddes-dominate-default-volume-19-08-2025)).
- **(6) Gotchas:** (a) **Revisions are routine** — preliminary monthly figures get restated as defaults are confirmed/reclassified; Moody's even announced replacing a legacy dollar-volume series with a revised one "going forward" ([Moody's — Dollar Volume-Weighted Default Rates](https://www.moodys.com/sites/products/DefaultResearch/2001900000419787.pdf)). (b) **Agency-to-agency divergence** — Moody's, S&P and Fitch use different universes and DDE treatments, so cross-agency numbers will not match; never blend them in one tile. (c) **Issuer- vs. dollar-weighted vs. with/without DDE** must be disclosed.

**Why not RED:** because a credibly-attributed, clearly-dated "latest published" figure refreshed monthly is honest and useful — it is the *narrative* of default risk, not a fabricated live tick. Just resist any temptation to display it as if it updated daily.

---

## Metric 5 — US IG and HY new-issue volume

**Verdict: GREEN.** This is your cleanest free, redistributable, primary-source win.

- **(1) Best source:** **SIFMA US Corporate Bonds Statistics.** SIFMA Research tracks issuance, trading and outstanding data, with **issuance explicitly broken out into investment grade vs. high yield** (plus convertible/nonconvertible, callable/noncallable, fixed/floating) ([SIFMA — US Corporate Bonds Statistics](https://www.sifma.org/research/statistics/us-corporate-bonds-statistics)).
- **(2) Frequency & lag:** Monthly statistics file (also quarterly/annual). The page captured June 2, 2026 reported issuance through May of $1,226.8 billion YTD (+21.1% Y/Y), implying roughly a one-to-two-week lag after month-end ([SIFMA](https://www.sifma.org/research/statistics/us-corporate-bonds-statistics)).
- **(3) Definition & units:** USD volume of US corporate bond issuance, split IG/HY. Delivered as a downloadable **.xls** workbook; **no public API** is offered — you automate by fetching and parsing the spreadsheet on a schedule ([SIFMA](https://www.sifma.org/research/statistics/us-corporate-bonds-statistics)).
- **(4) Licensing:** SIFMA publishes these as public research statistics intended for citation; the page does not impose an internal-use restriction comparable to ICE's. Display the figure with "Source: SIFMA" attribution. (SIFMA's site terms govern bulk reuse; quoting monthly aggregates with attribution is standard and is how the figures are widely re-reported.)
- **(5) Fallback:** Weekly *flow* color from free dealer/asset-manager commentaries — e.g., "IG new issuance ~$45.5bn, YTD >$1tn, 25.7% ahead of 2025; HY primary $13.3bn" ([Nuveen fixed-income weekly](https://www.nuveen.com/en-us/insights/fixed-income/fixed-income-weekly-commentary)). These give you a weekly cadence between SIFMA's monthly drops, but treat them as third-party commentary, attributed and dated.
- **(6) Gotchas:** (a) SIFMA periodically **revises prior months** as deals settle. (b) IG/HY classification is by SIFMA's convention, which can differ from index-provider definitions, so it will not tie out exactly to ICE/Bloomberg index membership. (c) The .xls layout occasionally changes tabs/columns — build your parser defensively and alert on schema drift rather than silently mis-mapping a column.

---

## Metric 6 — CDX IG and CDX HY index levels

**Verdict: RED. Keep "feed pending."**

There is no free public source that both (a) publishes CDX IG / CDX HY levels on a reliable schedule and (b) permits you to redistribute them on a commercial page. The indices are owned and administered by **S&P/Markit (CDX)**, and the official index levels are "published at the end of each business day in the indices section on markit.com for registered users," distributed via "Markit FTP Server / Markit website / Bloomberg / Reuters" at New York close ([Markit — CDX North American High Yield Credit Index Guide](https://www.jhetf.com/wp-content/uploads/2020/03/CDX-North-American-High-Yield-Credit-Index-Guide-2019-04.pdf); [S&P Global — CDX Tradable CDS Indices](https://www.spglobal.com/spdji/en/landing/topic/cdx-tradable-cds-indices/)). "Registered users" and licensed redistributors is the operative phrase — this is a permissioned, commercial feed, not an open data source.

Apparent "free" alternatives fail the responsibility test:
- **Investing.com** hosts a "CDX Network Index" historical-data page, but (a) it is a site-specific construct rather than the official Markit CDX.NA.IG / CDX.NA.HY level, and (b) re-publishing its values would violate its terms and misrepresent the underlying index ([Investing.com — CDX Network Index Historical Data](https://www.investing.com/indices/investing.com-cdx-usd-historical-data)).
- ETF/structured-product proxies exist but are not the index level.

If you genuinely need CDX on the page, the only responsible path is a **commercial license** from S&P/Markit (or a redistribution-cleared vendor) — i.e., not free. Until then, "feed pending" is the correct, honest state. As a *qualitative* stopgap you may cite free narrative on CDS index direction, but you should not post a live numeric CDX tile.

---

## Metric 7 — EMBI Global Diversified spread

**Verdict: RED for a *live, free, redistributable* spread; you already have a (presumably licensed) source — treat the alternatives below as redundancy with honest caveats.**

The EMBI Global Diversified is a **J.P. Morgan proprietary index**. J.P. Morgan's index documentation is unambiguous: the material "may not be reprinted, sold or redistributed without the written consent of J.P. Morgan," and it is "strictly prohibited to use or share without prior written consent … any research material received from J.P. Morgan or an authorized third-party ('J.P. Morgan Data')" ([J.P. Morgan — EMBI Global Diversified Select Index Methodology](https://www.jpmorgan.com/content/dam/jpm/cib/complex/content/markets/composition-docs/jp-morgan-embi-global-diversified-select-index.pdf)). So the *official* spread is not a free redistributable feed; your existing arrangement is presumably a licensed terminal/data feed, which is the right way to carry it.

**Redundancy alternatives and their lags (for failover, with caveats):**
- **ETF-proxy spread/yield (near-real-time, free, but a proxy):** The iShares J.P. Morgan USD Emerging Markets Bond ETF (**EMB**) tracks the EMBI Global Diversified family; its published yield/holdings give a same-day, free *proxy* for direction — but it is the fund, net of fees and tracking error, not the index spread ([ETF Database — JPMorgan EMBI Global Diversified Index](https://etfdb.com/index/jpmorgan-embi-global-diversified-index/)). Use only as a directional backstop, clearly labeled "ETF proxy."
- **Asset-manager fact sheets (monthly lag, free, attributed):** Index level/yield appears in fund literature "Source: J.P. Morgan, as of [month-end]" (e.g., Western Asset and BNP Paribas materials) ([Western Asset — Emerging Markets Diversified](https://www.westernasset.com/common/pdfs/ir_qtr_20232q_emerging_markets_diversified.pdf); [BNP Paribas Easy JPM ESG EMBI GD](https://docfinder.bnpparibas-am.com/api/files/65bb2bd8-b9a0-49d9-b1c0-0f4fc5183a3c/512)). These lag by up to a month and re-publishing the figure still relies on JPM's underlying rights — quote with attribution and date only.
- **World Bank / public macro spreads (not the same index):** EM sovereign spread aggregates from public-domain sources can supply a free, redistributable *EM-spread context* metric, but they are a different construct and should not be labeled "EMBI GD."

**Gotchas:** the EMBI methodology rebalances at month-end (EMTA calendar), prices off PricingDirect, and applies a *diversification* cap that re-weights large issuers — so the "Diversified" series will not match the plain "Global" series; do not mix them. Also note J.P. Morgan markets several closely-named variants (EMBI Global, EMBI Global Diversified, EMBI Global Diversified *Select*), and they differ ([J.P. Morgan methodology](https://www.jpmorgan.com/content/dam/jpm/cib/complex/content/markets/composition-docs/jp-morgan-embi-global-diversified-select-index.pdf)).

---

## Metric 8 — Leveraged-loan index level or spread (Morningstar/LSTA)

**Verdict: YELLOW → effectively RED for a free *live index level*; automate the *narrative* spread instead.**

This metric is the textbook case for your methodology-change concern. The benchmark formerly known as the **S&P/LSTA Leveraged Loan Index** no longer exists under that name. Effective **August 29, 2022**, after Morningstar acquired Leveraged Commentary & Data (LCD) from S&P Global, **all S&P Leveraged Loan Indexes were rebranded to Morningstar Leveraged Loan Indexes** and are now administered by Morningstar Indexes ([Morningstar — Rebranding of Leveraged Loan Indexes, Aug. 29, 2022](https://advisor.morningstar.com/ReleaseNewsLive/releasePopUp.aspx?Id=851&type=Release+Notes&name=Licensed+Data)). Concretely:

| Old name (pre-Aug 2022) | New name |
|---|---|
| S&P/LSTA Leveraged Loan TR | Morningstar LSTA US Leveraged Loan TR USD |
| S&P/LSTA U.S. Leveraged Loan 100 TR USD | Morningstar LSTA US Leveraged Loan 100 TR USD |
| S&P/LSTA Performing Loan TR | Morningstar LSTA US Performing Loans TR USD |

The underlying FundIDs/SecIDs were preserved, but the *names and feed fields changed* ([Morningstar rebrand note](https://advisor.morningstar.com/ReleaseNewsLive/releasePopUp.aspx?Id=851&type=Release+Notes&name=Licensed+Data)). **Any pipeline that hard-codes "S&P/LSTA" as a label or matches on the old string will break or silently mislabel.** This is exactly the kind of discontinuity that produces a "stale but plausible" tile.

- **(1) Source:** Morningstar Indexes (Morningstar LSTA US Leveraged Loan Index). The Morningstar Indexes site hosts the methodology and index pages, but performance values for the full index are largely gated ("Performance data is not available for this index" on the public sub-index pages) ([Morningstar Indexes — LSTA Leveraged Loan sub-index](https://indexes.morningstar.com/indexes/details/morningstar-lsta-us-leveraged-loan-100-consumer-durables-apparel-FS0000HRLT); [Morningstar — Leveraged Loan Indexes Methodology](https://indexes.morningstar.com/api/docs/69bd3e9250ca695336d4045f)).
- **(2) Frequency & lag:** Loan index levels are computed daily; the *public/free* surfacing of the level is not on a clean redistributable feed.
- **(3) Definition & units:** Total-return index level (base 100) and, for spread, the discount margin on leveraged loans. Note free weeklies quote a **senior-loan spread as a 3-year discount margin** (e.g., 486 bps), explicitly "Source: Bloomberg L.P. and Standard & Poor's" — a different vendor construct again ([Nuveen fixed-income weekly](https://www.nuveen.com/en-us/insights/fixed-income/fixed-income-weekly-commentary)).
- **(4) Licensing:** Morningstar LSTA index data is licensed; public redistribution of the live level is not free. S&P Global's legacy/related loan-default research is similarly gated ([S&P Global — Morningstar LSTA US Leveraged Loan Index default rate study](https://www.spglobal.com/ratings/en/regulatory/article/220831-default-transition-and-recovery-the-morningstar-lsta-u-s-leveraged-loan-index-default-rate-could-rise-to-2-s12486511)).
- **(5) Fallback:** (a) Free weekly *narrative* loan spread/discount-margin figures from dealer/asset-manager commentary, attributed and dated ([Nuveen weekly](https://www.nuveen.com/en-us/insights/fixed-income/fixed-income-weekly-commentary)). (b) Bank-loan ETF NAVs (e.g., BKLN) as a directional proxy, clearly labeled as a proxy, not the index.
- **(6) Gotchas:** the 2022 rebrand (above); the fact that "loan spread" is reported as a *discount margin* (not an OAS), so it is not comparable to the bond OAS tiles; and divergent vendor definitions (Morningstar vs. Bloomberg vs. legacy S&P).

**Bottom line:** a *free, live, redistributable* Morningstar LSTA index-level tile does not exist. Either license it from Morningstar, or run a YELLOW tile that shows the latest *published* loan discount-margin from a free, attributed weekly with an "as of" date — and never label it "S&P/LSTA."

---

## (A) FRED API — key terms, rate limits, and exact REST call shape

**API key terms.** A free FRED API key (a 32-character lowercase alphanumeric string) is required for every request; the demo key `abcdefghijklmnopqrstuvwxyz123456` is illustrative only and must be replaced with a registered key ([FRED API — series/observations](https://fred.stlouisfed.org/docs/api/fred/series_observations.html)). Use of the API is governed by the FRED API Terms of Use ([FRED API Terms of Use](https://fred.stlouisfed.org/docs/api/terms_of_use.html)), and — critically — **the API grants no rights over third-party data**: the same Rule 1/Rule 2 ICE restrictions still apply to anything you pull for `BAMLC0A0CM` / `BAMLH0A0HYM2` ([FRED Terms of Use](https://fred.stlouisfed.org/legal/)).

**Rate / volume limits.** FRED Support has stated the API allows **120 requests per minute**; exceeding it triggers throttling/lockout, so a queue or throttle (e.g., ~100/min) is prudent. Each observations request returns up to **100,000 records**, with pagination via the `offset` parameter for larger pulls ([Alteryx Community — FRED API rate limit confirmed by FRED Support](https://community.alteryx.com/discussion/586941/problem-with-alteryx-and-fred-api)).

**Exact REST call shape (daily series retrieval).**

- **Base URL:** `https://api.stlouisfed.org/fred/series/observations`
- **Required parameters:** `series_id`, `api_key`. (`file_type` defaults to `xml`; set `file_type=json` for JSON.) ([FRED API — series/observations](https://fred.stlouisfed.org/docs/api/fred/series_observations.html))
- **Useful optional parameters:** `observation_start` / `observation_end` (`YYYY-MM-DD`), `units` (`lin` is raw level — leave as default for OAS), `frequency` (`d` daily; note you cannot request a *higher* frequency than the series' native frequency), `sort_order`, `offset`, `limit`.

Example — last 30 days of HY OAS in JSON:

```
https://api.stlouisfed.org/fred/series/observations?series_id=BAMLH0A0HYM2&api_key=YOUR_32_CHAR_KEY&file_type=json&observation_start=2026-05-12&sort_order=desc
```

Example — IG OAS, full available history as CSV (returned as a zipped file containing the CSV plus a README):

```
https://api.stlouisfed.org/fred/series/observations?series_id=BAMLC0A0CM&api_key=YOUR_32_CHAR_KEY&file_type=csv
```

The JSON response is an array of `{ "date": "YYYY-MM-DD", "value": "2.78" }` objects; `value` is a **string** and missing observations are returned as `"."`, so coerce to float and null-handle the dot before display ([FRED API — series/observations](https://fred.stlouisfed.org/docs/api/fred/series_observations.html)). Remember the **percent-not-bps** unit and the **April 2026 three-year truncation** when back-filling charts.

---

## (B) What CANNOT be responsibly automated from free sources — keep these honest "feed pending"

You said you would rather show nothing than show a stale or unlicensed number. Held to that standard, here is the explicit list, ranked by how firmly I say "no":

1. **HY distress ratio — NO (firmest).** No free, scheduled, redistributable source. The credible figure (Fridson) is proprietary and periodic; the underlying constituent OAS data is ICE-licensed and not publicly exposed; threshold conventions differ. A live tile here would be invented, unlicensed, or ambiguous. **Keep "feed pending"** (optionally show a dated, attributed Fridson/CFA-Institute quote, never as live) ([FridsonVision](https://fridson.com/wp-content/uploads/2024/06/Fridson-High-Yield-Strategy.pdf); [CFA Institute](https://rpc.cfainstitute.org/blogs/enterprising-investor/2025/think-weve-seen-the-last-1000-bps-high-yield-spread-think-again)).
2. **CDX IG / CDX HY live levels — NO.** Official levels are a permissioned Markit/S&P feed for "registered users"; free web sources are either unofficial proxies or terms-violating. Without a commercial license, **keep "feed pending"** ([Markit CDX Guide](https://www.jhetf.com/wp-content/uploads/2020/03/CDX-North-American-High-Yield-Credit-Index-Guide-2019-04.pdf); [S&P Global CDX](https://www.spglobal.com/spdji/en/landing/topic/cdx-tradable-cds-indices/)).
3. **EMBI Global Diversified live spread (free) — NO.** J.P. Morgan prohibits redistribution without written consent; only ETF proxies or month-lagged fact-sheet quotes are free, and neither is the live index. Carry it on your existing licensed feed; do not back it with a free live source ([J.P. Morgan methodology](https://www.jpmorgan.com/content/dam/jpm/cib/complex/content/markets/composition-docs/jp-morgan-embi-global-diversified-select-index.pdf)).
4. **Morningstar LSTA leveraged-loan live index level (free) — NO.** Licensed Morningstar data; public pages gate performance. A free *narrative* discount-margin (attributed, dated) is the most you can responsibly show — that is a YELLOW tile, not a live index feed ([Morningstar Indexes](https://indexes.morningstar.com/indexes/details/morningstar-lsta-us-leveraged-loan-100-consumer-durables-apparel-FS0000HRLT)).

And the borderline case worth stating plainly:

5. **IG OAS and HY OAS (Metrics 1–2) — YES *only if displayed through the FRED self-citing graph/widget*, NO if re-published as a bare extracted number.** The data is free and rigorous, but ICE's "internal use only / reproduction prohibited" Top Level Data clause means the safe public-display vehicle is the FRED chart that keeps ICE's and FRED's attribution intact, not an API-extracted figure you render as your own ([FRED BAMLC0A0CM](https://fred.stlouisfed.org/series/BAMLC0A0CM); [FRED Terms of Use](https://fred.stlouisfed.org/legal/)). If you want a *bare numeric* OAS tile, the responsible step is to obtain ICE's written permission or a licensed feed.

**Cleanly automatable for free public display, today:** US IG/HY new-issue volume (SIFMA, monthly .xls, attributed) — your one unambiguous green light ([SIFMA](https://www.sifma.org/research/statistics/us-corporate-bonds-statistics)). The TTM default rate is a defensible YELLOW: a monthly, attributed, dated "latest published" figure, never dressed up as live.

---

## Design recommendations that follow from the rigor

- **Stamp every tile with an explicit "as of" date and a source attribution string.** For OAS tiles, that string should include "via FRED" and the ICE source; for default rates, the agency and the report month. This is both a licensing safeguard and an honesty safeguard.
- **Distinguish "live," "latest published," and "feed pending" states visually.** A daily OAS tile, a monthly default-rate tile, and a deliberately empty distress-ratio tile should not look identical. Your readers' trust depends on them being able to tell.
- **Alert on schema drift and name changes, not just on missing data.** The Morningstar rebrand and the SIFMA .xls layout are reminders that the dangerous failure mode is a feed that *keeps returning a plausible number after its meaning has changed.*
- **When in doubt, "feed pending" is a feature.** On a market-intelligence site, an honest empty tile signals discipline. A confidently wrong or unlicensed number signals the opposite — and is the only one of these two that carries legal as well as reputational risk.

---

*Report by Claude Opus 4.8. Every numerical and licensing claim above is linked inline to its primary source. Where a figure is a point-in-time example (e.g., a specific OAS print or default rate), it is dated to the source capture and should be treated as illustrative of cadence/format, not as the current live value.*
