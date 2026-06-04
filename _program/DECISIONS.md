# DECISIONS — append-only log

Every non-trivial decision, who/what made it, and why. Token/component changes are Opus-only and must be logged here.

---

### 2026-06-03 · Design contract locked
**Decision:** The VegaReady visual system is locked — warm grounds (Ivory-Grey for card UI, Almanac for reporting prose), Cream cards, stronger borders, paper grain on; Playfair (headlines) / Fraunces (body) / Lora (numerals) / IBM Plex Mono (labels); **muted Main** (Muted Petrol) for structure + large bands vs **saturated Accent** (Terracotta) for buttons/marks/prominent figures; status set Realized=green / Anticipated=amber / Latent=warm-grey (never red) / Alert=reserved red.
**By:** Owner, via the live theme composer (`VegaReady-Themeable-Demo.html`).
**Why:** Converged taste over three visual rounds; the muted-main/accent rule prevents large colour fills from competing with text. See `DESIGN-CONTRACT.md`.

### 2026-06-03 · Colour role rule (Main ≠ Button)
**Decision:** Structural colour over large areas must be muted; saturated colour is reserved for small attention surfaces (buttons, marks, single prominent figures), chosen to match section tone. Dense table figures stay ink.
**By:** Owner. **Why:** Bright colour at scale distracts and mutes surrounding text.

### 2026-06-03 · Preview-first delivery workflow
**Decision:** Changes are reviewed in **preview** (local) before anything is promoted to live (vegaready.com). Deploy to production only on owner approval of a phase/chunk. Deploy execution is manual (owner runs cmd from Opus's command blocks); GitHub Actions → Cloudflare automation remains an open option for later.
**By:** Owner. **Why:** Large structural + content revisions in flight; protect the live showcase.

### 2026-06-03 · Roadmap scope
**Decision:** ROADMAP.json (this directory) is the immutable scope — the audit Top-20 sequenced into 7 dependency-resolved phases. The stakeholder-grade HTML "Build Roadmap" app from the roadmap prompt is **deferred**; if built later it is generated from the same data so it can't drift.
**By:** Opus (recommendation) + owner go-ahead. **Why:** Get to building; keep one source of truth.

### 2026-06-03 · Dark-primary direction + approved dark set v1
**Decision:** The site theme direction is **dark-primary** (refined blue/green-black canvases — the JCJ system's own sanctioned dark register), with the refined warm-light system as the alternate pending its own trial. Nine dark combinations approved across two trial rounds (see `APPROVED-THEMES.md`, organized by canvas family). Taste laws codified: warm ink on cool desaturated ground; soft-teal/green mains (Verdigris leading); gold-metal accents only; the Saturation-Footprint Law (bright colour budget shrinks with saturation, including type size); the Tonal Ladder Law (same-family mains at ≥4.5:1 rung separation); derived elevation with no in-flow shadows.
**By:** Owner, via the dark trials + Theme Workbench. **Why:** Side-by-side evidence on the real dense page; dark reads more focused/alive for data-heavy intelligence. Supersedes the light-primary lock of earlier 2026-06-03 (that system remains the light alternate).

### 2026-06-03 · Reality model
**Decision:** Realized / Anticipated / Latent reality badges on every claim + a global reality filter; market-priced vs unpriced as the trade lens. Causal-edge Tracked/Proposed (observed vs reasoned) is a separate axis from event reality.
**By:** Owner-approved. **Why:** The site was mixing realized fact with hypothetical risk; this separates them, which is the platform's core honesty discipline.

### 2026-06-04 · Reserve colours validated (trial verdicts locked)
**Decision:** The COLOR-RESERVE register was validated in-context on the approved themes (`_program/artifacts/VegaReady-Reserve-Trial.html`, 13 exhibits, owner verdicts). **Adopted:** ETF Yellow `#FFD89A` as the benchmark/overlay line + "NOW" marker (charcoal text only, type-size law applies); Soft Alert Red `#D16D6D` as the fourth status register ("Elevated", between Anticipated and Alert); Royal Blue `#4169E1` for hero-stat numerals (numerals only, never background); Slate Blue VR `#8B7FD9` as chart series 3/4 with Steel Orchid VR `#9D8CC4` as the annotation layer; the risk-pacing spine (Terracotta candour → Sage Green `#B5C9A9` decompression → neutral structure); the GCC gate (Terracotta over Coral on GCC-facing surfaces); Warm Clay `#DAA06D` narrative-pivot panels; Dusty Plum `#9B6A6C` retrospective accents; Pale Mint soft-CTA zone → Fog Purple exit footer (page-end only, low-alpha tints); and the **Gold ✕ Crimson quarantine as a component law** (no gold inside alert/disclosure components). **Rejected:** the Sky Blue + Dark Teal CTA ladder (E3) — light text on Dark Teal `#0A7D7D` fails visually ("contrast for white text is bad"); the theme main remains the sole CTA register; any future commit-register attempt must re-trial with a darker fill or ink-on-light approach. Mint `#98FF98` and Electric Purple `#8A2BE2` rejections confirmed by judged exhibit (Saturation-Footprint violations).
**By:** Owner, via the Reserve Trial verdict export. **Why:** Every reserve adoption is now grounded in an in-context visual judgment on the real themes, with measured contrast — and every rejection is a written "how not to use" rule, not an assumption.

### 2026-06-04 · Light alternate locked — "Soft White Desk" (L1)
**Decision:** The light theme is locked from Light Trial v3 ("much better results — lock these in"). Full token set in `APPROVED-THEMES.md → The Light Alternate`. Core grammar: Soft White `#DDE2E6` canvas (Cool Paper/Modal siblings) · white cards + slate hairlines · cool-black ink `#2B2F34` · **headers = ink at weight** (Playfair semibold/bold, sentence case; labels 11px bold caps in ink — never thin, never colored by default; Teal Blue `#367588` sanctioned for section heads; Navy only ≥24px bold) · Navy title-zone panel with white text + gold kicker · status chips = same-hue 16% tint + darkened same-hue text · charts = Deep Teal main + slate-dash benchmark (theme-conditional benchmark token: dark→ETF Yellow, light→slate) + Light Cyan range band · actions = Teal Blue primary (hover −15%) / slate solid secondary / ink text-link (no outline buttons, no pastels, one primary per view). Six light-theme bans locked (blue ink below the 16px-bold gate; gold chart lines on light; white text on pale fills; both status-mark extremes; pastel/second-teal buttons; warm-paper default canvases).
**Process note:** v1 (dark-inversion) and v2 (first corpus pass) both failed on judged verdicts; the v3 spec came from a 5-agent diagnostic over 7 brand documents (incl. 4 newly uploaded) that converted every owner complaint into a corpus citation — all four v2 failures were corpus violations ("Cobalt… acceptable only when bold and >16pt"; "Title Zone = Navy [fill]"; gold-family "not compatible with Slate or Cobalt transitions — triggers too much contrast"; pale fills "dark/black text only"). Spec was owner-approved before the build.
**By:** Owner, via Light Trial v3. **Why:** The light alternate now shares the dark system's discipline — hue-neutral text that survives accent rotation, semantic colour at gated sizes, and judged bans instead of assumptions.
