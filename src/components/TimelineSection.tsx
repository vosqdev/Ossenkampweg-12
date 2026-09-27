import React, { useState } from 'react';
import { TIMELINE_PHASES } from '../data/projectData';
import { Clock, Calendar, CheckCircle2, ChevronRight, Info } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  return (
    <section id="planning" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#F7F8F6] border-t border-[#E9E4D8]/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#557A64] mb-3">
            <Clock className="w-3.5 h-3.5 text-[#509799]" />
            <span>Fasering & Doorkijk (2025 – 2035+)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2928] tracking-tight">
            Ontwikkelperspectief
          </h2>
          <p className="mt-2 text-sm uppercase tracking-wider text-[#99336F] font-bold">
            Uitdrukkelijk geen definitieve planning
          </p>
          <p className="mt-4 text-base sm:text-lg text-[#1F2928]/75 leading-relaxed">
            De transformatie van een vrijkomende windturbinelocatie naar een volwaardig gebiedssysteem verloopt in logische, zorgvuldige stappen. Elke volgende stap is afhankelijk van de uitkomsten van voorgaand ontwerpend onderzoek.
          </p>
        </div>

        {/* Horizontal Timeline Navigation Bar */}
        <div className="mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TIMELINE_PHASES.map((phase, idx) => {
              const isSelected = selectedPhase === idx;
              return (
                <button
                  key={phase.number}
                  onClick={() => setSelectedPhase(idx)}
                  className={`text-left p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-[#509799] shadow-md ring-2 ring-[#509799]/20'
                      : 'bg-white/70 border-[#E9E4D8] hover:bg-white hover:border-[#1F2928]/30 shadow-xs'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold font-mono tracking-wider text-[#509799]">
                        FASE {phase.number}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-[#F7F8F6] text-[#1F2928]/70 border border-[#E9E4D8]">
                        {phase.period}
                      </span>
                    </div>
                    <div className="text-base font-bold text-[#1F2928] leading-tight">
                      {phase.title}
                    </div>
                    <div className="text-xs text-[#557A64] mt-1 font-medium">
                      {phase.focus}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E9E4D8]/60 flex items-center justify-between text-xs">
                    <span className="text-[#1F2928]/50">{phase.statusLabel}</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'text-[#509799] translate-x-1' : 'text-[#1F2928]/30'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Phase In-Depth Drawer / Card */}
        <div className="bg-white rounded-2xl border border-[#E9E4D8] p-7 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#E9E4D8]">
            <div>
              <div className="text-xs uppercase font-bold tracking-wider text-[#509799] mb-1">
                Fase {TIMELINE_PHASES[selectedPhase].number} · {TIMELINE_PHASES[selectedPhase].period}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1F2928]">
                {TIMELINE_PHASES[selectedPhase].title}
              </h3>
              <p className="text-sm text-[#557A64] font-medium mt-1">
                Hoofddoel: {TIMELINE_PHASES[selectedPhase].focus}
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F7F8F6] border border-[#E9E4D8] text-xs font-semibold text-[#1F2928]/80">
              <Calendar className="w-3.5 h-3.5 text-[#509799]" />
              <span>Indicatieve tijdshorizon: {TIMELINE_PHASES[selectedPhase].period}</span>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#1F2928]/60 mb-4">
              Onderzoeks- & Realisatiecomponenten van deze fase:
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {TIMELINE_PHASES[selectedPhase].items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#F7F8F6] border border-[#E9E4D8]"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#509799] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#1F2928] leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Required Prominent Bottom Disclaimer */}
        <div className="mt-8 p-5 rounded-2xl bg-white border border-[#E9E4D8] flex items-start gap-3.5 shadow-xs">
          <Info className="w-5 h-5 text-[#509799] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-[#1F2928]/80 leading-relaxed italic">
            “De genoemde fasering is indicatief en vormt een ontwikkelperspectief. Uitwerking is afhankelijk van onderzoek, samenwerking, technische haalbaarheid en ruimtelijke en bestuurlijke besluitvorming.”
          </p>
        </div>
      </div>
    </section>
  );
};
