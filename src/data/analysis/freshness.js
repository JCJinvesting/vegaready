// Live scenario-status snapshot. Display layer derived from IranWarTracker/data/cascades/scenario-status.json (as-of May 29 2026).
export const freshness = {
  asOf: 'May 29, 2026',
  scenarios: [
    { label: 'Hormuz closure',   status: 'REALIZED (ongoing)',       tone: 'red'   },
    { label: 'Oil-infra strike', status: 'PARTIALLY REALIZED',       tone: 'amber' },
    { label: 'Cable severance',  status: 'REPAIR-RISK REALIZED',     tone: 'amber' },
    { label: 'Ceasefire',        status: 'IN EFFECT (not economic)', tone: 'green' },
  ],
  anchors: [
    { k: 'Brent',     v: '~$92/bbl',      note: 'Down from the $138 Apr-7 peak; risk premium unwound even though the strait stays shut.' },
    { k: 'Hormuz',    v: '~11 vessels/d', note: '>90% below pre-conflict norm; Q1 flow 14.6M b/d (-29.7% YoY, EIA).' },
    { k: 'JKM / TTF', v: '~$18 / $16.5',  note: 'LNG ($/MMBtu) up further; Qatar export is binary with no pipeline bypass.' },
    { k: 'Urea',      v: '>$850/MT',      note: '+80% since Feb (World Bank); food-price lag ~6-9 months.' },
    { k: 'Freight',   v: '~$2,800/40ft',  note: 'Drewry WCI; near-normalized vs the 2024 +141% shock.' },
  ],
};
