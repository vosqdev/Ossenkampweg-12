import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
  onOpenStatus: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onOpenStatus }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#17201F] text-white border-t border-[#E9E4D8]/20 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Footer Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Purpose (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#63B9BB]" />
              <span>OSSENKAMPWEG 12</span>
            </div>
            <div className="text-xs uppercase tracking-wider text-[#63B9BB] font-semibold">
              Zeewolde · Zuidelijk Flevoland
            </div>
            <p className="text-xs sm:text-sm text-[#E9E4D8]/75 leading-relaxed max-w-md">
              “Van bestaande energiepositie naar netbewuste gebiedsontwikkeling.”
              Een initiatief om te onderzoeken hoe het hergebruik van een vrijkomende netaansluiting kan bijdragen aan energieplanologie en lokale balans in Flevoland.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#509799] hover:bg-[#63B9BB] hover:text-[#1F2928] text-white transition-all cursor-pointer shadow-xs flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact & Afstemming (Circul8 Development B.V.)</span>
              </button>
            </div>
          </div>

          {/* Snelkoppelingen (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase font-bold tracking-wider text-[#E9E4D8]/60">
              Thema's
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#E9E4D8]/80">
              <li>
                <a href="#locatie" className="hover:text-[#63B9BB] transition-colors">
                  Locatie Zeewolde
                </a>
              </li>
              <li>
                <a href="#waarom-netbewust" className="hover:text-[#63B9BB] transition-colors">
                  Waarom Netbewust?
                </a>
              </li>
              <li>
                <a href="#planning" className="hover:text-[#63B9BB] transition-colors">
                  Ontwikkelperspectief (4 fasen)
                </a>
              </li>
              <li>
                <a href="#proeftuin" className="hover:text-[#63B9BB] transition-colors">
                  Proeftuin Zeewolde
                </a>
              </li>
              <li>
                <a href="#samenwerking" className="hover:text-[#63B9BB] transition-colors">
                  Samenwerking & Belanghebbenden
                </a>
              </li>
              <li>
                <a href="#status" className="hover:text-[#63B9BB] transition-colors">
                  Status & Transparantie
                </a>
              </li>
              <li>
                <a href="#toekomst" className="hover:text-[#63B9BB] transition-colors">
                  Toekomstperspectief & Simulatie
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#63B9BB] transition-colors">
                  Veelgestelde Vragen (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Locatie & Technische Gegevens (Col 4) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs uppercase font-bold tracking-wider text-[#E9E4D8]/60">
              Locatiegegevens
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs text-[#E9E4D8]/80">
              <div className="flex justify-between">
                <span className="text-[#E9E4D8]/50">Adres:</span>
                <span className="font-semibold text-white">Ossenkampweg 12, Zeewolde</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#E9E4D8]/50">Gemeente:</span>
                <span>Zeewolde (Flevoland)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#E9E4D8]/50">Projectomvang:</span>
                <span className="tabular-nums">ca. 43.189 m²</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#E9E4D8]/50">Netstatus:</span>
                <span className="text-[#63B9BB] font-semibold">10kV Netaansluiting</span>
              </div>
            </div>

            <button
              onClick={onOpenStatus}
              className="w-full text-center py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-[#63B9BB] border border-white/10 transition-colors cursor-pointer"
            >
              Huidige formele status bekijken →
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E9E4D8]/50 gap-4">
          <p>© {new Date().getFullYear()} Ossenkampweg 12 Zeewolde. Informatiewebsite ten behoeve van verkennend ontwerpend onderzoek.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#E9E4D8]/70 hover:text-white transition-colors cursor-pointer"
            >
              <span>Naar boven</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
