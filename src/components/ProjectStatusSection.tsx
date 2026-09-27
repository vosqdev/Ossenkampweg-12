import React from 'react';
import { STATUS_STEPS } from '../data/projectData';
import { Activity, CheckCircle2, Clock, CircleDot, AlertOctagon, ShieldAlert } from 'lucide-react';

export const ProjectStatusSection: React.FC = () => {
  return (
    <section id="status" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E9E4D8]/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#509799] mb-3">
            <Activity className="w-3.5 h-3.5 text-[#509799]" />
            <span>Transparantie & Besluitvormingsfase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2928] tracking-tight">
            Waar staat het initiatief nu?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1F2928]/75 leading-relaxed">
            Om misverstanden te voorkomen is volledige openheid essentieel: er is op dit moment géén vergunning aangevraagd of verleend en géén definitief besluit genomen. Het initiatief bevindt zich in de verkennende dialoogfase.
          </p>
        </div>

        {/* Prominent Formal Disclaimer Callout Box */}
        <div className="mb-12 p-5 sm:p-6 rounded-2xl bg-[#99336F]/5 border border-[#99336F]/30 flex flex-col sm:flex-row items-start gap-4">
          <ShieldAlert className="w-6 h-6 text-[#99336F] shrink-0 mt-0.5" />
          <div>
            <h3 className="text-base font-bold text-[#1F2928]">
              Formele Toelichting & Project Status
            </h3>
            <p className="text-xs sm:text-sm text-[#1F2928]/80 mt-1 leading-relaxed">
              De gemeente Zeewolde, provincie Flevoland en netbeheerder Liander hebben <strong>geen definitief besluit</strong> genomen over dit initiatief. Het ontwikkelperspectief is sinds begin 2026 gedeeld met zowel ambtelijke als bestuurlijke lagen en belanghebbenden; sinds april 2026 loopt er een aanvraag voor een tijdelijke ontheffing ten behoeve van ontwerpend onderzoek.
            </p>
          </div>
        </div>

        {/* 6-Step Horizontal Progress Bar & Cards */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {STATUS_STEPS.map((step) => {
              const isCompleted = step.state === 'completed';
              const isInProgress = step.state === 'in_progress';
              const isPlanned = step.state === 'planned';
              const isPending = step.state === 'pending';

              return (
                <div
                  key={step.step}
                  className={`rounded-2xl border p-6 flex flex-col justify-between transition-all ${
                    isInProgress
                      ? 'bg-white border-[#509799] ring-2 ring-[#509799]/20 shadow-md'
                      : isCompleted
                      ? 'bg-[#F7F8F6] border-[#557A64]/40'
                      : 'bg-white/70 border-[#E9E4D8] opacity-80'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#1F2928]/40">
                        STAP {step.step} VAN 6
                      </span>

                      {isCompleted && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#557A64]/10 text-[#557A64]">
                          <CheckCircle2 className="w-3 h-3" />
                          Voltooid
                        </span>
                      )}

                      {isInProgress && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-[#509799] text-white animate-pulse">
                          <CircleDot className="w-3 h-3" />
                          Huidige fase
                        </span>
                      )}

                      {isPlanned && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#D97706]/10 text-[#D97706]">
                          <Clock className="w-3 h-3" />
                          Voorgenomen
                        </span>
                      )}

                      {isPending && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md bg-[#E9E4D8]/60 text-[#1F2928]/60">
                          Nog te starten
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg font-bold text-[#1F2928] tracking-tight">
                      {step.title}
                    </h4>

                    <div className="text-xs font-semibold text-[#509799] mt-1">
                      Status: {step.statusText}
                    </div>

                    <p className="mt-3 text-xs sm:text-sm text-[#1F2928]/75 leading-relaxed">
                      {step.explanation}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#E9E4D8]/60 text-[11px] text-[#1F2928]/50">
                    {isInProgress
                      ? 'In overleg met Gemeente & Provincie'
                      : isCompleted
                      ? 'Inhoudelijke basis gelegd'
                      : 'Geen formele toezegging'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
