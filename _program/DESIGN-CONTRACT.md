# VegaReady — DESIGN CONTRACT v2.0

*Frozen design tokens + component registry. Read-only for specialist models. Token or component changes are an Opus-only action, logged in `DECISIONS.md`. Every PR runs a token lint: no colour/font/size literal may appear outside the token layer (`src/styles/global.css`).*

**Status:** cut 2026-06-06 from the locked five-layer system (all judged verdicts).
**Machine payload:** `_program/artifacts/vegaready-tokens-v3.1.json` (v3.1.2) — this contract consumes it; do not hand-edit either.
**Deep registers:** `_program/APPROVED-THEMES.md` (source of truth) · `_program/artifacts/VegaReady-Guide-v3.1.html` (v3.1.2, full law text + specimens).
**Rule classes:** LAW (never violate) · DEFAULT (use unless a logged decision says otherwise) · RANGE (stay inside the band) · OPEN (registry choice, log the pick).

---

## 1 · Governing principles

1. **Dark-primary.** The site default is the dark system (working combo **WB5 Deep Desk**); light ("Soft White Desk" L1) is the alternate under `data-theme="light"`. Persist the choice (localStorage).
2. **Comfort Ceiling (LAW).** Every element targets a salience *band*, never a maximum. Ambient/structural elements (body text, surfaces, lifts, connectors, gridlines) sit inside the band; full salience is *spent* on meaning-carriers. Light body band 8–12:1 (`--body` #3A434C, never ink at paragraph length); dark keeps the ink→body two-step. Cumulative across scroll.
3. **Main ≠ Accent.** Main is the working colour (links, CTA, nav-active); Accent (gold family) is reserved optimism/premium moments. **JCJ Teal #36BBA6 is CTA-register only — BANNED as chart hero** ("neon"). **Gold ✕ Crimson quarantine:** no gold inside alert/disclosure components.
4. **Weight Law.** Weight rises as contrast or chroma falls; coloured text is always bold. Fix ladder: weight → 7:1 → Tier-1 colour.
5. **Colour + shape + symbol** for every status — never colour alone. Latent is never red; Alert is reserved for genuine live events.

---

## 2 · Canonical token layer (the lint surface)

`global.css` `:root` = dark; `[data-theme="light"]` overrides. One name, per-theme resolution — new components consume these and inherit both themes automatically.

### Surfaces & ink
| Token | Dark (WB5) | Light (L1) | Class |
|---|---|---|---|
| `--canvas` | `#0E1217` | `#DDE2E6` | DEFAULT (dark register OPEN: 20 combos) |
| `--surface` | mix(ink 5%, canvas) | `#E8EAEE` (Cool Paper) | DEFAULT |
| `--raised` / card | mix(ink 9%, canvas), borderless | `#FFFFFF` + `1px #C2CAD1` | DEFAULT (cards: dark=tint, light=hairline) |
| `--hairline` | mix(ink 14%, canvas) | `#C2CAD1` | DEFAULT |
| `--ink` | `#F2EBDC` (Cream) | `#2B2F34` — headings/labels/emphasis ONLY | LAW (light) |
| `--body` | `#E3DCCB` | `#3A434C` (10.1:1 white / 8.2:1 surface) | LAW (Comfort Ceiling) |
| `--muted` | `#A89F8C` | `#4A535C` | RANGE (muted-has-a-floor: ≥4.5:1) |
| `--faint` | `#968F81` | `#67727E` — white cards only, ≥12px | RANGE |

### Roles & actions
| Token | Dark | Light | Notes |
|---|---|---|---|
| `--main` | `#36BBA6` JCJ Teal | `#367588` Teal Blue | links · nav-active · CTA fill |
| `--accent` | `#C9A24A` Brass | `#4169E1` Royal Blue (numerals only) | dark gold register OPEN; light Royal = hero-stat numerals, never bg |
| `--cta-text` | `#0E1217` (ink-on-bright; white-on-Teal BANNED 2.38:1) | `#FFFFFF` (5.0:1 on Teal Blue) | LAW |
| `--link` | =main, ≥14px, hover −15% | =main idem | LAW |
| `--title-zone` | n/a (use band surfaces) | `#0B2E4E` Navy + white text + `#F4C37D` kicker | DEFAULT |
| `--key-stat-underline` | `#C9A24A` | `#4169E1` | ≤5%, never running text |

### Status & reality (glyphs: ○ latent · ◇ anticipated · △ elevated · ⬣ alert · ✓ realized)
| Register | Dark tint / text | Light tint / text |
|---|---|---|
| Latent | `rgba(132,144,158,.16)` / `#9AA5B1` | `#D8DCE0` / `#39434D` |
| Anticipated | `rgba(224,178,98,.15)` / `#E0B262` | `#F0DCBA` / `#75490F` |
| Elevated | `rgba(209,109,109,.15)` / `#D16D6D` | `#EDCFCF` / `#8F3535` |
| Alert | `rgba(225,100,112,.17)` / `#E16470` | `#F0C5CB` / `#9E2533` |
| Realized | `rgba(70,201,160,.15)` / `#46C9A0` | `#C6E6D6` / `#00603E` |

### Charts & data
| Token | Dark | Light | Law |
|---|---|---|---|
| `--chart-hero` | `#5FA897` Verdigris | `#2A6478` | JCJ Teal banned as hero |
| `--benchmark` | `#FFD89A` ETF Yellow | `#67727E` slate | dashed 1.5–1.8px; no gold lines on light |
| `--series-2` / `--series-3` | `#5E83D9` / `#8B7FD9` | `#4A6FA5` / `#6A5ACD` | ≤3 data colours per chart |
| `--series-context` | `#8A8274` | `#67727E` | visibility floor ~4.5:1, full opacity |
| `--annotation` | `#9D8CC4` | `#6E5D94` | ≤15% |
| `--pos` / label | `#46C9A0` | `#00A86B` / `#00754B` | sign+value labels mandatory |
| `--neg` / label | `#E2725B` | `#C55B43` / `#A14430` | idem |
| `--gridline` / `--baseline` | `rgba(242,235,220,.07)` / `.28` | `#D5DADE` / `#9AA5B1` | whispering grid, heavier baseline |
| `--range-band` | `#A8D5E2` @ .28 | idem | — |
| `--threshold-band` | `#D16D6D` @ .08 | idem | boundary dashed + labelled |
| `--diagram-arrow` | `#9A917F` | `#2B2F34` | arrows-are-structure: ink-tone, never accent |

Diverging ramps: stressed-LEFT → calm-RIGHT (reading-direction LAW), lightness-monotonic, labelled midpoint, raw red-green BANNED. Right-stacked legends for 3+ series (owner override).

### Legacy aliases (Phase-0 compat — values remapped, names kept)
`--bg`→canvas · `--bg-surface`→surface · `--bg-card`→raised · `--bg-elevated`→mix(ink 12%) · `--border(-light)`→hairlines · `--text`→body · `--text-muted`→muted · `--text-dim`→faint · `--cyan`→main · `--red`→alert text · `--amber`→anticipated text · `--green`→realized text · `--blue`→series-2 · `--indigo`→series-3 · `--gradient-bar`→locked-palette 4-stop. Components migrate to canonical names opportunistically; no new code may use `--cyan`.

---

## 3 · Type

| Role | Family | Spec |
|---|---|---|
| Display | **Playfair Display** | H1 28px/700/1.15 (≤8 words) · H2 20–24px/600 · H3 17–18px/600 |
| Body | **Fraunces** | 15.5–16px/400 · lh **1.5 light / 1.6 dark** (contrast-graded LAW) · 25–35 words/block |
| Numerals | **Lora** | tabular-nums; hero stat 48–56px/700 once per page; inline stat 14–15px/600–700 |
| Mono (legacy) | JetBrains Mono | sanctioned only for existing label/data registers pending type-migration step; max-3-families law applies to new surfaces |

Micro-label 10.5–11px/700/caps/+.05em — caps licences: micro-label + kicker + table headers, nothing else. Metadata floor 12px; footnote 11px; disclaimer 12px web. Quotes 19–20px italic ≤20 words (quote ≁ CTA). Rhythm ladder 36/28/24/44; left-align reasoning. Weight-role ladder: each weight has one job.

---

## 4 · Budgets (measured, CI-lintable)

- Five-layer envelope: background 70–100% · overlay 20–40% · structural 15–30% · ink ~20% cap · **CTA/action 1–5% of painted area**.
- 70-20-10 coverage · ≤5 colours/view · ≤2 non-neutral outside Tier-1 · 1 hero stat · **1 CTA** (long-scroll section-summary exception; never two visible) · 1 gradient · ≤3 data colours/chart.
- Blank space: ≥3× cap-height around CTAs · canvas ≥40% visible · 20–30% neutral between strong colours.
- Scroll zones: Entry (no risk/urgency/CTA) → Transition (risk arcs complete in 2–3 sections, modal-class buffers) → Resolution (**CTA-at-resolution LAW**; decompress before legal close). No-Risk-Chain · Scarcity ≁ Legal · no CTA inside risk content.
- Adjacency grammar: 46 allowed / 8 conditional / 28 forbidden pairs — see `emotionLayer.transitions` in the tokens payload.

---

## 5 · Components (compose these; don't reinvent)

**Locked registries** (full text in APPROVED-THEMES): 7 layout archetypes + 24 page IDs · nav = canvas-chrome + main-indicator (**NO-SCROLLING-HEADERS LAW**: hamburger/stacked, never horizontal scroll) · heroes role-assigned (title-zone default; Navy full-bleed front-door only) · footers (plain meta default; single-line LAW) · tables = zebra only + ink bold caps header (row-hairlines & header-fill REJECTED) · cards (strong-lift & surround-block REJECTED) · forms: text vertically centered (LAW). Radius 12/8–10/999 · card padding 24–32px · buttons ≥44px mobile, ≥36px desktop · modal ≤40% viewport, 1px border.

**Product components** (roadmap P0–P2): finding-first analysis card (category · plain H3 finding · H/M/L confidence pill · 2–3 hero metrics · collapsed sources) · reality badge Realized/Anticipated/Latent + global reality filter · confidence pill → source-tier explainer · cascade rail (6-step stepper) · scenario/situation split (realized facts never mixed with latent risks) · report surface · dual-mode toggle (Simple ⇄ Analyst — every page renders meaningfully in both) · trust badges · honest freshness banner (real timestamps, never stale "Live").

**Icons:** 1.5px etched outline, 24-grid, monochrome, adjacent-text colour; custody motifs (vault-ring/partition/ledger-seal), padlock/shield retired; no emoji/clipart/animation.

**Motion (LAW):** NO load animation — charts render complete. State-change only, 150–250ms ease-out staged; hover −15%; max 400ms; `prefers-reduced-motion` = instant; no looping/pulsing/tick-ups.

---

## 6 · Change control

Token/registry changes only via the trial protocol (spec → judged exhibits → verdict) and logged in `DECISIONS.md`. The GCC gate (no Burnt Orange; Terracotta over Coral) applies to all GCC-facing surfaces. *Supersedes the 2026-06-03 Themeable-Demo contract (Muted Petrol/Terracotta light-primary) — that system is retired.*
