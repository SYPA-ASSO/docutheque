export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Docuthèque",
    "description": "Plateforme de modèles de documents juridiques français rédigés par des juristes professionnels. Contrats, mises en demeure, RGPD, documents RH, statuts de société.",
    "url": "https://docutheque.fr",
    "serviceType": "Document juridique en ligne",
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Catalogue de modèles juridiques",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Accès Gratuit",
          "price": "0",
          "priceCurrency": "EUR",
          "description": "12 modèles juridiques essentiels en DOCX et PDF"
        },
        {
          "@type": "Offer",
          "name": "Premium",
          "price": "9.90",
          "priceCurrency": "EUR",
          "description": "Bibliothèque complète, notices juridiques, fiches pédagogiques et 1 question sous 48h"
        },
        {
          "@type": "Offer",
          "name": "Information sur vos droits",
          "price": "47",
          "priceCurrency": "EUR",
          "description": "Réponse pédagogique personnalisée à votre question juridique sous 48h"
        }
      ]
    },
    "provider": {
      "@type": "Organization",
      "name": "Docuthèque",
      "url": "https://docutheque.fr"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}