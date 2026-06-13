# VegaReady Data Backend Architecture · v3

**Status:** LOCKED, build-ready (owner decisions O-14…O-17, 2026-06-13).
**Audience:** any agent or model that builds, extends, or operates the data layer. **This document is self-contained — you should not need the originating chat to act correctly.** If something here conflicts with your instinct, this doc and the canon in §2 win.

> **NEW-AGENT READ-ME (the 60-second orientation).** VegaReady is a public, dual-audience, catalyst-neutral cross-asset market-intelligence website (Astro → Cloudflare Workers, static). Its *product* is **integrity**: it never invents a number, never shows a stale number as fresh, always labels methodology, and shows an honest "feed pending" rather than a fabricated value. This backend feeds the desks' data tiles. **The website reads exactly one small committed JSON file per desk and nothing else** — that file is a sacred contract (§9). Everything else here (Postgres, Neo4j, Python, Docker) runs on the owner's machine and never touches the Cloudflare deploy path. Build behind that JSON contract and you cannot break the live site.

---

## 0 · Vision, context & goals

**The vision.** A market-intelligence site a smart non-professional can trust *and check*, presented in two editions from one source: an **Analyst** edition (dense, source-tiered, `/markets/<desk>`) and a **Layman** edition (plain-English, anchored, `/layman/markets/<desk>`). Trust is the moat; every data decision serves it.

**Where things stand (so you know what exists).** The equities and credit desks are live in production with both editions, a site-wide Wayfinder nav, and a frozen command deck. A first data pipeline already exists: a Node script (`scripts/fetch-feeds.cjs`, waves W1/W1.5) fetches 9 FRED series, gates them for accuracy, accumulates history in JSON, computes derived credit spreads (HY−IG compression, CCC−BB dispersion, BBB−IG), and writes `src/data/feeds/credit.json`. **This backend project migrates that JSON pipeline onto a real database** without changing the JSON the site reads.

**What this backend is for.** (1) Turn "feed pending" tiles into live, attributed numbers. (2) Store every data point forever, bitemporally, so we can prove what we knew when. (3) Compute the *relationships* that are the real intelligence (spreads, regimes, analogs), not just raw levels. (4) Tag outlier events so analytics self-correct and patterns become discoverable. (5) Scale to many connectors (rates, FX, commodities, crypto, equities plumbing, ETF holdings, conflict cascades) without breaking.

**Goals / definition of done (system level).**
- Every current series round-trips through Postgres and the exported JSON is byte-compatible with today's (§9).
- "What did we know on date X" is a single query (bitemporal, §5).
- A daily unattended run fetches → stores → computes → exports → commits, and self-reports health; a failure never breaks the build or the site.
- New connectors plug in via a fixed interface (§8) without touching desk code.
- Every published figure carries source attribution + an as-of date; every model output carries an explanation (SHAP or a cited precedent).

## 1 · Non-negotiable guardrails (read before writing any code)

1. **Integrity contract (supreme).** Never invent or interpolate a number into a published figure. Never render a stale value as current — use the `stale`/`feed_pending` states. Always label units, methodology, and as-of date. An honest empty tile beats a confident wrong one. This is the brand; violating it is the only unforgivable bug.
2. **The JSON contract is sacred (§9).** The site depends on the exact shape of each desk's display JSON. You may *add* fields; you must not rename/remove/retype existing ones without bumping `schemaVersion` and updating every consumer. When in doubt, keep the shape; extend, don't mutate.
3. **Never break the build.** The pipeline must exit 0 even on total failure, falling back to the last good committed JSON and stamping `stale`/`degraded`. The static site must always build from committed files alone (no live DB call at build time).
4. **Postgres is the single source of truth.** All authoritative writes go to Postgres. Neo4j, Parquet, DuckDB, and the JSON are *derived* and one-directional. Never dual-write authoritative data.
5. **Bitemporal & append-only.** Never `UPDATE`/overwrite an observation. New values and revisions are new rows (§5). This is what makes accuracy provable and ML honest (no look-ahead).
6. **Secrets never touch the repo.** `FRED_API_KEY` and DB/Neo4j credentials live in env vars (local) or GitHub/Action + managed-DB secrets (cloud) — never committed, never logged, never in raw-cache filenames. `.env` is gitignored; provide a committed `.env.example` with blank values.
7. **Staging-first, owner-ratified (the loop).** Visible changes deploy to staging (`npm run stage`, which is `build-data + fetch-feeds + astro build + wrangler deploy --name vegaready-staging` — `--name` is mandatory; `--env staging` deploys to PRODUCTION by mistake). The owner reviews on staging before production. Production ship = `-X ours` merge to `main` in the `vegaready-main` worktree (the `-X ours` preserves main's live data). Verify live pages with curl on **trailing-slash** URLs (non-slash 307-redirects).
8. **Collision protocol.** Multiple agents/sessions touch this repo. **Re-read a file immediately before editing it.** Known hazard: the Linux mount can return *truncated* reads of large/just-written files — verify suspicious reads against the host (Desktop Commander) or the served page, never trust a single truncated view.
9. **Dual-audience duty.** Every data point that surfaces analyst-side must also be expressible for the Layman edition with a plain-English translation and a **reference-scale anchor** (e.g., "278bp — closer to calm; 2008 panic was 1,000bp+"). Plain language is layman-only; analyst pages stay dense; internal model names are never reader-visible.
10. **Taste calls go to the owner.** Colors, layout, naming, and any visible design choice are shown as 2–3 options (the `visualize` widget) and ratified — never guessed.

## 2 · Canon documents (the rest of the law)

- `CLAUDE.md` — repo quick-start, non-negotiables, key paths, deploy mechanics.
- `_program/AGENT-BRAND-KIT.md` (v1.7+) — **supreme brand law**; wins on any visual conflict. Tile-state chips, attribution footers (§4d chip law), frozen-deck/Wayfinder laws.
- `INSTRUCTIONS.md` — the loop, owner preferences, deploy pitfalls, desk-component anatomy.
- `docs/LOOPS.md` — L1 Desk / L2 Research / L3 Brand-QC / L4 Data / L5 Ship loops.
- `docs/VegaReady-R02-Credit-Feeds-Plan.md` — the credit desk's tile plan; this backend is its data layer (its §8.6 points here).
- `docs/DATA-FEEDS-RUNBOOK.md` — operational runbook for the current pipeline.
- `_research/INDEX.md` — research ledger (P-02 ingested; P-06 pending on the four availability-blocked tiles).

## 3 · The stack (all free/self-hostable; licenses stated honestly)

| Layer | Tool | License | Role |
|---|---|---|---|
| Container substrate | **Docker + Compose** (host has v29 / v5) | Apache-2 | one compose file runs the whole backend; portable host→cloud |
| System of record | **PostgreSQL 16** | PostgreSQL | ACID spine; all authoritative writes |
| Time-series | **TimescaleDB** ext | TSL (free self-host) | hypertables, continuous aggregates, compression, retention |
| In-DB graph | **Apache AGE** ext | Apache-2 | openCypher inside Postgres |
| Vectors | **pgvector** ext | permissive | analog/precedent embeddings |
| Graph viz + algos | **Neo4j Community** | GPLv3 (free, local) | derived read-model; Bloom/Browser; GDS (centrality, similarity, pathfinding) |
| Analysis + ML | **Python 3.12** in-container via **uv** | PSF/MIT | Polars, pandas, NumPy, statsmodels, **arch**, scikit-learn, **XGBoost/LightGBM**, **SHAP** |
| Fetch | **Node** (existing) | — | FRED v1/v2 + future connectors |
| Durable archive | **Parquet** (→ Cloudflare **R2** later) | Apache-2 | open, portable cold store |
| Analytical scratch | **DuckDB** (optional) | MIT | ad-hoc queries over Parquet; not the spine |
| Site contract | committed **JSON** | — | only public-facing artifact |

**Not chosen, on record:** QuestDB / ArcticDB (high-frequency / huge-versioned-dataframe specialists — revisit only for intraday tick or heavy Python research sets; they sit *beside* Postgres). Cloud warehouses (pay for scale we don't need). Rust (its speed already arrives via Polars/DuckDB; reserve for a future hot-path connector only). YAML/TOML for events (fragile; replaced by DB constraints, §7). **Cloudflare cannot host Postgres** — managed Postgres = Neon/Supabase; Cloudflare's role is R2 (Parquet) and, only for future live features, Hyperdrive.

## 4 · Repo layout & build conventions

```
pipeline/
  docker-compose.yml          # postgres(+exts), neo4j, pipeline(python), (optional) duckdb scratch
  Dockerfile.postgres         # base Timescale image + Apache AGE + pgvector (see image note)
  Dockerfile.pipeline         # python:3.12-slim + uv + requirements
  migrations/                 # NNNN_description.sql — ordered, idempotent, never edited once applied
  connectors/                 # one module per source (fred.*, sifma.*, …) implementing the §8 interface
  transform/                  # derived metrics, data-quality assertions, JSON export
  graph/                      # postgres→neo4j projection sync
  ml/                         # features, anomaly, regime(HMM), analog(pgvector), gbm+shap
  .env.example                # blank-valued template; real .env is gitignored
src/data/feeds/<desk>.json    # the committed display contract (what the site reads)
_data-cache/                  # gitignored: raw audit (gzip, rolling), parquet archive, db volume
```

**Docker image reality (do not assume one off-the-shelf image has all three extensions).** Build `Dockerfile.postgres` from a TimescaleDB image (the HA images have historically bundled pgvector — **verify at build**) and add **Apache AGE** for the chosen Postgres major (**verify the AGE release supports PG16 at build**; if AGE lags the PG major, pin Postgres to the latest major AGE supports). On first boot run `CREATE EXTENSION IF NOT EXISTS timescaledb, vector, age;`. **W1.6 acceptance includes proving all three coexist in one instance** — if they don't, fall back to AGE-in-a-second-Postgres or rely on Neo4j for graph and drop AGE. Pin every image by digest/tag; never `latest`.

**Schema migrations.** Numbered, ordered SQL in `migrations/` (e.g., `0001_core.sql`, `0002_events.sql`). Each is idempotent (`IF NOT EXISTS`, guarded). A tiny runner applies unapplied migrations on boot and records them in a `schema_migrations` table. Never edit an applied migration — add a new one.

## 5 · Bitemporal core + series registry

The `series` registry (referenced by every observation; fills the FK every other table needs):

```sql
CREATE TABLE series (
  id           text PRIMARY KEY,            -- e.g. 'BAMLH0A0HYM2'
  label        text NOT NULL,               -- 'HY OAS'
  source       text NOT NULL,               -- 'FRED'
  attribution  text NOT NULL,               -- 'ICE BofA US High Yield Index OAS · via FRED'
  units        text NOT NULL,               -- 'Percent'
  is_bps_pct   boolean NOT NULL DEFAULT false, -- true ⇒ value is percent; ×100 = bp
  frequency    text NOT NULL,               -- 'Daily, Close'
  license_class text NOT NULL DEFAULT 'attribution', -- metadata only under O-14
  display      boolean NOT NULL DEFAULT true,        -- false ⇒ fetched but tile pending owner decision
  notes_hash   text,                        -- methodology-change detector
  created_at   timestamptz NOT NULL DEFAULT now()
);
```

Observations — append-only, two timelines (see §1.5):

```sql
CREATE TABLE observation (
  series_id     text NOT NULL REFERENCES series(id),
  value_date    date NOT NULL,                       -- the date the number describes
  value_num     numeric,                             -- exact decimal; NULL for a '.' gap (never render)
  value_text    text,                                -- raw string the source returned
  vintage_start date NOT NULL,                        -- source realtime_start
  vintage_end   date NOT NULL,                        -- source realtime_end
  retrieved_at  timestamptz NOT NULL DEFAULT now(),   -- when WE fetched it
  PRIMARY KEY (series_id, value_date, vintage_start)
);
SELECT create_hypertable('observation','value_date', if_not_exists => true);
```

`numeric` not `float` (preserve source precision). **Idempotency:** ingest with `INSERT … ON CONFLICT (series_id,value_date,vintage_start) DO NOTHING` so re-running a day is safe; a *revised* value arrives with a new `vintage_start` → new row → "revised" badge is `SELECT count(DISTINCT vintage_start) > 1`. **"As known on date D":** `WHERE vintage_start <= D` pick max — no look-ahead. **Timezone note:** `value_date` is a tz-naive calendar date; `retrieved_at` is `timestamptz`. FRED publishes ~T-1 mid-morning US Central; the site clock is GST — compute "expected latest business day" in US Eastern/Central to avoid off-by-one staleness flags.

## 6 · Where analytics goes wrong — taxonomy + coded treatment

| # | Failure | Why it misleads | Treatment |
|---|---|---|---|
| 1 | Revision / vintage | backtests use data we didn't have | bitemporal store; "as known on date X" |
| 2 | Methodology / structural break | continuous-looking, changed meaning | `regime_break` event; never stat across without splice note |
| 3 | Regime dependence | a percentile is meaningless without its era | regime-conditioned stats; always label the window |
| 4 | Exogenous outlier (COVID, SVB) | shocks poison baselines | `event` + `exclude_from_baseline`/`winsorize` |
| 5 | Mechanical artifact (defaulter exit, rebalance, CDX roll) | looks like a move, isn't | `mechanical` tag; annotate, never signal |
| 6 | Definitional mismatch (OAS vs DM; EMBI variants; default-rate weightings) | non-comparables compared | units/definition metadata; block invalid comparisons |
| 7 | Composition / survivorship drift | silent change in what's measured | note; prefer within-regime |
| 8 | Correlation breakdown (stock-bond sign flip post-2022) | wrong-window correlation inverts | rolling + regime-aware; flag sign flips as events |
| 9 | Missing / stale | "no change" that's "no data" | explicit null; `stale` state; no silent carry-forward |
| 10 | Unit / scale (percent vs bps) | 100× errors | exact-decimal + units flag; explicit tested conversion |
| 11 | Forecast overfitting | false confidence on fat-tailed series | analog/precedent + humility; SHAP; never "will" |

## 7 · Event-intelligence layer (outlier knowledge, in constrained tables — no YAML)

The schema *enforces* validity (bad category/range/link rejected at write). Author via a small local form or seed SQL; audit trail is free.

```sql
CREATE TYPE event_category  AS ENUM ('exogenous_shock','policy','methodology_change','mechanical','data_error','regime_break','idiosyncratic_default','liquidity_event');
CREATE TYPE event_treatment AS ENUM ('exclude_from_baseline','winsorize','regime_break','annotate_only','flag_data_error','none');
CREATE TYPE shock_channel   AS ENUM ('funding','earnings','liquidity','policy','exogenous');

CREATE TABLE event (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  start_date date NOT NULL, end_date date,
  title text NOT NULL, note text NOT NULL,           -- plain English: what & why it matters
  category event_category NOT NULL,
  severity int NOT NULL CHECK (severity BETWEEN 1 AND 5),
  treatment event_treatment NOT NULL DEFAULT 'annotate_only',
  channel shock_channel,                              -- ties to R-01 shock-channel framework
  confidence numeric CHECK (confidence BETWEEN 0 AND 1),
  source text, created_by text NOT NULL DEFAULT 'owner', created_at timestamptz NOT NULL DEFAULT now(),
  CHECK (end_date IS NULL OR end_date >= start_date)
);
CREATE TABLE event_series (
  event_id bigint REFERENCES event(id) ON DELETE CASCADE,
  series_id text REFERENCES series(id),
  role text NOT NULL CHECK (role IN ('epicenter','affected','mechanical','beneficiary')),
  lead_lag_days int,
  PRIMARY KEY (event_id, series_id)
);
CREATE TABLE regime (
  id smallint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  start_date date NOT NULL, end_date date,
  name text NOT NULL, type text NOT NULL CHECK (type IN ('rates','risk','policy','volatility')), note text
);
```

Seed (W1.7): COVID `exclude_from_baseline`; SVB `annotate_only`; Morningstar/LSTA rebrand `regime_break`; recurring HY defaulter-exit `mechanical`; current regime row. Derived metrics JOIN observations to events/regimes so baselines self-clean and percentiles can be regime-conditioned. **Honesty:** event notes are labeled human interpretation, never data.

## 8 · Connector interface (so many feeds plug in uniformly)

Every source implements one contract; the daily job iterates connectors generically. New feeds touch only `connectors/`, never desk code.

```
connector.id            # 'fred', 'sifma', 'etf_holdings', …
connector.series()      # → [series registry rows it owns]
connector.fetch(since)  # → [{series_id, value_date, value_text, vintage_start, vintage_end}]
                        #   pure I/O; no transforms; respects rate limits; returns raw envelope for audit
connector.license_class # attribution metadata (O-14)
```

The runner: load connectors → `fetch(since=last_cached−grace)` → accuracy gates (units/frequency/schema/freshness, §10) → bitemporal `INSERT … ON CONFLICT DO NOTHING` → archive raw (gzip) → never throws past its own boundary (one bad connector cannot fail the run). FRED specifics live in the runbook (v1 incremental + v2 bulk-history; ≤6 core calls/day; key from env only).

## 9 · The display-JSON contract (sacred shape — do not break)

Per desk, the backend writes `src/data/feeds/<desk>.json` that the Astro component reads. The current `credit.json` shape (produced by W1.5) is the **v1 contract**; the Postgres backend must reproduce it byte-compatibly, then may *extend*:

```jsonc
{
  "schemaVersion": 1,                  // ADD this; bump only on breaking change
  "generatedAt": "ISO",
  "posture": "O-14 attribution-only",
  "series": {
    "hyOas": { "id","label","attr","display","state",        // state: live|latest_published|feed_pending|stale
               "asOf","value","bp","prevClose","chgBp","chg1w","chg1m",
               "revised","percentile","z","window":{start,end,n,label},
               "hist60":[[date,value]], "unitsNote" }
  },
  "derived": { "hyMinusIg":{bp,chg1wBp,percentile,z,asOf,label,note},
               "cccMinusBb":{…}, "bbbMinusIg":{…},
               "regime":{tag,detail,basis,asOf} },
  "feedStatus": { "checkedAt","degraded":bool,"alerts":[string] }
}
```

Rules: every series/derived item carries `attr` (attribution) + `asOf`; `state` drives the tile chip; nulls never render as `0` or `.`. Adding `schemaVersion` is the one change W1.6 makes — it future-proofs the contract. Consumers (the desk components) read via a thin `src/data/feeds/<desk>.js` helper, not the JSON directly.

## 10 · Derived metrics & data-quality assertions

**Derived (the intelligence):** compression spreads (HY−IG, CCC−BB, BBB−IG), each bp + 1w change + percentile + z over the regime-appropriate window; a rule-based, labeled `regime` read (never a forecast); per-series 1d/1w/1m deltas + z. Computed in SQL (Timescale continuous aggregates) and/or Python; results land in the JSON and feed every consuming desk (credit now; equities credit-hooks; hub board).

**Data-quality assertions (run every cycle; alert, don't crash):** no duplicate `(series_id,value_date,vintage_start)`; dates monotonic; no unexpected gaps beyond known holidays; values within sane bounds per series; `units`/`frequency` match the registry; methodology `notes_hash` unchanged (else alert for human review); served-history ≥ cached-history (truncation guard). Failures populate `feedStatus.alerts` and may force `stale`/`feed_pending`, never a crash.

## 11 · ML — foundation day one, models sequenced (SHAP mandatory)

**Foundation (W1.6–1.7):** the bitemporal store (honest backtests), labeled event/regime tables (ground truth), a feature store (Timescale views / Parquet), and the Python 3.12 ML container.

**Models, in order of value + defensibility:** (1) anomaly detection (robust z, STL) → *assists* human tagging; (2) regime classification (Hidden Markov / Markov-switching) → interpretable; (3) analog/precedent retrieval (episode embeddings in **pgvector**, similarity in Neo4j) → "what does today resemble?" by retrieving *real* episodes; (4) tabular prediction (**XGBoost/LightGBM + SHAP**) → beats deep nets at our size, stays explainable; (5) **LLM as curator-assistant** → drafts event notes, weekly "what moved" digests, tag suggestions, human ratifies; (6) deep-learning forecasters → *deferred*, only with bitemporal-correct backtests, presented as one uncertain input. **Guardrail:** ML assists and retrieves; never replaces the explainable "why"; every output attributable (SHAP / cited precedent); forecasts "resembles / historically followed," never "will."

## 12 · Storage tiers + backup/recovery

1. **Raw audit** — gzip, rolling, gitignored; forensic provenance. 2. **Postgres** (Timescale) — bitemporal observations + events + regimes + features; the system of record. 3. **Neo4j** — one-way-synced derived graph. 4. **Parquet archive** — periodic export; open/portable; local → R2. 5. **Display JSON** — committed; the only public artifact.

**Backup/recovery:** nightly `pg_dump` into `_data-cache/backups/` (gitignored) + the Parquet archive as an open cold copy; the committed JSON is itself a versioned snapshot of the latest display state. Recovery = restore dump or replay connectors from `since=earliest` (the bitemporal model makes a full rebuild deterministic). At Phase 2, managed Postgres adds its own PITR; R2 holds the Parquet.

## 13 · Daily operations + RACI + continuity

**Daily job (`pipeline daily`, one container command):** fetch all connectors → bitemporal upsert → refresh continuous aggregates → recompute derived + DQ + anomaly flags (apply event treatments) → sync Neo4j projection → export per-desk JSON → `git commit && push` → Cloudflare auto-builds.

**Continuity (never break anything):** if Postgres is unreachable or a step throws, the job logs, leaves the last committed JSON untouched (or re-stamps `stale`), exits 0; the site keeps serving the last good data. A failed migration aborts *that* run, not the site.

**Phase 1 — local (now):** Docker Compose on the owner's PC; Windows Task Scheduler runs the job daily. **Phase 2 — managed (later, no rework):** same containers/schema against Neon/Supabase; GitHub Actions cron runs it PC-independently; Parquet → R2; secrets in Action/managed-DB stores. Migration = connection string + secret move.

**RACI.** **Claude/Cowork:** architecture, schema/migrations, compose + Dockerfiles, connectors, transforms, graph-sync, ML code, daily-job code, tests, docs, commits; operates anything reachable here (sandbox tests, repo writes, FRED calls). **Codex Desktop:** `docker compose up`, running containers against the Docker daemon, registering the Task Scheduler job, host installs outside Docker, GPU/long jobs, reporting back. **Owner:** decisions, secrets/keys, staging ratification, Phase-2 managed-DB signup.

## 14 · Build waves (behind the JSON contract; either order safe)

- **W1.6 — Foundation.** compose + Dockerfiles; migrations `0001_core` (series + observation hypertable) ; migrate W1.5 JSON history into Postgres; derived metrics in-DB; JSON export with `schemaVersion`; gzip-keep raw; Parquet export. **Accept:** all series round-trip; "as known on date X" works; exported JSON byte-compatible; all three PG extensions coexist (or documented fallback); `docker compose up` clean (Codex-run).
- **W1.7 — Event layer.** `0002_events`; authoring path; seed events + regime; wire `exclude_from_baseline`; one-way Neo4j projection + first Bloom view. **Accept:** percentile with/without exclusions differs as expected; events queryable; graph renders.
- **W1.8 — ML foundation.** feature store; Python ML container; anomaly + HMM regime; pgvector analog retrieval; XGBoost/LightGBM + SHAP baseline, evaluated bitemporally. **Accept:** a SHAP-attributed prediction reproduces from a past vintage with zero look-ahead.
- **W1.9 — Ops hardening + Phase-2 readiness.** daily Task Scheduler job; DQ alerts + health record; pg_dump backup; documented one-step path to Neon/Supabase + GitHub Actions + R2. **Accept:** a full unattended daily run produces committed JSON + a green health record; continuity proven (kill Postgres mid-run → site JSON intact).

Recommended order: W1.6–1.7 first (tiles read the richer store), W1.8–1.9 alongside desk work. The visible credit tiles (R-02 plan W2) may ship before or after — the JSON contract makes it safe.

## 15 · Environment probe (build machine, 2026-06-13)

Docker **29.2.0** + Compose **v5.0.2** ✅ · Node **v24.13.1** ✅ · Git **2.53** ✅ · Python **3.12.4** default (+3.13/3.14 via uv) → pin **3.12** in-container · **psql** not on host (use container) · **Rust** absent (not needed) · **Codex Desktop** present for local execution.

## 16 · Glossary (for any agent new to the domain)

**OAS** option-adjusted spread (credit risk premium over Treasuries). **bp** basis point = 0.01%; FRED publishes OAS in *percent* so ×100 = bp. **HY/IG** high-yield / investment-grade. **Compression/decompression** HY−IG narrowing/widening = risk-on/quality-bid. **DM** discount margin (loan spread; not comparable to OAS). **Bitemporal** storing both the value's date and the vintage it was known by. **Hypertable** Timescale's auto-partitioned time-series table. **Continuous aggregate** an auto-refreshing materialized rollup. **AGE** Apache Graph Extension (Cypher in Postgres). **pgvector** Postgres vector-similarity extension. **GDS** Neo4j Graph Data Science (centrality/similarity/pathfinding). **SHAP** per-prediction feature-attribution (explainability). **HMM** hidden Markov model (regime detection). **Vintage** the version of a number as known on a given date. **Feed pending** an honest empty tile where no responsible source exists.

---
*v3 supersedes v2: added vision/context/goals, the non-negotiable guardrails, canon cross-refs, repo layout + Docker-image reality + migrations, the missing `series` registry, the connector interface, the sacred JSON-contract spec (+`schemaVersion`), data-quality assertions, idempotency + continuity + backup + timezone notes, and a glossary — so any agent can act from this doc alone. Decisions O-14…O-17 recorded; engine LOCKED.*
