// Who profits — sourced beneficiaries map across all cascade sections. Single source for /profits.
export const intro = 'Vega is the thesis: volatility is not risk, it is signal. Every disruption has identifiable winners. This is who profits as the cascade runs - by channel, with the phase it pays off in and the vehicle to express it. Phases: Disruption (acute shock), Sustained (the gap persists), Return (ceasefire / reopening), Structural (durable share shift).';
const T='/transmission', E='/exposure', O='/outlook', C='/connections';
export const groups = [
  { category:'Energy & crude', tone:'red', items:[
    { name:'Russia', phase:'Disruption', conf:'high', thesis:'The clearest beneficiary, with zero Hormuz dependency. Fills oil, gas, wheat and fertilizer gaps at once; a Brent spike reverses its -23.8% oil-and-gas budget decline.', vehicle:'Urals-linked exposure; long energy complex', links:[{name:'Russia',page:E},{name:'Trapped spare',page:C}] },
    { name:'Saudi Aramco', phase:'Disruption', conf:'medium', thesis:'The only producer net-long a closure: exports keep flowing via the 7M b/d Petroline to Yanbu (port-capped ~4-4.5M b/d) while rivals are blocked, capturing the price.', vehicle:'Aramco; OSP capture (~75-80% of each incremental $/bbl)', links:[{name:'Saudi Arabia',page:E}] },
    { name:'Brazil / Petrobras', phase:'Disruption', conf:'medium', thesis:'Net crude exporter at a record 3.77M b/d; Asian demand diverts to Brazilian barrels (China = 62% of Petrobras exports, up from 33%).', vehicle:'Petrobras; BRL terms-of-trade', links:[{name:'Brazil',page:E}] },
    { name:'Cape-route VLCC owners', phase:'Disruption', conf:'medium', thesis:'Gulf-to-Asia voyages lengthen ~8-10 days and utilization hits multi-year highs; no new fleet for 2-3 years (build lead).', vehicle:'Tanker equity', links:[{name:'Shipping',page:O}] },
    { name:'US shale E&P', phase:'Sustained', conf:'medium', thesis:'A 6-12 month margin lever, not an instant offset (2022 added only +0.7-0.9M b/d, light-sweet only). Benefits from $100+ via price, not volume.', vehicle:'US E&P equity', links:[{name:'Crude oil',page:O}] },
  ]},
  { category:'LNG & gas', tone:'red', items:[
    { name:'US LNG (Cheniere, New Fortress)', phase:'Structural', conf:'high', thesis:'21.5% of global LNG, terminals at 94%. As Qatar export goes binary (no pipeline bypass), the US captures EU and Asian share and locks multi-year term contracts (2022: ~65 Mt/yr signed).', vehicle:'LNG equity; Henry Hub / TTF spread', links:[{name:'LNG binary',page:C},{name:'Energy Downstream',page:T}] },
    { name:'US ethane-cracker petrochemicals', phase:'Disruption', conf:'medium', thesis:'Margins expand as polymer prices rise while ethane stays gas-linked and cheap; Gulf ethane (~12.5% of global ethylene capacity) is removed.', vehicle:'USGC petrochemical producers', links:[{name:'Petrochemicals',page:T}] },
    { name:'Russian gas to Asia', phase:'Disruption', conf:'medium', thesis:'Power of Siberia +25% to 38.8 bcm; pricing power into Asia as ~20% of global LNG is disrupted.', vehicle:'Gazprom flows', links:[{name:'Russia',page:E}] },
  ]},
  { category:'Fertilizer', tone:'amber', items:[
    { name:'Russian fertilizer producers', phase:'Structural', conf:'high', thesis:'~18-21% of the global market and the only uncontested alternative with the Gulf disrupted - giving Moscow leverage over India, Egypt and Brazil.', vehicle:'Long fertilizer / ag-input names', links:[{name:'Fertilizer to Food',page:C}] },
    { name:'CF Industries, Nutrien, Yara, OCI', phase:'Sustained', conf:'high', thesis:'Ex-Gulf nitrogen producers into a structural urea floor of +13% to +68% (NDSU scenarios) while Russia and China are simultaneously constrained.', vehicle:'Fertilizer equity; CME urea futures', links:[{name:'Fertilizer / Ammonia',page:O}] },
    { name:'Egyptian urea', phase:'Disruption', conf:'medium', thesis:'Emerging swing supplier at FOB ~$800/MT, opening new Africa-to-Asia trade flows.', vehicle:'MENA producers', links:[{name:'Egypt',page:E}] },
  ]},
  { category:'Refined products', tone:'amber', items:[
    { name:'Indian refiners (Reliance, IOC)', phase:'Disruption', conf:'high', thesis:'Reroute diesel and jet from West-of-Suez to Asia/Europe (+300-500k b/d) as Gulf middle distillates are blocked.', vehicle:'Reliance; Indian refiner equity', links:[{name:'Refined Products',page:O}] },
    { name:'US refiners (Valero, Marathon)', phase:'Disruption', conf:'medium', thesis:'USGC crack spreads blow out as the Gulf (60% of Europe jet) is removed - NW Europe jet crack hit $100/bbl, diesel $70.', vehicle:'US refiner equity; crack spreads', links:[{name:'Refined Products',page:O}] },
    { name:'Dangote (Nigeria)', phase:'Structural', conf:'medium', thesis:'650k b/d nameplate; diesel into Africa and Europe emerging as a structural new supply source.', vehicle:'Pre-IPO / African energy', links:[{name:'Aviation & Transport',page:T}] },
  ]},
  { category:'Shipping & freight', tone:'cyan', items:[
    { name:'Korean shipbuilders (HD Hyundai, Hanwha, Samsung Heavy)', phase:'Structural', conf:'medium', thesis:'Dominant LNG-carrier orderbook ($71.3B, >66% global share). A Gulf/LNG crisis accelerates LNG-carrier and naval demand - Korea wins while its energy consumers lose.', vehicle:'Shipbuilder equity', links:[{name:'South Korea',page:E},{name:'Shipping & War-Risk',page:C}] },
    { name:'Liner equity (Maersk, Hapag-Lloyd)', phase:'Disruption', conf:'medium', thesis:'Rate spikes on Cape rerouting + blanked sailings; Asia-Europe effective capacity cut ~15-18%.', vehicle:'Liner / tanker stocks', links:[{name:'Shipping',page:O}] },
  ]},
  { category:'Financial & insurance', tone:'violet', items:[
    { name:'Lloyd\'s war-risk syndicates', phase:'Sustained', conf:'medium', thesis:'Marine war-risk repriced from 0.05% to ~1.0% of hull value; the Red Sea precedent stayed elevated for >12 months.', vehicle:'Specialty / war-risk insurers', links:[{name:'Financial Markets',page:T}] },
    { name:'US dollar & Treasuries', phase:'Disruption', conf:'high', thesis:'Flight-to-safety into the dollar and Treasuries lowers US funding costs even as oil rises - the reserve-currency hedge.', vehicle:'Long USD / front-end Treasuries', links:[{name:'United States',page:E}] },
  ]},
  { category:'Digital infrastructure', tone:'green', items:[
    { name:'Cable suppliers (Nokia/ASN, TE SubCom)', phase:'Structural', conf:'medium', thesis:'Repair backlog plus a wave of new non-Middle-East routes; the binding constraint is a global fleet of only ~63 repair ships.', vehicle:'Network-infrastructure equity', links:[{name:'Internet Bandwidth',page:O}] },
    { name:'Project Waterworth (Meta / Google)', phase:'Structural', conf:'medium', thesis:'A cable that bypasses the Middle East entirely (US-India-South Africa-Brazil), accelerated by the 2026 disruption.', vehicle:'Hyperscaler infrastructure exposure', links:[{name:'Digital Chokepoint',page:C}] },
    { name:'Satellite (Eutelsat OneWeb)', phase:'Disruption', conf:'low', thesis:'Backup demand on cable disruption - but LEO carries <1% of submarine-cable capacity, so the upside is bounded.', vehicle:'Satellite operators', links:[{name:'Internet Bandwidth',page:O}] },
  ]},
  { category:'Defense, cyber & agriculture', tone:'cyan', items:[
    { name:'Defense primes + GCC localization (Lockheed, RTX, MBDA, EDGE, SAMI)', phase:'Structural', conf:'high', thesis:'GCC emergency procurement on top of a record cycle (global spend $2.718T, +9.4%); US-Saudi $142B deal, F-35 approvals; budgets are structurally sticky.', vehicle:'Defense primes; GCC localization', links:[{name:'Defense & Security',page:T}] },
    { name:'Cybersecurity vendors', phase:'Sustained', conf:'medium', thesis:'Infosec spend $213B (2025) toward ~$240B (2026); cable/critical-infrastructure events skew it higher.', vehicle:'Cybersecurity equity', links:[{name:'Technology & Digital',page:T}] },
    { name:'Brazilian agriculture', phase:'Disruption', conf:'medium', thesis:'#1 soy/sugar exporter fills global food gaps as Gulf/Black Sea channels disrupt - the marginal global gap-filler.', vehicle:'Ag exporters; soft commodities', links:[{name:'Brazil',page:E},{name:'Agriculture & Food',page:T}] },
  ]},
];
