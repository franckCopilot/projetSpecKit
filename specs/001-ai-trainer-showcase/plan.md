# Implementation Plan: Site Vitrine & Commercial pour Formateur IA

**Branch**: `001-ai-trainer-showcase` | **Date**: 2025-01-27 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-ai-trainer-showcase/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Créer un site vitrine haut de gamme en français pour Franck Petretto, formateur en IA Générative, avec 5 pages principales (Accueil, À propos, Services/Offres, Contact, Remerciement). Le site doit présenter l'expertise du formateur, détailler 5 offres de formation avec tarifs, et convertir les visiteurs via un formulaire de contact fonctionnel envoyant des emails à franck.petretto@free.fr. Hébergement sur Vercel avec approche SSG/SSR moderne pour performance et SEO optimaux.

## Technical Context

**Language/Version**: JavaScript/TypeScript (Node.js 18+ LTS)  
**Primary Dependencies**: NEEDS CLARIFICATION (React framework - Next.js vs Remix vs Astro)  
**Storage**: N/A (static content, formulaire sans persistance backend)  
**Testing**: NEEDS CLARIFICATION (Vitest/Jest pour unitaires, Playwright/Cypress pour E2E)  
**Target Platform**: Web (navigateurs modernes - Chrome, Firefox, Safari, Edge)  
**Project Type**: Web application (site vitrine statique avec serverless functions)  
**Performance Goals**: Lighthouse Score > 90 (obligatoire par constitution), temps de chargement < 3s, FCP < 1.5s  
**Constraints**: 
- Responsive design mobile-first obligatoire (constitution III)
- WCAG 2.1 AA minimum (constitution III - NON-NÉGOCIABLE)
- HTTPS + RGPD compliant (constitution - Sécurité & Conformité)
- Hébergement Vercel imposé par user
- Envoi email sans backend persistant (serverless function)

**Scale/Scope**: 5 pages statiques + 1 API route serverless (formulaire contact)

**Key Technical Decisions Requiring Research**:
1. **Framework moderne pour SSG/SSR** : Next.js 14+ (App Router) vs Astro vs Remix - NEEDS CLARIFICATION
2. **Service d'envoi email transactionnel** : SendGrid vs Resend vs Postmark vs AWS SES - NEEDS CLARIFICATION  
3. **Gestion des secrets Vercel** : Variables d'environnement (SENDGRID_API_KEY ou équivalent) - NEEDS CLARIFICATION
4. **Validation formulaire** : Client-side (Zod/Yup) + Server-side - NEEDS CLARIFICATION
5. **Solution de style CSS** : Tailwind CSS vs CSS Modules vs Styled Components - NEEDS CLARIFICATION
6. **Images optimisation** : Next.js Image ou Astro Assets ou autre - NEEDS CLARIFICATION

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Vérification Pré-Phase 0

| Principe Constitution | Exigence | Status | Notes |
|----------------------|----------|--------|-------|
| **I. Excellence & Professionnalisme** | Apparence "haut de gamme" | ✅ PASS | FR-027 exige explicitement un site "haut de gamme et professionnel" |
| **II. Performance & Rapidité** | Temps chargement < 3s, Lighthouse > 90 | ✅ PASS | Aligné avec contraintes techniques. Vercel + SSG garantit performance |
| **III. Accessibilité & Responsive** | WCAG 2.1 AA, Mobile-first | ⚠️ ATTENTION | **NON-NÉGOCIABLE** - Doit être testé avant déploiement (constitution III) |
| **IV. Conversion & Business** | Objectif conversion clair | ✅ PASS | US-3 (formulaire contact) = point de conversion principal |
| **V. SEO & Visibilité** | Meta tags, structure sémantique | ✅ PASS | Requis pour site commercial. SSG favorable au SEO |
| **Sécurité - HTTPS** | SSL/TLS obligatoire | ✅ PASS | Vercel fournit HTTPS automatiquement |
| **Sécurité - CSRF** | Protection formulaires | ⚠️ ATTENTION | À implémenter dans API route serverless |
| **Sécurité - RGPD** | Bandeau cookies, consentement | ⚠️ ATTENTION | Politique confidentialité + consentement formulaire requis |
| **Contenu - Témoignages** | Témoignages clients | ❌ OUT OF SCOPE | Explicitement dans "Out of Scope" de la spec |
| **Contenu - Blog/Ressources** | Blog pour SEO | ❌ OUT OF SCOPE | Explicitement dans "Out of Scope" de la spec |
| **Workflow - Tests cross-browser** | Chrome, Firefox, Safari, Edge | ✅ PASS | Aligné avec SC-005 de la spec |
| **Quality Gates - Lighthouse** | Tests performance | ✅ PASS | Doit être vérifié avant déploiement |
| **Quality Gates - Accessibilité** | Tests WAVE/aXe | ⚠️ ATTENTION | Obligation constitution III - tests requis |

### Violations Identifiées (Require Justification)

1. **Témoignages clients absents** : La constitution exige des témoignages, mais la spec les place explicitement "Out of Scope"
   - **Justification** : MVP initial sans témoignages. Peut être ajouté en Phase 2/itération future
   - **Alternative rejetée** : Ajouter témoignages factices → perte de crédibilité

2. **Blog/Ressources absent** : La constitution recommande un blog pour SEO, mais spec le place "Out of Scope"
   - **Justification** : Site vitrine simple sans CMS. Blog = scope Phase 2
   - **Alternative rejetée** : Intégrer CMS headless dès MVP → complexité inutile pour 5 pages

### Actions Pré-Phase 1 (Post-Research)

- [ ] Valider que framework choisi supporte WCAG 2.1 AA out-of-the-box
- [ ] S'assurer solution email inclut protection anti-spam/CSRF
- [ ] Prévoir bandeau cookies RGPD + politique de confidentialité (page légale)
- [ ] Documenter stratégie de tests accessibilité (WAVE + tests manuels clavier)

## Project Structure

### Documentation (this feature)

```text
specs/001-ai-trainer-showcase/
├── spec.md              # Feature specification (DONE)
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output - Technical decisions & rationales
├── data-model.md        # Phase 1 output - Entities (Offre, Contact, Expert)
├── quickstart.md        # Phase 1 output - Developer onboarding guide
├── contracts/           # Phase 1 output - API schemas
│   └── contact-api.schema.json  # POST /api/contact contract
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
# Web application structure (Next.js App Router assumption - to be confirmed in Phase 0)
/
├── app/                      # Next.js 14+ App Router
│   ├── page.tsx             # Page Accueil (FR-001 à FR-004)
│   ├── layout.tsx           # Layout global + navigation (FR-026)
│   ├── a-propos/
│   │   └── page.tsx         # Page À propos (FR-005 à FR-008)
│   ├── services/
│   │   └── page.tsx         # Page Services & Offres (FR-009 à FR-015)
│   ├── contact/
│   │   └── page.tsx         # Page Contact (FR-016 à FR-022)
│   ├── merci/
│   │   └── page.tsx         # Page Remerciement (FR-023 à FR-025)
│   └── api/
│       └── contact/
│           └── route.ts     # API serverless pour envoi email (FR-018)
│
├── components/               # Composants réutilisables
│   ├── Navigation.tsx       # Menu navigation (FR-026)
│   ├── ContactForm.tsx      # Formulaire contact (FR-017 à FR-022)
│   └── ServiceCard.tsx      # Carte offre de formation (FR-015)
│
├── lib/                      # Utilitaires & services
│   ├── email.ts             # Service envoi email (SendGrid/Resend/etc.)
│   └── validation.ts        # Schemas Zod pour validation formulaire (FR-019)
│
├── public/                   # Assets statiques
│   ├── franck-petretto.jpg  # Photo formateur (FR-001, assumption)
│   └── images/
│
├── styles/                   # Styles globaux (si Tailwind → minimal)
│   └── globals.css
│
└── tests/                    # Tests
    ├── unit/                 # Tests unitaires (composants, validation)
    ├── integration/          # Tests API route
    └── e2e/                  # Tests Playwright (parcours utilisateur complets)
        ├── navigation.spec.ts
        ├── contact-form.spec.ts
        └── services.spec.ts
```

**Structure Decision**: 

Web application structure choisie car :
1. Site avec frontend (5 pages React/HTML) + 1 API route backend serverless (formulaire)
2. Hébergement Vercel → optimisé pour Next.js (ou framework similaire)
3. Pas de backend persistant → pas de séparation backend/frontend lourde
4. Monorepo simple suffisant pour un site vitrine

**Note** : La structure exacte (Next.js vs Astro vs autre) sera confirmée en Phase 0 après research. Les chemins ci-dessus sont indicatifs basés sur Next.js App Router (hypothèse initiale forte pour Vercel).

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Témoignages clients absents (constitution : "Éléments Obligatoires") | Spec place explicitement témoignages "Out of Scope". MVP doit se concentrer sur fonctionnalités core (FR-001 à FR-027) | Ajouter témoignages factices → Perte de crédibilité et authenticité professionnelle. Mieux vaut lancer sans et ajouter de vrais témoignages en Phase 2 |
| Blog/Ressources absent (constitution : "Éléments Obligatoires") | Spec place blog "Out of Scope". Site vitrine simple sans besoin CMS pour MVP | Intégrer CMS headless (Strapi/Sanity) dès MVP → Complexité technique excessive pour 5 pages statiques. Blog peut être ajouté itération future si besoin SEO avéré |

**Impact Limité** : Ces violations concernent des "nice-to-have" pour enrichissement futur, pas des blockers pour le MVP fonctionnel. Les exigences constitutionnelles critiques (performance, accessibilité, sécurité, responsive) sont toutes respectées.

---

## Phases d'Implémentation

### Phase MVP (Core Features) - Priority P1

**Objectif** : Lancer un site vitrine fonctionnel avec toutes les exigences FR-001 à FR-027 implémentées.

**Durée Estimée** : 2-3 semaines (1 développeur full-time)

#### Sprint 1 : Setup & Infrastructure (3-4 jours)

**Livrables** :
- [x] Repository Git initialisé + branch `001-ai-trainer-showcase`
- [x] Next.js 14 App Router configuré
- [x] Tailwind CSS intégré
- [x] Structure de projet complète (voir Project Structure)
- [x] Variables d'environnement (Resend API Key)
- [x] Configuration TypeScript + ESLint + Prettier
- [x] Configuration Vercel (preview deployments)

**Acceptance Criteria** :
- `npm run dev` lance serveur sans erreur
- Page blanche s'affiche sur localhost:3000
- Hot reload fonctionne

#### Sprint 2 : Pages Statiques (4-5 jours)

**Livrables** :
- [ ] **Page Accueil** (FR-001 à FR-004)
  - Photo Franck Petretto avec Next.js Image (optimisée)
  - Titre principal + sous-titre (FR-002, FR-003)
  - Navigation responsive (FR-026)
  - Section hero "haut de gamme" (FR-027)
- [ ] **Page À propos** (FR-005 à FR-008)
  - Biographie détaillée (placeholder MVP, remplacé ultérieurement)
  - Mise en avant expertise IA Générative
  - Section Grenoble (atout local + global)
- [ ] **Page Services & Offres** (FR-009 à FR-015)
  - 5 cartes d'offres avec composant ServiceCard
  - Affichage intitulé, public cible, prix
  - Layout responsive (grille Tailwind)
- [ ] **Page Remerciement** (FR-023 à FR-025)
  - Message confirmation
  - Lien retour navigation

**Acceptance Criteria** :
- Toutes les pages accessibles via navigation
- Contenu respecte exigences spec (FR-001 à FR-015, FR-023 à FR-027)
- Design "haut de gamme" validé (review visuel)
- Responsive testé sur mobile, tablette, desktop

#### Sprint 3 : Formulaire Contact & API (5-6 jours)

**Livrables** :
- [ ] **Page Contact** (FR-016 à FR-022)
  - Formulaire React Hook Form + Zod validation
  - Validation client-side (messages français)
  - États loading, success, error
- [ ] **API Route** `/api/contact` (FR-018)
  - Validation serveur Zod
  - Intégration Resend SDK
  - Envoi email à franck.petretto@free.fr
  - Rate limiting (5/heure par IP)
  - Gestion erreurs + logging
- [ ] **Flow complet**
  - Succès → redirection `/merci` (FR-020)
  - Échec → message + email alternatif (FR-021)
  - Validation → erreurs inline (FR-022)

**Acceptance Criteria** :
- Formulaire valide soumet sans erreur
- Email reçu à franck.petretto@free.fr
- Redirection `/merci` après succès
- Erreurs affichées clairement si échec
- Rate limiting bloque 6ème soumission

#### Sprint 4 : Tests & Finitions (3-4 jours)

**Livrables** :
- [ ] **Tests Unitaires** (Vitest)
  - Validation Zod schemas
  - Composants isolés (ServiceCard, ContactForm)
- [ ] **Tests E2E** (Playwright)
  - User Story 1 : Navigation pages
  - User Story 2 : Exploration offres
  - User Story 3 : Formulaire contact (succès + échec)
- [ ] **RGPD & Légal**
  - Page Mentions Légales / Politique Confidentialité
  - Checkbox consentement formulaire
  - Bannière cookies minimale (si nécessaire)
- [ ] **SEO & Accessibilité**
  - Meta tags (title, description) toutes pages
  - Alt text images
  - Navigation clavier complète
  - Tests WAVE/aXe (WCAG 2.1 AA)

**Acceptance Criteria** :
- Tests E2E passent 100%
- Lighthouse Score > 90 (Performance, Accessibility, SEO, Best Practices)
- Validation WCAG 2.1 AA (aucune erreur critique)
- Cross-browser testé (Chrome, Firefox, Safari, Edge)

---

### Phase Finitions (Polish & Optimizations) - Priority P2

**Objectif** : Améliorer l'expérience utilisateur et optimiser le SEO (post-MVP).

**Durée Estimée** : 1 semaine

**Livrables** :
- [ ] Animations & transitions (Framer Motion ou CSS)
- [ ] Chargement progressif images (blur placeholder)
- [ ] Optimisation fonts (Google Fonts ou local)
- [ ] Schema.org markup (formations, organisation)
- [ ] Sitemap.xml automatique
- [ ] Analytics Vercel (Web Vitals)
- [ ] Domaine custom configuré (si disponible)
- [ ] Tests performance avancés (WebPageTest)

**Acceptance Criteria** :
- Lighthouse Score > 95
- Time to Interactive < 2s
- First Contentful Paint < 1s

---

## Backlog de Tâches Détaillé

### Tâches par Page

#### 🏠 Page Accueil

- [ ] **TASK-001** : Créer layout global avec navigation (Header + Footer)
- [ ] **TASK-002** : Implémenter composant Navigation responsive (mobile menu burger)
- [ ] **TASK-003** : Ajouter photo Franck Petretto avec Next.js Image (optimisation)
- [ ] **TASK-004** : Créer section hero avec titre + sous-titre (FR-002, FR-003)
- [ ] **TASK-005** : Ajouter CTA "Découvrir mes formations" → lien Services
- [ ] **TASK-006** : Implémenter palette couleurs "haut de gamme" (Tailwind config)
- [ ] **TASK-007** : Tester responsive (mobile, tablette, desktop breakpoints)

#### 👤 Page À propos

- [ ] **TASK-008** : Créer `/app/a-propos/page.tsx`
- [ ] **TASK-009** : Intégrer données expert depuis `/data/expert.ts`
- [ ] **TASK-010** : Afficher biographie (Markdown supporté si nécessaire)
- [ ] **TASK-011** : Créer section "Localisation Grenoble" (atout local + global)
- [ ] **TASK-012** : Ajouter section "Domaines d'Expertise" (liste à puces stylisée)
- [ ] **TASK-013** : Tester accessibilité (headings structure, alt text)

#### 🎓 Page Services & Offres

- [ ] **TASK-014** : Créer `/app/services/page.tsx`
- [ ] **TASK-015** : Créer composant `ServiceCard.tsx` (titre, public cible, prix)
- [ ] **TASK-016** : Intégrer données offres depuis `/data/offres.ts`
- [ ] **TASK-017** : Mapper 5 offres exactes (FR-010 à FR-014)
- [ ] **TASK-018** : Implémenter layout grille responsive (1 colonne mobile, 2-3 colonnes desktop)
- [ ] **TASK-019** : Ajouter badges "Débutant", "Intermédiaire", "Confirmé" (couleurs distinctes)
- [ ] **TASK-020** : Formater prix (400 € avec espace insécable)
- [ ] **TASK-021** : Ajouter CTA "Me contacter" en bas de page → lien Contact

#### 📧 Page Contact

- [ ] **TASK-022** : Créer `/app/contact/page.tsx`
- [ ] **TASK-023** : Créer composant `ContactForm.tsx` avec React Hook Form
- [ ] **TASK-024** : Implémenter validation Zod (nom, email, message)
- [ ] **TASK-025** : Créer `/lib/validation.ts` avec `contactFormSchema`
- [ ] **TASK-026** : Ajouter messages d'erreur français (FR-022)
- [ ] **TASK-027** : Implémenter états UI (loading, success, error)
- [ ] **TASK-028** : Créer honeypot field invisible (anti-spam bot)
- [ ] **TASK-029** : Ajouter checkbox consentement RGPD (required)
- [ ] **TASK-030** : Tester validation edge cases (email invalide, champs vides)

#### ✅ Page Remerciement

- [ ] **TASK-031** : Créer `/app/merci/page.tsx`
- [ ] **TASK-032** : Afficher message confirmation (FR-024)
- [ ] **TASK-033** : Ajouter délai réponse estimé ("sous 24-48h")
- [ ] **TASK-034** : Lien retour Accueil (FR-025)
- [ ] **TASK-035** : Suggérer exploration Services (lien optionnel)

#### 🔧 API Route Contact

- [ ] **TASK-036** : Créer `/app/api/contact/route.ts`
- [ ] **TASK-037** : Implémenter validation serveur Zod (re-valider body)
- [ ] **TASK-038** : Créer `/lib/email.ts` avec service Resend
- [ ] **TASK-039** : Configurer Resend SDK (API key env)
- [ ] **TASK-040** : Implémenter envoi email à franck.petretto@free.fr (FR-018)
- [ ] **TASK-041** : Créer template email HTML (nom, email, message)
- [ ] **TASK-042** : Implémenter rate limiting (IP-based, max 5/heure)
- [ ] **TASK-043** : Gérer erreurs Resend API (retry logic)
- [ ] **TASK-044** : Logger erreurs dans Vercel Logs
- [ ] **TASK-045** : Tester avec mock Resend (tests intégration)

### Tâches Transversales

#### 🎨 Design & Styles

- [ ] **TASK-046** : Configurer Tailwind CSS (palette custom "haut de gamme")
- [ ] **TASK-047** : Définir typographie (fonts Google Fonts ou local)
- [ ] **TASK-048** : Créer système spacing cohérent (Tailwind config)
- [ ] **TASK-049** : Implémenter dark mode (optionnel Phase 2)
- [ ] **TASK-050** : Créer composants UI réutilisables (Button, Card, Badge)

#### 📱 Responsive Design

- [ ] **TASK-051** : Définir breakpoints Tailwind (mobile, tablette, desktop)
- [ ] **TASK-052** : Tester navigation mobile (menu burger)
- [ ] **TASK-053** : Tester formulaire mobile (taille inputs, espacement)
- [ ] **TASK-054** : Tester grille offres responsive (layout adaptatif)
- [ ] **TASK-055** : Vérifier taille texte mobile (min 16px pour inputs éviter zoom iOS)

#### ♿ Accessibilité (WCAG 2.1 AA)

- [ ] **TASK-056** : Vérifier structure headings sémantique (h1 → h6)
- [ ] **TASK-057** : Ajouter alt text descriptif toutes images
- [ ] **TASK-058** : Tester navigation clavier complète (Tab, Shift+Tab, Enter)
- [ ] **TASK-059** : Vérifier contraste couleurs (ratio 4.5:1 minimum)
- [ ] **TASK-060** : Ajouter focus states visibles (outline ou ring Tailwind)
- [ ] **TASK-061** : Tester avec screen reader (NVDA ou VoiceOver)
- [ ] **TASK-062** : Implémenter skip-to-content link (optionnel)
- [ ] **TASK-063** : Vérifier attributs ARIA (roles, labels)

#### 🔍 SEO & Performance

- [ ] **TASK-064** : Ajouter meta tags (title, description) toutes pages
- [ ] **TASK-065** : Configurer Open Graph tags (partage réseaux sociaux)
- [ ] **TASK-066** : Créer sitemap.xml (Next.js sitemap generation)
- [ ] **TASK-067** : Créer robots.txt
- [ ] **TASK-068** : Implémenter Schema.org markup (formations, organisation)
- [ ] **TASK-069** : Optimiser images (formats WebP/AVIF, lazy loading)
- [ ] **TASK-070** : Minifier CSS/JS (Next.js automatic)
- [ ] **TASK-071** : Configurer cache headers Vercel
- [ ] **TASK-072** : Tester Lighthouse (score > 90 requis)

#### 🔒 Sécurité & RGPD

- [ ] **TASK-073** : Créer page Mentions Légales / Politique Confidentialité
- [ ] **TASK-074** : Ajouter lien footer vers Mentions Légales
- [ ] **TASK-075** : Implémenter bandeau cookies (si analytics tiers)
- [ ] **TASK-076** : Vérifier HTTPS Vercel (automatique)
- [ ] **TASK-077** : Implémenter CSRF protection (Next.js built-in)
- [ ] **TASK-078** : Valider conformité RGPD formulaire (consentement explicite)

---

## Stratégie de Tests

### Tests Unitaires (Vitest)

**Fichiers** : `/tests/unit/*.test.ts`

**Scope** :
- Validation Zod schemas (`contactFormSchema`, `offreFormationSchema`)
- Composants isolés (ServiceCard, ContactForm props)
- Fonctions utilitaires (`formatPrice`, validation helpers)

**Scénarios** :

```typescript
// tests/unit/validation.test.ts
describe('contactFormSchema', () => {
  it('validates correct data', () => {
    const data = { nom: 'Jean', email: 'jean@test.fr', message: 'Bonjour test' };
    expect(contactFormSchema.safeParse(data).success).toBe(true);
  });

  it('rejects invalid email (FR-019)', () => {
    const data = { nom: 'Jean', email: 'invalid', message: 'Bonjour test' };
    expect(contactFormSchema.safeParse(data).success).toBe(false);
  });

  it('rejects short message', () => {
    const data = { nom: 'Jean', email: 'jean@test.fr', message: 'Court' };
    const result = contactFormSchema.safeParse(data);
    expect(result.success).toBe(false);
  });
});
```

**Coverage Goal** : > 80% pour `/lib/` et composants

---

### Tests d'Intégration (Vitest)

**Fichiers** : `/tests/integration/*.test.ts`

**Scope** :
- API route `/api/contact` (avec mock Resend)
- Rate limiting
- Gestion erreurs

**Scénarios** :

```typescript
// tests/integration/contact-api.test.ts
import { POST } from '@/app/api/contact/route';

describe('POST /api/contact', () => {
  it('returns 200 on valid data (FR-018)', async () => {
    const request = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify({ nom: 'Test', email: 'test@example.com', message: 'Message test' })
    });
    const response = await POST(request);
    expect(response.status).toBe(200);
  });

  it('returns 400 on invalid email (FR-019)', async () => {
    const request = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify({ nom: 'Test', email: 'invalid', message: 'Message test' })
    });
    const response = await POST(request);
    expect(response.status).toBe(400);
  });

  it('returns 429 after 5 requests (rate limiting)', async () => {
    // Simuler 6 requêtes...
  });
});
```

---

### Tests E2E (Playwright)

**Fichiers** : `/tests/e2e/*.spec.ts`

**Scope** : User Stories complètes (parcours utilisateur réel)

#### Test Scenario: User Story 1 - Découverte Expert et Services

```typescript
// tests/e2e/navigation.spec.ts
test('US-1: Visiteur découvre expertise Franck Petretto', async ({ page }) => {
  // Given: visiteur arrive sur page d'accueil
  await page.goto('http://localhost:3000');

  // Then: voit photo, titre, sous-titre (FR-001, FR-002, FR-003)
  await expect(page.locator('img[alt*="Franck Petretto"]')).toBeVisible();
  await expect(page.locator('text=Maîtrisez l\'IA au-delà du simple prompt')).toBeVisible();
  await expect(page.locator('text=Microsoft Copilot')).toBeVisible();

  // When: navigue vers À propos
  await page.click('text=À propos');

  // Then: lit biographie et localisation Grenoble (FR-006, FR-008)
  await expect(page.locator('text=Grenoble')).toBeVisible();
  await expect(page.locator('text=Intelligence Artificielle Générative')).toBeVisible();
});
```

#### Test Scenario: User Story 2 - Exploration Offres

```typescript
// tests/e2e/services.spec.ts
test('US-2: Prospect explore les 5 offres de formation', async ({ page }) => {
  // Given: prospect consulte page Services
  await page.goto('http://localhost:3000/services');

  // Then: voit 5 offres exactes (FR-010 à FR-014)
  await expect(page.locator('text=Sensibilisation à l\'IA Générative')).toBeVisible();
  await expect(page.locator('text=400 €').first()).toBeVisible();

  // Then: identifie offre débutant
  const debutantOffers = page.locator('text=débutant');
  await expect(debutantOffers).toHaveCount(3); // 3 offres débutant

  // Then: identifie offre confirmé/développeur
  await expect(page.locator('text=confirmé/développeur')).toBeVisible();
  await expect(page.locator('text=600 €')).toBeVisible();
});
```

#### Test Scenario: User Story 3 - Contact (Success)

```typescript
// tests/e2e/contact-form.spec.ts
test('US-3: Prospect envoie message avec succès (FR-020)', async ({ page }) => {
  // Given: prospect accède à page Contact
  await page.goto('http://localhost:3000/contact');

  // When: remplit formulaire avec données valides
  await page.fill('input[name="nom"]', 'Marie Martin');
  await page.fill('input[name="email"]', 'marie@example.com');
  await page.fill('textarea[name="message"]', 'Je souhaite plus d\'informations sur Microsoft Copilot Studio.');

  // When: soumet formulaire
  await page.click('button[type="submit"]');

  // Then: redirigé vers page Remerciement (FR-020)
  await expect(page).toHaveURL(/.*\/merci/);
  await expect(page.locator('text=Votre message a été envoyé')).toBeVisible();
});
```

#### Test Scenario: User Story 3 - Contact (Validation Error)

```typescript
test('US-3: Prospect voit erreurs validation (FR-022)', async ({ page }) => {
  await page.goto('http://localhost:3000/contact');

  // When: soumet formulaire avec email invalide
  await page.fill('input[name="nom"]', 'A'); // Trop court
  await page.fill('input[name="email"]', 'invalid-email');
  await page.fill('textarea[name="message"]', 'Court');
  await page.click('button[type="submit"]');

  // Then: voit messages d'erreur inline (FR-022)
  await expect(page.locator('text=Le nom doit contenir au moins 2 caractères')).toBeVisible();
  await expect(page.locator('text=Adresse email invalide')).toBeVisible();
  await expect(page.locator('text=Le message doit contenir au moins 10 caractères')).toBeVisible();
});
```

#### Test Scenario: Edge Case - Envoi Email Échoue

```typescript
test('Edge Case: Affiche email alternatif si envoi échoue (FR-021)', async ({ page }) => {
  // Mock API pour forcer échec
  await page.route('**/api/contact', route => 
    route.fulfill({ status: 500, body: JSON.stringify({ 
      success: false, 
      error: 'Erreur serveur', 
      fallbackEmail: 'franck.petretto@free.fr' 
    })})
  );

  await page.goto('http://localhost:3000/contact');
  await page.fill('input[name="nom"]', 'Test User');
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('textarea[name="message"]', 'Message de test pour erreur');
  await page.click('button[type="submit"]');

  // Then: voit message erreur + email alternatif (FR-021)
  await expect(page.locator('text=Une erreur est survenue')).toBeVisible();
  await expect(page.locator('text=franck.petretto@free.fr')).toBeVisible();
});
```

---

### Validation Critères de Succès (SC-001 à SC-008)

**Tests manuels** (complément E2E) :

| Critère | Test | Succès Si |
|---------|------|-----------|
| **SC-001** | Chronomètre depuis arrivée page d'accueil | Visiteur identifie "IA Générative" en < 10s |
| **SC-002** | Accéder page Services | 5 offres + prix visibles sur 1 seule page |
| **SC-003** | Chronomètre remplissage formulaire | Soumission possible en < 2 min |
| **SC-004** | Tester envoi formulaire réel | Email reçu à franck.petretto@free.fr |
| **SC-005** | Tester sur Chrome, Firefox, Safari, Edge | Site fonctionnel sans erreur sur 4 navigateurs |
| **SC-006** | Naviguer entre toutes pages | Aucune impasse, tous liens fonctionnels |
| **SC-007** | Review qualitatif design | Apparence "haut de gamme" confirmée |
| **SC-008** | Soumettre formulaire | Message confirmation clair et rassurant |

---

## Definition of Done (DoD)

### Checklist Complète (Alignée FR-001 à FR-027 + SC-001 à SC-008)

#### ✅ Fonctionnalités (Functional Requirements)

**Page Accueil**
- [ ] FR-001 : Photo Franck Petretto affichée (optimisée Next.js Image)
- [ ] FR-002 : Titre "Maîtrisez l'IA au-delà du simple prompt" présent
- [ ] FR-003 : Sous-titre mentionne art du prompting, Microsoft Copilot, Copilot Studio, assistants codage
- [ ] FR-004 : Navigation claire vers À propos, Services, Contact

**Page À propos**
- [ ] FR-005 : Page "À propos" ou "L'Expert" existe
- [ ] FR-006 : Biographie détaillée de Franck Petretto (placeholder MVP acceptable)
- [ ] FR-007 : Expérience IA Générative mise en avant
- [ ] FR-008 : Localisation Grenoble présentée comme atout (local + global)

**Page Services & Offres**
- [ ] FR-009 : Page "Services & Offres" existe
- [ ] FR-010 : Offre "Découvrir l'IA Générative" | débutant | 400 €
- [ ] FR-011 : Offre "Maîtriser l'art de la rédaction de prompts avec Microsoft Copilot" | débutant | 400 €
- [ ] FR-012 : Offre "Formateur Microsoft Copilot (chat et M365 apps)" | débutant/intermédiaire | 400 €
- [ ] FR-013 : Offre "Formateur Microsoft Copilot Studio (création d'agents)" | intermédiaire | 500 €
- [ ] FR-014 : Offre "Intégrer l'IA dans le cycle de développement et assistants de codage" | confirmé/développeur | 600 €
- [ ] FR-015 : Chaque offre affiche intitulé, public cible, prix

**Page Contact**
- [ ] FR-016 : Page "Contact" avec formulaire existe
- [ ] FR-017 : Formulaire permet saisie nom, email, message
- [ ] FR-018 : Formulaire envoie données à franck.petretto@free.fr
- [ ] FR-019 : Email validé (format valide) avant envoi
- [ ] FR-020 : Redirection vers page Remerciement après envoi réussi
- [ ] FR-021 : Message erreur + email alternatif franck.petretto@free.fr si échec
- [ ] FR-022 : Messages erreur clairs pour champs obligatoires

**Page Remerciement**
- [ ] FR-023 : Page remerciement existe
- [ ] FR-024 : Message confirme réception + délai réponse estimé
- [ ] FR-025 : Navigation retour facile (Accueil, autres sections)

**Navigation & Général**
- [ ] FR-026 : Navigation cohérente vers 4 sections (Accueil, À propos, Services, Contact)
- [ ] FR-027 : Apparence "haut de gamme" et professionnelle

#### ✅ Critères de Succès (Success Criteria)

- [ ] SC-001 : Domaine IA Générative identifiable en < 10s (testé manuellement)
- [ ] SC-002 : 5 offres + prix visibles sur 1 seule page Services
- [ ] SC-003 : Soumission formulaire possible en < 2 min (testé manuellement)
- [ ] SC-004 : 100% messages contact reçus à franck.petretto@free.fr (testé en prod)
- [ ] SC-005 : Site fonctionnel sur Chrome, Firefox, Safari, Edge (tests E2E)
- [ ] SC-006 : Navigation complète sans impasse (tous liens testés)
- [ ] SC-007 : Image "haut de gamme" validée (review design)
- [ ] SC-008 : Confirmation claire après soumission formulaire

#### ✅ Qualité & Performance

**Tests**
- [ ] Tests unitaires passent à 100% (`npm run test`)
- [ ] Tests E2E Playwright passent à 100% (`npx playwright test`)
- [ ] Couverture code > 80% pour `/lib/` et composants critiques

**Performance**
- [ ] Lighthouse Score > 90 (Performance, Accessibility, SEO, Best Practices)
- [ ] Temps chargement < 3s (constitution II)
- [ ] First Contentful Paint < 1.5s

**Accessibilité (WCAG 2.1 AA)**
- [ ] Tests WAVE : 0 erreur critique
- [ ] Tests aXe : 0 erreur critique
- [ ] Navigation clavier complète fonctionnelle (Tab, Shift+Tab, Enter)
- [ ] Contraste couleurs respecté (ratio 4.5:1 minimum)
- [ ] Alt text descriptif sur toutes images
- [ ] Structure headings sémantique (h1 unique, hiérarchie h2-h6)

**SEO**
- [ ] Meta tags (title, description) sur toutes pages
- [ ] Sitemap.xml généré
- [ ] Robots.txt configuré
- [ ] Schema.org markup formations (optionnel MVP)

**Sécurité & RGPD**
- [ ] HTTPS activé (Vercel automatique)
- [ ] Variables environnement sécurisées (RESEND_API_KEY serveur-side only)
- [ ] Rate limiting API formulaire (5/heure par IP)
- [ ] Page Mentions Légales / Politique Confidentialité
- [ ] Checkbox consentement formulaire (RGPD)
- [ ] Aucune donnée personnelle stockée (email direct uniquement)

**Cross-Browser & Responsive**
- [ ] Testé Chrome (dernière version)
- [ ] Testé Firefox (dernière version)
- [ ] Testé Safari (dernière version)
- [ ] Testé Edge (dernière version)
- [ ] Responsive mobile (iPhone, Android)
- [ ] Responsive tablette (iPad)

#### ✅ Déploiement

- [ ] Déployé sur Vercel (preview deployment fonctionnel)
- [ ] Variables environnement Production configurées (RESEND_API_KEY)
- [ ] Domaine custom configuré (si disponible) OU `.vercel.app` utilisable
- [ ] Logs Vercel actifs (monitoring erreurs API)
- [ ] Rollback plan documenté

#### ✅ Documentation

- [ ] README.md à jour (instructions setup)
- [ ] Quickstart.md validé (steps testés)
- [ ] Variables environnement documentées (.env.example)
- [ ] Commentaires code pour logique complexe
- [ ] API contract respecté (contracts/contact-api.schema.json)

---

## Conclusion & Next Steps

### Résumé du Plan

Ce plan d'implémentation fournit :

1. ✅ **Technical Context** : Stack Next.js 14 + Tailwind + Resend + Vercel
2. ✅ **Constitution Check** : Violations justifiées (témoignages/blog hors scope MVP)
3. ✅ **Project Structure** : Architecture claire Web App avec serverless functions
4. ✅ **Research** : Décisions techniques documentées avec rationales (research.md)
5. ✅ **Data Model** : Entités Offre, Contact, Expert définies (data-model.md)
6. ✅ **API Contract** : POST /api/contact spécifié (contracts/contact-api.schema.json)
7. ✅ **Quickstart** : Guide onboarding développeur (quickstart.md)
8. ✅ **Phases** : MVP (2-3 semaines) + Finitions (1 semaine)
9. ✅ **Backlog** : 78 tâches détaillées (TASK-001 à TASK-078)
10. ✅ **Tests** : Stratégie Unit + Integration + E2E (Vitest + Playwright)
11. ✅ **DoD** : Checklist complète alignée FR-001 à FR-027 + SC-001 à SC-008

### Prochaines Actions

**Pour démarrer l'implémentation** :

1. **Exécuter** `/speckit.tasks` pour générer `tasks.md` (backlog exécutable)
2. **Setup environnement** : Suivre `quickstart.md` (étapes 1-6)
3. **Sprint 1** : Infrastructure (3-4 jours)
4. **Sprints 2-4** : Features + Tests (10-12 jours)
5. **Phase Finitions** : Polish (1 semaine)

**Artifacts Générés** :
- ✅ `plan.md` (ce fichier)
- ✅ `research.md` (décisions techniques)
- ✅ `data-model.md` (entités)
- ✅ `contracts/contact-api.schema.json` (API spec)
- ✅ `quickstart.md` (guide dev)
- ⏳ `tasks.md` (à générer avec `/speckit.tasks`)

---

**Status du Plan** : ✅ **COMPLET**  
**Prêt pour Implémentation** : ✅ **OUI**  
**Commande suivante** : `/speckit.tasks` (générer backlog exécutable)
