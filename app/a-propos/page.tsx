// app/a-propos/page.tsx
import Image from 'next/image';
import { EXPERT } from '@/data/expert';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'À propos',
  description: `Découvrez ${EXPERT.nom}, expert en IA Générative basé à ${EXPERT.localisation}. ${EXPERT.tagline}`,
  keywords: [
    'À propos',
    'Biographie',
    'Expert IA',
    'Formateur',
    EXPERT.localisation,
  ],
  canonicalPath: '/a-propos',
});

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              À propos de {EXPERT.nom}
            </h1>
            <p className="text-xl md:text-2xl text-primary-700 font-semibold mb-4">
              {EXPERT.tagline}
            </p>
            <p className="text-lg text-gray-700">
              Expert en Formation IA Générative, Masterclass IA, Microsoft Copilot, 
              Copilot Studio et Agents IA
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Photo */}
              <div className="md:col-span-1">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl sticky top-24">
                  <Image
                    src={EXPERT.photo}
                    alt={`${EXPERT.nom}, ${EXPERT.titre}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>

              {/* Biographie */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {EXPERT.titre}
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-line">
                    {EXPERT.biographie}
                  </div>
                </div>

                {/* Domaines d'Expertise */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Domaines d'Expertise : Formation IA et Masterclass
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {EXPERT.domainesExpertise.map((domaine, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 bg-primary-50 px-4 py-3 rounded-lg"
                      >
                        <svg
                          className="w-5 h-5 text-primary-600 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-800 font-medium">
                          {domaine}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compétences SEO */}
                <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    🎯 Formation IA à Grenoble et Partout en France
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Située au cœur des Alpes françaises, <strong>Grenoble</strong> est un pôle
                    d'excellence en matière de technologies et d'innovation.
                    Cette position privilégiée au sein de l'écosystème
                    technologique français me permet de combiner une expertise
                    de pointe avec une approche locale et personnalisée.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    Que vous soyez en région <strong>Auvergne-Rhône-Alpes</strong> ou partout en
                    France, je propose des <strong>formations IA en présentiel</strong> et 
                    <strong> à distance</strong> (visioconférence) pour répondre à vos besoins. 
                    Mes <strong>masterclass IA</strong> et formations professionnelles s'adaptent 
                    à votre organisation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Prêt à maîtriser l'IA Générative et Microsoft Copilot ?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Découvrez mes formations adaptées à tous niveaux : <strong>formation IA</strong>, 
            <strong> masterclass sur l'art du prompting</strong>, <strong>Microsoft Copilot M365</strong>, 
            <strong> Copilot Studio</strong>, <strong>agents IA</strong> et <strong>GitHub Copilot</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/services"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Voir les formations
            </a>
            <a
              href="/contact"
              className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-primary-600"
            >
              Me contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
