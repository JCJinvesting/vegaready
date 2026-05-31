// GENERATED from IranWarTracker/data/cascades/sectors.json by scripts/build-cascades.cjs.
// DO NOT EDIT BY HAND. Edit the canonical JSON and re-run: node scripts/build-cascades.cjs

export const scenarios = [
  {
    "key": "hormuz",
    "label": "Hormuz closure",
    "color": "#ef4444"
  },
  {
    "key": "strike",
    "label": "Oil infrastructure strike",
    "color": "#f59e0b"
  },
  {
    "key": "cable",
    "label": "Cable severance",
    "color": "#6366f1"
  },
  {
    "key": "ceasefire",
    "label": "Ceasefire",
    "color": "#10b981"
  }
];

export const sectors = [
  {
    "id": "energy-downstream",
    "title": "Energy Downstream",
    "icon": "01",
    "summary": "Refining margins, electricity generation, and fuel substitution sit one step downstream of crude and LNG. With ~20% of global LNG and ~20M b/d of crude (~30% of seaborne crude, ~20% of world oil) transiting Hormuz, a chokepoint shock flows to pump prices in 1-3 weeks and to gas-indexed power within days. Impact is asymmetric: prices rocket up on shock, feather down on ceasefire.",
    "trigger": "Crude oil (refinery feedstock) and natural gas/LNG (marginal price-setter for electricity in Europe and much of Asia). A Hormuz or oil-infrastructure shock raises crude input cost and, because ~20% of global LNG transits Hormuz (Qatar 18.8% of world LNG), spikes the gas that sets marginal power prices.",
    "mechanism": "+$10/bbl crude adds ~$0.24-0.25/gal to retail gasoline ('25-cent rule', RSM/Britannica). Refining economics tracked via 3:2:1 crack spread (CME). Wholesale fuel reprices in hours-days; retail pump lags crude 1-3 weeks with documented asymmetric 'rockets-and-feathers' pass-through (Dallas Fed, 2000). In gas-indexed power markets, gas-fired plants set the clearing price, so a gas spike flows to electricity within days via day-ahead markets (IEEFA; European Commission).",
    "hormuz": "Brent $120-130 near-term, tail >$150 if shut into mid-May (JPMorgan); Goldman models Brent ~$120 Q3 / ~$115 Q4 on a further month of closure. +$50/bbl implies ~+$1.20/gal gasoline. EU power could re-approach 2022-style >€300/MWh peaks on Qatari LNG loss.",
    "strike": "Abqaiq template: 5.7M b/d outage drove Brent +19% intraday, settled ~+10-15%. Partial strikes ~+$8-20/bbl; magnitude scales with volume and duration.",
    "cable": "Negligible direct energy-price effect; minor trading/telemetry friction. <1% price impact (estimate).",
    "ceasefire": "Risk premium unwinds ~$10/bbl (~10-13%). June 2025 precedent: Brent $79 to ~$68 (-14%) post-ceasefire (EIA).",
    "fills": "OPEC+ spare capacity ~3-4M b/d (mostly Saudi/UAE, but physically trapped behind Hormuz under closure). US SPR (~350M+ bbl) and IEA coordinated releases can add ~1-2M b/d for months. Refiners switch crude slates in days-weeks. Power: coal redispatch fastest (hours-days where plants exist); nuclear already runs flat-out; renewables add capacity over months-years, not as a shock buffer. Non-Gulf crude trades at a widening premium plus $2-10/bbl-equivalent freight/insurance surcharges.",
    "closes": "On de-escalation the risk premium evaporates within days. If OPEC+ over-released, oversupply pushes Brent back toward the $60s (Goldman reversion target ~$66). US shale and SPR-refill demand cushion the downside. Permanent shift: accelerated Hormuz-bypass pipeline buildout (Saudi East-West ~5M b/d; UAE Fujairah ~1.5M b/d) durably reduces chokepoint exposure.",
    "precedent": "1990 Gulf War: Brent ~$17 to ~$36 (>100%) in weeks, then collapsed as supply fears eased. 2008: WTI peaked $147.27 (Jul), crashed to ~$30s by Dec. 2019 Abqaiq: Brent +19% intraday, fully retraced within ~3 weeks. 2022 EU power averaged €230/MWh (+121% vs 2021); TTF gas peaked >€300-345/MWh (vs €27 a year earlier); coal generation rose +6% (+24 TWh) via gas-to-coal switching (European Commission; Ember).",
    "timeline": "Crude/wholesale fuel: hours-days. Retail pump: 1-3 weeks (asymmetric). Gas-indexed electricity: days. Coal substitution: days-weeks. SPR/OPEC meaningful ramp: weeks-months. Renewable/nuclear acceleration: months-years.",
    "confidence": "high",
    "sources": [
      "https://www.eia.gov/todayinenergy/detail.php?id=65504",
      "https://www.eia.gov/todayinenergy/detail.php?id=41413",
      "https://www.eia.gov/todayinenergy/detail.php?id=65884",
      "https://oilprice.com/Latest-Energy-News/World-News/Goldman-Another-Month-of-Hormuz-Closure-Means-Over-100-Brent-Throughout-2026.html",
      "https://www.dallasfed.org/~/media/documents/research/efr/2000/efr0003b.pdf",
      "https://ieefa.org/resources/europes-electricity-prices-are-still-tied-gas-making-geopolitics-structural-vulnerability"
    ],
    "deepDive": null
  },
  {
    "id": "petrochemicals",
    "title": "Petrochemicals",
    "icon": "02",
    "summary": "The ~$750-800B global petrochemical chain runs on naphtha (crude-linked) and ethane (gas-linked). ~12.5% of global ethylene capacity sits in the Gulf conflict zone. A Hormuz closure removes cheap Gulf ethane and naphtha, spiking polymer prices 20-40% while US shale-ethane crackers see margins expand — a rare winner.",
    "trigger": "Two feedstocks: naphtha (crude-linked, sets Asian/European cracker economics) and ethane (gas-linked, Gulf + US shale advantage). ~12.5% of global ethylene capacity (~29 of ~232 Mt) sits directly in the Persian Gulf zone. A Hormuz closure halts Gulf chemical/plastic exports and removes cheap Gulf ethane.",
    "mechanism": "Crude spike pulls naphtha up near-lockstep, so naphtha-based crackers (Asia/Europe) see feedstock costs jump and pass through to ethylene/propylene/polymers. Ethane stays near gas prices, so ethane crackers (US Gulf Coast, Gulf) see margins EXPAND as polymer prices rise while ethane stays flat. Gulf ethane is structurally cheap: Saudi ~$1.75/MMBtu (post-2024 Saudi price reform, up from $0.50-0.75) vs ~$2-3/MMBtu US (Henry Hub) and higher/volatile in Europe.",
    "hormuz": "Removal of ~12.5% of global ethylene capacity + Gulf naphtha/LPG exports drives ethylene/polyethylene spot +20-40%; severe Asian plastics shortage. C&EN framed it as 'debilitating petrochemicals for the rest of 2026.' US ethane crackers gain margin.",
    "strike": "Naphtha tracks crude ~+15%; naphtha-cracker margins squeezed; polymers +10-20%; ethane crackers relatively insulated.",
    "cable": "Negligible on feedstock/price; minor logistics/trading friction. <2% (estimate).",
    "ceasefire": "Naphtha/polymers retrace with crude ~-10-15%; Gulf export normalization re-floods the market.",
    "fills": "US Gulf Coast ethane crackers are the primary swing supplier — already running, margins expanding, but near-term incremental ethylene is capacity-limited and new crackers take 3-5 years to build. Existing US/European naphtha crackers can lift utilization within weeks at higher cost. Asian buyers pay 15-35% premiums for non-Gulf polyethylene during disruption. China's coal-to-olefins (CTO/MTO) is a high-cost domestic backstop.",
    "closes": "On reopening, trapped Gulf product floods back, polymer prices fall fast, and high-cost naphtha/CTO margins collapse. Structural winner: US shale-ethane crackers gain durable share if buyers diversify away from Hormuz dependence; Gulf accelerates bypass routing and downstream localization.",
    "precedent": "2008: naphtha and ethylene surged with $147 crude, then ethylene contract prices fell 50%+ in H2 2008 as crude crashed — illustrating tight naphtha-crude-polymer linkage. 2021 Winter Storm Uri froze ~75%+ of US ethylene capacity, sending US spot ethylene/polyethylene up 50-100%+ globally — showing how concentrated cracker outages spike world polymer prices.",
    "timeline": "Naphtha/ethylene spot: days. Polymer contract pass-through: weeks. Downstream plastics/finished-goods cost: weeks-months. New cracker capacity to permanently fill the gap: 3-5 years.",
    "confidence": "medium",
    "sources": [
      "https://www.chemistryworld.com/news/iran-conflict-cuts-off-gulf-oil-and-chemicals-trade/4023065.article",
      "https://cen.acs.org/business/Iran-war-debilitate-petrochemicals-rest/104/web/2026/04",
      "https://eastdaley.com/daley-note/ethane-crackers-gain-as-hormuz-disruption-lifts-global-feedstock-costs",
      "https://www.chemicalonline.com/doc/impact-of-arabian-gulf-ethane-on-the-global-p-0001",
      "https://www.iom3.org/resource/strait-of-hormuz-closure-affects-chemicals-and-plastics-exports.html"
    ],
    "deepDive": null
  },
  {
    "id": "fertilizer",
    "title": "Fertilizer & Ammonia",
    "icon": "03",
    "summary": "The cleanest gas-to-food transmission path on record. ~70-72% of global ammonia is gas-based, and the Gulf supplies 36% of world urea and 29% of ammonia exports (IFPRI). A Hormuz disruption can drive urea +30-70%+, with the food-price hit landing 6-18 months later — the most tradeable lag in the cascade. 2026 data is already in-market: urea >$850/MT in April, +80% since February.",
    "trigger": "~70-72% of global ammonia is made from natural gas (gas is both feedstock and energy); ~80% outside China. The Gulf is a dominant exporter: 36% of global urea exports and 29% of ammonia exports, 2023-25 (IFPRI), with Iran + Qatar largest in urea and Saudi the ammonia leader. Iran alone ~5-7% of global urea exports.",
    "mechanism": "Gas price spike makes ammonia production uneconomic, producers idle plants, ammonia tightens, urea/DAP/MAP/UAN rise, crop input costs rise, and with a lag food prices and planted-acre decisions shift. 2022 EU proof: ~70% of European ammonia capacity was reduced or shut by Oct 2022; 10+ EU plants cut in July 2022 alone.",
    "hormuz": "Loss of ~36% of global urea exports — urea spikes hardest. 2026 analogue (World Bank): 'Fertilizer prices surge as Strait of Hormuz disruptions tighten supplies'; urea >$850/MT in April, +80% since February, highest since 2022. Sustained closure points to urea +30-70%+ depending on duration; ammonia tight globally.",
    "strike": "Indirect via higher gas/LNG and risk premium; observed Feb-Apr 2026 moves: urea +47-80%, DAP ~+35%. Qatar suspended urea/ammonia/sulfur output after facility damage.",
    "cable": "Negligible on physical fertilizer flows; minor trade-admin friction. <2% (estimate).",
    "ceasefire": "Gulf exports resume; prices retrace over weeks-months as plants restart (restart is not instant). Food-price relief lags fertilizer relief by a full growing season.",
    "fills": "Alternative gas-feed producers: US Gulf Coast (cheap shale gas, CF Industries), Trinidad, Russia (16% of urea exports but sanctions-constrained), North Africa (Egypt/Algeria). Idled European plants can restart in days-weeks IF gas is affordable, but they are high-cost. Green (electrolytic) ammonia is years away at scale and 2-4x costlier. Buyers pay 20-50%+ for non-Gulf urea/ammonia during disruption.",
    "closes": "On reopening, Gulf urea/ammonia returns and prices normalize within months; high-cost European and green-ammonia projects lose competitiveness. Importers (India, Brazil) diversify sourcing and build buffer stocks. Food prices are sticky — a missed fertilizer season permanently lowers that year's harvest; recovery is one full crop cycle, not instant.",
    "precedent": "2022 Russia-Ukraine gas spike (definitive precedent): TTF gas >€300/MWh. Jan-Apr 2022: DAP +36%, urea peaked ~$925-1,000/tonne (vs ~$500 pre-crisis), MOP +53%. Russia = ~16% of global urea, ~12% of DAP/MAP exports. 2021-22 peak: urea and ammonia roughly tripled off 2020 lows, feeding directly into 2022-23 global food inflation (World Bank; USDA ERS).",
    "timeline": "Ammonia/urea spot: days-weeks. Plant idling decisions: days. Farm input cost / planting impact: one growing season (months). Food-price feedthrough: 6-18 months. Restart after de-escalation: weeks-months. Green-ammonia substitution: 3-10 years.",
    "confidence": "high",
    "sources": [
      "https://www.ifpri.org/blog/the-iran-wars-impacts-on-global-fertilizer-markets-and-food-production/",
      "https://blogs.worldbank.org/en/opendata/fertilizer-prices-surge-as-strait-of-hormuz-disruptions-tighten-",
      "https://blogs.worldbank.org/en/opendata/fertilizer-prices-expected-remain-higher-longer",
      "https://www.ers.usda.gov/amber-waves/2023/september/global-fertilizer-market-challenged-by-russia-s-invasion-of-ukraine",
      "https://www.stlouisfed.org/publications/regional-economist/2022/oct/russia-ukraine-war-record-fertilizer-prices"
    ],
    "deepDive": {
      "url": "/markets/food-agriculture",
      "label": "Food & Agriculture — deep dive"
    }
  },
  {
    "id": "agriculture",
    "title": "Agriculture & Food Prices",
    "icon": "04",
    "summary": "Downstream of fertilizer, and the place the cascade ultimately bites households. Synthetic nitrogen underpins ~48% of global food production. The fertilizer-to-food lag is ~6-9 months (one growing season) and persists past any ceasefire because the under-fertilized crop is already locked in. Maize, wheat and rice are most exposed; food-import-dependent states (Egypt, Pakistan, Bangladesh) are most vulnerable.",
    "trigger": "Gulf natural gas and ammonia/urea export disruption (see fertilizer-ammonia). Natural gas is ~70-80% of nitrogen-fertilizer cash cost. Synthetic nitrogen (Haber-Bosch) underpins ~48% of global food production; without it global output meets only ~50% of demand (Our World in Data; Smil). Most fertilizer-dependent crops: maize, wheat, rice.",
    "mechanism": "Step 1: Hormuz/Qatar gas disruption curtails Gulf ammonia/urea; gas-short importers (India, Bangladesh, Pakistan) shut N-fertilizer output. Step 2: urea FOB spikes (>$850/MT April 2026, +80% since Feb). Step 3: shipping disruption strands physical tonnage on top of the production shortfall (double hit). Step 4: farmers cut application rates, switch to low-input crops, reduce acreage. Step 5: FAO warns reduced fertilizer lowers wheat/maize/rice output within 6-9 months (one growing season).",
    "hormuz": "Worst. Gulf urea/ammonia exports halted + LNG choked; urea could exceed the 2022 record (~$925/MT). Pro Farmer flagged the Hormuz fertilizer shock as potentially 'worse than the 2022 spike.' Food-price transmission lags ~6-9 months, pressuring the FAO Food Price Index into late 2026/2027 harvest.",
    "strike": "Severe but narrower. Direct hits on Qatari/Saudi ammonia-urea-sulfur facilities (Qatar suspended output after damage). Observed Feb-Apr 2026: urea +47-80%, DAP ~+35%.",
    "cable": "Low direct effect; degrades commodity-trading/logistics coordination, ag-fintech and precision-ag data feeds in MENA/South Asia; noisier price discovery. No direct tonnage effect.",
    "ceasefire": "Urea/DAP mean-revert toward pre-crisis ($200-400/MT urea). But food-price relief lags fertilizer relief by a full season — 2026-27 crop already under-fertilized, so food prices stay elevated 6-12 months after fertilizer normalizes.",
    "fills": "Substitute N exporters: Russia (16% of urea exports), Egypt, Algeria, Trinidad, US Gulf Coast, Indonesia. Potash gap (Russia+Belarus = 40% of global potash) is harder to fill. Ramp: months — plants can't spin up in days; idled-capacity restart + Cape rerouting add ~2-3 weeks transit. Cost premium +30-80% on N products (observed 2026); 2022 analog CRU fertilizer index hit record 390.",
    "closes": "On de-escalation, Gulf ammonia/urea restarts and stranded cargoes hit the market together — oversupply risk and possible downward overshoot (2022-23 analog: prices fell sharply from the $925/MT peak). Importers diversify sourcing; strategic fertilizer reserves and friend-shoring accelerate. Food prices are stickiest: a missed fertilizer season permanently lowers that year's harvest.",
    "precedent": "2007-08 food crisis: FAO Food Price Index +63% (Jan-2007 to Jun-2008, peak 213.5); rice +166% (some routes +300%, $300 to $1,200/MT in 4 months); 30+ countries imposed export bans. 2022 Ukraine: urea peaked $925/MT, anhydrous ammonia >$1,635/MT retail, DAP >$1,000/ton; Russia+Ukraine ~30% of global wheat exports.",
    "timeline": "Hours-days: fertilizer futures/spot spike on headlines. Weeks: shipping reroutes (+2-3 wks via Cape), curtailments confirmed. Months (3-6): farmers finalize reduced application/acreage. 6-9 months: food-price transmission to the FAO index. Years: strategic reserves, green-ammonia capex, elevated food-price floor if conflict is structural.",
    "confidence": "high",
    "sources": [
      "https://carnegieendowment.org/emissary/2026/03/fertilizer-iran-hormuz-food-crisis",
      "https://www.cnbc.com/2026/03/25/fertilizer-price-iran-war-food-security-inflation-urea-potash-nitrogen-farmers.html",
      "https://ourworldindata.org/how-many-people-does-synthetic-fertilizer-feed",
      "https://en.wikipedia.org/wiki/2007%E2%80%932008_world_food_price_crisis",
      "https://www.profarmer.com/news/agriculture-news/why-strait-hormuz-fertilizer-shock-could-hurt-worse-2022-spike"
    ],
    "deepDive": {
      "url": "/markets/food-agriculture",
      "label": "Food & Agriculture — deep dive"
    }
  },
  {
    "id": "aviation",
    "title": "Aviation & Transportation",
    "icon": "05",
    "summary": "Jet fuel was 31% of airline operating costs in 2024 (~$285B bill, IATA). A $40-60/bbl crude spike pushes fuel toward 40%+ of opex, a level that triggered 25 airline failures in H1 2008. Carriers cut thin long-haul routes first; bunker-fuel spikes feed container-rate surcharges (BAF) into last-mile delivery. Fares lag fuel down — relief is asymmetric.",
    "trigger": "Crude spike of +$40-60/bbl from Gulf supply fear/closure. Jet fuel ~31% of airline operating costs in 2024 (IATA); reached ~35% in 2008 and >40% for low-labor-cost carriers. Bunker fuel (VLSFO) drives container-shipping and last-mile freight cost.",
    "mechanism": "Crude +$40-60/bbl widens the jet-fuel crack; fuel share of opex jumps from ~31% toward 40-45% (2008 analog). Airlines can't fully pass through — in 2008 fares stayed roughly flat while fuel surged, so margins collapsed (Eno; UMD NEXTOR; demand income-elasticity ~1.4). Airlines drop marginal thin routes first. Bunker channel: VLSFO spike raises BAF surcharges, container rates, and last-mile delivery cost.",
    "hormuz": "Worst. Crude well beyond +$40-60 (analysts model $120-150+). Jet crack widens; fuel share 40%+ of opex; rapid intercontinental thin-route cuts; air-freight rates spike. Tourism to/through MENA collapses.",
    "strike": "Severe. +$40-60/bbl plausible; jet-fuel/airline-margin compression; selective route cuts; air-cargo surcharges up. Airfares observed +up to 10% (Khaleej Times, 2026).",
    "cable": "Indirect for aviation (booking systems, ATC data, airline IT in MENA degraded) but major for 'transportation' broadly via digital-logistics disruption.",
    "ceasefire": "Crude/jet-fuel mean-revert (2008: crude fell >70% from $147 to ~$40 within months). Capacity discipline and surcharges are sticky — fares lag fuel down.",
    "fills": "Spare crude: OPEC+ (Saudi/UAE) — but in a Gulf conflict that spare is the at-risk supply; US SPR releases (logistics-constrained). Non-Gulf jet-fuel (US Gulf Coast, Asia) reroutes in weeks. Airlines fill route gaps with immediate fuel surcharges plus hedging (over-hedged carriers booked losses when crude later collapsed in 2008). Premium: surcharges add double-digit % to fares/freight; air-cargo rates can double on fuel + capacity withdrawal.",
    "closes": "On ceasefire, crude collapses fast (2008: -70% in months); over-hedged airlines book mark-to-market losses; cut capacity returns slowly (lease/crew lead times) so fare stickiness becomes the margin-recovery window. Bunker/BAF surcharges lag down a quarter. Permanent: fleet-renewal toward fuel-efficient aircraft accelerates; consolidation (2008 fuel+GFC compressed the US industry to ~4 majors).",
    "precedent": "2008: crude $90 (Jan) to $147.27 (11 Jul); fuel ~35% of opex (>40% for some); 25 airlines ceased ops in H1 2008 (Aloha, ATA, Skybus, EOS); triggered the US merger wave to ~4 carriers. Bunker analog (2022 Ukraine): global avg VLSFO >$1,000/MT (30 May 2022), all-time high $1,125.50/MT (14 Jun); Q2-2022 Asia-USWC BAF avg $648/FEU (+49% YoY).",
    "timeline": "Hours: jet-fuel/crude futures spike, surcharges announced. Days-weeks: capacity/route reviews, thin routes suspended, air-cargo rates jump. Weeks-months: airline failures/Chapter 11 among weak balance sheets; regional tourism bookings collapse. Months: container BAF feeds through to last-mile prices. 1-2 years: consolidation, fleet renewal, hedging-loss reckoning if crude reverses.",
    "confidence": "high",
    "sources": [
      "https://www.iata.org/en/iata-repository/publications/economic-reports/global-outlook-for-air-transport-december-2024/",
      "https://thedocs.worldbank.org/en/doc/60591434652912502-0190022009/original/AirTransportTheOilPriceSpikeof2008.pdf",
      "https://enotrans.org/eno-resources/jet-fuel-prices-dropped-significantly-havent-ticket-prices/",
      "https://www.freightwaves.com/news/russian-invasion-propels-price-of-ship-fuel-to-historic-high",
      "https://www.khaleejtimes.com/business/aviation/airfares-set-to-rise-up-to-10-due-to-higher-jet-fuel-middle-east-airspace-closures"
    ],
    "deepDive": null
  },
  {
    "id": "manufacturing",
    "title": "Manufacturing",
    "icon": "06",
    "summary": "Energy-intensive industries — aluminum (electricity ~40% of cost), cement (energy 30-40%), steel, glass, paper — are first to curtail when Gulf gas/LNG spikes European and Asian power. The 2022 EU gas crisis idled ~1.4Mt of aluminum capacity (~2% of global) and pushed Western European output to its lowest this century. Much of that capacity never restarted: ceasefire relief is partial and some loss is permanent.",
    "trigger": "Gulf gas/oil disruption spikes European/Asian natural-gas and electricity prices (gas sets marginal power price). Energy as share of production cost: aluminum smelting ~40% (~13-15 MWh/t); cement ~30-40%; steel ~15-20% BF-BOF (up to ~40% in some configs, more for EAF); glass gas-dominant; paper high thermal-energy share.",
    "mechanism": "Gulf disruption tightens LNG/gas, spiking European TTF gas and power. Marginal-cost producers (aluminum, zinc smelters) go cash-negative and curtail/idle. Output declines drive import substitution (China/Kazakhstan/Turkey/Russia metal), worsening trade balances and causing permanent capacity loss. Downstream (autos, construction, packaging) face input-cost inflation.",
    "hormuz": "Worst for Asia (Qatari/Gulf LNG to Japan/Korea/India choked) and Europe (LNG marginal supply). Power spike idles aluminum/zinc smelters; cement/glass/steel margins compress. Most Gulf-energy-dependent: India, Pakistan, Bangladesh, Japan, South Korea (heavy Qatari LNG buyers), plus Europe via LNG marginal pricing.",
    "strike": "Severe energy-price spike mirroring 2022 EU gas-crisis dynamics; magnitude depends on infrastructure hit.",
    "cable": "Low direct, but disrupts industrial IoT/ERP/supply-chain coordination in MENA/South Asia manufacturing hubs.",
    "ceasefire": "Gas/power fall but idled smelters restart slowly (months; some permanently lost — cold-start potline risk). Demand destruction lingers.",
    "fills": "Aluminum/zinc: imports from China, Kazakhstan, Turkey, Russia replaced idled EU output (ING; Reuters). Smelter restart = months with cold-start risk; potlines can be permanently lost if frozen. European 2022 power went €90 to >€300/MWh (TTF peak €345/MWh, Aug 2022). Idled metal is replaced at elevated import + freight cost.",
    "closes": "On ceasefire, gas/power normalize but restarted-vs-permanently-shut capacity creates uneven recovery; some EU smelters never reopened, migrating capacity to lower-energy-cost regions (Gulf, China, US). Europe's deindustrialization risk crystallizes. Oversupply only if all idled capacity returns — unlikely; many closures are permanent.",
    "precedent": "2022 EU gas crisis: TTF €90 to all-time-high €345/MWh (Aug 2022). Europe idled ~1.4Mt aluminum (~2% of global) by end-2022; Western European output annualized 2.73Mt in Dec 2022, -540,000t YoY — lowest this century. All 9 EU zinc smelters cut or stopped, replaced by China/Kazakhstan/Turkey/Russia imports. EU chemical output -2.7% in 2022.",
    "timeline": "Hours-days: gas/power futures spike, smelter cash-margins negative. Weeks: aluminum-first curtailment announcements. Months: output declines in PMI/IP data, import substitution ramps. 6-12 months: downstream input-cost inflation, some closures permanent. Years: structural capacity migration out of high-energy-cost regions.",
    "confidence": "medium",
    "sources": [
      "https://www.eia.gov/todayinenergy/detail.php?id=7570",
      "https://worldsteel.org/other-topics/energy-use-in-the-steel-industry/",
      "https://thundersaidenergy.com/downloads/cement-costs-and-energy-economics/",
      "https://think.ing.com/articles/aluminium-smelter-shutdowns-threaten-europes-green-transition/",
      "https://www.statista.com/chart/28047/aluminum-production-in-europe/"
    ],
    "deepDive": null
  },
  {
    "id": "financial",
    "title": "Financial Markets",
    "icon": "07",
    "summary": "The cascade's transmission hub: an oil shock flows to energy-importer current accounts, FX, sovereign spreads, marine war-risk premiums and central-bank policy. The Red Sea 2024 episode is the live template — war-risk premiums rose from 0.05% to ~0.7% of hull value (Red Sea peak; the ~1.0% level was Black Sea), Suez traffic halved, and Egypt's canal revenue fell 60% ($10.25B to $3.99B). Gulf SWFs (~$3.5T 'Oil Five') act as both shock-absorbers and forced sellers.",
    "trigger": "Oil-price shock from Hormuz transit risk (~20M b/d, >25% of seaborne oil; Saudi 38% of Hormuz crude). Transmits to (a) energy-importer fiscal/external accounts, (b) marine war-risk insurance, (c) Gulf SWF asset values, (d) importer FX, (e) central-bank policy.",
    "mechanism": "Oil +$X/bbl deteriorates importer current accounts, depreciates FX, imports inflation, forces central-bank tightening or reserve drawdown, widens sovereign spreads, pressures ratings. Marine war-risk re-rates as % of hull per voyage: Red Sea baseline 0.05% (often waived) to ~0.7% peak (Oct-Dec 2023) of hull (the ~1.0% level was Black Sea, not Red Sea) — on a $100M hull, ~$50k to $700k-$1M per transit. Gulf SWFs ('Oil Five': PIF ~$1.15T, ADIA ~$1.11T, KIA >$1.0T, QIA ~$530B, Mubadala ~$370B) ~$3.5T combined become shock-absorbers and potential forced foreign-asset sellers.",
    "hormuz": "Most severe. 1973 comparator: oil +300% in ~4 months. Full closure removes up to ~20M b/d — multiples of any prior disruption; disorderly spot moves +30-50%+. Energy-importer sovereigns (Pakistan ~100% Gulf-dependent; Asia avg ~60% Gulf crude) face acute external stress; MENAP subsidies (~5% of GDP) balloon. War-risk premiums plausibly exceed the 1.0% Red Sea ceiling.",
    "strike": "Abqaiq comparator (14 Sep 2019): 5.7M b/d knocked out; Brent ~+15% intraday, settled ~+14%. A Gulf-wide strike scales this 2-4x. Saudi spare capacity ~1.5-2.0M b/d is the buffer.",
    "cable": "Limited direct magnitude vs oil scenarios, but adds settlement/latency risk to FX and rates desks.",
    "ceasefire": "Mean-reversion: risk premia compress, war-risk premiums fall back toward 0.05-0.1% baseline, SWF foreign-asset selling reverses.",
    "fills": "Oil: US SPR + IEA coordinated release (90-day obligation); OPEC spare ~1.5-2M b/d. SPR draw in days-weeks; new non-OPEC barrels in months-quarters. Insurance: capacity migrates to Lloyd's war syndicates at 0.7-1.0%+ hull rates, immediate but punitive. FX/sovereign: IMF programs (Egypt, Pakistan precedent), GCC bilateral deposits, reserve drawdowns.",
    "closes": "Permanent: accelerated importer diversification away from Hormuz crude; structural Gulf war-risk repricing (Red Sea premiums stayed elevated >12 months). Gulf SWFs rotate toward domestic/AI/strategic assets (global SWFs passed $15T Dec 2025), reducing foreign-asset recycling. Oversupply tail: post-shock demand destruction + delayed supply yields price overshoot then slump (1974, 2008, 2014).",
    "precedent": "1973 embargo: oil $2.90 to $11.65 (+300%, ~4 mo); US CPI >9%; GDP -0.5% (1974); Fed funds 5.75% to 12%. 2022 Russia-Ukraine: Brent $139.13 (7 Mar 2022); eurozone inflation 9% record. Red Sea 2024: war-risk 0.05% to ~0.7% of hull; Suez traffic -50% (26,000 to 13,213 ships); Egypt canal revenue $10.25B (2023) to $3.99B (2024), -60%, ~$7B FX loss — a direct sovereign-FX cascade case study.",
    "timeline": "T+0-72h: oil/FX/equity gap, war-risk re-rating, SWF domestic-equity support. T+1-4 wks: SPR/IEA releases, importer reserve drawdowns, first rating 'watch negative.' T+1-3 mo: central-bank responses, IMF engagement, downgrades for thin-buffer importers (Pakistan, Egypt, Turkey profiles). T+3-12 mo: structural repricing or, under ceasefire, mean-reversion.",
    "confidence": "high",
    "sources": [
      "https://www.eia.gov/todayinenergy/detail.php?id=65504",
      "https://www.policyholderpulse.com/red-sea-transit-insurance-premiums-coverage-exclusions/",
      "https://english.aawsat.com/business/5226421-saudi-pif-tops-list-sovereign-funds-worldwide-2025",
      "https://www.federalreservehistory.org/essays/oil-shock-of-1973-74",
      "https://english.ahram.org.eg/News/537603.aspx"
    ],
    "deepDive": null
  },
  {
    "id": "technology",
    "title": "Technology & Digital",
    "icon": "08",
    "summary": "The primary blast radius of the cable_severance scenario. The Feb 2024 Red Sea cuts degraded ~25% of Asia-Europe traffic (up to 70% on some routes) and took ~5 months to repair because of war-zone permit refusals. Repair latency — not the cut itself — is the killer variable. Hyperscalers reroute in minutes but thin-routed telcos and centralized crypto exchanges see hard liquidity and latency hits.",
    "trigger": "Severance of Red Sea/Gulf submarine cables (anchor-drag or direct action), the chokepoint carrying Asia-Europe-ME traffic (~16-17 systems transit the Red Sea/Bab-el-Mandeb-Hormuz corridor).",
    "mechanism": "Feb 2024 precedent: 24 Feb 2024 three cables cut (Seacom/TGN-EA, EIG, AAE-1), likely from the anchor of the Houthi-struck MV Rubymar — ~25% of Europe-Asia-ME traffic affected, up to 70% on some routes, 100M+ people impacted (Kentik; GeoCables). Repair latency is the killer variable: AAE-1 cut Feb 2024, not restored until late July 2024 (~5-month outage) due to Yemeni permit refusals. Cloud routing: Azure reported elevated latency for ME-traversing traffic.",
    "hormuz": "Indirect: data-center energy-cost spike from oil/gas (DC power ~40-60% of opex; exact per-scenario delta data not publicly available — proxy is near-linear pass-through on that share). Possible direct kinetic risk: reports of three AWS ME data centers damaged by Iranian drone strikes.",
    "strike": "Indirect via DC energy costs and regional risk premium.",
    "cable": "Primary scenario. ~25% Asia-Europe traffic degraded, up to 70% on specific corridors, multi-month repair tail. Exposed cloud regions: AWS me-south-1 (Bahrain), Azure UAE/Qatar, GCP me-central1 (Doha), me-west1 (Tel Aviv). Latency (not full outage) is typical for well-provisioned hyperscalers via failover; thin-routed enterprises/telcos hit harder. Crypto: connectivity loss widens spreads and breaks algo execution — Oct 2025 sell-off saw >$19B leveraged positions liquidated in 24h amid exchange strain.",
    "ceasefire": "Repair vessels gain access; latency normalizes over weeks-months as splices complete; no permanent capacity loss once repaired.",
    "fills": "Rerouting onto surviving systems (2Africa, PEACE, other Asia-Europe paths) and terrestrial/LEO satellite backup — immediate but congested, higher latency. Cable-repair ships (~60 vessels worldwide); ramp = weeks to mobilize + months given permit/security constraints (the AAE-1 5-month tail is the cost premium). Hyperscalers reroute within minutes via multi-region failover; cost premium is degraded performance + egress.",
    "closes": "Permanent shift: accelerated route diversification (reports of potential data-centre routing away from the Gulf toward India), investment in non-Red-Sea paths and LEO redundancy. Providers with the densest cable diversity and edge presence gain share; thin single-path telcos in Africa/South Asia are structurally disadvantaged.",
    "precedent": "Feb 2024 Red Sea cuts: 3 cables, ~25% Asia-Europe traffic, up to 70% on key routes, 100M+ users, AAE-1 ~5-month repair (Kentik; GeoCables; Submarine Networks). July 2024 CrowdStrike global IT outage: TradFi stalled regionally while Bitcoin/Ethereum base layers were unaffected — illustrating crypto base-layer resilience but centralized-exchange fragility.",
    "timeline": "T+0-24h: latency spikes, rerouting, crypto spread-widening/exchange strain. T+1-7d: congestion on backup paths, enterprise SLA breaches. T+1-4 wks: repair-ship mobilization (security-gated). T+1-5 mo: full restoration (AAE-1 precedent); faster under ceasefire.",
    "confidence": "medium",
    "sources": [
      "https://www.kentik.com/blog/what-caused-the-red-sea-submarine-cable-cuts/",
      "https://geocables.com/research/red-sea-cable-cuts-2024",
      "https://www.submarinenetworks.com/en/systems/asia-europe-africa/peace/peace-cable-cut-in-the-red-sea,-repair-to-be-prolonged",
      "https://www.networkworld.com/article/4052813/red-sea-cable-cuts-trigger-latency-for-azure-cloud-services-across-asia-and-the-middle-east.html",
      "https://capacityglobal.com/news/the-gulf-gamble-could-the-war-in-the-middle-east-drive-a-data-centre-exodus-to-india/"
    ],
    "deepDive": null
  },
  {
    "id": "pharma",
    "title": "Pharmaceuticals",
    "icon": "09",
    "summary": "A double-exposure sector: the large majority of pharmaceutical feedstocks/reagents are petrochemical-derived, and the just-in-time generic supply chain runs through Gulf/Red Sea shipping lanes. The 2024 Red Sea diversion added ~2 weeks and doubled freight; the COVID analog saw pharma transport costs rise +224% on average (peak +413%). Concentrated API sourcing plus a freight shock equals multi-month shortages of thin-margin generics.",
    "trigger": "Dual hit: (a) petroleum/natural-gas feedstock cost spike (oil scenarios), (b) Gulf/Red Sea shipping-lane disruption for APIs and finished drugs (all scenarios).",
    "mechanism": "Feedstock: the large majority of pharmaceutical feedstocks/reagents are petrochemical-derived (benzene, toluene, xylene to APIs); ~3% of petroleum output goes to pharma. An oil spike inflates inputs across nearly the whole synthesis chain plus plastics/packaging/devices. Shipping: Red Sea diversion around the Cape adds ~2 weeks / ~4,000 miles; shipping costs +100%, +~$200-400/TEU. Indian generic exporters to Europe (JIT model, little slack) are hit hardest (Moody's).",
    "hormuz": "Worst feedstock case — the Gulf is the petrochemical heartland; benzene/toluene/xylene and gas-derived precursors tighten globally, compounding the shipping hit if Hormuz-origin API/intermediate flows stop.",
    "strike": "Feedstock cost spike flows into ~99% of pharma inputs; magnitude tracks the oil/gas price delta.",
    "cable": "Limited direct pharma impact (ordering/logistics-system latency only).",
    "ceasefire": "Shipping reverts to Suez (saves ~2 wks / ~$200-400/TEU); freight and feedstock premiums decay over weeks-months.",
    "fills": "API sourcing shifts toward non-Gulf-routed suppliers / nearshoring (US/EU reshoring push); ramp = months-years for new API capacity given regulatory/qualification barriers. Cost premium: doubled freight + elevated feedstock until normalization. Cold chain: air-freight substitution for time-critical/refrigerated drugs at sharply higher cost (COVID comparator: pharma transport +224% avg, up to +413%).",
    "closes": "Freight reverts on ceasefire; feedstock follows oil down. Permanent: accelerated API reshoring/diversification away from concentrated India/China + Gulf-routed supply; strategic stockpiling of critical-drug APIs (post-COVID policy momentum).",
    "precedent": "COVID-19 (2020-21): pharma shipping costs +224% avg (peak +413%); India restricted exports of 26 APIs/finished drugs (Mar 2020); China/Italy shutdowns triggered shortages — multi-month effects from concentrated sourcing + freight shock. Red Sea 2024: Cape diversion +2 wks/+4,000 mi, freight +100%, +$200-400/TEU; Moody's warned of rising medicine costs/shortages.",
    "timeline": "T+0-2 wks: freight reroute, first lead-time stretch, air-freight cost spike for cold chain. T+2-8 wks: inventory drawdown, spot shortages of thin-margin generics. T+2-6 mo: feedstock cost pass-through to drug pricing, export-restriction risk from API source countries. T+6 mo+: reshoring/diversification investment; under ceasefire, freight/feedstock mean-reversion within weeks.",
    "confidence": "medium",
    "sources": [
      "https://www.industrialinfo.com/news/article/who-knew-petrochemicals-fuel-99-of-pharmaceutical-feedstock--312303",
      "https://www.lma-consultinggroup.com/red-sea-pharma-crisis-pushing-logistics-advancements-lisa-anderson-quoted/",
      "https://gulfnews.com/amp/story/business/retail/global-medicine-supply-chains-face-growing-pressure-moodys-warns-1.500555280",
      "https://accessiblemeds.org/resources/press-releases/pharmaceutical-shipping-costs-spike-response-global-covid-19-pandemic/",
      "https://psnet.ahrq.gov/issue/drug-shortages-amid-covid-19-pandemic"
    ],
    "deepDive": null
  },
  {
    "id": "construction",
    "title": "Construction & Materials",
    "icon": "10",
    "summary": "Four petroleum-/energy-linked inputs transmit the shock: bitumen (a direct crude derivative), cement (energy 30-40% of cost), steel (energy-intensive), and lumber/imported materials (freight). A $10/bbl crude rise adds ~$30-50/tonne to bitumen. The Gulf is also the demand epicentre — UAE's $590B project pipeline and Saudi's NEOM (audit now projecting up to $8.8T) face both material-cost inflation and physical/logistics risk.",
    "trigger": "Oil/energy price spike transmits via bitumen/asphalt (refining residue), steel (energy-intensive smelting), cement (most energy-intensive manufacturing), and lumber/imported materials (freight). Brent baseline ~$70-75/bbl (early 2026); scenarios push to $100-150.",
    "mechanism": "Bitumen is a direct crude derivative: +$10/bbl crude adds ~$30-50/tonne to bitumen. Cement: energy ~30-40% of production cost (highest energy intensity of any manufacturing industry; up to 40-50% in some markets). Steel: energy/fuel a major BF-BOF cost driver (~6% of all US manufacturing energy use); 11-38% electricity-cost share in decarbonized routes. Lumber/materials freight: rerouting around chokepoints adds ~$1M fuel + ~10 days per Asia-Europe voyage; Shanghai-Europe spot rose 256% Dec 2023-Feb 2024.",
    "hormuz": "Most severe. Brent $120-150 drives bitumen +$150-250/tonne vs baseline; cement +15-25% (energy passthrough on a 30-40% base); steel +10-20%; shipping/lumber freight could replicate the Red Sea pattern (+250%+ on affected lanes). Gulf construction (UAE $590B pipeline; NEOM) faces both material-cost inflation and physical/logistics risk.",
    "strike": "One-off spike. 2019 Abqaiq: Brent +19.5% intraday (record jump), settled ~+14%. Bitumen +$100-200/tonne; cement/steel +8-15% during spike, partial reversal as supply restores.",
    "cable": "Limited direct materials impact (<5%); main hit is project-management/payment-systems disruption and procurement delays.",
    "ceasefire": "Risk premium unwinds; Brent reverts toward $70-80; bitumen/cement/steel give back most of the conflict premium within 1-2 quarters; Gulf megaproject sentiment recovers.",
    "fills": "Bitumen: non-Gulf refiners (US Gulf Coast, European, Indian) and strategic stockpiles backfill in weeks-months, premium $30-50/tonne per $10 crude. Steel/cement are largely regionally produced (cement barely tradable due to weight) — local producers pass energy costs through; there is no quick substitute supplier, only demand destruction/project deferral. Lumber/materials: Cape rerouting adds ~$1M + 10 days/voyage.",
    "closes": "Asphalt normalizes with crude (no permanent shift). Steel/cement energy spikes accelerate green-steel/alt-fuel substitution slowly; permanent change only if high energy persists. Lumber/freight: vessel oversupply + route normalization collapses the freight premium within 2-4 quarters once the chokepoint reopens. Prolonged high energy favors gas-advantaged (Gulf/US) producers over European mills.",
    "precedent": "1973 embargo: oil ~$2.90 to $11.65 (quadrupled) by Jan 1974; Western housing/construction collapsed; Saudi cement-import boom so acute that contractors flew cement bags by helicopter into Jeddah — the producer/consumer divergence relevant to Gulf-exposed builders. 2019 Abqaiq: Brent +19.5% intraday record. 2023-24 Red Sea: container spot +256%; Suez container traffic -90% in 2024.",
    "timeline": "0-2 weeks: bitumen/freight spike on news. 1-3 months: cement/steel passthrough as energy contracts reprice; project bids reprice. 3-9 months: Gulf megaproject deferrals if Hormuz closure persists; substitution begins. 9-24 months: route/supply normalization or permanent efficiency shift if energy stays elevated.",
    "confidence": "medium",
    "sources": [
      "https://www.eia.gov/todayinenergy/detail.php?id=11911",
      "https://www.expertmarketresearch.com/price-forecast/bitumen-price-forecast",
      "https://www.newcivilengineer.com/latest/anticipated-cost-of-saudi-arabias-neom-gigaproject-explodes-from-500bn-to-8-8-trillion-12-03-2025/",
      "https://www.dubaiproperty.news/market-updates/uae-construction-sector-flourishes-despite-global-challenges-holds-590-billion-project-pipeline-report",
      "https://www.coface.com/news-economy-and-insights/houthi-attacks-in-the-red-sea-why-maritime-trade-is-still-not-smooth-sailing"
    ],
    "deepDive": null
  },
  {
    "id": "defense",
    "title": "Defense & Security",
    "icon": "11",
    "summary": "Conflict accelerates an already-record arms cycle: global military spend hit $2.718T in 2024 (+9.4% real, largest jump since the Cold War, SIPRI). The shock pulls forward GCC emergency procurement (US-Saudi $142B deal signed May 2025; F-35 approval Nov 2025) and cyber spend ($213B in 2025 to ~$240B in 2026, Gartner). Budgets are structurally sticky — multi-year programs mean a ceasefire slows the pace but rarely reverses the level.",
    "trigger": "Acute Gulf conflict accelerates arms procurement, defense-budget realignment, private-security demand, and cybersecurity spending. Baseline already record-high: global military expenditure $2.718T in 2024, +9.4% real YoY (largest jump since the Cold War, 10th consecutive rise, 2.5% of global GDP; SIPRI Apr 2025).",
    "mechanism": "NATO: 18 of 32 members met the >=2.0% GDP guideline in 2024 (up from 11 in 2023); NATO total $1,506B = 55% of global. 2024 jumps: Romania +43%, Netherlands +35%, Sweden +34%, Poland +31%, Germany +28%. GCC reprices threat into emergency procurement + domestic-production push (GCC domestic defense demand could grow from ~$6B to ~$30B/yr over a decade). Each escalation drives security-software and OT/critical-infrastructure spend.",
    "hormuz": "Maximal. Triggers GCC emergency buys (air/missile defense priority), Western naval surge costs, cyber hardening of energy infrastructure; order acceleration for missile-defense primes (Lockheed, RTX, MBDA). GCC surge already underway: reported Saudi ~$70B defense surge; UAE $18.7B (2021) to $23.9B (2025), 6.3% CAGR.",
    "strike": "Strong air-defense/counter-drone demand (Abqaiq-type vulnerability exposed): counter-UAS, Patriot/THAAD restocks, munitions resupply.",
    "cable": "Pivots spending toward cybersecurity, subsea-cable protection, naval ISR. Global infosec spend $193B (2024) to $213B (2025, +15%) to ~$240-244B (2026); cable/critical-infra events skew it upward (Gartner).",
    "ceasefire": "Procurement pace moderates but budgets are sticky (multi-year programs); NATO 2%+ targets and GCC modernization persist regardless of de-escalation.",
    "fills": "US-Saudi ~$142B defense sales agreement signed 13 May 2025 (5 categories incl. air & missile defense, maritime, C4ISR); F-35 sale to Saudi approved Nov 2025; UAE previously approved for F-35s. GCC importers: Saudi (largest ME spender, $80.3B in 2024, 7th globally), Qatar ($14.4B 2024), UAE (~$23.9B 2025). Suppliers: US primes dominate; France (Rafale), UK, Italy (MBDA) supplement; domestic EDGE (UAE) and SAMI (Saudi) capture localization. FMS deliveries 2-5+ yrs; urgent buys via line acceleration/drawdown.",
    "closes": "Defense spending rarely 'closes' — multi-year contracts make it sticky. Permanent shifts: GCC localization (EDGE, SAMI) cuts import dependence over a decade; NATO 2%-to-3%+ trajectory; cyber/counter-drone become permanent budget lines. Oversupply only in commoditized small arms.",
    "precedent": "Post-2014 Crimea: NATO 2% pledge drove members-at-target from a handful to 18/32 by 2024; defense-prime equities (Lockheed, RTX) materially outperformed. 2022 Russia-Ukraine: Germany's €100B Zeitenwende fund, Poland +31% in 2024 — template for conflict-driven realignment. 2019 Abqaiq exposed GCC air-defense gaps, driving Patriot/THAAD and counter-UAS waves.",
    "timeline": "0-4 weeks: emergency munitions/air-defense resupply, cyber hardening, defense-equity rerating. 1-6 months: new FMS notifications/signings (Saudi/UAE/Qatar). 6-24 months: budget-law increases ratified, localization contracts let. 2-5+ years: platform deliveries (F-35s, missile defense), structural budget reset.",
    "confidence": "high",
    "sources": [
      "https://www.sipri.org/sites/default/files/2025-04/2504_fs_milex_2024.pdf",
      "https://www.aljazeera.com/news/2025/5/13/us-and-saudi-arabia-agree-to-142bn-weapons-sale-during-trump-visit",
      "https://www.cnn.com/2025/11/18/middleeast/f35-trump-saudi-arabia-israel-latam-intl",
      "https://www.strategyand.pwc.com/m1/en/reports/the-emerging-gcc-defence-market.pdf",
      "https://www.gartner.com/en/newsroom/press-releases/2025-07-29-gartner-forecasts-worldwide-end-user-spending-on-information-security-to-total-213-billion-us-dollars-in-2025"
    ],
    "deepDive": {
      "url": "/markets/defense",
      "label": "Defense & Security — deep dive"
    }
  },
  {
    "id": "tourism-services",
    "title": "Tourism & Services",
    "icon": "12",
    "summary": "Dubai drew 18.72M international visitors in 2024 (+9%), with tourism ~12% of its GDP — and leisure travel (77% of visitors) is highly elastic to safety perception. Airspace closures force $6,000-10,000/hr reroute costs and war-risk premium spikes. The deeper structural exposure is the Gulf remittance corridor: India $129.1B, Philippines $40B, Pakistan ~$30-33B (2024), much of it sourced from Gulf migrant labor tied to the same construction boom the conflict threatens.",
    "trigger": "Gulf conflict hits inbound tourism (Dubai/UAE), airspace/aviation economics, war-risk insurance, business travel, and the remittance corridor from Gulf migrant workers to South/Southeast Asia and Egypt.",
    "mechanism": "Dubai tourism: 18.72M international visitors in 2024 (+9% YoY, from 17.15M in 2023); tourism ~12% of Dubai GDP; India top source (2.2M, +22%). Aviation rerouting adds 300-800 nm and 45 min-2 hrs/flight, costing ~$6,000-10,000 per added flight hour (~$60,000 on a 10-hr sector); a single Tokyo-London reroute burned ~5,600 extra gallons; NW Europe jet fuel hit ~$1,259.75/tonne (highest since the Ukraine war). War-risk premiums spiked/withdrawn near Iran/Iraq FIRs. Cumulative industry cost could exceed $1B if conflict extends.",
    "hormuz": "Severe. Gulf airspace/airport risk disrupts Dubai/Doha/Abu Dhabi hubs; Emirates/Qatar/Etihad reroute fleets; war-risk premiums surge; inbound tourism drops sharply (leisure 77% of Dubai visitors, highly elastic). Remittance corridor stressed by worker-repatriation risk.",
    "strike": "Moderate-high aviation fuel spike (jet fuel tracks crude); airfares +up to 10% (Khaleej Times); insurance repricing; tourism dip on headline risk.",
    "cable": "Hits business/financial services, payment/booking systems, and digital remittance rails; aviation less direct. Transfers face transaction friction.",
    "ceasefire": "Rapid rebound — risk premiums unwind, airspace reopens, war-risk insurance renormalizes, tourism/business travel recover within 1-2 quarters.",
    "fills": "Aviation: airlines reroute via longer corridors (Cape/Central Asia/Pacific) immediately but at $6,000-10,000/hr premium; alternative hubs (Istanbul, European) capture diverted connecting traffic. Tourism: substitute destinations (Europe, SE Asia) capture displaced Gulf demand; Gulf recovers post-ceasefire. Insurance: Lloyd's/specialty war-risk market reprices sharply higher; some routes temporarily uninsurable.",
    "closes": "Aviation premium collapses on ceasefire/airspace reopening (weeks). Tourism: pent-up demand drives a sharp rebound with no permanent share loss unless conflict is prolonged. Remittances are structurally resilient (countercyclical historically), but a Gulf labor-demand contraction (construction slowdown) would permanently reduce flows.",
    "precedent": "2019 Abqaiq / 2024-25 Red Sea: reroute templates (Red Sea added ~$1M fuel + 10 days/voyage, Suez container traffic -90%). 2020 COVID: Dubai tourism collapsed then rebounded to a record 18.72M by 2024 — demonstrating rapid Gulf recovery capacity. Remittance resilience: 2024 global remittances to LMICs ~$685B (> FDI + ODA combined), proven countercyclical (World Bank).",
    "timeline": "0-2 weeks: airspace closures, war-risk premium spikes, airfares +up to 10%, tourism bookings soften. 1-3 months: sustained rerouting costs, business-travel cuts, remittance-corridor stress if labor disrupted. 3-9 months: tourism demand destruction if Hormuz closed; substitute-hub share gains. Post-ceasefire (weeks-months): sharp tourism/aviation rebound; remittances resilient unless Gulf labor demand permanently cut.",
    "confidence": "medium",
    "sources": [
      "https://dmo.dof.gov.ae/en/news-and-publications/latest-press-releases/dubai-welcomes-1872-million-international-visitors-in-2024-plus9-yoy/",
      "https://www.cnn.com/2026/03/02/travel/middle-east-airspace-closures-global-aviation-map",
      "https://aerospaceglobalnews.com/news/airlines-fuel-costs-rerouting-airfares-middle-east/",
      "https://blogs.worldbank.org/en/peoplemove/in-2024--remittance-flows-to-low--and-middle-income-countries-ar",
      "https://swarajyamag.com/news-brief/india-tops-global-remittance-chart-with-1291-billion-in-2024-while-chinas-share-hits-two-decade-low-world-bank-data"
    ],
    "deepDive": null
  },
  {
    "id": "precious-metals-mining",
    "title": "Precious Metals Mining",
    "icon": "13",
    "summary": "Gold Fields Ltd. (JSE/NYSE: GFI) Q1 2026 company-reported data shows AISC rose 13% YoY to $1,829/oz, with diesel +30-70%, freight +40%, and LNG +30% since February. At $100/bbl oil, Gold Fields estimates $40-50/oz additional AISC across its global portfolio. WPIC projects the platinum market heading for its fourth consecutive annual supply deficit, reducing aboveground stocks to 1.747M oz (< 3 months demand) by year-end 2026.",
    "trigger": "U.S.-Iran conflict → oil above $100/bbl → diesel/fuel costs at mining sites up 30-70%; LNG up 30% (for mines that converted from coal); freight rates up ~40% from rerouted shipping; explosives and cyanide each up ~10%; sanctions uncertainty on Russian palladium",
    "mechanism": "Direct cost inflation: fuel/energy is 20-30% of open-pit AISC; freight for dore/reagents/equipment; logistics disruption: longer shipping routes for Australian/West African dore to Asian refiners; refinery bottleneck risk at Singapore, Dubai, and Swiss hubs from rerouted flows; marine insurance premiums increase on Hormuz-related routes",
    "hormuz": "REALIZED: fuel and freight cost impacts ongoing; Australian miners shipping to Singapore face Malacca-only routing (longer, more expensive); West African dore to Swiss/Dubai refiners faces Red Sea alternative routing costs",
    "strike": "Additional infrastructure damage → oil spike → further diesel/LNG escalation; Gold Fields sensitivity: $40-50/oz per $100/bbl implies rapidly escalating cost impact at $150+ WTI",
    "cable": "Impairs refinery fee payment and dore transport contracts; LBMA London gold price is the benchmark — London disruption creates regional price fragmentation and settlement risk",
    "ceasefire": "Oil normalization → fuel/freight costs decline; Gold Fields AISC guidance ($1,800-$2,000) set with $100/bbl assumption — oil below $80 would bring AISC toward $1,750-$1,900 range; significant margin relief",
    "fills": "Energy substitutes at mining sites: solar/renewable (limited in remote locations; multi-year capex); generator diversification (multi-fuel setups); coal re-adoption (regulatory/ESG barriers). Supply chain substitutes: regional refining overflow (Swiss, London if Singapore/Dubai congested); dore air transport (expensive but available for small volumes)",
    "closes": "On ceasefire, oil normalization brings AISC back toward $1,750–$1,900 (Gold Fields guidance assumes $100/bbl); fuel and freight relief is a matter of months. But the structural drags persist regardless of the conflict: WPIC projects platinum's 4th consecutive annual supply deficit (aboveground stocks to ~1.747M oz, <3 months' demand by end-2026), and the Russian central bank's palladium drawdown is a medium-term supply headwind.",
    "precedent": "2022 Russia-Ukraine: palladium shock drove PD to $3,400/oz (March 2022 peak); Russian metal sanctions created first modern precious metals supply chain stress. 2020 COVID: mine shutdowns reduced gold supply ~4-5% in Q2 2020. 2008: diesel costs doubled at mining sites, AISC estimates rose ~15-20%",
    "timeline": "Short-term: AISC elevated through at least Q2 2026; medium-term: oil normalization on ceasefire provides relief; structural: WPIC platinum deficit (4 years running) is multi-year; Russian palladium drawdown is a medium-term supply headwind",
    "confidence": "high",
    "sources": [
      "https://sustainableminingsystems.com/gold-fields-cost-increase-us-iran-war-2026/",
      "https://skillings.net/gold-fields-flags-50-oz-oil-shock-as-energy-costs-surge-across-global-portfolio/",
      "https://investingnews.com/wpic-platinum-market-forecast/",
      "https://capital.com/en-int/market-updates/crude-oil-price-forecast-19-05-2026"
    ],
    "deepDive": null
  }
];
