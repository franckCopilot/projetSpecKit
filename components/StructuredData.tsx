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
  name: 'Franck Petretto - Formateur IA Professionnel',
  url: 'https://masterclass-ia.fr',
  logo: 'https://masterclass-ia.fr/logo.png',
  description:
    'Formateur IA professionnel spécialisé en Intelligence Artificielle Générative. Formation Microsoft Copilot, Copilot Studio, art du prompting et GitHub Copilot à Grenoble et en France.',
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
  jobTitle: 'Formateur IA | Expert Intelligence Artificielle Générative',
  description:
    'Formateur IA professionnel spécialisé en Intelligence Artificielle Générative. Expert Microsoft Copilot, Copilot Studio, art du prompting et GitHub Copilot. Formateur basé à Grenoble.',
  url: 'https://masterclass-ia.fr',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Grenoble',
    addressCountry: 'FR',
  },
  knowsAbout: [
    'Formation IA',
    'Formateur Intelligence Artificielle',
    'Intelligence Artificielle Générative',
    'Formateur Microsoft Copilot',
    'Copilot Studio',
    'Art du Prompting',
    'Formateur Assistants de Codage IA',
    'GitHub Copilot',
    'Large Language Models',
    'Prompt Engineering',
    'Transformation Digitale',
    'Masterclass IA',
  ],
};

// Données structurées pour les services
export const serviceData: Service = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Formateur IA - Formation professionnelle en Intelligence Artificielle',
  provider: {
    '@type': 'Person',
    name: 'Franck Petretto - Formateur IA',
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
  name: 'Franck Petretto - Formateur IA Professionnel',
  url: 'https://masterclass-ia.fr',
  description:
    'Formateur IA expert en formations professionnelles Intelligence Artificielle Générative, Microsoft Copilot et Copilot Studio',
  inLanguage: 'fr-FR',
};
