// GENERATED from IranWarTracker/data/cascades/catalysts.json by scripts/build-cascades.cjs.
// DO NOT EDIT BY HAND. Edit the canonical JSON and re-run: node scripts/build-cascades.cjs

export const catalysts = [
  {
    "id": "esf-gulf-swap",
    "item": "ESF / Gulf dollar swap lines (~$44bn)",
    "status": "discussed",
    "section": "§2",
    "page": "/markets/credit",
    "asOf": "2026-05 (Bessent Senate testimony)",
    "whatWouldConfirm": "An executed swap-line announcement (Treasury/Fed), not testimony",
    "ifConfirmed": "Major Gulf dollar-liquidity backstop → GCC credit relief, USD funding ease, lower petrodollar-recycling stress",
    "driverClass": "monetary-policy"
  },
  {
    "id": "pif-reallocation",
    "item": "PIF international allocation cut 30%→20%",
    "status": "reported-unconfirmed",
    "section": "§2",
    "page": "/markets/credit",
    "asOf": "2026-04 (CFR citing Global SWF; no PIF press release)",
    "whatWouldConfirm": "PIF official filing/disclosure",
    "ifConfirmed": "~$100bn+ reallocation out of US assets → UST long-end + US-equity flow pressure",
    "driverClass": "geopolitical-conflict"
  },
  {
    "id": "iran-frozen-release",
    "item": "~$6bn Iran frozen-asset release",
    "status": "negotiating",
    "section": "§3/§10",
    "page": "/markets/crypto",
    "asOf": "2026-05 (under discussion)",
    "whatWouldConfirm": "Official release / sanctions-relief order",
    "ifConfirmed": "Sanctions de-escalation; reduced USDT-evasion demand could CONCENTRATE enforcement on residual flows",
    "driverClass": "geopolitical-conflict"
  },
  {
    "id": "saudi-123",
    "item": "Saudi-123 civil-nuclear / enrichment agreement",
    "status": "negotiating",
    "section": "§6",
    "page": "/outlook/nuclear",
    "asOf": "2026 (leaks, no signed text)",
    "whatWouldConfirm": "Signed 123-agreement text / IAEA milestone",
    "ifConfirmed": "Proliferation-cascade trigger → gold/GVZ/OVX jump, regional risk premium",
    "driverClass": "geopolitical-conflict"
  },
  {
    "id": "cme-247-crypto",
    "item": "CME 24/7 BTC futures & options",
    "status": "announced",
    "section": "§10",
    "page": "/markets/crypto",
    "asOf": "2026-05-29 (pending official CME notice)",
    "whatWouldConfirm": "Official CME launch notice",
    "ifConfirmed": "Weekend crypto-equity basis convergence; changes the perp/CME basis-trade structure and vol regime",
    "driverClass": "market-endogenous"
  },
  {
    "id": "project-waterworth",
    "item": "Google Project Waterworth subsea cable (bypasses Middle East)",
    "status": "in-progress",
    "section": "§7",
    "page": "/structural/digital",
    "asOf": "2026 (announced; years from completion)",
    "whatWouldConfirm": "Route/landing-station milestones",
    "ifConfirmed": "Structural Middle-East cable bypass → long-run digital-resilience reroute, lowers cable-severance tail",
    "driverClass": "technology-shock"
  }
];

export const statusValues = [
  "discussed",
  "reported-unconfirmed",
  "announced",
  "negotiating",
  "in-progress"
];

export const purpose = "Forward-catalyst register. These are DISCUSSED / ANNOUNCED but NOT-COMMITTED events — they are tracked as upcoming triggers, NOT scored as substantiated facts or anchored in cards. Each carries what would confirm it and what it would move if confirmed. This is the seed of the catalyst calendar.";
