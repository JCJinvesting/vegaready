# R-02 Implementation Plan — Credit Desk Live Data (P-02) · v5

**Status:** W1 + W1.5 SHIPPED to design branch (pipeline + analytics, no visual change yet). W2 (first visible tiles) awaiting owner go on the remaining decisions (§8). Staging-first; L5 ship after approval.
**Inputs:** the unified P-02 synthesis (`_research/RETURNS/R-02-credit-feeds.md`) + three research streams (conservative / methodology / engineering angles), all read in full.
**Governing owner decision (O-14, 2026-06-12):** licensing caution is dropped. The site publishes any fetchable figure **with source attribution for legitimacy**; the licensing analysis in R-02 is noted for the record and the risk acceptance is the owner's. The operative constraints are now exactly two: **availability** (a real, programmatic or reliably-published source exists) and **accuracy** (the integrity contract — never invent, never stale-as-fresh, methodology labeled).

---

## 1 · What the decision changes — and what it doesn't

**Changes:** the OAS family moves from "embedded chart only" to **live bare-number tiles in our own design language** (which also deletes the light-themed-iframe design problem entirely — native brass tiles, our own thumbnails); the SIFMA strict-posture caveat dissolves; quoted agency figures can render as proper tiles; the `license_class` field becomes attribution metadata instead of a display gate.

**Doesn't change:** several tiles stay pending for **pure availability** reasons — no free programmatic source publishes the number at all. The honesty machinery (freshness, units, schema, methodology gates; as-of stamps; stale badges) all survives — it was always about accuracy, not law. Attribution strings stay on every tile by owner instruction.

## 2 · The verdict board, re-cut on availability + accuracy

| # | Metric | Verdict | Vehicle | Constraint that remains |
|---|---|---|---|---|
| 1 | IG corporate OAS — FRED `BAMLC0A0CM` | 🟢 LIVE | Bare-number tile, bps (×100), T-1 as-of, "ICE BofA via FRED" | Percent→bps conversion; 3-yr served history (we cache forward) |
| 2 | HY corporate OAS — FRED `BAMLH0A0HYM2` | 🟢 LIVE | Same | Same + defaulted-exit tooltip |
| 2b | BBB/BB/CCC OAS — `BAMLC0A4CBBB` / `BAMLH0A1HYBB` / `BAMLH0A3HYC` | 🟢 LIVE | §2 cohort row + compression/decompression read | Same family |
| 2c | HY percentile vs history (§1) | 🟢 computed | From cached daily OAS | Honest label: "vs 3-yr window" until our cache outgrows FRED's truncation |
| 3 | HY distress ratio | 🟢 **proxy + named** (was 🔴 — R-06) | **Two-row tile:** named figure (FridsonVision/Eaton Vance monthly) + daily HYG-derived proxy via BlackRock varnish-api; drop JNK | Proxy understates true ratio (HYG ~1,300 vs ~1,800 names) — label honestly |
| 4 | TTM HY default rate | 🟡 | `latest_published` tile — agency + month + methodology label | Monthly publication cadence is the physical limit |
| 5 | IG/HY new-issue volume | 🟢 LIVE | SIFMA monthly tile + YTD/Y/Y, attributed + link-back | .xls parsing fragility |
| 6 | CDX IG / CDX HY | 🟢 **LIVE via DTCC** (was 🔴 — R-06, **empirically verified**) | DTCC PPD CREDITS feed; median `Spread-Leg 1` of on-the-run UPI cluster; label "median SDR trade print, cleared, 15-min delayed; not the Markit fixing" | HY disseminates as **spread** (verified, contra prior); block-cap masking; median not mean (one 1,082,450bp outlier seen) |
| 7 | EMBI Global Diversified | 🟢 **proxy + ours + named** (upgraded — R-06) | **Two-row:** named EMBI-GD spread (SSGA/TCW/Fort Washington monthly) + daily EMB portfolio `optionAdjustedSpread` via BlackRock varnish-api | EMB tracks EMBI Global **Core**, not Diversified — label as cousin proxy |
| 8 | Leveraged-loan index | 🟢 **level + spread** (was 🟡 — R-06) | Daily level from Morningstar screener (**verify broad-index path first**); 3-yr discount margin from Morgan Stanley/Eaton Vance EVLN monthly PDF / S&P LCD | Broad-vs-Loan-100 dispute (verify screener); never label ~99 bid price as the level; never "S&P/LSTA" post-Aug-2022 |
| + | EM corporate OAS — `BAMLEMCBPIOAS` | 🟢 optional | Context tile, labeled "EM corporate — not sovereign EMBI" | Mislabeling risk only |
| + | Rates & liquidity (hub) — `DGS10` / `T10Y2Y` / `DFII10` | 🟢 (O-13) | Hub tile via same pipeline | None — Treasury data |

## 2.6 · P-06 outcome — the four formerly-pending tiles are now fetchable (connector specs)

R-06 (`_research/RETURNS/R-06-*`, ingested 2026-06-13) found honest fetch paths for **all four** previously-blocked tiles. Headline: **CDX moved from "firmest no" to LIVE** via U.S. swap-data public dissemination, with ground-truth values empirically recovered. Each becomes a §8-interface connector:

**`cdx` connector — DTCC public price dissemination (CFTC Part 43).** No auth.
- Cumulative EOD: `https://pddata.dtcc.com/ppd/api/report/cumulative/cftc/CFTC_CUMULATIVE_CREDITS_{YYYY}_{MM}_{DD}.zip` (zipped CSV, ~150 cols); intraday via `/ppd/api/slice/CFTC/CR` → S3 `kgc0418-tdw-data-0.s3.amazonaws.com/cftc/...`; live ticker `/ppd/api/ticker/CFTC/CREDITS`.
- Filter: `Asset Class='CR'`, `UPI Underlier Name='CDX.NA.IG'|'CDX.NA.HY'`, dominant `Expiration Date` cluster, `Cleared='I'`; take **median `Spread-Leg 1`** (decimal ×10000 = bp). On-the-run UPIs observed: IG `QZ3WVVQG5T8K`, HY `QZHH8NT767RX` (re-resolve at each roll: IG 20-Mar/Sep, HY 27-Mar/Sep). **Median not mean** (1,082,450bp malformed print seen); HY `Price` empty → **disseminate spread**, convert to price only if displayed. Verified 2026-06-12: IG ≈ 50.7bp, HY ≈ 108bp. 15-min delay; poll ~120s. Label: "CDX.NA.IG/HY 5Y on-the-run — median SDR trade print (spread, bp), cleared, 15-min delayed; DTCC public dissemination, not the Markit/S&P fixing."
- Block/cap (don't sum notional): IG block $200M/cap $250M; HY block $50M/cap $76M.

**`hyg_distress` connector — ETF-derived proxy + named fallback.**
- Daily proxy: BlackRock varnish-api `…/get-product-data?...component=holdings…portfolioId=239565…ticker=HYG` (JSON; fields `yieldToWorst`, `holdingPercent`). Distress proxy = MV-weighted share with (`yieldToWorst` − matched-Treasury) ≥ 1000bp. **Legacy iShares `.ajax?fileType=csv` is now consent-wrapped HTML — use the varnish-api JSON.** **Drop JNK** (SSGA file has no yield/YTW/spread — verified).
- Named (top row): FridsonVision / S&P-LCD monthly ("% of ICE BofA US HY issues with OAS ≥ 1000bp") + Eaton Vance/Morgan Stanley HY Market Monitor quarterly PDF. Two-row tile; proxy labeled "ETF-derived, understates true ratio, not the J.P. Morgan/ICE figure."

**`emb_embigd` connector — ETF proxy + named.**
- Daily: BlackRock varnish-api `…component=fundamentalsAndRisk…portfolioId=239572…ticker=EMB` → portfolio `optionAdjustedSpread` (single number; EMB page showed 170.24bp on 04-Jun-2026). Label: "EMB tracks EMBI Global **Core**, not Diversified — cousin proxy."
- Named (top row): SSGA EM-debt commentary ("EMBI GD Spread"), TCW EIF characteristics ("EMBI Global Diversified Sovereign Spreads"), Fort Washington (quarterly). Monthly cadence.

**`lsta_loan` connector — level + spread.**
- Level (daily): Morningstar Indexes screener `https://indexes.morningstar.com/indexes/screener?filterPattern=Leveraged+Loan` (broad `FS0000HS4A` vs Loan-100 `FS0000HS44`). **DISPUTE to resolve first:** one source recovered the broad level (4,351.35) login-free; another saw "performance data not available" on the broad detail page. **Manually verify the screener exposes the broad level before relying;** Loan-100 is reliably public.
- Spread (monthly): Morgan Stanley/Eaton Vance EVLN review PDF row **"Spread-to-3-Year (bps) — All Loans"** (`…/monthlyreview_etf_eatonvancefloatingrate_us.pdf`); S&P-LCD daily news as the daily DM. Never relabel the ~99 average bid price as the index level; never "S&P/LSTA" (rebranded Morningstar, Aug 29 2022).

**Operational gotchas (carry into the connectors):** asset-manager PDFs return **403 to non-browser user-agents** (send a browser UA); per-period filenames vary (poll the landing/tag page, not one URL); varnish-api is an internal endpoint (medium-high fragility — wrap in the §10 gates + `stale` fallback). All values still pass the §5/§10 bitemporal + DQ gates; all carry attribution + as-of per O-14.

## 3 · Production-risk facts (unchanged — all accuracy, all still coded)

1. ICE OAS publishes in **percent** — ×100, label bps (the #1 deployment bug).
2. FRED serves a rolling **3-year window** on ICE series — cache forward, never lose tails, label percentile windows honestly.
3. FRED `value` is a **string**; missing = `"."` — coerce, null-handle.
4. **T-1 by mid-morning US Central** — 22:00 GST build catches the day's print; earlier builds show T-1/T-2 with visible as-of.
5. Month-end rebalance can print **weekend dates** — whitelist in staleness monitor.
6. HY index **ejects defaulted bonds** — mechanical tightening tooltip.
7. **IG $250M vs HY $100M** floor asymmetry tooltip.
8. Default rates differ **~3× by methodology** (DDEs in/out; issuer vs dollar weighted; agencies never blend; figures get restated) — label everything.
9. **SIFMA .xls drifts and revises** — defensive parser, overwrite-not-append, drift alarms; SIFMA convention ≠ index membership (disclose).
10. **Name-string drift** (S&P/LSTA→Morningstar LSTA) — alert on brand-string change.
11. Loan "spread" is a **3-yr discount margin, not OAS** — label when adjacent.
12. **EMBI variant precision** (Global vs GD vs GD Select) — label ours.
13. FRED mechanics: 120/min soft ceiling, 429 backoff, 100k rows + offset, registered key (never the demo key), `units=lin`, native-frequency rule, CSV-returns-zip. Our cadence: 2 series × 3 builds = 6 calls/day core, +cohort series ≈ 15/day. Trivial.

## 4 · Credit-desk surface → action map

| Desk tile (section) | Action |
|---|---|
| IG OAS · HY OAS (§1 Regime + utility ticker) | **LIVE numbers** — tile + ticker chips real values, bps, as-of |
| HY percentile vs 10y (§1) | computed from cache; labeled "vs 3-yr" initially; grows toward 10y as cache accrues — honest by construction |
| BBB/BB/CCC OAS (§2) | **LIVE cohort row** — enables the compression/decompression regime tell with real numbers |
| Distress ratio (§2) | dated attributed quote (convention-labeled) or pending — O-11 |
| Valuation computeds (§3: OAS-vs-default-implied, carry breakeven, implied default) | partially unlocked: OAS leg now live; default-implied leg uses the yellow agency figure → compute with "as of [month]" caveat, or hold — flagged per-tile in W4 |
| TTM default rate · forecast (§4) | `latest_published` tile, methodology-labeled (O-9 refresh) |
| Maturity wall (§4) | SIFMA outstanding (W2b) |
| Primary issuance (§6) | **LIVE SIFMA tile** |
| IG/HY fund flows (§6) · MOVE (§7) · x-ccy basis (§8) | not researched — P-02b |
| EMBI (§1 KPI, live) | variant label + attribution text |
| fp-note copy | corrected to name attribution as the policy ("sources named on every tile") |

## 5 · Architecture — the accuracy-gated pipeline

`scripts/fetch-feeds.cjs` (runs with `build-data.cjs`; 3×-daily builds are the polling cadence) → `src/data/feeds/credit.json`.

**Layer 1 — raw cache** (`_data-cache/raw/`, gitignored): every fetch logged — URL, retrieved_at, http_status, etag, payload, FRED vintage fields. The cache **is** our history accumulator (defeats the 3-yr truncation going forward).
**Layer 2 — display JSON**: promotion requires the five accuracy gates — freshness within budget · units match (FRED metadata endpoint validated) · frequency match · schema check (SIFMA) · methodology-hash unchanged. `license_class` is retained as **attribution metadata only** (it tells the tile what source string to print; it no longer blocks anything — O-14).

**Render states:** `live` · `latest_published` · `feed_pending` · `stale` (dated value + badge, never silently yesterday-as-today). **Freshness budgets:** OAS T-1+1bd (weekend month-end whitelisted) · SIFMA 6 weeks · default rate 45 days · loan margin 10 days · EMBI per registry stamp.

**Alerts (build log + feed-status badges):** stale-past-budget · vintage revision without date advance ("revised" badge) · brand-string drift · methodology-hash change (halts that tile pending review) · SIFMA schema drift · served-history < cached-history. Failures never break the build — last good cache + `stale` stamp.

**Freshness honesty:** per-tile as-of never inherits the page freshbar; freshbar gains "registry data through …" qualifier when the first live feed tile lands.

**Runbook** (`docs/DATA-FEEDS-RUNBOOK.md`, W1): source inventory, attribution strings, gotchas, the O-14 posture recorded, and the CDX/EMBI/loan notes for the day richer sources appear.

## 6 · The build — section-scoped micro-loops

**Discipline (unchanged):** one page section per micro-loop, both editions, gate = compile → stage → verify section → owner eyeballs section → ratify → next. System-wide patterns **pilot → ratify → propagate** (state anatomy debuts on one tile, then walks the page). One commit per micro-loop; revert = rollback; production untouched until W6.

**W0 · Owner prereqs.** `FRED_API_KEY` env secret (O-8) + remaining decisions (§8).

**W1 · Pipeline foundation. ✅ DONE (commit `471b65e`).** Fetcher, two-layer cache, gates, alerts, runbook; 9 series live, 11 selftests green.

**W1.5 · Analytics + hygiene layer. ✅ DONE (commit `c82f608`).** *[Scripts + data only; zero visual diff.]* Added now that we have the capability, because the raw series are inputs and the desk's intelligence is in the *relationships*:
- **Derived compression spreads** computed once at build, read by every tile: HY−IG (the master compression/decompression regime tell), CCC−BB (junk-tier dispersion), BBB−IG (the fallen-angel cliff edge) — each with bp, 1-week change, percentile and z-score over our cached window.
- **A rule-based, labeled regime read** from the data itself ("HY−IG is tight vs its own history and flat") — honest, never a forecast.
- **Per-series deltas + z-score**: 1-day, ~1-week (5bd), ~1-month (21bd) changes; standardized score for "how unusual is this level."
- **Hygiene/correctness fixes**: raw audit cache now **pruned to last 2 per series** (was unbounded — would have hit ~10k files/yr); heavy helper arrays stripped before serialization; live-count in build log.
- **Research reflection seed**: `_data-cache/digest-credit.ndjson` appends one dated row per data-date (IG, HY, HY−IG, regime) — a growing proprietary timeseries we own, feeding the research loop (§ below).
- *First insight it produced unprompted:* CCC−BB at the 98th percentile while HY−IG sits at the 19th — the desk's "calm on top, stress at the bottom" thesis, now evidenced by our own computation rather than asserted.

**W2 · First live tiles — §1 Regime + ticker (step-by-step).** *[Section: analyst §1 + utility ticker; layman §1 twin in the same loop. One commit. Gate: §1 ratified on staging before W3.]*
1. **Consumer module** — add `src/data/feeds/credit.js` (mirrors the `analysis/*.js` import pattern) that loads `credit.json`, exposes `series`, `derived`, `feedStatus`, and small helpers (`tile(key)`, `chip(state)`, `fmtBp`, `asOf`). One import line in `CreditDesk.astro`; nothing else reads the JSON directly.
2. **State-chip anatomy pilot** — build the four-state chip (live ●/latest_published ◐/feed_pending ○/stale ◬ — colour+glyph+word, kit §5-4) ONCE here. 2–3 `visualize` options first (taste-call law); owner ratifies the anatomy on this tile before it propagates in W5.
3. **§1 regime KPI cells** — IG OAS and HY OAS flip from "feed pending" to live: value in bp, 1d/1w deltas, percentile-vs-window with honest "3-yr window" label, `revised`/`stale` badges wired to the data flags, full-width attribution footer ("ICE BofA US … OAS · via FRED · as of <date>", kit §4d chip law).
4. **The HY−IG compression headline** — surface the derived spread + its one-line regime read as the §1 panel's lead stat (this is the single most valuable number the data gives us; it belongs at the top, not buried).
5. **Utility ticker** — `IG OAS`/`HY OAS` chips switch from the literal word "feed" to real values + tiny delta arrows.
6. **FRED attribution notice** — place the TOS-required "This product uses the FRED® API but is not endorsed or certified by the Federal Reserve Bank of St. Louis." in the methodology/footer block (one-time, satisfies §8 obligation).
7. **Freshbar honesty** — add "registry data through …" qualifier so the page stamp never implies the feed tiles share its date.
8. **Layman §1 twin** — same loop: "how nervous are lenders?" gauge with the HY−IG number translated and **anchored** ("203bp — closer to the calm end; panic looked like 1,000bp+ in 2008"), per the locked plain-language law.
9. **Verify** — compile → stage → curl/DOM check (live values render, no "."/null, attribution + as-of present, chip states correct, layman no-leak) → owner eyeballs §1 on staging → ratify.

**W3 · §2 cohort row + percentile.** *[Section: analyst §2; layman crises chapter line.]* BBB/BB/CCC live row + compression/decompression read; §1 percentile tile (honest window label). Our **own SVG thumbnails** from cached history (kit chart law: ~122px, whisper grid, ≤3 colours) replace the dropped iframe idea.

**W4 · Yellow tiles — three gated micro-loops.** *(a)* §4 default rate (`latest_published`, methodology label, O-9 refresh); *(b)* loan discount-margin row (weekly, attributed, DM≠OAS label); *(c)* §2 distress quote if O-11. §3 computeds: per-tile call — wire OAS-leg-live versions with "default leg as of [month]" caveat where honest, else hold. Optional EMB-ETF proxy tile (O-12). Layman twins each loop.

**W5 · State-system propagation + copy.** *[Seven section micro-loops: §1→§2→§3→§4→§6→§7/§8→layman.]* Chips (●/◐/○/◬ + colour + word, kit §5-4), as-of + attribution footers everywhere, reason-tooltips on remaining pending tiles, EMBI variant label, freshbar qualifier, fp-note corrected. Kit v-next: §4g tile-state anatomy + attribution law ("every figure names its source on the tile"). LOOPS L4: refresh sub-loop + pilot→propagate codified. Layman explainer reframed per O-14: "where our numbers come from" (sources + why some tiles wait for better feeds) + pipeline thumbnail.

**W6 · Whole-page QC + ship.** *[Verification only.]* L3 brand-QC; fresh-eyes both editions; greps: every live tile has attribution + as-of, units labeled, no "." or nulls rendered, no stale-as-fresh, layman leakage zero; mobile spot-check; owner review; L5 ship.

**W-bonus (O-13).** Hub Rates & Liquidity tile via `DGS10`/`T10Y2Y`/`DFII10` through the same pipeline — now frictionless.

## 7 · Visual & formatting additions

State chips (colour + glyph + word; latent never red) · live OAS tiles in desk language with our own history thumbnails (the light-themed-iframe problem is gone) · full-width attribution footers (kit §4d) · revised/stale badges · freshbar qualifier · cohort compression row visual · percentile bar with window label · layman anchored figures + "where our numbers come from" card + pipeline thumbnail · unit labels everywhere. All brass-skin; no new colours beyond the state set. Tile-level designs get 2–3 `visualize` options at each pilot (taste-call law).

## 8 · Remaining owner decisions

- **O-8 — FRED API key:** register (free) → `FRED_API_KEY` on the build machine. *Blocking W1.*
- **O-9 — Yellow refresh:** (a) agent checks monthly/weekly and proposes updates for confirm *(recommended)* · (b) owner pastes into `feeds-manual.json`. Stale-badging automatic either way.
- **O-11 — Distress/default quotes as tiles:** yes *(recommended now under O-14)* / no.
- **O-12 — EMB-ETF proxy tile + weekly issuance color quote:** yes/no each.
- **O-13 — Hub rates tile (W-bonus):** yes *(recommended — cheap, clean)* / no.
- *(O-7 and O-10 dissolved by O-14. O-14 recorded above.)*

## 8.5 · How this capability compounds (reflection)

**How it works, in one line:** a build-time script pulls a fixed set of FRED series, gates them for accuracy, accumulates them into a private history cache that defeats FRED's 3-year truncation, computes the cross-series relationships that carry the real signal, and writes one committed JSON the site reads — so production never holds the API key and never makes a live call.

**How it improves the *website*.** (1) The desk stops saying "feed pending" on its most important numbers and starts showing live spreads with provenance — the integrity contract turns from a limitation into a visible strength. (2) The derived layer means we display *intelligence*, not just levels: a reader sees "compression, 19th percentile" not a bare "203bp." (3) The same `credit.json` can feed the **equities desk's credit-hooks section** and the **hub's cross-asset board** — one fetch, many tiles, all consistent. (4) `hist60` in the JSON already powers our own SVG thumbnails (no third-party iframes), so charts match the brass skin exactly.

**How it improves the *research*.** (1) `digest-credit.ndjson` is now a growing **proprietary timeseries we own** — every build appends one dated row. Over weeks it becomes the backbone of a "what changed this week / this month" reflection and a factual record we can cite. (2) It closes the loop with the Perplexity workflow: P-06's findings (SDR-derived CDX, ETF-holdings-derived distress/EMBI) drop into the *same* gates and *same* derived layer — research output becomes live tiles without re-architecting. (3) The regime read + z-scores give us a cheap, honest **falsifier monitor**: the credit desk's pre-committed falsifiers include spread thresholds, and the pipeline can now flag when one trips.

**Best way to use / store / reflect, codified:**
- **Use** the *derived* block as the source of truth for tiles, not raw levels — relationships first.
- **Store** raw audit (pruned, gitignored), full history (gitignored, the accumulator), and the committed display JSON (the only thing the site reads). Three tiers, one direction.
- **Reflect** via the daily digest: a future micro-task (W5 or a scheduled task) reads `digest-credit.ndjson` and writes a weekly "credit, what moved" note — the first genuinely automated piece of *analysis*, not just display.
- **Extend** every new feed (SIFMA, P-06 sources, equities plumbing) through the same gates → same derived patterns → same chip states. The framework is the moat, not any single series.

## 8.6 · Data backend (O-15) — see the dedicated architecture doc

The pipeline's storage + analytics engine is now its own cross-cutting design: **`docs/VegaReady-Data-Backend-Architecture.md`** (owner decision O-15, the best-in-class free stack: DuckDB working store + Parquet open archive + bitemporal schema + Python/Polars when analysis deepens; Node keeps fetching; the site keeps reading one small JSON). It adds two capabilities that matter for credit specifically:
- **Accuracy by construction** — bitemporal storage (value-date + vintage + retrieved-at, never overwrite) so revisions are caught, look-ahead bias is impossible, and any tile traces to its exact source response.
- **Event-intelligence layer** — a git-tracked `_data/events.yaml` of plain-English outlier notes (COVID, SVB, the Morningstar rebrand, mechanical defaulter-exits…) with treatment tags (`exclude_from_baseline`, `regime_break`, `mechanical`, …) that clean the baselines and power analog/precedent forecasting. This is the structured spine under the desks' episode dossiers and shock-channel calls.

Backend waves **W1.6** (foundation) **W1.7** (event layer) **W1.8** (ML foundation) **W1.9** (ops hardening) execute behind the unchanged JSON contract — runnable before the visible W2 tiles or migrated underneath them later; the contract makes either order safe. The engine choice is now **locked (O-17, see backend doc v2):** two engines via Docker Compose — PostgreSQL 16 (Timescale + Apache AGE + pgvector) as ACID system-of-record + Neo4j Community as a derived graph read-model; local-first → managed (Neon/Supabase) + GitHub Actions later; Python 3.12 ML container with XGBoost/LightGBM + SHAP; Codex Desktop runs the local/Docker steps.

## 9 · Out of scope

Equities plumbing feeds, ICI flows, MOVE, x-ccy basis, interest coverage, CDX engineering-if-sourced (runbook-documented), front-door/dashboard data — all P-02b, landing in the same pipeline later.

---

### Changelog
- **v9 (2026-06-13)** — **R-06 ingested.** All four formerly-pending tiles now have honest fetch paths (new §2.6 connector specs); verdict board updated: **CDX 🔴→🟢 LIVE** (DTCC public dissemination, empirically verified IG≈50.7/HY≈108bp), **HY distress 🔴→🟢** (HYG proxy + named, drop JNK), **EMBI-GD upgraded** (EMB Core proxy + named two-row), **loan 🟡→🟢** (Morningstar screener level — verify — + EVLN PDF spread). Concrete endpoints/fields/labels/gotchas captured. Two disputes flagged for manual verification (Morningstar broad-index public path; already-resolved HY-as-spread). P-06 → ingested in INDEX.
- **v8 (2026-06-13)** — Backend doc rewritten to **v3 (self-contained for any agent/model)**: added vision/context/goals, non-negotiable guardrails (integrity contract, sacred JSON contract, never-break-build, Postgres-sole-truth, secrets, staging/collision protocols, dual-audience), canon cross-refs, repo layout + Docker-image reality + schema migrations, the missing `series` registry table, the connector interface for future feeds, the versioned display-JSON contract spec, data-quality assertions, idempotency/continuity/backup/timezone notes, and a glossary. No engine change — fills handoff gaps.
- **v7 (2026-06-13)** — Owner decision **O-17**: backend engine locked to two-engine Postgres(Timescale+AGE+pgvector)+Neo4j on Docker, local-first→managed, full ML stack (XGBoost/LightGBM+SHAP, HMM, pgvector analog, LLM curator). Backend doc rewritten to v2 (concrete bitemporal DDL, event-table schema with constraints replacing YAML, ML sequence, daily-ops RACI, machine probe). Backend waves now W1.6–W1.9.
- **v6 (2026-06-13)** — Owner decision **O-15**: adopt best-in-class free data backend (DuckDB + Parquet + bitemporal + Python/Polars). Spun the engine design into its own cross-cutting doc `VegaReady-Data-Backend-Architecture.md`, including the failure taxonomy (11 ways analytics goes wrong + coded treatments) and the **event-intelligence layer** for outlier tagging → clean baselines, regime-conditioned stats, and analog/precedent forecasting. Added §8.6 + backend waves W1.6/W1.7.
- **v5 (2026-06-13)** — Post-W1 reflection. Recorded W1 + **W1.5 analytics/hygiene** as DONE (derived compression spreads + regime read + deltas/z-score; raw-cache pruning; research digest log). Rewrote **W2 into 9 explicit steps** (consumer module → chip pilot → §1 cells → HY−IG headline → ticker → FRED notice → freshbar honesty → layman twin → verify). Added **§8.5 "how this capability compounds"** (website/research/storage/extend). Gap fixes folded in: unbounded raw cache, missing analytics layer, missing consumer module, no research-reflection artifact.
- **v4 (2026-06-12)** — Owner decision **O-14**: licensing caution dropped; attribution-only posture; risk acceptance recorded as the owner's. Verdicts re-cut on availability+accuracy: OAS family → live bare-number tiles (+cohort row, +percentile, +EM-corporate option); widget/light-well track deleted (design problem dissolves); SIFMA caveat dissolved; license gate → attribution metadata; O-7/O-10 dissolved; distress/CDX/EMBI-free/loan-level remain constrained **by availability, not law**. Accuracy machinery unchanged.
- **v3** — micro-loop discipline (section-at-a-time, pilot→ratify→propagate, W4 split, W6 verification-only); layman parity in every data wave; light-on-dark chart problem named; freshness-honesty rule; runbook micro-details.
- **v2** — first QC: engineering spec, fallback ladder, proxies, convention labels, tooltips, budgets, quarterly review, W-bonus rates, visuals section, O-11..O-13; research streams described by angle.
- **v1** — initial plan from R-02.
