# Technical Research & Decisions - Site Vitrine Formateur IA

**Feature**: Site Vitrine & Commercial pour Formateur IA  
**Branch**: `001-ai-trainer-showcase`  
**Date**: 2026-01-27  
**Status**: Research Complete

## Purpose

Ce document capture les décisions techniques prises pour résoudre les NEEDS CLARIFICATION identifiés dans le Technical Context du plan d'implémentation. Chaque décision est documentée avec sa rationale et les alternatives considérées.

---

## 1. Framework Moderne SSG/SSR pour Vercel

### Decision: **Next.js 14+ avec App Router**

### Rationale

**Pourquoi Next.js** :
- **Intégration Vercel native** : Next.js est développé par Vercel → déploiement zero-config, optimisations automatiques (Image Optimization, Edge Functions)
- **Hybrid Rendering** : SSG pour pages statiques (Accueil, À propos, Services) + SSR pour page dynamique si besoin + API Routes serverless pour formulaire
- **Performance native** : Code splitting automatique, lazy loading, optimisation images (Next.js Image Component)
- **SEO excellent** : Server-side rendering initial garantit métadonnées crawlables par Google (exigence constitution V)
- **Developer Experience** : Hot reload, TypeScript first-class, excellent écosystème

**Pourquoi App Router (vs Pages Router)** :
- Architecture moderne avec React Server Components (RSC)
- Layouts partagés plus simples (navigation commune FR-026)
- Meilleure performance (streaming SSR, composants serveur)
- Direction future de Next.js (Pages Router en maintenance)

### Alternatives Considered

| Framework | Avantages | Rejeté Parce Que |
|-----------|-----------|------------------|
| **Astro** | Ultra rapide (partial hydration), excellent pour sites statiques | Moins mature pour formulaires dynamiques + moins d'intégration Vercel native que Next.js |
| **Remix** | Excellente UX formulaires, nested routing | Courbe apprentissage plus raide, moins de ressources community, focus SPA vs site vitrine |
| **Gatsby** | SSG puissant, bon écosystème plugins | Performance build lente à l'échelle, complexité GraphQL inutile pour 5 pages, déclin communauté |
| **HTML/CSS/JS vanilla** | Simplicité maximale, zéro dépendance | Pas de tooling moderne (optimisation images, routing, TypeScript), maintenance complexe |

### Implementation Notes

- Utiliser **Static Generation** par défaut pour toutes les pages (Accueil, À propos, Services, Merci)
- Page Contact peut rester statique, seule l'API route `/api/contact` sera serverless
- Activer `output: 'export'` si vraiment full static, MAIS garder API route donc `output: 'standalone'` préférable
- Activer Turbopack pour dev (Next.js 14+) → hot reload ultra rapide

---

## 2. Service d'Envoi Email Transactionnel

### Decision: **Resend**

### Rationale

**Pourquoi Resend** :
- **Simplicité extrême** : API moderne, 1 seul endpoint POST, SDK TypeScript officiel
- **Free tier généreux** : 3 000 emails/mois gratuits (largement suffisant pour site vitrine)
- **Développé pour Vercel ecosystem** : Intégration native, documentation Vercel officielle
- **Delivrability excellente** : SPF/DKIM configurés automatiquement
- **Pas de compte bancaire requis** : Free tier sans carte de crédit (vs SendGrid qui demande validation)
- **Developer Experience** : Webhooks pour tracking, logs clairs, playground test

**Configuration requise** :
```typescript
// Installation
npm install resend

// API Route usage
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
```

### Alternatives Considered

| Service | Avantages | Rejeté Parce Que |
|---------|-----------|------------------|
| **SendGrid** | Très mature, 100 emails/jour gratuits | Free tier limité, UI complexe, setup plus lourd, déclin popularité |
| **Postmark** | Excellente delivrability, focus transactionnel | Pas de free tier (100 emails test seulement), overkill pour site vitrine |
| **AWS SES** | Très cheap (0.10$/1000 emails) | Setup complexe (IAM, SMTP, verification domaine), pas de SDK simple |
| **Nodemailer + Gmail SMTP** | Gratuit, simple | Limites strictes (500 emails/jour), bloqué par filtres spam, non professionnel |

### Implementation Notes

- Variable d'environnement Vercel : `RESEND_API_KEY` (à configurer dans dashboard)
- Sender email : `contact@domaine-franck.fr` (nécessite domaine vérifié dans Resend)
- Fallback : Si domaine pas encore configuré, utiliser `onboarding@resend.dev` (domaine test Resend)
- Rate limiting : Implémenter limitation côté Next.js (max 5 soumissions/heure par IP) pour éviter spam

---

## 3. Gestion des Secrets et Variables d'Environnement Vercel

### Decision: **Vercel Environment Variables avec `.env.local` pour dev**

### Rationale

**Workflow** :
1. **Développement local** : Fichier `.env.local` (non versionné dans Git)
   ```bash
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```
2. **Production Vercel** : Dashboard Vercel > Settings > Environment Variables
   - `RESEND_API_KEY` (Secret, jamais exposé au client)
   - `NEXT_PUBLIC_SITE_URL=https://franck-petretto-ia.vercel.app` (ou domaine custom)

**Sécurité** :
- Préfixer variables publiques (client-side) avec `NEXT_PUBLIC_` seulement si nécessaire
- API keys (RESEND_API_KEY) sont server-side only (jamais dans bundle JavaScript client)
- Ajouter `.env.local` dans `.gitignore` (déjà par défaut Next.js)

### Alternatives Considered

| Approche | Avantages | Rejeté Parce Que |
|----------|-----------|------------------|
| **Fichier .env commité** | Simple | DANGER SÉCURITÉ : API keys exposées dans Git history |
| **Vault externe (HashiCorp)** | Sécurité maximale | Overkill pour site vitrine simple, complexité inutile |
| **Secrets dans code hardcodés** | Aucun | Violation sécurité majeure, non-négociable |

### Implementation Notes

- Créer `.env.example` avec clés sans valeurs pour onboarding développeurs :
  ```
  RESEND_API_KEY=your_resend_api_key_here
  NEXT_PUBLIC_SITE_URL=http://localhost:3000
  ```
- Documenter dans `quickstart.md` la procédure d'obtention clé API Resend
- Utiliser `process.env.RESEND_API_KEY` dans API route (vérifier existence au runtime)

---

## 4. Validation Formulaire (Client-Side + Server-Side)

### Decision: **Zod pour validation schema, validation sur les deux côtés**

### Rationale

**Pourquoi Zod** :
- **Type-safe** : Génération automatique types TypeScript à partir du schema
- **Réutilisable** : Même schema Zod utilisé côté client (React Hook Form) ET côté serveur (API route)
- **Messages d'erreur personnalisables** : Support i18n pour messages en français
- **Léger** : 8kb minified, pas de dépendances
- **Écosystème** : Intégration native avec React Hook Form (résolveur Zod)

**Architecture Double Validation** :
1. **Client-side** (React Hook Form + Zod) : UX immédiate, feedback instantané (FR-022)
2. **Server-side** (Zod dans API route) : Sécurité (ne jamais faire confiance au client)

**Schema Exemple** :
```typescript
// lib/validation.ts
import { z } from 'zod';

export const contactFormSchema = z.object({
  nom: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'), // FR-019
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères')
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
```

### Alternatives Considered

| Solution | Avantages | Rejeté Parce Que |
|----------|-----------|------------------|
| **Yup** | Mature, populaire | Moins bon support TypeScript, schema moins lisible |
| **Joi** | Très complet | Taille bundle plus lourde (40kb+), overkill pour formulaire simple |
| **Validation manuelle** | Zéro dépendance | Code verbeux, duplication client/serveur, pas de types auto-générés |
| **HTML5 validation native** | Built-in browser | Pas de contrôle UX, messages non personnalisables, pas de validation serveur |

### Implementation Notes

- Installer `zod` + `@hookform/resolvers` + `react-hook-form`
- Messages d'erreur en français (FR-022 : "messages d'erreur clairs")
- Afficher erreurs inline sous chaque champ + summary en haut si échec
- Désactiver bouton submit pendant envoi (loading state)

---

## 5. Solution de Style CSS

### Decision: **Tailwind CSS**

### Rationale

**Pourquoi Tailwind** :
- **Productivité** : Utility-first permet prototypage rapide (classes inline)
- **Performance** : PurgeCSS intégré → CSS bundle minimal (seulement classes utilisées)
- **Design System cohérent** : Palette couleurs, spacing, typography standardisés
- **Responsive simple** : Breakpoints intégrés (`md:`, `lg:`, etc.) pour mobile-first (constitution III)
- **Écosystème** : Plugins accessibilité, animations, formulaires
- **Haut de gamme** : Tailwind UI (optionnel payant) fournit composants premium

**Configuration Accessibilité** :
- Plugin `@tailwindcss/forms` : Styles formulaires accessibles par défaut
- Contraste couleurs : Utiliser palette Tailwind (automatiquement WCAG-compliant si bien choisi)
- Focus states : Tailwind force `focus:` states visibles (bon pour navigation clavier)

### Alternatives Considered

| Solution | Avantages | Rejeté Parce Que |
|----------|-----------|------------------|
| **CSS Modules** | Scoped styles, zéro runtime | Verbeux, pas de design system, duplication CSS |
| **Styled Components** | CSS-in-JS, dynamic styles | Runtime overhead (mauvais pour performance), moins bon SSR Next.js |
| **Sass/SCSS** | Puissant, familier | Maintenance lourde, pas de purge automatique, bundle CSS gros |
| **Vanilla CSS** | Simplicité maximale | Pas de tooling, duplication, difficile responsive, pas de design system |

### Implementation Notes

- Installer Tailwind avec config Next.js optimisée (guide officiel)
- Activer `@tailwindcss/typography` si besoin contenu riche (biographie)
- Définir palette couleurs custom "haut de gamme" dans `tailwind.config.ts` :
  ```typescript
  colors: {
    primary: { /* bleu premium */ },
    secondary: { /* accent doré */ },
    // ...
  }
  ```
- Utiliser Tailwind classes pour WCAG (ex: `text-gray-900 dark:text-gray-100` pour contraste)

---

## 6. Optimisation Images

### Decision: **Next.js Image Component (`next/image`)**

### Rationale

**Pourquoi `next/image`** :
- **Optimisation automatique** : Formats modernes (WebP/AVIF) avec fallback (constitution II)
- **Lazy loading natif** : Images chargées seulement quand visibles (performance)
- **Responsive images** : `sizes` attribute généré automatiquement
- **Placeholder blur** : Améliore CLS (Cumulative Layout Shift) → meilleur Lighthouse score
- **Vercel Image Optimization** : CDN global + cache + resize on-demand

**Pour photo Franck Petretto (FR-001)** :
```tsx
import Image from 'next/image';

<Image 
  src="/franck-petretto.jpg" 
  alt="Franck Petretto, Formateur en IA Générative"
  width={400}
  height={400}
  priority // Chargement immédiat (above-the-fold)
  placeholder="blur" // Placeholder flou pendant chargement
/>
```

### Alternatives Considered

| Solution | Avantages | Rejeté Parce Que |
|----------|-----------|------------------|
| **Astro Assets** | Excellent, optimisation build-time | Nécessite Astro (on a choisi Next.js) |
| **Cloudinary** | CDN puissant, transformations avancées | Service tiers payant, overkill pour site vitrine |
| **`<img>` tag HTML classique** | Simple | Pas d'optimisation, pas de lazy load, mauvais Lighthouse |

### Implementation Notes

- Stocker images dans `/public/` (Next.js convention)
- Ajouter `domains` dans `next.config.js` si images externes (non requis ici)
- Utiliser `priority` pour image hero Franck Petretto (above-the-fold)
- Définir dimensions explicites (width/height) pour éviter layout shift

---

## 7. Stratégie de Tests

### Decision: **Vitest (unit) + Playwright (E2E)**

### Rationale

**Vitest pour tests unitaires** :
- Compatible Vite (Next.js 14 utilise Turbopack mais Vitest fonctionne)
- API compatible Jest (familiarité)
- Très rapide (parallèle, HMR des tests)
- Support TypeScript natif

**Playwright pour tests E2E** :
- Multi-browser (Chromium, Firefox, WebKit) → validation SC-005 (cross-browser)
- Excellente Developer Experience (Codegen, UI Mode, trace viewer)
- Tests formulaire contact fiables (FR-016 à FR-022)
- Screenshots/vidéos automatiques si échec

**Tests à implémenter** :
1. **Unit** : Validation Zod schema, helpers, composants isolés
2. **Integration** : API route `/api/contact` (mock Resend)
3. **E2E** : User Stories 1, 2, 3 complets (navigation, formulaire success/fail)

### Alternatives Considered

| Solution | Avantages | Rejeté Parce Que |
|----------|-----------|------------------|
| **Jest + React Testing Library** | Très populaire | Jest plus lent que Vitest, setup complexe avec Next.js App Router |
| **Cypress** | UI excellent, popularité | Playwright plus moderne, meilleur multi-browser, moins de flakiness |
| **Pas de tests E2E** | Zéro setup | Risque régressions formulaire (core business FR-018), non professionnel |

### Implementation Notes

- Setup Playwright : `npm init playwright@latest`
- Tests E2E dans `/tests/e2e/` (structure plan.md)
- Mock Resend dans tests API route (ne pas envoyer vrais emails en CI/CD)
- Exécuter tests Playwright en CI/CD Vercel (preview deployments)

---

## 8. Architecture du Formulaire Contact

### Decision: **React Hook Form (client) + API Route Next.js (serveur) + Resend**

### Rationale

**Flow complet** :

1. **User remplit formulaire** → React Hook Form + Zod validation client-side
2. **Submit** → POST `/api/contact` (API Route Next.js serverless)
3. **API Route** :
   - Re-valide avec Zod (server-side security)
   - Appelle Resend SDK pour envoyer email à `franck.petretto@free.fr`
   - Rate limiting (IP-based, max 5/hour)
   - CSRF protection (Next.js built-in si même origine)
4. **Success** → Redirect `router.push('/merci')` (FR-020)
5. **Fail** → Afficher erreur + email alternatif (FR-021)

**Architecture Serverless** :
- API Route Vercel = Edge Function (latence faible, scale automatique)
- Pas de base de données requise (FR-018 : email direct, pas de persistance)
- Stateless (pas de session server)

### Alternatives Considered

| Approche | Avantages | Rejeté Parce Que |
|----------|-----------|------------------|
| **FormSpree / Netlify Forms** | Zero code backend | Moins de contrôle, branding tiers, pas de customisation avancée |
| **Mailto: link** | Ultra simple | Pas professionnel, dépend client email user, pas de validation |
| **Backend Node.js séparé** | Flexibilité totale | Overkill, coût hosting additionnel, complexité déploiement |

### Implementation Notes

- Implémenter retry logic si Resend API fail (max 2 retries)
- Logger erreurs dans Vercel Logs pour debugging
- Ajouter honeypot field (invisible) anti-spam bot
- Timeout API route : 10 secondes max (Vercel limit)

---

## 9. RGPD & Conformité

### Decision: **Bannière cookies + Politique de confidentialité minimale**

### Rationale

**Exigences RGPD** :
- Formulaire contact collecte données personnelles (nom, email) → doit informer utilisateur
- Pas de cookies analytics tiers dans MVP → bannière simple suffisante
- Consentement explicite avant traitement données (checkbox formulaire)

**Implémentation minimale** :
1. **Page `/mentions-legales`** : Politique confidentialité (qui collecte, pourquoi, combien de temps)
2. **Checkbox formulaire** : "J'accepte que mes données soient utilisées pour me recontacter" (required)
3. **Bannière cookies** : Si aucun cookie tiers → bannière informative simple (pas de consent wall)

### Alternatives Considered

| Approche | Avantages | Rejeté Parce Que |
|----------|-----------|------------------|
| **Ignorer RGPD** | Zéro effort | ILLÉGAL, violation constitution, risque amendes |
| **Solution tierce (OneTrust, Cookiebot)** | Conformité garantie | Overkill pour site sans analytics tiers, coût inutile |
| **Consent wall strict** | Conformité maximale | Mauvaise UX, pas nécessaire si zéro tracking |

### Implementation Notes

- Rédiger politique confidentialité basique (template disponible CNIL)
- Ajouter lien "Mentions légales" footer navigation
- Checkbox formulaire : `required` HTML5 + validation Zod
- Pas besoin Cookiebot/OneTrust si zéro cookies tiers (Next.js cookies session seulement)

---

## 10. Deployment & CI/CD

### Decision: **Vercel Git Integration avec Preview Deployments**

### Rationale

**Workflow Git → Vercel** :
1. **Push sur branch** `001-ai-trainer-showcase` → Vercel crée Preview Deployment automatique
2. **Merge sur `main`** → Vercel déploie Production automatique
3. **Tests** : Playwright tests exécutés sur Preview Deployment (Vercel CI/CD)

**Avantages** :
- Zero config (Vercel détecte Next.js automatiquement)
- Preview URLs pour review (partager avec client avant merge)
- Rollback instantané si problème production
- Monitoring intégré (Vercel Analytics, Web Vitals)

### Alternatives Considered

| Approche | Avantages | Rejeté Parce Que |
|----------|-----------|------------------|
| **GitHub Actions + Vercel CLI** | Contrôle total CI/CD | Complexité inutile, Vercel Git Integration suffit |
| **Hébergement autre (Netlify)** | Alternative viable | Moins optimisé pour Next.js que Vercel |
| **Hébergement classique (OVH, Ionos)** | Coût potentiellement moindre | Pas de serverless functions, pas d'optimisation automatique |

### Implementation Notes

- Connecter repo Git dans Vercel dashboard
- Configurer variables environnement Production (`RESEND_API_KEY`)
- Activer Vercel Analytics (gratuit) pour Web Vitals (Lighthouse monitoring)
- Configurer domaine custom si disponible (sinon `.vercel.app` suffit)

---

## Summary: Technology Stack Final

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Framework** | Next.js 14 App Router | Vercel-native, hybrid rendering, excellent SEO |
| **Language** | TypeScript | Type safety, meilleure DX |
| **Styling** | Tailwind CSS | Productivité, performance, design system |
| **Validation** | Zod | Type-safe, client+server reuse |
| **Forms** | React Hook Form | Excellent UX, intégration Zod |
| **Email** | Resend | Simple, free tier, Vercel-optimized |
| **Images** | Next.js Image | Optimisation auto, lazy load |
| **Testing Unit** | Vitest | Rapide, TypeScript natif |
| **Testing E2E** | Playwright | Multi-browser, excellent DX |
| **Hosting** | Vercel | Next.js optimized, serverless, CI/CD |
| **Secrets** | Vercel Env Vars | Secure, natif plateforme |

---

## Next Steps (Phase 1)

✅ **Toutes les clarifications techniques sont maintenant résolues.**

Prochaines actions dans Phase 1 :
1. Générer `data-model.md` (entités Offre, Contact, Expert)
2. Générer `contracts/contact-api.schema.json` (contract POST /api/contact)
3. Générer `quickstart.md` (guide onboarding développeur)
4. Mettre à jour agent context (ajouter Next.js, Tailwind, Resend dans mémoire)
5. Re-vérifier Constitution Check post-design

---

**Document Status**: ✅ COMPLETE  
**All NEEDS CLARIFICATION**: ✅ RESOLVED  
**Ready for Phase 1**: ✅ YES
