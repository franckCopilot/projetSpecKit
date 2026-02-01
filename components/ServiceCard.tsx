// components/ServiceCard.tsx
import { OffreFormation } from '@/types/offre';

interface ServiceCardProps {
  offre: OffreFormation;
}

// Fonction pour obtenir la couleur du gradient basée sur le niveau
function getPublicCibleGradient(publicCible: string): string {
  // Toutes les offres utilisent le gradient violet
  return 'bg-gradient-to-r from-purple-500 to-violet-600';
}

// Fonction pour obtenir la couleur du badge basée sur le niveau
function getPublicCibleBadgeColor(publicCible: string): string {
  if (publicCible.includes('débutant')) {
    return 'bg-green-100 text-green-800 border border-green-300';
  } else if (publicCible.includes('intermédiaire') && !publicCible.includes('débutant')) {
    return 'bg-blue-100 text-blue-800 border border-blue-300';
  } else if (publicCible.includes('confirmé') || publicCible.includes('développeur')) {
    return 'bg-pink-100 text-pink-800 border border-pink-300';
  }
  return 'bg-gray-100 text-gray-800 border border-gray-300';
}

export default function ServiceCard({ offre }: ServiceCardProps) {
  return (
    <div
      data-testid="service-card"
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 overflow-hidden h-full flex flex-col"
    >
      {/* En-tête avec gradient coloré */}
      <div className={`${getPublicCibleGradient(offre.publicCible)} text-white p-6`}>
        <div className="flex items-center justify-between mb-2">
          <span className={`text-sm font-semibold px-3 py-1 rounded-full ${getPublicCibleBadgeColor(offre.publicCible)}`}>
            {offre.publicCible.charAt(0).toUpperCase() +
              offre.publicCible.slice(1)}
          </span>
          {offre.duree && (
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
              📅 {offre.duree}
            </span>
          )}
        </div>
        <h3 className="text-2xl font-bold">
          {offre.titre}
        </h3>
      </div>

      {/* Contenu */}
      <div className="p-6 flex-1 flex flex-col">
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
