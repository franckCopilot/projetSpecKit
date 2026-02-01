import { OFFRES_DEV } from '@/data/developpement';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Développement Web | Création Site Vitrine & Support Technique',
  description:
    'Services de développement web professionnel : création de site vitrine à 990€ avec nom de domaine inclus, support technique et correction de bugs multi-langages (JavaScript, React, Python, PHP).',
  keywords: [
    'Développement Web',
    'Création Site Vitrine',
    'Site Web Professionnel',
    'Support Technique',
    'Correction de Bugs',
    'TMA',
    'Développeur Web',
  ],
  canonicalPath: '/developpement-web',
});

export default function DeveloppementWebPage() {
  const packSiteVitrine = OFFRES_DEV.find((o) => o.type === 'pack');
  const supportTechnique = OFFRES_DEV.find((o) => o.type === 'support');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Développement Web Professionnel
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 leading-relaxed mb-4">
              Création de sites web & Support technique multi-technologies
            </p>
            <p className="text-lg text-blue-100 leading-relaxed">
              Solutions web sur mesure et accompagnement technique pour vos projets digitaux
            </p>
          </div>
        </div>
      </section>

      {/* Offres Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Pack Site Vitrine */}
              {packSiteVitrine && (
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
                        Pack Complet
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold">
                      {packSiteVitrine.titre}
                    </h2>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {packSiteVitrine.description}
                    </p>

                    {packSiteVitrine.delai && (
                      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                        <div className="flex items-center gap-2 text-blue-900">
                          <span className="text-xl">⏱️</span>
                          <span className="font-semibold">
                            Délai : {packSiteVitrine.delai}
                          </span>
                        </div>
                      </div>
                    )}

                    {packSiteVitrine.inclus && (
                      <div className="mb-4">
                        <h3 className="font-bold text-gray-900 mb-3 text-lg">
                          ✅ Ce qui est inclus :
                        </h3>
                        <ul className="space-y-2">
                          {packSiteVitrine.inclus.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-gray-700"
                            >
                              <span className="text-green-600 mt-1 flex-shrink-0">
                                ✓
                              </span>
                              <span>{item}</span>
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
                          {typeof packSiteVitrine.prix === 'number'
                            ? packSiteVitrine.prix
                            : packSiteVitrine.prix.standard} €
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
              )}

              {/* Support Technique */}
              {supportTechnique && (
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
                        À l'heure
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold">
                      {supportTechnique.titre}
                    </h2>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {supportTechnique.description}
                    </p>

                    {supportTechnique.langages && (
                      <div className="mb-6">
                        <h3 className="font-bold text-gray-900 mb-3 text-lg">
                          🛠️ Technologies supportées :
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {supportTechnique.langages.map((lang, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                            >
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {supportTechnique.inclus && (
                      <div className="mb-4">
                        <h3 className="font-bold text-gray-900 mb-3 text-lg">
                          ✅ Services proposés :
                        </h3>
                        <ul className="space-y-2">
                          {supportTechnique.inclus.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-gray-700"
                            >
                              <span className="text-green-600 mt-1 flex-shrink-0">
                                ✓
                              </span>
                              <span>{item}</span>
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
                        {typeof supportTechnique.prix === 'object' ? (
                          <div>
                            <p className="text-2xl font-bold text-primary-700">
                              {supportTechnique.prix.standard}€/h
                            </p>
                            <p className="text-sm text-gray-600">
                              {supportTechnique.prix.urgence}€/h (urgence)
                            </p>
                          </div>
                        ) : (
                          <p className="text-3xl font-bold text-primary-700">
                            {supportTechnique.prix}€/h
                          </p>
                        )}
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
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Un projet web ou besoin d'assistance technique ?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Que ce soit pour créer votre site vitrine ou pour résoudre un problème technique urgent, 
            je suis là pour vous accompagner.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Demander un devis
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
                <div className="text-3xl mb-3">💻</div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Intervention rapide
                </h4>
                <p className="text-sm text-gray-600">
                  Support à distance ou sur site selon vos besoins
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Solutions sur mesure
                </h4>
                <p className="text-sm text-gray-600">
                  Adaptées à vos contraintes et votre budget
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-3">📍</div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Basé à Grenoble
                </h4>
                <p className="text-sm text-gray-600">
                  Interventions en Rhône-Alpes et partout en France
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
