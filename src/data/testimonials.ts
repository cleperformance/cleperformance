export interface Testimonial {
  name: string;
  city: string;
  rating: number;
  text: string;
  vehicle?: string;
}

// TODO: remplacer par de vrais témoignages clients
export const testimonials: Testimonial[] = [
  {
    name: "Marie L.",
    city: "Perpignan",
    rating: 5,
    text: "J'ai perdu ma clé de Clio et Clé Performance 66 m'a dépannée en moins de 2h. Service impeccable et prix très correct. Je recommande !",
    vehicle: "Renault Clio",
  },
  {
    name: "Pierre D.",
    city: "Canet-en-Roussillon",
    rating: 5,
    text: "Double de clé pour ma Peugeot 3008 fait rapidement. Professionnel, efficace et moins cher que le concessionnaire. Merci !",
    vehicle: "Peugeot 3008",
  },
  {
    name: "Jean-Marc T.",
    city: "Thuir",
    rating: 5,
    text: "Intervention rapide pour mon tracteur en pleine saison. Ils comprennent l'urgence des agriculteurs. Excellent service.",
    vehicle: "John Deere",
  },
  {
    name: "Sophie R.",
    city: "Saint-Estève",
    rating: 5,
    text: "Clé de secours pour ma Toyota Yaris. Travail propre, clé qui fonctionne parfaitement. Tarif raisonnable.",
    vehicle: "Toyota Yaris",
  },
  {
    name: "Laurent M.",
    city: "Rivesaltes",
    rating: 5,
    text: "Mon Volkswagen Transporter immobilisé sans clé. Intervention le jour même, problème résolu. Top !",
    vehicle: "VW Transporter",
  },
];
