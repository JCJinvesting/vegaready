# Data-Feeds Runbook (R-02 pipeline · W1)

**Posture:** owner decision **O-14** (2026-06-12) — attribution-only. Every figure is published with source attribution; gates protect accuracy (availability + correctness), not licensing. Do not re-litigate.

## How it works
`scripts/fetch-feeds.cjs` runs inside `npm run build` / `npm run stage` (3×-daily refresh cadence = the polling schedule; 2-series×3-builds matches the researched ≤6-calls/day pattern, now ~27/day across 9 series — trivial vs the 120/min ceiling).

- **Layer 1 (audit, gitignored):** `_data-cache/raw/` full responses; `_data-cache/history/<id>.json` accumulated daily observations — our defense against FRED's April-2026 3-year truncation of ICE series (we keep everything from first fetch forward).
- **Layer 2 (display, committed):** `src/data/feeds/credit.json` — only gate-passing values. CI/production builds consume the committed JSON, so the API key lives ONLY on the owner's machine (`FRED_API_KEY` user env var; the script falls back to `HKCU\Environment` when a stale shell lacks it).

## The gates (all accuracy)
units == Percent (ICE family) · frequency Daily · freshness ≤ 2 business days (weekend prints allowed only at month-end) · `"."` → null, never rendered · notes-hash change → **alert for human review** (alert-only, not a halt: FRED edits notes text routinely; a halt would cause false outages) · in-place value revision → `revised` flag for the tile badge.

## States
`live` → fresh, gate-passing. `stale` → carried last good value + badge (script failed or budget exceeded). `feed_pending` → no value ever fetched. Script **never breaks the build** (exit 0 always; selftest mode excepted).

## Series registry (display=false awaits owner decisions)
ICE OAS family: `BAMLC0A0CM` IG · `BAMLH0A0HYM2` HY · `BAMLC0A4CBBB` BBB · `BAMLH0A1HYBB` BB · `BAMLH0A3HYC` CCC — percent units, ×100 = bp, T-1 ~mid-morning US Central. `BAMLEMCBPIOAS` EM corporate (O-12; label "EM corporate — not sovereign EMBI"). Treasury (O-13): `DGS10`, `T10Y2Y`, `DFII10` — public domain, full history available.

## Gotchas codified from R-02
percent-not-bps (#1 bug) · 3-yr ICE truncation (cache accrues past it) · string values + `"."` · weekend month-end prints legal · HY index ejects defaulted bonds (tooltip) · IG $250M vs HY $100M floors (tooltip) · never hard-code vendor brand strings (S&P/LSTA→Morningstar precedent) · loan "spread" = 3-yr discount margin ≠ OAS · default rates differ ~3× by methodology — always label · `file_type=csv` returns a zip · can't request above native frequency · registered key only, never the docs' demo key.

## FRED API TOS obligations (active)
Site must display: **"This product uses the FRED® API but is not endorsed or certified by the Federal Reserve Bank of St. Louis."** (lands with the first FRED-fed tile, W2) · keep attribution/copyright notices intact · no Fed marks, no FRED in hostnames · low bandwidth (we're ~27 req/day).

## Operations
`npm run feeds` manual refresh · `npm run feeds:selftest` gate tests (11 checks) · alerts print as `[fetch-feeds][alert]` in build output and persist in `credit.json → feedStatus.alerts`. Key rotation: re-register at fred.stlouisfed.org → `setx FRED_API_KEY <new>` → restart shells.

## Future (P-02b / P-06)
SIFMA .xls parser (W2) joins this script with its own schema gates. P-06 return may add: SDR-derived CDX prints, ETF-holdings-derived distress/EMBI proxies, scheduled-publication quotes — all enter through the same gates. CDX-if-sourced notes: track on-the-run series rolls (~Mar/Sep 20 IG, 27 HY); never stitch series without an explicit splice; HY quotes in price, IG in spread.
