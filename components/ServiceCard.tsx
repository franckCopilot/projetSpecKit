// components/ServiceCard.tsx
import { OffreFormation } from '@/types/offre';

interface ServiceCardProps {
  offre: OffreFormation;
}

// Fonction pour obtenir la couleur basée sur le niveau
function getPublicCibleColor(publicCible: string): string {
  if (publicCible.includes('débutant')) {
    return 'bg-green-100 text-green-800 border-green-300';
  } else if (publicCible.includes('intermédiaire')) {
    return 'bg-blue-100 text-blue-800 border-blue-300';
  } else if (publicCible.includes('confirmé') || publicCible.includes('développeur')) {
    return 'bg-purple-100 text-purple-800 border-purple-300';
  }
  return 'bg-gray-100 text-gray-800 border-gray-300';
}

export default function ServiceCard({ offre }: ServiceCardProps) {
  return (
    <div
      data-testid="service-card"
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 overflow-hidden h-full flex flex-col"
    >
      {/* En-tête avec badge niveau */}
      <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-6 pb-4">
        <div className="flex justify-between items-start mb-3">
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold border ${getPublicCibleColor(
              offre.publicCible
            )}`}
          >
            {offre.publicCible.charAt(0).toUpperCase() +
              offre.publicCible.slice(1)}
          </span>
          {offre.duree && (
            <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
              📅 {offre.duree}
            </span>
          )}
        </div>
      </div>

      {/* Contenu */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
          {offre.titre}
        </h3>

        {offre.description && (
          <p className="text-gray-700 mb-4 leading-relaxed flex-1">
            {offre.description}
          </p>
        )}

        {offre.objectifs && offre.objectifs.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">
              Objectifs :
            </h4>
            <ul className="space-y-1">
              {offre.objectifs.slice(0, 3).map((objectif, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-700 flex items-start"
                >
                  <svg
                    className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {objectif}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer avec prix */}
      <div className="p-6 pt-4 border-t border-gray-200 bg-gray-50">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600 mb-1">Tarif</p>
            <p className="text-3xl font-bold text-primary-700">
              {offre.prix} €
            </p>
          </div>
          <a
            href="/contact"
            className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
          >
            Me contacter
          </a>
        </div>
      </div>
    </div>
  );
}
