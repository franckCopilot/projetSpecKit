// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { EXPERT } from '@/data/expert';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Franck Petretto - Formateur IA Générative à Grenoble',
  description:
    'Maîtrisez l\'IA au-delà du simple prompt. Expert en Intelligence Artificielle Générative, Microsoft Copilot, Copilot Studio et assistants de codage.',
  keywords: [
    'IA Générative',
    'Formation IA',
    'Microsoft Copilot',
    'Prompting',
    'Grenoble',
    'Formateur IA',
  ],
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              <div className="flex justify-center md:justify-end order-1 md:order-2">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-primary-200">
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

              {/* Texte Hero */}
              <div className="order-2 md:order-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                  {EXPERT.nom}
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 font-medium mb-2">
                  {EXPERT.titre}
                </p>
                <p className="text-2xl md:text-3xl font-bold text-primary-700 mb-6 leading-snug">
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
              Expertise en IA Générative
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
  );
}
