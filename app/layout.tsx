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
            
            {/* Réseaux sociaux */}
            <div className="mt-4 flex justify-center items-center space-x-6">
              <a
                href="http://www.linkedin.com/in/masterclass-ia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              
              {/* YouTube - lien à venir */}
              {/* Décommentez quand le lien sera disponible
              <a
                href="https://www.youtube.com/@votre-chaine"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              */}
            </div>
            
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
