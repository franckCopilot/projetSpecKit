import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Franck Petretto - Formateur IA Générative',
  description:
    'Expert en Intelligence Artificielle Générative, Microsoft Copilot et assistants de codage. Formations professionnelles à Grenoble.',
  keywords: [
    'IA Générative',
    'Formation IA',
    'Microsoft Copilot',
    'Prompting',
    'Grenoble',
  ],
  authors: [{ name: 'Franck Petretto' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    title: 'Franck Petretto - Formateur IA Générative',
    description:
      'Expert en Intelligence Artificielle Générative basé à Grenoble',
    siteName: 'Franck Petretto',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
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
