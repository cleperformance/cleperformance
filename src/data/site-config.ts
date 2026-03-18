export const siteConfig = {
  name: "Clé Performance 66",
  legalName: "Clé Performance 66",
  description:
    "Clés auto/moto/PL/agricole, reprog moteur ECU et climatisation PL & Agricole à Perpignan. Intervention mobile dans le 66. Clé perdue, double, transpondeur, perte totale. Devis gratuit.",
  url: "https://cleperformance66.fr", // TODO: confirmer le domaine
  ogImage: "/opengraph-image",
  phone: "06 86 24 03 53",
  phoneHref: "tel:+33686240353",
  email: "cle.performance66@outlook.fr",
  address: {
    street: "À confirmer",
    city: "Perpignan",
    postalCode: "66000",
    department: "Pyrénées-Orientales",
    departmentCode: "66",
    country: "France",
  },
  hours: {
    weekdays: "Lundi - Vendredi : 8h00 - 19h00",
    saturday: "Week-end : Fermé",
    sunday: "Dimanche : Fermé",
  },
  social: {
    facebook: "", // TODO
    instagram: "", // TODO
    google: "", // TODO: Google Business Profile
  },
} as const;

export const colors = {
  navy: "#0A2A4A",
  blue: "#1A6FAF",
  cyan: "#3AAFDE",
  bg: "#F8F9FB",
  white: "#FFFFFF",
} as const;
