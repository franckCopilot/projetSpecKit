// components/StructuredData.tsx
import Script from 'next/script';

interface Organization {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo?: string;
  description: string;
  address?: {
    '@type': string;
    addressLocality: string;
    addressCountry: string;
  };
  founder?: {
    '@type': string;
    name: string;
  };
  contactPoint?: {
    '@type': string;
    contactType: string;
    url: string;
  };
  sameAs?: string[];
}

interface Person {
  '@context': string;
  '@type': string;
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  address?: {
    '@type': string;
    addressLocality: string;
    addressCountry: string;
  };
  knowsAbout?: string[];
}

interface Service {
  '@context': string;
  '@type': string;
  serviceType: string;
  provider: {
    '@type': string;
    name: string;
  };
  areaServed: {
    '@type': string;
    name: string;
  };
  offers?: Array<{
    '@type': string;
    name: string;
    description: string;
    price?: string;
    priceCurrency?: string;
  }>;
}

interface WebSite {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  description: string;
  inLanguage: string;
  potentialAction?: {
    '@type': string;
    target: string;
    'query-input': string;
  };
}

type StructuredDataType = Organization | Person | Service | WebSite | object;

interface StructuredDataProps {
  data: StructuredDataType | StructuredDataType[];
}

export function StructuredData({ data }: StructuredDataProps) {
  const jsonLd = JSON.stringify(data);

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
      strategy="beforeInteractive"
    />
  );
}

// Données structurées pour l'organisation
export const organizationData: Organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Franck Petretto - Formation IA',
  url: 'https://masterclass-ia.fr',
  logo: 'https://masterclass-ia.fr/logo.png',
  description:
    'Formation professionnelle en Intelligence Artificielle Générative, Microsoft Copilot et assistants de codage.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Grenoble',
    addressCountry: 'FR',
  },
  founder: {
    '@type': 'Person',
    name: 'Franck Petretto',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Formation et Support',
    url: 'https://masterclass-ia.fr/contact',
  },
};

// Données structurées pour la personne
export const personData: Person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Franck Petretto',
  jobTitle: 'Formateur en Intelligence Artificielle Générative',
  description:
    'Expert en IA Générative, Microsoft Copilot, Copilot Studio et assistants de codage IA',
  url: 'https://masterclass-ia.fr',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Grenoble',
    addressCountry: 'FR',
  },
  knowsAbout: [
    'Intelligence Artificielle Générative',
    'Microsoft Copilot',
    'Copilot Studio',
    'Art du Prompting',
    'Assistants de Codage IA',
    'GitHub Copilot',
    'Large Language Models',
    'Prompt Engineering',
    'Transformation Digitale',
  ],
};

// Données structurées pour les services
export const serviceData: Service = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Formation professionnelle en Intelligence Artificielle',
  provider: {
    '@type': 'Person',
    name: 'Franck Petretto',
  },
  areaServed: {
    '@type': 'Country',
    name: 'France',
  },
  offers: [
    {
      '@type': 'Offer',
      name: 'Formation IA Individuelle',
      description: 'Formation personnalisée en IA Générative (1-3 jours)',
      price: '690',
      priceCurrency: 'EUR',
    },
    {
      '@type': 'Offer',
      name: 'Formation IA Collective',
      description: 'Formation en groupe en IA Générative (3-8 personnes, 1-3 jours)',
      price: '890',
      priceCurrency: 'EUR',
    },
    {
      '@type': 'Offer',
      name: 'Formation IA Premium',
      description: 'Programme complet intensif sur 5 jours avec accompagnement VIP',
      price: '2490',
      priceCurrency: 'EUR',
    },
  ],
};

// Données structurées pour le site web
export const websiteData: WebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Franck Petretto - Formation IA Générative',
  url: 'https://masterclass-ia.fr',
  description:
    'Formations professionnelles en Intelligence Artificielle Générative',
  inLanguage: 'fr-FR',
};
