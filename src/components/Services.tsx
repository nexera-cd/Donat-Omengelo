'use client';

import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { siteConfig } from '../data/content';
import {
  TrendingUp,
  Award,
  Users,
  Cpu,
  CheckCircle,
  Compass,
  ArrowUpRight,
  MessageCircle,
} from 'lucide-react';
import { motion } from 'motion/react';

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Award,
  Users,
  Cpu,
  CheckCircle,
  Compass,
};

export function Services() {
  const { content } = usePortfolio();

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAFAFA] dark:bg-[#09090B] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#DC2626]/10 text-[#DC2626] dark:bg-[#DC2626]/20 font-bold text-xs uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>{content.services.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#09090B] dark:text-white tracking-tight">
            {content.services.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#52525B] dark:text-[#A1A1AA] max-w-2xl">
            {content.services.subtitle}
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {content.services.items.map((service, index) => {
            const Icon = iconMap[service.iconName] || CheckCircle;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative flex flex-col justify-between p-8 rounded-2xl bg-white dark:bg-[#121217] border border-[#E4E4E7] dark:border-[#27272A] hover:border-[#DC2626] dark:hover:border-[#EF4444] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Accent top stripe on hover */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-[#DC2626] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div>
                  {/* Top: Icon + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#FAFAFA] dark:bg-[#18181F] text-[#09090B] dark:text-white border border-[#E4E4E7] dark:border-[#27272A] group-hover:bg-[#DC2626] group-hover:text-white group-hover:border-[#DC2626] transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    {service.badge && (
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FAFAFA] dark:bg-[#18181F] text-[#71717A] dark:text-[#A1A1AA] border border-[#E4E4E7] dark:border-[#27272A] group-hover:text-[#DC2626] dark:group-hover:text-[#EF4444] transition-colors">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#09090B] dark:text-white group-hover:text-[#DC2626] dark:group-hover:text-[#EF4444] transition-colors mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom CTA Action Link */}
                <div className="pt-6 mt-6 border-t border-[#F4F4F5] dark:border-[#1E1E24] flex items-center justify-between">
                  <a
                    href={`${siteConfig.whatsappUrl}&text=${encodeURIComponent(`Bonjour Mr Dosh, je suis intéressé par votre service: ${service.title}. Pouvons-nous échanger ?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#09090B] dark:text-white group-hover:text-[#DC2626] dark:group-hover:text-[#EF4444] transition-colors"
                  >
                    <span>{content.services.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <span className="text-xs font-mono font-bold text-[#A1A1AA] dark:text-[#52525B]">
                    0{index + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
