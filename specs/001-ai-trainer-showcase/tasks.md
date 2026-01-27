# Tasks: Site Vitrine & Commercial pour Formateur IA

**Feature Branch**: `001-ai-trainer-showcase`  
**Input**: Design documents from `/specs/001-ai-trainer-showcase/`  
**Prerequisites**: plan.md ✅, spec.md ✅, data-model.md ✅, contracts/contact-api.schema.json ✅, quickstart.md ✅

**Tests**: E2E Playwright tests are REQUIRED for each User Story (as specified in spec.md)

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `- [ ] [ID] [P?] [Story?] Description with file path`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Create Next.js 14 project with App Router and TypeScript in root directory
- [X] T002 [P] Install and configure Tailwind CSS in tailwind.config.ts
- [X] T003 [P] Configure ESLint and Prettier in .eslintrc.json and .prettierrc
- [X] T004 [P] Setup Resend SDK and create .env.example with RESEND_API_KEY placeholder
- [X] T005 [P] Create .gitignore to exclude .env.local and .next/
- [X] T006 [P] Install Zod for validation in package.json
- [X] T007 [P] Install React Hook Form for contact form in package.json
- [X] T008 [P] Setup Playwright for E2E testing in playwright.config.ts
- [X] T009 [P] Setup Vitest for unit testing in vitest.config.ts
- [X] T010 Create project structure directories: app/, components/, lib/, data/, public/, tests/
- [X] T011 [P] Configure TypeScript strict mode in tsconfig.json
- [X] T012 [P] Setup Vercel deployment configuration in vercel.json

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T013 Create TypeScript types for Offre in types/offre.ts
- [X] T014 [P] Create TypeScript types for Expert in types/expert.ts
- [X] T015 [P] Create TypeScript types for Contact in types/contact.ts
- [X] T016 Create static data for 5 offres de formation in data/offres.ts (FR-010 to FR-014)
- [X] T017 [P] Create static data for Expert (Franck Petretto) in data/expert.ts
- [X] T018 Create Zod validation schemas in lib/validation.ts (contactFormSchema, offreFormationSchema)
- [X] T019 Create global layout with navigation structure in app/layout.tsx (FR-026)
- [X] T020 [P] Create Navigation component with responsive menu in components/Navigation.tsx (FR-026)
- [X] T021 [P] Configure Tailwind theme for "haut de gamme" design in tailwind.config.ts (FR-027)
- [X] T022 [P] Add global styles and CSS reset in app/globals.css
- [X] T023 [P] Add Franck Petretto photo to public/franck-petretto.jpg (FR-001)
- [X] T024 Create SEO metadata helper utility in lib/metadata.ts

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Découverte de l'Expert et des Services (Priority: P1) 🎯 MVP

**Goal**: Un visiteur peut découvrir qui est Franck Petretto, son expertise en IA Générative, et comprendre sa proposition de valeur unique.

**Independent Test**: Naviguez sur la page d'accueil et la page "À propos". Le succès est mesuré si un visiteur peut identifier le domaine d'expertise (IA Générative), la proposition de valeur ("Maîtrisez l'IA au-delà du simple prompt"), et la localisation (Grenoble).

### Tests E2E for User Story 1 (REQUIRED)

- [X] T025 [P] [US1] Create E2E test for homepage hero section display in tests/e2e/us1-homepage.spec.ts
- [X] T026 [P] [US1] Create E2E test for navigation to À propos page in tests/e2e/us1-navigation.spec.ts
- [X] T027 [P] [US1] Create E2E test for expert biography display in tests/e2e/us1-about.spec.ts

### Implementation for User Story 1

- [X] T028 [P] [US1] Create homepage with hero section in app/page.tsx (FR-001, FR-002, FR-003)
- [X] T029 [P] [US1] Create À propos page with expert profile in app/a-propos/page.tsx (FR-005 to FR-008)
- [X] T030 [US1] Add optimized Image component for Franck Petretto photo on homepage in app/page.tsx (FR-001)
- [X] T031 [US1] Implement hero title and subtitle section in app/page.tsx (FR-002, FR-003)
- [X] T032 [US1] Add navigation link to À propos in components/Navigation.tsx (FR-004, FR-026)
- [X] T033 [US1] Create ExpertProfile component for biography display in components/ExpertProfile.tsx (FR-006, FR-007)
- [X] T034 [US1] Add Grenoble location highlight section in app/a-propos/page.tsx (FR-008)
- [X] T035 [US1] Add SEO metadata for homepage in app/page.tsx
- [X] T036 [US1] Add SEO metadata for À propos page in app/a-propos/page.tsx
- [X] T037 [US1] Implement responsive layout for homepage hero on mobile/tablet in app/page.tsx
- [X] T038 [US1] Implement responsive layout for À propos page on mobile/tablet in app/a-propos/page.tsx

**Checkpoint**: User Story 1 complete - Visitor can discover Franck Petretto's expertise and value proposition

---

## Phase 4: User Story 2 - Exploration et Sélection d'une Offre (Priority: P1)

**Goal**: Un prospect peut consulter les 5 offres de formation, identifier celle qui correspond à son niveau (débutant/intermédiaire/confirmé), et connaître le prix.

**Independent Test**: Naviguez sur la page "Services & Offres". Le succès est mesuré si un visiteur peut identifier clairement les 5 offres, leur public cible, et leur prix respectif.

### Tests E2E for User Story 2 (REQUIRED)

- [X] T039 [P] [US2] Create E2E test for 5 offres display with correct data in tests/e2e/us2-services.spec.ts
- [X] T040 [P] [US2] Create E2E test for filtering/identifying offres by public cible in tests/e2e/us2-services-filter.spec.ts
- [X] T041 [P] [US2] Create E2E test for price display for all offres in tests/e2e/us2-pricing.spec.ts

### Implementation for User Story 2

- [X] T042 [P] [US2] Create Services & Offres page in app/services/page.tsx (FR-009)
- [X] T043 [P] [US2] Create ServiceCard component for offre display in components/ServiceCard.tsx (FR-015)
- [X] T044 [US2] Import and map 5 offres from data/offres.ts in app/services/page.tsx (FR-010 to FR-014)
- [X] T045 [US2] Implement ServiceCard to display titre, publicCible, and prix in components/ServiceCard.tsx (FR-015)
- [X] T046 [US2] Add navigation link to Services in components/Navigation.tsx (FR-026)
- [X] T047 [US2] Create responsive grid layout for offres (Tailwind) in app/services/page.tsx
- [X] T048 [US2] Add visual distinction for different publicCible levels in components/ServiceCard.tsx
- [X] T049 [US2] Add SEO metadata for Services page in app/services/page.tsx
- [X] T050 [US2] Implement responsive layout for ServiceCard on mobile/tablet in components/ServiceCard.tsx
- [X] T051 [US2] Add hover effects and visual polish to ServiceCard in components/ServiceCard.tsx (FR-027)

**Checkpoint**: User Story 2 complete - Prospect can explore and identify suitable training offers

---

## Phase 5: User Story 3 - Prise de Contact et Demande d'Information (Priority: P1)

**Goal**: Un prospect peut contacter Franck Petretto via un formulaire fonctionnel qui envoie un email à franck.petretto@free.fr avec confirmation de succès.

**Independent Test**: Remplissez et soumettez le formulaire de contact. Le succès est mesuré si le message est envoyé avec succès et que l'utilisateur reçoit une confirmation sur la page de remerciement.

### Tests E2E for User Story 3 (REQUIRED)

- [X] T052 [P] [US3] Create E2E test for contact form validation errors in tests/e2e/us3-contact-validation.spec.ts (FR-022)
- [X] T053 [P] [US3] Create E2E test for successful form submission and redirect in tests/e2e/us3-contact-success.spec.ts (FR-020)
- [X] T054 [P] [US3] Create E2E test for failed submission error handling in tests/e2e/us3-contact-error.spec.ts (FR-021)
- [X] T055 [P] [US3] Create E2E test for thank you page display in tests/e2e/us3-merci.spec.ts (FR-023 to FR-025)

### Implementation for User Story 3

- [X] T056 [P] [US3] Create Contact page in app/contact/page.tsx (FR-016)
- [X] T057 [P] [US3] Create ContactForm component with React Hook Form in components/ContactForm.tsx (FR-017)
- [X] T058 [P] [US3] Create Thank You page in app/merci/page.tsx (FR-023 to FR-025)
- [X] T059 [P] [US3] Create Resend email service utility in lib/email.ts (FR-018)
- [X] T060 [P] [US3] Create API route for contact form in app/api/contact/route.ts (FR-018)
- [X] T061 [US3] Implement client-side validation with Zod in components/ContactForm.tsx (FR-019)
- [X] T062 [US3] Implement server-side validation with Zod in app/api/contact/route.ts (FR-019)
- [X] T063 [US3] Implement Resend email sending to franck.petretto@free.fr in app/api/contact/route.ts (FR-018)
- [X] T064 [US3] Add rate limiting (5 submissions per IP per hour) in app/api/contact/route.ts
- [X] T065 [US3] Implement success redirect to /merci in components/ContactForm.tsx (FR-020)
- [X] T066 [US3] Implement error handling with fallback email display in components/ContactForm.tsx (FR-021)
- [X] T067 [US3] Add inline validation error messages in French in components/ContactForm.tsx (FR-022)
- [X] T068 [US3] Add navigation link to Contact in components/Navigation.tsx (FR-026)
- [X] T069 [US3] Add confirmation message and return link on Thank You page in app/merci/page.tsx (FR-024, FR-025)
- [X] T070 [US3] Add SEO metadata for Contact page in app/contact/page.tsx
- [X] T071 [US3] Add SEO metadata for Thank You page in app/merci/page.tsx
- [X] T072 [US3] Implement responsive layout for ContactForm on mobile/tablet in components/ContactForm.tsx
- [X] T073 [US3] Add loading state and submit button disabled during submission in components/ContactForm.tsx
- [X] T074 [US3] Add honeypot field for bot detection in components/ContactForm.tsx

**Checkpoint**: User Story 3 complete - Prospect can successfully contact Franck Petretto and receive confirmation

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: SEO, accessibility, performance, RGPD compliance, and final optimizations

- [X] T075 [P] Create Mentions Légales / Politique Confidentialité page in app/mentions-legales/page.tsx
- [ ] T076 [P] Add consent checkbox for RGPD in components/ContactForm.tsx
- [ ] T077 [P] Add cookie banner (if needed) in components/CookieBanner.tsx
- [ ] T078 [P] Add alt text to all images for accessibility
- [ ] T079 [P] Test keyboard navigation across all pages
- [ ] T080 [P] Run WAVE/aXe accessibility tests and fix issues (WCAG 2.1 AA)
- [ ] T081 [P] Add Schema.org structured data for Organization in app/layout.tsx
- [ ] T082 [P] Add Schema.org structured data for TrainingCourse in app/services/page.tsx
- [X] T083 [P] Generate sitemap.xml in app/sitemap.ts
- [X] T084 [P] Generate robots.txt in app/robots.ts
- [ ] T085 [P] Optimize images with Next.js Image (blur placeholders) in all pages
- [ ] T086 [P] Configure font optimization (Google Fonts or local) in app/layout.tsx
- [ ] T087 [P] Add Vercel Analytics for Web Vitals tracking in app/layout.tsx
- [ ] T088 Run Lighthouse performance audit and achieve score > 90
- [ ] T089 Run cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] T090 Validate quickstart.md steps work on clean install
- [X] T091 [P] Add error boundary for global error handling in app/error.tsx
- [X] T092 [P] Add 404 page in app/not-found.tsx
- [X] T093 [P] Add loading states for pages in app/loading.tsx
- [ ] T094 Code cleanup and remove console.logs across all files
- [ ] T095 Final visual polish and animations (Framer Motion optional) in components/
- [ ] T096 Security audit for API route (CSRF, rate limiting, input sanitization)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - **BLOCKS all user stories**
- **User Stories (Phase 3-5)**: All depend on Foundational phase completion
  - User Story 1 (US1): Can start after Foundational - No dependencies on other stories
  - User Story 2 (US2): Can start after Foundational - No dependencies on US1 or US3
  - User Story 3 (US3): Can start after Foundational - No dependencies on US1 or US2
  - Stories can proceed **in parallel** (if staffed) or sequentially in priority order (P1 → P1 → P1)
- **Polish (Phase 6)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Independent - Can complete and test without US2 or US3
- **User Story 2 (P1)**: Independent - Can complete and test without US1 or US3
- **User Story 3 (P1)**: Independent - Can complete and test without US1 or US2

### Within Each User Story

- Tests MUST be written FIRST and should FAIL before implementation
- TypeScript types and data files (from Foundational) before components
- Components before pages
- Client-side before API route (US3)
- Core implementation before responsive/polish

### Parallel Opportunities

**Phase 1 - Setup (12 tasks can run in parallel)**:
- T002, T003, T004, T005, T006, T007, T008, T009, T011, T012 can all run simultaneously

**Phase 2 - Foundational (10 tasks can run in parallel)**:
- T014, T015, T017, T020, T021, T022, T023, T024 can all run simultaneously after T013, T016, T018, T019

**Phase 3 - User Story 1 (Tests: 3 parallel, Implementation: 2 parallel)**:
- Tests: T025, T026, T027 can run in parallel
- Implementation: T028, T029 can run in parallel as starting points

**Phase 4 - User Story 2 (Tests: 3 parallel, Implementation: 2 parallel)**:
- Tests: T039, T040, T041 can run in parallel
- Implementation: T042, T043 can run in parallel as starting points

**Phase 5 - User Story 3 (Tests: 4 parallel, Implementation: 4 parallel)**:
- Tests: T052, T053, T054, T055 can run in parallel
- Implementation: T056, T057, T058, T059, T060 can run in parallel as starting points

**Phase 6 - Polish (18 tasks can run in parallel)**:
- T075, T076, T077, T078, T079, T080, T081, T082, T083, T084, T085, T086, T087, T091, T092, T093 can all run simultaneously

**Cross-Story Parallelization**:
- Once Phase 2 completes, **all 3 user stories** can be worked on in parallel by different developers
- Team of 3: Developer A → US1, Developer B → US2, Developer C → US3
- Team of 1: Sequential US1 → US2 → US3

---

## Parallel Example: User Story 1

```bash
# Phase 1: Write all tests for US1 in parallel (MUST FAIL initially)
Task: T025 - "Create E2E test for homepage hero section display in tests/e2e/us1-homepage.spec.ts"
Task: T026 - "Create E2E test for navigation to À propos page in tests/e2e/us1-navigation.spec.ts"
Task: T027 - "Create E2E test for expert biography display in tests/e2e/us1-about.spec.ts"

# Phase 2: Create page structures in parallel
Task: T028 - "Create homepage with hero section in app/page.tsx"
Task: T029 - "Create À propos page with expert profile in app/a-propos/page.tsx"

# Phase 3: Implement components sequentially (depend on pages)
Task: T030-T038 - Sequential refinement of US1 features
```

---

## Parallel Example: User Story 2

```bash
# Phase 1: Write all tests for US2 in parallel (MUST FAIL initially)
Task: T039 - "Create E2E test for 5 offres display with correct data in tests/e2e/us2-services.spec.ts"
Task: T040 - "Create E2E test for filtering/identifying offres by public cible in tests/e2e/us2-services-filter.spec.ts"
Task: T041 - "Create E2E test for price display for all offres in tests/e2e/us2-pricing.spec.ts"

# Phase 2: Create page and component in parallel
Task: T042 - "Create Services & Offres page in app/services/page.tsx"
Task: T043 - "Create ServiceCard component for offre display in components/ServiceCard.tsx"

# Phase 3: Implement features sequentially
Task: T044-T051 - Sequential refinement of US2 features
```

---

## Parallel Example: User Story 3

```bash
# Phase 1: Write all tests for US3 in parallel (MUST FAIL initially)
Task: T052 - "Create E2E test for contact form validation errors in tests/e2e/us3-contact-validation.spec.ts"
Task: T053 - "Create E2E test for successful form submission and redirect in tests/e2e/us3-contact-success.spec.ts"
Task: T054 - "Create E2E test for failed submission error handling in tests/e2e/us3-contact-error.spec.ts"
Task: T055 - "Create E2E test for thank you page display in tests/e2e/us3-merci.spec.ts"

# Phase 2: Create all structures in parallel
Task: T056 - "Create Contact page in app/contact/page.tsx"
Task: T057 - "Create ContactForm component with React Hook Form in components/ContactForm.tsx"
Task: T058 - "Create Thank You page in app/merci/page.tsx"
Task: T059 - "Create Resend email service utility in lib/email.ts"
Task: T060 - "Create API route for contact form in app/api/contact/route.ts"

# Phase 3: Implement features sequentially
Task: T061-T074 - Sequential refinement of US3 features
```

---

## Implementation Strategy

### MVP First (All 3 User Stories - All P1)

Since all 3 user stories are Priority P1, the MVP includes:

1. ✅ Complete Phase 1: Setup
2. ✅ Complete Phase 2: Foundational (**CRITICAL** - blocks all stories)
3. ✅ Complete Phase 3: User Story 1 (Découverte expertise)
4. ✅ Complete Phase 4: User Story 2 (Exploration offres)
5. ✅ Complete Phase 5: User Story 3 (Contact fonctionnel)
6. **VALIDATE**: Test all 3 user stories independently
7. Deploy/demo complete MVP

**MVP Definition**: A visitor can discover Franck Petretto's expertise, explore all 5 training offers with pricing, and successfully contact him via the functional contact form.

### Incremental Delivery (Alternative Approach)

If deploying incrementally:

1. Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy (Informational site only)
3. Add User Story 2 → Test independently → Deploy (With pricing visible)
4. Add User Story 3 → Test independently → Deploy (Full conversion funnel)
5. Add Phase 6 Polish → Deploy (Production-ready)

Each increment adds value without breaking previous functionality.

### Parallel Team Strategy

With multiple developers:

1. **Week 1**: Team completes Setup (Phase 1) + Foundational (Phase 2) together
2. **Week 2-3**: Once Foundational is done:
   - Developer A: User Story 1 (T025-T038)
   - Developer B: User Story 2 (T039-T051)
   - Developer C: User Story 3 (T052-T074)
3. **Week 4**: Team completes Polish (Phase 6) together
4. Stories integrate independently without conflicts

**Single Developer**: Sequential US1 → US2 → US3 (2-3 weeks total)

---

## Task Summary

- **Total Tasks**: 96
- **Phase 1 - Setup**: 12 tasks
- **Phase 2 - Foundational**: 12 tasks (BLOCKING)
- **Phase 3 - User Story 1**: 14 tasks (3 tests + 11 implementation)
- **Phase 4 - User Story 2**: 13 tasks (3 tests + 10 implementation)
- **Phase 5 - User Story 3**: 23 tasks (4 tests + 19 implementation)
- **Phase 6 - Polish**: 22 tasks

**Parallelization Potential**:
- Phase 1: 10 tasks marked [P]
- Phase 2: 8 tasks marked [P]
- Phase 3: 5 tasks marked [P]
- Phase 4: 5 tasks marked [P]
- Phase 5: 9 tasks marked [P]
- Phase 6: 18 tasks marked [P]
- **Total Parallel Tasks**: 55/96 (57%)

**Independent Test Criteria**:
- **US1**: Visit homepage and À propos → Identify expertise, value proposition, and Grenoble location
- **US2**: Visit Services page → Identify all 5 offres with correct public cible and prix
- **US3**: Submit contact form → Receive success confirmation and email sent to franck.petretto@free.fr

**Estimated Timeline**:
- Single developer: 3-4 weeks
- Team of 3 (parallel): 2 weeks
- MVP-only (US1+US2+US3): 2-3 weeks (single dev)

---

## Notes

- [P] tasks = different files, no dependencies, can run in parallel
- [Story] label (US1, US2, US3) maps task to specific user story for traceability
- Each user story is independently completable and testable
- **TDD Approach**: Write tests FIRST (they should FAIL), then implement to make them PASS
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- All user stories are P1 (highest priority) - all required for MVP
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence

---

**Document Status**: ✅ COMPLETE  
**Ready for Implementation**: ✅ YES  
**Format Validated**: ✅ All tasks follow `- [ ] T### [P?] [Story?] Description with file path`
