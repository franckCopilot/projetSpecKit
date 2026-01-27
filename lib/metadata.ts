// lib/metadata.ts
import { Metadata } from 'next';

interface PageMetadataOptions {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

export function createMetadata({
  title,
  description,
  keywords = [],
  ogImage = '/og-image.jpg',
}: PageMetadataOptions): Metadata {
  const fullTitle = `${title} | Franck Petretto`;

  return {
    title: fullTitle,
    description,
    keywords: [
      'IA Générative',
      'Formation IA',
      'Microsoft Copilot',
      'Prompting',
      'Grenoble',
      ...keywords,
    ],
    authors: [{ name: 'Franck Petretto' }],
    openGraph: {
      title: fullTitle,
      description,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'Franck Petretto',
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
  };
}
