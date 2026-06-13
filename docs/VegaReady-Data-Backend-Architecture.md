# VegaReady Data Backend Architecture · v2

**Status:** LOCKED design (owner decisions O-14…O-17, 2026-06-13). Build-ready.
**Scope:** cross-cutting infrastructure for every desk. R-02 credit feeds are the first tenant; all future connectors (rates, FX, commodities, crypto, equities plumbing, P-06 ETF holdings, IranWarTracker cascades) land in the same backend.
**Inviolable contract:** the website reads **one small committed JSON per desk**, nothing else. The entire backend runs on the owner's machine (Docker) and later in the cloud; it is invisible to the Cloudflare deploy path. Engine swaps never touch a tile.

---

## 0 · Decisions locked

- **O-14** — attribution-only posture; constraints are availability + accuracy, not licensing.
- **O-15** — best-in-class free/open backend, sized for day-365 not day-1.
- **O-16** — author through database constraints, not hand-edited text (YAML/TOML rejected as fragile).
- **O-17 (this doc)** — **two engines:** (1) **PostgreSQL 16** as the ACID system-of-record, extended with **TimescaleDB** (time-series), **Apache AGE** (in-DB graph), **pgvector** (similarity); (2) **Neo4j Community** as a derived graph read-model for rich visualization + Graph Data Science algorithms. **Docker Compose** is the deployment substrate. **Local-first → GitHub-committed JSON → migrate to managed (Neon/Supabase) later.** ML foundation built from day one; models sequenced. **Codex Desktop** executes local/Docker steps; Claude/Cowork architects, writes code, and operates what it can reach.

## 1 · The stack (all free/self-hostable; licenses noted honestly)

| Layer | Tool | License | Role |
|---|---|---|---|
| Container substrate | **Docker + Compose** (installed: v29 / v5) | Apache-2 | one `docker-compose.yml` runs the whole backend; portable host→cloud |
| System of record | **PostgreSQL 16** | PostgreSQL (permissive) | ACID spine; every authoritative write lands here |
| Time-series | **TimescaleDB** ext | TSL (free self-host) | hypertables, continuous aggregates, compression, retention |
| In-DB graph | **Apache AGE** ext | Apache-2 | openCypher inside Postgres — relationships without a 2nd write path |
| Vectors | **pgvector** ext | permissive | embeddings for analog/precedent retrieval |
| Graph viz + algorithms | **Neo4j Community** | GPLv3 (free, local) | derived read-model; Bloom/Browser visualization; GDS (centrality, similarity, pathfinding) |
| Analysis + ML | **Python 3.12** (pinned in container) via **uv** | PSF/MIT | Polars, pandas, NumPy, statsmodels, **arch**, scikit-learn, **XGBoost/LightGBM**, **SHAP** |
| Fetch | **Node** (existing) | — | FRED v1/v2 client; other connectors |
| Durable archive | **Parquet** (→ Cloudflare **R2** later) | Apache-2 | open, portable, decades-durable column store |
| Optional analytical scratch | **DuckDB** | MIT | ad-hoc queries over Parquet; not the spine |
| Site contract | committed **JSON** | — | the only public-facing artifact |

**Engine relationship (no dual-write):** Postgres is the *single* authoritative store. After each run, a one-directional **sync projects** the relevant rows (events, series, regimes, catalysts + their links) into Neo4j as nodes/edges. Neo4j is a *read-model* for visualization and graph algorithms — never authored directly. This eliminates consistency risk: one source of truth, one derived view.

**Not chosen, and why (so it's on record):** QuestDB / ArcticDB are high-frequency/huge-scale specialists — revisit only if we ingest intraday tick (QuestDB's `ASOF JOIN`) or build heavy versioned Python research sets (ArcticDB's versioning); they sit *beside* Postgres, never replace it. Cloud warehouses (Snowflake/BigQuery/Databricks) bill for scale/concurrency we don't need. Rust not adopted — its speed already arrives via Polars/DuckDB; reserve it for a future hot-path connector only.

## 2 · Accuracy by construction — the bitemporal core

Every observation is **append-only, never overwritten**, and carries two timelines:

```sql
CREATE TABLE observation (
  series_id   text        NOT NULL REFERENCES series(id),
  value_date  date        NOT NULL,              -- the date the number describes
  value_num   numeric,                           -- parsed exact decimal (no float drift)
  value_text  text,                              -- raw string FRED returned
  vintage_start date      NOT NULL,              -- FRED realtime_start (when this version was true)
  vintage_end   date      NOT NULL,              -- FRED realtime_end
  retrieved_at  timestamptz NOT NULL DEFAULT now(), -- when WE fetched it
  source        text      NOT NULL,
  PRIMARY KEY (series_id, value_date, vintage_start)
);
SELECT create_hypertable('observation','value_date');  -- Timescale partitioning
```

This makes possible what flat files cannot: **reconstruct what we knew on any past day** (kills look-ahead bias in every backtest/ML evaluation), **catch every revision** (a restated number is a new row; the "revised" badge is a query), and **audit any tile to its exact source response** (paired with the gzip-kept raw envelope archive). Numeric stored as `numeric` not `float` — FRED's precision is preserved.

## 3 · Where analytics goes wrong — failure taxonomy + coded treatment

| # | Failure | Why it misleads | Treatment |
|---|---|---|---|
| 1 | Revision / vintage | backtests use data we didn't have then | bitemporal store; "as known on date X" |
| 2 | Methodology / structural break | continuous-looking series, changed meaning | `regime_break` event; never stat across it without a splice note |
| 3 | Regime dependence | a percentile is meaningless without its era | regime-conditioned stats; always label the window |
| 4 | Exogenous outlier (COVID, SVB) | one-off shocks poison baselines | `event` + `exclude_from_baseline`/`winsorize` |
| 5 | Mechanical artifact (defaulter exit, rebalance, CDX roll) | looks like a move, isn't | `mechanical` tag; annotate, never read as signal |
| 6 | Definitional mismatch (OAS vs DM; EMBI variants; default-rate weightings) | comparing non-comparables | units/definition metadata; engine blocks invalid comparisons |
| 7 | Composition / survivorship drift | silent change in what's measured | note; prefer within-regime |
| 8 | Correlation breakdown (stock-bond sign flip post-2022) | wrong-window correlation inverts conclusions | rolling + regime-aware; flag sign flips as events |
| 9 | Missing / stale | "no change" that's "no data" | explicit null; `stale` state; no silent carry-forward |
| 10 | Unit / scale (percent vs bps) | 100× errors | exact-decimal + units field; explicit, tested conversion |
| 11 | Forecast overfitting | false confidence on fat-tailed, regime-fragile series | analog/precedent + humility framing; SHAP attribution; never "will" |

## 4 · Event-intelligence layer (the outlier knowledge, in constrained tables)

No YAML. Events are authored straight into Postgres where the schema *enforces* validity — illegal categories, missing fields, broken links, and bad ranges are rejected at write time. Authoring path: a small local form or seed SQL (Codex can scaffold a minimal admin page; an audit trail comes free via `created_at`/`updated_at`/`created_by`).

```sql
CREATE TYPE event_category AS ENUM
  ('exogenous_shock','policy','methodology_change','mechanical',
   'data_error','regime_break','idiosyncratic_default','liquidity_event');
CREATE TYPE event_treatment AS ENUM
  ('exclude_from_baseline','winsorize','regime_break','annotate_only','flag_data_error','none');
CREATE TYPE shock_channel AS ENUM ('funding','earnings','liquidity','policy','exogenous');

CREATE TABLE event (
  id          bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  start_date  date NOT NULL,
  end_date    date,                       -- null = point event; CHECK end >= start
  title       text NOT NULL,
  note        text NOT NULL,              -- plain English: what happened, why it matters
  category    event_category NOT NULL,
  severity    int  NOT NULL CHECK (severity BETWEEN 1 AND 5),
  treatment   event_treatment NOT NULL DEFAULT 'annotate_only',
  channel     shock_channel,              -- ties to the R-01 shock-channel framework
  confidence  numeric CHECK (confidence BETWEEN 0 AND 1),
  source      text,
  created_by  text NOT NULL DEFAULT 'owner',
  created_at  timestamptz NOT NULL DEFAULT now(),
  CHECK (end_date IS NULL OR end_date >= start_date)
);
CREATE TABLE event_series (         -- which series an event moved, and how
  event_id   bigint REFERENCES event(id) ON DELETE CASCADE,
  series_id  text   REFERENCES series(id),
  role       text   NOT NULL CHECK (role IN ('epicenter','affected','mechanical','beneficiary')),
  lead_lag_days int,                -- did this series move before/after the epicenter?
  PRIMARY KEY (event_id, series_id)
);
CREATE TABLE regime (               -- eras, so stats compute within compatible periods
  id smallint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  start_date date NOT NULL, end_date date,
  name text NOT NULL,               -- "QT + risk-on, 2024–"
  type text NOT NULL CHECK (type IN ('rates','risk','policy','volatility')),
  note text
);
```

Seed examples (COVID `exclude_from_baseline`, SVB `annotate_only`, Morningstar rebrand `regime_break`, recurring defaulter-exit `mechanical`) ship in W1.7. The derived-metrics step JOINs observations to events/regimes so baselines clean themselves and percentiles can be regime-conditioned.

## 5 · ML — foundation day one, models sequenced (SHAP mandatory)

**Foundation (build now, in W1.6–1.7):** the bitemporal store (honest backtests), labeled `event`/`regime` tables (ground truth), a **feature store** (Postgres views / Parquet feature tables), and the **Python 3.12 ML container** (Polars, statsmodels, arch, scikit-learn, XGBoost, LightGBM, SHAP). Without these, models can't be trained or evaluated honestly.

**Models, in order of value and defensibility:**
1. **Anomaly detection** — robust z-scores, STL decomposition; *assists* human event-tagging (suggests "tag this?").
2. **Regime classification** — Hidden Markov / Markov-switching; interpretable "what regime are we in."
3. **Analog/precedent retrieval** — episode embeddings in **pgvector** (and/or Neo4j similarity); "what does today resemble?" by retrieving *real* past episodes. The honest forecasting engine.
4. **Tabular prediction** — **XGBoost / LightGBM with SHAP** on engineered features; beats deep nets at our data size and stays explainable. SHAP attribution ships with every prediction or it doesn't ship.
5. **LLM as curator-assistant** — drafts event notes from detected anomalies, weekly "what moved" digests, tag suggestions; human ratifies. Aligns with the research loop.
6. **Deep-learning forecasters** — *deferred*; only with bitemporal-correct backtests, presented as one input with uncertainty, never the answer.

**Integrity guardrail:** ML assists and retrieves; it never replaces the explainable "why" with a black box. Every output is attributable (SHAP / cited precedent). Forecasts are framed "resembles / historically followed," never "will."

## 6 · Storage tiers (keep everything, each in its right form)

1. **Raw audit envelopes** — gzip-kept, rolling, gitignored. Forensic provenance.
2. **Postgres** (Timescale hypertables) — bitemporal observations + events + regimes + features. The system of record + daily-ops backbone.
3. **Neo4j** — derived graph projection (synced one-way from Postgres) for visualization + algorithms.
4. **Parquet archive** — periodic export; open, portable, decades-durable; local now → Cloudflare **R2** later.
5. **Display JSON** — the small per-desk file the site reads. Committed to git.

Volume reality: daily macro is featherweight (~50 KB/yr all current series). First heavy tenant (ETF holdings ≈ 300k rows/yr/fund) is still trivial for Postgres. "Keep everything" is the default.

## 7 · Daily operations + who-does-what

**The daily job** (one container command, `pipeline daily`):
1. Fetch every connector (Node/Python) → 2. bitemporal upsert into Postgres → 3. refresh Timescale continuous aggregates → 4. recompute derived metrics + anomaly flags (apply event treatments) → 5. sync graph projection to Neo4j → 6. export per-desk display JSON into the repo → 7. `git commit && push` → 8. Cloudflare auto-builds the static site.

**Phase 1 — local (now):** Docker Compose on the owner's PC; **Windows Task Scheduler** runs the job daily. Full control, free; runs when the PC is on.
**Phase 2 — managed (later, no rework):** same containers/schema against **Neon or Supabase** Postgres; **GitHub Actions** cron runs the job daily, PC-independent; Parquet archives to **R2**. Migration = change a connection string + move secrets to GitHub/Action secrets. The schema and SQL are identical.

**RACI:**
| Who | Owns |
|---|---|
| **Claude / Cowork (me)** | architecture; schema DDL + migrations; `docker-compose.yml`; ETL + derived-metrics + graph-sync code; ML scripts/notebooks; the daily-job code; SQL; validation tests; docs; commits; operating anything reachable from here (sandbox tests, repo writes) |
| **Codex Desktop (local exec)** | `docker compose up`; running containers against the Docker daemon; registering the Windows Task Scheduler job; any host install outside Docker; GPU/long-running work; reporting results back |
| **Owner** | decisions; API keys/secrets; review + ratify on staging; managed-DB signup at Phase 2 |

**Python version problem — solved:** the pipeline pins **3.12** inside its container (via `uv` for fast reproducible installs); the host's 3.12/3.13/3.14 mix is irrelevant. Nothing to clean up.

## 8 · Build waves (behind the unchanged JSON contract; staging-safe order)

- **W1.6 — Backend foundation.** `docker-compose.yml` (Postgres+Timescale+AGE+pgvector, Neo4j, pipeline container); bitemporal schema + hypertables; migrate the existing W1.5 JSON history cache into Postgres; Parquet export; gzip-keep raw. *Acceptance:* every current series round-trips; "as known on date X" query works; exported JSON byte-identical to today's; `docker compose up` clean on the owner's machine (Codex-run).
- **W1.7 — Event-intelligence layer.** Event/regime/link tables + constraints; minimal authoring path; seed known events + current regime; wire `exclude_from_baseline` into derived metrics; one-way Neo4j projection + a first Bloom view. *Acceptance:* a percentile with vs without exclusions differs as expected; events queryable by series/date; graph renders in Neo4j.
- **W1.8 — ML foundation.** Feature store; Python ML container; anomaly detector + HMM regime labeler; pgvector analog retrieval; XGBoost/LightGBM baseline with SHAP, evaluated bitemporally. *Acceptance:* a SHAP-attributed prediction reproduces from a past vintage with no look-ahead.
- **W1.9 — Ops hardening + Phase-2 readiness.** Daily Task Scheduler job; health checks/alerts; backup; documented one-step path to Neon/Supabase + GitHub Actions + R2. *Acceptance:* a full unattended daily run produces the committed JSON and a green health record.

These run before or after the visible W2 credit tiles — the JSON contract makes either order safe. Recommended: W1.6–1.7 first (so tiles read the richer store), W1.8–1.9 in parallel with desk work.

## 9 · Environment probe (build machine, 2026-06-13)

Docker **29.2.0** + Compose **v5.0.2** ✅ · Node **v24.13.1** ✅ · Git **2.53** ✅ · Python **3.12.4** default (+3.13/3.14 via uv) → pin 3.12 in-container · **psql** not on host (use container) · **Rust** absent (not needed). Codex Desktop present for local execution.

---
*v2 supersedes v1. Recorded under O-14…O-17. Referenced by `docs/VegaReady-R02-Credit-Feeds-Plan.md` §8.6 as the credit desk's data layer.*
