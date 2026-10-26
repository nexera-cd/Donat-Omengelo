import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { siteConfig, getContent, getProjectBySlug } from '../../../src/data/content';
import { Navbar } from '../../../src/components/Navbar';
import { Footer } from '../../../src/components/Footer';
import { FloatingWhatsApp } from '../../../src/components/FloatingWhatsApp';
import { PortfolioProvider } from '../../../src/context/PortfolioContext';
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Calendar,
  UserCheck,
  Target,
  Sparkles,
  MessageCircle,
} from 'lucide-react';

export function generateStaticParams() {
  const content = getContent('fr');
  return content.projects.items.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug, 'fr');

  if (!project) {
    return {
      title: 'Projet introuvable | Donat Omengelo',
    };
  }

  return {
    title: `${project.title} | Étude de cas · Donat Omengelo`,
    description: project.challenge.slice(0, 160),
    openGraph: {
      title: `${project.title} - Réalisation Donat Omengelo`,
      description: project.challenge.slice(0, 160),
      images: [project.coverImage],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug, 'fr');

  if (!project) {
    notFound();
  }

  return (
    <PortfolioProvider>
      <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#09090B] text-[#09090B] dark:text-[#FAFAFA] transition-colors duration-300">
        <Navbar />

        <main className="py-12 md:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Back button */}
          <div className="mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#71717A] hover:text-[#DC2626] dark:hover:text-[#EF4444] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour à l'accueil</span>
            </Link>
          </div>

          {/* Project Header */}
          <header className="space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DC2626]/10 text-[#DC2626] dark:bg-[#DC2626]/20 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{project.category}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-[#71717A] dark:text-[#A1A1AA]">
              {project.subtitle}
            </p>

            {/* Role Box */}
            <div className="pt-4 flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-[#18181F] border border-[#E4E4E7] dark:border-[#27272A] text-sm">
              <UserCheck className="w-5 h-5 text-[#DC2626] shrink-0" />
              <div>
                <span className="text-xs uppercase font-bold text-[#71717A] dark:text-[#A1A1AA] block">
                  Rôle & Intervention :
                </span>
                <span className="font-semibold text-[#09090B] dark:text-white">
                  {project.role}
                </span>
              </div>
            </div>
          </header>

          {/* Main Hero Visual */}
          <div className="relative aspect-16/9 rounded-3xl overflow-hidden bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] shadow-xl mb-16">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1000px"
              className="object-cover"
            />
          </div>

          {/* Case Study Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Context & Challenge */}
            <div className="p-8 rounded-2xl bg-white dark:bg-[#121217] border border-[#E4E4E7] dark:border-[#27272A] space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                <Target className="w-4 h-4" />
                <span>Le Contexte & Défi</span>
              </div>
              <p className="text-base text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Measurable Results */}
            <div className="p-8 rounded-2xl bg-white dark:bg-[#121217] border border-[#E4E4E7] dark:border-[#27272A] space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Résultats & Impact Mesuré</span>
              </div>
              <ul className="space-y-3 text-base text-[#27272A] dark:text-[#E4E4E7]">
                {project.results.map((res, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                    <span className="font-medium">{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Methodologies & Solutions */}
          <section className="mb-16 p-8 rounded-3xl bg-white dark:bg-[#121217] border border-[#E4E4E7] dark:border-[#27272A]">
            <h2 className="text-xl font-bold uppercase tracking-wider text-[#09090B] dark:text-white mb-6">
              Méthodologie & Actions Stratégiques Déployées
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.solutions.map((sol, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-[#FAFAFA] dark:bg-[#18181F] border border-[#E4E4E7] dark:border-[#27272A] flex items-start gap-3"
                >
                  <span className="text-xs font-mono font-bold text-[#DC2626] shrink-0 mt-0.5">
                    0{i + 1}.
                  </span>
                  <p className="text-sm font-medium text-[#3F3F46] dark:text-[#D4D4D8]">
                    {sol}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 5+ Photos Gallery for the Project */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black text-[#09090B] dark:text-white tracking-tight">
                Galerie de l'Opération ({project.galleryImages.length} Visuels)
              </h2>
              <span className="text-xs font-mono text-[#71717A] dark:text-[#A1A1AA]">
                Kinshasa, RDC
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.galleryImages.map((imgUrl, i) => (
                <div
                  key={i}
                  className="relative aspect-4/3 rounded-2xl overflow-hidden bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] group shadow-sm"
                >
                  <Image
                    src={imgUrl}
                    alt={`${project.title} - Visuel ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-white font-bold">
                    0{i + 1}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Actions Banner */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#09090B] to-[#18181B] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-black">
                Vous avez un projet similaire à concrétiser ?
              </h3>
              <p className="text-sm text-[#A1A1AA] mt-1">
                Discutons de vos objectifs et de la stratégie à adopter.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {project.externalUrl && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{project.externalLabel || 'Voir la publication'}</span>
                </a>
              )}

              <a
                href={`${siteConfig.whatsappUrl}&text=${encodeURIComponent(`Bonjour Mr Dosh, j'ai consulté votre étude de cas sur ${project.title}. J'aimerais échanger avec vous pour un projet similaire.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#DC2626] hover:bg-[#B91C1C] text-white shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Échanger sur ce projet</span>
              </a>
            </div>
          </div>
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </PortfolioProvider>
  );
}
