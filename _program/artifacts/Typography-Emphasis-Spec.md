# VegaReady — Typography & Emphasis Spec (for sign-off BEFORE building)

**Date:** 2026-06-04 · **Inputs:** 3-agent research over 6 documents · **Applies to:** both locked palettes (dark system + Soft White Desk light)
**Status: OWNER-APPROVED → built as `VegaReady-Type-Emphasis-Trial.html` (10 exhibits) → ALL APPROVED → locked into `APPROVED-THEMES.md → Typography & Emphasis`.**
**Contradictions in the corpus were resolved by:** master typography table (Quick Ref) > specimen Technical Specifications > checklist/QA rules > one-off mentions.

---

## 1 · The Type Scale (corpus pt → our px, mapped to the locked stack)

Families carry the corpus' role logic: **Playfair Display** = display/serif (corpus Georgia), **Fraunces** = body/logic (corpus Calibri), **Lora** = numerals/labels/stats. Max 3 families, each with a fixed role — hierarchy is made with size/weight/colour, never by adding fonts.

| Role | Size (min/std/max) | Weight | Line-height | Tracking | Word cap |
|---|---|---|---|---|---|
| Page title (H1) | 24/28/40px | 700 | 1.1–1.15 | −0.01em | ≤8 |
| Section header (H2) | 18/20–24/36px | 600 | 1.2 | −0.005em | 5–8 |
| Subheading (H3) | 16/17–18/24px | 600 | 1.3 | 0 | — |
| Body | 14/15.5–16/18px | 400 | **1.5 (1.6 on deep/dark canvases)** | 0 | 25–35/block |
| Bullets | 13–14px | 500 label / 400 text | 1.5 | 0 | 5–10 |
| Captions | 12/13/14px | 400 | 1.4 | 0 | — |
| Metadata/timestamps | 12px floor | 400 | 1.3 | 0 | — |
| Footnotes/sources | 11px floor | 300–400 | 1.3 | 0 | ≤12 |
| Micro-label (caps) | 10.5–11px | 700 | 1.2 | +.05–.06em | 1–3 |
| Hero stat | 44/48–56/64px | 700 | 1.0–1.1 | −0.01em | ≤3 · once per page |
| Inline stat | 14–15px | 600–700 | inherit | 0 | — |
| Quote | 18/19–20/22px | 500 italic | 1.4 | 0 | ≤20 words |
| Framing subline | 16–18px | 400 italic | 1.35 | 0 | — |
| CTA text | 14/15–16/18px | 600–700 | 1.0 | 0 | 2–4 · sentence case + "→" |

## 2 · The Weight Law
**Weight rises as contrast or chroma falls.** Regular legal only on AAA surfaces; AA demands Medium+; *any coloured text demands Bold* (blue ≥16px-bold gate generalizes); Tier-4 accents Bold/Black only; Light weight only on premium deep canvases. Readability ladder: 1) Regular→Medium · 2) contrast ≥7:1 · 3) Tier-1 text colour. Footers: Regular only — no bold/italics/caps.

## 3 · Italics
Licensed: **quotes** · **stats/framing sublines** · **Crimson legal disclaimers**. Italic paragraphs banned. Pull-quote: centered · Playfair/Georgia italic 18–22pt · fill Gold/Fog Purple/Bone (dark: surface- or gold-tint) · no inline styling or multi-colour words · no quotation marks unless needed · **never same view as a CTA; no CTA after quote or risk section.**

## 4 · Spacing
Pairwise rhythm ladder: title→subline 36px · subline→body 28px · body→CTA 24px · quote→section 44px. Sections ≥24px; mobile paragraphs ≥16px; cards 24–32px padding; buttons r8–10 inside r12; column ≤720px mobile; icons ≥12px from text. **Left-align explanatory text; quotes centered.** Tracking: 0 body · −0.005/−0.02em headers · +.05–.06em only on bold micro-labels.

## 5 · Underlines & Links
Underline = links + the **Royal Blue key-stat underline device** (≤5%, never running text; gold variant on dark). Links: theme link colour, ≥14px, mandatory hover, **hover −15% brightness** (buttons too). CTAs: sentence case + "→", always framed, one per view.

## 6 · Colour Budget & Context-Aware Emphasis
**5-layer envelope:** background 70–100% · overlay 20–40% · structural 15–30% · text variable (ink ~20% cap incl. lines) · **CTA/action 1–5%.** Global: 70-20-10 · ≤5 colours/view · ≤2 non-neutral outside Tier 1 · bright >5% = amateur · 1 hero stat · 1 CTA · 1 gradient · ≤3 data colours/chart. **Blank-space law:** ≥3× cap-height around CTAs · ~20% around Navy panels · ~15% around accent panels · canvas ≥40% visible · 20–30% neutral between strong colours.

| Surface context | Base | Emphasis budget | Result |
|---|---|---|---|
| Data page | canvas 80% | 2 data colours + benchmark, no decorative accent | "Clear analysis" |
| Risk page | warm-neutral 70% | Alert ≤5% + resolution teal 15% · **no CTA inside risk content** | "Balanced concern" |
| Passive-CTA page | container-grey 40% | one soft CTA | "Low pressure" |
| Premium/about | Bone-class 70% | Gold 10% + ink/navy headers | "Sophisticated luxury" |
| Trust/front door | Navy panel 20–40% + canvas | Gold ≤3%, one CTA 2% | "Institutional authority" |

## 7 · Emphasis Device Hierarchy
1 **Bold** · 2 **Size** (hero, once) · 3 **Ink contrast** · 4 **Semantic colour** (always bold, never decorative) · 5 **Fill containers** (chips/callouts/tint rows/quote fills/framed CTA) · 6 **Underline** (links + key-stat).
**Banned stacking:** all-caps body/CTA · italic paragraphs · multi-colour words · red CTA text · decorative Crimson · grey-on-grey · same-hue stacks · quote+CTA same view · emphasis colour on >2 elements/view.

## 8 · Trial contents (as built — all 10 approved)
E1 full-system slices (dark 1.6× + light 1.5×) · E2 scale duel · E3 family duel · E4 Weight Law · E5 italic constructions · E6 rhythm ladder · E7 tracking · E8 underlines/links · E9 measured CTA budget (2/5/8%) · E10 context budgets with live meters.
