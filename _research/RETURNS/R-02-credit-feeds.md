# R-02 — Credit Desk Live-Data Feeds: Unified Sourcing, Licensing, and Engineering Plan

**Project:** P-02 — Credit desk live-data feeds
**Return file:** `_research/RETURNS/R-02-credit-feeds.md`
**Synthesis basis:** Deep-dive research from Gemini 3.1 Pro, GPT-5.5, and Claude Opus 4.8 (substituted for the requested Claude Opus 4.7, which is not in the current model catalog), plus the multi-model council comparison.
**Audience:** Operator of a public market-intelligence website refusing to publish invented, stale, or unlicensed numbers.

---

## Part 0 — Executive summary and decision frame

You asked for a rigorous sourcing plan for eight credit-markets tiles, with explicit guidance on what can and cannot be responsibly automated from free sources. The unified answer from three independent frontier-model deep-dives is consistent on the hard facts and instructive where it diverges.

The single most important reframing is this: **the binding constraint on a public-facing credit page is not data availability, it is data licensing.** Every model arrived at the same governing principle independently — FRED, SIFMA, ICE BofA, S&P/Markit, J.P. Morgan, Moody's, Fitch, and Morningstar all expose values you can technically fetch, but only a narrow subset can be lawfully redistributed on a commercial public page. A number you can fetch is not the same as a number you can publish. Conflating the two is precisely the quiet error that produces a vendor cease-and-desist or, worse, an "honest but unlicensed" tile that survives in production for months.

The unified verdict across the eight metrics resolves to a three-color status:

| Bucket | Metrics | Operational meaning |
|---|---|---|
| **Green — automate with confidence** | US IG/HY new-issue volume (SIFMA) | Free, programmatic-with-effort, redistributable with attribution |
| **Yellow — automate the narrative, not a live tick** | IG corporate OAS, HY corporate OAS (display only via the FRED self-citing widget), TTM HY default rate, leveraged-loan spread | Free to source, displayable only with methodology disclosure and dated attribution; never as "live" |
| **Red — keep as honest "feed pending"** | HY distress ratio, CDX IG/HY levels, EMBI Global Diversified live spread | No responsible free, licensed, programmatic public-display path exists |

The OAS tiles sit on the yellow/green boundary and are the most consequential decision in the build. Gemini 3.1 Pro reads the ICE "Top Level Data — internal use only" clause as fully overriding (red). Claude Opus 4.8 surfaces the separately enumerated **FRED Graphs license** carve-out, which explicitly permits displaying and reproducing FRED charts with FRED/ICE attribution preserved (yellow via embedded widget). GPT-5.5 sits in the middle and defers to legal counsel on the same widget path. The defensible operational answer is Opus's: embed the FRED widget so the chart is self-citing, never extract the bare number and render it as your own. Gemini's stricter reading is the conservative floor if your legal posture requires it.

Two pieces of methodology gravel matter at least as much as the licensing call. First, the ICE BofA OAS series on FRED publish in **percent, not basis points** — 0.75 means 75 bps, 2.78 means 278 bps. Every model flagged this independently; it is the single most common deployment error. Second, **FRED has truncated ICE BofA series history to a rolling three-year window as of April 2026**. Any chart shipped assuming longer history will silently lose its tail. These two facts are not edge cases — they are first-page production risks.

The rest of this document is the integrated, source-by-source, metric-by-metric expansion of those conclusions, plus the FRED REST shape, a licensing principle hard-coded into a two-layer data pipeline, the methodology and discontinuity traps for each metric, and the explicit list of what must remain "feed pending" until you buy a license.

---

## Part 1 — The two governing licensing rules

Both rules emerged identically across all three model reports. They decide five of the eight metrics on their own.

### Rule 1 — FRED is a delivery mechanism, not a license grant

FRED's own Terms of Use are explicit. Data series available through FRED "may be owned by third parties and may be protected by copyrights," and "before using data series owned by third parties for anything other than your own personal use, you must contact the data owner to obtain permission." The St. Louis Fed states plainly that it "cannot give you such permission" and that making the series available "does not constitute permission" to redistribute it ([FRED Terms of Use](https://fred.stlouisfed.org/legal/), [FRED API Terms](https://fred.stlouisfed.org/docs/api/terms_of_use.html)).

What this means in practice: a FRED API key gets you the value. It does not get you the right to publish the value. The series-page copyright notice from the underlying data provider survives the API delivery wrapper untouched.

### Rule 2 — The ICE BofA "Top Level Data" restriction is the sharpest version of Rule 1

Both OAS series carry an unusually strict ICE notice that all three models quote verbatim. The end-of-day index values, returns, and statistics ("Top Level Data") "are being provided for your internal use only and you are not authorized or permitted to publish, distribute or otherwise furnish Top Level Data to any third-party without prior written approval of ICE Data," and "reproduction of this data in any form is prohibited except with the prior written permission of ICE Data Indices" ([FRED BAMLC0A0CM](https://fred.stlouisfed.org/series/BAMLC0A0CM), [FRED BAMLH0A0HYM2](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)).

Read literally, this restriction sits in direct tension with publicly displaying the live number on a commercial market-intelligence page. Yet most public-facing finance sites do display these spreads. The reconciliation, surfaced by Claude Opus 4.8, is the **FRED Graphs license** — a separately enumerated carve-out in FRED's terms that permits users to "display and reproduce FRED charts and graphs, and permit others to publish, reproduce, and distribute them," provided you do not remove the FRED logo, data source, or titles, and the embedded chart is self-citing ([FRED Terms of Use](https://fred.stlouisfed.org/legal/)).

The practical, defensible path for the two OAS tiles is therefore to **embed the official FRED graph/widget (which carries its own attribution and keeps ICE in the chain of citation), rather than extracting the raw number via the API and re-publishing it as your own bare figure.** That is the difference between a licensed display and an unlicensed redistribution. Gemini 3.1 Pro would not even take this step; its position is that without ICE's written permission, the values stay off the page. Both positions are defensible — the choice is a legal-posture decision, not a technical one.

### How the rules cascade across the eight metrics

| Metric | Owner | Rule application | Net verdict |
|---|---|---|---|
| IG corporate OAS | ICE Data Indices | Rule 2 — Top Level Data | Embed FRED widget only (Opus) OR feed pending (Gemini) |
| HY corporate OAS | ICE Data Indices | Rule 2 — Top Level Data | Embed FRED widget only (Opus) OR feed pending (Gemini) |
| HY distress ratio | Fridson / S&P / Moody's; denominator is ICE-licensed | Rule 2 contagion via constituent OAS | Feed pending |
| TTM HY default rate | Moody's / S&P / Fitch | Agency-research copyright | Yellow — dated attributed monthly figure only |
| IG/HY new-issue volume | SIFMA | Statistical citation convention | Green with attribution |
| CDX IG / CDX HY | S&P / Markit | Permissioned commercial feed | Feed pending |
| EMBI Global Diversified | J.P. Morgan | "May not be reprinted, sold or redistributed" | Feed pending (free path); your licensed source stays primary |
| Leveraged-loan index | Morningstar (post-Aug 2022 rebrand from S&P/LSTA) | Proprietary, licensed | Feed pending for index level; yellow for attributed weekly discount-margin |

---

## Part 2 — Metric-by-metric unified sourcing plan

Each metric below integrates the strongest findings from all three reports: source identification, frequency and lag, exact definition and units, licensing constraints, fallback path, gotchas, and final verdict with reasoning. Where the models diverged, both readings are presented and the operational answer is named.

### Metric 1 — US Investment-Grade corporate OAS

**Verdict — YELLOW with a license asterisk.** Display via the embedded FRED widget; never as a bare extracted number on a commercial public page.

**(1) Best programmatic source.** FRED series ID `BAMLC0A0CM`, titled "ICE BofA US Corporate Index Option-Adjusted Spread." All three models confirmed your recollection ([FRED BAMLC0A0CM](https://fred.stlouisfed.org/series/BAMLC0A0CM)). Owner: ICE Data Indices, LLC; release: "ICE BofA Indices."

**(2) Frequency and lag.** Daily, close. Publication lag is roughly one US business day — the FRED page captured June 9, 2026 at 9:02 AM CDT showed the latest observation dated June 8, 2026 ([FRED BAMLC0A0CM](https://fred.stlouisfed.org/series/BAMLC0A0CM)). Treat as "T-1 by mid-morning US Central time" for refresh scheduling.

**(3) Exact field/series definition and units.** The OAS is the calculated, market-cap-weighted spread between an OAS index of all constituent bonds and a spot Treasury curve. The underlying ICE BofA US Corporate Index tracks USD-denominated, investment-grade (average of Moody's/S&P/Fitch ratings), publicly issued US-domestic corporate debt with greater than one year remaining maturity, fixed coupon, and at least **$250 million outstanding**. **Units: percent, not seasonally adjusted** — so 0.75 means 75 bps; multiply by 100 if your tile renders in bps ([FRED BAMLC0A0CM](https://fred.stlouisfed.org/series/BAMLC0A0CM)).

**(4) Licensing constraints for public display.** Restricted. ICE Data Indices owns the copyright; the FRED series page itself states "reproduction of this data in any form is prohibited except with the prior written permission of ICE Data Indices," and the Top Level Data clause ("internal use only ... not authorized or permitted to publish, distribute or otherwise furnish ... to any third-party") applies ([FRED BAMLC0A0CM](https://fred.stlouisfed.org/series/BAMLC0A0CM)). The defensible public-display path is the **FRED Graphs license carve-out** — embed the self-citing FRED chart/widget so the FRED logo, source attribution, and ICE chain are preserved ([FRED Terms of Use](https://fred.stlouisfed.org/legal/)). A bare numeric tile rendering "73 bps" as the site's own figure is the unlicensed case Gemini 3.1 Pro treats as off-limits and GPT-5.5 flags for legal sign-off.

**(5) Fallback.** No free, cleanly redistributable substitute exists. Available substitutes are *qualitative* corroboration only: free weekly commentaries from asset managers (e.g., Nuveen, Western Asset, BNP Paribas) routinely quote IG corporate spread color — for instance, a Bloomberg US Corporate Index spread of ~73 bps reported in [Nuveen's fixed-income weekly](https://www.nuveen.com/en-us/insights/fixed-income/fixed-income-weekly-commentary). Cite as context with date and source, not as the live tile.

**(6) Gotchas.**
- **April 2026 history truncation.** FRED now retains only three years of observations for this series. Charts assuming longer history will silently lose their tail ([FRED BAMLC0A0CM](https://fred.stlouisfed.org/series/BAMLC0A0CM)).
- **Month-end rebalancing.** The index rebalances on the last calendar day of the month using information through the third business day prior. Weekend observations can appear at month-ends due to accrued-interest adjustments — your "missing data" detector must not flag these as errors.
- **Percent vs. basis points.** The single most common production bug. Render as bps by multiplying the FRED value by 100, and label units explicitly.
- **String-typed value.** The FRED API returns `value` as a string; missing observations come back as `"."`. Coerce to float and null-handle the dot before display.

### Metric 2 — US High-Yield corporate OAS

**Verdict — YELLOW with a license asterisk, same license posture as IG.**

**(1) Best programmatic source.** FRED series ID `BAMLH0A0HYM2`, titled "ICE BofA US High Yield Index Option-Adjusted Spread" (the "High Yield Master II" OAS). Owner ICE Data Indices ([FRED BAMLH0A0HYM2](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)).

**(2) Frequency and lag.** Daily, close. T-1 by mid-morning US Central time. The FRED page captured June 10, 2026 at 9:29 AM CDT showed the latest observation dated June 9 at 2.78% ([FRED BAMLH0A0HYM2](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)).

**(3) Exact field/series definition and units.** Same OAS construction as the IG series, but over bonds rated below investment grade (BB or below), USD-denominated, US-domestic, greater than one year maturity, fixed coupon, and at least **$100 million outstanding** — note the lower size floor versus IG's $250 million, an asymmetry worth a tooltip if you place IG and HY tiles next to each other. **Units: percent, NSA** — 2.78 = 278 bps ([FRED BAMLH0A0HYM2](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)).

**(4) Licensing constraints for public display.** Identical to Metric 1 — ICE Top Level Data "internal use only," reproduction prohibited without written permission. Display through the embedded FRED widget under the FRED Graphs license carve-out; do not republish the bare extracted number on a commercial page ([FRED BAMLH0A0HYM2](https://fred.stlouisfed.org/series/BAMLH0A0HYM2), [FRED Terms of Use](https://fred.stlouisfed.org/legal/)).

**(5) Fallback.** Qualitative only. Free dealer/asset-manager weeklies cite the Bloomberg US HY 2% Issuer Capped Index spread (e.g., 265 bps in a [Nuveen weekly](https://www.nuveen.com/en-us/insights/fixed-income/fixed-income-weekly-commentary)) — this is a different index, so it functions as corroboration, not substitution.

**(6) Gotchas.**
- **April 2026 truncation** applies here too; three-year rolling window only.
- **Month-end rebalancing and weekend month-end prints** identical to IG.
- **Percent vs. bps trap** identical.
- **Defaulted-security exclusion.** Defaulted bonds are removed from the HY index, so the level can mechanically tighten when a large distressed name finally defaults and exits. This is a methodology nuance that is invisible in the value but material to interpretation — flag it in a tooltip if the tile sits next to default-rate context.
- **`BAMLH0A0HYM2` is also known historically as the "Master II" OAS.** Some legacy code references the older `BAMLHYM2H0A0` naming; the modern FRED ID is the one quoted above.

### Metric 3 — HY distress ratio (share of HY index with OAS ≥ 1000 bps)

**Verdict — RED. Keep as honest "feed pending."** This is the firmest "no" of the eight, and all three models reached it independently.

**The most credible regularly-updated public figure does not exist as a free programmatic feed.** The closest credible recurring source is **Marty Fridson's research** (FridsonVision / Lehmann Livian Fridson Advisors), which defines the metric exactly the way you do — "percentage of issues in the ICE BofA US High Yield Index with option-adjusted spread" at or above the distress threshold, with point examples such as 6.96% as of May 31, 2024 published inside the paid FridsonVision High Yield Strategy letter ([FridsonVision](https://fridson.com/wp-content/uploads/2024/06/Fridson-High-Yield-Strategy.pdf), [FridsonVision model description](https://fridson.com/model-description/)). Fridson also writes periodic public-domain commentary for the CFA Institute Research & Policy Center on the same topic ([CFA Institute — "Think We've Seen the Last +1000-BPS High Yield Spread?"](https://rpc.cfainstitute.org/blogs/enterprising-investor/2025/think-weve-seen-the-last-1000-bps-high-yield-spread-think-again)). J.P. Morgan publishes a parallel figure inside its proprietary HY research that asset managers like Eaton Vance reproduce monthly in fund literature with permission ([Eaton Vance High Yield Market Monitor, Q1 2026](https://www.eatonvance.com/content/dam/im/assets/publication/thought-leadership/article/article_highyieldmarketmonitor_q12026.pdf?1778544000225)) — Eaton Vance explicitly notes that J.P. Morgan index information is used with permission and may not be copied or distributed without prior written approval.

**Why this cannot be responsibly synthesized for free, even though the definition is simple:**

1. **The denominator is licensed.** Computing the ratio requires constituent-level OAS for every bond in the ICE BofA US HY Index. That underlying data is the same ICE intellectual property carrying the "internal use only, reproduction prohibited" restriction. FRED only exposes the *aggregate* OAS, not the constituent distribution — there is no free public field from which the ratio can be derived ([FRED BAMLH0A0HYM2](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)).
2. **Threshold conventions vary materially.** Some analysts use ≥1000 bps OAS; J.P. Morgan and Eaton Vance use spread-to-worst greater than 1000 bps; ICE publishes a dedicated "ICE BofA US Distressed High Yield Index" subindex with its own membership rules; Fridson's variant layers an additional BB-rating filter inside the distressed cohort ([FridsonVision](https://fridson.com/wp-content/uploads/2024/06/Fridson-High-Yield-Strategy.pdf)). Publishing "the" distress ratio without specifying which convention would itself be a methodological misrepresentation.
3. **S&P and Moody's distress-ratio variants are equally gated** behind their respective research products, with the same redistribution prohibitions.
4. **Free public snapshots are not feeds.** The Eaton Vance Q1 2026 monitor (dated March 31, 2026) is the highest-quality public snapshot any of the models found, but it is a quarterly PDF with no stated machine-readable cadence and incorporates J.P. Morgan data under permission. Scraping it does not create a license.

**Operational recommendation.** Keep the tile as "feed pending" with an explanatory tooltip describing why. If you want to surface *some* color, the only honest move is a **manually-curated, dated, attributed quote** from a public Fridson/CFA Institute commentary or a fund-literature snapshot — presented as a dated reference, never as live data, with the methodology convention (≥1000 bps OAS vs. spread-to-worst) labeled. A live numeric tile here would be invented, unlicensed, or methodologically ambiguous — possibly all three.

### Metric 4 — Trailing 12-month US HY default rate

**Verdict — YELLOW.** Automate the *published figure with its date, methodology label, and source*, not a live computed number. There is no free real-time feed, but there is a reliable monthly publication cadence you can track.

**(1) Best public sources, free to read on a schedule.**
- **Moody's Monthly Default Report.** Moody's has "long published" a trailing-12-month speculative-grade default rate back to 1970 in its Monthly Default Report, including both an issuer-weighted headline and a separate dollar-volume-weighted series ([Moody's — Dollar Volume-Weighted Default Rates methodology PDF](https://www.moodys.com/sites/products/DefaultResearch/2001900000419787.pdf), [Moody's US Corporate Credit Risk, July 2025](https://www.moodys.com/web/en/us/insights/resources/us-report-july-2025.pdf)). Recent headline values circulate widely: US speculative-grade rate was 5.3% in October 2025, with Moody's baseline projecting 4.4% by December 2025 ([Moody's TTM default summary, via LinkedIn](https://www.linkedin.com/posts/mironas_moodys-reported-that-its-trailing-12-month-activity-7396566015083671553-zeIm)).
- **Fitch Ratings leveraged-finance default research**, published roughly monthly, with a convenient free aggregator. The **LSTA's Fitch Ratings Commentary Page** links each monthly release on a stable URL — e.g., "U.S. Default Rates Hold Steady…" posted March 16, 2026 ([LSTA — Fitch Ratings Commentary Page](https://www.lsta.org/content/fitch-ratings-commentary-page/), [Fitch — US HY/Loan Default Rates Rise Modestly, Feb 17, 2026](https://www.fitchratings.com/research/corporate-finance/us-hy-loan-default-rates-rise-modestly-credit-conditions-stay-constructive-17-02-2026), [Fitch — Leveraged Loan Default Rate Edges Higher in July, Aug 19, 2025](https://www.fitchratings.com/research/corporate-finance/leveraged-loan-default-rate-edges-higher-in-july-ddes-dominate-default-volume-19-08-2025)).
- **American Bankruptcy Institute (ABI) summary feed** of Fitch's monthly U.S. Distressed & Default Corporate Monitor provides a third-party narrative entry point ([ABI summary of Fitch report](https://www.abi.org/node/1000963)).
- **S&P Global Ratings Default, Transition, and Recovery** articles, e.g., the monthly "Defaults slide for the third straight month" series ([S&P — Default, Transition and Recovery](https://www.spglobal.com/ratings/en/regulatory/article/default-transition-and-recovery-defaults-slide-for-the-third-straight-month-s101685400)).

**(2) Cadence and lag.** Monthly summaries, typically released mid-month for the prior month-end; the TTM rate inherently lags by design because it covers the prior 12 months.

**(3) Exact field/series definition and units.** Percent. The critical point — and Claude Opus 4.8 is the only model that surfaced this fully — is that **"default rate" is not one number.** Moody's headline is **issuer-weighted**, but it also publishes a **dollar-volume-weighted** speculative-grade rate (defaulted dollar volume over the past 12 months divided by dollar volume outstanding at the start of the period). Methodology differences materially shift the number:
- **DDE inclusion swings the rate by roughly 3×.** Moody's reported an all-HY rate of 5.8% in June 2025 that fell to 2.1% once distressed exchanges (DDEs) were excluded, with DDEs comprising 64% of first-half-2025 credit events ([Moody's US Corporate Credit Risk, July 2025](https://www.moodys.com/web/en/us/insights/resources/us-report-july-2025.pdf)).
- **Bond-only vs. bond-plus-loan universes** differ between agencies; Fitch breaks out HY bonds and leveraged loans separately, while Moody's speculative-grade rate is a unified measure.
- **Distressed exchanges vs. selective default vs. default-restructuring treatment** varies by rating agency.
- **Issuer-count vs. par-weighted** computations co-exist within the same agency.

You must label which definition your tile shows. Eaton Vance's monitor, for example, defines its default rate as "last 12 months by par value including distressed exchanges" ([Eaton Vance HY Monitor Q1 2026](https://www.eatonvance.com/content/dam/im/assets/publication/thought-leadership/article/article_highyieldmarketmonitor_q12026.pdf?1778544000225)) — a fully specified label that your tile should mirror.

**(4) Licensing.** Rating-agency reports are copyrighted research. Fitch's terms prohibit copying, repackaging, transmitting, disseminating, redistributing, reselling, or storing Fitch information for such purposes without prior written consent ([Fitch Group terms](https://www.fitch.group/terms-of-use)). Moody's terms similarly restrict redistribution and automated extraction ([Moody's terms](https://www.moodys.com/web/en/us/legal/terms-of-use.html)). S&P Ratings articles can be account-gated. The defensible posture is normal journalistic/market-commentary use — **quoting one figure with attribution and date** (e.g., "US spec-grade TTM default rate: 5.3%, Moody's, October 2025") is conventional and widely practiced; *re-publishing the agency's data tables or building a live mirror feed* is not. Stay on the journalistic side: one headline number, full attribution, date, methodology label, refreshed manually or semi-automatically when the new monthly report lands.

**(5) Fallback.** Cross-agency redundancy — track Fitch via the LSTA aggregator and Moody's via its monthly releases; use S&P's monthly default articles as a third corroborating source. For loans specifically, Fitch's "Leveraged Loan Default Insight" provides a parallel cadence to its bond default research.

**(6) Gotchas.**
- **Revisions are routine.** Preliminary monthly figures get restated as defaults are confirmed or reclassified; Moody's even announced replacing a legacy dollar-volume series with a revised one "going forward" ([Moody's dollar-volume methodology](https://www.moodys.com/sites/products/DefaultResearch/2001900000419787.pdf)).
- **Agency-to-agency divergence.** Different universes, different DDE treatments, different rating-coverage scopes — Moody's, S&P, and Fitch numbers will not match. Never blend them in one tile.
- **Methodology label is mandatory.** Issuer- vs. dollar-weighted, with/without DDEs, bond-only vs. bond-plus-loan must be disclosed in the UI, not in a methodology page nobody reads. Tooltip directly on the tile.
- **No stable machine-readable URL.** Each monthly report has a unique URL; the LSTA Fitch aggregator page is the closest thing to a stable index for Fitch releases.

**Why not RED.** A credibly attributed, clearly dated "latest published" figure refreshed monthly is honest and useful — it is the *narrative* of default risk, not a fabricated live tick. The Yellow designation is exactly the right calibration: feed-pending is too austere for a metric this widely cited, but a live tile would be a misrepresentation given the revision and definition variance.

### Metric 5 — US IG and HY new-issue volume

**Verdict — GREEN, with one license caveat from GPT-5.5 worth weighing.** This is your cleanest free, redistributable, primary-source win.

**(1) Best programmatic source.** **SIFMA US Corporate Bonds Statistics.** SIFMA Research tracks issuance, trading, and outstanding data, with **issuance explicitly broken out into investment grade vs. high yield** (and separately by convertible/nonconvertible, callable/noncallable, fixed/floating) ([SIFMA — US Corporate Bonds Statistics](https://www.sifma.org/research/statistics/us-corporate-bonds-statistics/)).

**(2) Frequency and lag.** Monthly statistics file, also quarterly and annual. The SIFMA page captured June 2, 2026 reported issuance through May of $1,226.8 billion YTD (+21.1% Y/Y), implying a one-to-two-week lag after month-end ([SIFMA](https://www.sifma.org/research/statistics/us-corporate-bonds-statistics/)).

**(3) Exact field/series definition and units.** USD volume of US corporate bond issuance, split IG vs. HY. Delivered as a downloadable **.xls** workbook; **there is no public API** — you automate by fetching and parsing the spreadsheet on a schedule.

**(4) Licensing.** SIFMA publishes these as public research statistics intended for citation. Two readings emerged across the models:
- **Mainstream reading (Gemini 3.1 Pro and Claude Opus 4.8):** Display with "Source: SIFMA" attribution. This is conventional fair use and is how the figures are widely re-reported by financial media.
- **Strict reading (GPT-5.5):** SIFMA's site terms describe documents as for "personal, noncommercial use," with summarized excerpts requiring source attribution and link-back, and full documents not to be sold, distributed, transferred, or made available to third parties without express written consent ([SIFMA terms](https://www.sifma.org/terms-of-use/)). On a commercial market-intelligence site, the prudent posture is the **summarized-with-attribution-and-link-back** path — display the IG and HY headline numbers, attribute SIFMA, link back to the source page on every tile. Do not republish the underlying .xls workbook itself.

The operational answer is to ship Green with the attribution-plus-link-back pattern. A simple "Source: SIFMA, monthly" footer per tile, with the tile linking through to the SIFMA statistics page, satisfies both readings.

**(5) Fallback.**
- **SEC Corporate Bond Offerings (quarterly)** — surfaced uniquely by GPT-5.5. A public-domain, license-clean aggregate of total registered nonconvertible corporate bond proceeds. No IG/HY split, excludes 144A/private placements, but useful as a redundant total-issuance sanity check ([SEC corporate bond offerings](https://www.sec.gov/data-research/statistics-data-visualizations/corporate-bond-offerings)).
- **Weekly flow color from free dealer/asset-manager commentaries** — e.g., "IG new issuance ~$45.5bn, YTD >$1tn, 25.7% ahead of 2025; HY primary $13.3bn" from [Nuveen fixed-income weekly](https://www.nuveen.com/en-us/insights/fixed-income/fixed-income-weekly-commentary). These give a weekly cadence between SIFMA's monthly drops; treat as third-party commentary, attributed and dated.
- **FINRA TRACE Issue Master / Daily List** can help identify new TRACE-eligible securities, but access is subscription-based, CUSIP data requires CGS licensing, and the FAQ does not confirm that ratings, IG/HY category, or issue size are included ([FINRA TRACE FAQ](https://www.finra.org/filing-reporting/trace/faq)). Not a true public fallback.

**(6) Gotchas.**
- **SIFMA periodically revises prior months** as deals settle. Your pipeline should overwrite, not append.
- **IG/HY classification is SIFMA's convention**, which can differ from index-provider definitions, so it will not tie out exactly to ICE/Bloomberg index membership. This is a feature, not a bug, but disclose it.
- **The .xls layout occasionally changes tabs/columns.** Build the parser defensively and alert on schema drift rather than silently mis-mapping a column. This is the single most likely production-failure mode for this tile.
- **No public API means fetch-and-parse is the only path** — that is a higher fragility surface than a JSON endpoint and warrants explicit health checks (file size sanity bounds, expected column headers, row-count floors).

### Metric 6 — CDX IG and CDX HY index levels

**Verdict — RED. Keep as honest "feed pending."** No responsible free public-display source exists.

**Source structure.** CDX indices are owned and administered by **S&P/Markit (CDX)**. The official index levels are "published at the end of each business day in the indices section on markit.com for registered users," distributed via "Markit FTP Server / Markit website / Bloomberg / Reuters" at New York close ([Markit — CDX North American High Yield Credit Index Guide](https://www.jhetf.com/wp-content/uploads/2020/03/CDX-North-American-High-Yield-Credit-Index-Guide-2019-04.pdf), [S&P Global — CDX Tradable CDS Indices landing page](https://www.spglobal.com/spdji/en/landing/topic/cdx-tradable-cds-indices/), [S&P CDX rules PDF](https://www.spglobal.com/spdji/en/documents/methodologies/sp-cdx-hy-ig-index-rules.pdf)). "Registered users" and "licensed redistributors" are the operative phrases — this is a permissioned, commercial feed, not an open data source.

**Index definitions and units.** CDX.NA.HY measures 100 liquid North American HY CDS entities, and CDX.NA.IG measures 125 liquid North American IG CDS entities. A CFTC filing confirms that HY is traded on price and IG is traded on spread, with fixed coupons of 500 bps and 100 bps respectively ([CFTC CDX filing](https://www.cftc.gov/sites/default/files/filings/ptc/15/12/ptc121715tpsefsef002.pdf), [S&P CDX rules PDF](https://www.spglobal.com/spdji/en/documents/methodologies/sp-cdx-hy-ig-index-rules.pdf)). On-the-run series roll semi-annually — HY rolls around March/September 27 and IG around March/September 20 — but market levels are intraday/EOD dealer-market data rather than a free public scheduled statistic.

**Licensing.** Definitively closed. S&P DJI terms prohibit display, publication, distribution, storage, or derivative works from S&P content without prior written consent ([S&P DJI terms](https://www.spglobal.com/spdji/en/terms-of-use/)). The CDX methodology document itself states that a license is required to display or distribute a product or service using S&P index data ([S&P CDX rules PDF](https://www.spglobal.com/spdji/en/documents/methodologies/sp-cdx-hy-ig-index-rules.pdf)). There is no Graphs-license style carve-out.

**Apparent "free" alternatives that fail the responsibility test.**
- **Investing.com** hosts a "CDX Network Index" historical-data page, but (a) it is a site-specific construct rather than the official Markit CDX.NA.IG/CDX.NA.HY level, and (b) re-publishing its values would both violate Investing.com's terms and misrepresent the underlying index ([Investing.com CDX Network Index historical data](https://www.investing.com/indices/investing.com-cdx-usd-historical-data)).
- **ETF/structured-product proxies** (e.g., HYG and LQD as price proxies) exist but are not the index level.
- **Free brokerage and finance portals** occasionally display CDX last prints; these are typically delayed and explicitly non-redistributable under those portals' terms.

**Fallback for the redundancy layer.** Licensed S&P Global Market Intelligence, Bloomberg, Refinitiv, FactSet, or broker/SEF data with web redistribution rights — i.e., not free. Until commercial licensing is in place, "feed pending" is the correct, honest state. As a *qualitative* stopgap you may cite free narrative on CDS index direction from dealer commentaries, but you should not post a live numeric CDX tile.

**Gotchas if you do license.**
- **Series rolls** create symbol/series changes twice per year — your pipeline must track on-the-run vs. off-the-run series numbers and avoid stitching different series into one history without an explicit splice.
- **Price vs. spread quotation conventions differ** between IG (quoted in spread, fixed 100 bps coupon) and HY (quoted in price, fixed 500 bps coupon). A tile that shows "level" must be unambiguous about which.
- **Holidays and roll-day pricing anomalies** are common and look like data errors to naive monitors.

### Metric 7 — EMBI Global Diversified spread

**Verdict — RED for a *live, free, redistributable* spread.** You already have a (presumably licensed) source — treat the alternatives below as redundancy with explicit caveats.

**Ownership and primary source.** The EMBI Global Diversified is a **J.P. Morgan proprietary index**. J.P. Morgan's index documentation is unambiguous: the material "may not be reprinted, sold or redistributed without the written consent of J.P. Morgan," and it is "strictly prohibited to use or share without prior written consent … any research material received from J.P. Morgan or an authorized third-party ('J.P. Morgan Data')" ([J.P. Morgan — EMBI Global Diversified Select Index Methodology](https://www.jpmorgan.com/content/dam/jpm/cib/complex/content/markets/composition-docs/jp-morgan-embi-global-diversified-select-index.pdf), [J.P. Morgan EMBI methodology overview PDF](https://www.jpmorgan.com/content/dam/jpm/cib/complex/content/markets/composition-docs/pdf-27.pdf)). The official spread is not a free redistributable feed; your existing arrangement is presumably a licensed terminal or data feed, which is the right way to carry it.

**Index definition.** EMBI Global Diversified tracks liquid USD-denominated EM sovereign and quasi-sovereign debt. The methodology specifies pricing from PricingDirect, month-end rebalancing, USD-denominated eligibility, and a diversification cap that re-weights large issuers so they do not dominate the index ([J.P. Morgan EMBI methodology](https://www.jpmorgan.com/content/dam/jpm/cib/complex/content/markets/composition-docs/jp-morgan-embi-global-diversified-select-index.pdf)).

**Redundancy alternatives and their lags.** Three independent fallbacks emerged across the models, with sharply different operational profiles.

1. **iShares J.P. Morgan USD Emerging Markets Bond ETF (EMB) — Claude Opus 4.8's contribution.** EMB tracks the EMBI Global Diversified family; its published yield and holdings give a same-day, free *proxy* for direction. It is the fund net of fees and tracking error, not the index spread, so it must be clearly labeled "ETF proxy." Useful as a directional backstop only ([ETF Database — J.P. Morgan EMBI Global Diversified Index](https://etfdb.com/index/jpmorgan-embi-global-diversified-index/)).

2. **Asset-manager fact sheets — common to all three reports.** Index level and yield appear in fund literature under "Source: J.P. Morgan, as of [month-end]" — for example, Western Asset and BNP Paribas materials ([Western Asset Emerging Markets Diversified](https://www.westernasset.com/common/pdfs/ir_qtr_20232q_emerging_markets_diversified.pdf), [BNP Paribas Easy JPM ESG EMBI GD](https://docfinder.bnpparibas-am.com/api/files/65bb2bd8-b9a0-49d9-b1c0-0f4fc5183a3c/512)). These lag by up to a month, and re-publishing the figure still relies on J.P. Morgan's underlying rights — quote with attribution and date only.

3. **World Bank GEM / DataBank — GPT-5.5's contribution.** Public-sector EM bond data with daily updates is available through World Bank's GEM and DataBank platforms, generally CC BY 4.0 licensed unless third-party metadata states otherwise ([World Bank GEM DataBank](https://databank.worldbank.org/id/1e5782c9), [World Bank dataset terms](https://www.worldbank.org/en/about/legal/terms-of-use-for-datasets)). However, the EMBI itself is a J.P. Morgan product, and public machine-readable EMBI spread metadata was not reliably exposed through the standard World Bank v2 indicator catalog. Useful as a *different EM-spread construct*, not as an EMBI substitute.

4. **ICE BofA `BAMLEMCBPIOAS` on FRED — Gemini 3.1 Pro's caveat.** This is the ICE BofA Emerging Markets Corporate Plus Index OAS — a corporate-EM proxy, not the sovereign EMBI. It also carries the same ICE "Top Level Data, internal use only" restriction as the IG/HY OAS series, and the same April 2026 three-year truncation ([FRED BAMLEMCBPIOAS](https://fred.stlouisfed.org/series/BAMLEMCBPIOAS)). Not a clean free fallback.

**Gotchas.**
- **EMBI Global vs. EMBI Global Diversified vs. EMBI Global Diversified Select** are three different indices with different methodologies. Do not mix them ([J.P. Morgan methodology](https://www.jpmorgan.com/content/dam/jpm/cib/complex/content/markets/composition-docs/jp-morgan-embi-global-diversified-select-index.pdf)).
- **Month-end rebalancing on the EMTA calendar** can cause apparent jumps that are mechanical, not market-driven.
- **PricingDirect pricing** means the EMBI uses a specific pricing source — independent pricing services will not exactly replicate the level.
- **Diversification cap** means large issuers are not weighted proportional to their outstanding debt; comparing EMBI GD with simple market-cap-weighted EM aggregates is apples-to-oranges.

### Metric 8 — Leveraged-loan index level or spread (Morningstar LSTA, formerly S&P/LSTA)

**Verdict — YELLOW that is effectively RED for a free *live index level*; automate the *attributed weekly discount-margin narrative* instead.**

**The discontinuity that anchors this metric.** This is the textbook case for your methodology-change concern, and Claude Opus 4.8 surfaced it uniquely. The benchmark formerly known as the **S&P/LSTA Leveraged Loan Index** no longer exists under that name. Effective **August 29, 2022**, after Morningstar acquired Leveraged Commentary & Data (LCD) from S&P Global, **all S&P Leveraged Loan Indexes were rebranded to Morningstar Leveraged Loan Indexes** and are now administered by Morningstar Indexes ([Morningstar — Rebranding of Leveraged Loan Indexes, Aug. 29, 2022](https://advisor.morningstar.com/ReleaseNewsLive/releasePopUp.aspx?Id=851&type=Release+Notes&name=Licensed+Data)). The mapping:

| Old name (pre-Aug 2022) | New name |
|---|---|
| S&P/LSTA Leveraged Loan TR | Morningstar LSTA US Leveraged Loan TR USD |
| S&P/LSTA U.S. Leveraged Loan 100 TR USD | Morningstar LSTA US Leveraged Loan 100 TR USD |
| S&P/LSTA Performing Loan TR | Morningstar LSTA US Performing Loans TR USD |

The underlying FundIDs and SecIDs were preserved, but the names and feed-field labels changed. **Any pipeline that hard-codes "S&P/LSTA" as a label, breadcrumb, or string match will silently mislabel its tile.** This is exactly the kind of discontinuity that produces a "stale but plausible" tile — the worst failure mode on a market-intelligence page.

**(1) Source.** Morningstar Indexes (Morningstar LSTA US Leveraged Loan Index). The Morningstar Indexes site hosts the methodology document and per-index pages, but performance values for the full index are largely gated — sub-index pages display "Performance data is not available for this index" in their public views ([Morningstar Indexes — LSTA Leveraged Loan sub-index page](https://indexes.morningstar.com/indexes/details/morningstar-lsta-us-leveraged-loan-100-consumer-durables-apparel-FS0000HRLT), [Morningstar — Leveraged Loan Indexes Methodology](https://indexes.morningstar.com/api/docs/69bd3e9250ca695336d4045f)).

**(2) Frequency and lag.** Loan index levels are computed daily, priced using 3:00 PM ET prices, and rebalanced weekly every Friday after the close, with new membership effective Saturday. The *public/free* surfacing of the level is not on a clean redistributable feed.

**(3) Exact field/series definition and units.** Index values include total-return, price-return, and interest-return index values; yield is a weighted aggregation of constituent yields, and defaulted loans are excluded from index-level yield calculations. Note that free weeklies typically quote a **senior-loan spread as a 3-year discount margin** (e.g., 486 bps), explicitly "Source: Bloomberg L.P. and Standard & Poor's" — a different vendor construct again ([Nuveen fixed-income weekly](https://www.nuveen.com/en-us/insights/fixed-income/fixed-income-weekly-commentary)). Loan spread is a *discount margin*, not an option-adjusted spread; it is not comparable to the bond OAS tiles and must be labeled accordingly.

**(4) Licensing.** Morningstar LSTA index data is licensed; public redistribution of the live level is not free. Morningstar's methodology document says the indexes are proprietary and "no use or publication may be made of any index, provision, or value without prior written consent" ([Morningstar leveraged-loan methodology](https://indexes.morningstar.com/api/docs/69bd3e9250ca695336d4045f)). S&P Global's legacy/related loan-default research is similarly gated ([S&P Global — Morningstar LSTA US Leveraged Loan Index default rate study](https://www.spglobal.com/ratings/en/regulatory/article/220831-default-transition-and-recovery-the-morningstar-lsta-u-s-leveraged-loan-index-default-rate-could-rise-to-2-s12486511)). Asset-manager snapshots that show S&P UBS or Morningstar LSTA loan price/spread tables (e.g., the Invesco US loan markets snapshot) are explicitly "not intended for public distribution and may not be reproduced or furnished to others" ([Invesco loan market snapshot](https://www.invesco.com/content/dam/invesco/be/en/pdf/senior-secured-loans/Invesco-us-loan-markets-snapshot.pdf)).

**(5) Fallback paths.**
- **Attributed weekly narrative discount-margin from free dealer/asset-manager commentaries** ([Nuveen fixed-income weekly](https://www.nuveen.com/en-us/insights/fixed-income/fixed-income-weekly-commentary)). This is the most operationally useful free path — dated, attributed, ships as a Yellow tile with the discount-margin label and the "as of" week.
- **Bank-loan ETF NAVs (e.g., BKLN, SRLN)** as a directional proxy, clearly labeled as a proxy, not the index. Claude Opus 4.8's contribution.
- **License Morningstar Indexes** for the actual level — the only path to a live, defensible numeric tile.

**(6) Gotchas.**
- **The August 29, 2022 rebrand** — alert on source-name strings, not just on missing data. A pipeline that keeps returning a "Morningstar LSTA US Leveraged Loan 100 TR USD" value but still labels it "S&P/LSTA" on the tile is wrong, and the failure is silent.
- **Discount margin vs. OAS** — loan spread is not directly comparable to bond OAS. If you put a loan-spread tile next to the HY OAS tile, label both methodologies.
- **Methodology changed around base-rate application effective Dec. 27, 2024** ([Morningstar methodology](https://indexes.morningstar.com/api/docs/69bd3e9250ca695336d4045f)); historical comparisons must respect this break.
- **Defaulted-loan treatment** can stop accrual *before* a D-rating, affecting yield calculations in subtle ways.
- **Friday rebalances create timing issues around holidays** — your monitor needs holiday-aware expected-update dates.
- **Divergent vendor definitions** — Morningstar vs. Bloomberg vs. legacy S&P loan spreads will not match. Pick one, label it explicitly.

---

## Part 3 — FRED API: terms, rate limits, and exact REST shape

This section integrates the engineering detail across all three reports, especially GPT-5.5's depth.

### API key terms

A free FRED API key is required for every request. The key is a **32-character lowercase alphanumeric string**. The demo key `abcdefghijklmnopqrstuvwxyz123456` is illustrative only and must be replaced with a registered key ([FRED API key docs](https://fred.stlouisfed.org/docs/api/api_key.html)). FRED documentation explicitly recommends requesting **a distinct API key for each application** to simplify rotation and abuse detection.

Use of the API is governed by the FRED API Terms of Use ([FRED API Terms](https://fred.stlouisfed.org/docs/api/terms_of_use.html)). Critically, **the API grants no rights over third-party data**: the ICE BofA restrictions on `BAMLC0A0CM` and `BAMLH0A0HYM2` (Rule 2 above) survive the API delivery wrapper.

### Rate limits — two readings, one operational answer

- **Official position (GPT-5.5's reading).** FRED's terms do not publish a fixed numeric rate limit. They reserve the right to impose or adjust bandwidth and transaction limits, and the error documentation lists HTTP 429 "Too Many Requests" as the rate-limit response ([FRED API errors](https://fred.stlouisfed.org/docs/api/fred/errors.html), [FRED API Terms](https://fred.stlouisfed.org/docs/api/terms_of_use.html)).
- **Community-confirmed practical ceiling (Gemini 3.1 Pro and Claude Opus 4.8).** **120 requests per minute** is the de facto limit, sourced from FRED Support via the [Alteryx Community](https://community.alteryx.com/discussion/586941/problem-with-alteryx-and-fred-api). Exceeding this triggers throttling.

**Operational answer.** Plan around 120 requests/minute as a soft ceiling, but build for HTTP 429 handling because no contract-grade number is published. Each observations request returns up to **100,000 records**, with pagination via the `offset` parameter for larger pulls.

### Refresh cadence for daily OAS tiles

GPT-5.5's recommended pattern, refined to your specific use case:

1. **Primary poll once per US business day at 10:15 Central time** (about 75 minutes after the typical FRED morning publication window).
2. **Retry at 12:15 and 16:15 Central** only if the latest observation date is older than the expected prior business day.
3. **Cap at six observation calls per day across two series** — orders of magnitude below any plausible limit.
4. **Alert if `last_updated` changes but the latest valid observation date does not advance for two expected business days** — this catches FRED publishing a vintage revision without new data, which would otherwise produce a confusingly fresh-looking tile.

### Exact REST call shape

**Base URL:** `https://api.stlouisfed.org/fred/series/observations`
**Required parameters:** `series_id`, `api_key`. `file_type` defaults to `xml`; set `file_type=json` for JSON.
**Useful optional parameters:** `observation_start`, `observation_end` (both `YYYY-MM-DD`), `units` (`lin` is raw level — leave as default for OAS), `frequency` (`d` daily; you cannot request a *higher* frequency than the series' native frequency), `sort_order` (`asc`/`desc`), `offset`, `limit`.

**Example 1 — last 30 days of HY OAS in JSON (curl with URL-encoded params):**

```bash
curl -sS 'https://api.stlouisfed.org/fred/series/observations' \
  --get \
  --data-urlencode "series_id=BAMLH0A0HYM2" \
  --data-urlencode "api_key=$FRED_API_KEY" \
  --data-urlencode "file_type=json" \
  --data-urlencode "observation_start=2026-05-12" \
  --data-urlencode "sort_order=desc" \
  --data-urlencode "limit=30"
```

**Example 2 — IG OAS full available history as CSV (returned as a zipped archive containing CSV plus README):**

```
https://api.stlouisfed.org/fred/series/observations?series_id=BAMLC0A0CM&api_key=YOUR_32_CHAR_KEY&file_type=csv
```

**Example 3 — validate series metadata before accepting into production:**

```bash
curl -sS 'https://api.stlouisfed.org/fred/series' \
  --get \
  --data-urlencode "series_id=BAMLC0A0CM" \
  --data-urlencode "api_key=$FRED_API_KEY" \
  --data-urlencode "file_type=json"
```

The metadata endpoint requires `api_key` and `series_id`; its JSON response contains a `seriess` array with fields including `id`, `title`, `observation_start`, `observation_end`, `frequency`, `units`, `seasonal_adjustment`, `last_updated`, and `notes`. Use this to validate `units == "Percent"`, `frequency == "Daily"`, and to read the current copyright notice in `notes` on every deploy ([FRED series metadata API](https://fred.stlouisfed.org/docs/api/fred/series.html)).

### Response schema and parsing traps

FRED observation responses include top-level fields: `realtime_start`, `realtime_end`, `observation_start`, `observation_end`, `units`, `output_type`, `file_type`, `order_by`, `sort_order`, `count`, `offset`, `limit`, plus an `observations` array. Each observation contains `realtime_start`, `realtime_end`, `date`, and `value` ([FRED API observations docs](https://fred.stlouisfed.org/docs/api/fred/series_observations.html)).

The two non-obvious traps:
- **`value` is a string, not a number.** Coerce to float on ingest.
- **Missing observations are the literal string `"."`.** Null-handle the dot before display, never attempt to render it as 0.

Store the `realtime_start` / `realtime_end` vintage fields with every observation, so you can detect FRED vintage revisions and surface "data revised" badges on the tile when the realtime range changes.

---

## Part 4 — Recommended pipeline architecture (the two-layer pattern)

GPT-5.5's contribution, expanded with the licensing-flag enforcement that follows from the rest of this analysis. This pattern operationalizes the licensing principle as a database constraint rather than a developer convention.

### Layer 1 — `raw_observation` (audit log, never displayed)

Every fetch is logged, even failed ones. Columns:

| Column | Purpose |
|---|---|
| `source_url` | Exact URL fetched |
| `series_id` or document key | The metric identifier (e.g., `BAMLH0A0HYM2`) |
| `retrieved_at` | UTC timestamp |
| `http_status` | Including 429 throttle responses |
| `etag` / `last_modified` | For cache validation |
| `raw_payload` | The full response body |
| `license_class` | One of: `public_domain`, `display_allowed`, `internal_only`, `paid_license_required`, `unknown` |
| `vintage_realtime_start` / `vintage_realtime_end` | For FRED revision tracking |

### Layer 2 — `display_metric` (materialized to the page only if all checks pass)

A row from `raw_observation` is promoted to `display_metric` only if it passes all of:

1. **License check** — `license_class IN ('public_domain', 'display_allowed')`. For ICE BofA OAS, `license_class = 'internal_only'`, which means the bare value never reaches `display_metric`; instead, the tile renders the embedded FRED widget pointing at the same series.
2. **Freshness check** — latest observation date is within the expected business-day lag for the series.
3. **Units check** — `units` field matches the expected string (e.g., `"Percent"` for OAS).
4. **Frequency check** — `frequency` matches expected (e.g., `"Daily, Close"` for OAS).
5. **Schema check** — for SIFMA's .xls, expected column headers and row-count floor; alert on drift rather than silently mis-mapping.
6. **Definition hash check** — store a hash of the methodology document for each series and alert if it changes (catches mid-stream methodology revisions like the Dec 27, 2024 Morningstar base-rate update).

### Tile state machine

- **`live`** — promoted row in `display_metric`, age within freshness budget. Render the value (or embed the widget for `internal_only`-but-FRED-widget-allowed cases).
- **`latest_published`** — yellow tile. Show the most recent dated, attributed figure with an "as of" date. Used for TTM HY default rate and leveraged-loan discount margin.
- **`feed_pending`** — red tile. Show a clearly labeled empty state with the reason ("licensed feed required" / "no responsible free source"), not a stale value. Used for HY distress ratio, CDX IG/HY, EMBI GD live spread on the free path.
- **`stale`** — promoted row exists but is past freshness budget. Render the dated value with a "data stale" badge and a timestamp; do not silently keep showing yesterday's number as if it were today's.

### Alerting

Beyond standard liveness checks, alert specifically on:

- **Source-name drift** — if a fetched document or page title no longer contains the expected vendor brand string (the S&P/LSTA → Morningstar LSTA rebrand is the canonical example).
- **Vintage revision without date advance** — `last_updated` ticks but the latest observation date does not, indicating an in-place revision of historical data.
- **Methodology hash change** — vendor has updated the methodology document. Manual review required before continuing to render.
- **SIFMA schema drift** — column order or sheet names changed in the monthly .xls.
- **FRED 3-year truncation in effect** — if your stored history exceeds the FRED-served history, prefer your cached vintage; do not silently truncate the front-end chart.

---

## Part 5 — The "feed pending" rationale, ranked by firmness

You said you would rather show nothing than show a stale or unlicensed number. Held to that standard, here is the explicit list of metrics that cannot be responsibly automated from free sources for public display, ranked by how firmly the council says "no":

1. **HY distress ratio — NO (firmest).** No free, scheduled, redistributable source. The credible figure (Fridson and J.P. Morgan variants) is proprietary and periodic; the underlying constituent OAS data is ICE-licensed and not publicly exposed; threshold conventions differ between providers. A live tile here would be invented, unlicensed, or methodologically ambiguous — possibly all three. Keep as `feed_pending`. Optionally show a manually-curated, dated, attributed Fridson or CFA Institute quote, never presented as live.

2. **CDX IG / CDX HY live levels — NO.** Official levels are a permissioned Markit/S&P feed for registered users and licensed redistributors. Free web sources are either unofficial proxies (Investing.com's "CDX Network Index") or would violate the source's terms to republish. Without a commercial license, keep as `feed_pending`.

3. **EMBI Global Diversified live spread on the free path — NO.** J.P. Morgan prohibits redistribution without written consent. Free alternatives — EMB ETF yield, asset-manager month-lagged fact sheets, World Bank EM aggregates — are either proxies or different constructs. Carry the EMBI on your existing licensed feed; do not back it with a free live source. Use EMB ETF as a clearly labeled directional proxy only.

4. **Morningstar LSTA leveraged-loan live index level on the free path — NO.** Licensed Morningstar data; public pages gate performance. A free *narrative* weekly discount-margin (attributed, dated) is the most you can responsibly show — that is a Yellow tile (`latest_published`), not a live index-level feed.

5. **IG corporate OAS and HY corporate OAS as bare extracted numbers — NO.** The data is free and rigorous via FRED, but ICE's "internal use only, reproduction prohibited" Top Level Data clause means the safe public-display vehicle is the embedded FRED widget that keeps both FRED's and ICE's attribution intact, not an API-extracted figure rendered as your own. If you want a *bare numeric* OAS tile, the responsible step is to obtain ICE's written permission or buy a licensed feed.

**The one unambiguous green light:** US IG/HY new-issue volume via SIFMA (monthly .xls, summarized with attribution and link-back). And one defensible yellow: TTM HY default rate as a dated, attributed, methodology-labeled monthly figure from Moody's or Fitch, refreshed when each agency's monthly report lands.

---

## Part 6 — Cross-cutting design recommendations

The rigor only pays off if the UX reflects it. Six recommendations follow from the analysis:

1. **Every tile carries an explicit "as of" date and a source attribution string.** For OAS tiles, the string should include "via FRED" and the ICE source; for default rates, the agency and the report month. This is both a licensing safeguard and an honesty safeguard.

2. **Distinguish `live`, `latest_published`, and `feed_pending` states visually.** A daily OAS tile, a monthly default-rate tile, and a deliberately empty distress-ratio tile should not look identical. Reader trust depends on being able to tell.

3. **Methodology label on the tile itself, not in a separate page.** "Moody's spec-grade TTM, issuer-weighted, includes DDEs" is the right granularity for a default-rate tile. "ICE BofA US HY Index OAS, percent" is the right granularity for the HY OAS tile.

4. **Alert on schema drift and source-name changes, not just on missing data.** The Morningstar rebrand and the SIFMA .xls layout are reminders that the dangerous failure mode is a feed that keeps returning a plausible number after its meaning has changed.

5. **Embed widgets where the license requires it.** For OAS, the FRED widget is the licensed delivery vehicle. Use it. Do not extract the bare number and render it as your own.

6. **"Feed pending" is a feature.** On a market-intelligence site, an honest empty tile signals discipline. A confidently wrong or unlicensed number signals the opposite — and is the only one of these two that carries legal as well as reputational risk.

---

## Part 7 — Where the three models converged and diverged (auditor's appendix)

This is the explicit cross-check for your own due diligence on this synthesis.

### Where all three agreed
- FRED series IDs and definitions for IG and HY OAS.
- Daily close, T-1 lag, units in percent (not bps).
- April 2026 three-year history truncation on ICE BofA FRED series.
- FRED is delivery, not license; ICE Top Level Data is "internal use only."
- HY distress ratio cannot be sourced from free programmatic data.
- CDX IG/HY require commercial licensing for public display.
- EMBI Global Diversified live spread cannot be sourced free for redistribution.
- Leveraged-loan index has no free redistributable live level.
- SIFMA is the cleanest free source for IG/HY new-issue volume, with no public API.
- FRED API mechanics: 32-char key, `/fred/series/observations`, JSON via `file_type=json`, `"."` for missing data.

### Where they disagreed
- **OAS public display.** Gemini: never without ICE license. GPT-5.5: only via FRED widget with legal sign-off. Opus: yes via the FRED Graphs license carve-out (embed widget). **Operational answer: Opus's path.**
- **TTM HY default rate.** Gemini and GPT-5.5 lean red; Opus argues yellow with methodology labels and DDE disclosure. **Operational answer: Opus's yellow.**
- **SIFMA license posture.** Gemini and Opus: green with attribution. GPT-5.5: yellow due to "personal, noncommercial use" terms. **Operational answer: ship green with attribution-plus-link-back per tile.**
- **FRED rate limit.** GPT-5.5: no published number, plan for HTTP 429. Gemini and Opus: 120/min community-confirmed. **Operational answer: plan for both — 120/min soft ceiling plus 429 handling.**
- **EMBI fallback.** Gemini: FRED ICE proxy (restricted). GPT-5.5: World Bank GEM (different construct). Opus: EMB ETF directional proxy. **Operational answer: layer all three with explicit "this is a proxy" labels.**

### What each model contributed uniquely
- **Claude Opus 4.8.** FRED Graphs license carve-out; the S&P/LSTA → Morningstar LSTA rebrand with the full name-mapping table; the DDE-inclusion 3× swing on Moody's HY default rate; ETF proxies (EMB, BKLN) as directional fallbacks.
- **GPT-5.5.** SEC Corporate Bond Offerings as a license-clean issuance fallback; the two-layer `raw_observation` / `display_metric` pipeline pattern; the explicit FRED polling cadence; strict reading of SIFMA terms.
- **Gemini 3.1 Pro.** Most categorical legal framing; the ICE EM proxy `BAMLEMCBPIOAS` contagion of restrictions; the cleanest enumeration of which metrics must remain "feed pending" under a conservative legal posture.

---

## Part 8 — Concrete first-week build plan

If you ship this in the order the analysis implies, you maximize green lights early and minimize re-architecture risk.

**Day 1–2 — Foundation.**
- Register FRED API key. Store as environment secret.
- Build `raw_observation` table with `license_class` column.
- Build `display_metric` table with the six gate-checks.
- Implement HTTP 429 handling and the 120/min soft cap.

**Day 3–4 — Green tile.**
- SIFMA monthly .xls fetch-and-parse with schema-drift alerts.
- Ship the IG/HY new-issue volume tile with "Source: SIFMA · monthly · [link back]" attribution.

**Day 5 — Yellow tiles (OAS).**
- Embed FRED widgets for `BAMLC0A0CM` and `BAMLH0A0HYM2`. No bare-number rendering.
- Internal monitoring of the raw values via the API for sanity checks and operator-only dashboards.
- Add tooltip: "ICE BofA index. Units: percent. T-1. Source: FRED."

**Day 6 — Yellow tiles (default rate, loan spread).**
- TTM HY default rate: monthly Moody's headline figure, manually refreshed when each report lands; tile carries methodology label (issuer-weighted, with DDEs) and "as of" month.
- Leveraged-loan spread: weekly discount-margin from attributed dealer commentary; tile labeled "Source: [dealer] · [week of] · 3-yr discount margin."

**Day 7 — Red tiles.**
- HY distress ratio: `feed_pending` state with explanatory tooltip ("No free programmatic source meets our methodology and licensing bar").
- CDX IG/HY: `feed_pending`, tooltip notes "Licensed Markit/S&P feed required."
- EMBI Global Diversified: maintain on your existing licensed source; if you want a public redundancy, add EMB ETF tile labeled "ETF proxy — directional only."

**Ongoing — guardrails.**
- Alerts wired for source-name drift, vintage revisions, schema changes, and methodology-document hash changes.
- Quarterly review of each `license_class` flag against the source's current terms of use.
- Document the licensing decision tree in an internal runbook so future tile additions inherit the same discipline.

---

## Sources

Every claim above is anchored in primary documentation. Key references, grouped:

**FRED (St. Louis Fed):**
- [FRED legal terms](https://fred.stlouisfed.org/legal/)
- [FRED API Terms of Use](https://fred.stlouisfed.org/docs/api/terms_of_use.html)
- [FRED API key documentation](https://fred.stlouisfed.org/docs/api/api_key.html)
- [FRED series observations API](https://fred.stlouisfed.org/docs/api/fred/series_observations.html)
- [FRED series metadata API](https://fred.stlouisfed.org/docs/api/fred/series.html)
- [FRED API errors](https://fred.stlouisfed.org/docs/api/fred/errors.html)
- [FRED BAMLC0A0CM — IG OAS](https://fred.stlouisfed.org/series/BAMLC0A0CM)
- [FRED BAMLH0A0HYM2 — HY OAS](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)
- [FRED BAMLEMCBPIOAS — EM Corporate Plus OAS](https://fred.stlouisfed.org/series/BAMLEMCBPIOAS)
- [Alteryx Community — FRED API rate limit](https://community.alteryx.com/discussion/586941/problem-with-alteryx-and-fred-api)

**SIFMA and SEC:**
- [SIFMA US Corporate Bonds Statistics](https://www.sifma.org/research/statistics/us-corporate-bonds-statistics/)
- [SIFMA terms of use](https://www.sifma.org/terms-of-use/)
- [SEC Corporate Bond Offerings](https://www.sec.gov/data-research/statistics-data-visualizations/corporate-bond-offerings)
- [FINRA TRACE FAQ](https://www.finra.org/filing-reporting/trace/faq)

**Rating agencies (default rates):**
- [Moody's terms of use](https://www.moodys.com/web/en/us/legal/terms-of-use.html)
- [Moody's — Dollar Volume-Weighted Default Rates methodology](https://www.moodys.com/sites/products/DefaultResearch/2001900000419787.pdf)
- [Moody's US Corporate Credit Risk, July 2025](https://www.moodys.com/web/en/us/insights/resources/us-report-july-2025.pdf)
- [Fitch Group terms](https://www.fitch.group/terms-of-use)
- [Fitch — US HY/Loan Default Rates Rise Modestly, Feb 17, 2026](https://www.fitchratings.com/research/corporate-finance/us-hy-loan-default-rates-rise-modestly-credit-conditions-stay-constructive-17-02-2026)
- [Fitch — Leveraged Loan Default Rate Edges Higher in July, Aug 19, 2025](https://www.fitchratings.com/research/corporate-finance/leveraged-loan-default-rate-edges-higher-in-july-ddes-dominate-default-volume-19-08-2025)
- [LSTA — Fitch Ratings Commentary Page (aggregator)](https://www.lsta.org/content/fitch-ratings-commentary-page/)
- [ABI summary of Fitch monthly report](https://www.abi.org/node/1000963)
- [S&P Global Ratings — Default, Transition and Recovery](https://www.spglobal.com/ratings/en/regulatory/article/default-transition-and-recovery-defaults-slide-for-the-third-straight-month-s101685400)

**Distress ratio and HY research:**
- [FridsonVision High Yield Strategy sample](https://fridson.com/wp-content/uploads/2024/06/Fridson-High-Yield-Strategy.pdf)
- [FridsonVision model description](https://fridson.com/model-description/)
- [CFA Institute — "Think We've Seen the Last +1000-BPS High Yield Spread?"](https://rpc.cfainstitute.org/blogs/enterprising-investor/2025/think-weve-seen-the-last-1000-bps-high-yield-spread-think-again)
- [Eaton Vance High Yield Market Monitor, Q1 2026](https://www.eatonvance.com/content/dam/im/assets/publication/thought-leadership/article/article_highyieldmarketmonitor_q12026.pdf?1778544000225)
- [S&P Market Intelligence — credit distress historical context](https://www.spglobal.com/marketintelligence/en/mi/research-analysis/09022016-credit-distressed-bond-numbers-escalate-at-alarming-pace.html)

**CDX:**
- [S&P Global — CDX Tradable CDS Indices](https://www.spglobal.com/spdji/en/landing/topic/cdx-tradable-cds-indices/)
- [S&P DJI terms of use](https://www.spglobal.com/spdji/en/terms-of-use/)
- [S&P CDX HY/IG Index Rules PDF](https://www.spglobal.com/spdji/en/documents/methodologies/sp-cdx-hy-ig-index-rules.pdf)
- [Markit CDX North American HY Credit Index Guide](https://www.jhetf.com/wp-content/uploads/2020/03/CDX-North-American-High-Yield-Credit-Index-Guide-2019-04.pdf)
- [CFTC CDX filing](https://www.cftc.gov/sites/default/files/filings/ptc/15/12/ptc121715tpsefsef002.pdf)
- [Investing.com CDX Network Index historical data](https://www.investing.com/indices/investing.com-cdx-usd-historical-data)

**EMBI and EM:**
- [J.P. Morgan EMBI Global Diversified Select Index Methodology](https://www.jpmorgan.com/content/dam/jpm/cib/complex/content/markets/composition-docs/jp-morgan-embi-global-diversified-select-index.pdf)
- [J.P. Morgan EMBI methodology overview PDF](https://www.jpmorgan.com/content/dam/jpm/cib/complex/content/markets/composition-docs/pdf-27.pdf)
- [ETF Database — J.P. Morgan EMBI Global Diversified Index](https://etfdb.com/index/jpmorgan-embi-global-diversified-index/)
- [Western Asset Emerging Markets Diversified fact sheet](https://www.westernasset.com/common/pdfs/ir_qtr_20232q_emerging_markets_diversified.pdf)
- [BNP Paribas Easy JPM ESG EMBI GD fact sheet](https://docfinder.bnpparibas-am.com/api/files/65bb2bd8-b9a0-49d9-b1c0-0f4fc5183a3c/512)
- [World Bank GEM DataBank](https://databank.worldbank.org/id/1e5782c9)
- [World Bank dataset terms](https://www.worldbank.org/en/about/legal/terms-of-use-for-datasets)

**Leveraged loans:**
- [Morningstar — Rebranding of Leveraged Loan Indexes, Aug. 29, 2022](https://advisor.morningstar.com/ReleaseNewsLive/releasePopUp.aspx?Id=851&type=Release+Notes&name=Licensed+Data)
- [Morningstar Indexes — LSTA Leveraged Loan sub-index page](https://indexes.morningstar.com/indexes/details/morningstar-lsta-us-leveraged-loan-100-consumer-durables-apparel-FS0000HRLT)
- [Morningstar — Leveraged Loan Indexes Methodology](https://indexes.morningstar.com/api/docs/69bd3e9250ca695336d4045f)
- [S&P Global — Morningstar LSTA US Leveraged Loan Index default rate study](https://www.spglobal.com/ratings/en/regulatory/article/220831-default-transition-and-recovery-the-morningstar-lsta-u-s-leveraged-loan-index-default-rate-could-rise-to-2-s12486511)
- [Invesco US loan markets snapshot](https://www.invesco.com/content/dam/invesco/be/en/pdf/senior-secured-loans/Invesco-us-loan-markets-snapshot.pdf)

**Cross-cutting commentary used for fallback color:**
- [Nuveen fixed-income weekly commentary](https://www.nuveen.com/en-us/insights/fixed-income/fixed-income-weekly-commentary)
- [Eco3min Research — US IG credit spread dataset](https://eco3min.fr/en/us-investment-grade-credit-spread-dataset/)
- [Eco3min Research — credit spreads and recession risk dataset](https://eco3min.fr/en/credit-spreads-recession-risk-dataset/)

---

*Prepared as the unified return for P-02. Three independent frontier-model deep-dives were consulted (Gemini 3.1 Pro, GPT-5.5, Claude Opus 4.8); their full individual reports are preserved alongside this document. Every numerical and licensing claim is linked inline to its primary source. Where a figure is a point-in-time example (e.g., a specific OAS print or default rate), it is dated to the source capture and is illustrative of cadence and format, not the current live value.*
