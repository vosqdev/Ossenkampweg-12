import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LocationSection } from './components/LocationSection';
import { WhyNetConscious } from './components/WhyNetConscious';
import { TimelineSection } from './components/TimelineSection';
import { ProofOfConceptSection } from './components/ProofOfConceptSection';
import { StakeholdersSection } from './components/StakeholdersSection';
import { ProjectStatusSection } from './components/ProjectStatusSection';
import { FuturePerspective } from './components/FuturePerspective';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StatusModal } from './components/StatusModal';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleOpenStatus = () => setStatusModalOpen(true);
  const handleCloseStatus = () => setStatusModalOpen(false);

  const handleOpenContact = () => setContactModalOpen(true);
  const handleCloseContact = () => setContactModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8F6] text-[#1F2928] selection:bg-[#63B9BB]/30">
      {/* 1. Sticky Navigation */}
      <Navbar onOpenStatus={handleOpenStatus} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenStatus={handleOpenStatus} />

        {/* 3. Waarom Deze Locatie? (Ruimtelijke context & Positionering) */}
        <LocationSection onOpenContact={handleOpenContact} />

        {/* 4. Waarom Netbewust Ontwikkelen? (4 Kaarten: Netcongestie, Woningbouw, Mobiliteit, Lokale Energie) */}
        <WhyNetConscious />

        {/* 5. Ontwikkelperspectief / Tijdlijn (2025–2035+) */}
        <TimelineSection />

        {/* 6. De Locatie als Proeftuin (Behouden, Onderzoeken, Opschalen) */}
        <ProofOfConceptSection />

        {/* 7. Samenwerking (Netwerk rond Ossenkampweg 12) */}
        <StakeholdersSection onOpenContact={handleOpenContact} />

        {/* 8. Waar staat het initiatief nu? (6 Stappen & Transparantie) */}
        <ProjectStatusSection />

        {/* 9. Toekomstperspectief (Visuele Simulatie & Scenario's) */}
        <FuturePerspective />

        {/* 10. Veelgestelde Vragen (FAQ - 12 Vragen) */}
        <FaqSection />
      </main>

      {/* 11. Footer & Juridische Disclaimer */}
      <Footer onOpenContact={handleOpenContact} onOpenStatus={handleOpenStatus} />

      {/* Interactive Modals */}
      <StatusModal isOpen={statusModalOpen} onClose={handleCloseStatus} />
      <ContactModal isOpen={contactModalOpen} onClose={handleCloseContact} />
    </div>
  );
}
