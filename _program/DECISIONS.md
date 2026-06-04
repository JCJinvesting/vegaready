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
