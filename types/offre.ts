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
