/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Packages } from './components/Packages';
import { Portfolio } from './components/Portfolio';
import { BeforeAfter } from './components/BeforeAfter';
import { About } from './components/About';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();
  const [selectedPackageName, setSelectedPackageName] = useState<string | undefined>();
  const [activeSection, setActiveSection] = useState<string>('home');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'packages', 'portfolio', 'about', 'reviews', 'contact'];
      const scrollY = window.scrollY;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedPackageName(undefined);
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleOpenPackageBooking = (packageName: string) => {
    setSelectedServiceId(undefined);
    setSelectedPackageName(packageName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedServiceId(undefined);
    setSelectedPackageName(undefined);
  };

  const handleExploreServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#211A17] flex flex-col font-sans selection:bg-[#C5A059]/20 selection:text-[#211A17]">
      {/* Premium Sticky Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Cinematic Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={handleExploreServices}
        />

        {/* 2. Services Section */}
        <Services onSelectService={handleOpenBooking} />

        {/* 3. Packages Section */}
        <Packages onSelectPackage={handleOpenPackageBooking} />

        {/* 4. Portfolio Section with Lightbox */}
        <Portfolio />

        {/* 5. Before & After Interactive Comparison */}
        <BeforeAfter />

        {/* 6. Editorial About Artist & Philosophy */}
        <About />

        {/* 7. Why Choose Us (4 Pillars) */}
        <WhyChooseUs />

        {/* 8. Testimonials Section */}
        <Testimonials />

        {/* 9. Frequently Asked Questions */}
        <Faq />

        {/* 10. Contact & Express Booking */}
        <Contact />
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* 5-Step Interactive Booking Engine Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialServiceId={selectedServiceId}
        initialPackageName={selectedPackageName}
      />

      {/* Floating Desktop & Mobile Sticky WhatsApp Contact */}
      <WhatsAppButton onOpenBookingModal={() => handleOpenBooking()} />
    </div>
  );
}
