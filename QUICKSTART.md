# Quickstart Guide

## Installation rapide (5 minutes)

### 1. Cloner et installer

```bash
cd C:\data\gitInsiders\projetSpecKit
npm install
```

### 2. Configuration Resend

**Option A : Test rapide (sans email réel)**

Utilisez la clé API de test Resend :

```bash
# .env.local
RESEND_API_KEY=re_test_123456
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Option B : Configuration production**

1. Créer un compte sur [resend.com](https://resend.com)
2. Obtenir une API Key
3. Créer `.env.local` avec votre clé

```env
RESEND_API_KEY=re_votre_vraie_cle_ici
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Lancer le serveur

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

### 4. Tester les fonctionnalités

✅ **Navigation** : Parcourir Accueil → À propos → Services → Contact  
✅ **Formulaire** : Remplir et soumettre le formulaire de contact  
✅ **Email** : Vérifier réception dans votre boîte (si clé API configurée)

## Structure des pages

| Page | URL | Description |
|------|-----|-------------|
| Accueil | `/` | Hero section avec photo de Franck |
| À propos | `/a-propos` | Biographie et expertise |
| Services | `/services` | 5 offres de formation avec tarifs |
| Contact | `/contact` | Formulaire de contact fonctionnel |
| Merci | `/merci` | Confirmation après envoi |
| Mentions Légales | `/mentions-legales` | RGPD et mentions légales |

## Commandes utiles

```bash
# Développement
npm run dev

# Build production
npm run build

# Lancer production localement
npm run start

# Tests E2E
npx playwright install
npm run test:e2e

# Linting
npm run lint
```

## Modification rapide

### Changer les informations du formateur

Modifier `data/expert.ts` :

```typescript
export const EXPERT: Expert = {
  nom: 'Votre Nom',
  email: 'votre@email.com',
  localisation: 'Votre Ville',
  // ...
};
```

### Ajouter une formation

Modifier `data/offres.ts` :

```typescript
export const OFFRES: OffreFormation[] = [
  // ... offres existantes
  {
    id: 'nouvelle-offre',
    titre: 'Titre de la nouvelle formation',
    publicCible: 'débutant',
    prix: 500,
    description: 'Description...',
  },
];
```

## Déploiement Vercel (1 minute)

1. Push sur GitHub
2. Connecter à Vercel
3. Ajouter `RESEND_API_KEY` dans les variables d'environnement
4. Déployer !

## Support

Pour toute question : franck.petretto@free.fr
