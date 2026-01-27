# Site Vitrine - Franck Petretto, Formateur IA Générative

Site vitrine professionnel présentant les services et formations en Intelligence Artificielle Générative proposés par Franck Petretto.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod
- **Email**: Resend SDK
- **Testing**: Playwright (E2E) + Vitest (Unit)
- **Deployment**: Vercel

## 📋 Features

### User Stories Implemented

✅ **US1 - Découverte de l'expertise** : Homepage avec photo, titre, et navigation vers "À propos"  
✅ **US2 - Exploration des offres** : Page Services affichant 5 formations avec tarifs  
✅ **US3 - Contact fonctionnel** : Formulaire de contact avec envoi d'email via Resend

### Fonctionnalités

- ✅ Responsive design (mobile, tablette, desktop)
- ✅ Navigation fluide entre les pages
- ✅ Formulaire de contact avec validation (client + serveur)
- ✅ Envoi d'emails via Resend
- ✅ Rate limiting (5 soumissions/heure par IP)
- ✅ SEO optimisé (metadata, sitemap, robots.txt)
- ✅ RGPD compliant (mentions légales, politique de confidentialité)
- ✅ Gestion d'erreurs et pages 404
- ✅ Design "haut de gamme" avec Tailwind CSS

## 🛠️ Installation

### Prérequis

- Node.js 18+ LTS
- npm ou yarn

### Étapes

```bash
# Cloner le projet
cd projetSpecKit

# Installer les dépendances
npm install

# Créer le fichier .env.local
cp .env.example .env.local

# Configurer la clé Resend API
# Obtenir une clé sur https://resend.com
# Modifier .env.local avec votre clé

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📝 Configuration

### Variables d'environnement

Créer un fichier `.env.local` avec :

```env
RESEND_API_KEY=re_your_api_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Resend Setup

1. Créer un compte sur [resend.com](https://resend.com)
2. Vérifier votre domaine (ou utiliser l'email de test `onboarding@resend.dev`)
3. Générer une API Key
4. Ajouter la clé dans `.env.local`

## 🧪 Tests

### Tests E2E (Playwright)

```bash
# Installer les navigateurs Playwright
npx playwright install

# Lancer les tests E2E
npm run test:e2e
```

### Tests Unitaires (Vitest)

```bash
npm test
```

## 🚀 Déploiement sur Vercel

1. Push le code sur GitHub
2. Connecter le repository à Vercel
3. Configurer les variables d'environnement dans Vercel :
   - `RESEND_API_KEY`
   - `NEXT_PUBLIC_SITE_URL`
4. Déployer !

## 📂 Structure du Projet

```
projetSpecKit/
├── app/                      # Pages Next.js (App Router)
│   ├── page.tsx             # Homepage
│   ├── a-propos/            # Page À propos
│   ├── services/            # Page Services & Offres
│   ├── contact/             # Page Contact
│   ├── merci/               # Page Remerciement
│   ├── mentions-legales/    # Mentions Légales & RGPD
│   ├── api/contact/         # API route pour formulaire
│   ├── layout.tsx           # Layout global
│   ├── globals.css          # Styles globaux
│   ├── sitemap.ts           # Sitemap SEO
│   └── robots.ts            # Robots.txt
├── components/              # Composants réutilisables
│   ├── Navigation.tsx       # Menu navigation
│   ├── ServiceCard.tsx      # Carte offre de formation
│   └── ContactForm.tsx      # Formulaire de contact
├── data/                    # Données statiques
│   ├── offres.ts            # 5 offres de formation
│   └── expert.ts            # Informations Franck Petretto
├── lib/                     # Utilitaires
│   ├── validation.ts        # Schémas Zod
│   ├── email.ts             # Service Resend
│   └── metadata.ts          # Helpers SEO
├── types/                   # Types TypeScript
│   ├── offre.ts
│   ├── expert.ts
│   └── contact.ts
├── tests/                   # Tests
│   ├── e2e/                 # Tests Playwright
│   └── unit/                # Tests Vitest
├── public/                  # Assets statiques
│   └── franck-petretto.jpg
└── specs/                   # Documentation projet
    └── 001-ai-trainer-showcase/
```

## 🎨 Design

Le design respecte les critères "haut de gamme" avec :

- Palette de couleurs professionnelle (bleu/violet)
- Typographie Inter optimisée
- Espacement cohérent et aéré
- Animations et transitions fluides
- Images optimisées avec Next.js Image

## 📧 Contact

Pour toute question concernant le code :
- Email : [franck.petretto@free.fr](mailto:franck.petretto@free.fr)

Pour les formations en IA Générative :
- Site : [https://franck-petretto.fr](https://franck-petretto.fr)

## 📄 License

© 2025 Franck Petretto. Tous droits réservés.

## 🔧 Maintenance

### Ajouter une nouvelle formation

1. Modifier `data/offres.ts`
2. Ajouter un nouvel objet `OffreFormation`
3. Le site se mettra à jour automatiquement

### Modifier les informations personnelles

1. Modifier `data/expert.ts`
2. Les changements se propageront sur toutes les pages

## ✅ Status du Projet

- **Build** : ✅ Réussi
- **Tests E2E** : 10 suites créées (US1, US2, US3)
- **SEO** : ✅ Sitemap, robots.txt, metadata
- **RGPD** : ✅ Mentions légales, consentement
- **Accessibilité** : En cours (cible WCAG 2.1 AA)
- **Performance** : À tester avec Lighthouse (cible > 90)

---

**Développé avec ❤️ pour Franck Petretto - Formateur IA Générative à Grenoble**
