// data/developpement.ts
import { OffreDeveloppement } from '@/types/developpement';

export const OFFRES_DEV: OffreDeveloppement[] = [
  {
    id: 'agent-ia-personnalise',
    titre: 'Développement d\'Agent Intelligence Artificielle',
    type: 'agent-ia',
    prix: 490,
    description:
      'Conception et développement d\'agents IA personnalisés avec Copilot Studio (Microsoft) ou solutions sur mesure. Créez un assistant conversationnel intelligent adapté à vos besoins métier.',
    delai: '2 à 4 semaines',
    inclus: [
      'Analyse de vos besoins et cas d\'usage',
      'Développement sur Copilot Studio, ChatGPT ou Gemini',
      'Agent IA conversationnel personnalisé',
      'Intégration avec vos données et systèmes',
      'Formation à l\'administration et configuration',
      'Documentation technique complète',
      '1 mois de support post-déploiement',
      'Déploiement et mise en production',
    ],
    langages: [
      'Microsoft Copilot Studio',
      'OpenAI ChatGPT API',
      'Google Gemini API',
      'Solutions sur mesure (Python, Node.js)',
    ],
  },
  {
    id: 'pack-site-vitrine',
    titre: 'Pack Site Vitrine Professionnel',
    type: 'pack',
    prix: 990,
    description:
      'Solution complète clé en main pour votre présence en ligne : site vitrine moderne, responsive et optimisé SEO, avec nom de domaine inclus pour 1 an.',
    delai: '1 à 3 semaines',
    inclus: [
      'Conception et design moderne responsive',
      'Jusqu\'à 5 pages (Accueil, Services, À propos, Contact, Mentions légales)',
      'Nom de domaine (.fr ou .com) pour 1 an',
      'Hébergement pour 1 an',
      'Optimisation SEO de base',
      'Formulaire de contact fonctionnel',
      'Certificat SSL (HTTPS)',
      'Formation à la gestion du contenu',
    ],
  },
  {
    id: 'support-technique',
    titre: 'Support Technique & Correction de Bugs',
    type: 'support',
    prix: { standard: 90, urgence: 149 },
    description:
      'Support technique professionnel et correction de bugs pour vos projets web et applications. Multi-langages et multi-technologies.',
    langages: [
      'HTML / CSS / JavaScript / TypeScript',
      'React / Next.js',
      'Node.js',
      'PHP / Python / Java',
      'SQL / NoSQL',
    ],
    inclus: [
      'Diagnostic et correction de bugs',
      'Maintenance corrective et évolutive',
      'Optimisation de performance',
      'Mise à jour de dépendances',
      'Intervention à distance ou sur site',
      'Facturation à l\'heure réelle',
    ],
  },
];
