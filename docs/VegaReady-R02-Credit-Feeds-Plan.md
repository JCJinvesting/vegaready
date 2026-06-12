# R-02 Implementation Plan — Credit Desk Live Data (P-02) · v4

**Status:** DRAFT v4 — awaiting owner go on the remaining decisions (§8). Staging-first; L5 ship after approval.
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
| 3 | HY distress ratio | 🔴 availability | `latest_published` quote at best (Fridson/fund-literature, dated, convention-labeled) | Constituent-level data is not published anywhere free, full stop |
| 4 | TTM HY default rate | 🟡 | `latest_published` tile — agency + month + methodology label | Monthly publication cadence is the physical limit |
| 5 | IG/HY new-issue volume | 🟢 LIVE | SIFMA monthly tile + YTD/Y/Y, attributed + link-back | .xls parsing fragility |
| 6 | CDX IG / CDX HY | 🔴 availability | `feed_pending` | Levels live behind registered-user walls; the one free "CDX" page is a different construct (would misrepresent the index) |
| 7 | EMBI Global Diversified | ✅ ours | Registry feed (signal 2.1) + variant label; optional EMB-ETF proxy tile | No free live feed exists; ours is the source |
| 8 | Leveraged-loan index | 🟡 | `latest_published` weekly 3-yr discount-margin, attributed; "never labeled S&P/LSTA" | Public pages gate the level; weekly commentary is the available cadence |
| + | EM corporate OAS — `BAMLEMCBPIOAS` | 🟢 optional | Context tile, labeled "EM corporate — not sovereign EMBI" | Mislabeling risk only |
| + | Rates & liquidity (hub) — `DGS10` / `T10Y2Y` / `DFII10` | 🟢 (O-13) | Hub tile via same pipeline | None — Treasury data |

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

**W1 · Pipeline foundation.** *[Scripts + data only; zero visual diff.]* Fetcher, both layers, five gates, alerts, runbook. Acceptance: poisoned-fixture tests (wrong units, ".", drifted schema, stale dates); cache accrual verified across two builds.

**W2 · First live tiles — §1 Regime + ticker.** *[Section: analyst §1 + utility ticker; layman gets its anchored plain-words twin in the same loop.]* IG + HY OAS live (bps, as-of, attribution footer). **State-anatomy pilot lands here** (live chip + as-of + full-width footer per kit §4d) for ratification. Ticker chips switch from "feed" to real values. Layman: "lenders' nervousness gauge" line with reference scale anchors (e.g., what 278bp means vs calm/stress markers — anchors per the plain-language law).

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

## 9 · Out of scope

Equities plumbing feeds, ICI flows, MOVE, x-ccy basis, interest coverage, CDX engineering-if-sourced (runbook-documented), front-door/dashboard data — all P-02b, landing in the same pipeline later.

---

### Changelog
- **v4 (2026-06-12)** — Owner decision **O-14**: licensing caution dropped; attribution-only posture; risk acceptance recorded as the owner's. Verdicts re-cut on availability+accuracy: OAS family → live bare-number tiles (+cohort row, +percentile, +EM-corporate option); widget/light-well track deleted (design problem dissolves); SIFMA caveat dissolved; license gate → attribution metadata; O-7/O-10 dissolved; distress/CDX/EMBI-free/loan-level remain constrained **by availability, not law**. Accuracy machinery unchanged.
- **v3** — micro-loop discipline (section-at-a-time, pilot→ratify→propagate, W4 split, W6 verification-only); layman parity in every data wave; light-on-dark chart problem named; freshness-honesty rule; runbook micro-details.
- **v2** — first QC: engineering spec, fallback ladder, proxies, convention labels, tooltips, budgets, quarterly review, W-bonus rates, visuals section, O-11..O-13; research streams described by angle.
- **v1** — initial plan from R-02.
