import { getContent, getProjectBySlug, Language, siteConfig } from '../data/content';

/**
 * Validates and formats the WhatsApp click-to-chat URL with encoded prefilled message.
 */
export function buildWhatsAppUrl(customMessage?: string): string {
  const cleanPhone = siteConfig.phone.replace(/[^0-9]/g, '');
  const message = customMessage || siteConfig.whatsappMessage;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Validates whether a project slug exists in the dataset.
 */
export function isValidProjectSlug(slug: string, lang: Language = 'fr'): boolean {
  return Boolean(getProjectBySlug(slug, lang));
}

/**
 * Formats contact form payload and validates input values.
 */
export interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateContactForm(payload: Partial<ContactPayload>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!payload.name || payload.name.trim().length < 2) {
    errors.name = 'Le nom doit comporter au moins 2 caractères.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!payload.email || !emailRegex.test(payload.email.trim())) {
    errors.email = 'Veuillez saisir une adresse e-mail valide.';
  }

  if (!payload.message || payload.message.trim().length < 10) {
    errors.message = 'Le message doit comporter au moins 10 caractères.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Generates Schema.org Person JSON-LD object for SEO.
 */
export function generatePersonJsonLd(baseUrl: string = 'https://donatomengelo.com') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    alternateName: [siteConfig.alias, 'Mr Dosh'],
    jobTitle: siteConfig.title,
    worksFor: {
      '@type': 'Organization',
      name: 'Dosh Corporation',
      url: 'https://www.instagram.com/dosh_corporation',
    },
    url: baseUrl,
    image: siteConfig.heroPhoto,
    email: siteConfig.email,
    telephone: siteConfig.phoneFormatted,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location.city,
      addressCountry: 'CD',
    },
    sameAs: siteConfig.socialLinks.map((s) => s.url),
  };
}
