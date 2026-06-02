// P4 — Machine-readable signal export. Prerendered to /signals.json at build time.
// Single-sourced from the watch registry + scenario-state ledger + forward-catalyst register.
// Status is computed from directional thresholds; attribution is curated analyst judgment
// (not a measured coefficient); source tiers T1/T2/T3 apply.
import { metrics, summary, byScenario, signalCatalog, bySection, scenarioKeys, lastUpdated } from '../data/analysis/watchmetrics.js';
import { scenarios as scenarioStates, stateDefs } from '../data/analysis/scenariostates.js';
import { catalysts } from '../data/analysis/catalysts.js';

export async function GET() {
  const payload = {
    meta: {
      product: 'VegaReady',
      export: 'cross-section signal registry',
      registryLastUpdated: lastUpdated,
      generatedAt: new Date().toISOString(),
      counts: summary,
      scenarioKeys,
      fieldNotes: {
        value_type: 'current | current_period | baseline — distinguishes a live read from a structural baseline',
        status: 'critical | alert | watch | ok — computed by the directional comparator (above trips on a rise, below on a fall)',
        classification: 'predictive | confirming | coincident',
        stale_after: 'freshness SLA per cadence',
        confidence: 'data confidence (is the number sound) — distinct from attribution',
        attribution: 'curated, flagged analyst judgment — never a measured coefficient'
      }
    },
    metrics,
    signalCatalog,
    bySection,
    byScenario,
    scenarioStates: { stateDefs, scenarios: scenarioStates },
    catalysts
  };
  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=300'
    }
  });
}
