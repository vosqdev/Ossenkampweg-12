import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Maximize2,
  X,
  Trees,
  Zap,
  Droplets,
  Footprints,
  Users,
  Home,
  CheckCircle2,
  ZoomIn
} from 'lucide-react';

export const FuturePerspective: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };
    if (isLightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isLightboxOpen]);

  const inspirationThemes = [
    {
      id: 'wonen',
      title: 'Natuurinclusief wonen',
      icon: Home,
      color: 'bg-[#99336F]/20 text-[#E880B8] border-[#99336F]/30',
      description: 'Hoogwaardige woonmilieus geïntegreerd in het groen met oog voor ecologie, rust en wooncomfort.'
    },
    {
      id: 'energie',
      title: 'Duurzame energie',
      icon: Zap,
      color: 'bg-[#0284C7]/20 text-[#60A5FA] border-[#0284C7]/30',
      description: 'Benutting van de intacte 10kV netaansluiting als intelligente energiehub met lokale buffering.'
    },
    {
      id: 'water',
      title: 'Waterberging & biodiversiteit',
      icon: Droplets,
      color: 'bg-[#059669]/20 text-[#34D399] border-[#059669]/30',
      description: 'Robuuste watergangen, wadi’s en wetlandzones voor klimaatadaptatie en flora & fauna.'
    },
    {
      id: 'landschap',
      title: 'Landschappelijke inpassing',
      icon: Trees,
      color: 'bg-[#10B981]/20 text-[#6EE7B7] border-[#10B981]/30',
      description: 'Harmonieuze overgang tussen het Flevolandse polderlandschap, de dorpsrand en het Wolderwijd.'
    },
    {
      id: 'recreatie',
      title: 'Wandel- en recreatief',
      icon: Footprints,
      color: 'bg-[#F59E0B]/20 text-[#FCD34D] border-[#F59E0B]/30',
      description: 'Dooraderde padenstructuur voor wandelaars en fietsers langs de wateras en naar het recreatieve buitengebied.'
    },
    {
      id: 'gemeenschap',
      title: 'Gemeenschap & ontmoeten',
      icon: Users,
      color: 'bg-[#BE185D]/20 text-[#F472B6] border-[#BE185D]/30',
      description: 'Collectieve ontmoetingsplekken en gedeelde publieke ruimtes die sociale samenhang versterken.'
    }
  ];

  const imageSrc = '/assets/aistudio/ossenkampweg_eindbeeld_3bf9c45f.png';

  return (
    <section id="toekomst" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#1F2928] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#63B9BB]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#99336F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#63B9BB] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#63B9BB]" />
            <span>Toekomstperspectief</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Van energielocatie naar een nieuwe leefomgeving
          </h2>

          <p className="mt-4 text-lg sm:text-xl text-[#63B9BB] font-medium font-display leading-relaxed">
            “Niet één installatie, maar een mogelijke bouwsteen voor de ontwikkeling van Zeewolde van morgen.”
          </p>

          <p className="mt-4 text-base sm:text-lg text-[#E9E4D8]/85 leading-relaxed">
            Ossenkampweg 12 als intelligente schakel in een ecosysteem, zie afbeelding ter inspiratie.
          </p>
        </div>

        {/* Masterplan Inspiration Visual Showcase */}
        <div className="bg-[#17201F] rounded-3xl border border-white/15 p-4 sm:p-6 lg:p-8 shadow-2xl relative overflow-hidden mb-10">
          {/* Top metadata toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#63B9BB] animate-pulse" />
              <span className="text-xs uppercase font-bold tracking-wider text-white">
                Inspiratie Ossenkampweg · Gebiedsvisie
              </span>
              <span className="hidden sm:inline-block text-xs text-[#E9E4D8]/50">
                · Zeewolde-Noord as
              </span>
            </div>

            <button
              onClick={() => setIsLightboxOpen(true)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-[#63B9BB] text-white hover:text-[#1F2928] text-xs font-semibold transition-all cursor-pointer border border-white/15 hover:border-transparent"
              title="Bekijk de afbeelding schermvullend"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Vergroot afbeelding</span>
            </button>
          </div>

          {/* Masterplan Image Display Container */}
          <div
            onClick={() => setIsLightboxOpen(true)}
            className="group relative rounded-2xl overflow-hidden bg-[#101716] border border-white/10 shadow-lg cursor-zoom-in transition-all duration-300 hover:border-[#63B9BB]/50"
          >
            <img
              src={imageSrc}
              alt="Inspiratie Ossenkampweg - Van energielocatie naar een nieuwe leefomgeving"
              className="w-full h-auto object-cover max-h-[720px] transition-transform duration-500 group-hover:scale-[1.01]"
              loading="lazy"
            />

            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1F2928]/90 text-white border border-white/20 backdrop-blur-md text-xs font-bold shadow-xl">
                <ZoomIn className="w-4 h-4 text-[#63B9BB]" />
                Klik om de inspiratiekaart schermvullend te openen
              </span>
            </div>
          </div>

          {/* Masterplan Core Principles Grid */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="text-xs uppercase font-bold tracking-wider text-[#63B9BB] mb-4">
              Pijlers van de leefomgeving (zie legenda inspiratiekaart):
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {inspirationThemes.map((theme) => {
                const IconComponent = theme.icon;
                return (
                  <div
                    key={theme.id}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all flex items-start gap-3"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${theme.color}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        {theme.title}
                      </h4>
                      <p className="text-[11px] text-[#E9E4D8]/75 mt-0.5 leading-relaxed">
                        {theme.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Ossenkampweg initiatief Manifesto Card */}
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-white/5 to-[#63B9BB]/5 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-[#63B9BB]/15 text-[#63B9BB] flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-wide">
                  Ossenkampweg initiatief
                </h4>
                <p className="text-xs sm:text-sm text-[#E9E4D8]/85 mt-1 leading-relaxed max-w-4xl">
                  Het creëren van een multimodale en toekomstbestendige leefomgeving: een voorbeeld waarin wonen, natuur, gemeenschap, energie en gezondheid hand in hand gaan. Een ontwikkeling die aansluit bij de principes van een nieuwe leefomgeving: <strong>circulair, klimaat- en energiepositief</strong>.
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsLightboxOpen(true)}
              className="shrink-0 text-xs font-semibold text-[#63B9BB] hover:text-white underline underline-offset-4 cursor-pointer"
            >
              Bekijk details op kaart
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col p-4 sm:p-6"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/20 text-white">
            <div className="flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-[#63B9BB]" />
              <h3 className="text-sm font-bold truncate">
                Inspiratie Ossenkampweg · Van energielocatie naar een nieuwe leefomgeving
              </h3>
            </div>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
              aria-label="Sluit venster"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div
            className="flex-1 overflow-auto flex items-center justify-center p-2 sm:p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <img
              src={imageSrc}
              alt="Inspiratie Ossenkampweg groot"
              className="max-h-[85vh] max-w-full w-auto h-auto object-contain rounded-xl shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <div className="pt-3 text-center text-xs text-[#E9E4D8]/70 border-t border-white/10">
            Druk op <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono">Esc</kbd> of klik buiten de afbeelding om te sluiten
          </div>
        </div>
      )}
    </section>
  );
};
