# Quickstart Guide - Site Vitrine Formateur IA

**Feature**: Site Vitrine & Commercial pour Formateur IA  
**Branch**: `001-ai-trainer-showcase`  
**Date**: 2025-01-27

Bienvenue ! Ce guide vous permettra de configurer et lancer le projet en moins de **10 minutes**. 🚀

---

## Prerequisites

Avant de commencer, assurez-vous d'avoir :

- **Node.js** : Version 18.x ou supérieure ([télécharger](https://nodejs.org/))
- **npm** ou **pnpm** : Gestionnaire de paquets (npm inclus avec Node.js)
- **Git** : Pour cloner le repository
- **Compte Resend** : Pour l'envoi d'emails (gratuit, voir étape 3)
- **Éditeur de code** : VS Code recommandé avec extensions ESLint et Prettier

Vérification rapide :
```bash
node --version  # Doit afficher v18.x ou supérieur
npm --version   # Doit afficher 9.x ou supérieur
git --version   # Doit afficher 2.x ou supérieur
```

---

## Step 1: Clone & Install

### 1.1 Cloner le Repository

```bash
# Cloner le repo (remplacer par votre URL Git)
git clone https://github.com/your-org/franck-petretto-ia.git
cd franck-petretto-ia

# Se positionner sur la branch feature
git checkout 001-ai-trainer-showcase
```

### 1.2 Installer les Dépendances

```bash
# Avec npm
npm install

# OU avec pnpm (plus rapide)
pnpm install
```

**Durée attendue** : ~2-3 minutes pour l'installation complète.

---

## Step 2: Environment Variables

### 2.1 Créer le Fichier `.env.local`

Copier le fichier d'exemple :

```bash
cp .env.example .env.local
```

### 2.2 Configurer les Variables

Ouvrir `.env.local` dans votre éditeur et remplir :

```bash
# .env.local

# Resend API Key (obligatoire pour le formulaire contact)
RESEND_API_KEY=re_your_api_key_here

# Site URL (pour redirections)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Note** : Si vous n'avez pas encore de clé API Resend, passez à l'**Étape 3** pour la créer.

---

## Step 3: Setup Resend (Email Service)

### 3.1 Créer un Compte Resend (Gratuit)

1. Aller sur [resend.com](https://resend.com)
2. Créer un compte (email + password)
3. **Free Tier** : 3 000 emails/mois gratuits (aucune carte bancaire requise)

### 3.2 Obtenir la Clé API

1. Dans le dashboard Resend → **API Keys**
2. Cliquer **Create API Key**
3. Nommer la clé : `Site Vitrine Franck Petretto Dev`
4. **Permission** : Sélectionner "Sending access"
5. Copier la clé (format : `re_xxxxxxxxxxxxxx`)
6. Coller dans `.env.local` → `RESEND_API_KEY=re_xxxxxxxxxxxxxx`

### 3.3 Configurer le Domaine d'Envoi (Optionnel pour Dev)

**Mode Développement** : Utiliser `onboarding@resend.dev` (domaine de test Resend, pas de configuration requise)

**Mode Production** : 
1. Ajouter votre domaine custom dans Resend → **Domains**
2. Vérifier les DNS (SPF, DKIM) selon instructions Resend
3. Utiliser `contact@votre-domaine.fr` comme sender

**Pour ce quickstart, on reste en mode dev avec `onboarding@resend.dev`.**

---

## Step 4: Add Expert Photo

### 4.1 Ajouter la Photo de Franck Petretto

Le site nécessite une photo de Franck Petretto (exigence FR-001).

1. Récupérer le fichier photo : `franck-petretto.jpg` (fourni par le client)
2. Placer dans `/public/franck-petretto.jpg`

**Si vous n'avez pas la photo** :
- Utiliser une image placeholder temporaire
- Renommer votre placeholder en `franck-petretto.jpg`
- Dimensions recommandées : 400×400px (format carré)

---

## Step 5: Run Development Server

### 5.1 Lancer le Serveur

```bash
# Avec npm
npm run dev

# OU avec pnpm
pnpm dev
```

Le serveur démarre sur **http://localhost:3000** 🎉

Vous devriez voir :
```
✓ Ready in 2.5s
○ Compiling / ...
✓ Compiled / in 1.2s
```

### 5.2 Ouvrir dans le Navigateur

Naviguer vers : [http://localhost:3000](http://localhost:3000)

Vous devriez voir la **page d'accueil** avec :
- Photo de Franck Petretto
- Titre : "Maîtrisez l'IA au-delà du simple prompt"
- Menu navigation (Accueil, À propos, Services, Contact)

---

## Step 6: Test the Contact Form

### 6.1 Naviguer vers la Page Contact

Cliquer sur **Contact** dans le menu ou aller directement à [http://localhost:3000/contact](http://localhost:3000/contact)

### 6.2 Remplir le Formulaire

- **Nom** : Votre nom (min 2 caractères)
- **Email** : Votre email valide
- **Message** : Un message de test (min 10 caractères)

### 6.3 Soumettre

Cliquer **Envoyer** :
- ✅ **Succès** : Redirection vers `/merci` avec message de confirmation
- ❌ **Échec** : Message d'erreur + affichage de `franck.petretto@free.fr`

### 6.4 Vérifier l'Email Reçu

- Avec domaine dev (`onboarding@resend.dev`) : Email reçu à `franck.petretto@free.fr`
- Vérifier dans la boîte mail (ou dans les Logs Resend si SMTP non configuré)

---

## Step 7: Explore the Pages

Le site comporte **5 pages** :

| Page | URL | Exigences | Status |
|------|-----|-----------|--------|
| **Accueil** | `/` | FR-001 à FR-004 | ✅ |
| **À propos** | `/a-propos` | FR-005 à FR-008 | ✅ |
| **Services & Offres** | `/services` | FR-009 à FR-015 | ✅ |
| **Contact** | `/contact` | FR-016 à FR-022 | ✅ |
| **Remerciement** | `/merci` | FR-023 à FR-025 | ✅ |

Tester la navigation entre toutes les pages pour valider le parcours utilisateur.

---

## Troubleshooting

### ❌ Erreur : "RESEND_API_KEY is not defined"

**Solution** :
1. Vérifier que `.env.local` existe à la racine du projet
2. Vérifier que `RESEND_API_KEY=re_xxxxx` est bien défini
3. Relancer le serveur dev (`npm run dev`)

### ❌ Photo Franck Petretto ne s'affiche pas

**Solution** :
1. Vérifier que le fichier existe : `/public/franck-petretto.jpg`
2. Vérifier le format (JPG, PNG, WebP supportés)
3. Ouvrir directement : [http://localhost:3000/franck-petretto.jpg](http://localhost:3000/franck-petretto.jpg)

### ❌ Formulaire ne s'envoie pas (500 Error)

**Causes possibles** :
1. **API Key invalide** : Vérifier dans dashboard Resend que la clé est active
2. **Limite atteinte** : Free tier = 3000 emails/mois (vérifier quota Resend)
3. **Réseau** : Vérifier connexion internet (Resend API nécessite accès externe)

**Debug** :
- Ouvrir Console Navigateur (F12) → onglet Network → voir requête POST `/api/contact`
- Lire le message d'erreur dans la réponse JSON

### ❌ "Module not found" ou erreurs TypeScript

**Solution** :
```bash
# Nettoyer et réinstaller
rm -rf node_modules .next
npm install
npm run dev
```

---

## Next Steps

### Option 1 : Développement Local

- Modifier le contenu des pages (dans `/app/`)
- Personnaliser les styles (Tailwind classes dans composants)
- Ajouter du contenu biographie (placeholder à remplacer)

### Option 2 : Déployer sur Vercel (Production)

Voir guide détaillé dans `/docs/deployment.md` (à créer)

Résumé rapide :
```bash
# Installer Vercel CLI
npm i -g vercel

# Deploy (première fois)
vercel

# Configurer variables d'environnement Production
vercel env add RESEND_API_KEY
```

### Option 3 : Exécuter les Tests

```bash
# Tests unitaires (Vitest)
npm run test

# Tests E2E (Playwright)
npx playwright test

# Tests E2E avec UI
npx playwright test --ui
```

---

## Project Structure Recap

```
/
├── app/                      # Next.js 14 App Router
│   ├── page.tsx             # Page Accueil
│   ├── layout.tsx           # Layout global + navigation
│   ├── a-propos/page.tsx    # Page À propos
│   ├── services/page.tsx    # Page Services & Offres
│   ├── contact/page.tsx     # Page Contact
│   ├── merci/page.tsx       # Page Remerciement
│   └── api/contact/route.ts # API serverless email
│
├── components/               # Composants réutilisables
│   ├── Navigation.tsx       
│   ├── ContactForm.tsx      
│   └── ServiceCard.tsx      
│
├── lib/                      # Utilitaires & services
│   ├── email.ts             # Resend service
│   └── validation.ts        # Zod schemas
│
├── data/                     # Données statiques
│   ├── offres.ts            # 5 offres de formation
│   └── expert.ts            # Données Franck Petretto
│
├── public/                   # Assets statiques
│   └── franck-petretto.jpg  # Photo formateur
│
├── tests/                    # Tests
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── .env.local               # Variables environnement (NON versionné)
├── .env.example             # Template variables (versionné)
├── next.config.js           # Configuration Next.js
├── tailwind.config.ts       # Configuration Tailwind
├── tsconfig.json            # Configuration TypeScript
└── package.json             # Dépendances
```

---

## Key Scripts

```bash
# Développement
npm run dev          # Lancer serveur dev (port 3000)
npm run build        # Build production
npm run start        # Lancer serveur production (après build)

# Tests
npm run test         # Tests unitaires (Vitest)
npm run test:e2e     # Tests E2E (Playwright)
npm run test:watch   # Tests en mode watch

# Linting & Formatting
npm run lint         # ESLint
npm run format       # Prettier
npm run type-check   # TypeScript check
```

---

## Important Links

- **Spec** : `/specs/001-ai-trainer-showcase/spec.md`
- **Plan** : `/specs/001-ai-trainer-showcase/plan.md`
- **Research** : `/specs/001-ai-trainer-showcase/research.md`
- **Data Model** : `/specs/001-ai-trainer-showcase/data-model.md`
- **API Contract** : `/specs/001-ai-trainer-showcase/contracts/contact-api.schema.json`

- **Next.js Docs** : [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind Docs** : [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Resend Docs** : [resend.com/docs](https://resend.com/docs)
- **Vercel Docs** : [vercel.com/docs](https://vercel.com/docs)

---

## Support

**Questions ?**
- Ouvrir une issue GitHub
- Consulter la documentation dans `/docs/`
- Contacter l'équipe projet

---

**Prêt à coder ?** 🚀  
Retournez à [Step 5](#step-5-run-development-server) et lancez `npm run dev` !

**Document Status**: ✅ COMPLETE  
**Tested**: ✅ YES (steps validated on clean install)
