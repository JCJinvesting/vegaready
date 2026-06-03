# VegaReady — DESIGN CONTRACT

*Frozen design tokens + component registry. Read-only for specialist models. Token or component changes are a Phase-0, Opus-4.8-only action, logged in `DECISIONS.md`. Every PR runs a token lint: no colour/font/size literal may appear outside the token layer.*

**Status:** locked 2026-06-03 (owner-approved via the live theme composer). Reference build: `VegaReady-Themeable-Demo.html`.

---

## 1 · Governing colour principle (the rule behind the tokens)

**Main and Accent are different jobs.** A structural colour spread over large areas must be *muted* or it competes with the text; the saturated, attention-grabbing colour belongs on small surfaces — buttons, marks, a single prominent figure — chosen to match the tone of the section. Concretely:

- **Main** is muted and structural. It carries headings rules, labels, links, nav-active, and large filled bands (which are rendered *even deeper/muted* via `--band`). Never a bright fill at scale.
- **Accent** is saturated and reserved. Buttons/CTAs, the brand mark (ν), the single prominent metric figure, the "priced-in" badge. Used at ~10% — to pull the eye, not absorb it.
- **Dense data stays calm.** Hero/standalone figures may use Accent; figures inside tables use ink, so numbers don't shout everywhere.
- Body text is always dark ink on a warm ground (readability first). Colour never fills body text or large content panels.

---

## 2 · Tokens

### Surfaces / grounds
| Token | Hex | Role |
|---|---|---|
| `--bg` | `#F4F3EE` (Ivory-Grey) | Primary ground — the card-based analysis UI |
| `--bg2` | `#F3EAD6` (Almanac) | Reporting/long-form ground — prose surfaces, not card grids |
| `--card` | `#FBF7EF` (Cream) | Card / raised surface |
| `--line` | `#D7CDB8` (Stronger) | Primary hairline border |
| `--line2` | `#C9BDA3` | Stronger border / dividers |
| Paper grain | on | Subtle fractal-noise overlay (~5% opacity) — "real paper", not a flat fill |

### Ink (text)
| Token | Hex | Role |
|---|---|---|
| `--ink` | `#20211D` | Primary text (~14:1 on `--bg`) |
| `--inksoft` | `#45463E` | Secondary text, body copy |
| `--muted` | `#76756A` | Labels, captions |
| `--faint` | `#A29F92` | Tertiary / placeholder |

### Colour roles
| Token | Hex | Role |
|---|---|---|
| `--main` | `#2F4853` (Muted Petrol) | Muted structural — headings rules, labels, links, nav-active, edge/quote/theme rules |
| `--band` | `color-mix(--main 82%, #1e1c18)` | Darkened/muted Main for large filled bands (JCJ band, field-of-forces); white text |
| `--accent` | `#B5532E` (Terracotta) | Saturated attention — buttons, brand ν, prominent figures, priced-in badge |
| `--accent-ink` | `#fff` | Text on Accent fills |

### Status / reality semantics (theme-independent — meaning, not brand)
| Token | Hex | Meaning |
|---|---|---|
| `--realized` | `#2F7D5B` (green) | Happened / observed / positive / "Tracked" |
| `--anticipated` | `#C77E22` (amber) | Forward effect, sound mechanism, not yet observed / caution |
| `--latent` | `#8A8576` (warm grey) | Hasn't happened, may not — deliberately neutral, **never red** |
| Alert (reserved) | `#A81E1E` (deep red) | Genuine live alerts / negative data only — reserved so it stays meaningful |

---

## 3 · Type

| Role | Family | Notes |
|---|---|---|
| Headlines (`--display`) | **Playfair Display** | High-contrast Didone; display sizes only |
| Body (`--body`) | **Fraunces** | Optical-size serif; readable at body sizes |
| Numerals (`--numfont`) | **Lora** | Best figure legibility of the set; tabular-nums on |
| Labels / tiers / IDs (`--mono`) | **IBM Plex Mono** | Eyebrows, source tiers, route paths, codes |

**Scale:** H1 `clamp(2rem,4vw,2.7rem)`/1.08 · section H2 ~1.7rem · card H3 ~20px/1.3 · lead 17–18px · body 16px/1.6 at 62–72ch · label 10.5px mono .14em caps · prominent figure 24–30px · caption 13px. **Spacing:** 4px base ramp (4/8/12/16/24/32/48/64); card padding ~20px; radius 8px. Motion restrained; respect `prefers-reduced-motion`.

---

## 4 · Two-ground system

- **Ivory-Grey + cards** = "scan this": discrete findings, the analysis pages, the dashboard.
- **Almanac + prose** = "read this": briefings, long-form reports, editorial — fewer borders, no card grid, drop-cap lede.
- Same type system and colour roles on both; the ground signals the mode of attention.

---

## 5 · Theming (the user-selectable slider)

All of the above are CSS custom properties; a theme is a swap of the token set under a `data-theme` switch. Ship a small curated set (2–4 themes) for QA/contract sanity even though the mechanism could hold more. A dark **"Desk"** theme is reserved as an optional Analyst-mode skin — never the default. Persist the user's choice (localStorage).

---

## 6 · Component registry (compose these; don't reinvent)

- **Finding-first analysis card** — category · plain H3 finding · single **H/M/L confidence pill** (hover for nuance) · 2–3 hero metrics · collapsed detail/sources. Simple shows the finding; Analyst adds the apparatus + trade.
- **Reality badge** — Realized / Anticipated / Latent dot-badge; pairs with the causal-edge Tracked/Proposed status; plus a global reality filter (show only realized / +anticipated / +latent).
- **Confidence pill** — single H/M/L, colour = status set; links to a one-time source-tier (T1/T2/T3) explainer.
- **Cascade rail** — 6-step "where am I / what's next" stepper (what happened → spreads → moved → exposed → connects → profits).
- **Scenario / situation split** — realized facts vs latent risks, visually separated (never mixed); conflict-specific state lives in its own section, not global chrome.
- **Report surface** — full-width Almanac-ground prose block.
- **Band** — muted-Main filled band (white text) for trust/positioning moments; its CTA uses Accent.
- **Dual-mode toggle** — persistent Simple ⇄ Analyst; every page renders meaningfully in both.
- **Trust badges** — verified / second-engine verified / PROVISIONAL / illustrative (T3).
- **Honest freshness banner** — "Last reviewed" from real data timestamps; never a stale "Live".

---

*Changes to this contract are Opus-4.8-only and must be logged in `DECISIONS.md`.*
