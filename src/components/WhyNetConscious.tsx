import React from 'react';
import { AlertTriangle, Home, Zap, Car, ShieldCheck } from 'lucide-react';

export const WhyNetConscious: React.FC = () => {
  const cards = [
    {
      number: '01',
      title: 'Netcongestie',
      subtitle: 'Fysieke begrenzing van transportcapaciteit',
      icon: AlertTriangle,
      color: '#99336F',
      text: 'Het regionale en landelijke elektriciteitsnet is steeds vaker een dwingende randvoorwaarde voor nieuwe ruimtelijke ontwikkelingen. Wachten op grootschalige netverzwaring kan jaren duren.',
      nuance: 'Kan bijdragen aan gerichtere benutting van schaarse transportcapaciteit door pieken lokaal af te vlakken.'
    },
    {
      number: '02',
      title: 'Woningbouw',
      subtitle: 'Energiezekerheid voor nieuwe wijken',
      icon: Home,
      color: '#D97706',
      text: 'Nieuwe woningen (zoals beoogd in de richting Zeewolde-Noord) vragen niet alleen om fysieke ruimte, maar ook om direct beschikbare stroom voor warmtepompen en koken.',
      nuance: 'Wordt onderzocht hoe een lokale energiepositie kan fungeren als betrouwbare bouwsteen voor toekomstige woonontwikkeling.'
    },
    {
      number: '03',
      title: 'Mobiliteit',
      subtitle: 'Toenemende elektriciteitsvraag transport',
      icon: Car,
      color: '#059669',
      text: 'De elektrificatie van personenwagens, landbouwvoertuigen en logistiek transport over corridors zoals de N305 vraagt om aanzienlijke laadinfrastructuur.',
      nuance: 'Biedt mogelijk kansen voor slim gestuurd laden tijdens uren van zon- en windovervloed, zonder het hoofdnet te verzwaren.'
    },
    {
      number: '04',
      title: 'Lokale Energie',
      subtitle: 'Efficiënte afstemming op gebiedsniveau',
      icon: Zap,
      color: '#509799',
      text: 'Door vraag, opwek en opslag lokaal met elkaar te combineren ontstaan nieuwe mogelijkheden om aanwezige vermogensruimte collectief en efficiënter te benutten.',
      nuance: 'Vormt een proeftuin om te leren hoe lokale afstemming in de praktijk juridisch, technisch en economisch werkt.'
    }
  ];

  return (
    <section id="waarom-netbewust" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F8F6] border-t border-[#E9E4D8]/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#557A64] mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#509799]" />
            <span>Maatschappelijke Opgave</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2928] tracking-tight">
            Waarom netbewust ontwikkelen?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1F2928]/75 leading-relaxed">
            De energietransitie dwingt ons anders te kijken naar ruimtelijke planning. Energie is niet langer een vanzelfsprekende nutsvoorziening die achteraf wordt aangesloten, maar een sturend principe aan de start van elk gebiedsontwerp.
          </p>
        </div>

        {/* 4 High-End Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.number}
                className="bg-white rounded-2xl border border-[#E9E4D8] p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold font-display text-[#1F2928]/40 group-hover:text-[#509799] transition-colors tabular-nums">
                      {card.number}
                    </span>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${card.color}15`, color: card.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#1F2928] tracking-tight">
                    {card.title}
                  </h3>
                  <div className="text-xs uppercase tracking-wider text-[#1F2928]/50 font-semibold mt-1">
                    {card.subtitle}
                  </div>

                  <p className="mt-4 text-sm sm:text-base text-[#1F2928]/80 leading-relaxed">
                    {card.text}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E9E4D8]/70">
                  <div className="text-xs text-[#557A64] font-medium leading-relaxed bg-[#F7F8F6] p-3 rounded-lg border border-[#E9E4D8]/60">
                    <strong className="text-[#1F2928]">Onderzoeksperspectief:</strong> {card.nuance}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Callout Note */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-[#E9E4D8] text-center text-xs text-[#1F2928]/70">
          <em>
            Opmerking: Dit concept claimt niet eigenhandig de landelijke netcongestie op te lossen, maar onderzoekt hoe lokale proeftuinen kunnen bijdragen aan het verminderen van pieken en het versnellen van gebiedsontwikkeling.
          </em>
        </div>
      </div>
    </section>
  );
};
