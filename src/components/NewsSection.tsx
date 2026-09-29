import React, { useState } from 'react';
import { SANERING_NEWS_ARTICLE, NewsPhoto } from '../data/newsData';
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  ShieldCheck,
  Calendar,
  Layers,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface NewsSectionProps {
  onOpenContact?: () => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ onOpenContact }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const article = SANERING_NEWS_ARTICLE;
  const currentPhoto: NewsPhoto = article.photos[selectedPhotoIndex];

  const handlePrev = () => {
    setSelectedPhotoIndex((prev) => (prev === 0 ? article.photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedPhotoIndex((prev) => (prev === article.photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="nieuws" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#F7F8F6] border-t border-[#E9E4D8]/80">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Article Header */}
        <div className="max-w-4xl mb-10">
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#509799] mb-3">
            <span className="inline-flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-[#509799]" />
              {article.category}
            </span>
            <span className="text-[#1F2928]/30">·</span>
            <span className="text-[#1F2928]/60 font-medium normal-case flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {article.date}
            </span>
            <span className="text-[#1F2928]/30">·</span>
            <span className="text-[#1F2928]/60 font-medium normal-case">{article.readTime}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2928] tracking-tight leading-tight">
            {article.title}
          </h2>

          <p className="mt-3 text-lg sm:text-xl text-[#557A64] font-medium leading-relaxed">
            {article.subtitle}
          </p>

          <p className="mt-4 text-base sm:text-lg text-[#1F2928]/75 leading-relaxed">
            {article.summary}
          </p>
        </div>

        {/* Interactive Photo Reportage Showcase */}
        <div className="bg-white rounded-3xl border border-[#E9E4D8] shadow-sm overflow-hidden p-4 sm:p-6 lg:p-8">
          {/* Step selector bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-[#E9E4D8]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#509799] animate-pulse" />
              <span className="text-xs uppercase font-bold tracking-wider text-[#1F2928]">
                Fotoreportage Sanering
              </span>
              <span className="text-xs font-mono text-[#1F2928]/50">
                ({selectedPhotoIndex + 1} / {article.photos.length})
              </span>
            </div>

            {/* Quick selector buttons */}
            <div className="flex flex-wrap items-center gap-1.5">
              {article.photos.map((photo, idx) => (
                <button
                  key={photo.id}
                  onClick={() => setSelectedPhotoIndex(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedPhotoIndex === idx
                      ? 'bg-[#1F2928] text-white shadow-xs'
                      : 'bg-[#F7F8F6] text-[#1F2928]/70 hover:bg-[#E9E4D8] hover:text-[#1F2928]'
                  }`}
                  aria-label={`Ga naar foto ${photo.id}`}
                >
                  {photo.id === 1 ? 'Foto 1 · Actief' : `Foto ${photo.id} · Sanering`}
                </button>
              ))}
            </div>
          </div>

          {/* Main Visual Display Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left: Large Photo Display with Controls */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div className="relative rounded-2xl overflow-hidden bg-[#141C1B] h-[460px] sm:h-[520px] lg:h-[560px] group flex items-center justify-center border border-[#1F2928]/20 shadow-md">
                {/* Ambient soft background glow of the photo to fill non-matching aspect ratios seamlessly */}
                <div
                  className="absolute inset-0 bg-cover bg-center filter blur-2xl scale-115 opacity-30 pointer-events-none transition-all duration-700"
                  style={{ backgroundImage: `url(${currentPhoto.imageUrl})` }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-black/25 pointer-events-none" aria-hidden="true" />

                {/* Full uncropped image - completely zoomed out so the full wind turbine from blade tip to mast is visible */}
                <img
                  src={currentPhoto.imageUrl}
                  alt={currentPhoto.title}
                  className="relative z-10 max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                />

                {/* Top overlay badge */}
                <div className="absolute top-4 left-4 z-20 flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-md bg-[#1F2928]/85 backdrop-blur-md text-white text-xs font-semibold shadow-xs border border-white/10">
                    {currentPhoto.phaseLabel}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[#1F2928] text-[11px] font-bold shadow-xs">
                    {currentPhoto.badge}
                  </span>
                </div>

                {/* Top Right: Lightbox Expand button */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                  <button
                    onClick={() => setIsLightboxOpen(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 hover:bg-black/85 text-white text-xs font-medium backdrop-blur-md transition-all cursor-pointer border border-white/10 shadow-xs"
                    title="Open in volledig scherm"
                    aria-label="Vergroot weergave"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Volledig scherm</span>
                  </button>
                </div>

                {/* Bottom navigation buttons */}
                <div className="absolute inset-y-0 left-0 flex items-center p-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={handlePrev}
                    className="p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all cursor-pointer shadow-md"
                    aria-label="Vorige foto"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center p-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={handleNext}
                    className="p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all cursor-pointer shadow-md"
                    aria-label="Volgende foto"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Bottom subtle timeline indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md">
                  {article.photos.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedPhotoIndex(idx)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        selectedPhotoIndex === idx ? 'w-6 bg-[#63B9BB]' : 'w-1.5 bg-white/40 hover:bg-white/80'
                      }`}
                      aria-label={`Foto ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Rich Context & Caption for the Active Photo */}
            <div className="lg:col-span-4 flex flex-col justify-between bg-[#F7F8F6] p-6 rounded-2xl border border-[#E9E4D8]">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#509799] font-bold uppercase tracking-wider mb-2">
                  <span>Stap {currentPhoto.id} van {article.photos.length}</span>
                  <span className="text-[#1F2928]/50 normal-case">{currentPhoto.dateLabel}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#1F2928] tracking-tight mb-3">
                  {currentPhoto.title}
                </h3>

                {/* Primary User-Requested Short Text */}
                <div className="p-4 rounded-xl bg-white border border-[#E9E4D8] mb-4 shadow-2xs">
                  <p className="text-xs uppercase font-bold text-[#557A64] tracking-wider mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#509799]" />
                    Toelichting bij beeld
                  </p>
                  <p className="text-sm sm:text-base text-[#1F2928] font-medium leading-relaxed">
                    {currentPhoto.caption}
                  </p>
                </div>

                {/* Additional infrastructure detail */}
                <p className="text-xs sm:text-sm text-[#1F2928]/75 leading-relaxed">
                  {currentPhoto.details}
                </p>
              </div>

              {/* Progress & Next/Prev Controls */}
              <div className="pt-6 mt-6 border-t border-[#E9E4D8]/80 flex items-center justify-between">
                <button
                  onClick={handlePrev}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#1F2928]/80 hover:text-[#1F2928] hover:bg-white rounded-lg transition-colors cursor-pointer border border-transparent hover:border-[#E9E4D8]"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Vorige</span>
                </button>

                <div className="text-center text-xs font-mono text-[#1F2928]/50">
                  {selectedPhotoIndex + 1} / {article.photos.length}
                </div>

                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-[#1F2928] hover:bg-[#509799] rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  <span>Volgende</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Thumbnail Strip */}
          <div className="mt-8 pt-6 border-t border-[#E9E4D8]">
            <p className="text-xs font-bold uppercase tracking-wider text-[#1F2928]/60 mb-3">
              Kies een beeld uit de saneringsreeks:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {article.photos.map((photo, idx) => {
                const isActive = selectedPhotoIndex === idx;
                return (
                  <button
                    key={photo.id}
                    onClick={() => setSelectedPhotoIndex(idx)}
                    className={`relative text-left rounded-xl overflow-hidden border p-2 transition-all cursor-pointer ${
                      isActive
                        ? 'bg-white border-[#509799] ring-2 ring-[#509799]/20 shadow-sm'
                        : 'bg-[#F7F8F6] border-[#E9E4D8] hover:border-[#509799]/40 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#141C1B] mb-2 relative flex items-center justify-center">
                      <div
                        className="absolute inset-0 bg-cover bg-center filter blur-xs opacity-35"
                        style={{ backgroundImage: `url(${photo.imageUrl})` }}
                      />
                      <img
                        src={photo.imageUrl}
                        alt={photo.title}
                        className="relative z-1 max-h-full max-w-full w-auto h-auto object-contain"
                      />
                      <span className="absolute bottom-1 right-1 z-2 px-1.5 py-0.5 rounded bg-black/75 text-white text-[10px] font-mono font-bold">
                        #{photo.id}
                      </span>
                    </div>
                    <div className="px-1">
                      <span className="block text-[11px] font-bold text-[#1F2928] truncate">
                        {photo.id === 1 ? '1. Actieve windmolen' : `${photo.id}. ${photo.title.split(' ')[0]} ${photo.title.split(' ')[1] || ''}`}
                      </span>
                      <span className="block text-[10px] text-[#1F2928]/60 truncate">
                        {photo.badge}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Context footer banner */}
          <div className="mt-6 p-4 rounded-2xl bg-[#509799]/5 border border-[#509799]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#509799]/10 text-[#509799] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#1F2928]">
                  Behoud van de netaansluiting & ondergrondse fundatie
                </h4>
                <p className="text-xs text-[#1F2928]/75 mt-0.5">
                  De bovengrondse solitaire turbine is verdwenen; de 10kV aansluiting en fundering blijven intact beschikbaar voor ontwerpend onderzoek.
                </p>
              </div>
            </div>

            {onOpenContact && (
              <button
                onClick={onOpenContact}
                className="shrink-0 text-xs font-semibold text-[#509799] hover:text-[#1F2928] underline underline-offset-4 cursor-pointer"
              >
                Vragen over de sanering?
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
            aria-label="Sluiten"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full flex flex-col items-center">
            <div className="relative w-full rounded-2xl overflow-hidden bg-black max-h-[75vh] flex items-center justify-center">
              <img
                src={currentPhoto.imageUrl}
                alt={currentPhoto.title}
                className="max-h-[75vh] w-auto object-contain"
              />

              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md cursor-pointer"
                aria-label="Vorige"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md cursor-pointer"
                aria-label="Volgende"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="w-full mt-4 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-2 px-2">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#63B9BB] block">
                  {currentPhoto.phaseLabel}
                </span>
                <p className="text-sm sm:text-base font-medium text-white/90 mt-1 max-w-2xl">
                  {currentPhoto.caption}
                </p>
              </div>
              <span className="text-xs font-mono text-white/50 shrink-0">
                Foto {currentPhoto.id} van {article.photos.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
