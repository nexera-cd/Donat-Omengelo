'use client';

import React from 'react';
import { PortfolioProvider } from '../../src/context/PortfolioContext';
import { Navbar } from '../../src/components/Navbar';
import { Hero } from '../../src/components/Hero';
import { About } from '../../src/components/About';
import { Services } from '../../src/components/Services';
import { Projects } from '../../src/components/Projects';
import { Testimonials } from '../../src/components/Testimonials';
import { ContactSection } from '../../src/components/ContactSection';
import { Footer } from '../../src/components/Footer';
import { FloatingWhatsApp } from '../../src/components/FloatingWhatsApp';

export default function EnglishPage() {
  return (
    <PortfolioProvider initialLang="en">
      <div className="min-h-screen flex flex-col bg-[#FAFAFA] dark:bg-[#09090B] text-[#09090B] dark:text-[#FAFAFA] transition-colors duration-300">
        <Navbar />
        <main className="grow">
          <Hero />
          <About />
          <Services />
          <Projects />
          <Testimonials />
          <ContactSection />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </PortfolioProvider>
  );
}
