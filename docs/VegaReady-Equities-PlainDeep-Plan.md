# Equities — "Plain Deep" Expansion Plan

**Date:** 2026-06-12 · **Status:** Wave 1 BUILT (version e5c220fc) under the owner's revised design; Wave 2 next

**OWNER DESIGN REVISION (supersedes §2 below):** the plain text is the FOCUS; the analyst snippet becomes the PROOF footer ("track it yourself" — trigger, free data source, what it falsifies) so readers learn AND can verify. No residual jargon allowed in plain text: every unit gets defined (bp, session) and every number gets a REFERENCE SCALE (e.g. 275bp calm today · 600–700bp trigger · ~2,000bp 2008). Target volume: plain layer ≥2× the analyst content. New fourth element: **unit primer** (defines bp/session/spread/DMA/correlation/percentile once, near the top of deep) and **scale bars** (3-anchor calm→trigger→extreme strips).

**Wave 1 shipped:** unit primer · hero 6-instrument decoder with alarm column · falsifier board inverted to plain-first (plain titles like "If junk-bond stress stays high for a month", plain body, scale bar, proof footer) · plumbing decoder (4 analogies + proof refs) · 5 timeline strips (Quant Quake, 2020 two-phase, revision lag, blackout quarter, Iran–Gulf events — main page, deep tier, owner-approved placement).
**Owner directive:** every single item in analyst Deep must be covered in detail in plain language — expanded. Current Deep reads like what Skim should be. Add carefully worded content, visual explainers, timelines, deep plain-English understanding.
**Principle:** the analyst content is never diluted; the plain layer grows AROUND it. Three new reusable components carry the expansion (specs below) — all deep-tier, all skinned, all reusable by future desks.

---

## 1 · The gap map (analyst-deep item → current plain coverage → gap)

| # | Artifact | Plain coverage today | Gap → planned fix |
|---|---|---|---|
| G1 | Hero instrument cluster (6 cells + banner) | one-line panelnote | No cell-by-cell decode. → **Decoder strip**: each instrument in plain words + "what would make it alarming" |
| G2 | Drivers (attribution rows) | plainread ✓ | Row notes terse. → expand each driver's note to a full plain sentence |
| G3 | §1 Regime tracked items (VIX, realized-vs-implied, vol term structure, regime model) | section plainread ✓ | Individual terms undefined. → **Decoder rows** per tracked item |
| G4 | §2 case files (4) | narrative ✓ | No visual. → **Timeline strips**: Quant Quake day-by-day (Jul bleed → Aug 6–9 → Aug 10 snap-back); 2020 two-phase (flight-to-safety → dash-for-cash → backstop) |
| G5 | §3 breadth trio cards | section plainread ✓ | Card "use" lines semi-technical. → **plain line** per card ("fewer soldiers following the generals…") + plain alarm thresholds |
| G6 | §4 valuation (CAPE, ERP, return bridge, regression fair value) | section plainread ✓ | Items undecoded; consequences of thin ERP unstated. → decoder rows + "what ≈3.2% historically meant for the following decade" (sourced, baseline-labeled) |
| G7 | §5 bedrock citations | corollary ✓ | Each study citation-heavy. → plain restatement line per study |
| G8 | §5 lag convention | tnote ✓ | No visual. → **Revision-lag timeline**: hours (price) → 1–6 wks (consensus) → ~3 mo (sector EPS) → guidance (annual) |
| G9 | §6 sector profiles (11 dcards) | table reader ✓ | Profiles open with semi-technical dr lines. → one-breath **plain line** per sector ("Utilities are the bond-like tortoises…") |
| G10 | §6 cycle clock | chart only | → plain decode of the four quadrants (early/mid/late/recession in plain words) |
| G11 | §7 factor heat cells | plainread ✓ + crisis notes ✓ | Light gap — covered; no action beyond G4 timelines |
| G12 | §8 plumbing table rows | section plainread ✓ | Each mechanism deserves its own analogy. → decoder block: buybacks ("the company is its own biggest customer; before earnings it steps away from the register"), CTAs ("autopilot funds that all see the same trigger"), 0DTE ("same-day option tickets, now ~half of volume"), GEX ("dealers forced to lean with or against the wind") |
| G13 | §8 blackout mechanics | text ✓ | → **Blackout-quarter timeline**: a quarter bar with earnings date, 5-week blackout band, +48h reopen, 10b5-1 exception note |
| G14 | §9 positioning sources (AAII/NAAIM/TFF/OFR) | section plainread ✓ | Who actually answers these and the data lag undecoded. → decoder rows incl. "Friday's report shows Tuesday's book" |
| G15 | §10 hooks (3) | section plainread ✓ + bullets | Number-dense. → one plain restatement line per hook |
| G16 | §11 conflict catalyst | scenario defs ✓ | No event timeline. → **Conflict timeline** from facts already on the page (Mar 2 VLCC/AWRP peak · Hormuz closure window · Ras Laffan force majeure · Apr 9 Petroline strike → Apr restore · current state), value-typed realized |
| G17 | §11 W/L + bifurcation tables | generated + callouts ✓ | Adequate; revisit after G16 |
| G18 | §12 falsifier cards (6) | section plainread ✓ | Triggers still jargon (HY OAS, RSP/SPY). → "in other words" **plain line** per card |
| G19 | §12 confirmation clock rows | intro ✓ | → plain line per row or decoder ("by day 5, junk-bond stress should be visible — if not, this isn't a funding event") |
| G20 | §13 evidence detail-files / quality | plainread ✓ | Adequate for now |

## 2 · The three new components (reusable, skinned, deep-tier)

1. **Decoder** (`.decoder`): two-column rows — analyst term → plain meaning (+ optional "alarm level" third cell). For G1, G3, G6, G12, G14, G19.
2. **Plain line** (`.plainline`): a single quiet italic-free line inside an existing card/row, prefixed "Plainly:" — for G5, G9, G15, G18. Carried as a `plain:` data field so future desks inherit it.
3. **Timeline strip** (`.tline`): horizontal SVG-free CSS timeline — dated nodes on a rail, each with a 1-line label + sub-label; supports phase bands (e.g., blackout window, dash-for-cash phase). For G4, G8, G13, G16. Built as markup+CSS (not SVG) so it reflows on mobile.

## 3 · Waves

- **Wave 1 (next build):** components + G1, G4, G8, G12, G13, G16, G18 — the decoder/timeline backbone + highest-impact gaps.
- **Wave 2:** G3, G5, G6, G7, G9, G10, G14, G15, G19 — the per-item plain lines and remaining decoders.
- **Wave 3 (after owner pass):** fresh-eyes subagent review; propagate the component trio + `pr:`/`plain:` field pattern into AGENT-BRAND-KIT §4c so credit and future desks inherit it.

**Integrity rules carried through:** timelines only contain dated facts already sourced on the page or in the cascades; the ERP-consequence line is labeled baseline/T3; nothing in the plain layer asserts a forecast.
