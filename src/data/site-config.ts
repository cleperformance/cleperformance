export const siteConfig = {
  name: "Clé Performance 66",
  legalName: "Clé Performance 66",
  description:
    "Clés auto/moto/PL/agricole, reprog moteur ECU et climatisation PL & Agricole à Perpignan. Intervention mobile dans le 66. Clé perdue, double, transpondeur, perte totale. Devis gratuit.",
  url: "https://cleperformance66.fr", // TODO: confirmer le domaine
  ogImage: "/opengraph-image",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "",
  phoneHref: process.env.NEXT_PUBLIC_PHONE_HREF ?? "",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "",
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
    saturday: "Après 19h et week-end : astreinte",
  },
  social: {
    facebook: "", // TODO
    instagram: "", // TODO
    google: "", // TODO: Google Business Profile
  },
} as const;

export const colors = {
  navy: "#1C0A08",
  blue: "#C82020",
  cyan: "#F0B800",
  bg: "#FFFBF5",
  white: "#FFFFFF",
} as const;
