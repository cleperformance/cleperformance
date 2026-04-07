import { siteConfig } from "@/data/site-config";

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutomotiveBusiness"],
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/logo-identitaire.png`,
    logo: `${siteConfig.url}/logo-identitaire.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressRegion: siteConfig.address.department,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 42.6886,
      longitude: 2.8948,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Perpignan" },
      { "@type": "AdministrativeArea", name: "Pyrénées-Orientales" },
    ],
    priceRange: "€€",
    serviceType: [
      "Reproduction de clé voiture",
      "Programmation clé à transpondeur",
      "Double de clé automobile",
      "Clé voiture perdue",
      "Reproduction clé moto",
      "Programmation anti-démarrage moto",
      "Reproduction clé poids lourd",
      "Reproduction clé tracteur",
      "Reproduction clé engin de chantier",
      "Intervention mobile serrurerie automobile",
      "Reprogrammation moteur ECU Stage 1",
      "Désactivation FAP EGR AdBlue",
      "Recharge climatisation poids lourd",
      "Recharge climatisation tracteur agricole",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de reproduction et programmation de clés",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Reproduction & Programmation de Clés Auto",
            description:
              "Découpe Dolphin, transpondeur, keyless, perte totale. Intervention mobile à Perpignan et dans le 66.",
            url: `${siteConfig.url}/services/cle-voiture`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Reproduction & Programmation de Clés Moto",
            description:
              "HISS, YIM, KIPASS, BMS-C et tous systèmes anti-démarrage. Intervention mobile dans le 66.",
            url: `${siteConfig.url}/services/cle-moto`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Reproduction & Programmation de Clés Poids Lourd",
            description:
              "OBD HD, CAN J1939, EEPROM. Intervention sur site dans les Pyrénées-Orientales.",
            url: `${siteConfig.url}/services/cle-poids-lourd`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Reproduction & Programmation de Clés Tracteur & Agricole",
            description:
              "OBD J1939, transpondeur ID46. Intervention sur exploitation en urgence dans le 66.",
            url: `${siteConfig.url}/services/cle-agricole`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Reproduction & Programmation de Clés Engins de Chantier",
            description:
              "Pelleteuses, grues, nacelles. Intervention sur chantier dans le 66.",
            url: `${siteConfig.url}/services/cle-engin-chantier`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Reprogrammation Moteur ECU",
            description:
              "Stage 1, désactivation FAP/EGR/AdBlue, correction logicielle ECU. VP, PL et agricole. Intervention mobile dans le 66.",
            url: `${siteConfig.url}/services/reprogrammation-moteur`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Recharge & Diagnostic Climatisation PL & Agricole",
            description:
              "Diagnostic, recharge R134a et R1234yf, filtre déshydrateur. Station bi-gaz. Intervention sur site dans le 66.",
            url: `${siteConfig.url}/services/climatisation-pl-agricole`,
          },
        },
      ],
    },
  };
}

export function getFaqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getServiceJsonLd(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      "@id": `${siteConfig.url}/#business`,
    },
    areaServed: [
      { "@type": "City", name: "Perpignan" },
      { "@type": "AdministrativeArea", name: "Pyrénées-Orientales" },
    ],
  };
}
