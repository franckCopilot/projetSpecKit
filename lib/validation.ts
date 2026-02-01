// lib/validation.ts
import { z } from 'zod';

// Schéma pour le formulaire de contact
export const contactFormSchema = z.object({
  nom: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom est trop long'),
  email: z.string().email('Adresse email invalide'),
  sujet: z.string().min(1, 'Veuillez sélectionner un sujet'),
  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(2000, 'Le message est trop long'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Schéma pour les offres de formation
export const publicCibleEnum = z.enum([
  'débutant',
  'intermédiaire',
  'confirmé',
  'débutant/intermédiaire',
  'confirmé/développeur',
]);

export const offreFormationSchema = z.object({
  id: z.string().min(1),
  titre: z.string().min(5),
  publicCible: publicCibleEnum,
  prix: z.number().positive(),
  description: z.string().max(500).optional(),
  duree: z.string().optional(),
  objectifs: z.array(z.string()).optional(),
});
