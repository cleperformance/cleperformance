import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/data/site-config";
import {
  Bike,
  Car,
  Check,
  Phone,
  Tractor,
  Truck,
  Wind,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const pricingCategories = [
  {
    title: "Automobile",
    icon: <Car className="h-7 w-7" />,
    startingPrice: 129,
    description: "Voitures toutes marques",
    features: [
      "Double de clé à transpondeur",
      "Remplacement clé perdue",
      "Programmation télécommande",
      "Système keyless entry",
      "Carte mains libres",
    ],
    brands: "Renault, Peugeot, VW, Toyota, Mercedes, BMW...",
    href: "/marques",
  },
  {
    title: "Moto & Scooter",
    icon: <Bike className="h-7 w-7" />,
    startingPrice: 119,
    description: "Motos et scooters toutes marques",
    features: [
      "Double de clé moto",
      "Remplacement clé perdue",
      "Programmation anti-démarrage",
      "Clé à transpondeur",
      "FOB et télécommande",
    ],
    brands: "Yamaha, Honda, Kawasaki, BMW Motorrad, Ducati...",
    href: "/marques",
  },
  {
    title: "Poids Lourd & Utilitaire",
    icon: <Truck className="h-7 w-7" />,
    startingPrice: 239,
    description: "Camions, fourgons et utilitaires",
    features: [
      "Double de clé PL",
      "Remplacement clé perdue",
      "Programmation immobiliseur",
      "Intervention prioritaire pro",
      "Minimisation temps d'arrêt",
    ],
    brands: "Renault Trucks, Mercedes, MAN, Iveco, DAF...",
    href: "/marques",
  },
  {
    title: "Agricole & TP",
    icon: <Tractor className="h-7 w-7" />,
    startingPrice: 139,
    description: "Tracteurs et engins agricoles",
    features: [
      "Double de clé tracteur",
      "Remplacement clé perdue",
      "Programmation anti-démarrage",
      "Intervention sur site",
      "Tous systèmes électroniques",
    ],
    brands: "John Deere, New Holland, Fendt, Claas, Kubota...",
    href: "/marques",
  },
  {
    title: "Reprog Moteur ECU",
    icon: <Wrench className="h-7 w-7" />,
    startingPrice: 150,
    description: "VP diesel, PL et agricole",
    features: [
      "Stage 1 : gain puissance et couple",
      "Désactivation FAP / EGR",
      "Désactivation AdBlue / SCR",
      "Correction logicielle ECU",
      "Reprog moteur agricole",
    ],
    brands: "Volkswagen, BMW, Mercedes, Renault, Peugeot, John Deere...",
    href: "/services/reprogrammation-moteur",
  },
  {
    title: "Climatisation PL & Agri",
    icon: <Wind className="h-7 w-7" />,
    startingPrice: 80,
    description: "Poids lourds et engins agricoles",
    features: [
      "Diagnostic et contrôle d'étanchéité",
      "Recharge R134a (PL et tracteurs)",
      "Recharge R1234yf (véhicules récents)",
      "Remplacement filtre déshydrateur",
      "Intervention sur site",
    ],
    brands: "Renault Trucks, MAN, Scania, John Deere, New Holland...",
    href: "/services/climatisation-pl-agricole",
  },
];

export function PricingSection() {
  return (
    <section className="bg-[#F8F9FB] py-16 sm:py-24" id="tarifs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4 text-[#C82020]">
            Nos tarifs
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-[#1C0A08] sm:text-4xl">
            Des tarifs transparents et compétitifs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Clés, reprog moteur, climatisation — jusqu&apos;à 50% moins cher
            qu&apos;en concession. Devis gratuit sans engagement.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pricingCategories.map((cat) => (
            <Card
              key={cat.title}
              className="relative flex h-full flex-col border-border/50 transition-all hover:shadow-lg"
            >
              <CardHeader className="pb-4">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#C82020]/10 text-[#C82020]">
                  {cat.icon}
                </div>
                <CardTitle className="text-lg text-[#1C0A08]">
                  {cat.title}
                </CardTitle>
                <CardDescription>{cat.description}</CardDescription>
              </CardHeader>
              <div className="mt-auto px-6 pb-6">
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground">
                    À partir de
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-[#1C0A08]">
                      {cat.startingPrice}€
                    </span>
                    <span className="text-sm text-muted-foreground">TTC</span>
                  </div>
                </div>

                <ul className="mb-6 space-y-2">
                  {cat.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-[#4A6A8A]"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#C82020]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className="mb-4 text-xs text-muted-foreground">
                  {cat.brands}
                </p>

                <Button asChild variant="accent" className="w-full">
                  <a href={siteConfig.phoneHref}>
                    <Phone className="mr-2 h-4 w-4" />
                    Devis gratuit
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          * Les tarifs varient selon le modèle, le type de clé et la complexité
          de l&apos;intervention.{" "}
          <Link
            href="/marques"
            className="font-medium text-[#C82020] hover:underline"
          >
            Voir les tarifs par marque →
          </Link>
        </p>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          ** Interventions disponibles après 19h et le week-end en{" "}
          <span className="font-medium text-[#1C0A08]">astreinte</span> —
          supplément tarifaire applicable.
        </p>
      </div>
    </section>
  );
}
