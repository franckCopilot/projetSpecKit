// data/offres.ts
import { OffreFormation } from '@/types/offre';

export const OFFRES: OffreFormation[] = [
  {
    id: 'offre-sensibilisation-ia',
    titre: 'Sensibilisation à l\'IA Générative',
    publicCible: 'débutant',
    prix: 399,
    description:
      'Découvrez les fondamentaux de l\'IA Générative et ses applications pratiques pour transformer votre façon de travailler.',
    duree: '1/2 journée',
    objectifs: [
      'Comprendre les principes de l\'IA Générative',
      'Identifier les cas d\'usage en entreprise',
      'Maîtriser les concepts clés (LLM, tokens, contexte)',
    ],
  },
  {
    id: 'offre-prompts-copilot',
    titre: 'Maîtriser l\'art de la rédaction de prompts avec Microsoft Copilot',
    publicCible: 'débutant',
    prix: 399,
    description:
      'Apprenez à formuler des prompts efficaces pour tirer le meilleur parti de Microsoft Copilot dans vos tâches quotidiennes.',
    duree: '1/2 journée',
    objectifs: [
      'Structurer des prompts performants',
      'Utiliser les techniques avancées de prompting',
      'Optimiser vos interactions avec Copilot',
    ],
  },
  {
    id: 'offre-copilot-m365',
    titre: 'Formateur Microsoft Copilot (chat et Copilot dans M365 apps)',
    publicCible: 'débutant/intermédiaire',
    prix: 899,
    description:
      'Devenez expert de Microsoft Copilot intégré dans la suite Microsoft 365 (Word, Excel, PowerPoint, Teams, Outlook).',
    duree: '1 jour',
    objectifs: [
      'Maîtriser Copilot dans chaque application M365',
      'Créer des workflows productifs avec Copilot',
      'Former vos équipes à l\'utilisation de Copilot',
    ],
  },
  {
    id: 'offre-copilot-studio',
    titre: 'Formateur Microsoft Copilot Studio (création d\'agents)',
    publicCible: 'intermédiaire',
    prix: 999,
    description:
      'Créez vos propres agents IA personnalisés avec Microsoft Copilot Studio pour automatiser vos processus métier.',
    duree: '2 jours',
    objectifs: [
      'Concevoir et créer des agents IA personnalisés',
      'Intégrer vos données et systèmes',
      'Déployer et gérer vos agents en production',
    ],
  },
  {
    id: 'offre-ia-dev',
    titre:
      'Intégrer l\'IA dans le cycle de développement et les assistants de codage',
    publicCible: 'confirmé/développeur',
    prix: 1499,
    description:
      'Pour développeurs : intégrez l\'IA dans vos workflows de développement avec Visual Studio Code, GitHub Copilot, Spec-Kit et autres assistants de codage.',
    duree: '3 jours',
    objectifs: [
      'Optimiser votre productivité avec les assistants IA',
      'Intégrer l\'IA dans vos pipelines CI/CD',
      'Créer des solutions IA pour développeurs',
    ],
  },
];
