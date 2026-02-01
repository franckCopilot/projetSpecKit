// types/developpement.ts
export type TypeOffreDev = 'pack' | 'support' | 'agent-ia';

export interface OffreDeveloppement {
  id: string;
  titre: string;
  type: TypeOffreDev;
  prix: number | { standard: number; urgence: number }; // en euros
  description: string;
  inclus?: string[];
  delai?: string;
  langages?: string[];
}
