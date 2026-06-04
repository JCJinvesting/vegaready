# Handoff — 2026-06-03 · Dark design phase locked

**Step & status:** Design exploration (dark) — COMPLETE and committed. Direction: **dark-primary**, 20 approved combinations, settings converged, emotional ranking + scenario map done.

**What's in this commit:**
- `_program/APPROVED-THEMES.md` — the 20-combo register (9 approved + 11 workbench saves), organized by canvas family, + convergent system defaults (radius 12 · zebra · Lora numerals · borderless · subtle step [deepest→standard] · density std · 15–16px · lift white [main-tint on deepest] · grain popular).
- `_program/THEME-SCENARIO-MAP.md` — best-to-worst ranking vs the vision + theme-per-subdomain scenario map + the four decision laws (accent metal = audience dial · main = dialect · warm ink = anti-ominous · family → audience).
- `_program/DECISIONS.md` — dark-primary decision appended (supersedes the light-primary lock; light = alternate).
- `_program/artifacts/` — the five working artifacts versioned: Theme Workbench (tool of record), Theme Journey (20-band scroll showcase), Palette Psychology (ranking report), Approved Dark Themes (9 presets + adaptive ramp), Brand & Colour Guide v2 (full 56-colour atlas).
- Earlier program state (DESIGN-CONTRACT.md, ROADMAP.json, LEDGER.json, HANDOFFS, RESEARCH) if not previously committed.

**Verification done:** all artifact copies hash/content-verified against the working originals via host-side tools (one stale-mount copy of the Brand Guide caught and re-written via file tools — the bash mount serves stale reads on large files; never trust mount reads for copies).

**Known stale item:** `LEDGER.json` still shows P0-S01 in_progress with the superseded LIGHT-theme port. The src/ working-tree changes for that port (global.css, BaseHead, Header) are **superseded by the dark pivot — do NOT commit them; revert before committing** (command in the commit block). P0-S01 will be re-cut from the dark contract after the light trial + Guide v3.

**Next obvious steps:** light trial (workbench treatment for off-whites/grays) → Guide v3 (absorb dark register, convergent defaults, psychology ranking, scenario map) → final token cut into DESIGN-CONTRACT.md → resume Phase 0 build (preview-first).

**Landmines:** bash-mount stale reads (verify via file tools / Grep on host paths); Champagne accent is ceremonial (≤5%, never text); per-subdomain theming must follow hue-journey adjacency.
