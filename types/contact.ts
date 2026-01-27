// types/contact.ts
export interface ContactFormData {
  nom: string;
  email: string;
  message: string;
}

export interface DemandeContact extends ContactFormData {
  dateEnvoi: Date;
  statusEnvoi: 'pending' | 'sent' | 'failed';
  ipSource?: string; // Optionnel (rate limiting)
}
