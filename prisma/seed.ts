import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding database...");

  // Clear existing data
  await prisma.testimonial.deleteMany();
  await prisma.faqItem.deleteMany();
  await prisma.service.deleteMany();
  await prisma.city.deleteMany();
  await prisma.brand.deleteMany();

  // --- BRANDS ---
  const brands = [
    // AUTO
    {
      slug: "renault",
      name: "Renault",
      category: "auto" as const,
      startingPrice: 199,
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
      content: `Clé Performance 66 est spécialisé dans la reprogrammation de clés Renault à Perpignan et dans les Pyrénées-Orientales. Nous intervenons sur tous les modèles Renault, des plus anciens aux plus récents.\n\nClio, Megane, Captur, Kadjar, Scenic, Twingo, Kangoo, Trafic, Master : quel que soit votre modèle, nous disposons du matériel pour programmer votre clé avec carte ou télécommande.\n\nLes cartes Renault (carte mains libres) nécessitent un équipement spécifique que nous maîtrisons parfaitement. Double de carte, remplacement de carte perdue, notre service est rapide et nos tarifs compétitifs.`,
    },
    {
      slug: "peugeot",
      name: "Peugeot",
      category: "auto" as const,
      startingPrice: 129,
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
      content: `Votre clé Peugeot est perdue, cassée ou vous avez simplement besoin d'un double ? Clé Performance 66 intervient à Perpignan et dans tout le 66 pour la reprogrammation de clés Peugeot.\n\nNous couvrons toute la gamme : 208, 308, 3008, 5008, 2008, 508, Partner, Rifter, Expert, Boxer. Clés à télécommande, clés à transpondeur, systèmes keyless : notre équipement professionnel nous permet de traiter tous les cas.\n\nDevis gratuit et intervention rapide. Contactez Clé Performance 66.`,
    },
    {
      slug: "citroen",
      name: "Citroën",
      category: "auto" as const,
      startingPrice: 149,
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
      content: `Clé Performance 66 prend en charge la reprogrammation de toutes les clés Citroën à Perpignan. C3, C4, C5 Aircross, Berlingo, Jumpy, Jumper : nous intervenons sur l'ensemble de la gamme.\n\nLes systèmes Citroën partagent la plateforme PSA avec Peugeot, que nous maîtrisons parfaitement. Clés à télécommande, cartes, systèmes keyless : tout est pris en charge.\n\nIntervention rapide à Perpignan et dans les Pyrénées-Orientales. Devis gratuit.`,
    },
    {
      slug: "volkswagen",
      name: "Volkswagen",
      category: "auto" as const,
      startingPrice: 169,
      metaTitle:
        "Reprogrammation Clé Volkswagen Perpignan | Clé Performance 66",
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
      content: `Clé Performance 66 est votre expert en reprogrammation de clés Volkswagen à Perpignan. Golf, Polo, Tiguan, T-Roc, Passat, Transporter : nous intervenons sur toute la gamme VW.\n\nLes systèmes Volkswagen, réputés pour leur sécurité, nécessitent un équipement professionnel spécialisé dont nous disposons. Programmation de clés à transpondeur, télécommandes, systèmes keyless entry.\n\nTarifs compétitifs et intervention rapide dans tout le département 66.`,
    },
    {
      slug: "toyota",
      name: "Toyota",
      category: "auto" as const,
      startingPrice: 179,
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
      content: `Toyota est l'une des marques les plus vendues en France. Clé Performance 66 assure la reprogrammation de clés Toyota à Perpignan pour tous les modèles : Yaris, Corolla, C-HR, RAV4, Aygo, Hilux.\n\nQue ce soit un système à clé classique ou un smart key Toyota, nous avons l'expertise et l'équipement nécessaires. Intervention rapide dans tout le 66.`,
    },
    {
      slug: "ford",
      name: "Ford",
      category: "auto" as const,
      startingPrice: 159,
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
      content: `Clé Performance 66 programme et duplique toutes les clés Ford à Perpignan. Fiesta, Focus, Puma, Kuga, Transit, Ranger : gamme complète couverte.\n\nLes véhicules utilitaires Ford Transit sont très répandus chez les professionnels du 66. Nous assurons un service rapide pour minimiser votre immobilisation. Devis gratuit.`,
    },
    {
      slug: "mercedes",
      name: "Mercedes-Benz",
      category: "auto" as const,
      startingPrice: 249,
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
      content: `Les clés Mercedes-Benz utilisent des systèmes de sécurité avancés. Clé Performance 66 dispose de l'équipement spécialisé pour la reprogrammation de clés Mercedes à Perpignan.\n\nClasse A, B, C, E, GLA, GLC, Vito, Sprinter : nous intervenons sur la gamme complète. Systèmes keyless, clés à transpondeur, télécommandes chromées.\n\nService premium à prix compétitif dans les Pyrénées-Orientales.`,
    },
    {
      slug: "bmw",
      name: "BMW",
      category: "auto" as const,
      startingPrice: 259,
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
      content: `Clé Performance 66 est équipé pour la reprogrammation de clés BMW à Perpignan. Série 1, 3, 5, X1, X3, X5 : nous gérons la gamme complète.\n\nLes systèmes BMW (CAS, FEM/BDC) nécessitent un outillage spécifique que nous maîtrisons. Clé diamond, clé display key, télécommande standard.\n\nIntervention rapide à Perpignan et dans le 66. Devis gratuit.`,
    },
    {
      slug: "audi",
      name: "Audi",
      category: "auto" as const,
      startingPrice: 239,
      metaTitle: "Reprogrammation Clé Audi Perpignan | Clé Performance 66",
      metaDescription:
        "Clé Audi à Perpignan. A1, A3, A4, A5, Q2, Q3, Q5. Double et reprogrammation de clé dans le 66.",
      models: ["A1", "A3", "A4", "A5", "A6", "Q2", "Q3", "Q5", "Q7", "TT"],
      content: `Reprogrammation de clés Audi à Perpignan par Clé Performance 66. A1, A3, A4, Q3, Q5 : toute la gamme Audi est prise en charge.\n\nLes systèmes Audi partagent la plateforme VAG que nous maîtrisons parfaitement. Clés à télécommande, systèmes keyless, programmation de transpondeur.\n\nService professionnel et tarifs compétitifs dans les Pyrénées-Orientales.`,
    },
    {
      slug: "fiat",
      name: "Fiat",
      category: "auto" as const,
      startingPrice: 189,
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
      content: `Clé Performance 66 assure la reprogrammation de clés Fiat à Perpignan. 500, Panda, Tipo, Ducato, Doblo : gamme complète.\n\nLes Fiat Ducato sont très utilisés par les professionnels et campingcaristes du 66. Nous intervenons rapidement pour limiter votre immobilisation.\n\nDevis gratuit, tarifs compétitifs.`,
    },
    {
      slug: "dacia",
      name: "Dacia",
      category: "auto" as const,
      startingPrice: 179,
      metaTitle: "Reprogrammation Clé Dacia Perpignan | Clé Performance 66",
      metaDescription:
        "Clé Dacia à Perpignan. Sandero, Duster, Jogger, Spring, Logan. Double et reprogrammation dans le 66.",
      models: ["Sandero", "Duster", "Jogger", "Spring", "Logan"],
      content: `Dacia, marque très populaire dans le 66, est entièrement couverte par Clé Performance 66. Sandero, Duster, Jogger, Spring, Logan : nous reprogrammons toutes les clés Dacia à Perpignan.\n\nLes systèmes Dacia partagent la plateforme Renault que nous connaissons parfaitement. Service rapide et tarifs adaptés.`,
    },
    {
      slug: "nissan",
      name: "Nissan",
      category: "auto" as const,
      startingPrice: 179,
      metaTitle: "Reprogrammation Clé Nissan Perpignan | Clé Performance 66",
      metaDescription:
        "Clé Nissan à Perpignan. Qashqai, Juke, Micra, X-Trail, Navara, NV200. Reprogrammation dans le 66.",
      models: [
        "Qashqai",
        "Juke",
        "Micra",
        "X-Trail",
        "Navara",
        "NV200",
        "NV300",
      ],
      content: `Clé Performance 66 reprogramme toutes les clés Nissan à Perpignan. Qashqai, Juke, Micra, X-Trail : toute la gamme est prise en charge.\n\nSystèmes intelligent key Nissan, clés à transpondeur, télécommandes. Intervention rapide dans le 66.`,
    },
    {
      slug: "hyundai",
      name: "Hyundai",
      category: "auto" as const,
      startingPrice: 249,
      metaTitle: "Reprogrammation Clé Hyundai Perpignan | Clé Performance 66",
      metaDescription:
        "Clé Hyundai à Perpignan. Tucson, i10, i20, i30, Kona, Santa Fe. Double et reprogrammation dans le 66.",
      models: ["Tucson", "i10", "i20", "i30", "Kona", "Santa Fe", "Bayon"],
      content: `Clé Performance 66 prend en charge la reprogrammation de clés Hyundai à Perpignan. Tucson, i20, i30, Kona : tous les modèles sont couverts.\n\nClés à transpondeur, smart key, télécommandes. Service professionnel et rapide dans les Pyrénées-Orientales.`,
    },
    {
      slug: "kia",
      name: "Kia",
      category: "auto" as const,
      startingPrice: 249,
      metaTitle: "Reprogrammation Clé Kia Perpignan | Clé Performance 66",
      metaDescription:
        "Clé Kia à Perpignan. Sportage, Ceed, Picanto, Stonic, Niro. Reprogrammation rapide dans le 66.",
      models: [
        "Sportage",
        "Ceed",
        "Picanto",
        "Stonic",
        "Niro",
        "Sorento",
        "EV6",
      ],
      content: `Clé Performance 66 reprogramme les clés Kia à Perpignan. Sportage, Ceed, Picanto, Stonic, Niro : gamme complète prise en charge.\n\nSystèmes Kia partagés avec Hyundai, que nous maîtrisons parfaitement. Devis gratuit et intervention rapide dans le 66.`,
    },
    {
      slug: "seat",
      name: "Seat",
      category: "auto" as const,
      startingPrice: 219,
      metaTitle: "Reprogrammation Clé Seat Perpignan | Clé Performance 66",
      metaDescription:
        "Clé Seat à Perpignan. Ibiza, Leon, Arona, Ateca, Tarraco. Double et reprogrammation dans le 66.",
      models: ["Ibiza", "Leon", "Arona", "Ateca", "Tarraco"],
      content: `Seat, marque très appréciée dans notre région proche de l'Espagne, est entièrement couverte par Clé Performance 66. Ibiza, Leon, Arona, Ateca : tous les modèles à Perpignan.\n\nPlateforme VAG maîtrisée. Intervention rapide, tarifs compétitifs dans le 66.`,
    },
    {
      slug: "skoda",
      name: "Skoda",
      category: "auto" as const,
      startingPrice: 219,
      metaTitle: "Reprogrammation Clé Skoda Perpignan | Clé Performance 66",
      metaDescription:
        "Clé Skoda à Perpignan. Fabia, Octavia, Kamiq, Karoq, Kodiaq. Reprogrammation dans le 66.",
      models: [
        "Fabia",
        "Octavia",
        "Kamiq",
        "Karoq",
        "Kodiaq",
        "Scala",
        "Superb",
      ],
      content: `Clé Performance 66 assure la reprogrammation de clés Skoda à Perpignan. Fabia, Octavia, Karoq, Kodiaq : toute la gamme.\n\nTechnologie VAG identique à VW, Audi et Seat, que nous maîtrisons parfaitement. Service rapide dans le 66.`,
    },
    {
      slug: "opel",
      name: "Opel",
      category: "auto" as const,
      startingPrice: 169,
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
      content: `Clé Performance 66 reprogramme toutes les clés Opel à Perpignan. Corsa, Astra, Mokka, Vivaro : gamme complète couverte.\n\nLes modèles récents Opel partagent la plateforme PSA/Stellantis que nous maîtrisons. Intervention rapide dans les Pyrénées-Orientales.`,
    },
    {
      slug: "volvo",
      name: "Volvo",
      category: "auto" as const,
      startingPrice: 139,
      metaTitle: "Reprogrammation Clé Volvo Perpignan | Clé Performance 66",
      metaDescription:
        "Clé Volvo à Perpignan. XC40, XC60, XC90, V40, V60, S60. Reprogrammation spécialisée dans le 66.",
      models: ["XC40", "XC60", "XC90", "V60", "S60", "V90", "S90"],
      content: `Clé Performance 66 dispose de l'équipement spécialisé pour la reprogrammation de clés Volvo à Perpignan. XC40, XC60, XC90, V60 : toute la gamme.\n\nSystèmes de sécurité Volvo de haut niveau, pris en charge par notre outillage professionnel. Devis gratuit dans le 66.`,
    },
    {
      slug: "mini",
      name: "MINI",
      category: "auto" as const,
      startingPrice: 279,
      metaTitle: "Reprogrammation Clé MINI Perpignan | Clé Performance 66",
      metaDescription:
        "Clé MINI à Perpignan. Cooper, One, Countryman, Clubman, Paceman. Double et reprogrammation spécialisée dans le 66.",
      models: ["Cooper", "One", "Countryman", "Clubman", "Paceman"],
      content: `Clé Performance 66 assure la reprogrammation de clés MINI à Perpignan et dans les Pyrénées-Orientales. Cooper, One, Countryman, Clubman, Paceman : toute la gamme MINI est couverte.\n\nLes MINI partagent la plateforme BMW, ce qui implique des systèmes de sécurité électroniques avancés (CAS, FEM) que nous maîtrisons parfaitement. Clés à télécommande, systèmes keyless, programmation de transpondeur.\n\nService spécialisé et tarifs compétitifs à Perpignan. Devis gratuit.`,
    },
    {
      slug: "land-rover",
      name: "Land Rover",
      category: "auto" as const,
      startingPrice: 399,
      metaTitle:
        "Reprogrammation Clé Land Rover Perpignan | Clé Performance 66",
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
      content: `Clé Performance 66 intervient sur toutes les Land Rover à Perpignan. Discovery, Freelander, Range Rover, Range Rover Sport, Defender, Evoque : gamme complète prise en charge.\n\nLes Land Rover utilisent des systèmes de sécurité premium (PATS, KVM) qui nécessitent un équipement professionnel de haut niveau dont nous disposons. Clés à transpondeur, systèmes keyless entry, télécommandes.\n\nExpertise reconnue dans les Pyrénées-Orientales pour les véhicules premium et tout-terrain.`,
    },
    {
      slug: "jaguar",
      name: "Jaguar",
      category: "auto" as const,
      startingPrice: 399,
      metaTitle: "Reprogrammation Clé Jaguar Perpignan | Clé Performance 66",
      metaDescription:
        "Clé Jaguar à Perpignan. XF, XE, F-Pace, E-Pace, F-Type, I-Pace. Reprogrammation spécialisée dans le 66.",
      models: ["XF", "XE", "F-Pace", "E-Pace", "F-Type", "I-Pace"],
      content: `Clé Performance 66 reprogramme les clés Jaguar à Perpignan et dans tout le département 66. XF, XE, F-Pace, E-Pace, F-Type, I-Pace : nous couvrons la gamme complète de la marque britannique.\n\nJaguar partage la plateforme JLR avec Land Rover, avec des systèmes de sécurité avancés que notre outillage professionnel prend en charge. Programmation de clés à transpondeur, télécommandes, systèmes keyless.\n\nService premium à tarifs compétitifs à Perpignan. Devis gratuit.`,
    },
    // MOTO
    {
      slug: "yamaha",
      name: "Yamaha",
      category: "moto" as const,
      startingPrice: 179,
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
      content: `Clé Performance 66 reprogramme toutes les clés moto Yamaha à Perpignan. MT-07, MT-09, Tracer, XMAX, TMAX : toute la gamme.\n\nLes systèmes anti-démarrage Yamaha nécessitent un outillage spécifique que nous maîtrisons parfaitement. Double de clé, remplacement de clé perdue. Intervention rapide dans le 66.`,
    },
    {
      slug: "honda-moto",
      name: "Honda Moto",
      category: "moto" as const,
      startingPrice: 139,
      metaTitle:
        "Reprogrammation Clé Honda Moto Perpignan | Clé Performance 66",
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
      content: `Clé Performance 66 intervient sur toutes les motos et scooters Honda à Perpignan. CB650R, Africa Twin, Forza, PCX, CBR : gamme complète.\n\nClés à transpondeur, HISS (Honda Ignition Security System) : nous avons l'équipement professionnel pour traiter tous les modèles. Devis gratuit dans le 66.`,
    },
    {
      slug: "kawasaki",
      name: "Kawasaki",
      category: "moto" as const,
      startingPrice: 179,
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
      content: `Reprogrammation de clés Kawasaki à Perpignan par Clé Performance 66. Z650, Z900, Ninja, Versys : tous les modèles pris en charge.\n\nIntervention rapide et tarifs compétitifs dans les Pyrénées-Orientales.`,
    },
    {
      slug: "suzuki-moto",
      name: "Suzuki Moto",
      category: "moto" as const,
      startingPrice: 179,
      metaTitle:
        "Reprogrammation Clé Suzuki Moto Perpignan | Clé Performance 66",
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
      content: `Clé Performance 66 reprogramme les clés moto Suzuki à Perpignan. GSX-R, V-Strom, SV650, Burgman : toute la gamme.\n\nService professionnel et rapide dans le département 66. Devis gratuit.`,
    },
    {
      slug: "bmw-moto",
      name: "BMW Motorrad",
      category: "moto" as const,
      startingPrice: 259,
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
      content: `Les motos BMW Motorrad utilisent des systèmes de sécurité avancés. Clé Performance 66 dispose de l'équipement spécialisé pour la reprogrammation de clés BMW moto à Perpignan.\n\nR1250GS, F900R, S1000RR, C400X : tous les modèles sont pris en charge. Service premium à prix compétitif dans le 66.`,
    },
    {
      slug: "ducati",
      name: "Ducati",
      category: "moto" as const,
      startingPrice: 269,
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
      content: `Clé Performance 66 reprogramme les clés Ducati à Perpignan. Monster, Multistrada, Panigale, Scrambler : toute la gamme italienne.\n\nLes systèmes Ducati nécessitent un matériel spécialisé que nous maîtrisons. Intervention rapide dans le 66.`,
    },
    {
      slug: "triumph",
      name: "Triumph",
      category: "moto" as const,
      startingPrice: 219,
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
      content: `Clé Performance 66 intervient sur toutes les motos Triumph à Perpignan. Street Triple, Tiger, Bonneville : gamme complète.\n\nDevis gratuit et intervention rapide dans les Pyrénées-Orientales.`,
    },
    {
      slug: "ktm",
      name: "KTM",
      category: "moto" as const,
      startingPrice: 209,
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
      content: `Clé Performance 66 reprogramme les clés KTM à Perpignan. Duke, Adventure, Super Duke, RC : tous les modèles pris en charge.\n\nIntervention rapide et tarifs compétitifs dans le 66.`,
    },
    {
      slug: "piaggio-vespa",
      name: "Piaggio / Vespa",
      category: "moto" as const,
      startingPrice: 119,
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
      content: `Clé Performance 66 reprogramme toutes les clés Piaggio et Vespa à Perpignan. Beverly 300, MP3, Medley, Liberty, GTS 300, Primavera, Sprint : toute la gamme de scooters italiens est couverte.\n\nLes systèmes anti-démarrage Piaggio et Vespa nécessitent un outillage spécialisé que nous maîtrisons parfaitement. Double de clé, remplacement de clé perdue, dépannage rapide dans les Pyrénées-Orientales.\n\nQue vous rouliez en ville à Perpignan ou dans le 66, nous assurons un service rapide et des tarifs compétitifs.`,
    },
    {
      slug: "aprilia",
      name: "Aprilia",
      category: "moto" as const,
      startingPrice: 209,
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
      content: `Clé Performance 66 intervient sur toutes les motos Aprilia à Perpignan et dans les Pyrénées-Orientales. RS 660, Tuono 660, Tuono 1100, Shiver, Dorsoduro, SR GT : la gamme complète de la marque italienne est prise en charge.\n\nAprilia fait partie du groupe Piaggio, dont nous maîtrisons parfaitement les systèmes électroniques d'immobilisation et de programmation de clés. Clés à transpondeur, télécommandes, systèmes keyless.\n\nDevis gratuit et intervention rapide dans le 66.`,
    },
    {
      slug: "harley-davidson",
      name: "Harley-Davidson",
      category: "moto" as const,
      startingPrice: 159,
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
      content: `Clé Performance 66 reprogramme les clés Harley-Davidson à Perpignan. Sportster S, Nightster, Pan America, Street Glide, Road King, Fat Boy, Softail : toute la gamme américaine est couverte.\n\nLes Harley-Davidson utilisent le système de sécurité TSSM (Turn Signal Security Module) et Smart Security System qui nécessitent un outillage professionnel spécialisé. Nous disposons de l'équipement adéquat pour programmer et dupliquer les clés à transpondeur et les FOBs Harley.\n\nService spécialisé à Perpignan pour les motards des Pyrénées-Orientales. Devis gratuit.`,
    },
    // PL
    {
      slug: "renault-trucks",
      name: "Renault Trucks",
      category: "pl" as const,
      startingPrice: 279,
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
      content: `Clé Performance 66 est spécialisé dans la reprogrammation de clés Renault Trucks à Perpignan. Des poids lourds T, C, K aux utilitaires Master et Trafic, nous couvrons l'ensemble de la gamme pour les professionnels du transport des Pyrénées-Orientales.\n\nLes systèmes électroniques Renault Trucks requièrent un équipement professionnel adapté que nous maîtrisons. Clés à transpondeur, télécommandes, programmation d'unités d'immobilisation : notre intervention minimise votre temps d'immobilisation.\n\nService prioritaire pour les professionnels du 66. Devis gratuit, intervention rapide à Perpignan et alentours.`,
    },
    {
      slug: "mercedes-trucks",
      name: "Mercedes Trucks",
      category: "pl" as const,
      startingPrice: 329,
      metaTitle:
        "Reprogrammation Clé Mercedes Trucks Perpignan | Clé Performance 66",
      metaDescription:
        "Clé Mercedes poids lourds à Perpignan. Actros, Antos, Arocs, Atego, Sprinter, Vito, Citan. Reprogrammation dans le 66.",
      models: [
        "Actros",
        "Antos",
        "Arocs",
        "Atego",
        "Sprinter",
        "Vito",
        "Citan",
      ],
      content: `Clé Performance 66 assure la reprogrammation de clés Mercedes poids lourds et utilitaires à Perpignan. Actros, Antos, Arocs, Atego pour les camions, Sprinter, Vito et Citan pour les utilitaires : toute la gamme professionnelle Mercedes est couverte.\n\nLes systèmes de sécurité Mercedes PL utilisent des technologies avancées que notre outillage professionnel prend intégralement en charge. Programmation de clés à transpondeur, télécommandes, systèmes keyless.\n\nIntervention rapide dans les Pyrénées-Orientales pour limiter l'immobilisation de vos véhicules. Devis gratuit.`,
    },
    {
      slug: "man",
      name: "MAN",
      category: "pl" as const,
      startingPrice: 299,
      metaTitle: "Reprogrammation Clé MAN Perpignan | Clé Performance 66",
      metaDescription:
        "Clé MAN poids lourds à Perpignan. TGA, TGL, TGM, TGS, TGX, TGE. Reprogrammation professionnelle dans le 66.",
      models: ["TGA", "TGL", "TGM", "TGS", "TGX", "TGE"],
      content: `Clé Performance 66 reprogramme les clés MAN à Perpignan et dans les Pyrénées-Orientales. TGA, TGL, TGM, TGS, TGX, TGE : l'ensemble de la gamme MAN est prise en charge pour les transporteurs et professionnels du 66.\n\nLes camions MAN intègrent des systèmes électroniques de sécurité robustes nécessitant un outillage spécialisé. Notre équipement professionnel permet la programmation et le remplacement de clés à transpondeur ainsi que des télécommandes MAN.\n\nService dédié aux professionnels du transport à Perpignan. Devis gratuit, intervention rapide.`,
    },
    {
      slug: "volvo-trucks",
      name: "Volvo Trucks",
      category: "pl" as const,
      startingPrice: 379,
      metaTitle:
        "Reprogrammation Clé Volvo Trucks Perpignan | Clé Performance 66",
      metaDescription:
        "Clé Volvo poids lourds à Perpignan. FH, FM, FL, FE, FMX. Reprogrammation CEM et clés dans le 66.",
      models: ["FH", "FM", "FL", "FE", "FMX"],
      content: `Clé Performance 66 intervient sur tous les camions Volvo Trucks à Perpignan. FH, FM, FL, FE, FMX : toute la gamme des poids lourds suédois est couverte pour les transporteurs des Pyrénées-Orientales.\n\nLes Volvo Trucks utilisent le système CEM (Central Electronic Module) pour la gestion des clés et de l'immobilisation. Notre outillage professionnel prend en charge la programmation, le remplacement et le clonage des clés Volvo PL.\n\nIntervention prioritaire pour les professionnels du transport dans le 66. Devis gratuit à Perpignan.`,
    },
    {
      slug: "daf",
      name: "DAF",
      category: "pl" as const,
      startingPrice: 339,
      metaTitle: "Reprogrammation Clé DAF Perpignan | Clé Performance 66",
      metaDescription:
        "Clé DAF poids lourds à Perpignan. XF, CF, LF, XG, XD. Reprogrammation professionnelle dans le 66.",
      models: ["XF", "CF", "LF", "XG", "XD"],
      content: `Clé Performance 66 reprogramme les clés DAF à Perpignan et dans les Pyrénées-Orientales. XF, CF, LF, XG, XD : toute la gamme de camions DAF est couverte pour les professionnels du transport du 66.\n\nLes systèmes électroniques DAF nécessitent un équipement spécialisé pour la programmation des clés à transpondeur et des télécommandes. Nous intervenons rapidement pour minimiser l'immobilisation de vos poids lourds.\n\nService professionnel à Perpignan et alentours. Devis gratuit.`,
    },
    {
      slug: "iveco",
      name: "Iveco",
      category: "pl" as const,
      startingPrice: 329,
      metaTitle: "Reprogrammation Clé Iveco Perpignan | Clé Performance 66",
      metaDescription:
        "Clé Iveco à Perpignan. Stralis, S-Way, Trakker, Daily, Eurocargo. Reprogrammation poids lourds et utilitaires dans le 66.",
      models: ["Stralis", "S-Way", "Trakker", "Daily", "Eurocargo"],
      content: `Clé Performance 66 assure la reprogrammation de clés Iveco à Perpignan. Des poids lourds Stralis, S-Way, Trakker et Eurocargo au Daily utilitaire, nous couvrons l'ensemble de la gamme Iveco pour les professionnels des Pyrénées-Orientales.\n\nL'Iveco Daily est l'un des utilitaires les plus utilisés dans le 66. Sa programmation de clé nécessite un outillage spécialisé que nous maîtrisons parfaitement. Clés à transpondeur, télécommandes, systèmes d'immobilisation.\n\nIntervention rapide à Perpignan pour limiter votre immobilisation. Devis gratuit.`,
    },
    {
      slug: "ford-utilitaire",
      name: "Ford Transit",
      category: "pl" as const,
      startingPrice: 239,
      metaTitle:
        "Reprogrammation Clé Ford Utilitaire Perpignan | Clé Performance 66",
      metaDescription:
        "Clé Ford utilitaires à Perpignan. Transit, Transit Custom, Transit Connect, Ranger. Reprogrammation rapide dans le 66.",
      models: ["Transit", "Transit Custom", "Transit Connect", "Ranger"],
      content: `Clé Performance 66 reprogramme toutes les clés Ford utilitaires à Perpignan et dans les Pyrénées-Orientales. Transit, Transit Custom, Transit Connect, Ranger : la gamme utilitaire Ford est très prisée des professionnels du 66.\n\nLes systèmes Ford PATS (Passive Anti-Theft System) nécessitent un outillage professionnel pour la programmation et le remplacement des clés à transpondeur. Nous intervenons rapidement pour minimiser l'immobilisation de vos véhicules de travail.\n\nDevis gratuit, service rapide à Perpignan.`,
    },
    {
      slug: "psa-utilitaires",
      name: "PSA Utilitaires",
      category: "pl" as const,
      startingPrice: 239,
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
      content: `Clé Performance 66 est spécialisé dans la reprogrammation de clés des utilitaires Stellantis à Perpignan. Boxer (Peugeot), Jumper (Citroën), Ducato (Fiat), Expert, Jumpy, ProAce, Berlingo Van, Combo Cargo : tous partagent la même plateforme que nous maîtrisons parfaitement.\n\nCes fourgons et fourgonnettes sont omniprésents chez les artisans, livreurs et professionnels des Pyrénées-Orientales. Notre connaissance approfondie de la plateforme Stellantis utilitaire nous permet d'intervenir efficacement sur tous ces véhicules.\n\nService prioritaire pour les professionnels du 66. Devis gratuit, intervention rapide à Perpignan.`,
    },
    // AGRICOLE
    {
      slug: "john-deere",
      name: "John Deere",
      category: "agricole" as const,
      startingPrice: 269,
      metaTitle:
        "Reprogrammation Clé John Deere Perpignan | Clé Performance 66",
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
      content: `Clé Performance 66 intervient sur tous les tracteurs John Deere à Perpignan et dans les Pyrénées-Orientales. Séries 5R, 6R, 7R, 8R, 6M et systèmes CommandPRO : nous couvrons la gamme complète du leader mondial du machinisme agricole.\n\nLes tracteurs John Deere intègrent des systèmes électroniques sophistiqués pour la gestion des clés et de l'immobilisation. Notre outillage agricole professionnel permet la programmation et le remplacement de clés à transpondeur pour tous les modèles John Deere.\n\nService spécialisé pour les agriculteurs du 66. Intervention rapide sur site ou à Perpignan. Devis gratuit.`,
    },
    {
      slug: "new-holland",
      name: "New Holland",
      category: "agricole" as const,
      startingPrice: 339,
      metaTitle:
        "Reprogrammation Clé New Holland Perpignan | Clé Performance 66",
      metaDescription:
        "Clé tracteur New Holland à Perpignan. T5, T6, T7, T8, T9, TM, TG. Reprogrammation agricole dans le 66.",
      models: ["T5", "T6", "T7", "T8", "T9", "TM", "TG"],
      content: `Clé Performance 66 reprogramme les clés des tracteurs New Holland à Perpignan et dans les Pyrénées-Orientales. T5, T6, T7, T8, T9, TM, TG : toute la gamme New Holland est prise en charge.\n\nNew Holland fait partie du groupe CNH Industrial et partage des plateformes électroniques avec Case IH. Notre expertise couvre l'ensemble de ces systèmes pour la programmation de clés à transpondeur et la gestion des anti-démarreurs.\n\nIntervention rapide pour les exploitations agricoles du 66. Devis gratuit à Perpignan.`,
    },
    {
      slug: "case-ih",
      name: "Case IH",
      category: "agricole" as const,
      startingPrice: 339,
      metaTitle: "Reprogrammation Clé Case IH Perpignan | Clé Performance 66",
      metaDescription:
        "Clé tracteur Case IH à Perpignan. Puma, Maxxum, Farmall, Optum, Axial-Flow. Reprogrammation agricole dans le 66.",
      models: ["Puma", "Maxxum", "Farmall", "Optum", "Axial-Flow"],
      content: `Clé Performance 66 assure la reprogrammation de clés Case IH à Perpignan et dans le département 66. Puma, Maxxum, Farmall, Optum, Axial-Flow : toute la gamme de tracteurs et moissonneuses Case IH est couverte.\n\nCase IH fait partie du groupe CNH Industrial, la même plateforme que New Holland, que nous maîtrisons parfaitement. Nos techniciens disposent de l'outillage spécialisé pour programmer et remplacer les clés à transpondeur de tous les modèles.\n\nService dédié aux agriculteurs des Pyrénées-Orientales. Intervention sur site et à Perpignan. Devis gratuit.`,
    },
    {
      slug: "fendt",
      name: "Fendt",
      category: "agricole" as const,
      startingPrice: 389,
      metaTitle: "Reprogrammation Clé Fendt Perpignan | Clé Performance 66",
      metaDescription:
        "Clé tracteur Fendt à Perpignan. 500 Vario, 700 Vario, 800 Vario, 900 Vario, 1000 Vario. Reprogrammation dans le 66.",
      models: [
        "500 Vario",
        "700 Vario",
        "800 Vario",
        "900 Vario",
        "1000 Vario",
      ],
      content: `Clé Performance 66 reprogramme les clés des tracteurs Fendt à Perpignan et dans les Pyrénées-Orientales. 500 Vario, 700 Vario, 800 Vario, 900 Vario, 1000 Vario : toute la gamme du premium allemand est couverte.\n\nFendt fait partie du groupe AGCO et est réputé pour ses systèmes électroniques de haute technologie, notamment la transmission Vario à variation continue. Notre outillage spécialisé permet la programmation complète des clés à transpondeur Fendt.\n\nService expert pour les exploitants agricoles du 66. Devis gratuit, intervention rapide à Perpignan.`,
    },
    {
      slug: "massey-ferguson",
      name: "Massey Ferguson",
      category: "agricole" as const,
      startingPrice: 339,
      metaTitle:
        "Reprogrammation Clé Massey Ferguson Perpignan | Clé Performance 66",
      metaDescription:
        "Clé tracteur Massey Ferguson à Perpignan. 5S, 6S, 7S, 8S, 9S, Dyna-4, Dyna-6. Reprogrammation agricole dans le 66.",
      models: ["5S", "6S", "7S", "8S", "9S", "Dyna-4", "Dyna-6"],
      content: `Clé Performance 66 intervient sur tous les tracteurs Massey Ferguson à Perpignan. 5S, 6S, 7S, 8S, 9S, Dyna-4, Dyna-6 : toute la gamme MF est couverte pour les agriculteurs des Pyrénées-Orientales.\n\nMassey Ferguson fait partie du groupe AGCO, dont nous maîtrisons les systèmes électroniques partagés avec Fendt et Valtra. Programmation de clés à transpondeur, remplacement de clé perdue, double de clé.\n\nService professionnel et tarifs compétitifs dans le 66. Devis gratuit à Perpignan.`,
    },
    {
      slug: "deutz-fahr",
      name: "Deutz-Fahr",
      category: "agricole" as const,
      startingPrice: 299,
      metaTitle:
        "Reprogrammation Clé Deutz-Fahr Perpignan | Clé Performance 66",
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
      content: `Clé Performance 66 reprogramme les clés Deutz-Fahr à Perpignan et dans les Pyrénées-Orientales. Séries 6, 7, 8, Agrotron, Explorer, Dorado : toute la gamme du groupe SDF est prise en charge.\n\nDeutz-Fahr fait partie du groupe SDF (Same Deutz-Fahr), dont nous maîtrisons les systèmes d'immobilisation électronique. Notre équipement professionnel permet la programmation et le remplacement de clés à transpondeur pour tous les tracteurs Deutz-Fahr.\n\nIntervention rapide pour les exploitants agricoles du 66. Devis gratuit à Perpignan.`,
    },
    {
      slug: "claas",
      name: "Claas",
      category: "agricole" as const,
      startingPrice: 299,
      metaTitle: "Reprogrammation Clé Claas Perpignan | Clé Performance 66",
      metaDescription:
        "Clé Claas à Perpignan. Axion, Arion, Ares, Axos, Lexion, Tucano. Reprogrammation tracteurs et moissonneuses dans le 66.",
      models: ["Axion", "Arion", "Ares", "Axos", "Lexion", "Tucano"],
      content: `Clé Performance 66 intervient sur tous les engins Claas à Perpignan et dans les Pyrénées-Orientales. Tracteurs Axion, Arion, Ares, Axos et moissonneuses-batteuses Lexion, Tucano : toute la gamme Claas est couverte.\n\nLes machines Claas intègrent des systèmes électroniques de sécurité avancés. Notre outillage spécialisé permet la programmation de clés à transpondeur, la gestion des codes immobiliseur et le remplacement de clés perdues sur l'ensemble des modèles.\n\nService dédié aux agriculteurs du 66. Intervention sur site et à Perpignan. Devis gratuit.`,
    },
    {
      slug: "kubota",
      name: "Kubota",
      category: "agricole" as const,
      startingPrice: 139,
      metaTitle: "Reprogrammation Clé Kubota Perpignan | Clé Performance 66",
      metaDescription:
        "Clé Kubota à Perpignan. M Series, L Series, MX, GX, GT. Reprogrammation tracteurs compacts agricoles dans le 66.",
      models: ["M Series", "L Series", "MX", "GX", "GT"],
      content: `Clé Performance 66 reprogramme les clés Kubota à Perpignan et dans les Pyrénées-Orientales. M Series, L Series, MX, GX, GT : la gamme de tracteurs compacts et agricoles Kubota est entièrement couverte.\n\nLes tracteurs Kubota sont très appréciés dans le 66 pour leurs usages polyvalents : maraîchage, viticulture, arboriculture. Notre outillage adapté permet la programmation des systèmes anti-démarrage et le remplacement des clés à transpondeur Kubota.\n\nService rapide et tarifs adaptés pour les agriculteurs des Pyrénées-Orientales. Devis gratuit.`,
    },
    {
      slug: "valtra",
      name: "Valtra",
      category: "agricole" as const,
      startingPrice: 399,
      metaTitle: "Reprogrammation Clé Valtra Perpignan | Clé Performance 66",
      metaDescription:
        "Clé tracteur Valtra à Perpignan. A Series, N Series, T Series, S Series, Q Series. Reprogrammation agricole dans le 66.",
      models: ["A Series", "N Series", "T Series", "S Series", "Q Series"],
      content: `Clé Performance 66 assure la reprogrammation de clés Valtra à Perpignan et dans les Pyrénées-Orientales. A Series, N Series, T Series, S Series, Q Series : toute la gamme du fabricant finlandais est couverte.\n\nValtra fait partie du groupe AGCO, dont nous maîtrisons les systèmes électroniques partagés avec Massey Ferguson et Fendt. Programmation de clés à transpondeur, remplacement de clé perdue, double de clé pour tous les modèles Valtra.\n\nService spécialisé pour les agriculteurs du 66. Intervention rapide à Perpignan et alentours. Devis gratuit.`,
    },
  ];

  for (const brand of brands) {
    await prisma.brand.create({ data: brand });
  }
  console.log(`  ✓ ${brands.length} brands`);

  // --- CITIES ---
  const cities = [
    {
      slug: "perpignan",
      name: "Perpignan",
      postalCode: "66000",
      distanceFromPerpignan: "0 km",
      metaTitle: "Reprogrammation Clé Voiture Perpignan | Clé Performance 66",
      metaDescription:
        "Reprogrammation de clé auto, moto et PL à Perpignan. Double de clé, remplacement clé perdue, toutes marques. Devis gratuit, intervention rapide.",
      content:
        "Clé Performance 66 est votre spécialiste en reprogrammation de clés à Perpignan. Situés au cœur de la ville, nous intervenons rapidement pour tous vos besoins : double de clé voiture, remplacement de clé perdue, reprogrammation de télécommande.\n\nNous prenons en charge tous types de véhicules : voitures, motos, poids lourds, engins agricoles et de chantier. Toutes marques confondues. Notre atelier à Perpignan est équipé du matériel professionnel le plus récent pour vous garantir un service fiable et rapide.\n\nContactez Clé Performance 66 pour un devis gratuit. Intervention possible en urgence.",
    },
    {
      slug: "canet-en-roussillon",
      name: "Canet-en-Roussillon",
      postalCode: "66140",
      distanceFromPerpignan: "12 km",
      metaTitle:
        "Reprogrammation Clé Voiture Canet-en-Roussillon | Clé Performance 66",
      metaDescription:
        "Reprogrammation de clé voiture à Canet-en-Roussillon (66140). Double, remplacement, dépannage rapide. À seulement 12 km de Perpignan.",
      content:
        "Vous habitez Canet-en-Roussillon et avez besoin d'une reprogrammation de clé ? Clé Performance 66 intervient à Canet-en-Roussillon et ses environs, à seulement 12 km de notre atelier de Perpignan.\n\nQue ce soit pour un double de clé, un remplacement de clé perdue ou une réparation, nous nous déplaçons rapidement à Canet-en-Roussillon. Voitures, motos, utilitaires : toutes marques prises en charge.\n\nN'hésitez pas à nous contacter pour un devis gratuit et une intervention rapide.",
    },
    {
      slug: "saint-esteve",
      name: "Saint-Estève",
      postalCode: "66240",
      distanceFromPerpignan: "7 km",
      metaTitle:
        "Reprogrammation Clé Voiture Saint-Estève | Clé Performance 66",
      metaDescription:
        "Clé voiture à Saint-Estève (66240). Double, reprogrammation, dépannage. Intervention rapide depuis Perpignan, à 7 km.",
      content:
        "Clé Performance 66 dessert Saint-Estève pour tous vos besoins en reprogrammation de clés. À seulement 7 km de Perpignan, nous intervenons rapidement sur votre commune.\n\nDouble de clé voiture, remplacement de clé moto, programmation de télécommande : notre expertise couvre tous les types de véhicules et toutes les marques. Devis gratuit et tarifs compétitifs pour les habitants de Saint-Estève.",
    },
    {
      slug: "rivesaltes",
      name: "Rivesaltes",
      postalCode: "66600",
      distanceFromPerpignan: "10 km",
      metaTitle: "Reprogrammation Clé Voiture Rivesaltes | Clé Performance 66",
      metaDescription:
        "Clé voiture à Rivesaltes (66600). Reprogrammation, double, remplacement clé perdue. À 10 km de Perpignan. Devis gratuit.",
      content:
        "Besoin d'un double de clé ou d'une reprogrammation à Rivesaltes ? Clé Performance 66 est à seulement 10 km et intervient rapidement sur votre commune.\n\nToutes marques de voitures, motos et utilitaires. Service professionnel avec matériel de dernière génération. Contactez-nous pour un devis gratuit.",
    },
    {
      slug: "cabestany",
      name: "Cabestany",
      postalCode: "66330",
      distanceFromPerpignan: "5 km",
      metaTitle: "Reprogrammation Clé Voiture Cabestany | Clé Performance 66",
      metaDescription:
        "Clé voiture à Cabestany (66330). Double, reprogrammation, clé perdue. À 5 km de Perpignan. Intervention rapide, devis gratuit.",
      content:
        "Cabestany est l'une des communes les plus proches de notre atelier de Perpignan. Clé Performance 66 intervient en quelques minutes pour tous vos besoins en reprogrammation de clés.\n\nDouble de clé, remplacement de clé perdue ou volée, reprogrammation de télécommande : notre équipe est à votre service. Toutes marques, tous véhicules.",
    },
    {
      slug: "thuir",
      name: "Thuir",
      postalCode: "66300",
      distanceFromPerpignan: "15 km",
      metaTitle: "Reprogrammation Clé Voiture Thuir | Clé Performance 66",
      metaDescription:
        "Clé voiture à Thuir (66300). Reprogrammation, double, dépannage rapide. À 15 km de Perpignan. Clé Performance 66.",
      content:
        "Vous êtes à Thuir et avez besoin d'une reprogrammation de clé ? Clé Performance 66 dessert Thuir et toute la vallée des Aspres. À 15 km de Perpignan, nous intervenons dans les meilleurs délais.\n\nVoitures, motos, utilitaires, engins agricoles : nous sommes équipés pour tout type de véhicule. Contactez-nous pour un devis gratuit.",
    },
    {
      slug: "elne",
      name: "Elne",
      postalCode: "66200",
      distanceFromPerpignan: "14 km",
      metaTitle: "Reprogrammation Clé Voiture Elne | Clé Performance 66",
      metaDescription:
        "Clé voiture à Elne (66200). Double, reprogrammation, remplacement. À 14 km de Perpignan. Intervention rapide dans le 66.",
      content:
        "Clé Performance 66 intervient à Elne pour tous vos besoins en reprogrammation de clés automobile. À seulement 14 km de Perpignan, notre équipe se déplace rapidement.\n\nDouble de clé, clé perdue, programmation télécommande : toutes marques prises en charge. Service professionnel et tarifs compétitifs.",
    },
    {
      slug: "pollestres",
      name: "Pollestres",
      postalCode: "66450",
      distanceFromPerpignan: "8 km",
      metaTitle: "Reprogrammation Clé Voiture Pollestres | Clé Performance 66",
      metaDescription:
        "Clé voiture à Pollestres (66450). Reprogrammation, double, dépannage. À 8 km de Perpignan. Devis gratuit.",
      content:
        "Pollestres, à seulement 8 km de Perpignan, est dans notre zone d'intervention prioritaire. Clé Performance 66 assure la reprogrammation de clés pour tous véhicules sur votre commune.\n\nService rapide, matériel professionnel, toutes marques. Appelez-nous pour un devis gratuit et une intervention dans la journée.",
    },
    {
      slug: "le-soler",
      name: "Le Soler",
      postalCode: "66270",
      distanceFromPerpignan: "9 km",
      metaTitle: "Reprogrammation Clé Voiture Le Soler | Clé Performance 66",
      metaDescription:
        "Clé voiture au Soler (66270). Double, reprogrammation, remplacement clé perdue. À 9 km de Perpignan.",
      content:
        "Clé Performance 66 dessert Le Soler pour la reprogrammation de clés auto, moto et utilitaires. À 9 km de Perpignan, nous intervenons rapidement sur votre commune.\n\nToutes marques, tous types de clés. Contactez-nous pour un devis gratuit.",
    },
    {
      slug: "pia",
      name: "Pia",
      postalCode: "66380",
      distanceFromPerpignan: "8 km",
      metaTitle: "Reprogrammation Clé Voiture Pia | Clé Performance 66",
      metaDescription:
        "Clé voiture à Pia (66380). Reprogrammation, double, dépannage rapide. À 8 km de Perpignan. Clé Performance 66.",
      content:
        "Besoin d'une reprogrammation de clé à Pia ? Clé Performance 66 intervient rapidement sur votre commune, située à seulement 8 km de Perpignan.\n\nDouble de clé, remplacement, réparation : nous sommes votre solution pour toutes les marques de véhicules. Devis gratuit.",
    },
    {
      slug: "toulouges",
      name: "Toulouges",
      postalCode: "66350",
      distanceFromPerpignan: "7 km",
      metaTitle: "Reprogrammation Clé Voiture Toulouges | Clé Performance 66",
      metaDescription:
        "Clé voiture à Toulouges (66350). Double, reprogrammation, dépannage. À 7 km de Perpignan.",
      content:
        "Clé Performance 66 intervient à Toulouges et ses environs pour la reprogrammation de clés. À 7 km de Perpignan, notre équipe arrive rapidement.\n\nService professionnel pour voitures, motos, utilitaires. Toutes marques prises en charge. Contactez-nous.",
    },
    {
      slug: "saint-cyprien",
      name: "Saint-Cyprien",
      postalCode: "66750",
      distanceFromPerpignan: "18 km",
      metaTitle:
        "Reprogrammation Clé Voiture Saint-Cyprien | Clé Performance 66",
      metaDescription:
        "Clé voiture à Saint-Cyprien (66750). Reprogrammation, double, remplacement. À 18 km de Perpignan. Intervention dans le 66.",
      content:
        "Clé Performance 66 dessert Saint-Cyprien pour tous vos besoins en reprogrammation de clés. À 18 km de Perpignan, nous intervenons dans les meilleurs délais sur la côte.\n\nVoitures, motos, utilitaires : toutes marques. Devis gratuit et intervention rapide.",
    },
    {
      slug: "argeles-sur-mer",
      name: "Argelès-sur-Mer",
      postalCode: "66700",
      distanceFromPerpignan: "22 km",
      metaTitle:
        "Reprogrammation Clé Voiture Argelès-sur-Mer | Clé Performance 66",
      metaDescription:
        "Clé voiture à Argelès-sur-Mer (66700). Double, reprogrammation, dépannage. À 22 km de Perpignan. Clé Performance 66.",
      content:
        "Vous êtes à Argelès-sur-Mer et avez besoin d'une reprogrammation de clé ? Clé Performance 66 intervient sur la côte Vermeille. À 22 km de Perpignan, nous nous déplaçons pour vous dépanner.\n\nTous véhicules, toutes marques. Service professionnel et tarifs compétitifs. Contactez-nous pour un devis gratuit.",
    },
    {
      slug: "le-boulou",
      name: "Le Boulou",
      postalCode: "66160",
      distanceFromPerpignan: "20 km",
      metaTitle: "Reprogrammation Clé Voiture Le Boulou | Clé Performance 66",
      metaDescription:
        "Clé voiture au Boulou (66160). Reprogrammation, double, remplacement. À 20 km de Perpignan. Devis gratuit.",
      content:
        "Le Boulou, aux portes de l'Espagne, est couvert par Clé Performance 66. À 20 km de Perpignan, nous intervenons rapidement pour la reprogrammation de vos clés.\n\nVoitures, motos, poids lourds (zone frontalière oblige). Toutes marques. Contactez-nous pour un devis gratuit.",
    },
    {
      slug: "ceret",
      name: "Céret",
      postalCode: "66400",
      distanceFromPerpignan: "30 km",
      metaTitle: "Reprogrammation Clé Voiture Céret | Clé Performance 66",
      metaDescription:
        "Clé voiture à Céret (66400). Double, reprogrammation, dépannage. À 30 km de Perpignan. Intervention dans le Vallespir.",
      content:
        "Clé Performance 66 dessert Céret et le Vallespir pour la reprogrammation de clés. À 30 km de Perpignan, nous intervenons dans cette belle capitale des arts.\n\nTous types de véhicules et engins agricoles pour les exploitations de la vallée. Devis gratuit.",
    },
    {
      slug: "prades",
      name: "Prades",
      postalCode: "66500",
      distanceFromPerpignan: "45 km",
      metaTitle: "Reprogrammation Clé Voiture Prades | Clé Performance 66",
      metaDescription:
        "Clé voiture à Prades (66500). Reprogrammation, double, remplacement. À 45 km de Perpignan. Intervention dans le Conflent.",
      content:
        "Prades et le Conflent sont couverts par Clé Performance 66. À 45 km de Perpignan, nous nous déplaçons pour vous offrir notre service de reprogrammation de clés.\n\nParticulièrement adapté pour les engins agricoles et tracteurs de la région. Toutes marques de véhicules prises en charge. Contactez-nous.",
    },
  ];

  for (const city of cities) {
    await prisma.city.create({ data: city });
  }
  console.log(`  ✓ ${cities.length} cities`);

  // --- SERVICES ---
  const services = [
    {
      slug: "cle-voiture",
      title: "Reproduction & Programmation de Clés Auto",
      shortTitle: "Clé voiture",
      description:
        "Clé voiture perdue, double ou transpondeur à Perpignan. Découpe Dolphin, OBD, keyless, perte totale acceptée. Intervention mobile dans le 66.",
      metaTitle:
        "Reproduction & Programmation Clé Voiture Perpignan | Clé Performance 66",
      metaDescription:
        "Clé voiture perdue, double ou transpondeur à Perpignan. Découpe Dolphin, OBD, perte totale acceptée. Intervention mobile chez vous dans le 66. Devis gratuit — jusqu'à -50 % vs concessionnaire.",
      icon: "car",
      features: [
        "Découpe mécanique de clés simples (découpeuse Dolphin)",
        "Clés à transpondeur et télécommandes (programmation OBD)",
        "Clés tout-en-un : lame + transpondeur + télécommande intégrés",
        "Perte totale : reprogrammation complète sans clé existante",
        "Intervention mobile chez vous — sans remorquage",
        "Toutes marques : Renault, Peugeot, VW, BMW, Toyota...",
      ],
      content:
        "Clé Performance 66 est votre spécialiste en reproduction et programmation de clés de voiture à Perpignan. Nous intervenons directement chez vous, sur votre lieu de travail ou sur le parking de votre choix dans tout le département des Pyrénées-Orientales — plus besoin de faire remorquer votre véhicule.\n\nNos prestations couvrent l'ensemble des situations : clés simples découpées mécaniquement avec notre découpeuse professionnelle Dolphin, clés à transpondeur et télécommandes programmées sur le véhicule via OBD ou outil spécifique, clés tout-en-un intégrant lame, transpondeur et télécommande, et cas de perte totale (aucune clé existante) traités par reprogrammation OBD ou démontage du calculateur selon le véhicule.\n\nToutes les marques sont prises en charge : Renault, Peugeot, Citroën, Volkswagen, Toyota, Ford, Mercedes-Benz, BMW, Audi, Fiat, Opel, Nissan, Hyundai, Kia, Seat, Skoda, et bien d'autres. Notre valise diagnostic et nos programmateurs de clés couvrent l'ensemble du parc automobile actuel.\n\nNos tarifs sont jusqu'à 50 % moins chers qu'en concession, pour un résultat identique. Contactez Clé Performance 66 pour un devis gratuit et une intervention rapide dans le 66.",
    },
    {
      slug: "cle-moto",
      title: "Reproduction & Programmation de Clés Moto",
      shortTitle: "Clé moto",
      description:
        "Clé moto ou scooter perdue, double ou anti-démarrage à Perpignan. HISS, YIM, KIPASS et plus. Intervention mobile dans le 66.",
      metaTitle:
        "Reproduction & Programmation Clé Moto Perpignan | Clé Performance 66",
      metaDescription:
        "Clé moto perdue ou double à Perpignan. HISS, YIM, KIPASS, BMS-C — tous systèmes anti-démarrage. Perte totale acceptée. Intervention mobile dans le 66. Devis gratuit.",
      icon: "bike",
      features: [
        "Découpe et reproduction de clés moto (mécaniques et transpondeur)",
        "Programmation anti-démarrage : HISS, YIM, KIPASS, BMS-C, DES, TIS...",
        "Clés à transpondeur, FOB et télécommandes scooter",
        "Perte totale : reprogrammation complète de l'immobiliseur",
        "Intervention mobile sur votre lieu de stationnement",
        "Yamaha, Honda, Kawasaki, Suzuki, BMW, Ducati, KTM, Aprilia, Piaggio...",
      ],
      content:
        "Spécialiste de la reproduction et programmation de clés moto à Perpignan, Clé Performance 66 intervient directement chez vous ou sur votre lieu de stationnement dans tout le département 66. Perte de clé, double de sécurité ou remplacement après casse : nous gérons tous les cas.\n\nNotre équipement couvre les systèmes anti-démarrage de toutes les grandes marques : HISS (Honda), YIM et YIM2 (Yamaha), KIPASS et KIPASS2 (Kawasaki), SAIS (Suzuki), BMS-C (BMW Motorrad), DES (Ducati), TIS et TIS2 (Triumph), KTM Immobilizer, ainsi que Aprilia, Piaggio, Vespa et Harley-Davidson (TSSM, Smart Security). Clés simples, clés à transpondeur, FOB et télécommandes scooters : tout est pris en charge.\n\nEn cas de perte totale (aucune clé existante), notre matériel permet la reprogrammation complète de l'immobiliseur sans recourir au constructeur. Tarif nettement inférieur à celui d'un concessionnaire moto.",
    },
    {
      slug: "cle-poids-lourd",
      title: "Reproduction & Programmation de Clés Poids Lourd",
      shortTitle: "Clé poids lourd",
      description:
        "Clé camion ou utilitaire perdue à Perpignan. OBD HD, CAN J1939, lecture EEPROM. Intervention sur site pour minimiser l'immobilisation dans le 66.",
      metaTitle:
        "Reproduction Clé Poids Lourd & Utilitaire Perpignan | Clé Performance 66",
      metaDescription:
        "Clé camion et utilitaire à Perpignan. Renault Trucks, MAN, Mercedes, DAF, Iveco. OBD HD, J1939, EEPROM. Intervention sur site dans le 66. Devis gratuit.",
      icon: "truck",
      features: [
        "Clés camion et utilitaire (découpe + programmation)",
        "Diagnostic OBD HD et protocole CAN bus J1939",
        "Lecture EEPROM pour immobiliseurs complexes",
        "Intervention sur site : aire de repos, dépôt, bord de route",
        "Perte totale prise en charge",
        "Renault Trucks, MAN, Mercedes, DAF, Iveco, Volvo, Ford Transit...",
      ],
      content:
        "L'immobilisation d'un poids lourd ou d'un utilitaire professionnel représente une perte directe d'exploitation. Clé Performance 66 minimise ce délai en intervenant directement sur site — aire de repos, dépôt, entrepôt ou bord de route — avec tout l'équipement nécessaire dans les Pyrénées-Orientales.\n\nNos outils de diagnostic spécialisés poids lourds (protocole OBD HD, CAN bus J1939, lecture EEPROM) nous permettent de traiter les immobiliseurs des principales marques : Renault Trucks (T, C, K, D, Premium, Magnum), Mercedes (Actros, Atego, Antos, Arocs, Sprinter), MAN (TGX, TGS, TGL, TGM), DAF (XF, CF, LF, XG, XD), Iveco (S-Way, Stralis, Daily, Eurocargo), Volvo Trucks (FH, FM, FL), Ford Transit, Peugeot Boxer, Citroën Jumper et Fiat Ducato.\n\nEn cas de perte totale de toutes les clés, l'intervention peut nécessiter une lecture EEPROM ou un accès au calculateur — des opérations que nous maîtrisons avec notre outillage spécialisé. Service disponible en urgence pour les transporteurs et professionnels du 66.",
    },
    {
      slug: "cle-agricole",
      title: "Reproduction & Programmation de Clés Tracteur & Engins Agricoles",
      shortTitle: "Clé agricole",
      description:
        "Clé tracteur perdue à Perpignan. OBD J1939 agricole, intervention sur exploitation en urgence dans le 66. John Deere, Fendt, Claas, New Holland...",
      metaTitle:
        "Reproduction Clé Tracteur & Engin Agricole Perpignan | Clé Performance 66",
      metaDescription:
        "Clé tracteur agricole à Perpignan. John Deere, New Holland, Fendt, Claas, Massey Ferguson. Intervention sur exploitation, OBD J1939, urgence récolte dans le 66.",
      icon: "tractor",
      features: [
        "Clés tracteur mécaniques et à transpondeur (ID46, Texas 4D70)",
        "Programmation OBD / CAN J1939 agricole",
        "Intervention directement sur exploitation en urgence",
        "Perte totale : lecture EEPROM ou démontage calculateur",
        "John Deere, New Holland, Fendt, Claas, Massey Ferguson, Kubota...",
        "Adaptation aux périodes de récolte et travaux urgents",
      ],
      content:
        "Clé Performance 66 assure la reproduction et la programmation de clés de tracteurs et engins agricoles à Perpignan et dans tout le département des Pyrénées-Orientales. Nous intervenons directement sur votre exploitation pour éviter toute interruption, notamment en période de travaux ou de récolte.\n\nNotre matériel couvre les systèmes électroniques de toutes les grandes marques du machinisme agricole : John Deere (séries 5R/6R/7R/8R, CAN J1939, CommandPRO), New Holland, Case IH, Fendt (Vario TMS), Massey Ferguson, Deutz-Fahr, Claas (CMATIC), Valtra, Kubota, Iseki et Yanmar. Des clés mécaniques plates aux télécommandes avancées avec transpondeur ID46 ou Texas 4D70, nous couvrons l'ensemble du parc.\n\nEn cas de perte totale, la reprogrammation s'effectue via prise OBD ou, si nécessaire, démontage et lecture de la centrale électronique. En pleine période de moisson, chaque heure compte — nous adaptons notre intervention à l'urgence de votre situation.",
    },
    {
      slug: "cle-engin-chantier",
      title: "Reproduction & Programmation de Clés Engins de Chantier",
      shortTitle: "Clé engin de chantier",
      description:
        "Clés pelleteuses, chargeuses, grues et engins BTP à Perpignan. Intervention sur chantier dans le 66. Caterpillar, JCB, Komatsu, Liebherr, Volvo CE...",
      metaTitle:
        "Reproduction Clé Engin de Chantier Perpignan | Clé Performance 66",
      metaDescription:
        "Clé engin de chantier à Perpignan. Pelleteuse, chargeuse, grue, nacelle. Caterpillar, Komatsu, JCB, Liebherr. Intervention sur chantier dans le 66. Devis gratuit.",
      icon: "construction",
      features: [
        "Clés pelleteuses, mini-pelles, chargeuses, bulldozers",
        "Grues, nacelles élévatrices et compacteurs",
        "Programmation anti-démarrage TP (OBD ou centrale électronique)",
        "Intervention directement sur chantier — sans déplacement de l'engin",
        "Perte totale prise en charge",
        "Caterpillar, Komatsu, JCB, Liebherr, Volvo CE, Hitachi, Bobcat...",
      ],
      content:
        "Clé Performance 66 intervient sur les engins de chantier à Perpignan et dans les Pyrénées-Orientales. Pelleteuses, chargeuses, bulldozers, grues, nacelles élévatrices ou compacteurs : nous reproduisons et reprogrammons les clés de tout le matériel BTP directement sur votre chantier.\n\nLes constructeurs couverts comprennent Caterpillar, Komatsu, JCB, Liebherr, Volvo CE, Hitachi, Case CE, Doosan, Takeuchi et Bobcat. Comme pour les engins agricoles, la programmation s'effectue via OBD ou par démontage du boîtier de commande en cas de perte totale.\n\nL'arrêt d'un engin peut bloquer l'avancement de tout un chantier. Notre déplacement sur site et notre intervention rapide permettent de limiter au maximum les délais et les surcoûts. Contactez Clé Performance 66 pour toute urgence dans le 66.",
    },
    {
      slug: "reprogrammation-moteur",
      title: "Reprogrammation Moteur ECU",
      shortTitle: "Reprog moteur",
      description:
        "Optimisation moteur Stage 1, désactivation FAP/EGR/AdBlue et correction logicielle ECU à Perpignan. VP, poids lourd et agricole. Intervention mobile dans le 66.",
      metaTitle:
        "Reprogrammation Moteur ECU Perpignan | Stage 1, FAP EGR AdBlue | Clé Performance 66",
      metaDescription:
        "Reprogrammation moteur ECU à Perpignan : Stage 1 gain de puissance, désactivation FAP, EGR, AdBlue. Voitures, camions, tracteurs. Intervention mobile dans les Pyrénées-Orientales (66). Devis gratuit.",
      icon: "wrench",
      features: [
        "Stage 1 : gain de puissance et de couple (VP diesel et essence)",
        "Stage 1 PL : optimisation moteur camion et utilitaire",
        "Désactivation FAP / DPF (usage hors route ou remplacement physique)",
        "Désactivation EGR (réduction encrassement moteur)",
        "Désactivation AdBlue / SCR (PL et agricole hors route)",
        "Correction défauts logiciels ECU constructeur",
        "Reprogrammation moteur agricole (tracteurs, engins)",
        "Intervention mobile avec valise diagnostic spécialisée",
      ],
      content:
        "Clé Performance 66 propose la reprogrammation du calculateur moteur (ECU) à Perpignan et dans tout le département des Pyrénées-Orientales. Nous intervenons directement chez vous — garage, exploitation agricole, dépôt de transport — avec notre valise diagnostic et nos outils de reprogrammation professionnels.\n\nLa reprogrammation Stage 1 consiste à modifier les paramètres d'injection, de suralimentation et de gestion moteur pour libérer le potentiel réel de votre moteur tout en conservant la fiabilité de l'ensemble. Gain moyen constaté : +15 à +30 % de puissance et de couple selon le moteur, avec une meilleure réponse à l'accélérateur et souvent une consommation optimisée.\n\nNous intervenons également sur les systèmes de dépollution : désactivation FAP/DPF (filtre à particules), désactivation EGR (vanne de recirculation des gaz d'échappement) et désactivation AdBlue/SCR pour les poids lourds et engins agricoles utilisés en dehors de la voie publique ou après remplacement physique des organes.\n\nLa correction logicielle permet de supprimer des défauts apparus suite à une mise à jour constructeur ou un remplacement de pièce (boîtier papillon, turbo, injecteurs). Pour les agriculteurs, la reprogrammation des tracteurs améliore souvent la consommation et l'efficacité sur les travaux de traction.\n\nAttention : certaines modifications (désactivation FAP, EGR, AdBlue) ne sont légales que pour un usage hors homologation route (compétition, engins non-immatriculés, export). Nous vous conseillons sur les options adaptées à votre situation. Devis gratuit — contactez Clé Performance 66.",
    },
    {
      slug: "climatisation-pl-agricole",
      title: "Recharge & Diagnostic Climatisation PL & Agricole",
      shortTitle: "Climatisation PL & Agricole",
      description:
        "Diagnostic, recharge climatisation R134a et R1234yf pour poids lourds et engins agricoles à Perpignan. Station bi-gaz, intervention sur site dans le 66.",
      metaTitle:
        "Recharge Climatisation Poids Lourd & Tracteur Perpignan | Clé Performance 66",
      metaDescription:
        "Recharge climatisation poids lourd et tracteur agricole à Perpignan. R134a, R1234yf, diagnostic fuite, filtre déshydrateur. Intervention sur site dans le 66. Attestation F-Gaz. Devis gratuit.",
      icon: "wind",
      features: [
        "Diagnostic complet et contrôle d'étanchéité du circuit",
        "Recharge R134a (poids lourds, tracteurs et engins anciens)",
        "Recharge R1234yf (véhicules récents et nouvelles normes)",
        "Station bi-gaz : couvre tous les PL et engins agricoles",
        "Remplacement filtre déshydrateur",
        "Remplacement joints et composants simples",
        "Intervention sur site : dépôt, exploitation, aire de repos",
        "Technicien certifié — attestation F-Gaz (fluides frigorigènes)",
      ],
      content:
        "La climatisation des poids lourds et des engins agricoles est souvent laissée de côté faute d'atelier spécialisé à proximité. Clé Performance 66 comble ce manque en proposant un service complet de diagnostic et de recharge de climatisation directement sur votre site dans les Pyrénées-Orientales.\n\nNotre station bi-gaz prend en charge les deux fluides frigorigènes : le R134a, utilisé sur la grande majorité des poids lourds et tracteurs agricoles actuels et anciens, ainsi que le R1234yf, présent sur les véhicules les plus récents répondant aux nouvelles normes environnementales européennes.\n\nL'intervention débute par un diagnostic complet du circuit : contrôle des pressions, recherche de fuites, vérification des composants. En cas de fuite identifiée, nous remplaçons les joints défectueux et le filtre déshydrateur avant la recharge. La cabine retrouve rapidement une température confortable — essentiel en été dans le Sud de la France où les températures dépassent régulièrement 35°C.\n\nNous intervenons sur tous les modèles de poids lourds (Renault Trucks, Mercedes Actros, MAN, Scania, DAF, Iveco, Volvo) et d'engins agricoles (John Deere, New Holland, Fendt, Claas, Massey Ferguson, Kubota). Notre technicien est certifié et détient l'attestation d'aptitude à la manipulation des fluides frigorigènes réglementée par la directive F-Gaz.\n\nDevis gratuit et intervention rapide dans le 66 — appelez Clé Performance 66.",
    },
  ];

  for (const service of services) {
    await prisma.service.create({ data: service });
  }
  console.log(`  ✓ ${services.length} services`);

  // --- FAQ ---
  const faqItems = [
    {
      question: "Combien coûte une reprogrammation de clé de voiture ?",
      answer:
        "Le tarif dépend de la marque, du modèle et du type de clé (simple, télécommande, keyless). Contactez-nous pour un devis gratuit et personnalisé. Nos prix sont parmi les plus compétitifs du département.",
      order: 0,
    },
    {
      question: "Combien de temps prend une reprogrammation de clé ?",
      answer:
        "En général, une reprogrammation de clé prend entre 30 minutes et 2 heures selon le véhicule et le type de clé. Nous nous efforçons d'intervenir le plus rapidement possible.",
      order: 1,
    },
    {
      question: "Pouvez-vous faire un double de clé sans l'originale ?",
      answer:
        "Oui, dans la plupart des cas nous pouvons programmer une nouvelle clé même si vous avez perdu toutes vos clés. Notre équipement professionnel nous permet de reprogrammer directement le calculateur du véhicule.",
      order: 2,
    },
    {
      question: "Quelles marques de voitures prenez-vous en charge ?",
      answer:
        "Nous intervenons sur toutes les marques : Renault, Peugeot, Citroën, Volkswagen, Toyota, Ford, Mercedes, BMW, Audi, Fiat, Opel, Dacia, Nissan, Hyundai, Kia, Seat, Skoda, Volvo, et bien d'autres.",
      order: 3,
    },
    {
      question: "Intervenez-vous en dehors de Perpignan ?",
      answer:
        "Oui, nous couvrons tout le département des Pyrénées-Orientales (66) : Canet-en-Roussillon, Saint-Estève, Rivesaltes, Cabestany, Thuir, Elne, Argelès-sur-Mer, Céret, Prades, et toutes les communes environnantes.",
      order: 4,
    },
    {
      question: "Faites-vous aussi les clés de moto et scooter ?",
      answer:
        "Absolument ! Nous reprogrammons les clés de motos et scooters de toutes marques : Yamaha, Honda, Kawasaki, Suzuki, BMW, Ducati, Triumph, KTM, et plus encore.",
      order: 5,
    },
    {
      question: "Pouvez-vous intervenir en urgence ?",
      answer:
        "Oui, nous proposons un service d'intervention rapide. Appelez-nous et nous ferons notre maximum pour vous dépanner dans les meilleurs délais, du lundi au vendredi.",
      order: 6,
    },
    {
      question: "La clé reprogrammée est-elle identique à l'originale ?",
      answer:
        "La clé reprogrammée fonctionne exactement comme une clé d'origine : démarrage, verrouillage/déverrouillage, télécommande. Elle est programmée directement dans le système du véhicule.",
      order: 7,
    },
    {
      question: "Proposez-vous aussi la reprogrammation moteur ECU ?",
      answer:
        "Oui, nous réalisons la reprogrammation du calculateur moteur (ECU) pour les voitures diesel et essence, les poids lourds et les tracteurs agricoles. Cela inclut le Stage 1 (gain de puissance et de couple), la désactivation FAP/EGR et AdBlue pour usage hors route, et la correction de défauts logiciels constructeur. Devis gratuit sur appel.",
      order: 8,
    },
    {
      question:
        "Intervenez-vous pour la climatisation des poids lourds et tracteurs ?",
      answer:
        "Absolument. Nous proposons le diagnostic et la recharge de climatisation pour les poids lourds (Renault Trucks, MAN, Scania, Iveco...) et les engins agricoles (John Deere, New Holland, Fendt...), directement sur site. Notre station bi-gaz prend en charge les fluides R134a et R1234yf. Attestation F-Gaz.",
      order: 9,
    },
    {
      question:
        "Intervenez-vous pour les professionnels (transporteurs, agriculteurs, garagistes) ?",
      answer:
        "Oui, c'est même notre spécialité. Nous intervenons directement sur votre site : dépôt, exploitation agricole, chantier ou aire de repos. Clés PL et agricoles, reprogrammation moteur, recharge climatisation — seul opérateur itinérant dans le 66 à combiner ces trois expertises. Tarifs préférentiels pour les sous-traitances MRA et garagistes.",
      order: 10,
    },
  ];

  for (const faq of faqItems) {
    await prisma.faqItem.create({ data: faq });
  }
  console.log(`  ✓ ${faqItems.length} FAQ items`);

  // --- TESTIMONIALS ---
  const testimonials = [
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

  for (const testimonial of testimonials) {
    await prisma.testimonial.create({ data: testimonial });
  }
  console.log(`  ✓ ${testimonials.length} testimonials`);

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
