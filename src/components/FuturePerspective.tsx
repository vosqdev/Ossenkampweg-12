import React, { useState } from 'react';
import { EnergyScenario } from '../types';
import {
  Sun,
  Wind,
  Battery,
  Home,
  Building,
  Car,
  Droplets,
  Zap,
  Play,
  Pause,
  ArrowRight,
  Info,
  Sliders
} from 'lucide-react';

export const FuturePerspective: React.FC = () => {
  const [scenario, setScenario] = useState<EnergyScenario>('day');
  const [activeHighlight, setActiveHighlight] = useState<string | null>(null);

  const scenarioDetails = {
    day: {
      title: 'Scenario 1: Zonnige Middag (Zonpiek & Opslag)',
      description: 'Zonne-opwek piekt. De lokale energiehub leidt overschotten direct naar de batterij, bedrijvigheid en het EV-laadplein. Geen ongewenste teruglevering aan het overbelaste hoogspanningsnet.',
      solarFlow: 'high',
      windFlow: 'moderate',
      batteryMode: 'charge',
      gridFlow: 'minimal',
      housingDemand: 'normal',
      businessDemand: 'high',
      evDemand: 'high'
    },
    evening: {
      title: 'Scenario 2: Avondpiek (Wonen & Mobiliteit)',
      description: 'Huishoudens koken en verwarmen; elektrische auto’s pluggen in. De modulaire batterij ontlaadt stroom lokaal. Het openbare net wordt niet belast door deze avondpiek.',
      solarFlow: 'zero',
      windFlow: 'moderate',
      batteryMode: 'discharge',
      gridFlow: 'minimal',
      housingDemand: 'high',
      businessDemand: 'low',
      evDemand: 'high'
    },
    night: {
      title: 'Scenario 3: Winderige Nacht (Lokaal Windprofiel)',
      description: 'Lokale windopwek produceert gestaag. Het nachtelijke basistarief wordt benut om batterijen vol te laden en warmtebuffers op te bouwen voor de ochtendpiek.',
      solarFlow: 'zero',
      windFlow: 'high',
      batteryMode: 'charge',
      gridFlow: 'minimal',
      housingDemand: 'low',
      businessDemand: 'low',
      evDemand: 'moderate'
    },
    grid_buffer: {
      title: 'Scenario 4: Donker & Windstil (Gerichte Netafstemming)',
      description: 'Wanneer zon en wind minimaal zijn, zorgt de energiehub voor gecontroleerde uitwisseling met het regionale net binnen overeengekomen daluren, ondersteund door opgeslagen reserves.',
      solarFlow: 'zero',
      windFlow: 'low',
      batteryMode: 'discharge',
      gridFlow: 'moderate',
      housingDemand: 'normal',
      businessDemand: 'normal',
      evDemand: 'low'
    }
  };

  const currentSc = scenarioDetails[scenario];

  return (
    <section id="toekomst" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#1F2928] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#63B9BB]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#99336F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#63B9BB] mb-3">
            <Zap className="w-3.5 h-3.5 text-[#63B9BB]" />
            <span>Toekomstperspectief & Simulatie</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Van energielocatie naar energiesysteem
          </h2>
          <p className="mt-3 text-lg sm:text-xl text-[#63B9BB] font-medium font-display">
            “Niet één installatie, maar een mogelijke bouwsteen voor de ontwikkeling van Zeewolde van morgen.”
          </p>
          <p className="mt-4 text-sm sm:text-base text-[#E9E4D8]/80 leading-relaxed">
            De lokale energiehub als intelligente schakel in een dynamisch ecosysteem. Bekijk hieronder hoe energie in verschillende weers- en gebruiksscenario’s lokaal circuleert.
          </p>
        </div>

        {/* Scenario Controls Bar */}
        <div className="mb-8 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs uppercase font-bold tracking-wider text-[#E9E4D8]/70 px-2">
            Kies een leefscenario:
          </span>

          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            <button
              onClick={() => setScenario('day')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                scenario === 'day'
                  ? 'bg-[#63B9BB] text-[#1F2928] shadow-md font-bold'
                  : 'bg-white/5 text-white hover:bg-white/15'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>Middag Zonpiek</span>
            </button>

            <button
              onClick={() => setScenario('evening')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                scenario === 'evening'
                  ? 'bg-[#D97706] text-white shadow-md font-bold'
                  : 'bg-white/5 text-white hover:bg-white/15'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>Avondpiek Wijken</span>
            </button>

            <button
              onClick={() => setScenario('night')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                scenario === 'night'
                  ? 'bg-[#509799] text-white shadow-md font-bold'
                  : 'bg-white/5 text-white hover:bg-white/15'
              }`}
            >
              <Wind className="w-3.5 h-3.5" />
              <span>Winderige Nacht</span>
            </button>

            <button
              onClick={() => setScenario('grid_buffer')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                scenario === 'grid_buffer'
                  ? 'bg-[#99336F] text-white shadow-md font-bold'
                  : 'bg-white/5 text-white hover:bg-white/15'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Donker & Luwte (Netbuffer)</span>
            </button>
          </div>
        </div>

        {/* Visual Animated Ecosystem Simulation Canvas */}
        <div className="bg-[#17201F] rounded-3xl border border-white/15 p-6 lg:p-8 shadow-2xl relative overflow-hidden mb-8">
          {/* Active scenario description banner */}
          <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <div>
              <div className="text-xs uppercase font-bold tracking-wider text-[#63B9BB]">
                Actieve Simulatie
              </div>
              <div className="text-base font-bold text-white mt-0.5">
                {currentSc.title}
              </div>
              <p className="text-xs text-[#E9E4D8]/80 mt-1 max-w-3xl leading-relaxed">
                {currentSc.description}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2 text-xs bg-[#1F2928] px-3 py-1.5 rounded-lg border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#63B9BB] animate-ping" />
              <span>Realtime simulatie actief</span>
            </div>
          </div>

          {/* SVG Complex Flow Ecosystem Diagram */}
          <div className="relative w-full aspect-16/10 sm:aspect-16/9 mx-auto">
            <svg viewBox="0 0 1000 580" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="neonTurquoise" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#63B9BB" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#63B9BB" />
                </linearGradient>

                <linearGradient id="neonOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D97706" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
              </defs>

              {/* Surrounding Ring: Regionaal Net (Liander / TenneT) */}
              <circle
                cx="500"
                cy="290"
                r="265"
                stroke="#99336F"
                strokeWidth="2"
                strokeDasharray="8 8"
                strokeOpacity={scenario === 'grid_buffer' ? '1' : '0.4'}
                className={scenario === 'grid_buffer' ? 'animate-energy-flow' : ''}
              />

              {/* Regional Grid Outpost Badge */}
              <g
                className="cursor-pointer"
                onMouseEnter={() => setActiveHighlight('grid')}
                onMouseLeave={() => setActiveHighlight(null)}
              >
                <rect x="400" y="8" width="200" height="34" rx="8" fill="#1F2928" stroke="#99336F" strokeWidth="1.5" />
                <text x="500" y="29" textAnchor="middle" fill="#E9E4D8" fontSize="10" fontWeight="800">
                  REGIONAAL ELEKTRICITEITSNET (Liander / TenneT)
                </text>
              </g>

              {/* Transmission link between Center Hub and Regional Grid */}
              <line
                x1="500"
                y1="190"
                x2="500"
                y2="42"
                stroke="#99336F"
                strokeWidth={scenario === 'grid_buffer' ? '3' : '1.5'}
                strokeDasharray={scenario === 'grid_buffer' ? '6 6' : '3 3'}
                className={scenario === 'grid_buffer' ? 'animate-energy-flow' : ''}
                strokeOpacity={scenario === 'grid_buffer' ? '1' : '0.35'}
              />

              {/* ================= FLOW LINES TO NODES ================= */}

              {/* Line 1: Wind (Top Left: 200, 110) */}
              <path
                d="M 500,290 L 220,120"
                stroke="#63B9BB"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className={currentSc.windFlow === 'high' ? 'animate-energy-flow' : ''}
                strokeOpacity={currentSc.windFlow === 'low' ? '0.25' : '0.9'}
              />

              {/* Line 2: Zon (Top Right: 800, 110) */}
              <path
                d="M 500,290 L 780,120"
                stroke="#F59E0B"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className={currentSc.solarFlow === 'high' ? 'animate-energy-flow' : ''}
                strokeOpacity={currentSc.solarFlow === 'zero' ? '0.2' : '0.9'}
              />

              {/* Line 3: Batterij (Center Left: 140, 290) - Bidirectional */}
              <path
                d="M 500,290 L 170,290"
                stroke="#557A64"
                strokeWidth="3"
                strokeDasharray="6 6"
                className={currentSc.batteryMode === 'charge' ? 'animate-energy-flow-reverse' : 'animate-energy-flow'}
              />

              {/* Line 4: Bedrijven (Center Right: 860, 290) */}
              <path
                d="M 500,290 L 830,290"
                stroke="#63B9BB"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className={currentSc.businessDemand === 'high' ? 'animate-energy-flow' : ''}
              />

              {/* Line 5: Woningen (Bottom Left: 240, 460) */}
              <path
                d="M 500,290 L 260,450"
                stroke="#D97706"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className={currentSc.housingDemand === 'high' ? 'animate-energy-flow' : ''}
              />

              {/* Line 6: EV-Laadplein (Bottom Center: 500, 490) */}
              <path
                d="M 500,290 L 500,470"
                stroke="#059669"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className={currentSc.evDemand === 'high' ? 'animate-energy-flow' : ''}
              />

              {/* Line 7: Mogelijk Waterstof / Long Duration (Bottom Right: 760, 460) */}
              <path
                d="M 500,290 L 740,450"
                stroke="#509799"
                strokeWidth="1.8"
                strokeDasharray="4 6"
                strokeOpacity="0.4"
              />

              {/* ================= NODES ================= */}

              {/* 1. NODE: WIND */}
              <g
                className="cursor-pointer"
                onMouseEnter={() => setActiveHighlight('wind')}
                onMouseLeave={() => setActiveHighlight(null)}
              >
                <circle cx="220" cy="120" r="46" fill="#1F2928" stroke="#63B9BB" strokeWidth="2" />
                <text x="220" y="115" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">WIND</text>
                <text x="220" y="130" textAnchor="middle" fill="#63B9BB" fontSize="8" fontWeight="600">→ Lokaal Net</text>
              </g>

              {/* 2. NODE: ZON */}
              <g
                className="cursor-pointer"
                onMouseEnter={() => setActiveHighlight('zon')}
                onMouseLeave={() => setActiveHighlight(null)}
              >
                <circle cx="780" cy="120" r="46" fill="#1F2928" stroke="#F59E0B" strokeWidth="2" />
                <text x="780" y="115" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">ZON</text>
                <text x="780" y="130" textAnchor="middle" fill="#F59E0B" fontSize="8" fontWeight="600">→ Lokaal Net</text>
              </g>

              {/* 3. NODE: BATTERIJ (BESS) */}
              <g
                className="cursor-pointer"
                onMouseEnter={() => setActiveHighlight('batterij')}
                onMouseLeave={() => setActiveHighlight(null)}
              >
                <circle cx="170" cy="290" r="50" fill="#1F2928" stroke="#557A64" strokeWidth="2.5" />
                <text x="170" y="285" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">BATTERIJ</text>
                <text x="170" y="300" textAnchor="middle" fill="#557A64" fontSize="8" fontWeight="600">
                  {currentSc.batteryMode === 'charge' ? '⚡ Laadt op' : '⚡ Ontlaadt'}
                </text>
                <text x="170" y="312" textAnchor="middle" fill="#E9E4D8" fillOpacity="0.6" fontSize="7">↔ Lokaal Net</text>
              </g>

              {/* 4. NODE: BEDRIJVEN */}
              <g
                className="cursor-pointer"
                onMouseEnter={() => setActiveHighlight('bedrijven')}
                onMouseLeave={() => setActiveHighlight(null)}
              >
                <circle cx="830" cy="290" r="50" fill="#1F2928" stroke="#63B9BB" strokeWidth="2" />
                <text x="830" y="285" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">BEDRIJVEN</text>
                <text x="830" y="300" textAnchor="middle" fill="#63B9BB" fontSize="8" fontWeight="600">Agri & Horsterparc</text>
                <text x="830" y="312" textAnchor="middle" fill="#E9E4D8" fillOpacity="0.6" fontSize="7">↔ Lokaal Net</text>
              </g>

              {/* 5. NODE: WONINGEN */}
              <g
                className="cursor-pointer"
                onMouseEnter={() => setActiveHighlight('woningen')}
                onMouseLeave={() => setActiveHighlight(null)}
              >
                <circle cx="260" cy="450" r="48" fill="#1F2928" stroke="#D97706" strokeWidth="2" />
                <text x="260" y="445" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">WONINGEN</text>
                <text x="260" y="459" textAnchor="middle" fill="#D97706" fontSize="8" fontWeight="600">Zeewolde-Noord</text>
                <text x="260" y="471" textAnchor="middle" fill="#E9E4D8" fillOpacity="0.6" fontSize="7">↔ Lokaal Net</text>
              </g>

              {/* 6. NODE: EV-LAADPLEIN */}
              <g
                className="cursor-pointer"
                onMouseEnter={() => setActiveHighlight('ev')}
                onMouseLeave={() => setActiveHighlight(null)}
              >
                <circle cx="500" cy="470" r="46" fill="#1F2928" stroke="#059669" strokeWidth="2" />
                <text x="500" y="465" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">EV-LAADPLEIN</text>
                <text x="500" y="480" textAnchor="middle" fill="#059669" fontSize="8" fontWeight="600">Mobiliteit N305</text>
                <text x="500" y="492" textAnchor="middle" fill="#E9E4D8" fillOpacity="0.6" fontSize="7">↔ Lokaal Net</text>
              </g>

              {/* 7. NODE: MOGELIJK WATERSTOF */}
              <g
                className="cursor-pointer"
                onMouseEnter={() => setActiveHighlight('waterstof')}
                onMouseLeave={() => setActiveHighlight(null)}
              >
                <circle cx="740" cy="450" r="46" fill="#1F2928" stroke="#509799" strokeWidth="1.8" strokeDasharray="3 3" />
                <text x="740" y="443" textAnchor="middle" fill="#E9E4D8" fontSize="10" fontWeight="700">MOGELIJK H₂</text>
                <text x="740" y="457" textAnchor="middle" fill="#509799" fontSize="8" fontWeight="500">Moleculaire opslag</text>
                <text x="740" y="470" textAnchor="middle" fill="#E9E4D8" fillOpacity="0.5" fontSize="7">2030+ perspectief</text>
              </g>

              {/* ================= CENTER INTELLIGENT HUB ================= */}
              <g
                className="cursor-pointer"
                onMouseEnter={() => setActiveHighlight('hub')}
                onMouseLeave={() => setActiveHighlight(null)}
              >
                <circle cx="500" cy="290" r="95" fill="#121A19" stroke="#63B9BB" strokeWidth="3" className="drop-shadow-2xl" />
                <circle cx="500" cy="290" r="105" stroke="#63B9BB" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse-glow" />

                <text x="500" y="270" textAnchor="middle" fill="#63B9BB" fontSize="10" fontWeight="800" letterSpacing="1">
                  INTELLIGENTE SCHAKEL
                </text>
                <text x="500" y="292" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="800">
                  LOKALE ENERGIEHUB
                </text>
                <text x="500" y="310" textAnchor="middle" fill="#E9E4D8" fontSize="9" fontWeight="600">
                  Ossenkampweg 12 · Zeewolde
                </text>
                <text x="500" y="324" textAnchor="middle" fill="#557A64" fontSize="8" fontWeight="500">
                  (Geen centrale, maar sturend platform)
                </text>
              </g>
            </svg>
          </div>

          {/* Bottom Clarification Bar */}
          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E9E4D8]/70 gap-3">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#63B9BB]" />
              <strong>Pijlindicaties:</strong> Groen/turquoise = lokale stroomkring. Magenta = selectieve buffer met openbaar net.
            </span>
            <span className="text-[#63B9BB] font-medium">
              Lokaal balanceren heeft te allen tijde voorrang
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
