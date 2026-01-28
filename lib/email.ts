// lib/email.ts
import { Resend } from 'resend';
import { ContactFormData } from '@/types/contact';

// Lazy initialization to avoid build-time errors
let resendInstance: Resend | null = null;

function getResendClient(): Resend {
  if (!resendInstance) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error('RESEND_API_KEY environment variable is not set');
    }
    resendInstance = new Resend(apiKey);
  }
  return resendInstance;
}

export interface SendContactEmailParams {
  from: ContactFormData;
  recipientEmail: string;
}

export async function sendContactEmail({
  from,
  recipientEmail,
}: SendContactEmailParams): Promise<{ success: boolean; emailId?: string; error?: string }> {
  try {
    const resend = getResendClient();
    const { data, error } = await resend.emails.send({
      from: 'Contact Site Franck Petretto <onboarding@resend.dev>', // Email vérifié Resend
      to: [recipientEmail],
      reply_to: from.email,
      subject: `Nouveau message de contact de ${from.nom}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #0ea5e9 0%, #a855f7 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
              .footer { background: #1f2937; color: #9ca3af; padding: 15px; text-align: center; font-size: 12px; border-radius: 0 0 8px 8px; }
              .info-block { background: white; padding: 15px; margin: 10px 0; border-radius: 6px; border-left: 4px solid #0ea5e9; }
              .label { font-weight: bold; color: #0ea5e9; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>📧 Nouveau message de contact</h2>
              </div>
              <div class="content">
                <div class="info-block">
                  <p><span class="label">Nom :</span> ${from.nom}</p>
                </div>
                <div class="info-block">
                  <p><span class="label">Email :</span> <a href="mailto:${from.email}">${from.email}</a></p>
                </div>
                <div class="info-block">
                  <p><span class="label">Message :</span></p>
                  <p style="white-space: pre-wrap; margin-top: 10px;">${from.message}</p>
                </div>
              </div>
              <div class="footer">
                <p>Message reçu via le site vitrine de Franck Petretto</p>
                <p>Formateur en IA Générative • Grenoble</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Nouveau message de contact

Nom: ${from.nom}
Email: ${from.email}

Message:
${from.message}

---
Message reçu via le site vitrine de Franck Petretto
Formateur en IA Générative • Grenoble
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, emailId: data?.id };
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
