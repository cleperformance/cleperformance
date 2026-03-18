export interface Brand {
  slug: string;
  name: string;
  category: "auto" | "moto" | "pl" | "agricole";
  metaTitle: string;
  metaDescription: string;
  models: string[];
  content: string;
  startingPrice: number;
}

export const brands: Brand[] = [
  {
    slug: "renault",
    name: "Renault",
    category: "auto",
    metaTitle: "Reprogrammation Clé Renault Perpignan | Clé Performance 66",
    metaDescription:
      "Reprogrammation de clé Renault à Perpignan. Clio, Megane, Captur, Kadjar, Scenic, Twingo. Double, remplacement, dépannage rapide dans le 66.",
    models: [
      "Clio",
      "Megane",
      "Captur",
      "Kadjar",
      "Scenic",
      "Twingo",
      "Kangoo",
      "Trafic",
      "Master",
      "Austral",
      "Arkana",
      "Espace",
    ],
    content: `Clé Performance 66 est spécialisé dans la reprogrammation de clés Renault à Perpignan et dans les Pyrénées-Orientales. Nous intervenons sur tous les modèles Renault, des plus anciens aux plus récents.

Clio, Megane, Captur, Kadjar, Scenic, Twingo, Kangoo, Trafic, Master : quel que soit votre modèle, nous disposons du matériel pour programmer votre clé avec carte ou télécommande.

Les cartes Renault (carte mains libres) nécessitent un équipement spécifique que nous maîtrisons parfaitement. Double de carte, remplacement de carte perdue, notre service est rapide et nos tarifs compétitifs.`,
    startingPrice: 89,
  },
  {
    slug: "peugeot",
    name: "Peugeot",
    category: "auto",
    metaTitle: "Reprogrammation Clé Peugeot Perpignan | Clé Performance 66",
    metaDescription:
      "Clé Peugeot à Perpignan. 208, 308, 3008, 5008, 2008, Partner. Double, reprogrammation, remplacement. Intervention rapide dans le 66.",
    models: [
      "208",
      "308",
      "3008",
      "5008",
      "2008",
      "508",
      "Partner",
      "Rifter",
      "Expert",
      "Boxer",
    ],
    content: `Votre clé Peugeot est perdue, cassée ou vous avez simplement besoin d'un double ? Clé Performance 66 intervient à Perpignan et dans tout le 66 pour la reprogrammation de clés Peugeot.

Nous couvrons toute la gamme : 208, 308, 3008, 5008, 2008, 508, Partner, Rifter, Expert, Boxer. Clés à télécommande, clés à transpondeur, systèmes keyless : notre équipement professionnel nous permet de traiter tous les cas.

Devis gratuit et intervention rapide. Contactez Clé Performance 66.`,
    startingPrice: 89,
  },
  {
    slug: "citroen",
    name: "Citroën",
    category: "auto",
    metaTitle: "Reprogrammation Clé Citroën Perpignan | Clé Performance 66",
    metaDescription:
      "Clé Citroën à Perpignan. C3, C4, C5 Aircross, Berlingo, Jumpy, Jumper. Double et reprogrammation dans le 66.",
    models: [
      "C3",
      "C3 Aircross",
      "C4",
      "C5 Aircross",
      "Berlingo",
      "Jumpy",
      "Jumper",
      "C5 X",
    ],
    content: `Clé Performance 66 prend en charge la reprogrammation de toutes les clés Citroën à Perpignan. C3, C4, C5 Aircross, Berlingo, Jumpy, Jumper : nous intervenons sur l'ensemble de la gamme.

Les systèmes Citroën partagent la plateforme PSA avec Peugeot, que nous maîtrisons parfaitement. Clés à télécommande, cartes, systèmes keyless : tout est pris en charge.

Intervention rapide à Perpignan et dans les Pyrénées-Orientales. Devis gratuit.`,
    startingPrice: 89,
  },
  {
    slug: "volkswagen",
    name: "Volkswagen",
    category: "auto",
    metaTitle: "Reprogrammation Clé Volkswagen Perpignan | Clé Performance 66",
    metaDescription:
      "Clé Volkswagen à Perpignan. Golf, Polo, Tiguan, T-Roc, Passat, Touran, Transporter. Reprogrammation rapide dans le 66.",
    models: [
      "Golf",
      "Polo",
      "Tiguan",
      "T-Roc",
      "T-Cross",
      "Passat",
      "Touran",
      "Transporter",
      "Caddy",
      "Crafter",
    ],
    content: `Clé Performance 66 est votre expert en reprogrammation de clés Volkswagen à Perpignan. Golf, Polo, Tiguan, T-Roc, Passat, Transporter : nous intervenons sur toute la gamme VW.

Les systèmes Volkswagen, réputés pour leur sécurité, nécessitent un équipement professionnel spécialisé dont nous disposons. Programmation de clés à transpondeur, télécommandes, systèmes keyless entry.

Tarifs compétitifs et intervention rapide dans tout le département 66.`,
    startingPrice: 109,
  },
  {
    slug: "toyota",
    name: "Toyota",
    category: "auto",
    metaTitle: "Reprogrammation Clé Toyota Perpignan | Clé Performance 66",
    metaDescription:
      "Clé Toyota à Perpignan. Yaris, Corolla, C-HR, RAV4, Aygo, Hilux. Double et reprogrammation rapide dans le 66.",
    models: [
      "Yaris",
      "Yaris Cross",
      "Corolla",
      "C-HR",
      "RAV4",
      "Aygo X",
      "Hilux",
      "Land Cruiser",
      "Proace",
    ],
    content: `Toyota est l'une des marques les plus vendues en France. Clé Performance 66 assure la reprogrammation de clés Toyota à Perpignan pour tous les modèles : Yaris, Corolla, C-HR, RAV4, Aygo, Hilux.

Que ce soit un système à clé classique ou un smart key Toyota, nous avons l'expertise et l'équipement nécessaires. Intervention rapide dans tout le 66.`,
    startingPrice: 99,
  },
  {
    slug: "ford",
    name: "Ford",
    category: "auto",
    metaTitle: "Reprogrammation Clé Ford Perpignan | Clé Performance 66",
    metaDescription:
      "Clé Ford à Perpignan. Fiesta, Focus, Puma, Kuga, Transit, Ranger. Reprogrammation et double de clé dans le 66.",
    models: [
      "Fiesta",
      "Focus",
      "Puma",
      "Kuga",
      "Transit",
      "Transit Custom",
      "Ranger",
      "Explorer",
    ],
    content: `Clé Performance 66 programme et duplique toutes les clés Ford à Perpignan. Fiesta, Focus, Puma, Kuga, Transit, Ranger : gamme complète couverte.

Les véhicules utilitaires Ford Transit sont très répandus chez les professionnels du 66. Nous assurons un service rapide pour minimiser votre immobilisation. Devis gratuit.`,
    startingPrice: 99,
  },
  {
    slug: "mercedes",
    name: "Mercedes-Benz",
    category: "auto",
    metaTitle: "Reprogrammation Clé Mercedes Perpignan | Clé Performance 66",
    metaDescription:
      "Clé Mercedes-Benz à Perpignan. Classe A, B, C, E, GLA, GLC, Vito, Sprinter. Reprogrammation spécialisée dans le 66.",
    models: [
      "Classe A",
      "Classe B",
      "Classe C",
      "Classe E",
      "GLA",
      "GLB",
      "GLC",
      "Vito",
      "Sprinter",
    ],
    content: `Les clés Mercedes-Benz utilisent des systèmes de sécurité avancés. Clé Performance 66 dispose de l'équipement spécialisé pour la reprogrammation de clés Mercedes à Perpignan.

Classe A, B, C, E, GLA, GLC, Vito, Sprinter : nous intervenons sur la gamme complète. Systèmes keyless, clés à transpondeur, télécommandes chromées.

Service premium à prix compétitif dans les Pyrénées-Orientales.`,
    startingPrice: 149,
  },
  {
    slug: "bmw",
    name: "BMW",
    category: "auto",
    metaTitle: "Reprogrammation Clé BMW Perpignan | Clé Performance 66",
    metaDescription:
      "Clé BMW à Perpignan. Série 1, 2, 3, 5, X1, X3, X5. Reprogrammation clé et télécommande dans le 66.",
    models: [
      "Série 1",
      "Série 2",
      "Série 3",
      "Série 5",
      "X1",
      "X2",
      "X3",
      "X5",
      "iX",
    ],
    content: `Clé Performance 66 est équipé pour la reprogrammation de clés BMW à Perpignan. Série 1, 3, 5, X1, X3, X5 : nous gérons la gamme complète.

Les systèmes BMW (CAS, FEM/BDC) nécessitent un outillage spécifique que nous maîtrisons. Clé diamond, clé display key, télécommande standard.

Intervention rapide à Perpignan et dans le 66. Devis gratuit.`,
    startingPrice: 149,
  },
  {
    slug: "audi",
    name: "Audi",
    category: "auto",
    metaTitle: "Reprogrammation Clé Audi Perpignan | Clé Performance 66",
    metaDescription:
      "Clé Audi à Perpignan. A1, A3, A4, A5, Q2, Q3, Q5. Double et reprogrammation de clé dans le 66.",
    models: ["A1", "A3", "A4", "A5", "A6", "Q2", "Q3", "Q5", "Q7", "TT"],
    content: `Reprogrammation de clés Audi à Perpignan par Clé Performance 66. A1, A3, A4, Q3, Q5 : toute la gamme Audi est prise en charge.

Les systèmes Audi partagent la plateforme VAG que nous maîtrisons parfaitement. Clés à télécommande, systèmes keyless, programmation de transpondeur.

Service professionnel et tarifs compétitifs dans les Pyrénées-Orientales.`,
    startingPrice: 139,
  },
  {
    slug: "fiat",
    name: "Fiat",
    category: "auto",
    metaTitle: "Reprogrammation Clé Fiat Perpignan | Clé Performance 66",
    metaDescription:
      "Clé Fiat à Perpignan. 500, Panda, Tipo, Ducato, Doblo. Reprogrammation rapide dans le 66.",
    models: [
      "500",
      "Panda",
      "Tipo",
      "500X",
      "Ducato",
      "Doblo",
      "Scudo",
      "Fiorino",
    ],
    content: `Clé Performance 66 assure la reprogrammation de clés Fiat à Perpignan. 500, Panda, Tipo, Ducato, Doblo : gamme complète.

Les Fiat Ducato sont très utilisés par les professionnels et campingcaristes du 66. Nous intervenons rapidement pour limiter votre immobilisation.

Devis gratuit, tarifs compétitifs.`,
    startingPrice: 89,
  },
  {
    slug: "dacia",
    name: "Dacia",
    category: "auto",
    metaTitle: "Reprogrammation Clé Dacia Perpignan | Clé Performance 66",
    metaDescription:
      "Clé Dacia à Perpignan. Sandero, Duster, Jogger, Spring, Logan. Double et reprogrammation dans le 66.",
    models: ["Sandero", "Duster", "Jogger", "Spring", "Logan"],
    content: `Dacia, marque très populaire dans le 66, est entièrement couverte par Clé Performance 66. Sandero, Duster, Jogger, Spring, Logan : nous reprogrammons toutes les clés Dacia à Perpignan.

Les systèmes Dacia partagent la plateforme Renault que nous connaissons parfaitement. Service rapide et tarifs adaptés.`,
    startingPrice: 79,
  },
  {
    slug: "nissan",
    name: "Nissan",
    category: "auto",
    metaTitle: "Reprogrammation Clé Nissan Perpignan | Clé Performance 66",
    metaDescription:
      "Clé Nissan à Perpignan. Qashqai, Juke, Micra, X-Trail, Navara, NV200. Reprogrammation dans le 66.",
    models: ["Qashqai", "Juke", "Micra", "X-Trail", "Navara", "NV200", "NV300"],
    content: `Clé Performance 66 reprogramme toutes les clés Nissan à Perpignan. Qashqai, Juke, Micra, X-Trail : toute la gamme est prise en charge.

Systèmes intelligent key Nissan, clés à transpondeur, télécommandes. Intervention rapide dans le 66.`,
    startingPrice: 99,
  },
  {
    slug: "hyundai",
    name: "Hyundai",
    category: "auto",
    metaTitle: "Reprogrammation Clé Hyundai Perpignan | Clé Performance 66",
    metaDescription:
      "Clé Hyundai à Perpignan. Tucson, i10, i20, i30, Kona, Santa Fe. Double et reprogrammation dans le 66.",
    models: ["Tucson", "i10", "i20", "i30", "Kona", "Santa Fe", "Bayon"],
    content: `Clé Performance 66 prend en charge la reprogrammation de clés Hyundai à Perpignan. Tucson, i20, i30, Kona : tous les modèles sont couverts.

Clés à transpondeur, smart key, télécommandes. Service professionnel et rapide dans les Pyrénées-Orientales.`,
    startingPrice: 99,
  },
  {
    slug: "kia",
    name: "Kia",
    category: "auto",
    metaTitle: "Reprogrammation Clé Kia Perpignan | Clé Performance 66",
    metaDescription:
      "Clé Kia à Perpignan. Sportage, Ceed, Picanto, Stonic, Niro. Reprogrammation rapide dans le 66.",
    models: ["Sportage", "Ceed", "Picanto", "Stonic", "Niro", "Sorento", "EV6"],
    content: `Clé Performance 66 reprogramme les clés Kia à Perpignan. Sportage, Ceed, Picanto, Stonic, Niro : gamme complète prise en charge.

Systèmes Kia partagés avec Hyundai, que nous maîtrisons parfaitement. Devis gratuit et intervention rapide dans le 66.`,
    startingPrice: 99,
  },
  {
    slug: "seat",
    name: "Seat",
    category: "auto",
    metaTitle: "Reprogrammation Clé Seat Perpignan | Clé Performance 66",
    metaDescription:
      "Clé Seat à Perpignan. Ibiza, Leon, Arona, Ateca, Tarraco. Double et reprogrammation dans le 66.",
    models: ["Ibiza", "Leon", "Arona", "Ateca", "Tarraco"],
    content: `Seat, marque très appréciée dans notre région proche de l'Espagne, est entièrement couverte par Clé Performance 66. Ibiza, Leon, Arona, Ateca : tous les modèles à Perpignan.

Plateforme VAG maîtrisée. Intervention rapide, tarifs compétitifs dans le 66.`,
    startingPrice: 89,
  },
  {
    slug: "skoda",
    name: "Skoda",
    category: "auto",
    metaTitle: "Reprogrammation Clé Skoda Perpignan | Clé Performance 66",
    metaDescription:
      "Clé Skoda à Perpignan. Fabia, Octavia, Kamiq, Karoq, Kodiaq. Reprogrammation dans le 66.",
    models: ["Fabia", "Octavia", "Kamiq", "Karoq", "Kodiaq", "Scala", "Superb"],
    content: `Clé Performance 66 assure la reprogrammation de clés Skoda à Perpignan. Fabia, Octavia, Karoq, Kodiaq : toute la gamme.

Technologie VAG identique à VW, Audi et Seat, que nous maîtrisons parfaitement. Service rapide dans le 66.`,
    startingPrice: 89,
  },
  {
    slug: "opel",
    name: "Opel",
    category: "auto",
    metaTitle: "Reprogrammation Clé Opel Perpignan | Clé Performance 66",
    metaDescription:
      "Clé Opel à Perpignan. Corsa, Astra, Crossland, Mokka, Vivaro, Combo. Reprogrammation dans le 66.",
    models: [
      "Corsa",
      "Astra",
      "Crossland",
      "Mokka",
      "Grandland",
      "Vivaro",
      "Combo",
      "Movano",
    ],
    content: `Clé Performance 66 reprogramme toutes les clés Opel à Perpignan. Corsa, Astra, Mokka, Vivaro : gamme complète couverte.

Les modèles récents Opel partagent la plateforme PSA/Stellantis que nous maîtrisons. Intervention rapide dans les Pyrénées-Orientales.`,
    startingPrice: 89,
  },
  {
    slug: "volvo",
    name: "Volvo",
    category: "auto",
    metaTitle: "Reprogrammation Clé Volvo Perpignan | Clé Performance 66",
    metaDescription:
      "Clé Volvo à Perpignan. XC40, XC60, XC90, V40, V60, S60. Reprogrammation spécialisée dans le 66.",
    models: ["XC40", "XC60", "XC90", "V60", "S60", "V90", "S90"],
    content: `Clé Performance 66 dispose de l'équipement spécialisé pour la reprogrammation de clés Volvo à Perpignan. XC40, XC60, XC90, V60 : toute la gamme.

Systèmes de sécurité Volvo de haut niveau, pris en charge par notre outillage professionnel. Devis gratuit dans le 66.`,
    startingPrice: 139,
  },
  {
    slug: "mini",
    name: "MINI",
    category: "auto",
    metaTitle: "Reprogrammation Clé MINI Perpignan | Clé Performance 66",
    metaDescription:
      "Clé MINI à Perpignan. Cooper, One, Countryman, Clubman, Paceman. Double et reprogrammation spécialisée dans le 66.",
    models: ["Cooper", "One", "Countryman", "Clubman", "Paceman"],
    content: `Clé Performance 66 assure la reprogrammation de clés MINI à Perpignan et dans les Pyrénées-Orientales. Cooper, One, Countryman, Clubman, Paceman : toute la gamme MINI est couverte.

Les MINI partagent la plateforme BMW, ce qui implique des systèmes de sécurité électroniques avancés (CAS, FEM) que nous maîtrisons parfaitement. Clés à télécommande, systèmes keyless, programmation de transpondeur.

Service spécialisé et tarifs compétitifs à Perpignan. Devis gratuit.`,
    startingPrice: 129,
  },
  {
    slug: "land-rover",
    name: "Land Rover",
    category: "auto",
    metaTitle: "Reprogrammation Clé Land Rover Perpignan | Clé Performance 66",
    metaDescription:
      "Clé Land Rover à Perpignan. Discovery, Freelander, Range Rover, Defender, Evoque. Reprogrammation spécialisée dans le 66.",
    models: [
      "Discovery",
      "Freelander",
      "Range Rover",
      "Range Rover Sport",
      "Defender",
      "Evoque",
    ],
    content: `Clé Performance 66 intervient sur toutes les Land Rover à Perpignan. Discovery, Freelander, Range Rover, Range Rover Sport, Defender, Evoque : gamme complète prise en charge.

Les Land Rover utilisent des systèmes de sécurité premium (PATS, KVM) qui nécessitent un équipement professionnel de haut niveau dont nous disposons. Clés à transpondeur, systèmes keyless entry, télécommandes.

Expertise reconnue dans les Pyrénées-Orientales pour les véhicules premium et tout-terrain.`,
    startingPrice: 169,
  },
  {
    slug: "jaguar",
    name: "Jaguar",
    category: "auto",
    metaTitle: "Reprogrammation Clé Jaguar Perpignan | Clé Performance 66",
    metaDescription:
      "Clé Jaguar à Perpignan. XF, XE, F-Pace, E-Pace, F-Type, I-Pace. Reprogrammation spécialisée dans le 66.",
    models: ["XF", "XE", "F-Pace", "E-Pace", "F-Type", "I-Pace"],
    content: `Clé Performance 66 reprogramme les clés Jaguar à Perpignan et dans tout le département 66. XF, XE, F-Pace, E-Pace, F-Type, I-Pace : nous couvrons la gamme complète de la marque britannique.

Jaguar partage la plateforme JLR avec Land Rover, avec des systèmes de sécurité avancés que notre outillage professionnel prend en charge. Programmation de clés à transpondeur, télécommandes, systèmes keyless.

Service premium à tarifs compétitifs à Perpignan. Devis gratuit.`,
    startingPrice: 169,
  },
  // --- MOTO ---
  {
    slug: "yamaha",
    name: "Yamaha",
    category: "moto",
    metaTitle: "Reprogrammation Clé Yamaha Perpignan | Clé Performance 66",
    metaDescription:
      "Clé moto Yamaha à Perpignan. MT-07, MT-09, Tracer, R1, R6, XMAX, TMAX. Double et reprogrammation dans le 66.",
    models: [
      "MT-07",
      "MT-09",
      "Tracer 9",
      "R1",
      "R6",
      "XMAX",
      "TMAX",
      "Ténéré 700",
      "XSR",
    ],
    content: `Clé Performance 66 reprogramme toutes les clés moto Yamaha à Perpignan. MT-07, MT-09, Tracer, XMAX, TMAX : toute la gamme.

Les systèmes anti-démarrage Yamaha nécessitent un outillage spécifique que nous maîtrisons parfaitement. Double de clé, remplacement de clé perdue. Intervention rapide dans le 66.`,
    startingPrice: 89,
  },
  {
    slug: "honda-moto",
    name: "Honda Moto",
    category: "moto",
    metaTitle: "Reprogrammation Clé Honda Moto Perpignan | Clé Performance 66",
    metaDescription:
      "Clé moto Honda à Perpignan. CB650R, Africa Twin, Forza, PCX, CBR. Reprogrammation rapide dans le 66.",
    models: [
      "CB650R",
      "CB500F",
      "Africa Twin",
      "Forza 750",
      "PCX",
      "CBR600RR",
      "CBR1000RR",
      "X-ADV",
      "SH",
    ],
    content: `Clé Performance 66 intervient sur toutes les motos et scooters Honda à Perpignan. CB650R, Africa Twin, Forza, PCX, CBR : gamme complète.

Clés à transpondeur, HISS (Honda Ignition Security System) : nous avons l'équipement professionnel pour traiter tous les modèles. Devis gratuit dans le 66.`,
    startingPrice: 89,
  },
  {
    slug: "kawasaki",
    name: "Kawasaki",
    category: "moto",
    metaTitle: "Reprogrammation Clé Kawasaki Perpignan | Clé Performance 66",
    metaDescription:
      "Clé moto Kawasaki à Perpignan. Z650, Z900, Ninja, Versys, Z400. Reprogrammation dans le 66.",
    models: [
      "Z650",
      "Z900",
      "Ninja 650",
      "Ninja ZX-6R",
      "Versys 650",
      "Z400",
      "Vulcan S",
    ],
    content: `Reprogrammation de clés Kawasaki à Perpignan par Clé Performance 66. Z650, Z900, Ninja, Versys : tous les modèles pris en charge.

Intervention rapide et tarifs compétitifs dans les Pyrénées-Orientales.`,
    startingPrice: 89,
  },
  {
    slug: "suzuki-moto",
    name: "Suzuki Moto",
    category: "moto",
    metaTitle: "Reprogrammation Clé Suzuki Moto Perpignan | Clé Performance 66",
    metaDescription:
      "Clé moto Suzuki à Perpignan. GSX-R, V-Strom, SV650, Burgman, GSX-S. Reprogrammation dans le 66.",
    models: [
      "GSX-R1000",
      "GSX-S750",
      "V-Strom 650",
      "V-Strom 1050",
      "SV650",
      "Burgman",
    ],
    content: `Clé Performance 66 reprogramme les clés moto Suzuki à Perpignan. GSX-R, V-Strom, SV650, Burgman : toute la gamme.

Service professionnel et rapide dans le département 66. Devis gratuit.`,
    startingPrice: 89,
  },
  {
    slug: "bmw-moto",
    name: "BMW Motorrad",
    category: "moto",
    metaTitle: "Reprogrammation Clé BMW Moto Perpignan | Clé Performance 66",
    metaDescription:
      "Clé BMW Motorrad à Perpignan. R1250GS, F900R, S1000RR, C400X, F750GS. Reprogrammation spécialisée dans le 66.",
    models: [
      "R1250GS",
      "R1250RT",
      "F900R",
      "F900XR",
      "S1000RR",
      "F750GS",
      "C400X",
      "C400GT",
    ],
    content: `Les motos BMW Motorrad utilisent des systèmes de sécurité avancés. Clé Performance 66 dispose de l'équipement spécialisé pour la reprogrammation de clés BMW moto à Perpignan.

R1250GS, F900R, S1000RR, C400X : tous les modèles sont pris en charge. Service premium à prix compétitif dans le 66.`,
    startingPrice: 119,
  },
  {
    slug: "ducati",
    name: "Ducati",
    category: "moto",
    metaTitle: "Reprogrammation Clé Ducati Perpignan | Clé Performance 66",
    metaDescription:
      "Clé Ducati à Perpignan. Monster, Multistrada, Panigale, Scrambler, Diavel. Reprogrammation dans le 66.",
    models: [
      "Monster",
      "Multistrada V4",
      "Panigale V4",
      "Scrambler",
      "Diavel",
      "Streetfighter",
    ],
    content: `Clé Performance 66 reprogramme les clés Ducati à Perpignan. Monster, Multistrada, Panigale, Scrambler : toute la gamme italienne.

Les systèmes Ducati nécessitent un matériel spécialisé que nous maîtrisons. Intervention rapide dans le 66.`,
    startingPrice: 119,
  },
  {
    slug: "triumph",
    name: "Triumph",
    category: "moto",
    metaTitle: "Reprogrammation Clé Triumph Perpignan | Clé Performance 66",
    metaDescription:
      "Clé Triumph à Perpignan. Street Triple, Tiger, Bonneville, Speed Triple, Trident. Reprogrammation dans le 66.",
    models: [
      "Street Triple",
      "Tiger 900",
      "Bonneville T120",
      "Speed Triple",
      "Trident 660",
      "Scrambler",
    ],
    content: `Clé Performance 66 intervient sur toutes les motos Triumph à Perpignan. Street Triple, Tiger, Bonneville : gamme complète.

Devis gratuit et intervention rapide dans les Pyrénées-Orientales.`,
    startingPrice: 109,
  },
  {
    slug: "ktm",
    name: "KTM",
    category: "moto",
    metaTitle: "Reprogrammation Clé KTM Perpignan | Clé Performance 66",
    metaDescription:
      "Clé KTM à Perpignan. Duke 390, Duke 890, Adventure, RC, SuperDuke. Reprogrammation dans le 66.",
    models: [
      "Duke 390",
      "Duke 890",
      "1290 Super Duke",
      "890 Adventure",
      "RC 390",
      "690 SMC",
    ],
    content: `Clé Performance 66 reprogramme les clés KTM à Perpignan. Duke, Adventure, Super Duke, RC : tous les modèles pris en charge.

Intervention rapide et tarifs compétitifs dans le 66.`,
    startingPrice: 109,
  },
  {
    slug: "piaggio-vespa",
    name: "Piaggio / Vespa",
    category: "moto",
    metaTitle:
      "Reprogrammation Clé Piaggio Vespa Perpignan | Clé Performance 66",
    metaDescription:
      "Clé Piaggio et Vespa à Perpignan. Beverly 300, MP3, Medley, GTS 300, Primavera, Liberty. Reprogrammation rapide dans le 66.",
    models: [
      "Beverly 300",
      "MP3",
      "Medley",
      "Liberty",
      "GTS 300",
      "Primavera",
      "Sprint",
    ],
    content: `Clé Performance 66 reprogramme toutes les clés Piaggio et Vespa à Perpignan. Beverly 300, MP3, Medley, Liberty, GTS 300, Primavera, Sprint : toute la gamme de scooters italiens est couverte.

Les systèmes anti-démarrage Piaggio et Vespa nécessitent un outillage spécialisé que nous maîtrisons parfaitement. Double de clé, remplacement de clé perdue, dépannage rapide dans les Pyrénées-Orientales.

Que vous rouliez en ville à Perpignan ou dans le 66, nous assurons un service rapide et des tarifs compétitifs.`,
    startingPrice: 79,
  },
  {
    slug: "aprilia",
    name: "Aprilia",
    category: "moto",
    metaTitle: "Reprogrammation Clé Aprilia Perpignan | Clé Performance 66",
    metaDescription:
      "Clé Aprilia à Perpignan. RS 660, Tuono 660, Tuono 1100, Shiver, Dorsoduro, SR GT. Reprogrammation dans le 66.",
    models: [
      "RS 660",
      "Tuono 660",
      "Tuono 1100",
      "Shiver",
      "Dorsoduro",
      "SR GT",
    ],
    content: `Clé Performance 66 intervient sur toutes les motos Aprilia à Perpignan et dans les Pyrénées-Orientales. RS 660, Tuono 660, Tuono 1100, Shiver, Dorsoduro, SR GT : la gamme complète de la marque italienne est prise en charge.

Aprilia fait partie du groupe Piaggio, dont nous maîtrisons parfaitement les systèmes électroniques d'immobilisation et de programmation de clés. Clés à transpondeur, télécommandes, systèmes keyless.

Devis gratuit et intervention rapide dans le 66.`,
    startingPrice: 89,
  },
  {
    slug: "harley-davidson",
    name: "Harley-Davidson",
    category: "moto",
    metaTitle:
      "Reprogrammation Clé Harley-Davidson Perpignan | Clé Performance 66",
    metaDescription:
      "Clé Harley-Davidson à Perpignan. Sportster S, Nightster, Pan America, Street Glide, Fat Boy, Softail. Reprogrammation dans le 66.",
    models: [
      "Sportster S",
      "Nightster",
      "Pan America",
      "Street Glide",
      "Road King",
      "Fat Boy",
      "Softail",
    ],
    content: `Clé Performance 66 reprogramme les clés Harley-Davidson à Perpignan. Sportster S, Nightster, Pan America, Street Glide, Road King, Fat Boy, Softail : toute la gamme américaine est couverte.

Les Harley-Davidson utilisent le système de sécurité TSSM (Turn Signal Security Module) et Smart Security System qui nécessitent un outillage professionnel spécialisé. Nous disposons de l'équipement adéquat pour programmer et dupliquer les clés à transpondeur et les FOBs Harley.

Service spécialisé à Perpignan pour les motards des Pyrénées-Orientales. Devis gratuit.`,
    startingPrice: 129,
  },
  // --- PL ---
  {
    slug: "renault-trucks",
    name: "Renault Trucks",
    category: "pl",
    metaTitle:
      "Reprogrammation Clé Renault Trucks Perpignan | Clé Performance 66",
    metaDescription:
      "Clé Renault Trucks à Perpignan. T, C, K, D, Premium, Magnum, Kerax, Master, Trafic. Reprogrammation poids lourds et utilitaires dans le 66.",
    models: [
      "T",
      "C",
      "K",
      "D",
      "Premium",
      "Magnum",
      "Kerax",
      "Master",
      "Trafic",
    ],
    content: `Clé Performance 66 est spécialisé dans la reprogrammation de clés Renault Trucks à Perpignan. Des poids lourds T, C, K aux utilitaires Master et Trafic, nous couvrons l'ensemble de la gamme pour les professionnels du transport des Pyrénées-Orientales.

Les systèmes électroniques Renault Trucks requièrent un équipement professionnel adapté que nous maîtrisons. Clés à transpondeur, télécommandes, programmation d'unités d'immobilisation : notre intervention minimise votre temps d'immobilisation.

Service prioritaire pour les professionnels du 66. Devis gratuit, intervention rapide à Perpignan et alentours.`,
    startingPrice: 149,
  },
  {
    slug: "mercedes-trucks",
    name: "Mercedes Trucks",
    category: "pl",
    metaTitle:
      "Reprogrammation Clé Mercedes Trucks Perpignan | Clé Performance 66",
    metaDescription:
      "Clé Mercedes poids lourds à Perpignan. Actros, Antos, Arocs, Atego, Sprinter, Vito, Citan. Reprogrammation dans le 66.",
    models: ["Actros", "Antos", "Arocs", "Atego", "Sprinter", "Vito", "Citan"],
    content: `Clé Performance 66 assure la reprogrammation de clés Mercedes poids lourds et utilitaires à Perpignan. Actros, Antos, Arocs, Atego pour les camions, Sprinter, Vito et Citan pour les utilitaires : toute la gamme professionnelle Mercedes est couverte.

Les systèmes de sécurité Mercedes PL utilisent des technologies avancées que notre outillage professionnel prend intégralement en charge. Programmation de clés à transpondeur, télécommandes, systèmes keyless.

Intervention rapide dans les Pyrénées-Orientales pour limiter l'immobilisation de vos véhicules. Devis gratuit.`,
    startingPrice: 169,
  },
  {
    slug: "man",
    name: "MAN",
    category: "pl",
    metaTitle: "Reprogrammation Clé MAN Perpignan | Clé Performance 66",
    metaDescription:
      "Clé MAN poids lourds à Perpignan. TGA, TGL, TGM, TGS, TGX, TGE. Reprogrammation professionnelle dans le 66.",
    models: ["TGA", "TGL", "TGM", "TGS", "TGX", "TGE"],
    content: `Clé Performance 66 reprogramme les clés MAN à Perpignan et dans les Pyrénées-Orientales. TGA, TGL, TGM, TGS, TGX, TGE : l'ensemble de la gamme MAN est prise en charge pour les transporteurs et professionnels du 66.

Les camions MAN intègrent des systèmes électroniques de sécurité robustes nécessitant un outillage spécialisé. Notre équipement professionnel permet la programmation et le remplacement de clés à transpondeur ainsi que des télécommandes MAN.

Service dédié aux professionnels du transport à Perpignan. Devis gratuit, intervention rapide.`,
    startingPrice: 159,
  },
  {
    slug: "volvo-trucks",
    name: "Volvo Trucks",
    category: "pl",
    metaTitle:
      "Reprogrammation Clé Volvo Trucks Perpignan | Clé Performance 66",
    metaDescription:
      "Clé Volvo poids lourds à Perpignan. FH, FM, FL, FE, FMX. Reprogrammation CEM et clés dans le 66.",
    models: ["FH", "FM", "FL", "FE", "FMX"],
    content: `Clé Performance 66 intervient sur tous les camions Volvo Trucks à Perpignan. FH, FM, FL, FE, FMX : toute la gamme des poids lourds suédois est couverte pour les transporteurs des Pyrénées-Orientales.

Les Volvo Trucks utilisent le système CEM (Central Electronic Module) pour la gestion des clés et de l'immobilisation. Notre outillage professionnel prend en charge la programmation, le remplacement et le clonage des clés Volvo PL.

Intervention prioritaire pour les professionnels du transport dans le 66. Devis gratuit à Perpignan.`,
    startingPrice: 159,
  },
  {
    slug: "daf",
    name: "DAF",
    category: "pl",
    metaTitle: "Reprogrammation Clé DAF Perpignan | Clé Performance 66",
    metaDescription:
      "Clé DAF poids lourds à Perpignan. XF, CF, LF, XG, XD. Reprogrammation professionnelle dans le 66.",
    models: ["XF", "CF", "LF", "XG", "XD"],
    content: `Clé Performance 66 reprogramme les clés DAF à Perpignan et dans les Pyrénées-Orientales. XF, CF, LF, XG, XD : toute la gamme de camions DAF est couverte pour les professionnels du transport du 66.

Les systèmes électroniques DAF nécessitent un équipement spécialisé pour la programmation des clés à transpondeur et des télécommandes. Nous intervenons rapidement pour minimiser l'immobilisation de vos poids lourds.

Service professionnel à Perpignan et alentours. Devis gratuit.`,
    startingPrice: 149,
  },
  {
    slug: "iveco",
    name: "Iveco",
    category: "pl",
    metaTitle: "Reprogrammation Clé Iveco Perpignan | Clé Performance 66",
    metaDescription:
      "Clé Iveco à Perpignan. Stralis, S-Way, Trakker, Daily, Eurocargo. Reprogrammation poids lourds et utilitaires dans le 66.",
    models: ["Stralis", "S-Way", "Trakker", "Daily", "Eurocargo"],
    content: `Clé Performance 66 assure la reprogrammation de clés Iveco à Perpignan. Des poids lourds Stralis, S-Way, Trakker et Eurocargo au Daily utilitaire, nous couvrons l'ensemble de la gamme Iveco pour les professionnels des Pyrénées-Orientales.

L'Iveco Daily est l'un des utilitaires les plus utilisés dans le 66. Sa programmation de clé nécessite un outillage spécialisé que nous maîtrisons parfaitement. Clés à transpondeur, télécommandes, systèmes d'immobilisation.

Intervention rapide à Perpignan pour limiter votre immobilisation. Devis gratuit.`,
    startingPrice: 149,
  },
  {
    slug: "ford-utilitaire",
    name: "Ford Transit",
    category: "pl",
    metaTitle:
      "Reprogrammation Clé Ford Utilitaire Perpignan | Clé Performance 66",
    metaDescription:
      "Clé Ford utilitaires à Perpignan. Transit, Transit Custom, Transit Connect, Ranger. Reprogrammation rapide dans le 66.",
    models: ["Transit", "Transit Custom", "Transit Connect", "Ranger"],
    content: `Clé Performance 66 reprogramme toutes les clés Ford utilitaires à Perpignan et dans les Pyrénées-Orientales. Transit, Transit Custom, Transit Connect, Ranger : la gamme utilitaire Ford est très prisée des professionnels du 66.

Les systèmes Ford PATS (Passive Anti-Theft System) nécessitent un outillage professionnel pour la programmation et le remplacement des clés à transpondeur. Nous intervenons rapidement pour minimiser l'immobilisation de vos véhicules de travail.

Devis gratuit, service rapide à Perpignan.`,
    startingPrice: 129,
  },
  {
    slug: "psa-utilitaires",
    name: "PSA Utilitaires",
    category: "pl",
    metaTitle:
      "Reprogrammation Clé PSA Utilitaires Perpignan | Clé Performance 66",
    metaDescription:
      "Clé utilitaires Stellantis à Perpignan. Boxer, Jumper, Ducato, Expert, Jumpy, ProAce, Berlingo Van, Combo Cargo. Reprogrammation dans le 66.",
    models: [
      "Boxer",
      "Jumper",
      "Ducato",
      "Expert",
      "Jumpy",
      "ProAce",
      "Berlingo Van",
      "Combo Cargo",
    ],
    content: `Clé Performance 66 est spécialisé dans la reprogrammation de clés des utilitaires Stellantis à Perpignan. Boxer (Peugeot), Jumper (Citroën), Ducato (Fiat), Expert, Jumpy, ProAce, Berlingo Van, Combo Cargo : tous partagent la même plateforme que nous maîtrisons parfaitement.

Ces fourgons et fourgonnettes sont omniprésents chez les artisans, livreurs et professionnels des Pyrénées-Orientales. Notre connaissance approfondie de la plateforme Stellantis utilitaire nous permet d'intervenir efficacement sur tous ces véhicules.

Service prioritaire pour les professionnels du 66. Devis gratuit, intervention rapide à Perpignan.`,
    startingPrice: 129,
  },
  // --- AGRICOLE ---
  {
    slug: "john-deere",
    name: "John Deere",
    category: "agricole",
    metaTitle: "Reprogrammation Clé John Deere Perpignan | Clé Performance 66",
    metaDescription:
      "Clé tracteur John Deere à Perpignan. Série 5R, 6R, 7R, 8R, 6M, CommandPRO. Reprogrammation agricole dans le 66.",
    models: [
      "Série 5R",
      "Série 6R",
      "Série 7R",
      "Série 8R",
      "Série 6M",
      "CommandPRO",
    ],
    content: `Clé Performance 66 intervient sur tous les tracteurs John Deere à Perpignan et dans les Pyrénées-Orientales. Séries 5R, 6R, 7R, 8R, 6M et systèmes CommandPRO : nous couvrons la gamme complète du leader mondial du machinisme agricole.

Les tracteurs John Deere intègrent des systèmes électroniques sophistiqués pour la gestion des clés et de l'immobilisation. Notre outillage agricole professionnel permet la programmation et le remplacement de clés à transpondeur pour tous les modèles John Deere.

Service spécialisé pour les agriculteurs du 66. Intervention rapide sur site ou à Perpignan. Devis gratuit.`,
    startingPrice: 159,
  },
  {
    slug: "new-holland",
    name: "New Holland",
    category: "agricole",
    metaTitle: "Reprogrammation Clé New Holland Perpignan | Clé Performance 66",
    metaDescription:
      "Clé tracteur New Holland à Perpignan. T5, T6, T7, T8, T9, TM, TG. Reprogrammation agricole dans le 66.",
    models: ["T5", "T6", "T7", "T8", "T9", "TM", "TG"],
    content: `Clé Performance 66 reprogramme les clés des tracteurs New Holland à Perpignan et dans les Pyrénées-Orientales. T5, T6, T7, T8, T9, TM, TG : toute la gamme New Holland est prise en charge.

New Holland fait partie du groupe CNH Industrial et partage des plateformes électroniques avec Case IH. Notre expertise couvre l'ensemble de ces systèmes pour la programmation de clés à transpondeur et la gestion des anti-démarreurs.

Intervention rapide pour les exploitations agricoles du 66. Devis gratuit à Perpignan.`,
    startingPrice: 149,
  },
  {
    slug: "case-ih",
    name: "Case IH",
    category: "agricole",
    metaTitle: "Reprogrammation Clé Case IH Perpignan | Clé Performance 66",
    metaDescription:
      "Clé tracteur Case IH à Perpignan. Puma, Maxxum, Farmall, Optum, Axial-Flow. Reprogrammation agricole dans le 66.",
    models: ["Puma", "Maxxum", "Farmall", "Optum", "Axial-Flow"],
    content: `Clé Performance 66 assure la reprogrammation de clés Case IH à Perpignan et dans le département 66. Puma, Maxxum, Farmall, Optum, Axial-Flow : toute la gamme de tracteurs et moissonneuses Case IH est couverte.

Case IH fait partie du groupe CNH Industrial, la même plateforme que New Holland, que nous maîtrisons parfaitement. Nos techniciens disposent de l'outillage spécialisé pour programmer et remplacer les clés à transpondeur de tous les modèles.

Service dédié aux agriculteurs des Pyrénées-Orientales. Intervention sur site et à Perpignan. Devis gratuit.`,
    startingPrice: 149,
  },
  {
    slug: "fendt",
    name: "Fendt",
    category: "agricole",
    metaTitle: "Reprogrammation Clé Fendt Perpignan | Clé Performance 66",
    metaDescription:
      "Clé tracteur Fendt à Perpignan. 500 Vario, 700 Vario, 800 Vario, 900 Vario, 1000 Vario. Reprogrammation dans le 66.",
    models: ["500 Vario", "700 Vario", "800 Vario", "900 Vario", "1000 Vario"],
    content: `Clé Performance 66 reprogramme les clés des tracteurs Fendt à Perpignan et dans les Pyrénées-Orientales. 500 Vario, 700 Vario, 800 Vario, 900 Vario, 1000 Vario : toute la gamme du premium allemand est couverte.

Fendt fait partie du groupe AGCO et est réputé pour ses systèmes électroniques de haute technologie, notamment la transmission Vario à variation continue. Notre outillage spécialisé permet la programmation complète des clés à transpondeur Fendt.

Service expert pour les exploitants agricoles du 66. Devis gratuit, intervention rapide à Perpignan.`,
    startingPrice: 169,
  },
  {
    slug: "massey-ferguson",
    name: "Massey Ferguson",
    category: "agricole",
    metaTitle:
      "Reprogrammation Clé Massey Ferguson Perpignan | Clé Performance 66",
    metaDescription:
      "Clé tracteur Massey Ferguson à Perpignan. 5S, 6S, 7S, 8S, 9S, Dyna-4, Dyna-6. Reprogrammation agricole dans le 66.",
    models: ["5S", "6S", "7S", "8S", "9S", "Dyna-4", "Dyna-6"],
    content: `Clé Performance 66 intervient sur tous les tracteurs Massey Ferguson à Perpignan. 5S, 6S, 7S, 8S, 9S, Dyna-4, Dyna-6 : toute la gamme MF est couverte pour les agriculteurs des Pyrénées-Orientales.

Massey Ferguson fait partie du groupe AGCO, dont nous maîtrisons les systèmes électroniques partagés avec Fendt et Valtra. Programmation de clés à transpondeur, remplacement de clé perdue, double de clé.

Service professionnel et tarifs compétitifs dans le 66. Devis gratuit à Perpignan.`,
    startingPrice: 149,
  },
  {
    slug: "deutz-fahr",
    name: "Deutz-Fahr",
    category: "agricole",
    metaTitle: "Reprogrammation Clé Deutz-Fahr Perpignan | Clé Performance 66",
    metaDescription:
      "Clé tracteur Deutz-Fahr à Perpignan. 6 Series, 7 Series, 8 Series, Agrotron, Explorer, Dorado. Reprogrammation dans le 66.",
    models: [
      "6 Series",
      "7 Series",
      "8 Series",
      "Agrotron",
      "Explorer",
      "Dorado",
    ],
    content: `Clé Performance 66 reprogramme les clés Deutz-Fahr à Perpignan et dans les Pyrénées-Orientales. Séries 6, 7, 8, Agrotron, Explorer, Dorado : toute la gamme du groupe SDF est prise en charge.

Deutz-Fahr fait partie du groupe SDF (Same Deutz-Fahr), dont nous maîtrisons les systèmes d'immobilisation électronique. Notre équipement professionnel permet la programmation et le remplacement de clés à transpondeur pour tous les tracteurs Deutz-Fahr.

Intervention rapide pour les exploitants agricoles du 66. Devis gratuit à Perpignan.`,
    startingPrice: 149,
  },
  {
    slug: "claas",
    name: "Claas",
    category: "agricole",
    metaTitle: "Reprogrammation Clé Claas Perpignan | Clé Performance 66",
    metaDescription:
      "Clé Claas à Perpignan. Axion, Arion, Ares, Axos, Lexion, Tucano. Reprogrammation tracteurs et moissonneuses dans le 66.",
    models: ["Axion", "Arion", "Ares", "Axos", "Lexion", "Tucano"],
    content: `Clé Performance 66 intervient sur tous les engins Claas à Perpignan et dans les Pyrénées-Orientales. Tracteurs Axion, Arion, Ares, Axos et moissonneuses-batteuses Lexion, Tucano : toute la gamme Claas est couverte.

Les machines Claas intègrent des systèmes électroniques de sécurité avancés. Notre outillage spécialisé permet la programmation de clés à transpondeur, la gestion des codes immobiliseur et le remplacement de clés perdues sur l'ensemble des modèles.

Service dédié aux agriculteurs du 66. Intervention sur site et à Perpignan. Devis gratuit.`,
    startingPrice: 159,
  },
  {
    slug: "kubota",
    name: "Kubota",
    category: "agricole",
    metaTitle: "Reprogrammation Clé Kubota Perpignan | Clé Performance 66",
    metaDescription:
      "Clé Kubota à Perpignan. M Series, L Series, MX, GX, GT. Reprogrammation tracteurs compacts agricoles dans le 66.",
    models: ["M Series", "L Series", "MX", "GX", "GT"],
    content: `Clé Performance 66 reprogramme les clés Kubota à Perpignan et dans les Pyrénées-Orientales. M Series, L Series, MX, GX, GT : la gamme de tracteurs compacts et agricoles Kubota est entièrement couverte.

Les tracteurs Kubota sont très appréciés dans le 66 pour leurs usages polyvalents : maraîchage, viticulture, arboriculture. Notre outillage adapté permet la programmation des systèmes anti-démarrage et le remplacement des clés à transpondeur Kubota.

Service rapide et tarifs adaptés pour les agriculteurs des Pyrénées-Orientales. Devis gratuit.`,
    startingPrice: 139,
  },
  {
    slug: "valtra",
    name: "Valtra",
    category: "agricole",
    metaTitle: "Reprogrammation Clé Valtra Perpignan | Clé Performance 66",
    metaDescription:
      "Clé tracteur Valtra à Perpignan. A Series, N Series, T Series, S Series, Q Series. Reprogrammation agricole dans le 66.",
    models: ["A Series", "N Series", "T Series", "S Series", "Q Series"],
    content: `Clé Performance 66 assure la reprogrammation de clés Valtra à Perpignan et dans les Pyrénées-Orientales. A Series, N Series, T Series, S Series, Q Series : toute la gamme du fabricant finlandais est couverte.

Valtra fait partie du groupe AGCO, dont nous maîtrisons les systèmes électroniques partagés avec Massey Ferguson et Fendt. Programmation de clés à transpondeur, remplacement de clé perdue, double de clé pour tous les modèles Valtra.

Service spécialisé pour les agriculteurs du 66. Intervention rapide à Perpignan et alentours. Devis gratuit.`,
    startingPrice: 149,
  },
];

export const brandCategories = {
  auto: { label: "Automobile", icon: "car" },
  moto: { label: "Moto & Scooter", icon: "bike" },
  pl: { label: "Poids Lourd & Utilitaire", icon: "truck" },
  agricole: { label: "Agricole & TP", icon: "tractor" },
} as const;

export function getBrandsByCategory(category: Brand["category"]): Brand[] {
  return brands.filter((b) => b.category === category);
}

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

export function getAllBrandSlugs(): string[] {
  return brands.map((b) => b.slug);
}
