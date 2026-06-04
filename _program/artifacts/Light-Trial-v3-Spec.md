# Light Trial v3 — Specification (for sign-off BEFORE building)

**Date:** 2026-06-04 · **Inputs:** 5-agent diagnostic over 7 documents (3 new + 2 consolidated re-uploads + 2 re-sweeps) · **Verdict basis:** your v1/v2 exports
**Status: OWNER-APPROVED → built as `VegaReady-Light-Trial-v3.html` → verdicts approved ("much better results") → tokens locked into `APPROVED-THEMES.md → The Light Alternate`.**

The headline: **all four v2 failures turn out to be corpus violations, not taste mysteries.** The documents predicted every one of your rejections — we just hadn't asked them the right questions before.

---

## F1 · Headers — diagnosis and fix

**What the corpus actually says:**
- Blue text on light has a hard law: **never below 16pt, bold required** — "Cobalt… acceptable only when bold and >16pt" · "Cobalt: ⚠️ Never under 16pt" · "Navy → Titles 24pt | 32pt bold | 48pt bold." The v2 card labels were 10.5px thin letterspaced caps — below every threshold in the system.
- Deeper: **brand "blue headers" are mostly SURFACES, not ink** — "Title Zone | Top 20% | Navy [fill]" with white text. Reading "Navy: headers" as navy-coloured text was a category error.
- The corpus' own default header ink is **Charcoal — the body ink, heavier**: "Charcoal → Headers 20pt | 24–32pt | 48pt," "Apply to all headers," letterspacing "**−0.02em for headers**" (negative — the opposite of letterspaced caps). All-caps is sanctioned only at 10pt Charcoal micro-labels; elsewhere "all caps with small font… feels hostile."
- The purple tinge is anticipated: Navy and Cobalt's own cards say "**does not pair well with Purple tones**" — the system polices the blue-violet boundary, and a cool blue-grey canvas pushes Cobalt (#2B50AA, hue ≈ 227°) perceptually toward violet at small thin sizes. The friction table never pairs Cobalt headers with cool grounds — only warm Bone; on white it prescribes "Navy or **Black (Bold)**."
- Two licensed coloured header inks exist: **Teal Blue #367588** ("✅ Section header" — the same colour as the approved button) and Royal Blue at strict hero-bold-only gates.

**v3 header system:**
1. **Default: hue-neutral ink hierarchy** — headers are the body ink at heavier weight/size (Playfair semibold for section heads, Lora bold for card labels), sentence case, normal-to-negative tracking. "Won't match whatever changes" by construction.
2. **Card/table labels:** ink at 11px **bold** (weight fixes the thinness), no colour.
3. **Blue, done right, as options:** Navy as a *fill* (title-zone panel, white text); Cobalt/Navy ink ONLY at hero scale ≥24px bold; Teal Blue #367588 section headers (ties headers to the approved action colour).

## F2 · Status chips — diagnosis and fix

- Corpus marks are chip-scale (≤8–10%) and every pale fill carries "**use only with dark/black text**" — the documented construction is **pale same-family tint fill + dark text** (e.g. "Charcoal on Pale Mint 6.7:1 ✅", Pale Blush + Charcoal for the red family). A softer mid-register green even exists in the register: Approval **#5CD0BE** (vs the harsh #00A86B).
- **v3 chip recipe (the "mix between v1 and v2"):** tint background at ~15–18% strength + **darkened same-hue text** — e.g. Realized: `#00A86B` @16% fill, text `#00754B`. Trial showed 12% / 16% / 22%.

## F3 · Benchmark line — diagnosis and fix

- Verbatim corpus hit: gold-family "**Not compatible with Slate or Cobalt transitions — triggers too much contrast**." Also "Gold: Tier 4 Data: **Never in charts**" and ETF Yellow benchmark = "**dark bg only**." The gold benchmark on light was corpus-illegal twice over.
- The documented light-duty escape hatch: **Steel/Slate Gray reference lines** — "Tier 3 Data: Reference lines only," "works with all chart colors."
- **v3 chart:** Deep Teal main + **slate-grey dashed benchmark** `#67727E` + optional Light Cyan range band. ETF Yellow stays dark-theme-only; benchmark token is theme-conditional.

## F4 · Buttons — diagnosis and fix

- The corpus contains **no outline buttons and no generic pastel buttons** — #A9D18E and #36BBA6 carry funnel-stage semantics ("Commit Capital", mid-funnel "Ask"). Secondary actions are **soft solid fills or text**: "Track (Soft) → **Slate** fill," sentence-case text + "→" in a framed footer, one strong CTA per view, hover = 15% darker.
- **v3 action set:** primary = Teal Blue #367588 solid, white text · secondary = slate fill `#525C66` white text · tertiary = ink text-link with "→".

## Carried forward unchanged
Cool-grey canvases `#DDE2E6 / #E8EAEE / #E9EDF2` · pure-white cards + slate hairlines · warm-black/cool-black inks · radius 12 · zebra · Lora numerals · no in-flow shadows.

## v3 contents (as built — all approved)
1. Corrected full slice on Soft White · 2. Header duel (ink / Teal Blue / Navy 24px bold / v2 reject-confirm) · 3. Chip strength triplet 12/16/22% · 4. Slate benchmark chart · 5. Gold reject-confirm · 6. Action row · 7. Navy title-zone kept vs removed · 8. Canvas confirm (Soft White default).
