import React from 'react';
import {
  Users,
  Landmark,
  Droplets,
  Building2,
  Zap,
  Leaf,
  MessageSquare,
  Compass
} from 'lucide-react';

interface StakeholdersSectionProps {
  onOpenContact: () => void;
}

export const StakeholdersSection: React.FC<StakeholdersSectionProps> = ({ onOpenContact }) => {
  const stakeholderGroups = [
    {
      id: 'overheid',
      icon: Landmark,
      badge: 'Regie & Kaders',
      title: 'Overheid & Beleidsmakers',
      color: '#509799',
      description:
        'Gemeenten, provincies en landelijke instanties bepalen het afwegingskader beleid en verstrekken vergunningen.',
      focalPoints: ['Afwegingskaders & visievorming', 'Ruimtelijke ordening', 'Vergunningverlening'],
    },
    {
      id: 'waterschappen',
      icon: Droplets,
      badge: 'Fysieke Leefomgeving',
      title: 'Waterschappen & Grondeigenaren',
      color: '#557A64',
      description:
        'Zij hebben direct invloed op de ontwikkeling en hun draagvlak is essentieel voor succes.',
      focalPoints: ['Waterbeheer & polderpeil', 'Bodemgesteldheid', 'Draagvlak & grondeigendom'],
    },
    {
      id: 'engineers',
      icon: Building2,
      badge: 'Realisatie & Kansen',
      title: 'Engineers & Investeerders',
      color: '#1F2928',
      description:
        'Zij financieren en realiseren de integrale ontwikkeling waaronder infrastructuur voor duurzame energie maar ook de bebouwde omgeving zij benutten koppelkansen.',
      focalPoints: ['Infrastructuur duurzame energie', 'Bebouwde omgeving', 'Financiering & koppelkansen'],
    },
    {
      id: 'netbeheerders',
      icon: Zap,
      badge: 'Systeem & Balans',
      title: 'Netbeheerders & Energiebedrijven',
      color: '#99336F',
      description:
        'Zorgen voor aansluiting op het energienet en afname van de opgewekte energie.',
      focalPoints: ['Netcapaciteit & congestiebeheer', 'Aansluitovereenkomsten', 'Lokale afname & balancering'],
    },
    {
      id: 'belangengroepen',
      icon: Leaf,
      badge: 'Ecologie & Coöperaties',
      title: 'Belangengroepen',
      color: '#557A64',
      description:
        'De ecologische impact en stimuleren natuurinclusieve inpassing, maar ook opschaling en sanering o.a. energie corporatie trekkersveld, windpark Zeewolde (certificaat houders).',
      focalPoints: ['Natuurinclusieve inpassing', 'Energie Corporatie Trekkersveld', 'Windpark Zeewolde (certificaathouders)'],
    },
  ];

  return (
    <section id="samenwerking" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#F7F8F6] border-t border-[#E9E4D8]/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#557A64] mb-3">
              <Users className="w-3.5 h-3.5 text-[#509799]" />
              <span>Integrale Stakeholderstructuur</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2928] tracking-tight">
              Een gebiedssysteem maak je samen
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#1F2928] font-semibold leading-relaxed">
              Bij een integrale ontwikkeling spelen verschillende stakeholders een cruciale rol.
            </p>
            <p className="mt-2 text-sm text-[#1F2928]/75 leading-relaxed">
              “De volgende stap is geen definitief ontwerp, maar gezamenlijk ontwerpend onderzoek.” 
              Alleen wanneer kaders, techniek, bodem, netwerk en gemeenschap elkaar versterken ontstaat een toekomstbestendig ecosysteem.
            </p>
          </div>

          {/* Right Column: Compact Stakeholder Graphic */}
          <div className="lg:col-span-5 xl:col-span-4 flex justify-start lg:justify-end">
            <div className="bg-white rounded-2xl border border-[#E9E4D8] p-3 sm:p-3.5 shadow-xs max-w-xs sm:max-w-sm w-full">
              <div className="relative rounded-xl overflow-hidden bg-[#FAF9F5] border border-[#E9E4D8]/80 flex items-center justify-center p-2">
                <img
                  src="https://www.image2url.com/r2/default/images/1790499239869-e264857c-a883-4ad6-b914-cf6929d64084.png"
                  alt="Integrale samenwerking en gebiedsontwikkeling"
                  className="w-full h-auto max-h-48 sm:max-h-56 object-contain transition-transform duration-300 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Visual + Stakeholder Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: Stakeholder Architecture Diagram / Image */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="bg-white rounded-2xl border border-[#E9E4D8] p-3 shadow-xs overflow-hidden">
              <div className="relative rounded-xl overflow-hidden bg-[#E9E4D8]/40 border border-[#E9E4D8]">
                <img
                  src="https://www.image2url.com/r2/default/images/1790499051814-72080cc0-0510-4b7c-b7f8-dfcc2811a22d.png"
                  alt="Stakeholders en samenhang bij integrale gebiedsontwikkeling"
                  className="w-full h-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="px-3 pt-3 pb-1 flex items-center justify-between text-xs text-[#1F2928]/60">
                <span className="font-semibold text-[#1F2928]">Samenhang in het gebied</span>
                <span className="italic">Integrale samenwerking</span>
              </div>
            </div>

            {/* Quick Callout Box */}
            <div className="bg-[#E9E4D8]/30 rounded-2xl p-6 border border-[#E9E4D8]/80 text-[#1F2928]">
              <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[#509799] mb-2">
                <Compass className="w-4 h-4 text-[#509799]" />
                <span>Gezamenlijk Ontwerpend Onderzoek</span>
              </div>
              <p className="text-xs text-[#1F2928]/80 leading-relaxed mb-4">
                Wilt u als overheid, netbeheerder, ondernemer, grondeigenaar of maatschappelijke partner meedenken in de verkennende dialoog rond Ossenkampweg 12?
              </p>
              <button
                onClick={onOpenContact}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-[#1F2928] hover:bg-[#509799] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Deelnemen aan het onderzoek</span>
              </button>
            </div>
          </div>

          {/* Right Column: 5 Stakeholder Cards */}
          <div className="lg:col-span-7 space-y-3.5">
            {stakeholderGroups.map((group, idx) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.id}
                  className="bg-white rounded-2xl border border-[#E9E4D8] p-5 sm:p-6 transition-all duration-200 hover:border-[#509799] hover:shadow-xs group"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                      style={{
                        backgroundColor: `${group.color}15`,
                        color: group.color,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-[#1F2928]/40">
                            0{idx + 1}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-[#1F2928]">
                            {group.title}
                          </h3>
                        </div>
                        <span
                          className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md"
                          style={{
                            backgroundColor: `${group.color}15`,
                            color: group.color,
                          }}
                        >
                          {group.badge}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#1F2928]/85 leading-relaxed font-normal">
                        {group.description}
                      </p>

                      {/* Focal points tags */}
                      <div className="mt-3 flex flex-wrap gap-1.5 pt-2 border-t border-[#E9E4D8]/60">
                        {group.focalPoints.map((point) => (
                          <span
                            key={point}
                            className="inline-flex items-center gap-1 text-[11px] font-medium text-[#1F2928]/70 bg-[#F7F8F6] px-2 py-0.5 rounded border border-[#E9E4D8]/60"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#509799]"></span>
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
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
