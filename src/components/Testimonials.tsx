'use client';

import React from 'react';
import Image from 'next/image';
import { usePortfolio } from '../context/PortfolioContext';
import { MessageSquareQuote, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export function Testimonials() {
  const { content } = usePortfolio();

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#FAFAFA] dark:bg-[#09090B] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#DC2626]/10 text-[#DC2626] dark:bg-[#DC2626]/20 font-bold text-xs uppercase tracking-wider mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>{content.testimonials.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#09090B] dark:text-white tracking-tight">
            {content.testimonials.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#52525B] dark:text-[#A1A1AA]">
            {content.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {content.testimonials.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col justify-between p-8 rounded-2xl bg-white dark:bg-[#121217] border border-[#E4E4E7] dark:border-[#27272A] hover:border-[#DC2626] dark:hover:border-[#EF4444] shadow-xs hover:shadow-lg transition-all duration-300 relative group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#E4E4E7] dark:text-[#27272A] group-hover:text-[#DC2626]/20 transition-colors pointer-events-none" />

              {/* Quote text */}
              <p className="text-base text-[#3F3F46] dark:text-[#D4D4D8] leading-relaxed italic relative z-10 mb-6">
                « {item.quote} »
              </p>

              {/* Author info */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#F4F4F5] dark:border-[#1E1E24]">
                {item.photoUrl ? (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-[#DC2626]/40">
                    <Image
                      src={item.photoUrl}
                      alt={item.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#DC2626]/10 text-[#DC2626] dark:bg-[#DC2626]/20 font-black text-base shrink-0 border border-[#DC2626]/30">
                    {item.name.charAt(0)}
                  </div>
                )}

                <div>
                  <h3 className="text-sm font-bold text-[#09090B] dark:text-white">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#71717A] dark:text-[#A1A1AA]">
                    {item.role} {item.company && <span className="font-semibold text-[#DC2626] dark:text-[#EF4444]">· {item.company}</span>}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
