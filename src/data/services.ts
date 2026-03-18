export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  icon: string;
  features: string[];
  content: string;
}

export const services: Service[] = [
  {
    slug: "cle-voiture",
    title: "Reprogrammation de clé voiture",
    shortTitle: "Clé voiture",
    description:
      "Double de clé, remplacement de clé perdue ou cassée pour toutes marques de voitures. Intervention rapide à Perpignan et dans le 66.",
    metaTitle: "Reprogrammation Clé Voiture Perpignan | Clé Performance 66",
    metaDescription:
      "Spécialiste reprogrammation de clé voiture à Perpignan. Double, remplacement clé perdue ou cassée, toutes marques. Devis gratuit, intervention rapide dans le 66.",
    icon: "car",
    features: [
      "Double de clé avec télécommande",
      "Remplacement clé perdue ou volée",
      "Réparation clé cassée",
      "Programmation télécommande",
      "Clé de secours",
      "Toutes marques françaises et étrangères",
    ],
    content: `Vous avez perdu votre clé de voiture ? Besoin d'un double ? Clé Performance 66 intervient rapidement à Perpignan et dans tout le département des Pyrénées-Orientales pour la reprogrammation de clés automobiles.

Nous prenons en charge toutes les marques : Renault, Peugeot, Citroën, Volkswagen, Toyota, Ford, Mercedes, BMW, Audi, et bien d'autres. Que ce soit pour un double de clé, un remplacement de clé perdue ou une réparation de clé cassée, notre expertise vous garantit un service rapide et fiable.

Nos techniciens utilisent du matériel professionnel de dernière génération pour programmer vos clés avec télécommande, clés à transpondeur et systèmes keyless. Contactez-nous pour un devis gratuit.`,
  },
  {
    slug: "cle-moto",
    title: "Reprogrammation de clé moto",
    shortTitle: "Clé moto",
    description:
      "Reproduction et reprogrammation de clés moto et scooter. Toutes marques : Yamaha, Honda, Kawasaki, Suzuki, BMW, Ducati...",
    metaTitle: "Reprogrammation Clé Moto Perpignan | Clé Performance 66",
    metaDescription:
      "Reprogrammation de clé moto et scooter à Perpignan. Yamaha, Honda, Kawasaki, Suzuki, BMW. Double, remplacement, dépannage rapide dans le 66.",
    icon: "bike",
    features: [
      "Double de clé moto",
      "Clé moto perdue ou cassée",
      "Programmation transpondeur moto",
      "Toutes marques : Yamaha, Honda, Kawasaki, Suzuki, BMW, Ducati",
      "Scooters et maxi-scooters",
    ],
    content: `Clé Performance 66 est votre spécialiste en reprogrammation de clés moto à Perpignan. Que vous ayez perdu votre clé, que vous ayez besoin d'un double ou que votre clé soit endommagée, nous intervenons rapidement.

Nous travaillons avec toutes les marques de motos et scooters : Yamaha, Honda, Kawasaki, Suzuki, BMW, Ducati, Triumph, KTM, et bien d'autres. Notre matériel professionnel nous permet de programmer les clés à transpondeur et les systèmes anti-démarrage de dernière génération.

Service rapide et tarifs compétitifs dans tout le département des Pyrénées-Orientales.`,
  },
  {
    slug: "cle-poids-lourd",
    title: "Reprogrammation de clé poids lourd",
    shortTitle: "Clé poids lourd",
    description:
      "Reprogrammation de clés pour camions, utilitaires et poids lourds. Intervention sur site possible pour minimiser l'immobilisation.",
    metaTitle: "Reprogrammation Clé Poids Lourd Perpignan | Clé Performance 66",
    metaDescription:
      "Clé poids lourd, camion et utilitaire à Perpignan. Reprogrammation, double, dépannage. Intervention rapide pour minimiser l'immobilisation. Devis gratuit 66.",
    icon: "truck",
    features: [
      "Clé camion et poids lourd",
      "Utilitaires (Renault Master, Fiat Ducato, etc.)",
      "Programmation transpondeur PL",
      "Intervention sur site possible",
      "Minimisation du temps d'immobilisation",
    ],
    content: `Pour les professionnels du transport, l'immobilisation d'un poids lourd ou d'un utilitaire représente un coût important. Clé Performance 66 vous propose un service rapide de reprogrammation de clés pour camions et poids lourds à Perpignan.

Nous intervenons sur tous types de véhicules utilitaires et poids lourds : Renault Trucks, Mercedes, MAN, DAF, Iveco, Scania, Volvo Trucks, ainsi que les utilitaires Renault Master, Fiat Ducato, Mercedes Sprinter, etc.

Intervention sur site possible pour limiter au maximum votre temps d'arrêt. Contactez-nous en urgence, nous ferons notre maximum pour vous dépanner dans les meilleurs délais.`,
  },
  {
    slug: "cle-agricole",
    title: "Reprogrammation de clé engin agricole",
    shortTitle: "Clé agricole",
    description:
      "Clés pour tracteurs, moissonneuses et engins agricoles. John Deere, New Holland, Massey Ferguson, Claas, Fendt...",
    metaTitle:
      "Reprogrammation Clé Tracteur Agricole Perpignan | Clé Performance 66",
    metaDescription:
      "Clé tracteur et engin agricole à Perpignan. John Deere, New Holland, Massey Ferguson. Reprogrammation rapide dans les Pyrénées-Orientales (66).",
    icon: "tractor",
    features: [
      "Clé tracteur toutes marques",
      "Moissonneuses-batteuses",
      "John Deere, New Holland, Massey Ferguson, Claas, Fendt",
      "Kubota, Deutz-Fahr, Valtra",
      "Intervention rapide en période de récolte",
    ],
    content: `En pleine saison de récolte, perdre la clé de votre tracteur peut avoir des conséquences importantes. Clé Performance 66 comprend l'urgence et vous propose un service de reprogrammation de clés pour engins agricoles à Perpignan et dans tout le département du 66.

Nous intervenons sur toutes les marques : John Deere, New Holland, Massey Ferguson, Claas, Fendt, Kubota, Deutz-Fahr, Valtra, et bien d'autres. Tracteurs, moissonneuses-batteuses, télescopiques, notre expertise couvre l'ensemble du parc agricole.

Tarifs adaptés aux professionnels agricoles. Intervention rapide garantie.`,
  },
  {
    slug: "cle-engin-chantier",
    title: "Reprogrammation de clé engin de chantier",
    shortTitle: "Clé engin de chantier",
    description:
      "Clés pour pelleteuses, chargeuses, grues et engins de chantier. Caterpillar, Volvo, Komatsu, JCB, Liebherr...",
    metaTitle:
      "Reprogrammation Clé Engin de Chantier Perpignan | Clé Performance 66",
    metaDescription:
      "Clé engin de chantier à Perpignan. Pelleteuse, chargeuse, grue. Caterpillar, Volvo, Komatsu, JCB. Reprogrammation rapide dans le 66.",
    icon: "construction",
    features: [
      "Pelleteuses et mini-pelles",
      "Chargeuses et bulldozers",
      "Grues et nacelles",
      "Caterpillar, Volvo CE, Komatsu, JCB, Liebherr, Hitachi",
      "Intervention sur chantier possible",
    ],
    content: `L'arrêt d'un engin de chantier impacte directement la productivité de votre chantier. Clé Performance 66 assure la reprogrammation de clés pour tous types d'engins de chantier à Perpignan et dans les Pyrénées-Orientales.

Pelleteuses, chargeuses, bulldozers, grues, nacelles : nous intervenons sur toutes les marques leaders du BTP — Caterpillar, Volvo CE, Komatsu, JCB, Liebherr, Hitachi, Case, et plus encore.

Intervention sur chantier possible pour éviter le déplacement de l'engin. Contactez-nous pour un dépannage rapide et un devis gratuit.`,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
