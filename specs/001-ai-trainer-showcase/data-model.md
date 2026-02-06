# Data Model - Site Vitrine Formateur IA

**Feature**: Site Vitrine & Commercial pour Formateur IA  
**Branch**: `001-ai-trainer-showcase`  
**Date**: 2026-01-27

## Overview

Ce document définit les entités clés du domaine métier pour le site vitrine de Franck Petretto. Bien que le site n'ait pas de base de données (contenu statique + formulaire email direct), ces entités structurent le code et la validation des données.

---

## Entity 1: Offre de Formation

### Description
Représente un service de formation proposé par Franck Petretto en Intelligence Artificielle Générative.

### Attributes

| Attribute | Type | Required | Validation | Description |
|-----------|------|----------|------------|-------------|
| `id` | `string` | Oui | Format: `offre-{slug}` | Identifiant unique (ex: `offre-sensibilisation-ia`) |
| `titre` | `string` | Oui | Min 5 caractères | Intitulé complet de la formation (FR-015) |
| `publicCible` | `'débutant' \| 'intermédiaire' \| 'confirmé' \| 'débutant/intermédiaire' \| 'confirmé/développeur'` | Oui | Enum strict | Niveau requis pour la formation (FR-015) |
| `prix` | `number` | Oui | > 0, en euros | Tarif de la formation en euros (FR-015) |
| `description` | `string` | Non | Max 500 caractères | Description détaillée (optionnelle dans MVP) |
| `duree` | `string` | Non | Ex: "1 jour", "2 jours" | Durée estimée de la formation |
| `objectifs` | `string[]` | Non | - | Liste des objectifs pédagogiques |

### Business Rules

1. **Cinq offres exactes** : Le système doit afficher exactement 5 offres conformes à FR-010 à FR-014
2. **Prix affichage** : Le prix doit être affiché avec le symbole `€` et sans décimales (ex: `400 €`)
3. **Public cible standardisé** : Utiliser uniquement les valeurs enum définies (cohérence affichage)
4. **Ordre d'affichage** : Suggéré par niveau croissant (débutant → intermédiaire → confirmé)

### State Transitions

N/A (entité statique, pas de workflow)

### TypeScript Type

```typescript
// types/offre.ts
export type PublicCible = 
  | 'débutant' 
  | 'intermédiaire' 
  | 'confirmé' 
  | 'débutant/intermédiaire' 
  | 'confirmé/développeur';

export interface OffreFormation {
  id: string;
  titre: string;
  publicCible: PublicCible;
  prix: number; // en euros
  description?: string;
  duree?: string;
  objectifs?: string[];
}
```

### Sample Data

```typescript
// data/offres.ts
export const OFFRES: OffreFormation[] = [
  {
    id: 'offre-sensibilisation-ia',
    titre: 'Découvrir l\'IA Générative',
    publicCible: 'débutant',
    prix: 400,
    description: 'Découvrez les fondamentaux de l'IA Générative et ses applications pratiques.'
  },
  {
    id: 'offre-prompts-copilot',
    titre: 'Maîtriser l'art de la rédaction de prompts avec Microsoft Copilot',
    publicCible: 'débutant',
    prix: 400
  },
  {
    id: 'offre-copilot-m365',
    titre: 'Formateur Microsoft Copilot (chat et Copilot dans M365 apps)',
    publicCible: 'débutant/intermédiaire',
    prix: 400
  },
  {
    id: 'offre-copilot-studio',
    titre: 'Formateur Microsoft Copilot Studio (création d'agents)',
    publicCible: 'intermédiaire',
    prix: 500
  },
  {
    id: 'offre-ia-dev',
    titre: 'Intégrer l'IA dans le cycle de développement et les assistants de codage',
    publicCible: 'confirmé/développeur',
    prix: 600
  }
];
```

---

## Entity 2: Demande de Contact

### Description
Représente une demande d'information soumise via le formulaire de contact (FR-017).

### Attributes

| Attribute | Type | Required | Validation | Description |
|-----------|------|----------|------------|-------------|
| `nom` | `string` | Oui | Min 2 caractères | Nom complet du demandeur (FR-017) |
| `email` | `string` | Oui | Format email RFC 5322 | Adresse email du demandeur (FR-019) |
| `message` | `string` | Oui | Min 10 caractères | Message ou description de la demande (FR-017) |
| `dateEnvoi` | `Date` | Auto | ISO 8601 | Timestamp de soumission (généré serveur) |
| `statusEnvoi` | `'pending' \| 'sent' \| 'failed'` | Auto | Enum | Statut de l'envoi email |
| `ipSource` | `string` | Auto | Format IP | IP du visiteur (rate limiting, non stockée) |

### Business Rules

1. **Email invalide** : Si validation email échoue → afficher erreur claire (FR-019, FR-022)
2. **Champs obligatoires** : Si nom/email/message vides → afficher erreurs inline (FR-022)
3. **Envoi réussi** : statusEnvoi = 'sent' → redirection `/merci` (FR-020)
4. **Envoi échoué** : statusEnvoi = 'failed' → afficher message erreur + email alternatif (FR-021)
5. **Rate limiting** : Max 5 soumissions par IP par heure (anti-spam)
6. **Pas de persistance** : Données envoyées uniquement par email, pas de DB (FR-018)

### State Transitions

```
[Formulaire rempli] 
  ↓ (Submit)
[pending] → Validation client/serveur
  ↓ (Valid)
[Envoi Resend API]
  ↓ (Success)
[sent] → Redirection /merci
  ↓ (Failure)
[failed] → Affichage erreur + email alternatif
```

### TypeScript Type

```typescript
// lib/validation.ts
import { z } from 'zod';

export const contactFormSchema = z.object({
  nom: z.string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom est trop long'),
  email: z.string()
    .email('Adresse email invalide'), // FR-019
  message: z.string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(2000, 'Le message est trop long')
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Type serveur (avec métadonnées auto-générées)
export interface DemandeContact extends ContactFormData {
  dateEnvoi: Date;
  statusEnvoi: 'pending' | 'sent' | 'failed';
  ipSource?: string; // Optionnel (rate limiting)
}
```

### Sample Validation Messages (Français)

```typescript
// Exemples messages d'erreur (FR-022)
{
  nom: "Le nom doit contenir au moins 2 caractères",
  email: "Adresse email invalide",
  message: "Le message doit contenir au moins 10 caractères"
}
```

---

## Entity 3: Expert (Franck Petretto)

### Description
Représente le formateur expert présenté sur le site. Entité singleton (1 seul expert).

### Attributes

| Attribute | Type | Required | Validation | Description |
|-----------|------|----------|------------|-------------|
| `nom` | `string` | Oui | Fixe: "Franck Petretto" | Nom complet de l'expert |
| `photo` | `string` | Oui | Path: `/franck-petretto.jpg` | Chemin vers photo (FR-001) |
| `titre` | `string` | Oui | - | Titre professionnel (ex: "Formateur en IA Générative") |
| `tagline` | `string` | Oui | - | Accroche principale (FR-002: "Maîtrisez l'IA au-delà du simple prompt") |
| `sousTagline` | `string` | Oui | - | Sous-titre avec expertises (FR-003) |
| `biographie` | `string` | Oui | Markdown supporté | Texte biographie détaillée (FR-006, FR-007) |
| `localisation` | `string` | Oui | Fixe: "Grenoble" | Ville de localisation (FR-008) |
| `domainesExpertise` | `string[]` | Oui | - | Liste domaines (IA Générative, Prompting, etc.) |
| `email` | `string` | Oui | Fixe: "franck.petretto@free.fr" | Email professionnel (FR-018) |

### Business Rules

1. **Singleton** : Une seule instance dans le système (pas de tableau d'experts)
2. **Photo obligatoire** : Si image manquante → afficher placeholder + alt text descriptif
3. **Localisation Grenoble = atout** : Présenter comme "proximité locale + perspective globale" (FR-008)
4. **Biographie placeholder** : MVP peut utiliser texte Lorem Ipsum, remplacé ultérieurement (assumption spec)

### TypeScript Type

```typescript
// types/expert.ts
export interface Expert {
  nom: string;
  photo: string; // path vers image
  titre: string;
  tagline: string;
  sousTagline: string;
  biographie: string; // Markdown supporté
  localisation: string;
  domainesExpertise: string[];
  email: string;
}
```

### Sample Data

```typescript
// data/expert.ts
export const EXPERT: Expert = {
  nom: 'Franck Petretto',
  photo: '/franck-petretto.jpg', // FR-001
  titre: 'Formateur en Intelligence Artificielle Générative',
  tagline: 'Maîtrisez l'IA au-delà du simple prompt', // FR-002
  sousTagline: 'Expert en art du prompting, Microsoft Copilot, Copilot Studio et assistants de codage', // FR-003
  biographie: `
    [TEXTE PLACEHOLDER - À REMPLACER]
    
    Fort de nombreuses années d'expérience dans le domaine de la technologie et de la formation,
    Franck Petretto s'est spécialisé dans l'Intelligence Artificielle Générative et ses applications
    pratiques en entreprise.
    
    Basé à Grenoble, il combine une connaissance approfondie des technologies IA de pointe avec
    une approche pédagogique accessible et pragmatique.
    
    [CONTENU DÉTAILLÉ BIOGRAPHIE À FOURNIR PAR CLIENT]
  `, // FR-006, FR-007
  localisation: 'Grenoble', // FR-008
  domainesExpertise: [
    'Intelligence Artificielle Générative',
    'Art du Prompting',
    'Microsoft Copilot',
    'Microsoft Copilot Studio',
    'Assistants de Codage IA',
    'Transformation Digitale'
  ],
  email: 'franck.petretto@free.fr' // FR-018
};
```

---

## Relationships

### Offre ↔ Expert
- **Type** : One-to-Many (1 Expert → N Offres)
- **Relation** : Chaque offre est proposée par l'expert unique
- **Implementation** : Pas de clé étrangère (pas de DB), relation implicite

### Demande de Contact → Expert
- **Type** : Many-to-One (N Demandes → 1 Expert)
- **Relation** : Toutes les demandes sont envoyées à l'email de l'expert
- **Implementation** : Email cible hardcodé `franck.petretto@free.fr` (FR-018)

### Demande de Contact ↔ Offre
- **Type** : None (pas de lien direct)
- **Relation** : Le message peut mentionner une offre, mais pas de référence formelle
- **Future** : Pourrait être ajouté (dropdown "Offre concernée" dans formulaire)

---

## Validation Schemas (Zod)

### Offre de Formation

```typescript
// lib/validation.ts
import { z } from 'zod';

export const publicCibleEnum = z.enum([
  'débutant',
  'intermédiaire', 
  'confirmé',
  'débutant/intermédiaire',
  'confirmé/développeur'
]);

export const offreFormationSchema = z.object({
  id: z.string().min(1),
  titre: z.string().min(5),
  publicCible: publicCibleEnum,
  prix: z.number().positive(),
  description: z.string().max(500).optional(),
  duree: z.string().optional(),
  objectifs: z.array(z.string()).optional()
});
```

### Contact Form

```typescript
// Déjà défini dans Entity 2 section
export const contactFormSchema = z.object({
  nom: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(2000)
});
```

---

## Data Storage Strategy

### Static Content (Offres, Expert)
- **Location** : `/data/offres.ts`, `/data/expert.ts`
- **Format** : TypeScript constants exported
- **Rationale** : Contenu statique (pas de CMS dans MVP), typé, versionné Git

### Dynamic Data (Demandes Contact)
- **Location** : N/A (pas de persistance)
- **Format** : Envoyé via email Resend uniquement
- **Rationale** : FR-018 exige email direct, pas de stockage database

### Future Considerations
- Si besoin CMS (Phase 2) → Envisager Sanity/Strapi pour gérer offres
- Si besoin analytics demandes → Ajouter Google Sheets API ou Airtable
- Si besoin archivage demandes → Ajouter PostgreSQL/Supabase

---

## Entity Diagram (Conceptual)

```
┌─────────────────┐
│     Expert      │
│  (Singleton)    │
│─────────────────│
│ nom             │
│ photo           │
│ email           │
│ localisation    │
│ biographie      │
│ ...             │
└────────┬────────┘
         │
         │ 1:N
         │
         ▼
┌─────────────────┐
│ OffreFormation  │
│─────────────────│
│ id              │
│ titre           │
│ publicCible     │
│ prix            │
│ description     │
└─────────────────┘

         ┌─────────────────────────┐
         │   DemandeContact        │
         │─────────────────────────│
         │ nom                     │
         │ email                   │
         │ message                 │
         │ dateEnvoi               │
         │ statusEnvoi             │
         └──────────┬──────────────┘
                    │
                    │ Envoyée à
                    │
                    ▼
              [Email Expert]
         franck.petretto@free.fr
```

---

## Next Steps (Implementation)

1. **Create types** : `/types/offre.ts`, `/types/expert.ts`, `/types/contact.ts`
2. **Create data files** : `/data/offres.ts`, `/data/expert.ts`
3. **Create validation** : `/lib/validation.ts` (Zod schemas)
4. **Implement components** :
   - `ServiceCard.tsx` → utilise `OffreFormation` type
   - `ContactForm.tsx` → utilise `contactFormSchema` validation
   - `ExpertProfile.tsx` → utilise `Expert` type
5. **API Route** : `/app/api/contact/route.ts` → valide avec `contactFormSchema`

---

**Document Status**: ✅ COMPLETE  
**Ready for Implementation**: ✅ YES
