import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import {
  StructuredData,
  organizationData,
  websiteData,
} from '@/components/StructuredData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://masterclass-ia.fr'),
  title: 'Franck Petretto - Formateur IA Générative',
  description:
    'Masterclass IA et formation professionnelle en Intelligence Artificielle Générative. Expert en art du prompting, Microsoft Copilot (M365, Studio), Copilot Studio, agents IA et GitHub Copilot. Formations à Grenoble et partout en France.',
  keywords: [
    'IA Générative',
    'Formation IA',
    'Formation IA Générative',
    'Masterclass IA',
    'Microsoft Copilot',
    'Copilot M365',
    'Copilot Studio',
    'Art du Prompting',
    'Prompt Engineering',
    'Prompting',
    'Grenoble',
    'GitHub Copilot',
    'Agents IA',
    'Assistants IA',
    'LLM',
    'Large Language Models',
    'Formation professionnelle',
    'Intelligence Artificielle',
    'GenAI',
    'Transformation digitale',
  ],
  authors: [{ name: 'Franck Petretto' }],
  creator: 'Franck Petretto',
  publisher: 'Franck Petretto',
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://masterclass-ia.fr',
    title: 'Franck Petretto - Formateur IA Générative',
    description:
      'Expert en Intelligence Artificielle Générative basé à Grenoble',
    siteName: 'Franck Petretto - Formation IA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Franck Petretto - Formateur IA Générative',
    description:
      'Expert en Intelligence Artificielle Générative basé à Grenoble',
  },
  alternates: {
    canonical: 'https://masterclass-ia.fr',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <StructuredData data={[organizationData, websiteData]} />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <footer className="bg-gray-900 text-white py-8 mt-auto">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 Franck Petretto. Tous droits réservés.</p>
            <div className="mt-4 space-x-4">
              <a
                href="/mentions-legales"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Mentions Légales
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
