import React from 'react';
import { X, ShieldAlert, CheckCircle2, Clock, CircleDot, AlertOctagon } from 'lucide-react';
import { STATUS_STEPS } from '../data/projectData';

interface StatusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StatusModal: React.FC<StatusModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-[#E9E4D8] shadow-2xl relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#1F2928]/60 hover:text-[#1F2928] hover:bg-[#F7F8F6] transition-colors cursor-pointer"
          aria-label="Sluiten"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#99336F]/10 text-[#99336F] text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Formele Toelichting & Project Status</span>
          </div>
          <h3 className="text-2xl font-extrabold text-[#1F2928] tracking-tight">
            Waar staat het initiatief nu?
          </h3>
          <p className="mt-2 text-sm text-[#1F2928]/75 leading-relaxed">
            De website mag niet de indruk wekken dat sprake is van een reeds vergund, definitief of bestuurlijk goedgekeurd project. Het betreft een ontwikkelperspectief dat sinds begin 2026 actief is gedeeld met Gemeente en Provincie (ambtelijk en bestuurlijk), waarbij sinds april 2026 een aanvraag loopt voor een tijdelijke ontheffing ten behoeve van ontwerpend onderzoek.
          </p>
        </div>

        {/* Status Steps Tracker List */}
        <div className="mt-6 space-y-3">
          {STATUS_STEPS.map((step) => {
            const isCompleted = step.state === 'completed';
            const isInProgress = step.state === 'in_progress';
            const isPlanned = step.state === 'planned';
            const isPending = step.state === 'pending';

            return (
              <div
                key={step.step}
                className={`p-4 rounded-xl border transition-all ${
                  isInProgress
                    ? 'bg-[#509799]/10 border-[#509799] ring-1 ring-[#509799]'
                    : isCompleted
                    ? 'bg-[#F7F8F6] border-[#557A64]/40'
                    : 'bg-white border-[#E9E4D8] opacity-75'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#1F2928] flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1F2928]/10 text-[#1F2928] inline-flex items-center justify-center text-[10px] font-mono">
                      {step.step}
                    </span>
                    <span>{step.title}</span>
                  </span>

                  {isCompleted && (
                    <span className="text-[11px] font-bold text-[#557A64] flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Voltooid
                    </span>
                  )}
                  {isInProgress && (
                    <span className="text-[11px] font-bold text-[#509799] flex items-center gap-1 animate-pulse">
                      <CircleDot className="w-3 h-3" />
                      Huidige fase: {step.statusText}
                    </span>
                  )}
                  {isPlanned && (
                    <span className="text-[11px] font-semibold text-[#D97706] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Voorgenomen
                    </span>
                  )}
                  {isPending && (
                    <span className="text-[11px] text-[#1F2928]/50">
                      Nog niet doorlopen
                    </span>
                  )}
                </div>

                <p className="text-xs text-[#1F2928]/80 pl-7 leading-relaxed">
                  {step.explanation}
                </p>
              </div>
            );
          })}
        </div>

        {/* Clear Safeguard Statement */}
        <div className="mt-6 p-4 rounded-xl bg-[#F4F1EB] border border-[#E9E4D8] text-xs text-[#1F2928]/80 leading-relaxed">
          <strong className="text-[#1F2928]">Kernboodschap:</strong> Het onderzoek bevindt zich in fase 2 (perspectief en agendering / overleg). Er loopt een aanvraag voor een tijdelijke ontheffing ten behoeve van ontwerpend onderzoek. Er is géén besluit genomen over definitieve realisatie.
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#1F2928] hover:bg-[#509799] transition-colors cursor-pointer"
          >
            Begrepen & venster sluiten
          </button>
        </div>
      </div>
    </div>
  );
};
