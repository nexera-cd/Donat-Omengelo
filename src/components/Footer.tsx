'use client';

import React from 'react';
import Link from 'next/link';
import { usePortfolio } from '../context/PortfolioContext';
import { siteConfig } from '../data/content';
import { ArrowUp, Heart } from 'lucide-react';

export function Footer() {
  const { content } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E4E4E7] dark:border-[#27272A] bg-[#FAFAFA] dark:bg-[#09090B] text-[#71717A] dark:text-[#A1A1AA] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#09090B] dark:bg-[#18181F] border border-[#DC2626]/40">
              <span className="text-white font-black text-sm tracking-wider">
                DOSH
              </span>
            </div>
            <div>
              <span className="text-sm font-bold text-[#09090B] dark:text-white">
                Donat Omengelo (Mr Dosh)
              </span>
              <p className="text-xs text-[#71717A] dark:text-[#A1A1AA]">
                Kinshasa, RDC · Dosh Corporation
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold uppercase tracking-wider">
            <a href="#about" className="hover:text-[#DC2626] transition-colors">
              {content.nav.about}
            </a>
            <a href="#services" className="hover:text-[#DC2626] transition-colors">
              {content.nav.services}
            </a>
            <a href="#projects" className="hover:text-[#DC2626] transition-colors">
              {content.nav.projects}
            </a>
            <a href="#testimonials" className="hover:text-[#DC2626] transition-colors">
              {content.nav.testimonials}
            </a>
            <a href="#contact" className="hover:text-[#DC2626] transition-colors">
              {content.nav.contact}
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#18181F] text-xs font-bold text-[#09090B] dark:text-white hover:border-[#DC2626] hover:text-[#DC2626] transition-colors cursor-pointer"
            aria-label="Retourner en haut de page"
          >
            <span>{content.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Agency Credit & Copyright */}
        <div className="mt-8 pt-8 border-t border-[#E4E4E7] dark:border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Donat Omengelo · Dosh Corporation. {content.footer.rights}
          </p>

          {/* Mandatory Nexera Agency Credit */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-[#121217] border border-[#E4E4E7] dark:border-[#27272A] font-medium text-[#09090B] dark:text-white">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <span>Site réalisé par <strong className="text-[#DC2626]">Nexera</strong> · Kinshasa, RDC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
