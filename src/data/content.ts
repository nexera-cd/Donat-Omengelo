import { frData, TranslationData } from './translations/fr';
import { enData } from './translations/en';

export type Language = 'fr' | 'en';

export interface SocialLink {
  platform: 'linkedin' | 'x' | 'facebook' | 'instagram' | 'youtube' | 'tiktok';
  name: string;
  url: string;
  username: string;
  iconName: string;
}

export interface SiteConfig {
  name: string;
  alias: string;
  brandMonogram: string;
  title: string;
  email: string;
  phone: string;
  phoneFormatted: string;
  whatsappMessage: string;
  whatsappUrl: string;
  location: {
    city: string;
    country: string;
    fullAddress: string;
    mapIframeUrl: string;
  };
  cvUrl: string;
  heroPhoto: string;
  aboutPhoto: string;
  aboutCarouselPhotos: string[];
  socialLinks: SocialLink[];
  agency: {
    name: string;
    location: string;
    creditText: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Donat Omengelo",
  alias: "Mr Dosh",
  brandMonogram: "DOSH",
  title: "Consultant en Marketing Digital, Communication & IA · Fondateur & CEO de Dosh Corporation",
  email: "doshomengelo@gmail.com",
  phone: "+243832579179",
  phoneFormatted: "+243 832 579 179",
  whatsappMessage: "Bonjour Mr Dosh, je viens de découvrir votre portfolio. J'aimerais développer [mon entreprise / ma marque / mon image]. Mon besoin principal: [visibilité, nouveaux clients, réseaux sociaux, IA ou formation]. Quand pouvons-nous en parler?",
  get whatsappUrl(): string {
    const textEncoded = encodeURIComponent(this.whatsappMessage);
    return `https://wa.me/243832579179?text=${textEncoded}`;
  },
  location: {
    city: "Kinshasa",
    country: "République Démocratique du Congo (RDC)",
    fullAddress: "Kinshasa, République Démocratique du Congo",
    // Embed Google Maps for Kinshasa
    mapIframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254600.9996637841!2d15.17871305952528!3d-4.401344440078866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a313094ae3b95%3A0x6b7724a7ff95627!2sKinshasa%2C%20R%C3%A9publique%20d%C3%A9mocratique%20du%20Congo!5e0!3m2!1sfr!2scd!4v1700000000000!5m2!1sfr!2scd",
  },
  cvUrl: "https://drive.google.com/file/d/10zF89pBfzHpv_vtWSsLOw-_4bsTNUVnf/view?usp=drivesdk",
  heroPhoto: "https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/donat%20project/IMG_8273.PNG",
  aboutPhoto: "https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/donat%20project/IMG_0604.JPG",
  aboutCarouselPhotos: [
    "https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/donat%20project/IMG_3970.JPG",
    "https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/donat%20project/IMG_5884.JPG",
    "https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/donat%20project/IMG_0311.JPG",
    "https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/donat%20project/IMG_0193.JPG",
    "https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/donat%20project/IMG_4667.JPG",
  ],
  socialLinks: [
    {
      platform: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dosh-omengelo-75aba5298?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      username: "dosh-omengelo",
      iconName: "Linkedin",
    },
    {
      platform: "x",
      name: "X (Twitter)",
      url: "https://x.com/mrdxsh?s=11",
      username: "@mrdxsh",
      iconName: "Twitter",
    },
    {
      platform: "instagram",
      name: "Instagram",
      url: "https://www.instagram.com/mr_dosh__?psln=MW1kM2xIMGM3azZodA%3D%3D&utm_source=gr",
      username: "@mr_dosh__",
      iconName: "Instagram",
    },
    {
      platform: "facebook",
      name: "Facebook",
      url: "https://www.facebook.com/MrDosh?mibextid=wwXlfr",
      username: "MrDosh",
      iconName: "Facebook",
    },
    {
      platform: "tiktok",
      name: "TikTok",
      url: "https://www.tiktok.com/@doshomengelo",
      username: "@doshomengelo",
      iconName: "Video",
    },
    {
      platform: "youtube",
      name: "YouTube",
      url: "http://www.youtube.com/@doshomengelo3027",
      username: "@doshomengelo3027",
      iconName: "Youtube",
    },
  ],
  agency: {
    name: "Nexera",
    location: "Kinshasa, République Démocratique du Congo",
    creditText: "Site réalisé par Nexera",
  },
};

export const translations: Record<Language, TranslationData> = {
  fr: frData,
  en: enData,
};

export function getContent(lang: Language = 'fr'): TranslationData {
  return translations[lang] || translations.fr;
}

export function getProjectBySlug(slug: string, lang: Language = 'fr') {
  const content = getContent(lang);
  return content.projects.items.find((item) => item.slug === slug);
}
