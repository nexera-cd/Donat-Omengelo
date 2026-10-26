'use client';

import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { siteConfig } from '../data/content';
import {
  Mail,
  MessageCircle,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Video,
} from 'lucide-react';

const socialIconMap: Record<string, React.ElementType> = {
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Video,
};

export function ContactSection() {
  const { content } = usePortfolio();

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus('error');
      setErrorMessage('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la soumission');
      }

      setStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
      setErrorMessage(content.contact.form.errorMsg);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white dark:bg-[#0D0D12] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#DC2626]/10 text-[#DC2626] dark:bg-[#DC2626]/20 font-bold text-xs uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>{content.contact.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#09090B] dark:text-white tracking-tight">
            {content.contact.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#52525B] dark:text-[#A1A1AA]">
            {content.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct channels & Interactive Google Maps */}
          <div className="lg:col-span-5 space-y-8">
            {/* WhatsApp Direct Card */}
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-2xl bg-[#FAFAFA] dark:bg-[#121217] border border-[#E4E4E7] dark:border-[#27272A] hover:border-[#DC2626] dark:hover:border-[#EF4444] transition-all shadow-xs hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 group-hover:bg-[#DC2626] group-hover:text-white transition-colors shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#09090B] dark:text-white group-hover:text-[#DC2626] dark:group-hover:text-[#EF4444] transition-colors">
                    {content.contact.whatsappTitle}
                  </h3>
                  <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] mt-1">
                    {content.contact.whatsappSub}
                  </p>
                  <span className="inline-block mt-2 text-xs font-mono font-bold text-[#DC2626] dark:text-[#EF4444]">
                    {siteConfig.phoneFormatted} →
                  </span>
                </div>
              </div>
            </a>

            {/* Email Direct Card */}
            <a
              href={`mailto:${siteConfig.email}?subject=${encodeURIComponent('Demande de contact - Portfolio Donat Omengelo')}`}
              className="group block p-6 rounded-2xl bg-[#FAFAFA] dark:bg-[#121217] border border-[#E4E4E7] dark:border-[#27272A] hover:border-[#DC2626] dark:hover:border-[#EF4444] transition-all shadow-xs hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#DC2626]/10 text-[#DC2626] dark:bg-[#DC2626]/20 dark:text-[#EF4444] group-hover:bg-[#DC2626] group-hover:text-white transition-colors shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#09090B] dark:text-white group-hover:text-[#DC2626] dark:group-hover:text-[#EF4444] transition-colors">
                    {content.contact.emailTitle}
                  </h3>
                  <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] mt-1">
                    Réponse sous 24 à 48 heures ouvrées
                  </p>
                  <span className="inline-block mt-2 text-xs font-mono font-bold text-[#09090B] dark:text-white">
                    {siteConfig.email} →
                  </span>
                </div>
              </div>
            </a>

            {/* Google Maps Embed for Kinshasa, RDC */}
            <div className="rounded-2xl overflow-hidden border border-[#E4E4E7] dark:border-[#27272A] bg-[#FAFAFA] dark:bg-[#121217] p-2">
              <div className="flex items-center gap-2 px-3 py-2 text-xs font-bold text-[#71717A] dark:text-[#A1A1AA]">
                <MapPin className="w-3.5 h-3.5 text-[#DC2626]" />
                <span>{content.contact.locationAddress}</span>
              </div>
              <div className="relative w-full h-56 rounded-xl overflow-hidden">
                <iframe
                  title="Localisation Kinshasa RDC"
                  src={siteConfig.location.mapIframeUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale contrast-125 dark:invert dark:hue-rotate-180"
                />
              </div>
            </div>

            {/* Social Media Links List */}
            <div className="pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA] mb-4">
                {content.contact.socialTitle}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {siteConfig.socialLinks.map((social) => {
                  const Icon = socialIconMap[social.iconName] || Mail;

                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#FAFAFA] dark:bg-[#18181F] text-[#09090B] dark:text-white border border-[#E4E4E7] dark:border-[#27272A] hover:border-[#DC2626] hover:text-[#DC2626] dark:hover:border-[#EF4444] dark:hover:text-[#EF4444] transition-all"
                      aria-label={`Profil ${social.name}`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFAFA] dark:bg-[#121217] border border-[#E4E4E7] dark:border-[#27272A] shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold uppercase tracking-wider text-[#09090B] dark:text-white mb-2"
                  >
                    {content.contact.form.nameLabel} <span className="text-[#DC2626]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder={content.contact.form.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#18181F] border border-[#E4E4E7] dark:border-[#27272A] text-sm text-[#09090B] dark:text-white placeholder-[#A1A1AA] focus:outline-none focus:ring-2 focus:ring-[#DC2626] transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-bold uppercase tracking-wider text-[#09090B] dark:text-white mb-2"
                  >
                    {content.contact.form.emailLabel} <span className="text-[#DC2626]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder={content.contact.form.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#18181F] border border-[#E4E4E7] dark:border-[#27272A] text-sm text-[#09090B] dark:text-white placeholder-[#A1A1AA] focus:outline-none focus:ring-2 focus:ring-[#DC2626] transition-all"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-bold uppercase tracking-wider text-[#09090B] dark:text-white mb-2"
                  >
                    {content.contact.form.subjectLabel}
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder={content.contact.form.subjectPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#18181F] border border-[#E4E4E7] dark:border-[#27272A] text-sm text-[#09090B] dark:text-white placeholder-[#A1A1AA] focus:outline-none focus:ring-2 focus:ring-[#DC2626] transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold uppercase tracking-wider text-[#09090B] dark:text-white mb-2"
                  >
                    {content.contact.form.messageLabel} <span className="text-[#DC2626]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder={content.contact.form.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#18181F] border border-[#E4E4E7] dark:border-[#27272A] text-sm text-[#09090B] dark:text-white placeholder-[#A1A1AA] focus:outline-none focus:ring-2 focus:ring-[#DC2626] transition-all resize-none"
                  />
                </div>

                {/* Feedback states */}
                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span>{content.contact.form.successMsg}</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-400 text-xs sm:text-sm flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{errorMessage || content.contact.form.errorMsg}</span>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider bg-[#DC2626] hover:bg-[#B91C1C] text-white shadow-md hover:shadow-lg transition-all disabled:opacity-50 cursor-pointer"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{content.contact.form.sendingBtn}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{content.contact.form.submitBtn}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
