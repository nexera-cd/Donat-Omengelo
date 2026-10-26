export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  badge?: string;
  iconName: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  role: string;
  coverImage: string;
  galleryImages: string[];
  challenge: string;
  solutions: string[];
  results: string[];
  externalUrl?: string;
  externalLabel?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company?: string;
  photoUrl?: string;
  quote: string;
}

export interface TranslationData {
  nav: {
    about: string;
    services: string;
    projects: string;
    testimonials: string;
    contact: string;
    downloadCv: string;
    language: string;
  };
  hero: {
    greeting: string;
    name: string;
    alias: string;
    badge: string;
    title: string;
    slogan: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    downloadCv: string;
    location: string;
    availability: string;
  };
  about: {
    sectionTag: string;
    title: string;
    subtitle: string;
    biography: string[];
    mottoLabel: string;
    motto: string;
    downloadCv: string;
    stats: {
      stat1Number: string;
      stat1Label: string;
      stat2Number: string;
      stat2Label: string;
      stat3Number: string;
      stat3Label: string;
    };
    galleryTitle: string;
    gallerySubtitle: string;
  };
  services: {
    sectionTag: string;
    title: string;
    subtitle: string;
    ctaText: string;
    items: ServiceItem[];
  };
  projects: {
    sectionTag: string;
    title: string;
    subtitle: string;
    viewCaseStudy: string;
    backToHome: string;
    roleLabel: string;
    challengeLabel: string;
    solutionLabel: string;
    resultsLabel: string;
    galleryLabel: string;
    externalLinkPrefix: string;
    items: ProjectItem[];
  };
  testimonials: {
    sectionTag: string;
    title: string;
    subtitle: string;
    items: TestimonialItem[];
  };
  contact: {
    sectionTag: string;
    title: string;
    subtitle: string;
    locationTitle: string;
    locationAddress: string;
    whatsappTitle: string;
    whatsappSub: string;
    emailTitle: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      subjectLabel: string;
      subjectPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      sendingBtn: string;
      successMsg: string;
      errorMsg: string;
    };
    socialTitle: string;
  };
  footer: {
    agencyCredit: string;
    rights: string;
    backToTop: string;
  };
}

export const frData: TranslationData = {
  nav: {
    about: "À propos",
    services: "Ce que je sais faire",
    projects: "Accomplissements",
    testimonials: "Avis clients",
    contact: "Contact",
    downloadCv: "Télécharger mon CV",
    language: "Langue",
  },
  hero: {
    greeting: "Bonjour, je suis",
    name: "Donat Omengelo",
    alias: "Mr Dosh",
    badge: "Consultant & Stratège Digital · Kinshasa, RDC",
    title: "Consultant en Marketing Digital, Communication & IA",
    slogan: "Je transforme votre présence digitale en clients et en croissance.",
    description: "Fondateur et CEO de Dosh Corporation, consultant en gestion de projet, communication, marketing digital et IA. J'aide les entrepreneurs, les marques et les entreprises à bâtir une image forte en ligne, à attirer de nouveaux clients et à accroître leur chiffre d'affaires. Je forme aussi les équipes et les jeunes talents au digital et à l'intelligence artificielle.",
    ctaPrimary: "Démarrer un projet",
    ctaSecondary: "Explorer mes réalisations",
    downloadCv: "Télécharger mon CV",
    location: "Kinshasa, RDC",
    availability: "Disponible en présentiel & à l'international",
  },
  about: {
    sectionTag: "Parcours & Vision",
    title: "Une approche hybride au service de projets à fort impact",
    subtitle: "Architecture · Stratégie Entrepreneuriale · Digital & IA",
    biography: [
      "Diplômé en sciences et architecte en formation, j'ai construit un profil hybride : la pensée conceptuelle de l'architecture, la vision entrepreneuriale et les leviers du digital et de l'intelligence artificielle.",
      "Je ne me disperse pas entre plusieurs domaines : je les combine pour concevoir, structurer et développer des projets à impact. Fondateur et CEO de Dosh Corporation, plateforme créative dédiée à la jeunesse africaine, j'interviens dans la stratégie de communication, le marketing digital, la gestion de projet et la valorisation des marques.",
      "Mon expérience couvre des initiatives culturelles, l'organisation de conférences, dont la conférence nationale Digital Impact, et des interventions comme formateur et paneliste. Mon ambition : connecter créativité, stratégie et technologie pour transformer les idées en projets structurés, renforcer les marques et créer de nouvelles opportunités, en Afrique comme à l'international."
    ],
    mottoLabel: "Ma devise d'action",
    motto: "Inspirer, Impacter, Transformer.",
    downloadCv: "Télécharger mon CV complet",
    stats: {
      stat1Number: "+100K",
      stat1Label: "Personnes touchées lors des campagnes & événements",
      stat2Number: "1 000+",
      stat2Label: "Billets & conversions événementielles générés",
      stat3Number: "360°",
      stat3Label: "Approche intégrée : Conseil, Branding, IA & Exécution",
    },
    galleryTitle: "En action & moments clés",
    gallerySubtitle: "Ateliers, conférences, sessions de formation et immersion de terrain.",
  },
  services: {
    sectionTag: "Ce que je sais faire",
    title: "Des solutions concrètes pour accélérer votre développement",
    subtitle: "Chaque service est conçu sur-mesure pour créer de la valeur mesurable et vous positionner en référence de votre secteur.",
    ctaText: "Échanger sur votre besoin",
    items: [
      {
        id: "marketing-acquisition",
        title: "Stratégie Marketing & Acquisition clients",
        description: "Je mets en place des méthodes adaptées à votre marché pour attirer des prospects qualifiés, les convertir en clients et les fidéliser. Positionnement, tunnel de conversion, publicité digitale et suivi des résultats.",
        badge: "Performance & ROI",
        iconName: "TrendingUp",
      },
      {
        id: "personal-branding",
        title: "Personal Branding & E-réputation",
        description: "Je construis votre image professionnelle en ligne pour qu'elle inspire confiance et attire les opportunités : collaborations, partenariats, investisseurs.",
        badge: "Influence & Crédibilité",
        iconName: "Award",
      },
      {
        id: "community-management",
        title: "Community Management & Animation",
        description: "Je crée, gère et anime vos réseaux sociaux avec une ligne éditoriale claire et des contenus réguliers. Objectif : une communauté engagée et des résultats mesurables (visibilité, prospects, ventes).",
        badge: "Engagement",
        iconName: "Users",
      },
      {
        id: "ia-entreprises",
        title: "IA appliquée aux entreprises",
        description: "J'intègre des outils d'intelligence artificielle pour automatiser vos tâches répétitives, rédiger vos documents professionnels et produire vos contenus plus vite. Je forme aussi vos équipes à les utiliser.",
        badge: "Productivité & Futur",
        iconName: "Cpu",
      },
      {
        id: "gestion-projet",
        title: "Gestion de projet digital",
        description: "Je vous accompagne de l'idée à la concrétisation : cadrage, planification, coordination des équipes et pilotage de la communication, en tant que manager digital.",
        badge: "Rigueur & Déploiement",
        iconName: "CheckCircle",
      },
      {
        id: "conception-architecturale",
        title: "Conception architecturale (Architecte en formation)",
        description: "Esquisses, plans de principe et visualisation de concepts pour vos projets d'habitation et autres, avec la rigueur de ma formation en architecture.",
        badge: "Design & Espace",
        iconName: "Compass",
      },
    ],
  },
  projects: {
    sectionTag: "Accomplissements & Projets",
    title: "Des résultats tangibles sur le terrain",
    subtitle: "Découvrez comment la stratégie, la coordination rigoureuse et la créativité transforment chaque événement en succès marquant.",
    viewCaseStudy: "Lire l'étude de cas complète",
    backToHome: "Retour à l'accueil",
    roleLabel: "Rôle & Responsabilité",
    challengeLabel: "Le Contexte & Défi",
    solutionLabel: "Méthodologie & Actions déployées",
    resultsLabel: "Résultats & Impact mesuré",
    galleryLabel: "Galerie visuelle de l'opération",
    externalLinkPrefix: "Consulter la publication officielle",
    items: [
      {
        slug: "accueil-isau",
        title: "Accueil des nouveaux étudiants - ISAU",
        subtitle: "Institut Supérieur d'Architecture et d'Urbanisme",
        category: "Événementiel & Vente de Billetterie",
        role: "Chef de projet digital - communication, marketing digital, couverture événementielle avec mon entreprise Dosh Corporation",
        coverImage: "https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/donat%20project/IMG_3970.JPG",
        galleryImages: [
          "https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/donat%20project/IMG_3970.JPG",
          "https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/donat%20project/IMG_5884.JPG",
          "https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/donat%20project/IMG_0311.JPG",
          "https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/donat%20project/IMG_0193.JPG",
          "https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/donat%20project/IMG_4667.JPG"
        ],
        challenge: "Accueillir la nouvelle promotion avec un événement fédérateur d'envergure, commercialiser les billets d'accès et donner à l'activité une résonance et une forte visibilité avant, pendant et après le jour J.",
        solutions: [
          "Constitution d'une équipe de communication et de marketing digital dédiée.",
          "Élaboration d'un calendrier éditorial stratégique multi-plateformes.",
          "Supervision rigoureuse de la création des contenus et de la communication visuelle percutante.",
          "Couverture événementielle en direct et community management immersif tout au long de la journée."
        ],
        results: [
          "Près de 1 000 billets vendus avec un taux d'adhésion record.",
          "Plus de 100 000 personnes touchées en présentiel et sur les réseaux sociaux.",
          "Une présence digitale soutenue et une notoriété renforcée pour la promotion et l'institution."
        ],
        externalUrl: "https://vt.tiktok.com/ZSg5N8FCa/",
        externalLabel: "Voir la vidéo officielle sur TikTok",
      },
      {
        slug: "conference-dl-community",
        title: "Conférence Disco Lomboto (DL Community)",
        subtitle: "Leadership, inspiration et mobilisation de la jeunesse",
        category: "Conférence & Marketing d'Influence",
        role: "Chef de projet digital - community management, communication et marketing événementiel",
        coverImage: "https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/donat%20project/IMG_5884.JPG",
        galleryImages: [
          "https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/donat%20project/IMG_5884.JPG",
          "https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/donat%20project/IMG_0318.JPG",
          "https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/donat%20project/IMG_0311.JPG",
          "https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/donat%20project/IMG_0193.JPG",
          "https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/donat%20project/IMG_4667.JPG"
        ],
        challenge: "Mobiliser un large public engagé autour des enjeux cruciaux de la jeunesse et assurer une forte présence et une couverture média en ligne pour la conférence.",
        solutions: [
          "Mise en place de la stratégie globale de communication et de marketing de l'événement.",
          "Coordination de l'équipe communication et alignement des messages clés.",
          "Community management proactif avant, pendant et après la conférence pour maximiser les interactions."
        ],
        results: [
          "Plus de 200 participants réunis en présentiel dans une atmosphère stimulante.",
          "Forte présence et résonance en ligne de l'activité (pic de vues, partages viraux et abonnés qualifiés gagnés).",
          "Positionnement renforcé de DL Community auprès des décideurs et des jeunes actifs."
        ],
        externalUrl: "https://www.instagram.com/p/DZaKxhECBDt/?img_index=11&obrf=MTh1YWI5NWgwOHVwdw==",
        externalLabel: "Voir le récapitulatif sur Instagram",
      },
      {
        slug: "digital-impact",
        title: "Digital Impact - Conférence Nationale",
        subtitle: "Le grand rassemblement sur le digital et l'entrepreneuriat par Dosh Corporation",
        category: "Écosystème Numérique & Partenariats",
        role: "Organisateur principal - pilotage de projet, communication, partenariats stratégiques",
        coverImage: "https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/donat%20project/IMG_0311.JPG",
        galleryImages: [
          "https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/donat%20project/IMG_0311.JPG",
          "https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/donat%20project/IMG_0193.JPG",
          "https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/donat%20project/IMG_4667.JPG",
          "https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/donat%20project/IMG_3970.JPG",
          "https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/donat%20project/IMG_5884.JPG"
        ],
        challenge: "Connecter les jeunes, les entrepreneurs et les marques congolaises, et favoriser concrètement l'insertion professionnelle des talents dans les métiers du digital et de l'intelligence artificielle.",
        solutions: [
          "Mise en place et pilotage transversale des commissions : communication, marketing, logistique et partenariats.",
          "Conception d'un format immersif orienté networking à haute valeur ajoutée entre talents, entrepreneurs et marques.",
          "Coordination des intervenants de référence, sponsors institutionnels et partenaires médiatiques."
        ],
        results: [
          "Une audience globale de plus de 100 000 personnes mobilisée en ligne et via les relais médias.",
          "Émergence de collaborations et partenariats internationaux de premier plan.",
          "Impact direct sur l'insertion professionnelle et l'acculturation technologique de centaines de jeunes."
        ],
        externalUrl: "https://www.instagram.com/dosh_corporation?rpxt=MWVrN2Y2aXB4YzM2ag==",
        externalLabel: "Consulter la page officielle Dosh Corporation",
      },
    ],
  },
  testimonials: {
    sectionTag: "Avis & Recommandations",
    title: "Ce que disent mes partenaires et clients",
    subtitle: "Des retours authentiques de dirigeants, conférenciers et experts ayant collaboré avec moi.",
    items: [
      {
        id: "modeste-kanku",
        name: "Modeste Kanku",
        role: "CEO",
        company: "Picture Group",
        photoUrl: "https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/donat%20project/IMG_1478.JPG",
        quote: "Ce que j’apprécie chez Donat, c’est sa capacité à faire le lien entre une vision et sa mise en œuvre. Il sait apporter des idées, structurer une démarche et contribuer à faire avancer un projet. Son ouverture à plusieurs disciplines lui permet d’aborder les défis avec créativité, méthode et une réelle volonté de trouver des solutions.",
      },
      {
        id: "disco-lomboto",
        name: "Disco LOMBOTO",
        role: "Conférencier & CEO",
        company: "DL Community",
        photoUrl: "https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/donat%20project/IMG_0318.JPG",
        quote: "La collaboration avec Donat nous a apporté une nouvelle perspective sur notre communication digitale. Il prend le temps de comprendre nos besoins, propose des stratégies adaptées à nos objectifs et apporte des pistes concrètes pour améliorer notre visibilité. Nous avons apprécié son approche structurée, sa créativité et sa capacité à relier ses recommandations aux réalités de notre activité.",
      },
      {
        id: "benita-ramazani",
        name: "Benita RAMAZANI",
        role: "Experte en communication & Journaliste",
        company: "Univers TV",
        photoUrl: "https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/donat%20project/IMG_7022.JPG",
        quote: "Donat Omengelo se distingue par son intérêt pour les enjeux du numérique et sa capacité à apporter un regard pertinent sur les transformations de notre société. C’est un profil qui mérite de trouver davantage d’espaces d’expression et de partage d’expérience.",
      },
      {
        id: "meda-odia",
        name: "Meda ODIA",
        role: "Collaboratrice & Partenaire",
        quote: "Travailler avec Donat, c’est évoluer aux côtés d’un leader qui sait donner une direction, encourager les initiatives et rappeler l’importance des objectifs collectifs. Il nous pousse à développer nos capacités, à prendre nos responsabilités et à transformer nos idées en actions. Son leadership repose sur la vision, l’engagement et la volonté de progresser ensemble.",
      },
    ],
  },
  contact: {
    sectionTag: "Contact & Collaboration",
    title: "Donnons vie à vos projets ambitieux",
    subtitle: "Vous souhaitez booster votre acquisition, professionnaliser votre communication ou intégrer l'IA dans votre entreprise ? Échangeons dès aujourd'hui.",
    locationTitle: "Localisation",
    locationAddress: "Kinshasa, République Démocratique du Congo (RDC)",
    whatsappTitle: "WhatsApp Direct",
    whatsappSub: "+243 832 579 179 · Échange rapide et prise de rendez-vous",
    emailTitle: "Courriel professionnel",
    form: {
      nameLabel: "Votre nom complet",
      namePlaceholder: "Ex. : Jean-Paul Mukendi",
      emailLabel: "Votre adresse e-mail",
      emailPlaceholder: "nom@entreprise.com",
      subjectLabel: "Votre besoin principal",
      subjectPlaceholder: "Stratégie marketing, Visibilité, IA, Gestion de projet...",
      messageLabel: "Détails de votre projet ou question",
      messagePlaceholder: "Décrivez brièvement vos attentes, vos objectifs ou vos délais...",
      submitBtn: "Envoyer mon message",
      sendingBtn: "Transmission en cours...",
      successMsg: "Votre message a été transmis avec succès. Donat Omengelo vous répondra dans les plus brefs délais.",
      errorMsg: "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou contacter directement via WhatsApp.",
    },
    socialTitle: "Retrouvez-moi sur les réseaux",
  },
  footer: {
    agencyCredit: "Site réalisé par Nexera · Kinshasa, RDC",
    rights: "Tous droits réservés.",
    backToTop: "Haut de page",
  },
};
