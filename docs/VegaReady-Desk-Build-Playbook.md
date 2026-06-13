# VegaReady — Desk Build Playbook (the repeatable standard)

**What this is:** the generalized, reusable recipe for building **any** desk to the bar set by Equities and Credit — so the remaining desks (Rates → FX → Commodities → Crypto → Cross-Asset, per O-18) hit the same level without re-deriving it. Distilled from the full credit completion cycle (CW1–CW7, 2026-06-14). Read alongside `LOOPS.md` (the operating loops), `INSTRUCTIONS.md` (working agreement + deploy mechanics), and `_program/AGENT-BRAND-KIT.md` (brand law, wins on conflict).

**One line:** *master first, derive the rest; one unit per loop; verify with curl, not vibes; never invent data; never ship a merge you haven't grepped.*

---

## 1 · The tier-dependency law (build order is NOT negotiable)
Every desk has **four reading tiers**, and each derives from the one before it. **Never compress or translate unfinished content** (owner-corrected 2026-06-13). Build strictly in this order:

1. **Analyst Deep** — the dense master: every section, live data wired, sourced/attributed. *Everything else is derived from this.*
2. **Analyst Skim** — a **compression** of the Deep: a `skim-only` "bottom line" surfaces each section's conclusion; the apparatus stays in Deep.
3. **Layman Deep** — a plain-English **retelling** of the master: chapters, every number anchored, signature figures. Deep but plain, ≥ the analyst's substance.
4. **Layman Skim** — a **compression of the Layman Deep**: "<desk> in 60 seconds" + chapter digest + per-chapter essence + remember-three.

Map to the work phases used on credit: CW2 (analyst Deep) → CW3 (analyst Skim) → CW4 (layman Deep, looped per chapter) → CW5 (layman Skim) → CW6 polish → CW7 ship. Skipping ahead — e.g. writing Skim before the Deep it compresses — produces a *residual* tier, the thing the Skim Completeness Law (kit §4c) forbids.

---

## 2 · The build cadence — one unit per loop
Inside each tier, work in **micro-loops**: one section (analyst) or one chapter (layman) per loop. Each loop is the full cycle, and the owner ratifies between loops (pilot → ratify → propagate):

> **build → stage (the compile gate) → curl-verify → visual spot-check → commit**

- **One commit per loop**, conventional message (`feat(<desk> CW4-L3): …`). Granular history = safe rollback.
- **Stage is the compile gate.** `npm run stage` runs `astro build`; a clean build that ends `Uploaded vegaready-staging` *is* the compile pass. Don't claim done on an unstaged edit.
- **Capture the skim digest line while writing each chapter** (one sentence) so the Layman-Skim tier assembles from them later instead of re-deriving — the move that avoids a residual Skim.
- For independent units you may batch the *build* of two chapters before one stage, but keep **verification per-chapter** and prefer **one commit per chapter**.

---

## 3 · Content laws (what goes in)
The integrity contract (`INSTRUCTIONS.md §3`) is the floor. On top of it, the laws this cycle proved:

- **Anchor-bank law (layman):** every reader-visible number gets a **fixed plain-English yardstick**, never a bare figure. *"278 bp ≈ 2.8% extra a year — ~3% is calm, 2008 hit 10%+."* Build an anchor bank up front; the figures stay live (from the feed module), the yardsticks are constants.
- **Integrity-in-plain-words (layman):** pending / `source_identified` tiles render as an **honest two-row scaffold** (named concept + what it would tell you / the plain proxy we reason from). Chip states translate to plain language (`source_identified` → "we've found a source and are wiring it — not live yet"). Every desk's Layman Chapter IX carries a **"what we can't show you live — yet"** panel. Honesty *is* the product, said plainly.
- **Plain-language boundary:** plain language is **layman-only**; the analyst page stays the dense master; **no reader-visible model names**; understanding distilled from where the research disagreed, attributed to "the research." (See memory `vegaready-plain-language-boundary`.)
- **Deep-but-plain & ≥-analyst volume:** the Layman Deep reproduces *all* the analyst substance, expanded with explanation/example — depth in plain words, not a summary.
- **Voice:** warm, concrete, second person where it helps; short paragraphs (lead + bullets, never a wall); one idea per sentence; everyday-money analogies; **one worked example per new concept**; no hype, no jargon without a `.gloss`.
- **Provenance:** each layman chapter names where its numbers come from and carries a `go`-link to the matching analyst section (`/markets/<desk>#<anchor>`).

---

## 4 · The visual system (how it looks)
- **Per-desk skin — bespoke, never cloned.** Pick a palette from the approved dark combos (`_program/APPROVED-THEMES.md`), show the owner **2–3 `visualize` options** (taste call — guessing is rejected), build `skin-<desk>.css` keyed on `html[data-skin="<desk>"]` + `data-skin` on the route. Credit's brass and equities' steel are desk-locked; do not reuse.
- **Chapter accents — own sweep per desk.** `--chA..--chI` defined in the skin file as a warm/cool sweep (credit = gold→plum "earthen"; pick a fresh logic per desk), shown as `visualize` options. **Low-salience only:** chapter numerals, dividers, pill kickers — never running text or fills.
- **Chapter system.** `chnav` numeral pills (always visible) + `laych` dividers. **Put each divider in its own `lay-chap` section that is NOT `deep`**, so dividers show in both Skim and Deep; rule `.lay-chap + .lay-sec{border-top:none}` hugs the divider to its content.
- **Figures — illustrative, not heroes.** SVG `viewBox="0 0 680 H"`, `width:100%;height:auto` inside a shared `.lay-fig`/`.lay-cycle` card (card + svg + `figcaption` with a confidence chip). ≤3 colours, whisper grid, semantic tints (`--pos`/`--warn`/`--neg`). **Data-wire marker positions** where the value is live (compute x from the feed value in frontmatter). Keep heights sane (~120–210px viewBox); verify with JS-measure if unsure (§6).
- **Skim recipe (reusable).** `skbanner` (with a `data-godeep` "Switch to Deep" button) + `sk60` "<desk> in 60 seconds" (data-wired call + 3 stat cells + watch line) + `skdigest` (N-line chapter digest, jump links, accent numerals) + a per-chapter `skim-bl` "in short" line on any **all-deep** chapter so Skim has no empty chapters + a `remember` three-things closer. Wire goDeep on `.chnav a, .skdigest a, .laydeck a.lk, [data-godeep]` so a click in Skim flips to Deep. Reuse the `skim-only` primitive (`body[data-disc="deep"] .skim-only{display:none}`, shared in `desk-v2.css`).
- **Mandatory chrome:** `<Wayfinder>` after `.masthead`, ONE frozen deck (secnav/laydeck + ↑Top chip), masthead never sticky (kit §4e/§4f).

---

## 5 · The QC gate (run every loop, before owner review)
A loop is not done until all pass:
1. **Anchor coverage** — every reader-visible number has a plain yardstick (grep for bare `bp`/`%`).
2. **No analyst leakage** (layman) — no IR/Sharpe/beta/coefficient jargon, no reader-visible model names; every first-use term has a `.gloss`.
3. **Live + honest** — numbers read from the feed module (not hardcoded); pending tiles use the honest scaffold; freshness line present.
4. **Volume** — layman chapter ≥ its analyst section's substance.
5. **Render integrity** (curl, §6) — content present; **no escaped HTML**; no leaked template expressions; trailing-slash URL; chapters/dividers resolve.
6. **Voice** — short paragraphs, concrete analogies, no hype.
7. **Visual** — figure heights sane; accents render; no narrow-wrap (kit anti-narrow-wrap).
8. **Digest captured** for the chapter (feeds the Skim tier).
9. **High-stakes:** spawn a fresh-eyes subagent to review blind (reads only the kit + the staged page).

---

## 6 · Verification methods (how to actually check — operational, hard-won)
- **Stage = compile gate.** Clean `astro build` + `Uploaded vegaready-staging` = compiles. (The `@astrojs/compiler` one-liner in INSTRUCTIONS §5 is a lighter pre-check.)
- **curl-grep is the workhorse.** `curl -s <trailing-slash URL>` then grep for: content markers; **escaped HTML** — `&lt;(div|span|svg|path|b|i)&gt;` **must be empty**; **leaked expressions** — `{x.`/`!= null`/`=>`/`.map(` must be empty in markup; **data wiring** — the actual live numbers; **counts** — `grep -o … | wc -l`. Fast, authoritative, glitch-free. Note: Astro extracts component `<style>` to `/_astro/*.css` (not inlined), so a class-name count in the page HTML = markup occurrences only.
- **JS layout measurement** (definitive for "is it actually broken?"). Via Chrome `javascript_tool`, read `getBoundingClientRect()` on figures/sections to confirm rendered heights are sane. Use it to **debunk false alarms** before "fixing" a non-bug.
- **⚠ Chrome screenshot PAINT-TIMING GLITCH — don't waste time on it.** Standalone `screenshot`, `scroll_to`, and **scroll-UP** actions frequently capture a **pre-paint BLACK frame**. **Scroll-DOWN** actions paint reliably; a `wait` (1–1.5 s) before capture helps. **A black frame is almost always this glitch, not a layout bug** — confirm via curl / JS-measure before changing anything. To inspect Deep content, note both layman desks **default to `data-disc="deep"`** (Skim is the toggle); to verify Skim, click the SKIM button or measure `offsetParent` visibility via JS.
- **Verify audit claims against the file.** When a subagent or audit reports an omission, **grep the actual file to confirm before acting** — audits overstate (a content audit this cycle flagged two "critical omissions" that were already present).
- **Mount caveat.** The sandbox mount can corrupt large-file reads (bogus "package.json invalid" / JSON parse errors). Treat the **served page (curl)** or **Desktop Commander host reads** as ground truth, not `/tmp` copies of mounted files.

---

## 7 · The ship runbook (production) — with the safeguards that bit us
**Pre:** explicit owner approval. Work in the `vegaready-main` worktree (branch `main`).
1. **Commit** all design-branch work (conventional message; obey shell hygiene below).
2. `git fetch origin && git pull origin main` — fast-forward main to any CI commits.
3. `git merge -X ours p0-s01-design-tokens -m "<summary>"` — `-X ours` is **mandatory** (preserves main's live data on conflict).
4. **★ VERIFY THE MERGE CARRIED YOUR CODE — before pushing.** `grep`/`findstr` the **main worktree's** files for your new markers (a class, a heading, a token). `-X ours` can **silently drop your changes** on a conflicting hunk; never push a merge you haven't grepped.
5. **★ Discard local data regen.** If you ran a build in the worktree, `build-data`/`fetch-feeds` rewrote `src/data/feeds/credit.json` + `src/data/iwt-bundle.json`; `git checkout -- src/data/…` so only the committed merge (with `-X ours`-preserved live data) is pushed. (The worktree has **no `node_modules`**, so a local `npm run build` fails at `astro` — **expected**; Cloudflare CI installs deps and builds on push.)
6. `git push origin main` — the deploy (~1–3 min CI; old build visible ~60 s).
7. **Verify production** by curl on **trailing-slash** URLs: new-content markers present, **no escaped HTML**, and the *sibling tier still intact* (don't break the analyst page shipping the layman, or vice-versa).
8. **Update** the desk-state memory + the desk's completion plan.

**Shell hygiene (cmd, via Desktop Commander)** — repeatedly caused "Access is denied" / mangled commits: use **single `&` separators** (not `&&`), **plain ASCII** commit messages with **no `%`** and **no inner double-quotes**. Em-dashes/unicode in the message are fine. **Never paste `npm run build` + the wrangler line as two lines** (type-ahead pitfall — INSTRUCTIONS §4).
**Recovery:** Cloudflare dashboard → vegaready → Deployments → roll back; `git reset --hard HEAD` for a botched local merge; **never** `git pull origin main` while on the design branch.

---

## 8 · Per-desk Definition of Done
- [ ] All four tiers built and **curl-verified** (analyst Deep + Skim, layman Deep + Skim).
- [ ] Chapters/anchors resolve; **both Skims complete** (no empty chapters — digest + per-chapter essence).
- [ ] Data wired from the feed module and **honest** (pending tiles scaffolded; "what we can't show live" panel).
- [ ] Every reader-visible number anchored; no analyst leakage into layman.
- [ ] Bespoke skin + accent sweep (owner-picked via `visualize`); Wayfinder + frozen deck present.
- [ ] QC gate (§5) passed; fresh-eyes subagent review for the full desk.
- [ ] Shipped to `main` (merge grepped before push) and **production-verified**.
- [ ] Desk-state memory + completion plan updated.

---

## 9 · Sequence for the remaining desks (O-18)
Rates → FX → Commodities → Crypto → Cross-Asset, **each bespoke to this Playbook**, before the Postgres backend phase. Per desk: research (L2, instantiate the P-05 template) → write the desk's completion plan (model: credit's) → build tiers 1→4 in micro-loops → ship. The *structure* is reused (dual-URL, Skim/Deep, chapters, the formatting system, Wayfinder, this Playbook); the *look and content* are fresh every time.

---
*Created 2026-06-14 from the credit completion cycle. This Playbook is the reusable standard; the credit/equities components are the worked references. On any conflict, `_program/AGENT-BRAND-KIT.md` wins.*
