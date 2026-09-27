import React from 'react';
import { Shield, Microscope, TrendingUp, Lightbulb } from 'lucide-react';

export const ProofOfConceptSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      action: 'Behouden',
      badge: 'Fase 1',
      title: 'Bestaande positie koesteren',
      icon: Shield,
      color: '#509799',
      description: 'Onderzoeken of de bestaande energiepositie, ondergrondse fundatie en 10kV netaansluiting behouden kunnen blijven in plaats van verloren te gaan na de sanering van de windturbine.',
      deliverable: 'Borging van capaciteit en infrastructureel kapitaal'
    },
    {
      step: '02',
      action: 'Onderzoeken',
      badge: 'Fase 2',
      title: 'Gezamenlijk ontwerpend onderzoek',
      icon: Microscope,
      color: '#557A64',
      description: 'Samen met gemeente, provincie, netbeheerder, omwonenden en ondernemers onderzoeken wat technisch, ruimtelijk, juridisch, landschappelijk en economisch verantwoord mogelijk is.',
      deliverable: 'Integraal haalbaarheidsdossier & participatie'
    },
    {
      step: '03',
      action: 'Opschalen',
      badge: 'Fase 3 & 4',
      title: 'Kennis overdragen aan de regio',
      icon: TrendingUp,
      color: '#D97706',
      description: 'Als het concept in de praktijk blijkt te werken, onderzoeken welke specifieke elementen (energiecontracten, EMS-sturing, fundatiehergebruik) ook elders binnen gebiedsontwikkeling toepasbaar zijn.',
      deliverable: 'Opschaalbare lessen voor Zuidelijk Flevoland'
    }
  ];

  return (
    <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E9E4D8]/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#509799] mb-3">
            <Lightbulb className="w-3.5 h-3.5 text-[#509799]" />
            <span>Proof of Concept Methodiek</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2928] tracking-tight">
            Klein beginnen. Leren. Opschalen.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1F2928]/75 leading-relaxed">
            De energietransitie vraagt om tastbare proeftuinen waar theorie en praktijk elkaar ontmoeten. De Ossenkampweg 12 biedt de schaal en infrastructurele uitgangspositie om gecontroleerd te leren.
          </p>
        </div>

        {/* 3 Step Triad */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-[#F7F8F6] rounded-2xl border border-[#E9E4D8] p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-white border border-[#E9E4D8] text-[#1F2928]/70">
                      Stap {item.step}
                    </span>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${item.color}15`, color: item.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="text-xs font-bold uppercase tracking-wider text-[#509799] mb-1">
                    {item.action}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1F2928] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#1F2928]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E9E4D8]">
                  <div className="text-xs font-medium text-[#557A64]">
                    <strong>Beoogde opbrengst:</strong> {item.deliverable}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modest concluding quote banner */}
        <div className="mt-8 p-5 rounded-xl bg-[#F7F8F6] border border-[#E9E4D8] text-center">
          <p className="text-sm font-medium text-[#1F2928]/85 max-w-3xl mx-auto">
            “De locatie pretendeert niet hét voorbeeld voor heel Nederland te worden. De locatie kan echter wel concrete kennis opleveren die ook voor andere Flevolandse en nationale gebiedsontwikkelingen relevant is.”
          </p>
        </div>
      </div>
    </section>
  );
};
