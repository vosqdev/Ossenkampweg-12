import React, { useState, useRef } from 'react';
import {
  SANERING_TIMELINE_EVENTS,
  SaneringMilestone
} from '../data/saneringTimelineData';
import {
  Compass,
  Scale,
  Send,
  FileCheck,
  Landmark,
  Presentation,
  FileText,
  Zap,
  Building2,
  Wrench,
  PlugZap,
  Megaphone,
  AlertTriangle,
  ExternalLink,
  ShieldCheck,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Milestone
} from 'lucide-react';

interface SaneringTimelineProps {
  onOpenContact?: () => void;
}

type FilterKey = 'all' | '2025' | '2026' | 'sanering';

export const SaneringTimeline: React.FC<SaneringTimelineProps> = ({ onOpenContact }) => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const [selectedId, setSelectedId] = useState<string>('vvd-nov-2026');
  const detailPanelRef = useRef<HTMLDivElement | null>(null);
  const railScrollRef = useRef<HTMLDivElement | null>(null);

  const filterEvents = (filter: FilterKey) =>
    SANERING_TIMELINE_EVENTS.filter((event) => {
      if (filter === 'all') return true;
      if (filter === '2025') return event.year === '2025';
      if (filter === '2026')
        return event.year === '2026' && event.category !== 'sanering' && event.category !== 'deadline';
      if (filter === 'sanering') return event.category === 'sanering' || event.category === 'deadline';
      return true;
    });

  const filteredEvents = filterEvents(activeFilter);
  const countAll = SANERING_TIMELINE_EVENTS.length;
  const count2025 = filterEvents('2025').length;
  const count2026 = filterEvents('2026').length;
  const countSanering = filterEvents('sanering').length;

  const activeIndex = Math.max(
    0,
    filteredEvents.findIndex((e) => e.id === selectedId)
  );
  const activeEvent = filteredEvents[activeIndex] ?? filteredEvents[0];

  const handleFilterChange = (nextFilter: FilterKey) => {
    setActiveFilter(nextFilter);
    const nextEvents = filterEvents(nextFilter);
    if (!nextEvents.some((e) => e.id === selectedId) && nextEvents.length > 0) {
      setSelectedId(nextEvents[0].id);
    }
  };

  const handleSelectNode = (eventId: string) => {
    setSelectedId(eventId);
    detailPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  const handleStep = (direction: -1 | 1) => {
    const nextIdx = activeIndex + direction;
    if (nextIdx >= 0 && nextIdx < filteredEvents.length) {
      setSelectedId(filteredEvents[nextIdx].id);
    }
  };

  const scrollRail = (direction: -1 | 1) => {
    if (!railScrollRef.current) return;
    railScrollRef.current.scrollBy({ left: direction * 260, behavior: 'smooth' });
  };

  const getIconComponent = (iconKey: SaneringMilestone['iconKey']) => {
    switch (iconKey) {
      case 'compass':
        return Compass;
      case 'scale':
        return Scale;
      case 'send':
        return Send;
      case 'fileCheck':
        return FileCheck;
      case 'mailAlert':
        return Send;
      case 'landmark':
        return Landmark;
      case 'presentation':
        return Presentation;
      case 'fileText':
        return FileText;
      case 'zap':
        return Zap;
      case 'building':
        return Building2;
      case 'wrench':
        return Wrench;
      case 'plugZap':
        return PlugZap;
      case 'megaphone':
        return Megaphone;
      case 'alert':
        return AlertTriangle;
      default:
        return Milestone;
    }
  };

  const getNodeStyle = (event: SaneringMilestone, isSelected: boolean, isPassed: boolean) => {
    if (event.isUrgent) {
      return isSelected
        ? 'bg-rose-600 border-rose-600 text-white shadow-[0_0_0_5px_rgba(225,29,72,0.16)] scale-110'
        : 'bg-rose-50 border-rose-400 text-rose-700 group-hover:bg-rose-600 group-hover:border-rose-600 group-hover:text-white group-hover:-translate-y-0.5';
    }
    if (isSelected) {
      return 'bg-[#1F2928] border-[#1F2928] text-white shadow-[0_0_0_5px_rgba(80,151,153,0.22)] scale-110';
    }
    if (event.id === 'vvd-nov-2026') {
      return 'bg-[#EFF6FB] border-[#0284C7] text-[#0369A1] group-hover:bg-[#0369A1] group-hover:border-[#0369A1] group-hover:text-white group-hover:-translate-y-0.5';
    }
    if (isPassed) {
      return 'bg-[#EEF6F6] border-[#509799] text-[#509799] group-hover:bg-[#509799] group-hover:text-white group-hover:-translate-y-0.5';
    }
    return 'bg-white border-[#D6D0C4] text-[#1F2928]/70 group-hover:border-[#509799] group-hover:text-[#509799] group-hover:-translate-y-0.5';
  };

  const n = filteredEvents.length;
  const railInsetPercent = n > 0 ? 50 / n : 0;
  const progressWidthPercent = n > 1 ? (activeIndex / n) * 100 : 0;

  const ActiveIcon = getIconComponent(activeEvent.iconKey);

  return (
    <section
      id="sanering-proces"
      className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E9E4D8]/80"
    >
      <div className="max-w-7xl mx-auto">
        {/* Compact Header + Segmented Filter Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#509799] mb-2">
              <Milestone className="w-3.5 h-3.5" />
              <span>Proces &amp; Besluitvorming · 2025 – 2026</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1F2928] tracking-tight">
              Proces- &amp; Saneringstijdlijn
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#1F2928]/70">
              Selecteer een mijlpaal op de tijdlijn voor achtergronden, status en brondocumenten.
            </p>
          </div>

          {/* Segmented Filter Controls */}
          <div
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#F7F8F6] rounded-xl border border-[#E9E4D8] self-start lg:self-auto"
            role="tablist"
            aria-label="Filter tijdlijn op periode"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'all'}
              onClick={() => handleFilterChange('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#1F2928] text-white shadow-xs'
                  : 'text-[#1F2928]/70 hover:text-[#1F2928]'
              }`}
            >
              Alle ({countAll})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === '2025'}
              onClick={() => handleFilterChange('2025')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === '2025'
                  ? 'bg-[#509799] text-white shadow-xs'
                  : 'text-[#1F2928]/70 hover:text-[#1F2928]'
              }`}
            >
              2025 ({count2025})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === '2026'}
              onClick={() => handleFilterChange('2026')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === '2026'
                  ? 'bg-[#1F2928] text-white shadow-xs'
                  : 'text-[#1F2928]/70 hover:text-[#1F2928]'
              }`}
            >
              2026 Bestuur ({count2026})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'sanering'}
              onClick={() => handleFilterChange('sanering')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === 'sanering'
                  ? 'bg-[#557A64] text-white shadow-xs'
                  : 'text-[#1F2928]/70 hover:text-[#1F2928]'
              }`}
            >
              Sanering &amp; Deadline ({countSanering})
            </button>
          </div>
        </div>

        {/* Unified Architectural Showcase Card (Single Elevation, Clean Hairline Divider) */}
        <div className="rounded-3xl border border-[#E9E4D8] bg-white shadow-[0_20px_50px_-24px_rgba(31,41,40,0.12)] overflow-hidden">
          {/* Upper Zone: Horizontal Interactive Rail */}
          <div className="bg-[#FAF9F6] px-3 sm:px-6 pt-6 pb-5 border-b border-[#E9E4D8] relative">
            {/* Mobile & tablet scroll helper bar */}
            {n > 5 && (
              <div className="flex lg:hidden items-center justify-between mb-3 px-1">
                <span className="text-[11px] font-medium text-[#1F2928]/55">
                  Veeg of scroll horizontaal langs de tijdlijn
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => scrollRail(-1)}
                    className="w-7 h-7 rounded-lg bg-white border border-[#E9E4D8] flex items-center justify-center text-[#1F2928]/70 hover:text-[#1F2928] cursor-pointer"
                    aria-label="Scroll tijdlijn naar links"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollRail(1)}
                    className="w-7 h-7 rounded-lg bg-white border border-[#E9E4D8] flex items-center justify-center text-[#1F2928]/70 hover:text-[#1F2928] cursor-pointer"
                    aria-label="Scroll tijdlijn naar rechts"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            <div
              ref={railScrollRef}
              className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <div
                className={`relative flex items-start ${
                  n > 8 ? 'min-w-[860px] lg:min-w-0' : 'min-w-[420px] sm:min-w-0'
                }`}
              >
                {/* Base horizontal track & active gradient progress */}
                {n > 1 && (
                  <>
                    <div
                      className="absolute top-[48px] -translate-y-1/2 h-[2px] bg-[#E4DED2] z-0"
                      style={{
                        left: `${railInsetPercent}%`,
                        right: `${railInsetPercent}%`
                      }}
                      aria-hidden="true"
                    />
                    <div
                      className="absolute top-[48px] -translate-y-1/2 h-[2px] bg-gradient-to-r from-[#509799] to-[#1F2928] z-0 transition-all duration-300"
                      style={{
                        left: `${railInsetPercent}%`,
                        width: `${progressWidthPercent}%`
                      }}
                      aria-hidden="true"
                    />
                  </>
                )}

                {filteredEvents.map((event, idx) => {
                  const isSelected = event.id === activeEvent.id;
                  const isPassed = idx < activeIndex;
                  const IconComp = getIconComponent(event.iconKey);

                  return (
                    <button
                      key={event.id}
                      type="button"
                      onClick={() => handleSelectNode(event.id)}
                      aria-current={isSelected ? 'step' : undefined}
                      aria-label={`${event.date}: ${event.title}`}
                      className="group relative flex-1 flex flex-col items-center text-center px-0.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#509799] cursor-pointer"
                    >
                      {/* Date above the node */}
                      <span
                        className={`h-5 flex items-center text-[10px] sm:text-[10.5px] font-mono tabular-nums tracking-tight whitespace-nowrap mb-2 transition-colors ${
                          event.isUrgent
                            ? 'text-rose-700 font-bold'
                            : isSelected
                            ? 'text-[#1F2928] font-bold'
                            : 'text-[#1F2928]/55 group-hover:text-[#1F2928]'
                        }`}
                      >
                        {event.shortDate}
                      </span>

                      {/* Solid Opaque Clickable Icon Circle sitting cleanly ON the line */}
                      <span
                        className={`relative z-10 w-10 h-10 rounded-full border-[1.5px] flex items-center justify-center transition-all duration-200 ${getNodeStyle(
                          event,
                          isSelected,
                          isPassed
                        )}`}
                      >
                        <IconComp className="w-4 h-4" />
                      </span>

                      {/* Short label below the node */}
                      <span
                        className={`mt-2.5 text-[10px] sm:text-[10.5px] leading-[1.2] px-0.5 transition-colors ${
                          isSelected
                            ? 'font-bold text-[#1F2928]'
                            : event.isUrgent
                            ? 'font-semibold text-rose-700'
                            : 'font-medium text-[#1F2928]/65 group-hover:text-[#1F2928]'
                        }`}
                      >
                        {event.shortTitle}
                      </span>

                      {/* Refined Active Anchor Bar */}
                      <span
                        className={`mt-2 w-5 h-[2px] rounded-full transition-all duration-200 ${
                          isSelected
                            ? event.isUrgent
                              ? 'bg-rose-600 opacity-100 scale-x-100'
                              : 'bg-[#509799] opacity-100 scale-x-100'
                            : 'opacity-0 scale-x-0'
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Lower Zone: Editorial Milestone Detail Stage */}
          <div
            ref={detailPanelRef}
            className="bg-white px-5 sm:px-8 py-6 sm:py-7"
            aria-live="polite"
          >
            {/* Top Metadata & Stepper Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E9E4D8]/80">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#1F2928]/65">
                <span className="font-mono tabular-nums font-bold text-[#509799]">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(filteredEvents.length).padStart(2, '0')}
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-[#1F2928]">{activeEvent.date}</span>
                <span aria-hidden="true">·</span>
                <span>{activeEvent.badge}</span>
                {activeEvent.isUrgent && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="font-bold text-rose-700 uppercase tracking-wider">
                      Urgente peildatum
                    </span>
                  </>
                )}
              </div>

              {/* Minimalist Stepper */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => handleStep(-1)}
                  disabled={activeIndex <= 0}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#E9E4D8] bg-[#FAF9F6] text-xs font-semibold text-[#1F2928] hover:border-[#1F2928]/30 hover:bg-white disabled:opacity-35 disabled:pointer-events-none transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  aria-label="Vorige mijlpaal"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Vorige</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleStep(1)}
                  disabled={activeIndex >= filteredEvents.length - 1}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#E9E4D8] bg-[#FAF9F6] text-xs font-semibold text-[#1F2928] hover:border-[#1F2928]/30 hover:bg-white disabled:opacity-35 disabled:pointer-events-none transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  aria-label="Volgende mijlpaal"
                >
                  <span>Volgende</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Editorial Content Body */}
            <div className="mt-5 flex items-start gap-4 sm:gap-5">
              <div
                className={`hidden sm:flex w-11 h-11 rounded-2xl items-center justify-center shrink-0 mt-0.5 border ${
                  activeEvent.isUrgent
                    ? 'bg-rose-50 text-rose-700 border-rose-200'
                    : 'bg-[#FAF9F6] text-[#509799] border-[#E9E4D8]'
                }`}
              >
                <ActiveIcon className="w-5 h-5" />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1F2928] tracking-tight">
                  {activeEvent.title}
                </h3>
                <p className="mt-2.5 text-[15px] sm:text-base text-[#1F2928]/80 leading-relaxed max-w-3xl">
                  {activeEvent.description}
                </p>

                {(activeEvent.note || activeEvent.link) && (
                  <div className="mt-5 pt-4 border-t border-[#E9E4D8]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    {activeEvent.note && (
                      <p className="text-xs sm:text-[13px] font-medium text-[#557A64]">
                        {activeEvent.note}
                      </p>
                    )}

                    {activeEvent.link && (
                      <a
                        href={activeEvent.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1F2928] hover:bg-[#509799] text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto shadow-xs"
                      >
                        <span>{activeEvent.link.label}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Subtle Dark-Slate Footer Strip Integrated Into Unified Card */}
          <div className="bg-[#1F2928] text-white px-5 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#63B9BB] shrink-0" />
              <p className="text-xs sm:text-sm text-[#E9E4D8]/90">
                <strong className="text-white font-semibold">Bovengronds gesaneerd</strong> · Bestuurlijke borging van de 10kV netaansluiting vóór <strong className="text-[#FCA5A5] font-semibold">1 december 2026</strong>.
              </p>
            </div>

            {onOpenContact && (
              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#63B9BB] hover:bg-white text-[#1F2928] font-bold text-xs transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto cursor-pointer"
              >
                <span>Vraag procesdossier op</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
