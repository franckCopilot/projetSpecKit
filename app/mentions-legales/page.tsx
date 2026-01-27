// app/mentions-legales/page.tsx
import { createMetadata } from '@/lib/metadata';
import { EXPERT } from '@/data/expert';

export const metadata = createMetadata({
  title: 'Mentions Légales & Politique de Confidentialité',
  description: 'Mentions légales et politique de confidentialité du site de Franck Petretto',
});

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Mentions Légales & Politique de Confidentialité
          </h1>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* Mentions Légales */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Informations légales
              </h2>
              <p className="mb-2">
                <strong>Nom du site :</strong> Site vitrine de {EXPERT.nom}
              </p>
              <p className="mb-2">
                <strong>Éditeur :</strong> {EXPERT.nom}
              </p>
              <p className="mb-2">
                <strong>Localisation :</strong> {EXPERT.localisation}, France
              </p>
              <p className="mb-2">
                <strong>Email :</strong>{' '}
                <a href={`mailto:${EXPERT.email}`} className="text-primary-600 hover:underline">
                  {EXPERT.email}
                </a>
              </p>
              <p className="mb-2">
                <strong>Hébergeur :</strong> Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
              </p>
            </section>

            {/* RGPD */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Politique de confidentialité (RGPD)
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                2.1 Collecte des données
              </h3>
              <p className="mb-3">
                Les données personnelles collectées via le formulaire de contact sont :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Nom complet</li>
                <li>Adresse email</li>
                <li>Message de contact</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                2.2 Vos droits
              </h3>
              <p className="mb-3">
                Vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles.
                Pour exercer ces droits, contactez : {EXPERT.email}
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Cookies
              </h2>
              <p className="text-gray-700">
                Ce site utilise uniquement des cookies strictement nécessaires au fonctionnement technique.
                Aucun cookie de tracking publicitaire n'est utilisé.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
