// Cross-section connection graph: the cascade as a network linking sectors <-> countries <-> flows <-> beneficiaries.
export const intro = 'The cascade is a network, not three separate lists. Each thread below is one shock told across every layer: the sectors it moves through, the countries most exposed, the commodity flow that carries it, and who profits. Follow a thread to see the same disruption from all three analysis pages.';
const S='/transmission', R='/exposure', D='/outlook';
export const themes = [
  {
    id:'fertilizer-to-food', name:'Fertilizer to Food', tone:'amber',
    thesis:'Gas to ammonia to urea to crop yields to food prices, with a 6-9 month lag - the cleanest gas-to-food transmission on record. The Gulf supplies ~36% of urea and ~29% of ammonia exports (IFPRI), and Russia and China are simultaneously constrained, so no swing supplier exists. This is the longest tail in the cascade.',
    sectors:[{name:'Fertilizer & Ammonia',page:S},{name:'Agriculture & Food',page:S}],
    countries:[{name:'India',page:R},{name:'Pakistan',page:R},{name:'Egypt',page:R},{name:'Brazil',page:R},{name:'Russia',page:R}],
    flows:[{name:'Fertilizer / Ammonia',page:D},{name:'LNG',page:D}],
    profits:['Russian fertilizer producers','CF Industries / Nutrien / Yara','Egyptian urea as swing supplier'],
  },
  {
    id:'remittance-corridor', name:'The Remittance Corridor', tone:'violet',
    thesis:'Gulf labor demand funds South-Asian remittances (India $129B, Pakistan $33B, Philippines $40B). A Gulf slowdown collapses the FX lifeline at exactly the moment energy-import bills spike. Pakistan is the extreme case: its energy supplier and its remittance source are the same region - a self-reinforcing external-balance squeeze.',
    sectors:[{name:'Tourism & Services',page:S},{name:'Aviation & Transport',page:S}],
    countries:[{name:'UAE',page:R},{name:'India',page:R},{name:'Pakistan',page:R},{name:'Egypt',page:R}],
    flows:[{name:'Shipping Capacity',page:D}],
    profits:['Substitute tourism / transit hubs (Istanbul)','Alternative remittance rails'],
  },
  {
    id:'lng-binary', name:'The LNG Binary', tone:'red',
    thesis:'Qatar is 18.8% of global LNG and ~93% of it transits Hormuz - and LNG carriers have no pipeline bypass. Export is binary: zero or full. EU, Japan and Korea are price-takers (JKM +51%, TTF +35%); the US is the structural winner as its LNG captures EU and Asian share.',
    sectors:[{name:'Energy Downstream',page:S},{name:'Manufacturing',page:S},{name:'Petrochemicals',page:S}],
    countries:[{name:'European Union',page:R},{name:'Japan',page:R},{name:'South Korea',page:R},{name:'United States',page:R},{name:'Russia',page:R}],
    flows:[{name:'LNG',page:D}],
    profits:['US LNG (Cheniere, New Fortress)','Russian gas to Asia','US ethane-cracker petrochemicals'],
  },
  {
    id:'hormuz-trapped-spare', name:'Trapped Spare Capacity', tone:'cyan',
    thesis:'The defining 2026 difference vs 1990: the Gulf own swing and spare capacity is itself Hormuz-trapped, so there is no clean producer offset. Saudi Petroline (7M b/d to Yanbu, but only ~4-4.5M loadable) and UAE Fujairah (1.8M b/d) bypass only partially. US shale is slow (+0.7-0.9M b/d over 6-9 months) and light-sweet only.',
    sectors:[{name:'Energy Downstream',page:S},{name:'Construction & Materials',page:S}],
    countries:[{name:'Saudi Arabia',page:R},{name:'UAE',page:R},{name:'United States',page:R}],
    flows:[{name:'Crude Oil',page:D},{name:'Refined Products',page:D}],
    profits:['Cape-route VLCC owners','US shale E&P (slow)','Non-Gulf crude (Brazil, West Africa)'],
  },
  {
    id:'digital-chokepoint', name:'The Digital Chokepoint', tone:'green',
    thesis:'Near-orthogonal to the physical commodities - the blast radius is data and finance, not energy. Gulf cable damage is mostly domestic (the Asia-Europe backbone runs via the Red Sea, ~900mi away); the binding constraint is repair fragility, with only ~1 cable-repair vessel inside the Gulf and ships unable to enter a war zone.',
    sectors:[{name:'Technology & Digital',page:S},{name:'Financial Markets',page:S}],
    countries:[{name:'UAE',page:R},{name:'Saudi Arabia',page:R},{name:'India',page:R}],
    flows:[{name:'Internet Bandwidth',page:D}],
    profits:['Satellite (Eutelsat OneWeb)','Cable suppliers (Nokia/ASN, TE SubCom)','Project Waterworth (bypasses the Middle East)'],
  },
  {
    id:'shipping-insurance', name:'Shipping & War-Risk', tone:'amber',
    thesis:'War-risk premiums plus Cape-of-Good-Hope rerouting cut effective fleet capacity ~15-18% on Asia-Europe lanes. Egypt loses Suez revenue (already -61% in 2024); Korea wins shipbuilding orders (dominant LNG-carrier orderbook, $71.3B). The relief valve is blanked sailings and rate spikes, not new vessels (2-3yr build lead).',
    sectors:[{name:'Financial Markets',page:S},{name:'Pharmaceuticals',page:S},{name:'Aviation & Transport',page:S}],
    countries:[{name:'Egypt',page:R},{name:'South Korea',page:R}],
    flows:[{name:'Shipping Capacity',page:D},{name:'Refined Products',page:D}],
    profits:['Korean shipbuilders','Lloyds war-risk syndicates','Cape-hub bunker suppliers & ports'],
  },
];
