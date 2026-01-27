// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-600">404</h1>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Page non trouvée
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Retour à l'accueil
          </Link>
          <div className="flex gap-4 justify-center mt-4">
            <Link
              href="/services"
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              Voir les formations
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              href="/contact"
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              Contactez-moi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
