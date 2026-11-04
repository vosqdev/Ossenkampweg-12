import React, { useState } from 'react';
import {
  SANERING_TIMELINE_EVENTS,
  SaneringMilestone
} from '../data/saneringTimelineData';
import {
  Calendar,
  Clock,
  FileText,
  Send,
  Building2,
  Landmark,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  Wrench,
  ExternalLink,
  Filter,
  Sparkles,
  Milestone,
  ArrowRight
} from 'lucide-react';

interface SaneringTimelineProps {
  onOpenContact?: () => void;
}

export const SaneringTimeline: React.FC<SaneringTimelineProps> = ({ onOpenContact }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | '2025' | '2026' | 'sanering'>('all');

  const filteredEvents = SANERING_TIMELINE_EVENTS.filter((event) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === '2025') return event.year === '2025';
    if (activeFilter === '2026') return event.year === '2026' && event.category !== 'sanering' && event.category !== 'deadline';
    if (activeFilter === 'sanering') return event.category === 'sanering' || event.category === 'deadline';
    return true;
  });

  const getCategoryStyles = (category: SaneringMilestone['category'], isUrgent?: boolean) => {
    if (isUrgent) {
      return {
        badgeBg: 'bg-rose-50 text-rose-700 border-rose-200',
        nodeBg: 'bg-rose-600 text-white ring-4 ring-rose-100',
        cardBorder: 'border-rose-300 bg-rose-50/30',
        icon: AlertTriangle
      };
    }
    switch (category) {
      case 'visie':
        return {
          badgeBg: 'bg-teal-50 text-[#509799] border-teal-200',
          nodeBg: 'bg-[#509799] text-white ring-4 ring-[#509799]/15',
          cardBorder: 'border-[#E9E4D8] bg-white',
          icon: Sparkles
        };
      case 'bestuur':
        return {
          badgeBg: 'bg-sky-50 text-sky-700 border-sky-200',
          nodeBg: 'bg-sky-700 text-white ring-4 ring-sky-100',
          cardBorder: 'border-sky-200/80 bg-white',
          icon: Landmark
        };
      case 'provincie':
        return {
          badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
          nodeBg: 'bg-purple-700 text-white ring-4 ring-purple-100',
          cardBorder: 'border-purple-200/80 bg-white',
          icon: Building2
        };
      case 'sanering':
        return {
          badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
          nodeBg: 'bg-emerald-700 text-white ring-4 ring-emerald-100',
          cardBorder: 'border-emerald-200 bg-emerald-50/20',
          icon: Wrench
        };
      case 'deadline':
        return {
          badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
          nodeBg: 'bg-amber-600 text-white ring-4 ring-amber-100',
          cardBorder: 'border-amber-300 bg-amber-50/30',
          icon: Clock
        };
      default:
        return {
          badgeBg: 'bg-gray-100 text-gray-700 border-gray-200',
          nodeBg: 'bg-[#1F2928] text-white ring-4 ring-gray-100',
          cardBorder: 'border-[#E9E4D8] bg-white',
          icon: Milestone
        };
    }
  };

  return (
    <section id="sanering-proces" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E9E4D8]/80 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#509799]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#557A64]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#509799] mb-3">
            <Milestone className="w-3.5 h-3.5 text-[#509799]" />
            <span>Proces & Besluitvorming · 2025 – 2026</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2928] tracking-tight leading-tight">
            Proces- & Saneringstijdlijn
          </h2>

          <p className="mt-3 text-lg sm:text-xl text-[#557A64] font-medium leading-relaxed">
            Van planvisie, bestuurlijke verzoeken en provinciaal overleg tot fysieke sanering en de peildatum van 1 december 2026.
          </p>
        </div>

        {/* Quick KPI Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-10">
          <div className="p-4 rounded-2xl bg-[#F7F8F6] border border-[#E9E4D8] flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-100/70 text-[#509799] flex items-center justify-center shrink-0 font-bold">
              14
            </div>
            <div>
              <div className="text-xs text-[#1F2928]/60 font-semibold uppercase">Mijlpalen</div>
              <div className="text-sm font-bold text-[#1F2928]">2025 – dec 2026</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#F7F8F6] border border-[#E9E4D8] flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100/70 text-sky-700 flex items-center justify-center shrink-0">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-[#1F2928]/60 font-semibold uppercase">Bestuurslagen</div>
              <div className="text-sm font-bold text-[#1F2928]">Zeewolde & Flevoland</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#F7F8F6] border border-[#E9E4D8] flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-700 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-[#1F2928]/60 font-semibold uppercase">Bovenbouw gesloopt</div>
              <div className="text-sm font-bold text-[#1F2928]">Netpositie behouden</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-rose-700 font-semibold uppercase">Peildatum</div>
              <div className="text-sm font-bold text-rose-950">1 december 2026</div>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-10 pb-6 border-b border-[#E9E4D8]">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#509799]" />
            <span className="text-xs uppercase font-bold tracking-wider text-[#1F2928]">
              Filter op periode:
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#1F2928] text-white shadow-xs'
                  : 'bg-[#F7F8F6] text-[#1F2928]/70 hover:bg-[#E9E4D8] hover:text-[#1F2928]'
              }`}
            >
              Alle stappen (14)
            </button>
            <button
              onClick={() => setActiveFilter('2025')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === '2025'
                  ? 'bg-[#509799] text-white shadow-xs'
                  : 'bg-[#F7F8F6] text-[#1F2928]/70 hover:bg-[#E9E4D8] hover:text-[#1F2928]'
              }`}
            >
              2025: Visievorming (2)
            </button>
            <button
              onClick={() => setActiveFilter('2026')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === '2026'
                  ? 'bg-sky-700 text-white shadow-xs'
                  : 'bg-[#F7F8F6] text-[#1F2928]/70 hover:bg-[#E9E4D8] hover:text-[#1F2928]'
              }`}
            >
              2026: Bestuurlijk proces (9)
            </button>
            <button
              onClick={() => setActiveFilter('sanering')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'sanering'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-[#F7F8F6] text-[#1F2928]/70 hover:bg-[#E9E4D8] hover:text-[#1F2928]'
              }`}
            >
              Najaar 2026: Sanering & Deadline (3)
            </button>
          </div>
        </div>

        {/* Visual Timeline Stream */}
        <div className="relative">
          {/* Continuous vertical timeline track line */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-1 bg-gradient-to-b from-[#509799]/40 via-sky-300 via-emerald-300 to-rose-400 rounded-full" />

          <div className="space-y-6 md:space-y-8">
            {filteredEvents.map((event, idx) => {
              const styles = getCategoryStyles(event.category, event.isUrgent);
              const IconComp = styles.icon;

              return (
                <div
                  key={event.id}
                  className={`relative md:pl-24 transition-all duration-300 ${
                    event.highlight ? 'scale-[1.005]' : ''
                  }`}
                >
                  {/* Timeline Node on the rail */}
                  <div className="hidden md:flex absolute left-4 top-5 -translate-x-1/2 w-9 h-9 rounded-full items-center justify-center shadow-md z-10 transition-transform hover:scale-110">
                    <div className={`w-full h-full rounded-full flex items-center justify-center ${styles.nodeBg}`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Milestone Card */}
                  <div
                    className={`rounded-2xl border p-5 sm:p-6 shadow-xs hover:shadow-md transition-all ${styles.cardBorder}`}
                  >
                    {/* Header Row: Date, Category badge, Action button */}
                    <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3 border-b border-[#E9E4D8]/70">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#1F2928] bg-[#F7F8F6] px-2.5 py-1 rounded-lg border border-[#E9E4D8]">
                          <Calendar className="w-3.5 h-3.5 text-[#509799]" />
                          {event.date}
                        </span>

                        <span
                          className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${styles.badgeBg}`}
                        >
                          {event.badge}
                        </span>

                        {event.isUrgent && (
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-rose-600 text-white animate-pulse">
                            URGENT
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Milestone Title */}
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#1F2928] mt-3">
                      {event.title}
                    </h3>

                    {/* Milestone Description */}
                    <p className="mt-2 text-sm sm:text-base text-[#1F2928]/80 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Context note and/or Link */}
                    {(event.note || event.link) && (
                      <div className="mt-4 pt-3 border-t border-[#E9E4D8]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                        {event.note && (
                          <div className="flex items-center gap-2 text-[#557A64] font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#509799]" />
                            <span>{event.note}</span>
                          </div>
                        )}

                        {event.link && (
                          <a
                            href={event.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 text-sky-800 hover:bg-sky-100 font-bold border border-sky-200 transition-colors shrink-0"
                          >
                            <FileText className="w-3.5 h-3.5 text-sky-600" />
                            <span>{event.link.label}</span>
                            <ExternalLink className="w-3 h-3 ml-0.5 text-sky-600" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing Conclusion / Call to Action Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#F7F8F6] border border-[#E9E4D8] shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#509799]/15 text-[#509799] flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#1F2928]">
                Bovengronds gesaneerd · Focus op bestuurlijke borging vóór 1 december 2026
              </h4>
              <p className="text-xs sm:text-sm text-[#1F2928]/75 mt-1 leading-relaxed max-w-3xl">
                De turbine is tijdig gedemonteerd. De komende periode is cruciaal om samen met gemeente en provincie de achterblijvende 10kV netaansluiting planologisch te verankeren, zodat kostbare energiecapaciteit in tijden van netcongestie behouden blijft voor Flevoland en Zeewolde.
              </p>
            </div>
          </div>

          {onOpenContact && (
            <button
              onClick={onOpenContact}
              className="shrink-0 px-5 py-3 rounded-xl bg-[#1F2928] hover:bg-[#509799] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm cursor-pointer flex items-center gap-2"
            >
              <span>Vraag procesdossier op</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
