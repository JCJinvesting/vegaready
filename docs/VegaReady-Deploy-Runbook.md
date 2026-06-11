# VegaReady — Deployment Runbook (the locked-in ship method)

**Status:** confirmed working 2026-06-11 after a long debugging session. This is THE way VegaReady goes live. Follow it exactly.

---

## The one-line truth

**Deploying = pushing to `main`.** The Cloudflare Worker `vegaready` is git-connected to `github.com/JCJinvesting/vegaready` and **auto-builds + deploys on every push to `main`**. `vegaready.com` is a Custom Domain on that Worker. There is **no separate deploy step** — `git push origin main` is the deploy.

> Do **not** use manual `wrangler deploy` / `npm run deploy` **to reach production**. Bare `wrangler deploy` (and `--env staging`) target the production Worker `vegaready` and overwrite `vegaready.com`. The ONLY sanctioned manual deploy is the **staging** command below, which carries the explicit `--name vegaready-staging` override. For production, git push is the path.

---

## The setup (so the steps make sense)

- **Two git worktrees, one repo:**
  - `C:\Users\cwm4t\ClaudeCode\vegaready` → branch **`p0-s01-design-tokens`** — the design/staging worktree (where new work is built).
  - `C:\Users\cwm4t\ClaudeCode\vegaready-main` → branch **`main`** — the production worktree (and where the data pipeline lives).
- **The data pipeline** (Windows Task Scheduler, 3×/day) auto-commits `data: refresh …` to `main` from the `vegaready-main` worktree and pushes — which also triggers a Cloudflare redeploy with fresh data. So `main` has its own ongoing data history that must be preserved across merges.
- **Cloudflare adapter:** `@astrojs/cloudflare` v13, static output, Workers Static Assets + `SESSION` KV binding.

---

## Staging: preview on a live URL before going to `main` (CONFIRMED 2026-06-11)

Review the design branch on a real, deployed URL that is **fully separate from `vegaready.com`** — ideal for eyeballing a desk (or letting another agent session review) before it touches production. A dedicated Worker **`vegaready-staging`** holds the design build at **`https://vegaready-staging.royal-rice-7384.workers.dev`** (optionally aliased to the custom domain **`test.vegaready.com`**).

**Refresh staging** (run on the Windows machine, in the design worktree):
```
cd C:\Users\cwm4t\ClaudeCode\vegaready
npm run build
npx wrangler deploy --name vegaready-staging
```

- **`--name vegaready-staging` is mandatory and is the only override that works.** The `@astrojs/cloudflare` adapter generates its own `dist/client/wrangler.json` and a `.wrangler/deploy/config.json` redirect that wrangler treats as authoritative — so a root-`wrangler.json` `env.staging` block **and** the `--env staging` flag are BOTH silently ignored, and wrangler deploys to the hardcoded `name:"vegaready"` (= PRODUCTION). `--name` is applied as a post-resolution override and correctly retargets the staging Worker.
- **Always confirm the output reads `Uploaded vegaready-staging`** (not `vegaready`). If it says `vegaready`, you just overwrote production — roll it back (see Recovery).
- **First-time custom domain:** dashboard → `vegaready-staging` Worker → Settings → Domains & Routes → Add → Custom Domain → `test.vegaready.com` (one time; cert takes a couple minutes). After that, every staging deploy refreshes `test.vegaready.com` automatically.
- Staging shares the production `SESSION` KV namespace (harmless; it's only Astro's session store).

**Loop:** build on design → `wrangler deploy --name vegaready-staging` → review on the staging URL → iterate → when approved, run the Ship sequence below to merge into `main` and go live.

---

## Ship sequence: staging → live

1. **Build + commit on the design branch** (in `C:\Users\cwm4t\ClaudeCode\vegaready`):
   ```
   git add src/ public/robots.txt package.json wrangler.json astro.config.mjs
   git commit -m "feat: <what changed>"
   ```
2. **Go to the main worktree** (you cannot `git checkout main` in the design folder — main is checked out here):
   ```
   cd C:\Users\cwm4t\ClaudeCode\vegaready-main
   git status                 :: expect: On branch main, clean (if dirty, resolve first)
   git pull origin main
   ```
3. **Merge the design branch into main, preserving main's live data:**
   ```
   git merge -X ours p0-s01-design-tokens -m "Merge <feature> into main"
   ```
   **`-X ours` is mandatory.** On the files both branches touched (all of them data/pipeline/dashboard: `src/data/iwt-bundle.json`, `public/data-status.json`, `scripts/build-data.cjs`, `scripts/publish-from-iwt.cjs`, `src/pages/dashboard/*`, `data-history/*`) it keeps **main's** version (the live, pipeline-maintained data). The redesign/markets code doesn't conflict, so it merges in cleanly. Expect **0 conflicts**.
4. **Push — this is the deploy:**
   ```
   git push origin main
   ```
5. **Verify (give it ~1–3 min):** Cloudflare → Workers & Pages → `vegaready` → the newest deployment (your commit) should go **green (Success)**. Then reload `vegaready.com`. *Checking the site in the first ~60s shows the OLD version because the build is still running — that is not a failure.*

---

## Recovery / gotchas

- **Botched merge or half-finished pull?** `git reset --hard HEAD` in that worktree (your work is safe in commits + `git stash`). Then redo the sequence in the correct (`vegaready-main`) worktree.
- **NEVER** run `git pull origin main` while on the `p0-s01-design-tokens` branch — it merges `main` *into* the design branch and conflicts.
- **`web_fetch` / link-checkers return empty for `noindex` pages** (everything under `/archive/*`). That's the page working as intended, not a broken page — verify those from the built HTML.
- **Accidentally deployed to production via wrangler** (output said `Uploaded vegaready`)? Dashboard → Workers & Pages → `vegaready` → **Deployments** → in Version History find the newest **`main`-tagged** version → **⋯ → Roll back to this version**. `vegaready.com` reverts instantly; no rebuild needed.
- **Build failed (red in dashboard)?** Open the build log; the redesign code is compile-verified, so a failure is usually a data/env issue. Fix on the design branch, re-merge, re-push.
- **Accessibility is OUT OF SCOPE** (owner decision) — never add captions/scope/ARIA work as part of any ship.

---

## Going forward

Now that the redesign is on `main`, the everyday loop is simply: build on the design branch → commit → merge into `main` (`-X ours`) → `git push origin main` → live. Each new desk (Credit, Rates, FX, etc.) ships the moment it's pushed.
