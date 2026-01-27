// types/expert.ts
export interface Expert {
  nom: string;
  photo: string; // path vers image
  titre: string;
  tagline: string;
  sousTagline: string;
  biographie: string; // Markdown supporté
  localisation: string;
  domainesExpertise: string[];
  email: string;
}
