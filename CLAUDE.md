# VegaReady — agent quick-start (read this first)

**What:** VegaReady is the public, catalyst-neutral, dual-audience cross-asset market-intelligence site of **JCJ Investing** (owner: `GP@jcjinvesting.com`). Astro + Cloudflare Workers. We are mid-redesign, building **one desk (one URL) at a time** in an iterate-on-staging loop.

**Required reading before you touch anything:**
- **`INSTRUCTIONS.md`** — how we work: the loop, the owner's preferences, the deploy mechanics + pitfalls, the component anatomy, editing gotchas, the full list of critiques to respect.
- **`PROJECT-CONTEXT-AND-FILES.md`** — vision, file map, route inventory, MCP/access, data pipeline, current state + roadmap.

## The non-negotiables
1. **One URL at a time**, polished over several iterations on staging before shipping. Each desk is **bespoke**, 100% effort — no cloning a template.
2. **Deploy to staging with ONE command:** `npm run stage` (= build + `wrangler deploy --name vegaready-staging`). Review at `https://vegaready-staging.royal-rice-7384.workers.dev`. The `--name vegaready-staging` override is the ONLY one that works (the Astro CF adapter makes `--env staging` deploy to PRODUCTION). Confirm the output says `Uploaded vegaready-staging`.
   - **Never paste `npm run build` and the wrangler line as two lines** — Windows `cmd` type-aheads the deploy and it silently never runs (looks like "no changes"). Use the single `npm run stage`, or run it via **Desktop Commander** (host process access — the agent can run builds itself and read the real output).
3. **Ship to production = merge to `main` + push** (in the `vegaready-main` worktree): `git merge -X ours p0-s01-design-tokens` then `git push origin main`. `-X ours` is mandatory (preserves main's live data). Only after owner approval.
4. **Never invent data.** "Feed pending" tiles stay honest. Integrity over false precision is the product.
5. **On taste calls (colors, names, layout), show 2–3 options via the `visualize` widget — don't guess.** The owner rejects blind attempts.
6. **Verify the live page** (Claude-in-Chrome) before claiming done. **Re-read a file before editing** if another session may have touched it (collisions have happened).
7. Reading model: Analyst `/markets/<desk>` (dense master) vs Layman `/layman/<desk>` (independent, simpler) via `data-mode`; Skim/Deep within a page via `data-disc`. Reusable across desks = the *structure* (dual-URL, Skim/Deep, §9 de-dup, deep-but-plain Layman, the formatting system) — **not the palette.** Credit's **warm brass is credit-only**, not the site template; give each new desk its own look, chosen fresh from the approved combos and shown as `visualize` options, via its own `skin-*.css` + `data-skin`. Follow `_program/artifacts/Typography-Emphasis-Spec.md` for all formatting.

## Key paths
- Work here: `C:\Users\cwm4t\ClaudeCode\vegaready` (branch `p0-s01-design-tokens`). Production worktree: `…\vegaready-main` (branch `main`). Data source: `…\IranWarTracker`.
- Reference desk: `src/components/CreditDesk.astro` (+ routes `src/pages/markets/credit.astro`, `src/pages/layman/credit.astro`). Next target: `EquitiesDesk.astro` (still old navy theme).
- Brass skin: `src/styles/skin-brass.css`. Desk styles: `src/styles/desk*.css`. Brand spec: `_program/`.

## First moves
Read the two docs → confirm Desktop Commander / GitHub MCP / Claude-in-Chrome are live → ask which URL we're iterating and whether another session touched it → view the live staging page → edit on the design branch → compile-check → `npm run stage` → review → iterate → ship to `main` only when approved.
