import type { Metadata } from 'next';
import './globals.css';
import { generatePersonJsonLd } from '../src/lib/portfolio-utils';
import { siteConfig } from '../src/data/content';

const title = 'Donat Omengelo | Portfolio & Stratégie Digitale';
const description =
  'Portfolio officiel de Donat Omengelo (Mr Dosh) - Consultant en Marketing Digital, Communication & IA, Fondateur & CEO de Dosh Corporation à Kinshasa, RDC.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Donat Omengelo',
    'Mr Dosh',
    'Dosh Corporation',
    'Marketing Digital Kinshasa',
    'Communication RDC',
    'Intelligence Artificielle Kinshasa',
    'Consultant Digital Afrique',
    'Digital Impact',
  ],
  authors: [{ name: 'Donat Omengelo', url: 'https://donatomengelo.com' }],
  creator: 'Donat Omengelo',
  publisher: 'Nexera',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: ['en_US'],
    siteName: 'Donat Omengelo Portfolio',
    images: [
      {
        url: siteConfig.heroPhoto,
        width: 1200,
        height: 630,
        alt: 'Donat Omengelo - Consultant Marketing Digital, Communication & IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@mrdxsh',
    images: [siteConfig.heroPhoto],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = generatePersonJsonLd();

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-[#DC2626] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
