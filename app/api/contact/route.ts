// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validation';
import { sendContactEmail } from '@/lib/email';
import { z } from 'zod';

// Simple in-memory rate limiting (pour production, utiliser Redis/Upstash)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    // Nouveau ou réinitialisé
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + 60 * 60 * 1000, // 1 heure
    });
    return true;
  }

  if (limit.count >= 5) {
    // Limite atteinte (5 requêtes par heure)
    return false;
  }

  limit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting par IP
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      'unknown';

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          error:
            'Trop de tentatives. Veuillez réessayer dans 1 heure.',
          retryAfter: 3600,
        },
        { status: 429 }
      );
    }

    // Parsing et validation du body
    const body = await request.json();

    // Check honeypot (si présent, c'est un bot)
    if (body.website) {
      console.warn('Honeypot triggered, potential bot detected');
      return NextResponse.json(
        { success: false, error: 'Validation failed' },
        { status: 400 }
      );
    }

    // Validation Zod serveur (FR-019)
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      const errors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          error: 'Validation échouée',
          details: errors,
        },
        { status: 400 }
      );
    }

    const formData = validationResult.data;

    // Envoi de l'email via Resend (FR-018)
    const emailResult = await sendContactEmail({
      from: formData,
      recipientEmail: process.env.CONTACT_RECIPIENT_EMAIL || 'franck.petretto@free.fr',
    });

    if (!emailResult.success) {
      console.error('Email sending failed:', emailResult.error);
      return NextResponse.json(
        {
          success: false,
          error:
            'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer ou nous contacter directement.',
          fallbackEmail: 'franck.petretto@free.fr',
          details:
            process.env.NODE_ENV === 'development'
              ? emailResult.error
              : undefined,
        },
        { status: 500 }
      );
    }

    // Succès (FR-020)
    return NextResponse.json(
      {
        success: true,
        message:
          'Votre message a été envoyé avec succès. Vous allez être redirigé...',
        emailId: emailResult.emailId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      {
        success: false,
        error:
          'Une erreur inattendue est survenue. Veuillez réessayer plus tard.',
        fallbackEmail: 'franck.petretto@free.fr',
      },
      { status: 500 }
    );
  }
}
