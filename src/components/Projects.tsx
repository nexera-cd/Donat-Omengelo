'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePortfolio } from '../context/PortfolioContext';
import { Award, ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Projects() {
  const { content } = usePortfolio();

  return (
    <section id="projects" className="py-20 md:py-28 bg-white dark:bg-[#0D0D12] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#DC2626]/10 text-[#DC2626] dark:bg-[#DC2626]/20 font-bold text-xs uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{content.projects.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#09090B] dark:text-white tracking-tight">
            {content.projects.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#52525B] dark:text-[#A1A1AA]">
            {content.projects.subtitle}
          </p>
        </div>

        {/* 3 Featured Projects Showcase Cards */}
        <div className="space-y-12">
          {content.projects.items.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-3xl bg-[#FAFAFA] dark:bg-[#121217] border border-[#E4E4E7] dark:border-[#27272A] hover:border-[#DC2626] dark:hover:border-[#EF4444] p-6 sm:p-8 lg:p-10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Preview Side (5 Cols) */}
                  <div
                    className={`lg:col-span-5 ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <Link
                      href={`/projets/${project.slug}`}
                      className="block relative aspect-4/3 rounded-2xl overflow-hidden bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] group/img"
                    >
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 450px"
                        className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80" />

                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-bold text-white uppercase tracking-wider border border-white/10">
                        {project.category}
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                        <span className="font-semibold uppercase tracking-wider">
                          5 visuels d'action
                        </span>
                        <span className="inline-flex items-center gap-1 font-bold text-[#EF4444]">
                          {content.projects.viewCaseStudy} →
                        </span>
                      </div>
                    </Link>
                  </div>

                  {/* Content Breakdown Side (7 Cols) */}
                  <div
                    className={`lg:col-span-7 flex flex-col justify-between space-y-6 ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-mono font-bold text-[#DC2626]">
                          0{index + 1} // ÉTUDE DE CAS
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-black text-[#09090B] dark:text-white group-hover:text-[#DC2626] dark:group-hover:text-[#EF4444] transition-colors tracking-tight">
                        <Link href={`/projets/${project.slug}`}>
                          {project.title}
                        </Link>
                      </h3>
                      <p className="text-sm font-semibold text-[#DC2626] dark:text-[#EF4444] mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Challenge Summary */}
                    <div className="p-4 rounded-xl bg-white dark:bg-[#18181F] border border-[#E4E4E7] dark:border-[#27272A] text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                      <strong className="block text-xs uppercase font-bold text-[#09090B] dark:text-white mb-1">
                        {content.projects.challengeLabel}
                      </strong>
                      {project.challenge}
                    </div>

                    {/* Key Results / Metrics */}
                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#09090B] dark:text-white">
                        {content.projects.resultsLabel}
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#27272A] dark:text-[#E4E4E7]">
                        {project.results.slice(0, 2).map((res, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                            <span>{res}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions: View Case Study + External Publication */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/projets/${project.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#DC2626] hover:bg-[#B91C1C] text-white shadow-xs transition-colors"
                      >
                        <span>{content.projects.viewCaseStudy}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      {project.externalUrl && (
                        <a
                          href={project.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#09090B] dark:text-white hover:text-[#DC2626] dark:hover:text-[#EF4444] border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#18181F] transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>{project.externalLabel || 'Lien officiel'}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
