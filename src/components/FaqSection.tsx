import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/projectData';
import { HelpCircle, ChevronDown, Search, X } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'algemeen' | 'techniek' | 'omgeving' | 'planning'>('all');

  const filteredItems = FAQ_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesQuery =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#F7F8F6] border-t border-[#E9E4D8]/80">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#557A64] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#509799]" />
            <span>Vragen & Antwoorden</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2928] tracking-tight">
            Veelgestelde vragen
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1F2928]/75 leading-relaxed">
            Feitelijke, voorzichtige en transparante antwoorden op de belangrijkste vragen van omwonenden, ondernemers en overheden.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-[#1F2928]/40 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Zoek in de vragen (bijv. batterij, woningbouw, vergunning, netcongestie)..."
              className="w-full pl-11 pr-10 py-3 rounded-xl bg-white border border-[#E9E4D8] text-sm text-[#1F2928] placeholder-[#1F2928]/40 focus:outline-none focus:ring-2 focus:ring-[#509799]/30 focus:border-[#509799] transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#1F2928]/40 hover:text-[#1F2928] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'Alle vragen (12)' },
              { id: 'algemeen', label: 'Algemeen & Doel' },
              { id: 'techniek', label: 'Techniek & Energie' },
              { id: 'omgeving', label: 'Omgeving & Wonen' },
              { id: 'planning', label: 'Planning & Proces' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#1F2928] text-white shadow-xs'
                    : 'bg-white border border-[#E9E4D8] text-[#1F2928]/70 hover:bg-[#F4F1EB]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-xl border border-[#E9E4D8] text-sm text-[#1F2928]/60">
              Geen vragen gevonden die overeenkomen met je zoekopdracht. Probeer een andere zoekterm.
            </div>
          ) : (
            filteredItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#509799] shadow-sm'
                      : 'bg-white border-[#E9E4D8] hover:border-[#1F2928]/30 shadow-xs'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-[#1F2928] tracking-tight">
                      {item.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${
                        isOpen ? 'bg-[#509799] text-white rotate-180' : 'bg-[#F7F8F6] text-[#1F2928]/60'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#1F2928]/80 leading-relaxed border-t border-[#E9E4D8]/60 mt-1">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
