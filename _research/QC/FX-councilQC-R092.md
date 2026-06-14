# gap-R092 — Deep QC re-read of the P-09.2 (rates gap-fill) research family, mined for the FX analyst page

**Scope.** Full re-read of all four P-09.2 files (synthesis + Opus / GPT-5.5 / Gemini councils). P-09.2 is a *rates* gap-fill, but it carries the load-bearing FX-relevant detail on: the DXY data-honesty verdict, the gold feed verdict, gold-vol / cross-currency-basis "no-free-feed" reality, the TGA→reserves→repo plumbing that now drains first-order, SRF take-up as the funding-stress gauge, and the debt-ceiling-NOT-LIVE correction. This doc extracts what the synthesis compressed out, then measures it against the current `GoldFxDesk.astro` (§0 tiles, §7 plumbing/SRF, §9 catalysts, §10 evidence/honesty).

**Source-citation rule observed:** every figure below is tagged with its *public data source* (Treasury QRA, NY Fed speech, ICE/CME page, Fiscal Data, FRED). The FX page must cite only those — never "R-09.2", "council", or model names.

---

## (A) Per-council unique contributions (what each model carried that the synthesis dropped or under-weighted)

### A.1 — Claude Opus 4.8 (buybacks specialist)

Mostly buyback-internal (out of FX scope), but three FX-load-bearing items:

- **[HARD] DXY = FREE-LIVE-quote (Opus's losing camp position).** Opus verdict: "FREE-LIVE (proxy/quotes), PAID for official ICE index. Live streaming charts free on Investing.com and TradingEconomics... official ICE US Dollar Index real-time value is licensed." Opus gives a concrete print: **broad/DXY quote ≈ 99.7 on Jun 12, 2026 (TradingEconomics)** and judged it "largely fine for display" with the caveat "DXY quote via free market data; official ICE index real-time is licensed." *This is the camp the synthesis rejected* in favor of GPT's stricter "do not call free quotes official DXY" line. Source for FX page: ICE administers DXY; FRED DTWEXBGS is the free daily proxy. (The ~99.7 print corroborates the page's "~100" broad-dollar tile.)
- **[HARD] Spot gold = FREE-LIVE-quote (Opus's losing camp).** Opus: "FREE-LIVE (quotes). Free streaming spot/futures on TradingEconomics (**~$4,222/oz Jun 12, 2026**) and Investing.com; LBMA fixings free with delay... LBMA fix is the official benchmark. Fine for display." Again the looser camp; synthesis adopted GPT's split (scaffold for analyst spine, LBMA fix as the honest benchmark).
- **[HARD] MOVE proxy honesty (transferable to gold-vol).** Opus: "**do not** build a swaption-vol gauge from CME options... or use Treasury-futures implied vol [and call it MOVE]." The exact analogue for the gold page: *do not synthesize a "gold vol" tile from gold-price changes and label it gold vol.* Honest placeholder wording Opus gives: "MOVE shown on delay; live MOVE requires ICE license. Last value as of [date], not real-time."

### A.2 — GPT-5.5 (data-wiring audit specialist) — the FX-critical dossier

GPT is the **winning camp** on every data-honesty call. The synthesis kept the verdicts but compressed the *exact wording and the structural "why."*

- **[HARD, endpoint test 2026-06-14] DXY scaffold rationale, verbatim-grade:** "Official DXY is **ICE-administered and calculated intraday from six currency spot midpoints sourced from ICE Data Derivatives**, with data offered through ICE delivery mechanisms rather than a free official live feed." Workaround: "compute and label a 'synthetic DXY proxy' from free FX quotes, **or use FRED's daily Nominal Broad U.S. Dollar Index as a lagged macro proxy**." Placeholder: *"Official live DXY requires ICE data rights; this panel shows a lagged broad-dollar proxy / synthetic estimate, not official DXY."*
- **[HARD] Spot-gold scaffold rationale:** "Production-grade live spot gold is a market-data product; CME provides real-time futures/options data via licensed APIs and authorized distributors, while **free official LBMA fixes are not live spot**." Placeholder: *"Live spot gold is not available from a free official feed; displaying delayed/rights-cleared futures proxy or placeholder until licensed."* Key nuance the page should absorb: **the LBMA fix is a once/twice-daily benchmark, not a live price** — calling it "source-ready" is fine, but the honesty note should say it is a *fix*, not live spot.
- **[HARD] The "free ≠ live" master framing.** GPT's single best line for the FX honesty note: *"'free' often means official but lagged, not live."* Worked proof: NY Fed SOFR pulled on Jun 14 returned the **Jun 11** value (3.60) because it is a prior-business-day benchmark published ~8:00am ET. The same lag logic applies to every FX/gold tile the page calls "live."
- **[HARD] Yahoo endpoints are QA-only, not production.** GPT tested the unofficial Yahoo chart endpoint: HTTP 200 for `DX-Y.NYB` (DXY) and `GC=F` (gold futures), **but 429 for MOVE symbols** — "useful for analyst QA only; not recommended for a commercial build without rights review." This is the technical backbone for *why* the page must not wire a "live DXY/gold" tile off a scraped endpoint.
- **[HARD] FedWatch is PAID API.** "CME FedWatch **display is public, but API access is a paid subscription product**; CME advertises FedWatch API access from **$25/month**, JSON REST, 60-second probability stream." Free wireable alternative: **Atlanta Fed Market Probability Tracker (daily, based on 3-month SOFR options).** The FX §1 feed line currently says "CME FedWatch / Atlanta Fed Mkt-Prob Tracker (no FRED real-time)" — correct in spirit but should make clear FedWatch is *display-only/embed*, the Atlanta Fed tracker is the *wireable* free source.
- **[HARD] Cross-currency basis / swap spreads are structurally paid.** "ICE Swap Rate covers USD SOFR swap rates and **USD SOFR swap spreads** under IBA methodology... licensed real-time, intraday, or delayed." There is **no free live cross-currency basis or swap-spread composite.** The page already scaffolds the basis honestly (§7), but the "why" — it is an IBA/ICE *benchmark product*, not just an unpublished number — strengthens the honesty note.
- **[HARD, NY Fed Nov 12 2025 speech] The TGA→reserves→repo transmission, quantified.** "ON RRP fell from about **$200bn to de minimis levels** and reserves fell by **~$350bn between early July and mid-September** as the TGA reached around **$800bn**." This is the cross-asset funding context the FX page lacks: the dollar-funding plumbing now drains reserves *first-order* because the RRP buffer is gone.
- **[HARD, NY Fed Feb 12 2026 speech] Forward reserve-drain risk:** reserve-management purchases tied to expected non-reserve-liability increases; Treasury estimate **TGA peak ~$1.025tn by late April**, with **late-July peak near $1tn** (May QRA sb0489). A TGA rebuild toward $1tn under a near-empty RRP is the scheduled stress test — directly relevant to a §7 funding note and the SRF tile.
- **[HARD] SRF/repo daily-lagged reality.** "NY Fed SOFR/TGCR/BGCR are free official **but not intraday**... published ~8:00am ET based on prior-business-day transactions; DTCC GCF posted ~3:30pm ET." Honest wording: *"Repo reference rates are official daily rates, generally reflecting prior-day activity; no free intraday repo-rate tape is connected."* GPT's stress-context stack: **SRF take-up + ON RRP + reserves + TGA** as the daily funding-stress panel.
- **[HARD] CBO fiscal backdrop (rates-relevant, FX-adjacent):** FY2026 federal deficit **$1.9tn = 5.8% of GDP**; debt held by public rising **101% of GDP (2026) → 120% (2036)** (CBO Budget & Economic Outlook). The FX page cites a "~6%-of-GDP deficit" loosely in §9 Chain C — the precise CBO figure (5.8%, $1.9tn) is available and citable.

### A.3 — Gemini 3.1 Pro (fiscal-calendar specialist)

- **[HARD/contested] ON RRP "essentially emptied out by early 2026 (domestic balances near zero)."** Gemini is the model that stated the RRP-collapse framing most starkly: peaked **>$2.5tn**, now ~zero domestic; "With the ON RRP buffer gone, fluctuations in the TGA — such as the massive April tax-receipt rebuild — **directly drain bank reserves**, tightening liquidity and pressuring overnight repo rates higher." This is the single most FX-relevant funding mechanism in the family and the synthesis adopted it — but the **$2.5tn peak → zero** magnitude is Gemini-unique color.
- **[HARD/contested] TGA level print = ~$828bn (mid-June 2026).** Gemini's TGA print *disagrees* with Opus/GPT (~$799.5–801bn). **Losing camp.** Likely a different reporting date in the same week. See QC flag C-2.
- **[HARD/contested] Cash-management buyback cap = $150bn ANNUAL.** Gemini's losing-camp figure vs Opus+GPT's **$75bn/quarter** (Feb 2026 QRA sb0384). Gemini's $150bn could not be located in QRA text; treat as derived. Buyback-internal, low FX relevance, but flagged for completeness.
- **[HARD] TBAC Q1 2026 projection: ~$360bn T-bill demand for 2026 from the SOMA shift to maintenance purchases** (TBAC Q1 2026). FX-adjacent: bill-supply/term-premium context for the dollar-anchor story.
- **[HARD] Bessent X-date tactical extension to Jul 24 2025** (to pressure Congress before the August recess) — color for the 2025 debt-ceiling *template*, not a 2026 live event.
- **[HARD] Eris Futures = free EOD SOFR swap pricing** ("implied spot-starting swaps via FTP"). The one free *lagged* swap-spread workaround in the family — relevant if the page ever wants a lagged basis/swap proxy instead of a blank tile.
- **[HARD] Jan 2026 shutdown delayed the January BLS jobs report AND JOLTS** (CNN Feb 2 2026) — data-blackout texture; relevant only if the FX page ties Fed-path uncertainty to the data vacuum.

---

## (B) Prioritized GAPS for the FX analyst page (P1 / P2 / P3)

The FX page is already strong on data honesty (§10 has a value-type / source-tier / feed-state decoder + a "no free feed" row naming ICE DXY, live spot gold, gold vol, live cross-currency basis). The gaps below are *precision and completeness*, not wholesale absence.

### P1 — High value, low effort, directly sharpens honesty/funding

**P1-a · "Free ≠ live, free = official-but-lagged" — make the page's central data-honesty claim.**
- **Where:** §10 honesty note (`tnote`) and/or the Feed-state decoder.
- **What:** Add one line: the free official feeds are *prior-business-day* benchmarks (e.g., SOFR published ~8am ET reflects the prior day's transactions; the LBMA gold *fix* is a once/twice-daily benchmark, not live spot). The current decoder says "● Live = auto-refreshed from a free official series" — that slightly over-promises. Recommend rewording the gold tile's "◌ Source ready" gloss to note LBMA is a **fix, not live spot**.
- **Source to cite:** NY Fed SOFR reference-rate methodology; LBMA price-fixing methodology.

**P1-b · Gold-vol tile: state the synthesis-prohibition explicitly.**
- **Where:** §10 honesty note (already lists "gold vol" as no-free-feed).
- **What:** Add the *active prohibition*, mirroring the MOVE rule: "we do not synthesize a gold-volatility reading from gold-price changes and label it gold vol." Strengthens the "no false precision" posture.
- **Source:** general (ICE/CBOE gold-vol indices are licensed; no free live feed).

**P1-c · TGA→reserves→repo as an explicit cross-asset/funding note (the missing plumbing context).**
- **Where:** §7 (plumbing & forced seller) — add a short callout, OR §9 catalysts as a funding overlay.
- **What:** The dollar-funding plumbing now drains reserves *first-order* because the ON RRP buffer (which peaked **>$2.5tn**) has fallen to **near-zero domestic balances**. A TGA rebuild — Treasury assumes a **~$1.0tn peak (late April / late July 2026)** — directly drains bank reserves and pressures overnight repo higher; in the 2025 rebuild, **ON RRP fell ~$200bn→de minimis and reserves fell ~$350bn (early-July to mid-Sept) as the TGA reached ~$800bn**. This is the mechanism that makes a dollar-funding squeeze *more* potent than in the QE-flush era.
- **Source to cite:** NY Fed money-market speeches (Nov 2025, Feb 2026); Fiscal Data Daily Treasury Statement (TGA); Fed H.4.1 (reserves/RRP); Treasury QRA (TGA peak assumptions). All already in the page's §10 source list except the TGA/RRP series — add **Fiscal Data DTS** and **FRED RRPONTSYD** (ON RRP) / **WTREGEN** (TGA) to sources.

**P1-d · SRF tile precision — "the cleanest real-time funding-stress gauge."**
- **Where:** §7 master-tell callout (already mentions SRF take-up + the basis) and the §0/§7 feed lines.
- **What:** The current master-tell callout pairs cross-currency basis with the FIMA/SRF spread — correct. Add the synthesis's sharper claim: with QT having pushed reserves toward the "ample" boundary, **SRF take-up is the single best real-time gauge of genuine funding stress** (more diagnostic than the FIMA balance, which is ~$1mn). Pair SRF take-up with the **SOFR–IORB spread** as the daily funding thermometer. Note repo rates are *daily-lagged* (NY Fed ~8am ET, prior-day), not intraday.
- **Source:** NY Fed SRF operation results (free, daily); NY Fed reference rates (SOFR/IORB); Fed H.4.1. The page already lists "Fed H.4.1 / swap lines / SRF" — make SRF take-up an explicit watched line, and add **SOFR–IORB** as the paired spread.

### P2 — Medium value, sharpens existing content

**P2-a · DXY honesty: name the "six currency spot midpoints" mechanism.**
- **Where:** §0 DXY/broad-dollar tile gloss and §10 honesty note.
- **What:** The page already says "ICE-administered; no free live feed, so this desk reads the dollar off a broad trade-weighted proxy." Optionally sharpen: official DXY is **calculated intraday from six currency spot midpoints (EUR-heavy)** and delivered only via ICE; **FRED DTWEXBGS (Nominal Broad U.S. Dollar Index)** is a *broader, daily-lagged* proxy — not a re-scaled DXY. The page handles this well; this is a precision upgrade, not a fix.
- **Source:** ICE Currency Indices / DXY methodology page; FRED DTWEXBGS.

**P2-b · CBO deficit precision in §9 Chain C.**
- **Where:** §9 catalysts, Chain C ("~6%-of-GDP deficit").
- **What:** Replace the loose "~6%" with the citable CBO figure: **FY2026 deficit $1.9tn = 5.8% of GDP; public debt 101%→120% of GDP (2026→2036)**.
- **Source:** CBO Budget and Economic Outlook (cbo.gov).

**P2-c · Atlanta Fed tracker = the *wireable* free Fed-path source (FedWatch is embed-only/paid-API).**
- **Where:** §1 feed line (currently "CME FedWatch / Atlanta Fed Mkt-Prob Tracker (no FRED real-time)").
- **What:** Clarify: CME FedWatch is a **free public display but a paid API ($25/mo)**; the **Atlanta Fed Market Probability Tracker** (free daily, 3-month SOFR options) is the wireable free source. Minor wording fix to avoid implying FedWatch is API-wireable for free.
- **Source:** CME FedWatch page; Atlanta Fed Market Probability Tracker.

**P2-d · Cross-currency-basis honesty "why."**
- **Where:** §7 srcline ("The live cross-currency basis has no free feed — scaffolded honestly").
- **What:** Optionally add the structural reason: the basis / SOFR swap-spread complex is an **ICE/IBA-administered benchmark product** (licensed real-time/delayed), not merely an unpublished number — which is why no free live feed exists and why a lagged proxy (e.g., Eris EOD swaps) is the only free fallback.
- **Source:** ICE Swap Rate / IBA methodology; (Eris Futures EOD as the lagged free workaround).

### P3 — Low priority / optional color

**P3-a · "Free ≠ live" worked example.** If the page ever wants a concrete proof for skeptics: the SOFR feed pulled on a Saturday returns Thursday's value because it is a prior-business-day benchmark. (NY Fed SOFR.) Likely too in-the-weeds for the FX page.

**P3-b · Bill-supply / SOMA-demand term-premium color.** TBAC projects **~$360bn 2026 T-bill demand from the SOMA shift to maintenance purchases**; Treasury guided to a **~$250–300bn net decline in bill supply by early May** around the April tax date (a reserve-add tailwind). Relevant only if §9 Chain C (supply→term premium) wants more depth on the Treasury-anchor story.

**P3-c · Data-blackout texture.** The Jan 2026 shutdown delayed the BLS jobs report and JOLTS — Fed flying partially blind. Relevant only if the FX page wants to tie Fed-path uncertainty to the data vacuum (it currently does not, and arguably shouldn't — out of FX scope).

---

## (C) QC flags — stale / contradictory / overconfident / re-verify

**C-1 · Debt ceiling is NOT live in 2026 — confirm the page never implies it is. [PASS, but guard.]**
- Synthesis (and all three councils) are emphatic: OBBBA (Public Law 119-21, signed **Jul 4 2025**) raised the limit **$5tn to $41.104tn**; total public debt **$39.221tn on Jun 11 2026** → **~$1.88tn cushion**; **no live X-date, no extraordinary-measures clock, no bill-curve X-date kink in 2026.** Next plausible flashpoint **2027**.
- **FX-page check:** the GoldFxDesk does not appear to surface a debt-ceiling/X-date tile (FX desk, not rates) — *good*. **Guard:** if any cross-asset/funding note is added, do NOT inherit stale "X-date approaching" framing. Any debt-ceiling mention must say it is *not a 2026 catalyst*.

**C-2 · TGA-level contradiction across councils — use the verified print. [RE-VERIFY before citing.]**
- Opus + GPT: **~$799.5–801bn** (Jun 10–11 2026; GPT's Fiscal Data DTS live test returned **$799.517bn closing Jun 11**; H.4.1 WTREGEN $801bn Jun 10). Gemini: **~$828bn** (losing camp; likely a different reporting date).
- **Action:** if a TGA figure is added to the FX page, cite **~$800bn (Jun 11 2026, Daily Treasury Statement)**, not $828bn. Do not present both as fact.

**C-3 · Cash-management buyback cap contradiction — $75bn/qtr (not $150bn/yr). [Buyback-internal; low FX relevance.]**
- Opus + GPT: **$75bn for the Feb–Apr 2026 refunding quarter** (Treasury QRA sb0384). Gemini: **$150bn annual** (not in QRA text; derived). If ever surfaced, use **$75bn/quarter**. Almost certainly irrelevant to the FX page.

**C-4 · "Live" feed-state chips slightly over-promise. [PRECISION FIX — see P1-a.]**
- The §0 tiles chip broad dollar, real 10y, USD/JPY as **"live"** and the decoder says "auto-refreshed from a free official series." Per GPT's "free = official-but-lagged" finding, these are **prior-business-day** values (FRED DTWEXBGS, DFII10, DEXJPUS update daily, one day lagged), not intraday-live. Not wrong, but the honesty posture would be sharper if "Live" were glossed as "auto-refreshed daily from a free official series (prior-session close)."

**C-5 · Internal number consistency on the page itself — re-verify (not a research finding). [PAGE-INTERNAL QC.]**
- The §0 panel tile and ticker show **USD/JPY ~157**, while §1/§5 narrative and the haven ladder reference a **"break below ~140"** trigger and the dollar-smile lead. Confirm these are intentionally different (157 = current spot; 140 = the repatriation trigger level) and not a stale copy. Likewise gold appears as **~$4,365** (tiles/ticker), **~$4,300–4,540 / ~$4,300** (cohort/elsewhere) — confirm one current anchor (~$4,365) and that the range language is intentional. *This is a page-internal consistency check, not from the research; flagging because a QC pass should catch it.*

**C-6 · Gold "source-ready" chip — confirm it means the LBMA *fix*, not live spot. [HONESTY PRECISION — see P1-a/P1-b.]**
- The councils are unanimous that live spot gold has no free feed and the **LBMA AM/PM fix is a delayed benchmark, not live spot**. The page's "◌ Source ready" + "LBMA fix · live spot paywalled" is honest; just ensure the gloss never drifts to implying the fix is a live price.

**C-7 · DXY/gold "free-live quote" temptation — the rejected camp. [DO NOT REGRESS.]**
- Opus (and Gemini) judged free streaming DXY (~99.7) and gold (~$4,222) quotes "fine for display." The synthesis **rejected** this for a research-grade desk in favor of GPT's stricter line, and the FX page correctly follows the strict line (proxy/blank, never "official DXY", LBMA fix not live spot). **Guard against any future "just wire the free quote" regression** — GPT's Yahoo 429-on-MOVE test and the ICE-rights argument are the reasons.

---

## One-paragraph bottom line

The FX analyst page is already in good shape on data honesty and even carries the basis/SRF master-tell. The highest-value additions from P-09.2 are: (1) the **"free = official-but-lagged, not live"** framing for the §10 honesty note and a precision fix to the "Live" chip gloss (P1-a, C-4); (2) an explicit **TGA→reserves→repo cross-asset funding note** — ON RRP collapsed from a >$2.5tn peak to near-zero, so a scheduled ~$1tn TGA rebuild now drains reserves first-order and pressures repo, making any dollar-funding squeeze more potent (P1-c); (3) sharpening the **SRF take-up = cleanest real-time funding-stress gauge** claim, paired with SOFR–IORB (P1-d); and (4) the explicit **no-synthesized-gold-vol** prohibition (P1-b). Cite only public data sources (NY Fed speeches/reference rates, Fiscal Data DTS, Fed H.4.1, FRED, ICE/CME methodology pages, CBO) — never the research IDs. Watch the QC flags: TGA = ~$800bn (not $828bn), debt ceiling not a 2026 catalyst, and verify the page-internal USD/JPY 157-vs-140 and gold-anchor consistency.
