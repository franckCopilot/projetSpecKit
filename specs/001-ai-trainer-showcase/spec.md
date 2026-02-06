# Feature Specification: Site Vitrine & Commercial pour Formateur IA

**Feature Branch**: `001-ai-trainer-showcase`  
**Created**: 2026-01-17  
**Status**: Draft  
**Input**: User description: "Créer un site web vitrine et commercial haut de gamme pour promouvoir et vendre les services de Franck Petretto, formateur en Intelligence Artificielle Générative. Le but est de présenter son expertise, détailler des offres de formation, et convertir via un formulaire de contact."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Découverte de l'Expert et des Services (Priority: P1)

Un visiteur potentiel arrive sur le site (via recherche web, référence, ou réseau social) et souhaite rapidement comprendre qui est Franck Petretto, quelle est son expertise, et quels services il propose.

**Why this priority**: C'est le parcours critique qui transforme un visiteur anonyme en prospect qualifié. Sans cette compréhension initiale, aucune conversion n'est possible.

**Independent Test**: Peut être testé en naviguant sur la page d'accueil et la page "À propos". Le succès est mesuré si un visiteur peut identifier le domaine d'expertise (IA Générative), la proposition de valeur unique ("Maîtrisez l'IA au-delà du simple prompt"), et la localisation (Grenoble).

**Acceptance Scenarios**:

1. **Given** un visiteur arrive sur la page d'accueil, **When** il consulte la page, **Then** il voit immédiatement la photo de Franck Petretto, le titre principal "Maîtrisez l'IA au-delà du simple prompt", et le sous-titre mentionnant l'art du prompting, Microsoft Copilot, Copilot Studio et les assistants de codage
2. **Given** un visiteur veut en savoir plus sur l'expert, **When** il accède à la page "À propos" (L'Expert), **Then** il lit une biographie détaillée mettant en avant l'expérience de Franck Petretto et sa localisation à Grenoble présentée comme un atout (proximité locale + perspective globale)
3. **Given** un visiteur consulte la page "À propos", **When** il lit le contenu, **Then** il comprend la valeur ajoutée de l'expertise de Franck en IA Générative

---

### User Story 2 - Exploration et Sélection d'une Offre de Formation (Priority: P1)

Un prospect qualifié souhaite consulter les différentes offres de formation pour identifier celle qui correspond à son niveau et ses besoins, et connaître le prix associé.

**Why this priority**: C'est le moment où le prospect décide s'il y a une correspondance entre son besoin et l'offre. Sans une présentation claire des services et prix, le taux de conversion chute drastiquement.

**Independent Test**: Peut être testé en naviguant sur la page "Services & Offres". Le succès est mesuré si un visiteur peut identifier clairement les 5 offres, leur public cible (débutant/intermédiaire/confirmé), et leur prix respectif.

**Acceptance Scenarios**:

1. **Given** un prospect consulte la page "Services & Offres", **When** il lit le contenu, **Then** il voit 5 offres distinctes listées avec leur intitulé exact, leur public cible, et leur prix
2. **Given** un prospect cherche une formation pour débutants, **When** il consulte les offres, **Then** il identifie facilement 3 offres marquées "débutant" : Découvrir l'IA Générative (400€), Maîtriser l'art de la rédaction de prompts avec Microsoft Copilot (400€), et Formateur Microsoft Copilot (chat et Copilot dans M365 apps) (400€)
3. **Given** un prospect est développeur confirmé, **When** il consulte les offres, **Then** il identifie l'offre "Intégrer l'IA dans le cycle de développement et les assistants de codage" pour confirmés/développeurs à 600€
4. **Given** un prospect s'intéresse à la création d'agents IA, **When** il consulte les offres, **Then** il identifie l'offre "Formateur Microsoft Copilot Studio (création d'agents)" pour niveau intermédiaire à 500€

---

### User Story 3 - Prise de Contact et Demande d'Information (Priority: P1)

Un prospect intéressé par une ou plusieurs offres souhaite contacter Franck Petretto pour obtenir plus d'informations, poser des questions, ou réserver une formation.

**Why this priority**: C'est le point de conversion final. Sans un moyen simple et fonctionnel de contact, tous les efforts précédents sont perdus.

**Independent Test**: Peut être testé en remplissant et soumettant le formulaire de contact. Le succès est mesuré si le message est envoyé avec succès à franck.petretto@free.fr et que l'utilisateur reçoit une confirmation.

**Acceptance Scenarios**:

1. **Given** un prospect veut contacter Franck, **When** il accède à la page "Contact", **Then** il voit un formulaire de contact clair et accessible
2. **Given** un prospect remplit le formulaire avec ses informations et son message, **When** il soumet le formulaire, **Then** le message est envoyé par email à franck.petretto@free.fr
3. **Given** un prospect soumet le formulaire, **When** l'envoi est réussi, **Then** il est redirigé vers une page de remerciement dédiée
4. **Given** un prospect soumet le formulaire avec des données invalides ou manquantes, **When** il clique sur "Envoyer", **Then** il voit des messages d'erreur clairs indiquant les champs à corriger

---

### Edge Cases

- Que se passe-t-il si le formulaire de contact est soumis sans connexion réseau ou si l'envoi échoue ? Le système doit afficher un message d'erreur clair avec une suggestion de contact alternatif (affichage de l'email direct franck.petretto@free.fr)
- Comment le site doit-il se comporter sur mobile et tablette ? (responsive design attendu pour un site "haut de gamme" mais non spécifié)
- Que se passe-t-il si la photo de Franck Petretto n'est pas trouvée ou ne charge pas ?
- Les prix des formations sont-ils fixes ou peuvent-ils évoluer ? Le site doit-il inclure une mention "prix indicatifs" ou une date de validité ?
- Y a-t-il des limites sur la longueur du message dans le formulaire de contact ?

## Requirements *(mandatory)*

### Functional Requirements

**Page Accueil (Home)**

- **FR-001**: Le site DOIT afficher une page d'accueil avec la photo de Franck Petretto (fichier situé à la racine du projet)
- **FR-002**: La page d'accueil DOIT afficher le titre principal "Maîtrisez l'IA au-delà du simple prompt"
- **FR-003**: La page d'accueil DOIT afficher un sous-titre mentionnant : l'art du prompting, Microsoft Copilot, Copilot Studio et les assistants de codage
- **FR-004**: La page d'accueil DOIT permettre une navigation claire vers les autres sections du site (À propos, Services, Contact)

**Page À propos (L'Expert)**

- **FR-005**: Le site DOIT avoir une page "À propos" ou "L'Expert" présentant Franck Petretto
- **FR-006**: La page "À propos" DOIT contenir une biographie détaillée de Franck Petretto (texte placeholder temporaire pour la mise en page initiale, le vrai contenu biographique sera intégré ultérieurement)
- **FR-007**: La page "À propos" DOIT mettre en avant l'expérience de Franck Petretto dans le domaine de l'IA Générative
- **FR-008**: La page "À propos" DOIT mettre en avant la localisation à Grenoble comme un atout, en soulignant à la fois la proximité locale et une perspective globale

**Page Services & Offres (Pricing)**

- **FR-009**: Le site DOIT avoir une page "Services & Offres" ou "Pricing" listant les offres de formation
- **FR-010**: La page Services DOIT afficher l'offre "Découvrir l'IA Générative" avec le public cible "débutant" et le prix "400 €"
- **FR-011**: La page Services DOIT afficher l'offre "Maîtriser l'art de la rédaction de prompts avec Microsoft Copilot" avec le public cible "débutant" et le prix "400 €"
- **FR-012**: La page Services DOIT afficher l'offre "Formateur Microsoft Copilot (chat et Copilot dans M365 apps)" avec le public cible "débutant/intermédiaire" et le prix "400 €"
- **FR-013**: La page Services DOIT afficher l'offre "Formateur Microsoft Copilot Studio (création d'agents)" avec le public cible "intermédiaire" et le prix "500 €"
- **FR-014**: La page Services DOIT afficher l'offre "Intégrer l'IA dans le cycle de développement et les assistants de codage" avec le public cible "confirmé/développeur" et le prix "600 €"
- **FR-015**: Chaque offre DOIT afficher clairement : l'intitulé, le public cible, et le prix

**Page Contact**

- **FR-016**: Le site DOIT avoir une page "Contact" avec un formulaire de contact
- **FR-017**: Le formulaire de contact DOIT permettre à un visiteur de saisir au minimum : son nom, son email, et un message
- **FR-018**: Le formulaire de contact DOIT envoyer les données saisies par email à l'adresse franck.petretto@free.fr
- **FR-019**: Le formulaire DOIT valider que l'adresse email saisie est au format valide avant l'envoi
- **FR-020**: Le formulaire DOIT rediriger l'utilisateur vers une page de remerciement dédiée après un envoi réussi
- **FR-021**: Le formulaire DOIT afficher un message d'erreur clair si l'envoi échoue, accompagné de l'email direct franck.petretto@free.fr comme moyen de contact alternatif
- **FR-022**: Le formulaire DOIT afficher des messages d'erreur pour les champs obligatoires non remplis

**Page Remerciement**

- **FR-023**: Le site DOIT avoir une page de remerciement affichée après un envoi réussi du formulaire de contact
- **FR-024**: La page de remerciement DOIT confirmer que le message a été reçu et indiquer un délai de réponse estimé
- **FR-025**: La page de remerciement DOIT permettre de retourner facilement à la page d'accueil ou aux autres sections du site

**Navigation & Général**

- **FR-026**: Le site DOIT avoir une navigation cohérente permettant d'accéder aux 4 sections principales : Accueil, À propos, Services & Offres, Contact
- **FR-027**: Le site DOIT avoir une apparence "haut de gamme" et professionnelle reflétant l'expertise en IA

### Key Entities

- **Offre de Formation**: Représente un service de formation proposé par Franck Petretto. Attributs clés : intitulé (titre complet de la formation), public cible (débutant/intermédiaire/confirmé), prix en euros, description (non spécifiée mais potentiellement nécessaire)

- **Demande de Contact**: Représente une demande d'information soumise via le formulaire. Attributs clés : nom du demandeur, email du demandeur, message/description de la demande, date de soumission, statut d'envoi

- **Expert (Franck Petretto)**: Représente le formateur. Attributs clés : nom, photo, biographie, localisation (Grenoble), domaines d'expertise (IA Générative, prompting, Microsoft Copilot, Copilot Studio, assistants de codage)

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Un visiteur peut identifier le domaine d'expertise de Franck Petretto (IA Générative) en moins de 10 secondes après l'arrivée sur la page d'accueil
- **SC-002**: Un visiteur peut trouver et lire les 5 offres de formation avec leurs prix respectifs en accédant à une seule page dédiée
- **SC-003**: Un visiteur peut soumettre une demande de contact en moins de 2 minutes (temps de remplissage du formulaire)
- **SC-004**: 100% des messages de contact soumis avec succès sont reçus à l'adresse franck.petretto@free.fr
- **SC-005**: Le site est accessible et fonctionnel sur les navigateurs web standards (Chrome, Firefox, Safari, Edge) sur desktop
- **SC-006**: Les visiteurs peuvent naviguer entre toutes les pages du site (Accueil, À propos, Services, Contact) sans impasse ni erreur
- **SC-007**: Le site reflète une image "haut de gamme" et professionnelle, mesurable par un retour qualitatif positif lors de tests utilisateurs
- **SC-008**: Un visiteur reçoit une confirmation claire et rassurante après avoir soumis le formulaire de contact avec succès

## Assumptions

Les hypothèses suivantes ont été faites lors de la rédaction de cette spécification :

- **Photo de Franck Petretto**: Le fichier photo existe déjà à la racine du projet et est dans un format web standard (JPG, PNG, WebP)
- **Contenu de la biographie**: Un texte placeholder temporaire sera utilisé pour la mise en page initiale, le vrai contenu biographique sera fourni et intégré ultérieurement par Franck Petretto
- **Descriptifs des offres**: Seuls les intitulés, publics cibles et prix sont spécifiés. Des descriptions détaillées de chaque offre pourraient être nécessaires mais ne sont pas définies dans le scope initial
- **Responsive design**: Bien que non explicitement demandé, un site "haut de gamme" en 2026 implique une compatibilité mobile et tablette (responsive design)
- **Méthode d'envoi email**: L'envoi d'email depuis le formulaire nécessite une solution backend ou un service tiers (non spécifié, détail d'implémentation)
- **Hébergement et domaine**: Le site aura un domaine professionnel et un hébergement adapté (non spécifiés)
- **Langues**: Le site est en français uniquement (pas de multilingue)
- **Accessibilité**: Standards d'accessibilité web de base (contraste, navigation au clavier) attendus pour un site professionnel
- **Analytics**: Aucun système de tracking ou d'analytics n'est spécifié mais pourrait être souhaitable pour mesurer les conversions
- **Paiement en ligne**: Les prix sont affichés mais aucun système de paiement en ligne n'est demandé. La transaction se fera probablement après le contact initial
- **Disponibilité et tarifs des formations**: Les tarifs affichés sont fixes et les formations sont toutes disponibles. Pas de gestion de calendrier ou de disponibilité

## Dependencies

- Accès au fichier photo de Franck Petretto (mentionné comme existant à la racine du projet)
- Contenu rédactionnel pour la biographie détaillée de Franck Petretto
- Accès à l'adresse email franck.petretto@free.fr pour la réception des demandes de contact
- [Optionnel] Descriptions détaillées de chaque offre de formation pour enrichir la page Services
- [Optionnel] Logos ou visuels des technologies mentionnées (Microsoft Copilot, Copilot Studio) pour un rendu plus professionnel

## Out of Scope

Les éléments suivants sont explicitement hors du périmètre de cette spécification :

- Système de réservation en ligne avec calendrier
- Paiement en ligne et processus de checkout
- Espace client avec authentification
- Blog ou section actualités
- Témoignages clients ou avis
- Galerie de photos ou vidéos de formations
- Version multilingue du site (anglais, etc.)
- Intégration avec des outils CRM
- Newsletter ou système d'emailing
- Chat en direct ou chatbot
- Optimisation SEO avancée (bien que recommandée)
- Support de navigateurs obsolètes (Internet Explorer, etc.)
