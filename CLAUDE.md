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
7. Reading model: Analyst `/markets/<desk>` (dense master) vs Layman `/layman/markets/<desk>` (independent, simpler; the `/layman` URL-prefix rule is owner-locked) via `data-mode`; Skim/Deep within a page via `data-disc` (Skim is a *designed tier*, never a residual — kit §4c). Reusable across desks = the *structure* (dual-URL, Skim/Deep, §9 de-dup, deep-but-plain Layman, the formatting system, the **Wayfinder**) — **not the palette.** Credit's **warm brass is credit-only** and equities' **steel is equities-only**; give each new desk its own look, chosen fresh from the approved combos and shown as `visualize` options, via its own `skin-*.css` + `data-skin`. Follow `_program/artifacts/Typography-Emphasis-Spec.md` for all formatting.
8. **The brand law is `_program/AGENT-BRAND-KIT.md` (v1.6)** — it wins over every other brand doc on conflict. Every masthead-system page below root carries `src/components/Wayfinder.astro` (crumb trail + sibling rail, kit §4e) directly after `.masthead`. Desk pages get ONE frozen bar — the secnav/laydeck with the ↑ Top chip; the masthead is never sticky (kit §4f). Verify shipped pages with curl greps on **trailing-slash** URLs (non-slash 307s).

## Key paths
- Work here: `C:\Users\cwm4t\ClaudeCode\vegaready` (branch `p0-s01-design-tokens`). Production worktree: `…\vegaready-main` (branch `main`). Data source: `…\IranWarTracker`.
- Reference desk: `src/components/EquitiesDesk.astro` (steel skin; chapters, designed Skim, plain-deep Layman — **SHIPPED to prod** with `CreditDesk.astro`, the `/layman` wing, and the Wayfinder). Routes: `src/pages/markets/<desk>.astro` + `src/pages/layman/markets/<desk>.astro`. Next targets: remaining desks (Rates → FX → Commodities → Crypto → Cross-Asset) + credit parity pass.
- Skins: `src/styles/skin-brass.css` (credit), `skin-steel.css` (equities). Desk styles: `src/styles/desk*.css`. Nav: `src/components/Wayfinder.astro`. Brand law: `_program/AGENT-BRAND-KIT.md` (v1.6). Brand history: `_program/`.

## First moves
Read the two docs → confirm Desktop Commander / GitHub MCP / Claude-in-Chrome are live → ask which URL we're iterating and whether another session touched it → view the live staging page → edit on the design branch → compile-check → `npm run stage` → review → iterate → ship to `main` only when approved.
