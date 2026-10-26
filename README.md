# Portfolio Professionnel — Donat Omengelo (Mr Dosh)

Portfolio officiel de **Donat Omengelo**, Consultant en Marketing Digital, Communication & IA, Fondateur & CEO de **Dosh Corporation** à Kinshasa (République Démocratique du Congo).

Conçu et développé par l'agence **Nexera** (Kinshasa, RDC). Formule : **Pack B · Showcase / Créatif**.

---

## 🚀 Fonctionnalités & Spécificités

- **Next.js 15 (App Router)** avec React 19, TypeScript et Tailwind CSS v4.
- **Palette de marque** : Rouge (`#DC2626`), Blanc (`#FAFAFA`), Noir profond (`#09090B`) — minimaliste, vive et haute précision.
- **Logo Monogramme DOSH** vectoriel en SVG dans le header et en favicon (`app/icon.svg`).
- **Bascule Mode Sombre / Clair** mémorisée dans le navigateur (`localStorage`) et alignée sur la préférence système par défaut.
- **Site Multilingue** : Français (par défaut) et Anglais (`/fr` et `/en`) avec sélecteur instantané.
- **Centralisation du contenu** : Textes, coordonnées, projets et liens dans `src/data/content.ts`.
- **Galerie & Carrousel tactile** de 5 photos professionnelles dans la section *À propos* avec aperçu plein écran (Lightbox).
- **Animations sobres au défilement** avec Motion, respectant `prefers-reduced-motion`.
- **3 Études de cas dédiées** (`/projets/[slug]`) avec galeries de 5 visuels, défis, méthodologie et résultats quantifiés.
- **Témoignages clients authentiques** avec portraits et fonctions réelles (Picture Group, DL Community, Univers TV...).
- **Intégration Google Maps** centrée sur Kinshasa, RDC.
- **Bouton WhatsApp flottant** avec message pré-rempli encodé et lien `wa.me`.
- **Formulaire de contact validé** relié à la route API `/api/contact` (compatible Resend).
- **SEO & Référencement** : OpenGraph, Twitter Cards, `robots.txt`, `sitemap.xml`, balises sémantiques et données structurées Schema.org JSON-LD (`Person`).
- **Mention obligatoire de l'agence** : *Site réalisé par Nexera · Kinshasa, RDC*.

---

## 🛠️ Installation & Démarrage en local

### Prérequis
- Node.js 18+ ou 20+
- npm, yarn ou pnpm

### Commandes

```bash
# 1. Cloner le dépôt
git clone https://github.com/votre-compte/donat-omengelo-portfolio.git
cd donat-omengelo-portfolio

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

L'application est accessible sur [http://localhost:3000](http://localhost:3000).

### Build de production

```bash
npm run build
npm run start
```

---

## ⚙️ Variables d'Environnement

Créez un fichier `.env.local` à la racine du projet :

```env
# URL canonique du site (utilisée pour OpenGraph, sitemap et JSON-LD)
NEXT_PUBLIC_APP_URL="https://donatomengelo.com"

# Clé API optionnelle Resend pour l'envoi d'e-mails réels depuis le formulaire
RESEND_API_KEY=""
```

---

## 🌐 Déploiement sur Vercel & Domaine Personnalisé

Le projet est 100% optimisé pour un déploiement instantané sur [Vercel](https://vercel.com) :

1. **Connecter le dépôt GitHub** :
   - Rendez-vous sur votre dashboard Vercel, cliquez sur **« Add New » > « Project »** et importez le repository.
   - Laissez le preset par défaut **Next.js**.

2. **Configurer les variables d'environnement** :
   - Dans l'onglet *Environment Variables*, ajoutez `NEXT_PUBLIC_APP_URL` avec l'URL finale de votre domaine (ex. `https://donatomengelo.com`).
   - Ajoutez `RESEND_API_KEY` si vous souhaitez activer la livraison d'emails directe.

3. **Lier votre domaine personnalisé (ex. donatomengelo.com)** :
   - Dans les paramètres du projet Vercel (*Settings > Domains*), ajoutez `donatomengelo.com` et `www.donatomengelo.com`.
   - Vercel vous fournira les enregistrements DNS à configurer chez votre registrar (GoDaddy, Namecheap, Google Domains...) :
     - **Enregistrement A** : `@` pointe vers l'adresse IP de Vercel (`76.76.21.21`).
     - **Enregistrement CNAME** : `www` pointe vers `cname.vercel-dns.com`.
   - La propagation DNS et la génération du certificat SSL/HTTPS se font automatiquement en quelques minutes.

---

## 📁 Architecture des Fichiers

```
├── app/
│   ├── api/contact/route.ts      # Endpoint API formulaire de contact
│   ├── projets/[slug]/page.tsx   # Pages dédiées aux études de cas (3 projets)
│   ├── fr/page.tsx               # Route dédiée Français
│   ├── en/page.tsx               # Route dédiée Anglais
│   ├── globals.css               # Styles globaux Tailwind v4 & thèmes
│   ├── icon.svg                  # Monogramme vectoriel DOSH
│   ├── layout.tsx                # Layout racine avec JSON-LD et métadonnées
│   ├── page.tsx                  # Page principale
│   ├── robots.ts                 # Générateur robots.txt
│   └── sitemap.ts                # Générateur sitemap.xml
├── public/
│   ├── cv.pdf                    # Document CV téléchargeable
│   └── icon.svg                  # Favicon SVG
├── src/
│   ├── components/
│   │   ├── Navbar.tsx            # Header, logo DOSH, switcher thème & langues
│   │   ├── Hero.tsx              # Bannière hero, portrait principal, badges
│   │   ├── About.tsx             # À propos, chiffres clés, carrousel 5 photos
│   │   ├── Services.tsx          # Les 6 expertises métier
│   │   ├── Projects.tsx          # Les 3 réalisations & études de cas
│   │   ├── Testimonials.tsx      # Avis clients vérifiés & photos
│   │   ├── ContactSection.tsx    # Google Maps, WhatsApp, formulaire, réseaux
│   │   ├── FloatingWhatsApp.tsx  # Bouton flottant avec message pré-rempli
│   │   └── Footer.tsx            # Mentions légales & crédit Nexera Kinshasa
│   ├── context/
│   │   └── PortfolioContext.tsx  # Gestion d'état thème & multilingue
│   ├── data/
│   │   ├── content.ts            # Fichier unique de configuration et données
│   │   └── translations/         # Dictionnaires FR & EN
│   └── lib/
│       ├── portfolio-utils.ts    # Fonctions utilitaires pures
│       └── portfolio-utils.test.ts # Tests unitaires (node:test)
```

---

## 📄 Licence & Droits
Tous droits réservés © Donat Omengelo / Dosh Corporation. Réalisé par **Nexera** (Kinshasa, RDC).
