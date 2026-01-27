// app/contact/page.tsx
import ContactForm from '@/components/ContactForm';
import { createMetadata } from '@/lib/metadata';
import { EXPERT } from '@/data/expert';

export const metadata = createMetadata({
  title: 'Contact',
  description: `Contactez ${EXPERT.nom} pour vos besoins en formation IA Générative. Expert basé à ${EXPERT.localisation}.`,
  keywords: ['Contact', 'Demande', 'Formation', 'Devis'],
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-accent-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contactez-moi
            </h1>
            <p className="text-xl md:text-2xl text-primary-50">
              Une question sur mes formations ? Un projet spécifique ? 
              Je vous réponds sous 24h.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Envoyez-moi un message
                </h2>
                <p className="text-gray-600">
                  Remplissez le formulaire ci-dessous et je reviendrai vers
                  vous dans les plus brefs délais pour discuter de vos besoins
                  en formation IA Générative.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-primary-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Email direct
                </h3>
                <p className="text-gray-600">
                  Vous préférez m'écrire directement ?
                </p>
                <a
                  href={`mailto:${EXPERT.email}`}
                  className="text-primary-600 hover:text-primary-700 font-semibold mt-2 inline-block"
                >
                  {EXPERT.email}
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-primary-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Localisation
                </h3>
                <p className="text-gray-600">
                  Basé à <strong>{EXPERT.localisation}</strong>
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Interventions possibles partout en France
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
