// lib/metadata.ts
import { Metadata } from 'next';

interface PageMetadataOptions {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonicalPath?: string;
}

export function createMetadata({
  title,
  description,
  keywords = [],
  ogImage = '/og-image.jpg',
  canonicalPath = '',
}: PageMetadataOptions): Metadata {
  const fullTitle = `${title} | Franck Petretto`;
  const baseUrl = 'https://masterclass-ia.fr';
  const canonicalUrl = `${baseUrl}${canonicalPath}`;

  return {
    metadataBase: new URL(baseUrl),
    title: fullTitle,
    description,
    keywords: [
      'IA Générative',
      'Formation IA',
      'Formation IA Générative',
      'Masterclass IA',
      'Microsoft Copilot',
      'Copilot Studio',
      'Copilot M365',
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
      'Formation continue',
      'Transformation digitale',
      ...keywords,
    ],
    authors: [{ name: 'Franck Petretto' }],
    creator: 'Franck Petretto',
    publisher: 'Franck Petretto',
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
      title: fullTitle,
      description,
      type: 'website',
      locale: 'fr_FR',
      url: canonicalUrl,
      siteName: 'Franck Petretto - Formation IA',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}
