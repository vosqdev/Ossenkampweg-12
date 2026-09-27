import React from 'react';
import { ArrowDown, Sparkles, MapPin, Zap, Layers, Activity } from 'lucide-react';

interface HeroProps {
  onOpenStatus: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenStatus }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#F7F8F6]">
      {/* Background Image with Architectural Filter & Tint Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="https://www.image2url.com/r2/default/images/1790498636979-8da7d6f5-c487-47c8-80be-24a31b6030d9.png"
          alt="Luchtopname landschap Ossenkampweg 12 Zeewolde"
          className="w-full h-full object-cover object-center filter saturate-[0.8] contrast-[1.08] brightness-[1.02] transform scale-[1.02]"
        />
        {/* Editorial architectural gradient overlay for optimal typography contrast and Flevoland atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F8F6]/92 via-[#F7F8F6]/80 to-[#F7F8F6]/95 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-[#509799]/6 mix-blend-multiply" />
      </div>

      {/* Subtle Animated Energy Lines & Cadastral Geometry Overlaid on Landscape */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="polderGridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#63B9BB" stopOpacity="0.12" />
              <stop offset="60%" stopColor="#557A64" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#E9E4D8" stopOpacity="0.2" />
            </linearGradient>

            <linearGradient id="energyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#63B9BB" />
              <stop offset="50%" stopColor="#509799" />
              <stop offset="100%" stopColor="#99336F" />
            </linearGradient>

            <pattern id="cadastralGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#E9E4D8" strokeWidth="0.8" strokeOpacity="0.7" />
            </pattern>
          </defs>

          {/* Flevoland cadastral grid background */}
          <rect width="1440" height="900" fill="url(#cadastralGrid)" />

          {/* Diagonal Polder Canals and Parcel Axes meeting at the corner */}
          <line x1="-100" y1="480" x2="1540" y2="280" stroke="#557A64" strokeWidth="1.2" strokeOpacity="0.2" />
          <line x1="760" y1="188" x2="245" y2="708" stroke="#509799" strokeWidth="1.2" strokeOpacity="0.3" strokeDasharray="6 6" />
          <line x1="760" y1="188" x2="1285" y2="713" stroke="#509799" strokeWidth="1.2" strokeOpacity="0.3" strokeDasharray="6 6" />
          <line x1="180" y1="920" x2="1100" y2="-50" stroke="#509799" strokeWidth="1.2" strokeOpacity="0.2" strokeDasharray="8 8" />

          {/* Animated Energy Transmission Line routed via the energy node */}
          <path
            d="M 120,680 C 320,520 540,280 760,188 S 1120,240 1380,270"
            stroke="url(#energyGrad)"
            strokeWidth="2.5"
            fill="none"
            className="animate-energy-flow"
          />

          <path
            d="M 80,300 C 320,260 560,200 760,188 S 1180,380 1420,540"
            stroke="#63B9BB"
            strokeWidth="1.8"
            strokeOpacity="0.4"
            fill="none"
            className="animate-energy-flow-reverse"
          />

          {/* Geometric focal node (Energie Knooppunt) placed at the apex of the perpendicular lines */}
          <circle cx="760" cy="188" r="16" fill="#63B9BB" fillOpacity="0.25" className="animate-pulse-glow" />
          <circle cx="760" cy="188" r="7" fill="#509799" />
          <circle cx="760" cy="188" r="34" stroke="#509799" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.55" />
          <circle cx="760" cy="188" r="50" stroke="#63B9BB" strokeWidth="0.8" strokeDasharray="5 5" strokeOpacity="0.25" />

          {/* Zeewolde North vector indicator */}
          <circle cx="1120" cy="380" r="5" fill="#D97706" fillOpacity="0.8" />
          <circle cx="1120" cy="380" r="18" stroke="#D97706" strokeWidth="0.8" strokeDasharray="4 4" strokeOpacity="0.4" />
        </svg>
      </div>

      {/* Top quiet classification pill-free metadata */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#1F2928]/70 font-medium">
          <span className="text-[#509799] font-semibold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#509799]" />
            Verkennend Ontwikkelperspectief
          </span>
          <span aria-hidden="true" className="text-[#1F2928]/30">·</span>
          <span>Gemeente Zeewolde</span>
          <span aria-hidden="true" className="text-[#1F2928]/30">·</span>
          <span>Zuidelijk Flevoland</span>
          <span aria-hidden="true" className="text-[#1F2928]/30">·</span>
          <span className="text-[#99336F] font-medium">Energieplanologie & Proeftuin</span>
        </div>
      </div>

      {/* Main Hero Statement */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <div className="inline-block text-xs uppercase tracking-widest text-[#557A64] font-bold mb-3">
              Positionering & Onderzoeksrichting
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1F2928] tracking-tight leading-[1.08] text-balance">
              Ossenkampweg 12
              <span className="block text-[#509799] mt-1 font-display">Zeewolde</span>
            </h1>

            <p className="mt-4 text-xl sm:text-2xl text-[#1F2928]/90 font-medium leading-snug">
              Een proeftuin voor netbewuste gebiedsontwikkeling
            </p>

            <p className="mt-6 text-base sm:text-lg text-[#1F2928]/75 leading-relaxed max-w-3xl">
              Hoe kunnen we een bestaande energiepositie benutten om ruimte te creëren voor wonen, werken en mobiliteit zonder het elektriciteitsnet onnodig verder te belasten?
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#planning"
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#1F2928] hover:bg-[#509799] rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer inline-flex items-center gap-2"
              >
                <span>Ontdek het ontwikkelperspectief</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#locatie"
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-[#1F2928] bg-white border border-[#E9E4D8] hover:border-[#63B9BB] hover:bg-[#F4F1EB] rounded-xl transition-all shadow-xs cursor-pointer inline-flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#509799]" />
                <span>Bekijk de locatie</span>
              </a>

              <button
                onClick={onOpenStatus}
                className="px-4 py-3.5 text-xs sm:text-sm font-medium text-[#1F2928]/80 hover:text-[#509799] underline underline-offset-4 cursor-pointer"
              >
                Bekijk formele toelichting & projectstatus
              </button>
            </div>
          </div>

          {/* Right Column: Visual Spatial Summary Card */}
          <div className="lg:col-span-4">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-[#E9E4D8] p-6 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#63B9BB]/20 to-transparent rounded-bl-full pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-[#E9E4D8]">
                <span className="text-xs uppercase font-bold tracking-wider text-[#1F2928]/60">Kerngegeven</span>
                <span className="text-xs font-semibold text-[#509799]">Zeewolde-Noord as</span>
              </div>

              <div className="mt-4 space-y-3.5 text-xs sm:text-sm text-[#1F2928]/85">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[#1F2928]/60">Locatie</span>
                  <span className="font-semibold text-right text-[#1F2928]">Ossenkampweg 12, Zeewolde</span>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[#1F2928]/60">Oppervlakte</span>
                  <span className="font-medium text-right tabular-nums">ca. 43.189 m²</span>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[#1F2928]/60">Huidige status</span>
                  <span className="font-medium text-right text-[#557A64]">Sanering windturbine</span>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[#1F2928]/60">Onderzoeksfocus</span>
                  <span className="font-semibold text-right text-[#509799]">Behoud aansluiting & fundatie</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#E9E4D8] bg-[#F4F1EB]/60 -mx-6 -mb-6 p-4 rounded-b-2xl">
                <p className="text-xs text-[#1F2928]/70 leading-relaxed italic">
                  “Van bestaande energiepositie naar netbewuste gebiedsontwikkeling.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Formula Banner */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-[#E9E4D8] p-4 sm:p-5 shadow-xs">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#557A64] mb-3 text-center sm:text-left">
            Het Principe van Netbewuste Gebiedsontwikkeling
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-[#1F2928]">
            <div className="flex items-center gap-2 p-2 bg-[#F7F8F6] rounded-lg border border-[#E9E4D8] w-full md:w-auto justify-center">
              <Zap className="w-4 h-4 text-[#63B9BB]" />
              <span>Lokale Opwek</span>
            </div>

            <span className="text-[#509799] font-bold text-lg hidden md:inline">+</span>

            <div className="flex items-center gap-2 p-2 bg-[#F7F8F6] rounded-lg border border-[#E9E4D8] w-full md:w-auto justify-center">
              <Layers className="w-4 h-4 text-[#557A64]" />
              <span>Opslag</span>
            </div>

            <span className="text-[#509799] font-bold text-lg hidden md:inline">+</span>

            <div className="flex items-center gap-2 p-2 bg-[#F7F8F6] rounded-lg border border-[#E9E4D8] w-full md:w-auto justify-center">
              <Activity className="w-4 h-4 text-[#D97706]" />
              <span>Lokaal Verbruik</span>
            </div>

            <span className="text-[#509799] font-bold text-lg hidden md:inline">+</span>

            <div className="flex items-center gap-2 p-2 bg-[#F7F8F6] rounded-lg border border-[#E9E4D8] w-full md:w-auto justify-center">
              <Sparkles className="w-4 h-4 text-[#509799]" />
              <span>Slimme Sturing</span>
            </div>

            <span className="text-[#99336F] font-bold text-lg hidden md:inline">=</span>

            <div className="flex items-center gap-2 p-2 px-3 bg-[#509799]/10 text-[#1F2928] rounded-lg border border-[#509799]/30 w-full md:w-auto justify-center font-bold">
              <span className="text-[#99336F]">Minder belasting openbaar elektriciteitsnet</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
