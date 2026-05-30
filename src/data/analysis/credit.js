// GENERATED from IranWarTracker/data/cascades/credit.json by scripts/build-cascades.cjs.
// DO NOT EDIT BY HAND. Edit the canonical JSON and re-run: node scripts/build-cascades.cjs

export const cards = [
  {
    "id": "money-market-dollar-liquidity-surge",
    "title": "Money Market Fund Dollar Liquidity Surge",
    "icon": "01",
    "category": "dynamic",
    "confidence": "high",
    "summary": "Global money market funds attracted $47.9B in the week ending ~March 1, 2026 — the largest inflow since February 17 — as the Hormuz closure amplified inflation and rate expectations, driving the largest rotation out of U.S. equity funds since January. Total U.S. MMF assets stood at $7.785 trillion as of May 27, 2026 (ICI T1), with government funds comprising 82% of assets.",
    "trigger": "Conflict outbreak Feb 28 → risk-off flight to liquid dollar instruments; oil shock → inflation fears → rate cut expectations collapse → MMFs become more attractive vs. duration risk",
    "mechanism": "Institutional and retail investors shift from equity/duration to government MMFs; U.S. dollar strengthens (Section 1); cross-currency basis remains contained (euro-dollar 1Y at 11.23 bps on Mar 4 — orderly per Reuters T2)",
    "hormuz": "Elevated MMF inflows sustained while oil/inflation uncertainty persists; institutional demand for overnight government paper structurally elevated",
    "strike": "Accelerated inflows if perceived as escalation signal; MMF industry absorbs flight capital as primary safe harbor",
    "cable": "Limited direct transmission; systemic MMF stress only if settlement infrastructure impaired (not expected for US-domiciled government funds)",
    "ceasefire": "MMF inflows reverse as risk appetite returns; rotation back into equities and duration; 2020 COVID parallel: MMF AUM peaked ~6 weeks into crisis",
    "magnitude": "Week ending ~Mar 1: US MMF $30.75B, global MMF $47.9B (Reuters/LSEG Lipper, T2). Total US MMF assets May 27: $7.785T (ICI, T1). Government MMFs: $6.407T (82%). US equity outflows: -$21.92B week of Mar 4 (largest since Jan 7, Reuters/LSEG T2).",
    "beneficiaries": "MMF operators (fee income on swelling AUM); U.S. Treasury (government MMFs absorb T-bill supply); investors seeking capital preservation",
    "losers": "Equity markets (redemption pressure); long-duration bond holders (yield repricing); EM issuers (capital withdrawn from higher-risk assets)",
    "substitution": "No substitution needed — MMF itself is the safe-harbor destination. Fed RRP facility provides floor for government MMF; SOFR/OBFR remain well-anchored",
    "precedent": "March 2020: $680B+ into US MMFs in 2 weeks (ICI T1). March 2023 SVB: $384B in March (ICI T1). September 2008: prime fund 'breaking the buck' — 2026 episode shows no prime fund stress, consistent with post-2016 reform firewall",
    "timeHorizon": "Weeks-to-months (mean-reverts with conflict de-escalation). Structural floor: MMF industry has grown from $3T pre-COVID to $7.8T — implies higher baseline safe-haven allocation capacity",
    "investment": "MMF operators benefit from sustained inflows regardless of rate direction. T-bill/repo demand elevated. Risk appetite reversal signal: sustained MMF outflows would be a leading indicator of genuine risk re-engagement post-ceasefire.",
    "staleFlags": "ICI weekly series for Feb-Apr 2026 not available in this report — peak timing and exact AUM level during conflict require full ICI weekly historical pull. Reuters/LSEG Lipper (T2) provides direction but not T1 precision.",
    "sources": [
      "https://www.reuters.com/business/investors-seek-refuge-money-market-funds-iran-conflict-escalates-2026-03-03/",
      "https://www.reuters.com/world/china/global-markets-flows-graphic-2026-03-06/",
      "https://www.ici.org/research/stats/mmf",
      "https://www.reuters.com/world/china/dollar-funding-stress-eases-middle-east-conflict-de-escalation-hopes-rise-2026-03-04/"
    ],
    "tags": {
      "assetClass": [
        "money-markets",
        "rates"
      ],
      "entities": [
        "us-treasury",
        "fed",
        "mmf",
        "usd"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike",
        "cable_severance",
        "ceasefire"
      ],
      "position": {
        "hormuz_closure": "winner",
        "oil_strike": "winner",
        "ceasefire": "loser"
      },
      "asOf": "2026-05-27"
    }
  },
  {
    "id": "treasury-safe-haven-vs-gulf-selling",
    "title": "U.S. Treasuries: Safe-Haven Demand vs. Gulf Official Selling",
    "icon": "02",
    "category": "dynamic",
    "confidence": "high",
    "summary": "Private foreign investors bought $111.4B in long-term U.S. securities in March 2026 (TIC T1) while official institutions — including Saudi Arabia and UAE — sold ~$16.6B in Treasuries, as Hormuz-disrupted oil exports reduced Gulf dollar income. The private/official split is structurally unusual and reflects the U.S. dual identity as conflict beneficiary (energy exporter) and reserve-currency haven. Adjustment was orderly per IMF April 14 Financial Stability assessment (T1).",
    "trigger": "Hormuz partial closure (Feb 28) disrupts Gulf crude export revenue → Gulf sovereign dollar income declines → UST purchase program paused/reversed; simultaneously, risk-off private global investors flee to UST safe haven",
    "mechanism": "Gulf oil → dollar → UST recycling chain interrupted; private risk-off demand partially offsets; IMF characterizes adjustment as 'reasonably orderly'; TIC March 2026: total net inflow $150.7B but official outflow $11.4B",
    "hormuz": "Gulf official UST selling continues; private safe-haven demand partially offsets; net TIC inflow sustained but composition shifts unfavorably for yield stability",
    "strike": "Accelerated Gulf revenue loss → larger official sector selling; if sustained, risk of disorderly UST price moves if private demand fails to absorb",
    "cable": "Limited direct transmission to UST flows; if cable disruption impairs Gulf financial communications, settlement risk increases",
    "ceasefire": "Gulf dollar income recovers; UST buying resumes; private risk-off demand reverses; yields normalize toward pre-conflict range",
    "magnitude": "March 2026: official net sales -$14.9B; Saudi+UAE combined -$16.6B (TIC/Semafor T1/T2); private net purchases +$111.4B. Saudi reserves: $497B (six-year high). Total TIC inflow: $150.7B. 10Y yield range during conflict not anchored in this dataset (T1 FRED/Bloomberg data pull required).",
    "beneficiaries": "Private risk-off UST buyers (capital appreciation before inflation repricing); U.S. deficit financing (private demand sustained); USD-indexed MMF holders",
    "losers": "Gulf sovereigns (reduced recycling capacity; dollar income gap); countries dependent on Gulf SWF flows into U.S. asset markets",
    "substitution": "FIMA repo (allows UST repo vs. outright sale); ESF swap lines under discussion (UAE/Gulf — not yet executed); IMF emergency lending to EM importers with reserve pressure",
    "precedent": "2014–16 oil price collapse: Gulf official sector reduced UST holdings by ~$100B+; 1990 Gulf War: Kuwait drew down SWF reserves. 2022 Russia sanctions: Russian reserves frozen, accelerating CB reserve diversification globally",
    "timeHorizon": "Gulf UST selling: months (revenue-linked, recovers with Hormuz normalization). Private safe-haven demand: weeks-to-months (reverses on ceasefire/resolution).",
    "investment": "Monitor TIC April data (due June 18, 2026) for continuation of official selling. If oil prices remain $100+, Gulf dollar recycling into USTs structurally reduced. Positive for UST yields in scenario of Gulf reserve drawdown acceleration.",
    "staleFlags": "TIC April 2026 data not yet released (due June 18); country-level breakdown for UAE not always separately reported in TIC monthly; Saudi reserve composition changes not publicly disclosed at instrument level. 10Y yield movement quantification requires FRED/Bloomberg pull.",
    "sources": [
      "https://home.treasury.gov/news/press-releases/sb0499",
      "https://ticdata.treasury.gov/Publish/mfhhis01.txt",
      "https://www.semafor.com/article/05/19/2026/saudi-arabia-uae-trim-us-debt-holdings-by-nearly-17-billion",
      "https://www.imf.org/en/blogs/articles/2026/04/14/war-in-the-middle-east-challenges-global-financial-stability"
    ],
    "tags": {
      "assetClass": [
        "rates",
        "sovereign-credit"
      ],
      "entities": [
        "us-treasury",
        "ust",
        "saudi-arabia",
        "uae",
        "imf",
        "usd"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike",
        "cable_severance",
        "ceasefire"
      ],
      "position": {
        "hormuz_closure": "mixed",
        "oil_strike": "mixed",
        "ceasefire": "winner"
      },
      "asOf": "2026-05-18"
    }
  },
  {
    "id": "em-sovereign-spread-shock",
    "title": "EM Sovereign Spread Shock: Differentiated Transmission",
    "icon": "03",
    "category": "sector",
    "confidence": "high",
    "summary": "The EMBI GD widened 35 bps in Q1 2026 to 289 bps (Mar 31, J.P. Morgan/SSGA T2), with CDX.EM 5Y widening 69 bps. Egypt's spread widened 60+ bps with the pound down 12% (IMF REO T1); Pakistan spiked ~500 bps at conflict onset before recovering (IMF Pakistan CR T1); Bahrain widened 50+ bps with Moody's shifting to B2 negative (T1). Despite volatility, net EM bond flows remained positive for full Q1 (+$5.9B HC, +$11.4B LC, SSGA/JPM T2).",
    "trigger": "Oil price shock ($73→$100+/bbl) → inflation and fiscal deterioration for energy importers; Hormuz closure → disrupted trade routes → current account stress for multiple EM sovereigns",
    "mechanism": "Higher oil import bill → foreign reserve drain → currency depreciation → inflation → central bank tightening → slower growth → wider credit spreads → reduced market access for high-yield EM borrowers",
    "hormuz": "Ongoing: Egypt/Pakistan/Turkey/South Korea face sustained energy cost pressure; Bahrain/Qatar/Iraq face revenue disruption despite being exporters (export routes blocked)",
    "strike": "Higher realized oil prices accelerate energy-importer fiscal stress; EM spread widening deepens; IMF pipeline expands beyond 12 countries",
    "cable": "Partial risk: disruption to financial messaging could impair EM sovereign payment rails; secondary effect on portfolio investor confidence",
    "ceasefire": "Spreads partially recover; oil prices normalize toward $75-80/bbl; EM inflows resume; IMF programs remain but urgency reduces",
    "magnitude": "EMBI GD: +35 bps Q1 to 289 bps. CDX.EM 5Y: +69 bps to 194 bps. Egypt: +60+ bps, EGP -12% (IMF REO T1). Pakistan: peak ~500 bps; returned near pre-war by mid-April (IMF T1). Bahrain: +50+ bps (IMF T1); bond-implied CDS level quarantined as T3. EM HC net flows Q1: +$5.9B. EM LC net flows Q1: +$11.4B (SSGA/JPM T2).",
    "beneficiaries": "EM distressed debt investors; IMF (programs expand fee base); sovereign creditors with existing exposure (recovery premium vs. new money cost)",
    "losers": "Energy-importing EMs (Egypt, Pakistan, Turkey, South Korea, Sri Lanka, Morocco, sub-Saharan importers); GCC exporters with disrupted routes (Bahrain, Iraq, Kuwait, Qatar)",
    "substitution": "IMF EFF/RSF ($20-50B pipeline T1); bilateral Gulf support (Saudi oil financing for Pakistan at $1.2B per IMF Pakistan CR T1); IsDB trade finance; multilateral DFI budget support (ADB, World Bank)",
    "precedent": "1997 Asian crisis: EM spreads widened 500+ bps; 2022 Russia-Ukraine: CDX.EM widened ~80 bps in 3 weeks; Sri Lanka 2022 default: reserves at zero, IMF EFF required; 2013 'taper tantrum': EM spreads +100 bps within months",
    "timeHorizon": "Acute phase: 3–6 months. Structural IMF program stress: 12–36 months for Pakistan/Egypt to rebuild reserves and normalize primary surplus trajectories.",
    "investment": "Selective EM hard-currency exposure in oil-exporter sovereigns (Saudi, UAE, Oman, Kuwait) vs. avoiding energy-importer high-yield (Egypt, Pakistan, Bahrain, Lebanon). Monitor IMF financing announcements as stress signal. Pakistan's return to $750M Eurobond market (Apr 16) — spreads remain a pricing constraint, not an access closure.",
    "staleFlags": "Country-level CDS spread levels not confirmed at T1 in this report; only IMF REO provides T1-anchored spread widening for Egypt/Bahrain/Pakistan. Turkey CDS levels quarantined as T3 (PA Turkey blog removed). South Korea KOSPI magnitude claim removed pending T1/T2 verification.",
    "sources": [
      "https://www.ssga.com/us/en/institutional/insights/emerging-market-debt-commentary-q1-2026",
      "https://www.imf.org/-/media/files/publications/reo/mcd-cca/2026/english/keymessages.pdf",
      "https://www.imf.org/-/media/files/publications/cr/2026/english/1pakea2026001.pdf",
      "https://www.morganstanley.com/im/en-us/institutional-investor/insights/articles/emerging-markets-debt-holds-firm.html",
      "https://www.thenationalnews.com/business/economy/2026/04/18/moodys-changes-bahrain-and-iraqs-outlook-to-negative-over-war-fallout/"
    ],
    "tags": {
      "assetClass": [
        "sovereign-credit"
      ],
      "entities": [
        "egypt",
        "pakistan",
        "bahrain",
        "turkey",
        "embi",
        "cds",
        "imf"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike",
        "cable_severance",
        "ceasefire"
      ],
      "position": {
        "hormuz_closure": "loser",
        "oil_strike": "loser",
        "ceasefire": "winner"
      },
      "asOf": "2026-03-31"
    }
  },
  {
    "id": "gulf-sukuk-and-swf-rebalancing",
    "title": "Gulf Sukuk Freeze and SWF Strategic Rebalancing",
    "icon": "04",
    "category": "structural",
    "confidence": "medium",
    "summary": "GCC USD bond and sukuk issuance 'slowed sharply' post-February 28 (Fitch cited in Mettis Global, T2), reversing a record Q1 start ($62.4B globally in Q1, S&P Global/Arab News T2). Gulf SWFs maintain large AUM (~$4-6T, Global SWF T2/T3 aggregate estimate) but PIF announced an international allocation cut from 30% to 20% in April — a structural shift flagged as PROVISIONAL pending PIF official confirmation. S&P projects Islamic finance growth at 5-10% in 2026, down from 10.2% in 2025.",
    "trigger": "Conflict uncertainty → credit spread widening for Gulf issuers → investors demand higher premium → issuers postpone deals; simultaneously, GCC domestic financing needs grow (defense, infrastructure repair, food security) → SWF redirect",
    "mechanism": "GCC DCM pause → less Gulf IG/AA supply at tight spreads → global EM bond index composition shifts; SWF domestic reallocation → U.S. private equity/tech/infrastructure pipeline potentially reduced",
    "hormuz": "DCM freeze persists for Qatar/Bahrain issuers; Saudi/UAE issuance recovers first given stronger credit profile; sukuk force majeure risk elevated for lease-backed structures with impaired assets",
    "strike": "Further infrastructure damage → reconstruction bond issuance wave once conflict stabilizes; sovereign sukuk for rebuilding potentially at premium spreads",
    "cable": "Minimal direct impact on sukuk issuance; secondary effect if investor communication and settlement infrastructure disrupted",
    "ceasefire": "Pent-up GCC issuance wave: $500M–$1B+ deals resume; spreads tighten; SWF international allocation decision may be partially reversed if fiscal pressure eases",
    "magnitude": "Global sukuk Q1 2026: $62.4B (+18.6% YoY, S&P Global T2). GCC Q1 bonds+sukuk: $55.04B across 95 deals (Markaz/International Finance, T2 MEDIUM confidence). Post-Feb 28: several planned deals postponed (Fitch, exact volume not publicly quantified). PIF international allocation cut: 30%→20% (CFR citing Global SWF, T2 PROVISIONAL — not a PIF official press release). Gulf SWF ~$25B Q1 deployment: REMOVED — T3 source (Enterprise AM). Islamic finance growth: 5-10% in 2026, down from 10.2% in 2025 (S&P Global via Zawya, T2).",
    "beneficiaries": "U.S. domestic bond market (absorbed GCC DCM pause via record corporate supply, $577B YTD IG); distressed investors (wider spreads on non-IG GCC names); Saudi/UAE sovereign issuers (maintained market access)",
    "losers": "Non-IG GCC borrowers (frozen DCM); sukuk issuers with impaired assets (force majeure risk); U.S. private equity/infrastructure/tech if GCC SWF inflows structurally reduced; Gulf real estate and project finance",
    "substitution": "Local-currency sukuk in Saudi riyal (SAR) maintained; IsDB and multilateral Islamic finance facilities; GCC corporate borrowers shift to relationship bank financing; Gulf sovereigns draw on reserve buffers rather than market issuance",
    "precedent": "2014-16 oil price collapse: GCC issuance paused then surged in 2016 Saudi Aramco bond ($17.5B at debut). COVID 2020: GCC sukuk markets reopened within 6 weeks after initial pause.",
    "timeHorizon": "DCM freeze: weeks-to-months (recovers as conflict clarity improves). SWF strategic reallocation: multi-year structural shift; domestic Vision 2030/UAE 2031 priorities dominate through at least 2027.",
    "investment": "Monitor GCC DCM reopening as a conflict de-escalation signal. Saudi Aramco and PIF sovereign bond spreads as best-in-class indicators. S&P projects 5-10% Islamic finance growth in 2026 (down from 10.2% in 2025, T2) — sukuk growth deceleration is a structural 2026 headwind regardless of conflict resolution timing.",
    "staleFlags": "Exact volume of postponed GCC deals not quantified in T1/T2 sources. PIF international allocation cut confirmed only via T2 CFR think-tank intermediary — not a PIF official press release. GCC SWF $25B Q1 deployment figure removed as T3 (Enterprise AM). Individual ADIA, Mubadala, QIA asset allocation changes not available in T1 sources.",
    "sources": [
      "https://mettisglobal.news/GCC-dollar-bond-sukuk-issuance-slows-amid-Iran-war-uncertainty-59049",
      "https://www.arabnews.com/node/2639879/amp",
      "https://www.zawya.com/en/economy/islamic-economy/gcc-sukuk-issuance-to-slow-in-2026-as-middle-east-conflict-drags-on-lktwp4z9",
      "https://www.cfr.org/articles/disappearing-gulf-capital-the-iran-war-risk-wall-street-isnt-watching",
      "https://www.fi-desk.com/us-and-middle-east-bond-issuance-separated-by-iran-war/"
    ],
    "tags": {
      "assetClass": [
        "sukuk",
        "private-capital"
      ],
      "entities": [
        "pif",
        "saudi-arabia",
        "uae",
        "sukuk",
        "adia",
        "qia"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike",
        "cable_severance",
        "ceasefire"
      ],
      "position": {
        "hormuz_closure": "loser",
        "ceasefire": "winner"
      },
      "asOf": "2026-04-30"
    }
  },
  {
    "id": "imf-program-stress-corridor",
    "title": "IMF Program Stress Corridor: $20–50B Emergency Pipeline",
    "icon": "05",
    "category": "structural",
    "confidence": "high",
    "summary": "IMF MD Georgieva estimated $20–50B in additional IMF support needed across at least 12+ countries (April 15, 2026, T1). Egypt ($8B EFF, Feb 25 reviews complete), Pakistan ($7B EFF, 3rd review May 8) and Ukraine ($8.1B EFF, Feb approved) are the largest active programs. IMF baseline 2026 growth cut to 2.5%; severe scenario 2.0%. Pakistan's GCC exposure is the most acute: 81% of fuel imports and 55% of remittances from Gulf states.",
    "trigger": "Oil price shock → energy import bill surge → current account deficit expansion → reserve drain → loss of market access → IMF emergency financing demand",
    "mechanism": "Higher import bills → reserve depletion → sovereign spread widening → market financing premium too high → countries activate IMF program or augmentation requests; IMF conditionality requires fiscal tightening even as external shock hits growth",
    "hormuz": "Pipeline grows: Morocco ($120/bbl threshold approaches IMF line), Lebanon (no program yet), sub-Saharan importers; Pakistan and Egypt program stress elevated but not breaking point",
    "strike": "Accelerated reserve drain for energy importers; IMF facing potential $50B+ demand; sovereign default risk materializes for weakest credits (Bahrain, Lebanon, Pakistan if remittances also fall)",
    "cable": "Indirect stress: if Gulf remittance infrastructure disrupted, Pakistan/Egypt/Jordan lose critical FX flows; IMF transmission via BOP deterioration",
    "ceasefire": "IMF pipeline demand stabilizes; some program augmentations become unnecessary; growth stabilizes at 2.5-3.0%; market access for EM borrowers partially restores",
    "magnitude": "IMF estimate: $20-50B additional demand; ≥12 countries (Georgieva T1). Egypt: $8B EFF + $1.3B RSF; $5.2B drawn (IMF T1). Pakistan: $7B EFF + $1B RSF; $4.8B drawn; 81% fuel from GCC; 55% remittances from GCC (IMF Pakistan CR T1). Ukraine: $8.1B EFF; $1.5B immediate. Global growth cut: 3.1%→2.5% adverse; 2.0% severe (IMF T1).",
    "beneficiaries": "IMF member countries with emergency access; Gulf bilateral creditors (Saudi oil financing for Pakistan $1.2B); IsDB $397M additional trade finance; ADB/World Bank with expanded lending mandates",
    "losers": "Energy-importing EM sovereigns forced into procyclical fiscal tightening; populations subject to subsidy removal conditionality; Lebanon (no program in place)",
    "substitution": "IMF EFF/RSF; bilateral Gulf oil financing; IsDB trade credit; ADB/IBRD/AIIB budget support; FIMA repo for eligible central banks",
    "precedent": "1997-98 Asia crisis: IMF deployed $35B to Korea, Indonesia, Thailand within 6 months. 2020 COVID: IMF deployed $250B in 6 months including 90 country programs. 2022 Sri Lanka: $2.9B EFF required after reserves collapsed to near zero.",
    "timeHorizon": "Acute IMF demand: 3-12 months. Program durations 36-48 months. Pakistan/Egypt remain in program through at least 2026-2027 per T1 staff reports.",
    "investment": "IMF program countries: credit event risk low (IMF programs de facto prevent formal default) but spread elevated. Bahrain: no IMF program + B2 negative + Moody's upgrade path blocked near-term — most acute near-term credit risk in GCC. Lebanon: non-program, no reserves — distressed restructuring risk elevated.",
    "staleFlags": "IMF's $20-50B estimate was 'preliminary' per IMF strategy chief at April Spring Meetings — actual demand may exceed. Morocco IMF line threshold at $120/bbl oil not independently confirmed from Morocco ministry. Lebanon program terms not yet agreed.",
    "sources": [
      "https://money.usnews.com/investing/news/articles/2026-04-15/imf-chief-says-12-or-more-countries-seeking-loans-to-cope-with-middle-east-war-energy-shock",
      "https://www.imf.org/-/media/files/publications/cr/2026/english/1pakea2026001.pdf",
      "https://www.imf.org/en/news/articles/2026/02/26/pr-26064-egypt-imf-completes-5th-and-6th-revs-under-ext-arrange-under-eff-and-1st-rev-under-rsa",
      "https://www.imf.org/en/news/articles/2026/03/20/tr-03192026-imf-regular-press-briefing-march-19-2026",
      "https://www.dawn.com/news/2000334"
    ],
    "tags": {
      "assetClass": [
        "sovereign-credit"
      ],
      "entities": [
        "imf",
        "egypt",
        "pakistan",
        "ukraine",
        "lebanon",
        "bahrain"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike",
        "cable_severance",
        "ceasefire"
      ],
      "position": {
        "hormuz_closure": "loser",
        "oil_strike": "loser",
        "ceasefire": "mixed"
      },
      "asOf": "2026-05-08"
    }
  },
  {
    "id": "trade-finance-letters-of-credit-freeze",
    "title": "Trade Finance: Letters of Credit Disruption",
    "icon": "06",
    "category": "structural",
    "confidence": "low",
    "summary": "The Hormuz near-closure created an unprecedented stress test for trade finance: amended bills of lading, rerouted cargoes, shifting vessel identities (sanctions-driven), and force majeure claims on energy and commodity LCs. The ICC issued emergency guidance April 20, 2026 (T1) clarifying that geopolitical disruption does not alter LC payment obligations. Qualitative disruption is confirmed; no T1/T2 aggregate volume figure for frozen or delayed LCs is available. The $2.5T trade finance gap and 60% Asia-Pacific bank disruption claims are quarantined as T3 — see Data Quality Exceptions.",
    "trigger": "Hormuz closure/constraint → rerouting to Cape of Good Hope (weeks added) → LC presentment timing breaches; vessel identity changes from sanctions → compliance exposure in correspondent banking chains",
    "mechanism": "Banks refuse or delay LC processing due to compliance uncertainty → trade finance gap widens → working capital crunch for commodity importers → physical inventory shortfalls → price spikes → sovereign reserve drain as governments subsidize",
    "hormuz": "LC disputes concentrated in Gulf-origin energy/commodity trades; force majeure claims proliferate for impacted vessel voyages; compliance costs elevated for Asia-Pacific correspondent banks",
    "strike": "Physical infrastructure destruction creates additional LC failure triggers: goods (oil, LNG, aluminum) cannot be delivered even with alternate routing — force majeure more broadly applicable",
    "cable": "Electronic presentation alternatives (ICC allows under conflict guidance) partially mitigate; SWIFT disruption would be catastrophic for LC confirmation and settlement infrastructure",
    "ceasefire": "LC backlog clears as routing normalizes; banks rebuild correspondent relationships; compliance risk recedes but ship identity normalization takes months",
    "magnitude": "Global trade finance disruption: confirmed qualitatively (ICC T1, Fitch T2). $2.5T trade finance gap: QUARANTINED — T3 source (ClearEye.ai vendor blog). 60% Asia-Pacific bank disruption: QUARANTINED — same T3 source. 84% Asia-Pacific Hormuz crude absorption: directionally consistent with EIA/IEA data but not independently verified in this dataset. LCs represent ~33% of trade finance instrument volume (industry-standard figure).",
    "beneficiaries": "Trade finance AI/compliance technology providers; Cape of Good Hope shipping routes; commodity traders able to secure alternative documentation and correspondent banks",
    "losers": "SME importers in EM (cannot meet elevated compliance thresholds); Gulf energy/commodity exporters (export LCs frozen); developing economy food importers; trade finance banks with Gulf/Hormuz-route exposure",
    "substitution": "Electronic document presentation (ICC alternatives under UCP 600); open account trading for trusted counterparties; cash prepayment; direct commodity purchasing bypassing LC chains; supply chain finance programs repricing",
    "precedent": "2020 COVID: ICC issued similar force majeure guidance; port closures created comparable LC presentment crises. 2021-22 Red Sea/Suez diversions after Houthi attacks: war risk insurance surge led to similar documentary crisis. 2012-15 Iran sanctions: LCs for Iranian oil trades collapsed to near zero.",
    "timeHorizon": "Acute LC dispute resolution: 3-6 months. Trade finance relationship rebuilding: 6-18 months.",
    "investment": "Trade finance funds and DFI-backed trade facilities benefit from elevated spreads and strong demand. Banks with clean Gulf correspondent relationships and AI compliance infrastructure outperform. Avoid exposure to sub-$1M SME trade finance portfolios in EM energy importers.",
    "staleFlags": "The $2.5T trade finance gap figure and 60% Asia-Pacific bank disruption figure are quarantined as T3 (ClearEye.ai — a compliance technology vendor blog). ICC guidance note (T1) is confirmed but provides no aggregate volume data. Do not use ClearEye.ai figures as primary evidence.",
    "sources": [
      "https://iccwbo.org/news-publications/guide/application-of-icc-trade-finance-rules-in-the-context-of-the-middle-east-conflict/",
      "https://www.fi-desk.com/us-and-middle-east-bond-issuance-separated-by-iran-war/"
    ],
    "tags": {
      "assetClass": [
        "trade-finance"
      ],
      "entities": [
        "icc",
        "hormuz",
        "red-sea"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike",
        "cable_severance",
        "ceasefire"
      ],
      "position": {
        "hormuz_closure": "loser",
        "oil_strike": "loser",
        "cable_severance": "loser",
        "ceasefire": "winner"
      },
      "asOf": "2026-04-20"
    }
  },
  {
    "id": "sanctions-secondary-risk-china-india",
    "title": "Secondary Sanctions Escalation: China Teapots, India, and Shadow Settlement",
    "icon": "07",
    "category": "structural",
    "confidence": "high",
    "summary": "OFAC GL-U waiver (Mar 20–Apr 19) authorized a ~170M barrel Iranian oil release, then lapsed. Five Chinese teapot refineries are now on the SDN list; Treasury warned banks of secondary sanctions exposure on April 28 (T1). China responded with Blocking Rules invocation (May 2). India executed the first Iranian crude purchase in 7 years ($200M, via yuan through ICICI Bank Shanghai, Reuters T2) — establishing a non-dollar precedent. Iran now charges Hormuz toll fees in yuan and digital assets (OFAC May 27, T1).",
    "trigger": "U.S. maximum-pressure 'Economic Fury' campaign → escalating OFAC designations → secondary sanctions threat to banks processing Iran-linked transactions → counterparty compliance crisis across Asian financial system",
    "mechanism": "OFAC designation of teapot refineries → correspondent bank exposure → banks cut or reduce China/Iran transaction processing → teapots seek non-dollar settlement (yuan via ICICI) → Iran demands yuan/digital toll → petrodollar marginalization risk at the margin",
    "hormuz": "Iran's leverage as toll-collector increases; yuan/digital payment infrastructure gains operational experience; secondary sanctions enforcement limited if Iran controls transit access",
    "strike": "Iranian crude production disrupted → secondary sanctions enforcement more effective (less product to sanction); global oil price spike reduces political will to enforce among Asian buyers",
    "cable": "Financial messaging disruption accelerates shift to alternative non-SWIFT rails (mBridge, CIPS); secondary sanctions harder to enforce without SWIFT visibility",
    "ceasefire": "Temporary waivers possible (GL-U precedent); sanctions architecture maintained but enforcement relaxes; yuan settlement habits partially persist among Indian/Chinese buyers",
    "magnitude": "China: ~90% of Iranian oil exports; teapots = majority (OFAC April 28, T1). FinCEN 2025 FTA: $4B oil-linked transactions via U.S. correspondents in 2024; $5B via shell companies (T1 — note: 2024 baseline, not 2026 conflict-period data). India: $200M cargo; first Iranian crude in 7 years (Reuters Apr 17, T2). GL-U: ~170M bbl authorized (RFE/RL, T2). Kharg Island revenue loss: $170M/day attributed to Bessent/Reuters (T2, unverified by T1 satellite/JODI data).",
    "beneficiaries": "Non-sanctioned oil exporters (benefit from Iranian supply constraint); U.S. sanctions compliance industry; alternative rail providers (CIPS, mBridge infrastructure); distressed debt buyers targeting sanctioned-entity assets",
    "losers": "China teapot refineries (SDN designation); Chinese banks with U.S. dollar clearing exposure (compliance dilemma from Blocking Rules vs. OFAC); India's IOC/Reliance (compliance risk post-waiver); shadow fleet operators (vessel blockings)",
    "substitution": "Yuan settlement via ICICI Bank Shanghai; rupee-rial clearing (Iran-India); CIPS for China-Iran-denominated transactions; stablecoin/digital asset (USDZ and variants); hawala for small-value informal settlement",
    "precedent": "2012-15 maximum pressure: Iran disconnected from SWIFT; India and China developed workaround settlement. 2022 Russia sanctions: SPFS, yuan settlement with India/China normalized. 2025 Russia sanctions on shadow fleet: discounts widened, Russia built up oil-at-sea glut.",
    "timeHorizon": "OFAC designation pressure: ongoing; Chinese Blocking Rules: multi-year legal standoff. India yuan settlement: likely episodic (post-waiver pullback). Shadow fleet financing: structural 12-24 month disruption.",
    "investment": "Banks with significant dollar clearing and heavy Asia-EM trade finance exposure face compliance costs. Compliance technology and AML/sanctions screening firms benefit. If China Blocking Rules escalate to include Hong Kong, dollar clearing of large Chinese banks faces a systemic risk event — monitor HKMA and PBoC response.",
    "staleFlags": "FinCEN $4B and $5B figures are from 2025 FTA covering 2024 activity — not 2026 conflict-period data. Kharg Island $170M/day revenue loss is Bessent attribution via Reuters/CNBC (T2), not confirmed by T1 satellite/JODI/IEA data. Indian yuan settlement via ICICI is Reuters (T2), not confirmed by ICICI or RBI officially.",
    "sources": [
      "https://home.treasury.gov/news/press-releases/sb0502",
      "https://home.treasury.gov/news/press-releases/sb0476",
      "https://home.treasury.gov/news/press-releases/sb0510",
      "https://www.fincen.gov/system/files/2026-05/FinCEN-Alert-IRGC.pdf",
      "https://www.usnews.com/news/top-news/articles/2026-04-17/exclusive-indian-refiners-pay-for-iran-oil-in-yuan-via-icici-bank-sources-say",
      "https://asiatimes.com/2026/05/china-invokes-rules-to-blunt-us-sanctions-on-teapot-refiners/",
      "https://www.rferl.org/a/iran-sanctions-waiver-us-financial-pressure/33738030.html"
    ],
    "tags": {
      "assetClass": [
        "trade-finance",
        "energy"
      ],
      "entities": [
        "ofac",
        "china",
        "india",
        "icici-bank",
        "fincen",
        "hormuz",
        "iran",
        "cny"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike",
        "cable_severance",
        "ceasefire"
      ],
      "position": {
        "hormuz_closure": "mixed",
        "cable_severance": "mixed"
      },
      "asOf": "2026-05-27"
    }
  },
  {
    "id": "correspondent-banking-and-swift-friction",
    "title": "Correspondent Banking Friction and SWIFT Shadow Risk",
    "icon": "08",
    "category": "structural",
    "confidence": "high",
    "summary": "Iran's SWIFT exclusion predates 2026, but 2026 escalation has expanded secondary contamination risk to correspondent banks in UAE, Turkey, Iraq, Hong Kong, and Oman. FinCEN Section 311 NPRM against Zurich-based MBaer (Feb 26, confirmed via FinCEN T1 and Steptoe T2) would sever a Swiss private bank's dollar access for IRGC-linked transactions if finalized. Treasury dispatched warning letters to specific banks in China, Hong Kong, UAE, and Oman in April 2026, creating a chilling effect without formal designation.",
    "trigger": "OFAC 'Economic Fury' maximum pressure → expanding designation sweep → secondary sanctions threat to non-U.S. financial institutions processing Iranian-linked flows → correspondent banks in Gulf/Asia facing compliance vs. commercial dilemma",
    "mechanism": "FinCEN Section 311 (most severe measure: prohibits U.S. correspondent accounts) → targeted bank loses dollar access → clients of that bank lose dollar access → cascading dollar-clearing disruption through correspondent chains",
    "hormuz": "Elevated enforcement action; correspondent banks in Hormuz-adjacent jurisdictions (Oman, UAE) face maximum scrutiny; Iranian toll revenue in yuan/digital complicates compliance screening",
    "strike": "Less Iranian oil flowing → less need for sanctions-evasion infrastructure → enforcement slightly easier; but if oil price spike, enforcement motivation weakens politically",
    "cable": "Financial cable severance would impair SWIFT message flows between Gulf and global banks; operational disruption distinct from sanctions; force majeure provisions in correspondent agreements tested",
    "ceasefire": "Enforcement pressure may modulate; some banks receive waivers for legitimate humanitarian/food/energy trade; Section 311 designations typically not quickly reversed",
    "magnitude": "FinCEN 2025 FTA: $707M through U.S. correspondent accounts by Iran-linked shipping companies; $5B via shells (T1). MBaer NPRM: $100M+ through U.S. financial system (T1/T2 — NPRM stage, not finalized). Treasury warning letters to 2 unnamed Chinese banks (Bessent April 15, T2). OFAC May 2026: designated ~40 shipping firms + Hengli (largest teapot buyer) + May 27 designated 'Persian Gulf Strait Authority' (T1).",
    "beneficiaries": "U.S. compliance technology providers; non-Iranian SWIFT members (reduced competition from sanctioned entities); compliant correspondent banks gaining market share",
    "losers": "UAE/Oman banks with Iranian trade finance exposure; smaller Gulf banks without sophisticated compliance infrastructure; legitimate trade flows to Iran for humanitarian goods",
    "substitution": "Non-U.S. correspondent banks (CIPS-connected); hawala for small transactions; direct barter/offset arrangements; digital asset (stablecoin) channels for grey-zone settlement",
    "precedent": "2012: Iran SWIFT exclusion → immediate impact on oil payment settlement; Indian rupee accounts at UCO Bank absorbed Iranian payment flows. 2022: Russia's Sberbank excluded from SWIFT. 2025: MBaer (Swiss) NPRM shows no geographic safe harbor for dollar-clearing banks aiding Iran.",
    "timeHorizon": "FinCEN Section 311 action: months to years (regulatory process; MBaer still at NPRM stage). Warning letters: immediate chilling effect, 30-90 day response window. Structural shift: 2-5 years for alternative correspondent networks to develop sufficient capacity.",
    "investment": "Avoid exposure to Gulf bank equity or debt where significant Iran-linked flow exposure exists or is suspected. Banks with clean SWIFT compliance programs and AI transaction monitoring gain commercial advantage in 2026-2027.",
    "staleFlags": "Treasury warning letter recipients (Chinese banks) not publicly named. MBaer case is NPRM only — not finalized as of May 30. Kuveyt Turk mention removed from v2 — reference chain was LinkedIn (T3). Do not cite pending litigation as confirmed violation.",
    "sources": [
      "https://www.fincen.gov/system/files/2026-05/FinCEN-Alert-IRGC.pdf",
      "https://www.steptoe.com/en/news-publications/international-compliance-blog/weekly-sanctions-update-march-23-2026.html",
      "https://home.treasury.gov/news/press-releases/sb0510",
      "https://home.treasury.gov/news/press-releases/sb0502"
    ],
    "tags": {
      "assetClass": [
        "trade-finance"
      ],
      "entities": [
        "fincen",
        "ofac",
        "swift",
        "mbaer",
        "uae",
        "iran"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike",
        "cable_severance",
        "ceasefire"
      ],
      "position": {
        "cable_severance": "loser"
      },
      "asOf": "2026-05-27"
    }
  },
  {
    "id": "shadow-fleet-financing-risk",
    "title": "Shadow Fleet Financing and Insurance Risk",
    "icon": "09",
    "category": "sector",
    "confidence": "high",
    "summary": "OFAC has designated 40+ shadow fleet vessels and multiple shipping firms since the conflict began, targeting the 'Economic Fury' campaign's maritime dimension. FinCEN's 2025 FTA (T1) found Iran-linked shipping companies processed ~$707M through U.S. correspondent accounts in 2024. P&I clubs halted war-risk cover in the Persian Gulf from March 2, 2026. Iranian crude Kharg Island storage is approaching capacity as OFAC designations and blockade constrict the shadow fleet's operational range.",
    "trigger": "Conflict outbreak + OFAC maximum pressure → vessel-level sanctions on shadow fleet → P&I clubs withdraw war-risk cover → shadow tankers lose insurance → financing for shadow fleet evaporates → Iranian oil stranded",
    "mechanism": "OFAC vessel designation → ship placed on SDN → U.S. correspondent banks cannot process transactions for that vessel → ship management companies blacklisted → port access refused → cargo cannot be insured or financed → oil stranded at origin",
    "hormuz": "Shadow fleet partially stranded at Kharg Island; Iran earning toll revenue in yuan/digital but unable to repatriate through formal channels",
    "strike": "Kharg Island damage would compound shadow fleet stranding; Iranian oil export capacity structurally impaired beyond sanctions",
    "cable": "No direct transmission; shadow fleet uses non-SWIFT settlement already; but operational coordination via satellite/digital channels could be affected",
    "ceasefire": "GL-U type waivers could provide temporary shadow fleet de-risking; permanent solution requires sanctions relief or verified vessel re-flagging",
    "magnitude": "OFAC: 40+ shadow fleet vessels designated through May 2026 (OFAC T1). FinCEN 2025 FTA: $707M U.S. correspondent transactions from Iran-linked shipping (T1 — 2024 baseline data). EU: ~600 shadow vessels on port-ban list as of early 2026 (Atlantic Council, T2). GL-U: authorized ~170M bbl at-sea oil release (RFE/RL T2). Kharg Island storage near capacity → $170M/day revenue loss potential: Bessent attribution (T2, unverified by T1 satellite/JODI/IEA data).",
    "beneficiaries": "Compliant tanker owners (charter rates elevated without shadow fleet competition); VLCC owners on non-Hormuz routes; P&I clubs (reduced exposure from shadow fleet); sanctions enforcement industry",
    "losers": "Shadow fleet operators (SDN designation, vessel blocking); Iranian NIOC (stranded crude, storage capacity breach); Chinese teapot refiners losing Iranian supply; front companies in Hong Kong, UAE managing shadow fleet transactions",
    "substitution": "Re-flagging to non-sanctioned jurisdictions (diminishing as EU/OFAC designation lists grow); ship-to-ship transfer (off Oman/Malaysia) to launder origin; Malaysia/UAE blend mislabeling; Iranian government-financed fleet (IRISL) for partial substitution",
    "precedent": "2022-25 Russia shadow fleet: grew from ~200 to 600+ vessels; insurance clubs withdrew cover; charter rates for conventional tankers surged 200-400%. 2012-15 Iran: NITC-flagged fleet operated without P&I insurance; Greek/Asian ship owners faced sanctions risk.",
    "timeHorizon": "Acute shadow fleet operational disruption: ongoing under hormuz_closure. If ceasefire normalizes Hormuz transit, shadow fleet operations partially resume within weeks. Vessel re-flagging and ownership restructuring: 6-18 months.",
    "investment": "Conventional VLCC and MR tanker owners benefit from supply constraint and elevated charter rates. Shipping finance banks with existing shadow fleet exposure face material credit risk. P&I clubs and war-risk insurers: significant premium revenue opportunity alongside elevated claims risk.",
    "staleFlags": "Exact number of Iranian shadow fleet vessels at-sea under constraint is not T1-verified from Kpler or EIA in this report. $170M/day revenue loss from Kharg Island capacity constraint is Bessent attribution via Reuters/CNBC (T2) — not confirmed by satellite imagery or JODI/IEA production data.",
    "sources": [
      "https://home.treasury.gov/news/press-releases/sb0502",
      "https://home.treasury.gov/news/press-releases/sb0510",
      "https://www.fincen.gov/system/files/2026-05/FinCEN-Alert-IRGC.pdf",
      "https://www.atlanticcouncil.org/blogs/econographics/what-swap-gulf/"
    ],
    "tags": {
      "assetClass": [
        "shipping-freight",
        "insurance"
      ],
      "entities": [
        "ofac",
        "fincen",
        "iran",
        "ig-pi-clubs",
        "vlcc",
        "hormuz"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike",
        "cable_severance",
        "ceasefire"
      ],
      "position": {
        "hormuz_closure": "loser",
        "oil_strike": "loser",
        "ceasefire": "winner"
      },
      "asOf": "2026-05-27"
    }
  },
  {
    "id": "dollar-swap-lines-and-gulf-liquidity-backstop",
    "title": "Dollar Swap Lines, ESF Backstop, and Gulf Liquidity Architecture",
    "icon": "10",
    "category": "structural",
    "confidence": "medium",
    "summary": "Treasury Secretary Bessent confirmed April 22 that 'many Gulf allies requested swap lines' and supported providing them via the U.S. Exchange Stabilization Fund (ESF, ~$44B ceiling per Bessent's own Senate testimony, not the Fed). The Atlantic Council (T2) provides a breakdown of ESF liquid assets that is an analytical estimate, not a T1 Treasury disclosure. No executed ESF swap to any Gulf state is confirmed as of May 30, 2026. Extension to UAE/Qatar/Bahrain would be the first foreign-government ESF loan since Uruguay 2002.",
    "trigger": "Gulf oil export revenue disrupted by Hormuz constraint → dollar income gap for GCC central banks → potential disorderly sale of U.S. assets (USTs, equities) → U.S. financial stability interest in providing bridging dollar liquidity",
    "mechanism": "ESF swap → Treasury buys UAE dirham → UAE gets dollars → UAE can fulfill dollar-denominated commitments without selling USTs → prevents disorderly U.S. asset price impact; geopolitical signal of U.S. commitment to Gulf allies",
    "hormuz": "ESF swap demand highest — Gulf sovereigns face sustained dollar income gap; but ESF capacity constraint (~$44B total, existing Mexico/Argentina commitments) limits scale of relief",
    "strike": "Additional infrastructure damage → larger/longer dollar income gap → ESF runs low; Fed FOMC swap line authorization needed for larger program",
    "cable": "No direct swap line relevance except if Gulf central bank settlement infrastructure disrupted",
    "ceasefire": "Oil revenues recover → swap demand recedes → ESF/swap lines undrawn or quickly repaid (precedent: 2020 Fed swap lines fully repaid within 12 months)",
    "magnitude": "ESF ceiling: ~$44B (Bessent Senate testimony via NYT, T2 — use as primary figure). ESF breakdown $23.5B Treasuries + $19.5B FX: Atlantic Council T2 analytical estimate (not T1 Treasury disclosure). Existing ESF lines: Mexico $20B, Argentina $20B. Residual capacity for Gulf: potentially limited. Fed peak swap lines: $600B (Dec 2008). No executed Gulf ESF swap as of May 30.",
    "beneficiaries": "UAE, Qatar, Bahrain (dollar access without asset sales); U.S. (prevents disorderly UST selling; geopolitical leverage; promotes Gulf alignment); U.S. financial institutions (fewer Gulf asset sales into market)",
    "losers": "ESF capacity constrained → other potential swap line recipients may find U.S. backstop unavailable; Congressional critics (conflict of interest concerns)",
    "substitution": "Fed FOMC standing swap lines (requires approval + political will); FIMA repo (for eligible UST-holding CBs); bilateral sovereign lending between Gulf states; Gulf sovereign reserve drawdown (sufficient for Saudi/UAE/Kuwait; not for Bahrain)",
    "precedent": "2008: Fed extended swaps to ECB ($240B), BOJ ($120B), BOE ($85B), then Korea/Brazil/Mexico/Singapore ($30B each). 2020 COVID: Fed deployed $450B in peak swap line usage; fully repaid by end-2020. 2025: ESF $20B to Argentina (no Congressional approval). 2002: ESF $1.5B to Uruguay (last foreign government ESF loan pre-2025).",
    "timeHorizon": "ESF swap: 90-day term (renewable). Impact on Gulf dollar income gap: months (until Hormuz normalization restores oil revenue flows).",
    "investment": "If Fed FOMC approves Gulf swap lines under new Chair Warsh, signals direct Fed geopoliticization — structural shift for global dollar architecture. Monitor Kevin Warsh Senate confirmation hearings. ESF Gulf swap execution (if it occurs) would be a strong signal of U.S. commitment to Gulf stability, likely positive for Gulf sovereign spreads.",
    "staleFlags": "No confirmed ESF swap line to UAE or any Gulf state as of May 30, 2026 — discussions and expressions of support confirmed (T2) but no executed agreement per T1 Treasury press releases. Warsh Fed Chair appointment not yet confirmed. Atlantic Council ESF breakdown ($23.5B/$19.5B) is analytical estimate only — not T1 Treasury balance sheet data. Do not represent swap as executed or ESF breakdown as officially confirmed.",
    "sources": [
      "https://www.nytimes.com/2026/04/22/us/politics/bessent-support-emirates.html",
      "https://www.axios.com/2026/04/24/swap-line-persian-gulf",
      "https://www.atlanticcouncil.org/blogs/econographics/what-swap-gulf/"
    ],
    "tags": {
      "assetClass": [
        "fx",
        "rates"
      ],
      "entities": [
        "us-treasury",
        "fed",
        "uae",
        "qatar",
        "esf",
        "usd"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike",
        "cable_severance",
        "ceasefire"
      ],
      "position": {
        "hormuz_closure": "mixed",
        "oil_strike": "mixed"
      },
      "asOf": "2026-05-30"
    }
  }
];

export const cascade = [
  "Hormuz partial closure / oil-infrastructure strike",
  "Oil +$30–40/bbl shock → CPI inflation shock (IMF: +40bps per 10% oil rise, T1)",
  "Real-yield repricing → Fed rate-cut expectations collapse → zero cuts priced by Mar 23 (CME FedWatch)",
  "USD strengthens → EM currencies weaken (Egypt −12%, EMBI GD +35bps; IMF/SSGA T1/T2)",
  "Gulf crude export revenue interrupted → Gulf sovereign dollar income falls → UST purchases slow",
  "GCC SWF domestic redirection begins (PIF international allocation cut; CFR T2, provisional)",
  "GCC debt-capital-market issuance freezes → financing gap for Gulf corporates/governments (Fitch/Mettis T2)",
  "Ship war-risk premiums surge → Letter-of-Credit force-majeure disputes → trade-finance disruption",
  "IMF financing demand: ≥12 countries, $20–50B additional support (IMF Georgieva T1)",
  "Secondary-sanctions escalation → correspondent-banking chilling effect → shadow-fleet finance risk"
];

export const winnersLosers = [
  [
    "U.S. money-market funds",
    "Beneficiary",
    "$47.9B+ global flight to safety (Reuters/LSEG T2); ICI total $7.79T (T1)"
  ],
  [
    "U.S. reserve currency / Fed",
    "Beneficiary",
    "Dollar strengthening; swap-line geopolitical leverage"
  ],
  [
    "U.S. IG corporate bond market",
    "Beneficiary",
    "$577B YTD IG supply +25%; US issued while GCC paused (FI-Desk T2)"
  ],
  [
    "U.S. energy equity sector",
    "Beneficiary",
    "Energy-fund inflows +$1.21B week of Mar 3 (Reuters/LSEG T2)"
  ],
  [
    "U.S. defense finance desks",
    "Beneficiary",
    "GCC defense procurement elevated"
  ],
  [
    "Gold custodians / central banks",
    "Beneficiary",
    "CB net purchases 243.7t Q1 2026 (WGC T1)"
  ],
  [
    "Distressed-debt investors",
    "Beneficiary",
    "Bahrain B2 neg, Iraq Caa1, Pakistan 500bps spike (Moody's/IMF T1)"
  ],
  [
    "Global shipping (non-Gulf route)",
    "Beneficiary",
    "Cape of Good Hope diversion demand"
  ],
  [
    "Gulf net oil exporters (revenue)",
    "Mixed",
    "High revenue/bbl but volume + export routes disrupted"
  ],
  [
    "Saudi Arabia, UAE (fiscal)",
    "Mixed",
    "High reserves; breakevens met at $100+; but capex delayed"
  ],
  [
    "Energy-importing EMs (Egypt, Pakistan, Turkey, Sri Lanka)",
    "Loser",
    "Oil-bill surge; spread widening; IMF stress (IMF REO T1)"
  ],
  [
    "Bahrain, Qatar, Kuwait, Iraq",
    "Loser",
    "Hormuz-dependent; infrastructure damage; fiscal deficits"
  ],
  [
    "GCC sukuk issuers (non-IG)",
    "Loser",
    "Frozen DCM; yield widening; force-majeure sukuk risk (Fitch/Mettis T2)"
  ],
  [
    "Trade-finance banks (Gulf/Red Sea)",
    "Loser",
    "LC disputes; compliance risk; operational disruption (ICC T1)"
  ],
  [
    "Chinese teapot refiners",
    "Loser",
    "SDN designations (OFAC T1); secondary sanctions; banking friction"
  ],
  [
    "Shadow-fleet operators",
    "Loser",
    "40+ vessel blockings (OFAC T1); war-risk premium"
  ],
  [
    "Lebanon",
    "Severe loser",
    "No reserves; no IMF program; compounding humanitarian crisis (IMF T1)"
  ]
];

export const takeaways = [
  [
    "The capital-flow dichotomy is structural",
    "Private investors bought the UST safe haven while Gulf official institutions sold — a split reflecting the U.S. dual identity as energy-exporter beneficiary and reserve-currency haven. Inverts the 2014–16 oil-price pattern. Anchored: TIC March 2026 (T1)."
  ],
  [
    "Money markets are the first watershed",
    "$47.9B of global MMF inflows in a single week (Reuters/LSEG Lipper T2) confirm the instant institutional preference for dollar liquidity over duration or equity risk when a Gulf/energy shock hits."
  ],
  [
    "Sovereign-credit differentiation is extreme",
    "Saudi A+ stable / six-year-high reserves vs. Bahrain B2 negative / 147% debt-to-GDP — a wider intra-bloc spread than most investors price. Bahrain is the GCC's hidden fault line. Anchored at T1 (Fitch, Moody's, IMF)."
  ],
  [
    "The IMF $20–50B pipeline is structural, not cyclical",
    "Pakistan's 81% GCC fuel dependency and Egypt's Suez revenue loss leave them exposed regardless of ceasefire timing. IMF programs buffer the shock — they do not resolve the underlying energy exposure."
  ],
  [
    "Secondary sanctions are reshaping plumbing in real time",
    "China's Blocking Rules vs. the OFAC SDN list is a genuine legal standoff for Chinese banks; India's yuan settlement via ICICI is a proof-of-concept for non-dollar hydrocarbon settlement at scale. These persist post-conflict."
  ],
  [
    "The ESF swap line is the most-watched pending action",
    "An executed ESF swap to UAE or Qatar would be the first foreign-government ESF loan since Uruguay 2002 — the U.S. using its balance sheet as a geopolitical tool. As of May 30 it is a discussion, not a commitment (no T1 Treasury confirmation)."
  ],
  [
    "GCC SWF rebalancing is a slow but large risk for U.S. private markets",
    "The PIF 30%→20% international-allocation signal (CFR T2, provisional) is plausible; with $100B+ of annual U.S.-asset exposure at stake, even partial confirmation warrants monitoring."
  ]
];

export const nextSection = "Section 3 — Insurance, Shipping Finance & Trade Credit: war-risk premium escalation, P&I club war-clause activation and Gulf withdrawal, shipping-finance bank exposure to the shadow fleet, supply-chain finance repricing under Hormuz constraint, and VLCC charter-rate movements.";

export const methodology = "Source tiers: T1 official/institutional (IMF, U.S. Treasury TIC/OFAC, Fed, FinCEN, rating-agency primary actions, central banks); T2 press/proprietary (Reuters, Bloomberg, S&P Global, Semafor, CFR); T3 model/estimate — quarantined, never anchored. This is the v2 source-quality revision: weak/social sources removed; every headline figure carries a T1 or T2 source, and per-card data caveats flag what is provisional or unverified.";
