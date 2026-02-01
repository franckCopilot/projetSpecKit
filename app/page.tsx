// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { EXPERT } from '@/data/expert';
import { Metadata } from 'next';
import { StructuredData, personData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Formateur IA à Grenoble | Franck Petretto | Expert IA Générative',
  description:
    'Formateur IA professionnel spécialisé en Intelligence Artificielle Générative. Formateur expert Microsoft Copilot, Copilot Studio, art du prompting et GitHub Copilot. Masterclass IA et formations à Grenoble et partout en France.',
  keywords: [
    'Formateur IA',
    'Formateur IA Grenoble',
    'Formateur IA Générative',
    'Formateur Intelligence Artificielle',
    'Expert IA',
    'Formation IA',
    'Formation IA Générative',
    'Masterclass IA',
    'Microsoft Copilot',
    'Copilot M365',
    'Copilot Studio',
    'Art du Prompting',
    'Prompt Engineering',
    'Prompting',
    'Grenoble',
    'Agents IA',
    'Assistants IA',
  ],
};

export default function HomePage() {
  return (
    <>
      <StructuredData data={personData} />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-blue-100 to-purple-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              <div className="flex justify-center md:justify-end order-1 md:order-2">
                <div className="relative p-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl bg-white">
                    <Image
                      src={EXPERT.photo}
                      alt={`Photo de ${EXPERT.nom}, ${EXPERT.titre}`}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 256px, 320px"
                    />
                  </div>
                </div>
              </div>

              {/* Texte Hero */}
              <div className="order-2 md:order-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                  {EXPERT.nom}
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 font-medium mb-2">
                  {EXPERT.titre}
                </p>
                <p className="text-2xl md:text-3xl font-bold mb-6 leading-snug bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {EXPERT.tagline}
                </p>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  {EXPERT.sousTagline}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link
                    href="/services"
                    className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Découvrir mes formations
                  </Link>
                  <Link
                    href="/a-propos"
                    className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-primary-600"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Expertise Rapide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Formateur IA Expert : Spécialiste IA Générative
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {EXPERT.domainesExpertise.map((domaine, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary-50 to-accent-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <p className="text-gray-800 font-semibold">{domaine}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section SEO - Pourquoi choisir cette formation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Formation IA Générative : Maîtrisez l'Intelligence Artificielle
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary-700 mb-4">
                  🎓 Masterclass IA et Formation Professionnelle
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Nos <strong>formations en Intelligence Artificielle Générative</strong> couvrent 
                  tous les aspects essentiels : de l'<strong>art du prompting</strong> au 
                  <strong> prompt engineering avancé</strong>, en passant par la création 
                  d'<strong>agents IA</strong> avec <strong>Copilot Studio</strong>.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary-700 mb-4">
                  🚀 Microsoft Copilot : Formation Complète
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Devenez expert <strong>Microsoft Copilot</strong> avec nos formations 
                  sur <strong>Copilot M365</strong>, <strong>Microsoft Copilot Studio</strong>, 
                  et la création d'<strong>assistants conversationnels</strong> personnalisés.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary-700 mb-4">
                  💻 GitHub Copilot et Assistants de Codage
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Pour les développeurs : maîtrisez <strong>GitHub Copilot</strong> et les 
                  <strong> assistants de codage IA</strong> pour décupler votre productivité 
                  et intégrer l'IA dans vos workflows de développement.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary-700 mb-4">
                  🎯 Formation IA à Grenoble et Partout en France
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Basé à <strong>Grenoble</strong>, je propose des <strong>formations IA</strong> en 
                  présentiel dans toute la France et à distance. Des <strong>masterclass IA</strong> adaptées 
                  à tous les niveaux, du débutant au développeur confirmé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Mots-clés */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Formations et Expertises
            </h3>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {[
                'Formateur IA',
                'Formateur IA Générative',
                'Formateur Grenoble',
                'Formation IA',
                'Formation IA Générative',
                'Masterclass IA',
                'Art du Prompting',
                'Prompt Engineering',
                'Formateur Microsoft Copilot',
                'Copilot M365',
                'Copilot Studio',
                'Formateur Agents IA',
                'Formateur GitHub Copilot',
                'LLM',
                'Intelligence Artificielle',
              ].map((keyword, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary-50 text-primary-800 rounded-full font-medium hover:bg-primary-100 transition-colors"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Localisation */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-gray-700">
            📍 Basé à{' '}
            <span className="font-bold text-primary-700">
              {EXPERT.localisation}
            </span>
            , au cœur de l'écosystème technologique français
          </p>
        </div>
      </section>
    </div>
    </>
  );
}
