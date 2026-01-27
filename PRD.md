# Document d'Exigences Produit (PRD)

**Nom du Projet :** Plateforme Formateur IA - Franck Petretto
**Version :** 1.0  
**Date :** 22 janvier 2026  
**Statut :** Brouillon / En attente de validation  

## 1. Vue d'ensemble du projet

### 1.1 Introduction

Ce projet vise à créer un site web vitrine et commercial haut de gamme pour **Franck Petretto**, formateur en Intelligence Artificielle Générative.  
Le site doit positionner Franck Petretto non pas comme un simple utilisateur d’IA, mais comme un “Architecte de l’IA”, capable de manipuler les couches profondes (System Prompting / Meta Prompting) et de créer des workflows complexes (Code + Image + Vidéo).

### 1.2 Objectifs Principaux

1. **Autorité & Crédibilité :** Démontrer une expertise technique rare (Meta Prompting) et une maîtrise des outils créatifs et techniques.
2. **Conversion Commerciale :** Présenter clairement les offres d’accompagnement et faciliter la prise de contact ou le paiement.
3. **Éducation :** Servir de hub de ressources (lien avec YouTube/Patreon) pour montrer la richesse du contenu.


## 2. Public Cible (User Personas)

- **Le débutant :** Initiation à l'Intelligence Artificielle Générative.
- **L’utilisation de Microsoft 365 app :** A besoin d'utiliser Microsoft Copilot dans M365 app.
- **L’utilisation de Microsoft Copilot Studio :** Veut maîtriser la génération d'agent Copilot (no-code, low code, pro-code).
- **Le Développeur / CTO :** Cherche à intégrer l’IA dans le cycle de développement (assistant de codage : GitHub Copilot, Claude Code, Gemini Code) pour gagner en productivité.

## 3. Design & Expérience Utilisateur (UI/UX)

### 3.1 Esthétique

- **Style :** “Tech Minimalist” et “Premium”. Utilisation d’espaces blancs généreux, typographies modernes (ex : Inter ou Space Grotesk) et micro-animations fluides.
- **Thème :**
    - **Défaut :** Light Mode (fond blanc pur ou blanc cassé très léger, texte gris très foncé, accents bleu électrique ou violet subtil).
    - **Option :** Toggle switch pour un Dark Mode élégant (gris anthracite profond, pas de noir pur).
- **Imagerie :** Utilisation de la photo fournie (Houssen) avec un traitement professionnel, mélangée à des visuels abstraits générés par IA pour illustrer les propos.

### 3.2 Navigation

- Menu fixe (Sticky header).
- Structure claire et intuitive.
- Boutons d’appel à l’action (CTA) visibles : “Réserver une consultation” ou “Me contacter sur WhatsApp”.

## 4. Architecture du Site (Sitemap)

Le site doit être riche en contenu et divisé en plusieurs pages stratégiques :

1. **Accueil (Home)**
2. **À Propos (L’Expert)**
3. **Le System Prompting (Page Éducative & Vente)**
4. **Services & Offres (Pricing)**
5. **Portfolio & Workflows (Showcase)**
6. **Blog / Ressources (Lien Youtube)**
7. **Contact & Paiement**

## 5. Description Détaillée des Pages

### 5.1 Page d’Accueil

- **Hero Section :** Photo de Franck Petretto, titre accrocheur (“Maîtrisez l’IA au-delà du simple prompt”). Sous-titre mentionnant l'art du Prompting, Micosoft Copilot, Copilot Studion et les assistants de codage.
- **Preuve Sociale :** Logos des outils maîtrisés (OpenAI, Anthropic, Gemini, Micosoft Copilot, Copilot Studio, Python, etc.) + lien vers la chaîne YouTube (+ de X abonnés).
- **Aperçu des Services :** 3 cartes résumant les offres principales.
- **CTA Principal :** Bouton WhatsApp flottant ou fixe.

### 5.2 Page “L’Expert” (À Propos)

- Biographie détaillée de Franck Petretto.
- Mise en avant de son expérience unique et de sa localisation (Grenoble) comme un atout (perspective globale).
- Philosophie : Pourquoi le prompt basique ne suffit plus.

### 5.3 Page “System Prompting / Meta Prompt” (USP)

- C’est la page clé de différenciation.
- Explication pédagogique de ce qu’est le System Prompting.
- Démonstration “Avant/Après” : Un résultat avec un prompt basique vs un résultat avec un Meta Prompt structuré.
- CTA spécifique : “Apprends à structurer vos IA”.

### 5.4 Page Services & Offres

Le système doit présenter les packages sous forme de cartes tarifaires (Pricing Cards).

- **Offre 1 :** Sensibilisation à Intelligence Artificielle Générative (Pour débutant).
- **Offre 2 :** Maîtriser l'art de la rédaction de prompts avec Microsoft Copilot (Pour débutant).
- **Offre 3 :** Formateur Microsoft Copilot (chat et copilot dans M365 app) (Pour débutant/intermédiaire).
- **Offre 3 :** Formateur Microsoft Copilot Studio pour la création d'agents (Pour intermédiaire).
- **Offre 4 :** Intégrer l’IA dans le cycle de développement et les assistants de codage (Pour confirmé/développeur).

### 5.5 Page Contact & Paiement (Flux Spécifique)

Étant donné les méthodes de paiement manuelles, cette page doit être un “Concierge Flow” :

1. **Formulaire de pré-commande :** Le client sélectionne l’offre.
2. **Affichage des instructions de paiement :**
   - **Option A (Auto) :** Lien vers la page Patreon (pour carte bancaire internationale).
   - **Option B (Manuel) :** Accordéons déroulants avec les coordonnées pour :
     - Remitly
     - Tap Tap Send
     - Western Union
3. **Confirmation :** “Une fois le transfert effectué, envoyez la preuve sur WhatsApp pour bloquer votre créneau.”
4. **Bouton Direct WhatsApp :** Avec message pré-rempli (ex : “Bonjour Franck, je suis intéressé par l’offre Coding…”).

## 6. Fonctionnalités Techniques

### 6.1 Fonctionnalités Requises

- **Toggle Dark/Light Mode :** Doit sauvegarder la préférence de l’utilisateur.
- **Intégration YouTube :** Galerie dynamique des dernières vidéos de la chaîne (via API ou embed manuel).
- **Bouton WhatsApp Flottant :** Toujours visible en bas à droite de l’écran (+33679898834).
- **SEO :** Optimisation pour les mots clés : “Intelligence Artificielle Générative”, “Consultant IA”, “Formation System Prompting”, “Expert IA", “AI Coding Workflow”.

### 6.2 Performance

- Chargement rapide (images optimisées/WebP).
- Responsive Design (Mobile First, car beaucoup de trafic viendra de YouTube mobile).

## 7. Contenu & Copywriting

Le ton doit être **Expert, Pédagogue et Visionnaire**.

- Il faut insister sur le fait que Franck ne vend pas juste des “astuces”, mais une méthodologie (le System Prompting).
- Utiliser des termes techniques précis (Context window, Chain of Thought, Tokens, Latent Space) tout en les rendant accessibles.

## 8. Stack Technique Recommandée

Pour un site moderne, rapide et facile à maintenir :

- **Framework :** Next.js (React) ou Astro (pour la performance).
- **CMS (Gestion de contenu) :** Page statiques dans un premier temps pour le test en local (mais ensuite dans le futur, proposer Sanity.io ou Strapi pour qu’il puisse ajouter ses nouvelles vidéos/articles facilement).
- **Hébergement :** Vercel ou Netlify.
- **Style :** Tailwind CSS (pour gérer facilement le Dark Mode).

## 9. Plan d’Action (Roadmap)

1. **Phase 1 :** Collecte des assets (Photo HD, Textes des offres, Liens vidéos).
2. **Phase 2 :** Maquettage (Wireframe) et validation du Design Light/Dark.
3. **Phase 3 :** Développement des pages clés et intégration du flux de paiement “manuel”.
4. **Phase 4 :** Test des liens WhatsApp et Patreon.
5. **Phase 5 :** Lancement et promotion sur la chaîne YouTube.
