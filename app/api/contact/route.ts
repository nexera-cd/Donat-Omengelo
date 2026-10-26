import { NextResponse } from 'next/server';
import { validateContactForm } from '../../../src/lib/portfolio-utils';
import { siteConfig } from '../../../src/data/content';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    const validation = validateContactForm({ name, email, subject, message });
    if (!validation.isValid) {
      return NextResponse.json(
        { error: 'Données de formulaire invalides', details: validation.errors },
        { status: 400 }
      );
    }

    // Process notification (e.g. Resend, Nodemailer or logging)
    const emailPayload = {
      to: siteConfig.email,
      from: email,
      name,
      subject: subject || 'Nouveau message depuis le portfolio',
      message,
      timestamp: new Date().toISOString(),
    };

    console.log('[Contact Form Submission Received]', emailPayload);

    // If Resend API key is present in environment, send email
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: 'Portfolio Donat Omengelo <contact@donatomengelo.com>',
            to: [siteConfig.email],
            reply_to: email,
            subject: `[Portfolio] ${subject || 'Nouveau contact'} de ${name}`,
            text: `Nom: ${name}\nEmail: ${email}\nSujet: ${subject || 'Non spécifié'}\n\nMessage:\n${message}`,
          }),
        });
        if (!res.ok) {
          console.warn('[Resend API non-200 response]', await res.text());
        }
      } catch (err) {
        console.error('[Resend send error]', err);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Message reçu avec succès par Donat Omengelo.',
    });
  } catch (error) {
    console.error('[Contact API Error]', error);
    return NextResponse.json(
      { error: 'Une erreur interne est survenue lors du traitement du message.' },
      { status: 500 }
    );
  }
}
