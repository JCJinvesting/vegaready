# VegaReady — Charts, Data-Viz & Iconography Spec B **v2** (web-enhanced, for sign-off)

**Date:** 2026-06-05 · **Supersedes Spec B v1.** Inputs: corpus research + Trial A locks + **3-agent web research** (Datawrapper/Urban Institute/Economist/FT/Tufte/Wilke/IBCS · NN-g/Heer-Robertson/WCAG/TradingView/Carbon · Material/Carbon/Pajamas/Untitled-UI + fintech/luxury analyses). Citations abbreviated; full source lists in the research transcripts.
**Marked:** 🌐 = web-research addition/upgrade · ⚠ = changes something we previously proposed.

---

## 1 · Chart skeleton 🌐 upgraded
Inside the locked card. **Horizontal gridlines only**, 1px — dark: white @6–8% opacity ("gridlines whisper"; brighter = "prison bars") · light: `#D5DADE`. **No vertical gridlines.** Zero/baseline is the one heavier line (~25–30% white dark / slate light). Axis labels = ink meta register; **4–6 round-number ticks**; unit stated once in the caption, not per tick (Urban/ONS); abbreviate 1.2K/$3M. **Drop y-axis + gridlines entirely when bars carry value labels** (Urban). Aspect: time-series ≈ 0.4 h/w (banking-to-45, Cleveland/Stanford). 🌐 **Dark chart canvas sits one step LIGHTER than the page** (elevated surface, TradingView/CleanChart convention) — matches our derived-elevation law. No glow on series, ever.

## 2 · Series system ⚠ duel expanded to 4
- **Opt A:** main → Cobalt-class → Slate Blue VR → Steel Blue (full-colour ladder).
- **Opt B:** cool analyst ladder (main → Steel → Slate Blue → Cadet).
- **Opt C:** corpus-literal Signal-first.
- **Opt D 🌐 (new, research-consensus): hero + greyed context** — ONE series in full theme colour at 2.5px; all context series in muted grey 1.25px @ ~45% ("use color sparingly; grey to de-emphasize" — SWD/Datawrapper/Economist house style). Likely the right default for dense multi-channel pages.
Hard rules regardless: ≤4–5 series then small-multiples · S1 stroke visibly heavier · 🌐 **every series ≥3:1 vs canvas (WCAG 1.4.11)** + ≥20% luminance separation between adjacent series · dashed = projection/secondary convention · never Navy/Gold/Teal-CTA as series.

## 3 · Positive/negative conventions 🌐 + non-colour cue
Opt A (Realized-green / Terracotta bars) vs Opt B (light-green / Crimson lines) as before — **plus the accessibility law: sign or arrow always accompanies the colour** (red-green blindness ≈8% of men; finance convention = shifted hues + non-colour cue). Bars always zero-based (universal consensus).

## 4 · Annotations & markers 🌐 hardened
**Every line and band carries a short label — a bare line is a failure** (ONS: ≤50 chars, adjacent, never overlapping). Marker grammar: **solid vertical = event · dashed = "now"/last-value** (distinct classes, consistent per class) · when events are dense, switch to small glyphs anchored to the series (TradingView markers pattern). Steel Orchid labels/leaders as specced. Milestones gold micro ≤2; Gold✕Crimson quarantine holds. Annotation info must also exist in text/footnote (a11y redundancy).

## 5 · Bands & shading
As v1 (Light Cyan range · Soft-Alert threshold at 8/14/22% to judge · sage positive regime) + 🌐 translucent fills with a **labelled boundary line**, never saturated solids on dark.

## 6 · Legends ⚠ research has a verdict
🌐 Unanimous across Datawrapper/Urban/Economist: **direct labeling beats legends; with ≤4 series there is "no excuse" for a legend block on a line chart.** Series-end labels, right of plot, left-aligned, colour-matched, bold (obeys our Weight Law). Legend survives only for stacked bars — horizontal, above the chart, stack-ordered. Trial still shows all four constructions so the verdict is yours, but C (direct labeling) is now the recommended default rather than an equal option.

## 7 · Iconography ⚠ duotone demoted
🌐 **Outline, monochrome, single weight — 1.5px on the 24px grid** (Pajamas weight; harmonizes with serif hairlines; "outline reads etched beside serif type, solid reads app-like"). 16px cuts redrawn, not scaled (Carbon ships per-size). Icon colour = adjacent text token, centre-aligned to text, 44px hit areas, label-paired (never icon-only for critical actions). State: outline at rest → accent colour + slight weight bump on active; filled-on-active reserved for primary nav only. **Duotone demoted to ≥40px marketing/feature modules only** (second tone @12–16% accent) — corpus sanctioned it broadly; research says it fails in dense UI. ⚠ **Retire padlock/shield as custody defaults** ("generic through overuse") → vault-ring/concentric-aperture motif, partition/bracket for segregation, ledger-line/seal for audit; arrows reserved exclusively for direction-of-funds, single destination arrowhead, left→right. Base library: Lucide/Untitled-class restyled to 1.5px.

## 8 · Diagrams 🌐 sharpened
**Card-contained nodes** (NN-g: containers over bare line-art; hairline 1px, elevated surfaces, no shadows) · horizontal ≤5 steps, auto-collapse to vertical on mobile · transmission/Sankey: **≤3 nodes per stage, ≤8 flows, values in on-node labels**, desaturated ramp · org/entity: ≤7–9 visible nodes then grouping · **all diagram strokes = 1.5px matching the icon stroke** — one "engraved" system · diagram-restraint law stands (max one per section).

## 9 · Stat devices + 🌐 sparklines + ramps
As v1 (stat-card vs anchor panel vs stat-row duel; gold KPI micro; slate capacity chips; F4 comparison). **New: sparklines** — pure data-ink, no axes/grid/frame, text-height, current value as number at right, optional last-point dot (Tufte). **New: heatmap/ramp law** — sequential = single-hue lightness ramp; diverging (vs zero/benchmark) = **blue–orange or teal→amber→red, never raw red–green**, neutral midpoint labelled, lightness-monotonic (survives greyscale).

## 10 · Motion doctrine ⚠ my v1 draw-in allowance is STRUCK
🌐 Research verdict: static-by-default **validated** — with one legitimate carve-out and one deletion:
- **DELETED (was in v1):** first-load chart draw-in/fade-in. Research: decorative, adds latency, and **animated intermediate states transiently display false trend shapes** — unacceptable on war-risk and market data. Charts render complete, instantly.
- **SANCTIONED (Heer & Robertson):** *state-change transitions* — time-range change, series toggle, filter, sort — 150–250ms, ease-out, **staged** (axis re-scale separate from mark morph, one semantic change per stage). These measurably aid comprehension via object constancy.
- Tooltips 🌐: **crosshair + pinned value strip top-left of the pane** (live-updating, never occludes data) + axis-edge date/value tags; touch = long-press; dim-others on hover instant in/out (≤100ms).
- Unchanged: hover −15% · no looping/pulsing · **no animated number tick-ups on serious metrics** · nothing >400ms · never linear easing · `prefers-reduced-motion` → everything instant · pause control for any auto-updating stream >5s (WCAG 2.2.2).

## 11 · Status ladder enhancement 🌐 (feeds back into the locked system)
Carbon's rule: severity = **colour + shape + symbol, never colour alone** (same-shape-different-colour banned). Proposal: our four status chips gain a glyph dimension — Latent ○ · Anticipated ◇ · Elevated △ · Alert ⬣/✕ — and severity scales placement + persistence (Alert = persistent banner; Latent = dismissible inline). Trial exhibits it; approving extends the locked status system.

---

## Trial B (after sign-off) — 12 exhibits, both palettes
B1 skeleton (research-tuned) · B2 series ×4 (incl. hero+grey) · B3 pos/neg ×2 + sign-cue · B4 marker grammar · B5 band strengths ×3 · B6 legends ×4 (direct-label recommended) · B7 icon sheet (1.5px outline system + custody motifs replacing padlocks) · B8 diagrams (step/Sankey/org, card-contained) · B9 stat devices ×3 + sparkline strip · B10 ramp/heatmap duel (diverging options) · B11 status-glyph ladder · B12 motion demo (state-change transitions live + reduced-motion toggle; no draw-ins).
**Nothing builds until you approve or amend this spec.**
