'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { usePortfolio } from '../context/PortfolioContext';
import { siteConfig } from '../data/content';
import { FileDown, ChevronLeft, ChevronRight, Award, Compass, Sparkles, Quote, ZoomIn, X } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

export function About() {
  const { content } = usePortfolio();
  const shouldReduceMotion = useReducedMotion();
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const carouselPhotos = siteConfig.aboutCarouselPhotos;

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % carouselPhotos.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + carouselPhotos.length) % carouselPhotos.length);
  };

  const handleTouchScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const slideWidth = el.offsetWidth;
    if (slideWidth > 0) {
      const index = Math.round(el.scrollLeft / slideWidth);
      if (index >= 0 && index < carouselPhotos.length && index !== activeSlide) {
        setActiveSlide(index);
      }
    }
  };

  const scrollToSlide = (index: number) => {
    setActiveSlide(index);
    if (carouselRef.current) {
      const target = carouselRef.current.children[index] as HTMLElement | undefined;
      target?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-[#0D0D12] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#DC2626]/10 text-[#DC2626] dark:bg-[#DC2626]/20 font-bold text-xs uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>{content.about.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#09090B] dark:text-white tracking-tight">
            {content.about.title}
          </h2>
          <p className="mt-2 text-base sm:text-lg font-semibold text-[#DC2626] dark:text-[#EF4444]">
            {content.about.subtitle}
          </p>
        </div>

        {/* Top Grid: Photo + Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Main About Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#DC2626] to-[#09090B] rounded-2xl opacity-20 dark:opacity-40 blur-lg" />
              
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] shadow-xl group">
                <Image
                  src={siteConfig.aboutPhoto}
                  alt="Donat Omengelo - Vision et Parcours"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 380px"
                  className="object-cover object-top group-hover:scale-102 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/90 via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#EF4444]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{content.about.mottoLabel}</span>
                  </div>
                  <p className="text-base font-bold italic mt-1 text-white">
                    « {content.about.motto} »
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
              {content.about.biography.map((paragraph, index) => (
                <p key={index} className="first-of-type:font-medium first-of-type:text-[#18181B] dark:first-of-type:text-[#FAFAFA]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Stats Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E4E4E7] dark:border-[#27272A]">
              <div className="p-4 rounded-xl bg-[#FAFAFA] dark:bg-[#18181F] border border-[#E4E4E7] dark:border-[#27272A]">
                <div className="text-2xl lg:text-3xl font-black text-[#DC2626] dark:text-[#EF4444]">
                  {content.about.stats.stat1Number}
                </div>
                <div className="text-xs font-medium text-[#71717A] dark:text-[#A1A1AA] mt-1">
                  {content.about.stats.stat1Label}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FAFAFA] dark:bg-[#18181F] border border-[#E4E4E7] dark:border-[#27272A]">
                <div className="text-2xl lg:text-3xl font-black text-[#09090B] dark:text-white">
                  {content.about.stats.stat2Number}
                </div>
                <div className="text-xs font-medium text-[#71717A] dark:text-[#A1A1AA] mt-1">
                  {content.about.stats.stat2Label}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FAFAFA] dark:bg-[#18181F] border border-[#E4E4E7] dark:border-[#27272A]">
                <div className="text-2xl lg:text-3xl font-black text-[#DC2626] dark:text-[#EF4444]">
                  {content.about.stats.stat3Number}
                </div>
                <div className="text-xs font-medium text-[#71717A] dark:text-[#A1A1AA] mt-1">
                  {content.about.stats.stat3Label}
                </div>
              </div>
            </div>

            {/* Download CV CTA */}
            <div className="pt-2">
              <a
                href={siteConfig.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider bg-[#09090B] dark:bg-white text-white dark:text-[#09090B] hover:bg-[#DC2626] dark:hover:bg-[#EF4444] dark:hover:text-white transition-all duration-200 shadow-sm"
              >
                <FileDown className="w-4 h-4 text-[#DC2626] group-hover:text-white" />
                <span>{content.about.downloadCv}</span>
              </a>
            </div>
          </div>
        </div>

        {/* 5-Photo Interactive Carousel / Gallery */}
        <div className="pt-10 border-t border-[#E4E4E7] dark:border-[#27272A]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#DC2626] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Galerie immersive</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#09090B] dark:text-white tracking-tight mt-1">
                {content.about.galleryTitle}
              </h3>
              <p className="text-sm text-[#71717A] dark:text-[#A1A1AA] mt-1">
                {content.about.gallerySubtitle}
              </p>
            </div>

            {/* Desktop Navigation buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-2.5 rounded-lg border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#18181F] text-[#09090B] dark:text-white hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
                aria-label="Photo précédente"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2.5 rounded-lg border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#18181F] text-[#09090B] dark:text-white hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
                aria-label="Photo suivante"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Carousel container with touch swipe support */}
          <div
            ref={carouselRef}
            onScroll={handleTouchScroll}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {carouselPhotos.map((photo, index) => (
              <div
                key={index}
                className={`flex-none w-72 sm:w-80 md:w-96 snap-center group relative aspect-4/3 rounded-2xl overflow-hidden bg-[#18181B] border transition-all duration-300 cursor-pointer ${
                  activeSlide === index
                    ? 'border-[#DC2626] shadow-lg scale-101'
                    : 'border-[#E4E4E7] dark:border-[#27272A] opacity-90 hover:opacity-100'
                }`}
                onClick={() => setSelectedPhoto(photo)}
              >
                <Image
                  src={photo}
                  alt={`Donat Omengelo - Moment pro ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 288px, 384px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="flex items-center justify-between w-full text-white text-xs">
                    <span className="font-semibold uppercase tracking-wider">Photo {index + 1} / {carouselPhotos.length}</span>
                    <span className="p-1.5 rounded-full bg-white/20 backdrop-blur-md">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[10px] font-mono text-white font-bold">
                  0{index + 1}
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {carouselPhotos.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToSlide(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === i
                    ? 'w-8 bg-[#DC2626]'
                    : 'w-2 bg-[#D4D4D8] dark:bg-[#3F3F46]'
                }`}
                aria-label={`Aller à la diapositive ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] aspect-4/3 rounded-2xl overflow-hidden bg-black border border-white/20">
            <Image
              src={selectedPhoto}
              alt="Aperçu grand format"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 hover:bg-[#DC2626] text-white transition-colors"
              aria-label="Fermer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
