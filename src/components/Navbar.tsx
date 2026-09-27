import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Compass } from 'lucide-react';

interface NavbarProps {
  onOpenStatus: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenStatus }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Locatie', href: '#locatie' },
    { label: 'Netbewust', href: '#waarom-netbewust' },
    { label: 'Perspectief', href: '#planning' },
    { label: 'Proeftuin', href: '#proeftuin' },
    { label: 'Samenwerking', href: '#samenwerking' },
    { label: 'Energiesysteem', href: '#toekomst' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F8F6]/95 backdrop-blur-md border-b border-[#E9E4D8]/80 py-3 shadow-xs'
          : 'bg-[#F7F8F6]/80 backdrop-blur-xs border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-base sm:text-lg font-bold tracking-tight text-[#1F2928] hover:text-[#509799] transition-colors flex items-center gap-2 group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#63B9BB] group-hover:scale-125 transition-transform" />
            <span>OSSENKAMPWEG 12</span>
            <span className="text-xs font-normal text-[#1F2928]/50 hidden sm:inline">· Zeewolde</span>
          </a>

          {/* Zone 2: 4–6 nav links, 1–2 word labels, single-line */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-[#1F2928]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#509799] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#63B9BB] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1–2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenStatus}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white bg-[#1F2928] hover:bg-[#509799] transition-all rounded-lg whitespace-nowrap shadow-xs cursor-pointer group"
            >
              <span className="w-2 h-2 rounded-full bg-[#63B9BB] animate-ping" />
              <span>Projectstatus</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-[#1F2928] hover:bg-[#E9E4D8]/60 transition-colors cursor-pointer"
              aria-label="Menu openen"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 border-t border-[#E9E4D8] pb-4 px-2 space-y-2 animate-fadeIn bg-[#F7F8F6]/98 rounded-b-xl shadow-lg">
            <div className="text-xs uppercase tracking-wider text-[#1F2928]/60 px-3 py-1 font-semibold">
              Navigatie & thema's
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-[#1F2928] hover:bg-[#E9E4D8]/40 hover:text-[#509799] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 px-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStatus();
                }}
                className="w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-[#509799] hover:bg-[#1F2928] transition-colors rounded-lg flex items-center justify-center gap-2"
              >
                <Compass className="w-4 h-4" />
                <span>Bekijk huidige projectstatus (Fase 2)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
