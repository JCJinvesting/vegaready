# Content intake playbook

How new research and content becomes live site content. Default path is **chat-based, human-in-the-loop** (paste research to Claude → distilled, verified, deployed) — the same loop used for Sections 1–3. Nothing should reach the live cards without passing through this.

## The two content streams

| Stream | Source | Path | Who handles |
|--------|--------|------|-------------|
| **Live news / events** | the ongoing conflict | IWT `inbox/` → dual-LLM extract+verify → dashboard data → `deploy-static.js` | Automated Windows pipeline (`3-auto-ingest.bat`, 3×/day) |
| **Research / analysis** | deep-research reports, structured data, new sections | paste in chat → distill → reconcile → regenerate → deploy | Claude + you, in chat |

This doc covers the **research/analysis** stream.

## Single source of truth

- Canonical research: `IranWarTracker/data/cascades/*.json` (full text, `sources[]`, `confidence`, `verificationLog`).
- Display modules: `vegaready/src/data/analysis/{transmission,exposure,outlook}.js` — **GENERATED** by `scripts/build-cascades.cjs`. Never hand-edit.
- Hand-authored synthesis: `connections.js`, `profits.js`, `freshness.js`.

## A. Updating EXISTING cards (sectors / regions / dynamics)

1. **Paste** the research or corrected figures in chat.
2. **Distill** → edit the matching `data/cascades/*.json` (surgical field edits; keep schema).
3. **Verify** high-stakes numbers with a second engine (Perplexity), as for Sections 1–3. Apply only verifiable corrections; tag `PROVISIONAL-2026` for conflict-period data; log changes in the file's verification record.
4. **Regenerate**: `node scripts/build-cascades.cjs` (rewrites the display modules from canonical).
5. **Verify** the edit landed (`git hash-object` vs staged; mount `git diff` can read stale).
6. **Deploy**: commit `IranWarTracker/data/cascades/*.json` + the regenerated `vegaready/src/data/analysis/*.js`; `npm run build` locally; push → Cloudflare.

## B. Adding a NEW page type (new dataset / section)

End-to-end recipe so a brand-new analysis section can't fall through the cracks:

1. **Canonical**: create `data/cascades/<newset>.json` with the same entry shape (`id, title, summary, data{}, sources[], confidence`).
2. **Generator**: extend `scripts/build-cascades.cjs` — add a mapping block that reads `<newset>.json` and writes `src/data/analysis/<newset>.js` (mirror the sectors/regions/dynamics blocks; add an `ID_MAP` if slugs differ).
3. **Page**: create `src/pages/<route>/index.astro`, `import { ... } from '../../data/analysis/<newset>.js'`, render with the `<details>` card pattern + the `Sources` row.
4. **Sub-nav**: add a `<area>` entry to `navByArea` + `areaLabels` in `src/layouts/AnalysisLayout.astro`.
5. **Main nav**: add the link to `navItems` in `src/components/Header.astro`.
6. **Verify + deploy**: `node scripts/build-cascades.cjs` → `npm run build` → commit both repos → push.

## C. Freshness / anchor updates

Paste current figures (Brent, Hormuz traffic, gas, urea, freight) or the scenario statuses → update `data/cascades/scenario-status.json` (full) + `src/data/analysis/freshness.js` (condensed strip + as-of date) → commit + push. (A Windows `.bat` cron version of this is drafted but deferred — see IWT `5-freshness-refresh.bat.draft`.)

## Reliability rules (mount + git quirks)

- Write via `/tmp` then `cp`, or `cat > file`; the file tools and plain `cp` are silently dropped on some paths.
- Verify a write landed with `git hash-object <file>` vs the staged source — **not** `git diff` (can read stale on this mount).
- Clear `del .git\index.lock` host-side before each commit batch.
- Always `npm run build` locally before pushing — the sandbox can't run `astro build`, so render changes are unverified until then.

*The golden rule: research enters as canonical JSON, the generator produces the cards. If you ever find yourself editing a card's text in a `.astro` file, stop — edit the canonical and regenerate.*
