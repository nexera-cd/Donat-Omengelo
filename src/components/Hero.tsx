'use client';

import React from 'react';
import Image from 'next/image';
import { usePortfolio } from '../context/PortfolioContext';
import { siteConfig } from '../data/content';
import { ArrowRight, FileDown, MapPin, Sparkles, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  const { content } = usePortfolio();

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:py-24 lg:py-28 bg-[#FAFAFA] dark:bg-[#09090B] transition-colors duration-300">
      {/* Subtle structural background grid accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      {/* Red ambient glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#DC2626]/10 dark:bg-[#DC2626]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#EF4444]/10 dark:bg-[#EF4444]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            {/* Status / Location Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#18181F] border border-[#E4E4E7] dark:border-[#27272A] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#09090B] dark:text-[#FAFAFA]">
                {content.hero.badge}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <p className="text-sm sm:text-base font-bold text-[#DC2626] dark:text-[#EF4444] uppercase tracking-widest">
                {content.hero.greeting} <span className="underline decoration-2 underline-offset-4">{content.hero.name}</span> ({content.hero.alias})
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#09090B] dark:text-white leading-[1.12]">
                {content.hero.slogan}
              </h1>
            </div>

            {/* Subtitle / Professional Title */}
            <h2 className="text-lg sm:text-xl font-bold text-[#27272A] dark:text-[#E4E4E7] flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#DC2626]" />
              {content.hero.title}
            </h2>

            {/* Short Bio Description */}
            <p className="text-base sm:text-lg text-[#52525B] dark:text-[#A1A1AA] leading-relaxed max-w-2xl font-normal">
              {content.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider bg-[#DC2626] hover:bg-[#B91C1C] text-white shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{content.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/cv.pdf"
                download="CV-Donat-Omengelo.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider bg-white dark:bg-[#18181F] hover:bg-[#F4F4F5] dark:hover:bg-[#27272A] text-[#09090B] dark:text-white border border-[#E4E4E7] dark:border-[#27272A] shadow-xs hover:border-[#DC2626] dark:hover:border-[#EF4444] transition-all"
              >
                <FileDown className="w-4 h-4 text-[#DC2626]" />
                <span>{content.hero.downloadCv}</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-sm font-semibold text-[#52525B] dark:text-[#A1A1AA] hover:text-[#DC2626] dark:hover:text-[#EF4444] transition-colors"
              >
                <span>{content.hero.ctaSecondary}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quick trust metrics indicator */}
            <div className="pt-4 flex items-center gap-6 text-xs text-[#71717A] dark:text-[#A1A1AA]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#DC2626]" />
                <span>{content.hero.location}</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-[#D4D4D8] dark:bg-[#3F3F46]" />
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>{content.hero.availability}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Image with Architect Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Geometric Red Architectural Corner Accents */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-4 border-l-4 border-[#DC2626] rounded-tl-xl z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-4 border-r-4 border-[#DC2626] rounded-br-xl z-20 pointer-events-none" />

              {/* Monogram watermark on back card */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#DC2626]/10 dark:bg-[#DC2626]/20 rounded-2xl -rotate-6 z-0" />

              {/* Image Frame */}
              <div className="relative z-10 w-full aspect-4/5 rounded-2xl overflow-hidden bg-[#18181B] border-2 border-[#E4E4E7] dark:border-[#27272A] shadow-2xl group">
                <Image
                  src={siteConfig.heroPhoto}
                  alt="Donat Omengelo - Consultant en Marketing Digital, Communication & IA"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 420px"
                  className="object-cover object-top filter contrast-[1.03] group-hover:scale-102 transition-transform duration-500"
                />

                {/* Bottom glass badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#09090B]/85 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-[#EF4444]">
                      Dosh Corporation
                    </p>
                    <p className="text-sm font-bold">Donat Omengelo</p>
                  </div>
                  <span className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-[#DC2626] font-bold text-white">
                    CEO & Founder
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
