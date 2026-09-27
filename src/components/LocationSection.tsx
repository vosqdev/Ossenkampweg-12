import React from 'react';
import { MapPin, Navigation, CheckCircle2, AlertCircle, Compass, Zap, Trees, Building2, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface LocationSectionProps {
  onOpenContact?: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="locatie" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#F7F8F6] border-t border-[#E9E4D8]/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#557A64] mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#509799]" />
            <span>Ruimtelijke Context & Onderzoeksgebied</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2928] tracking-tight">
            Een bestaande energiepositie op een strategische plek
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1F2928]/75 leading-relaxed">
            Aan de Ossenkampweg 12 in Zeewolde ontstaat door de geplande sanering van een solitaire windturbine een bijzondere aanleiding. De bestaande fundatie en zware energieaansluiting als vertrekpunt om te onderzoeken of hier een lokaal energiesysteem kan ontstaan.
          </p>
        </div>

        {/* Spatial Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white rounded-xl p-5 border border-[#E9E4D8] shadow-xs">
            <span className="text-xs uppercase tracking-wider text-[#1F2928]/50 font-semibold block mb-1">
              Kadastrale aanduiding
            </span>
            <div className="text-lg sm:text-xl font-bold text-[#1F2928] font-display">
              Sectie A · 4532 & 4533
            </div>
            <span className="text-xs text-[#509799] mt-1 block">Gemeente Zeewolde</span>
          </div>

          <div className="bg-white rounded-xl p-5 border border-[#E9E4D8] shadow-xs">
            <span className="text-xs uppercase tracking-wider text-[#1F2928]/50 font-semibold block mb-1">
              Projectgebied
            </span>
            <div className="text-lg sm:text-xl font-bold text-[#1F2928] font-display tabular-nums">
              ca. 43.189 m²
            </div>
            <span className="text-xs text-[#557A64] mt-1 block">Indicatief onderzoeksgebied</span>
          </div>

          <div className="bg-white rounded-xl p-5 border border-[#E9E4D8] shadow-xs">
            <span className="text-xs uppercase tracking-wider text-[#1F2928]/50 font-semibold block mb-1">
              Bestaande energiepositie
            </span>
            <div className="text-lg sm:text-xl font-bold text-[#1F2928] font-display">
              10kV netaansluiting
            </div>
            <span className="text-xs text-[#99336F] mt-1 block">Behoud bestaande fundatie</span>
          </div>

          <div className="bg-white rounded-xl p-5 border border-[#E9E4D8] shadow-xs">
            <span className="text-xs uppercase tracking-wider text-[#1F2928]/50 font-semibold block mb-1">
              Ruimtelijke context
            </span>
            <div className="text-lg sm:text-xl font-bold text-[#1F2928] font-display">
              As Zeewolde-Noord
            </div>
            <span className="text-xs text-[#D97706] mt-1 block">Tussen landschap & bedrijvigheid</span>
          </div>
        </div>

        {/* Indicatieve Kaart & Luchtfoto Onderzoeksgebied */}
        <div className="mb-10 bg-white rounded-2xl border border-[#E9E4D8] p-3 sm:p-4 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-3 py-2 border-b border-[#E9E4D8] mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#509799] animate-pulse"></span>
              <span className="text-xs uppercase font-bold tracking-wider text-[#1F2928]">
                Indicatieve Kaartweergave Onderzoeksgebied
              </span>
            </div>
            <span className="text-[11px] font-semibold text-[#D97706] bg-[#D97706]/10 px-2.5 py-1 rounded-md">
              Onderzoeksrichting · Geen definitief plangebied
            </span>
          </div>

          <div className="relative rounded-xl overflow-hidden bg-[#FAF9F5] border border-[#E9E4D8]/80 flex items-center justify-center">
            <img
              src="https://www.image2url.com/r2/default/images/1790499181214-5874466b-bc9e-4b3b-9efc-ff25fb7cc61c.png"
              alt="Indicatieve kaart Ossenkampweg 12 Zeewolde met omliggende energie-infrastructuur en ruimtelijke context"
              className="w-full h-auto max-h-[640px] object-contain transition-transform duration-300 hover:scale-[1.01]"
              loading="lazy"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 px-3 pt-3 text-xs text-[#1F2928]/70">
            <span>Locatie: Ossenkampweg 12, Zeewolde (Kadastraal Sectie A, 4532 & 4533)</span>
            <span className="italic">Indicatief ontwikkelperspectief en ruimtelijke inpassing</span>
          </div>
        </div>

        {/* Spatial Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E9E4D8] shadow-xs hover:border-[#63B9BB] transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#509799]/15 flex items-center justify-center text-[#509799] mb-5">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1F2928] mb-2">Sanering & Behoud van Positie</h3>
            <p className="text-sm text-[#1F2928]/70 leading-relaxed">
              De windturbine aan de Ossenkampweg 12 wordt gesaneerd conform het regionale beleid. De reeds aanwezige ondergrondse fundatie en zware 10kV aansluiting vormen de directe aanleiding om nader te onderzoeken of deze behouden en opnieuw benut kunnen worden als fundament voor een lokaal energiesysteem.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E9E4D8] shadow-xs hover:border-[#D97706] transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#D97706]/15 flex items-center justify-center text-[#D97706] mb-5">
              <Navigation className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1F2928] mb-2">Koppeling Zeewolde-Noord</h3>
            <p className="text-sm text-[#1F2928]/70 leading-relaxed">
              De locatie bevindt zich in de nabijheid van toekomstige ruimtelijke ontwikkelingsrichtingen rondom Zeewolde-Noord. Hierdoor ontstaat op termijn de mogelijkheid om lokale energieopwek en opslag direct te koppelen aan nieuwe woon- en werkomgevingen, zonder extra transportdruk op het hoofdnet.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E9E4D8] shadow-xs hover:border-[#557A64] transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#557A64]/15 flex items-center justify-center text-[#557A64] mb-5">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1F2928] mb-2">Indicatief Onderzoeksgebied</h3>
            <p className="text-sm text-[#1F2928]/70 leading-relaxed">
              Het initiatief betreft een indicatief onderzoeksgebied en ontwikkelperspectief. Er is uitdrukkelijk géén sprake van een definitief plangebied of reeds verleende vergunning. Alle opties worden in zorgvuldig overleg met gemeente, provincie en netbeheerder verkend.
            </p>
          </div>
        </div>

        {/* Transparant proces & open verkenning */}
        <div className="bg-white rounded-2xl border border-[#E9E4D8] p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#557A64]/15 text-[#557A64] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#1F2928]">
                Transparant proces & open verkenning
              </div>
              <div className="text-xs text-[#1F2928]/70">
                Het initiatief bevindt zich in de fase van perspectiefvorming en agendering. Er is nog geen sprake van besluitvorming of vergunningaanvraag.
              </div>
            </div>
          </div>

          {onOpenContact && (
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl border border-[#1F2928] text-[#1F2928] hover:bg-[#1F2928] hover:text-white transition-colors cursor-pointer shrink-0"
            >
              <span>Neem contact op voor toelichting</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
