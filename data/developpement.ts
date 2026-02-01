// data/developpement.ts
import { OffreDeveloppement } from '@/types/developpement';

export const OFFRES_DEV: OffreDeveloppement[] = [
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
