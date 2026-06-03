# Handoff — 2026-06-03 · Program bootstrap

**Step & status:** Bootstrap — DONE. `/_program/` initialized.

**What changed (files created):**
- `_program/DESIGN-CONTRACT.md` — locked tokens + component registry.
- `_program/ROADMAP.json` — 7-phase, dependency-resolved scope from the audit Top-20.
- `_program/LEDGER.json` — all steps `todo`, `current_phase: 0`, preview-first gate.
- `_program/DECISIONS.md` — design lock, colour-role rule, preview-first workflow, roadmap scope, reality model.
- `_program/RESEARCH/README.md` — the figure-reconciliation lane.

**Decisions made:** see DECISIONS.md (design contract; Main≠Button; preview-first; ROADMAP scope; reality model). **Deferred:** the HTML "Build Roadmap" app; deploy automation (manual + preview-first for now).

**Dual-mode note:** unchanged — the spine is Phase 1; P0 components must be built to render in both modes from the start.

**Verification done:** ROADMAP.json / LEDGER.json authored as valid JSON; DESIGN-CONTRACT cross-checked against the approved demo (`VegaReady-Themeable-Demo.html`). Not yet in the Astro app — no build run.

**Next obvious step(s):** `P0-S01` — port the DESIGN-CONTRACT tokens into the Astro app as a theme layer (branch `p0-s01-design-tokens`), delivered as a **local preview** for owner review before any deploy. Then `P0-S02` (standardized card).

**Landmines:** (1) The live `src/styles/global.css` is the dark cyan theme — P0-S01 is a real reskin migration; keep it token-only. (2) Owner runs all git/build/deploy host-side; hand exact command blocks, commit by explicit paths, never `git add -A`. (3) Bash mount truncates large reads — verify file completeness with the file tool, not `cat`. (4) Keep the pinned SESSION KV namespace + `wrangler deploy -c dist/client/wrangler.json`.
