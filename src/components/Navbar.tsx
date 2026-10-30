'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePortfolio } from '../context/PortfolioContext';
import { siteConfig } from '../data/content';
import { Sun, Moon, FileDown, Menu, X, Globe, Sparkles } from 'lucide-react';

export function Navbar() {
  const { lang, setLang, theme, toggleTheme, content } = usePortfolio();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: content.nav.about },
    { href: '#services', label: content.nav.services },
    { href: '#projects', label: content.nav.projects },
    { href: '#testimonials', label: content.nav.testimonials },
    { href: '#contact', label: content.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#FAFAFA]/90 dark:bg-[#09090B]/90 border-b border-[#E4E4E7] dark:border-[#27272A] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Monogram */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2626] rounded-lg p-1"
          aria-label="Donat Omengelo - Accueil"
        >
          {/* Monogram DOSH SVG */}
          <div className="relative w-11 h-11 flex items-center justify-center rounded-xl bg-[#09090B] dark:bg-[#18181F] border border-[#DC2626]/40 shadow-sm group-hover:border-[#DC2626] transition-all duration-300">
            <svg
              viewBox="0 0 120 120"
              className="w-8 h-8 text-white"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M26 34 H50 C62 34 70 42 70 54 C70 66 62 74 50 74 H26 V34 Z"
                stroke="#FFFFFF"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M40 34 V74"
                stroke="#DC2626"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M56 46 H88 C94 46 98 50 98 56 C98 62 94 66 88 66 H72 C66 66 62 70 62 76 C62 82 66 86 72 86 H98"
                stroke="#EF4444"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="98" cy="34" r="5" fill="#DC2626" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-black tracking-wider text-[#09090B] dark:text-white uppercase flex items-center gap-1.5">
              DOSH
              <span className="text-xs px-1.5 py-0.5 rounded-full bg-[#DC2626]/10 text-[#DC2626] dark:bg-[#DC2626]/20 font-bold">
                Mr Dosh
              </span>
            </span>
            <span className="text-xs font-medium text-[#71717A] dark:text-[#A1A1AA] tracking-tight">
              Donat Omengelo
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#27272A] dark:text-[#E4E4E7] hover:text-[#DC2626] dark:hover:text-[#EF4444] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#DC2626] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Lang Switcher, Theme Switcher, Download CV */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Toggle */}
          <div className="flex items-center p-1 bg-[#F4F4F5] dark:bg-[#18181B] rounded-lg border border-[#E4E4E7] dark:border-[#27272A]">
            <button
              onClick={() => setLang('fr')}
              className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
                lang === 'fr'
                  ? 'bg-white dark:bg-[#27272A] text-[#DC2626] shadow-xs'
                  : 'text-[#71717A] hover:text-[#09090B] dark:hover:text-white'
              }`}
              aria-label="Passer en Français"
            >
              FR
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
                lang === 'en'
                  ? 'bg-white dark:bg-[#27272A] text-[#DC2626] shadow-xs'
                  : 'text-[#71717A] hover:text-[#09090B] dark:hover:text-white'
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-lg text-[#09090B] dark:text-[#FAFAFA] bg-[#F4F4F5] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] hover:border-[#DC2626] dark:hover:border-[#EF4444] transition-all cursor-pointer"
            aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
            title={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-[#09090B]" />
            )}
          </button>

          {/* Download CV Button */}
          <a
            href={siteConfig.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#DC2626] hover:bg-[#B91C1C] text-white shadow-xs hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            aria-label={content.nav.downloadCv}
          >
            <FileDown className="w-4 h-4" />
            <span>{content.nav.downloadCv}</span>
          </a>
        </div>

        {/* Mobile Hamburger & Quick Theme */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-[#09090B] dark:text-[#FAFAFA] bg-[#F4F4F5] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A]"
            aria-label="Basculer thème"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-[#09090B]" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg text-[#09090B] dark:text-[#FAFAFA] bg-[#F4F4F5] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A]"
            aria-label="Ouvrir le menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E4E4E7] dark:border-[#27272A] bg-[#FAFAFA] dark:bg-[#09090B] px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-[#09090B] dark:text-[#FAFAFA] hover:bg-[#F4F4F5] dark:hover:bg-[#18181B] hover:text-[#DC2626] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#E4E4E7] dark:border-[#27272A] flex flex-col gap-3">
            {/* Mobile Lang Selector */}
            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-semibold text-[#71717A] dark:text-[#A1A1AA] uppercase tracking-wider">
                {content.nav.language}
              </span>
              <div className="flex items-center p-1 bg-[#F4F4F5] dark:bg-[#18181B] rounded-lg">
                <button
                  onClick={() => setLang('fr')}
                  className={`px-3 py-1 text-xs font-bold rounded-md ${
                    lang === 'fr'
                      ? 'bg-white dark:bg-[#27272A] text-[#DC2626]'
                      : 'text-[#71717A]'
                  }`}
                >
                  Français
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 text-xs font-bold rounded-md ${
                    lang === 'en'
                      ? 'bg-white dark:bg-[#27272A] text-[#DC2626]'
                      : 'text-[#71717A]'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            {/* Mobile CV Button */}
            <a
              href={siteConfig.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#DC2626] text-white text-center shadow-xs"
            >
              <FileDown className="w-4 h-4" />
              <span>{content.nav.downloadCv}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
