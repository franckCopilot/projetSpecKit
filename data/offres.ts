// data/offres.ts
import { OffreFormation } from '@/types/offre';

export const OFFRES: OffreFormation[] = [
  {
    id: 'offre-sensibilisation-ia',
    titre: 'Sensibilisation à l\'IA Générative',
    publicCible: 'débutant',
    prix: 390,
    description:
      'Formation IA pour débutants : découvrez les fondamentaux de l\'Intelligence Artificielle Générative (GenAI), les LLM (Large Language Models) et leurs applications pratiques en entreprise.',
    duree: '1/2 journée',
    objectifs: [
      'Comprendre les principes de l\'IA Générative et des LLM',
      'Identifier les cas d\'usage concrets en entreprise',
      'Maîtriser les concepts clés (tokens, contexte, prompting)',
    ],
  },
  {
    id: 'offre-prompts-copilot',
    titre: 'Maîtriser l\'art de la rédaction de prompts avec Microsoft Copilot',
    publicCible: 'débutant',
    prix: 390,
    description:
      'Formation art du prompting et prompt engineering : apprenez les techniques avancées de rédaction de prompts pour exploiter tout le potentiel de Microsoft Copilot dans votre travail quotidien.',
    duree: '1/2 journée',
    objectifs: [
      'Maîtriser l\'art du prompting et les techniques avancées',
      'Structurer des prompts efficaces avec le prompt engineering',
      'Optimiser vos interactions avec Microsoft Copilot',
    ],
  },
  {
    id: 'offre-copilot-m365',
    titre: 'Formation Microsoft Copilot M365 (chat et Copilot dans M365 apps)',
    publicCible: 'débutant/intermédiaire',
    prix: 890,
    description:
      'Formation complète Microsoft Copilot M365 : maîtrisez Copilot 365 intégré dans toute la suite Microsoft 365 (Word, Excel, PowerPoint, Teams, Outlook) pour booster votre productivité.',
    duree: '1 jour',
    objectifs: [
      'Maîtriser Microsoft Copilot dans chaque application M365',
      'Créer des workflows productifs avec Copilot 365',
      'Former vos équipes à l\'utilisation de Microsoft Copilot',
    ],
  },
  {
    id: 'offre-copilot-studio',
    titre: 'Formation Microsoft Copilot Studio (création d\'agents IA)',
    publicCible: 'intermédiaire',
    prix: 990,
    description:
      'Formation Copilot Studio et création d\'agents IA : apprenez à concevoir, créer et déployer vos propres agents IA personnalisés et assistants conversationnels avec Microsoft Copilot Studio pour automatiser vos processus métier.',
    duree: '2 jours',
    objectifs: [
      'Concevoir et créer des agents IA et assistants personnalisés',
      'Intégrer vos données et systèmes dans Copilot Studio',
      'Déployer et gérer vos agents conversationnels en production',
    ],
  },
  {
    id: 'offre-ia-dev',
    titre:
      'Formation Assistants de Codage et IA pour Développeurs',
    publicCible: 'confirmé/développeur',
    prix: 1499,
    description:
      'Formation complète pour développeurs : maîtrisez GitHub Copilot et les assistants de codage IA. Intégrez l\'Intelligence Artificielle dans vos workflows de développement avec VS Code, GitHub Copilot, et autres outils IA pour coder plus efficacement.',
    duree: '3 jours',
    objectifs: [
      'Maîtriser GitHub Copilot et les assistants de codage IA',
      'Optimiser votre productivité de développement avec l\'IA',
      'Intégrer l\'IA Générative dans vos pipelines et workflows',
    ],
  },
];
