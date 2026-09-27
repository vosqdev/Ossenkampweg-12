import React from 'react';
import { X, Building2, MapPin, Mail, ExternalLink, ShieldCheck } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#E9E4D8] shadow-2xl relative"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#1F2928]/60 hover:text-[#1F2928] hover:bg-[#F7F8F6] transition-colors cursor-pointer"
          aria-label="Sluiten"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-8 mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#509799] mb-1">
            <Building2 className="w-3.5 h-3.5" />
            <span>Contact & Initiatiefnemer</span>
          </div>
          <h3 className="text-2xl font-extrabold text-[#1F2928] tracking-tight">
            Circul8 Development B.V.
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-[#1F2928]/70 leading-relaxed">
            Initiatiefnemer en procesbegeleiding voor het verkennend ontwerpend onderzoek rondom Ossenkampweg 12, Zeewolde.
          </p>
        </div>

        {/* Contact details card */}
        <div className="space-y-3 mb-6">
          <div className="p-4 rounded-2xl bg-[#F7F8F6] border border-[#E9E4D8] flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#509799]/15 text-[#509799] flex items-center justify-center shrink-0 mt-0.5">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider font-bold text-[#1F2928]/50">
                Organisatie
              </div>
              <div className="text-sm font-bold text-[#1F2928]">
                Circul8 Development B.V.
              </div>
              <div className="text-xs text-[#1F2928]/70">
                Duurzame gebieds- en energieontwikkeling
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#F7F8F6] border border-[#E9E4D8] flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#557A64]/15 text-[#557A64] flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider font-bold text-[#1F2928]/50">
                Vestiging
              </div>
              <div className="text-sm font-bold text-[#1F2928]">
                Lelystad, Flevoland
              </div>
              <div className="text-xs text-[#1F2928]/70">
                Nederland
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#F7F8F6] border border-[#E9E4D8] flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#63B9BB]/20 text-[#509799] flex items-center justify-center shrink-0 mt-0.5">
              <Mail className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="text-[11px] uppercase tracking-wider font-bold text-[#1F2928]/50">
                Contact & Afstemming
              </div>
              <a
                href="mailto:pvos@c8.nl"
                className="text-sm font-bold text-[#509799] hover:underline"
              >
                pvos@c8.nl
              </a>
              <div className="text-xs text-[#1F2928]/70">
                Voor overheden, netbeheerders, grondeigenaren en belanghebbenden
              </div>
            </div>
          </div>
        </div>

        {/* Process note */}
        <div className="p-3.5 rounded-xl bg-[#557A64]/10 border border-[#557A64]/20 flex items-center gap-2.5 text-xs text-[#1F2928]/80 mb-6">
          <ShieldCheck className="w-4 h-4 text-[#557A64] shrink-0" />
          <span>Directe dialoog in het kader van het ontwerpend onderzoek Ossenkampweg 12.</span>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href="mailto:pvos@c8.nl?subject=Ontwerpend%20Onderzoek%20Ossenkampweg%2012%20Zeewolde"
            className="w-full sm:flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#1F2928] hover:bg-[#509799] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>E-mail sturen naar pvos@c8.nl</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>

          <button
            onClick={onClose}
            className="w-full sm:w-auto py-3 px-5 rounded-xl text-xs sm:text-sm font-semibold text-[#1F2928] bg-[#F7F8F6] hover:bg-[#E9E4D8]/60 transition-colors cursor-pointer border border-[#E9E4D8]"
          >
            Sluiten
          </button>
        </div>
      </div>
    </div>
  );
};
