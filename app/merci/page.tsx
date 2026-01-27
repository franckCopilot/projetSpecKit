// app/merci/page.tsx
import Link from 'next/link';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Merci pour votre message',
  description: 'Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.',
});

export default function MerciPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="bg-green-100 rounded-full p-6">
            <svg
              className="w-20 h-20 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Message envoyé avec succès ! ✅
        </h1>

        <p className="text-xl text-gray-700 mb-4">
          Merci pour votre message. J'ai bien reçu votre demande.
        </p>

        <p className="text-lg text-gray-600 mb-8">
          Je m'engage à vous répondre{' '}
          <strong className="text-primary-700">sous 24 heures</strong> pour
          discuter de vos besoins en formation IA Générative.
        </p>

        {/* Info Box */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Et maintenant ?
          </h2>
          <ul className="text-left space-y-3 text-gray-700">
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                Je vais examiner votre demande et préparer une réponse
                personnalisée
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                Vous recevrez ma réponse par email à l'adresse que vous avez
                indiquée
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                N'hésitez pas à consulter mes formations en attendant !
              </span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Retour à l'accueil
          </Link>
          <Link
            href="/services"
            className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-primary-600"
          >
            Découvrir les formations
          </Link>
        </div>

        {/* Footer Note */}
        <p className="mt-12 text-sm text-gray-500">
          Un problème avec votre demande ? Contactez-moi directement à{' '}
          <a
            href="mailto:franck.petretto@free.fr"
            className="text-primary-600 hover:text-primary-700 font-semibold"
          >
            franck.petretto@free.fr
          </a>
        </p>
      </div>
    </div>
  );
}
