// app/services/page.tsx
import { OFFRES } from '@/data/offres';
import ServiceCard from '@/components/ServiceCard';
import { createMetadata } from '@/lib/metadata';
import { StructuredData, serviceData } from '@/components/StructuredData';

export const metadata = createMetadata({
  title: 'Formations IA | Formateur IA Expert | Grenoble',
  description:
    'Formateur IA professionnel proposant 5 formations en IA Générative : Microsoft Copilot, Copilot Studio, Art du Prompting, GitHub Copilot. Formateur expert basé à Grenoble.',
  keywords: [
    'Formateur IA',
    'Formation IA',
    'Formateur Microsoft Copilot',
    'Formateur Copilot Studio',
    'Formateur Prompting',
    'Formateur IA Grenoble',
  ],
  canonicalPath: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <StructuredData data={serviceData} />
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-accent-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Formateur IA : Formations IA Générative et Microsoft Copilot
            </h1>
            <p className="text-xl md:text-2xl text-primary-50 leading-relaxed mb-4">
              Formateur expert en Masterclass IA, Copilot Studio, Art du Prompting et Agents IA
            </p>
            <p className="text-lg text-primary-100 leading-relaxed">
              <strong>Formateur IA professionnel</strong> proposant des formations adaptées à tous 
              les niveaux : du débutant souhaitant découvrir l'IA Générative aux développeurs 
              experts cherchant à maîtriser GitHub Copilot et les assistants de codage IA.
            </p>
          </div>
        </div>
      </section>

      {/* Offres Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Introduction SEO */}
            <div className="mb-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Formateur IA : Catalogue de Formations en Intelligence Artificielle
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                En tant que <strong>formateur IA professionnel</strong>, je propose un catalogue 
                complet de formations : <strong>formation IA pour débutants</strong>, 
                <strong>masterclass sur l'art du prompting</strong>, <strong>formation Microsoft 
                Copilot M365</strong>, et <strong>formation Copilot Studio pour créer des agents IA</strong>. 
                Chaque formation est conçue pour répondre à vos besoins spécifiques.
              </p>
            </div>

            {/* Légende des niveaux */}
            <div className="mb-12 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Trouvez la formation adaptée à votre niveau
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-green-100 text-green-800 border border-green-300 rounded-full text-sm font-semibold">
                  🌱 Débutant
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 border border-blue-300 rounded-full text-sm font-semibold">
                  📚 Intermédiaire
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 border border-purple-300 rounded-full text-sm font-semibold">
                  🚀 Confirmé / Développeur
                </span>
              </div>
            </div>

            {/* Grid des cartes */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {OFFRES.map((offre) => (
                <ServiceCard key={offre.id} offre={offre} />
              ))}
            </div>

            {/* Note sur la 5ème carte */}
            {OFFRES.length === 5 && (
              <div className="mt-8 text-center text-sm text-gray-600">
                <p>
                  ✅ <strong>{OFFRES.length} formations</strong> disponibles
                  pour tous les profils
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Besoin d'un formateur IA pour votre équipe ?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            En tant que <strong>formateur IA professionnel</strong>, je vous accompagne dans 
            la montée en compétences de vos équipes : <strong>formation Microsoft Copilot</strong>, 
            <strong>art du prompting</strong>, <strong>agents IA avec Copilot Studio</strong>. 
            Contactez-moi pour trouver la formation adaptée à votre projet.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Me contacter
          </a>
        </div>
      </section>

      {/* Section Informations */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Modalités
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-3">🏢</div>
                <h4 className="font-bold text-gray-900 mb-2">
                  En présentiel ou à distance
                </h4>
                <p className="text-sm text-gray-600">
                  Formations adaptées à vos contraintes
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-3">👥</div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Intra ou inter-entreprises
                </h4>
                <p className="text-sm text-gray-600">
                  Sessions individuelles ou en groupe
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-3">📍</div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Basé à Grenoble
                </h4>
                <p className="text-sm text-gray-600">
                  Interventions partout en France
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
