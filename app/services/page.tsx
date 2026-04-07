import { CtaSection } from "@/components/sections/cta-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/data/site-config";
import { getBreadcrumbJsonLd } from "@/lib/json-ld";
import { generatePageMetadata } from "@/lib/metadata";
import { getServices } from "@/lib/queries";
import {
  ArrowRight,
  Bike,
  Car,
  HardHat,
  Key,
  Tractor,
  Truck,
  Wind,
  Wrench,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title:
    "Nos Services — Clés, Reprog Moteur, Climatisation | Clé Performance 66",
  description:
    "Tous nos services à Perpignan : reproduction de clés auto/moto/PL/agricole, reprogrammation moteur ECU (Stage 1, FAP, EGR, AdBlue), recharge climatisation PL & Agricole. Devis gratuit dans le 66.",
  path: "/services",
});

const iconMap: Record<string, React.ReactNode> = {
  car: <Car className="h-8 w-8" />,
  bike: <Bike className="h-8 w-8" />,
  truck: <Truck className="h-8 w-8" />,
  tractor: <Tractor className="h-8 w-8" />,
  construction: <HardHat className="h-8 w-8" />,
  wrench: <Wrench className="h-10 w-10" />,
  wind: <Wind className="h-10 w-10" />,
};

const KEY_SLUGS = [
  {
    slug: "cle-voiture",
    label: "Voiture",
    description: "Clé perdue, double, transpondeur, keyless",
    icon: <Car className="h-7 w-7" />,
  },
  {
    slug: "cle-moto",
    label: "Moto",
    description: "HISS, YIM, KIPASS et tous systèmes anti-démarrage",
    icon: <Bike className="h-7 w-7" />,
  },
  {
    slug: "cle-poids-lourd",
    label: "Poids Lourd",
    description: "Camion & utilitaire, OBD HD, intervention sur site",
    icon: <Truck className="h-7 w-7" />,
  },
  {
    slug: "cle-agricole",
    label: "Tracteur & Agricole",
    description: "Tracteur, matériel agricole, urgence récolte",
    icon: <Tractor className="h-7 w-7" />,
  },
  {
    slug: "cle-engin-chantier",
    label: "Engin de Chantier",
    description: "Pelleteuse, grue, nacelle, BTP — sur chantier",
    icon: <HardHat className="h-7 w-7" />,
  },
];

const OTHER_SLUGS = ["reprogrammation-moteur", "climatisation-pl-agricole"];

export default async function ServicesPage() {
  const services = await getServices();
  const bySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
  const otherServices = OTHER_SLUGS.map((slug) => bySlug[slug]).filter(Boolean);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbJsonLd([
              { name: "Accueil", url: siteConfig.url },
              { name: "Services", url: `${siteConfig.url}/services` },
            ]),
          ),
        }}
      />

      <section className="bg-linear-to-br from-[#1C0A08] to-[#C82020] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Nos Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Clés, reprogrammation moteur ECU et climatisation PL & Agricole — un
            seul opérateur mobile dans les Pyrénées-Orientales.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
          {/* Grande card — Reproduction & Programmation de Clés */}
          <div>
            <div className="mb-10">
              <Badge variant="secondary" className="mb-3 text-[#C82020]">
                Serrurerie automobile
              </Badge>
              <h2 className="text-2xl font-bold tracking-tight text-[#1C0A08] sm:text-3xl">
                Reproduction & Programmation de Clés
              </h2>
              <p className="mt-2 max-w-2xl text-[#4A6A8A]">
                Tous types de véhicules pris en charge : double, clé perdue,
                transpondeur, keyless, perte totale. Intervention mobile dans le
                66.
              </p>
            </div>

            <Card className="border-[#F0D898] p-2 transition-all hover:border-[#F0B800]/50 hover:shadow-lg sm:p-4">
              <CardHeader className="pb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#C82020]/10 text-[#C82020]">
                  <Key className="h-7 w-7" />
                </div>
                <CardTitle className="text-xl text-[#1C0A08]">
                  Reproduction & Programmation de Clés
                </CardTitle>
                <CardDescription className="text-sm text-[#4A6A8A]">
                  Clé perdue, double de sécurité, remplacement après casse —
                  clés mécaniques, transpondeurs, télécommandes et systèmes
                  keyless. OBD, EEPROM, perte totale acceptée. Toutes marques.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm font-medium text-[#1C0A08]">
                  Choisissez votre type de véhicule :
                </p>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
                  {KEY_SLUGS.map(({ slug, label, description, icon }) => (
                    <Link
                      key={slug}
                      href={`/services/${slug}`}
                      className="group flex flex-row items-center gap-3 rounded-xl border border-[#F0D898] bg-[#FFFBF5] px-4 py-3 transition-all hover:border-[#C82020]/40 hover:bg-[#C82020]/5 hover:shadow-md sm:flex-col sm:items-center sm:gap-2 sm:px-4 sm:py-4 sm:text-center"
                    >
                      <span className="shrink-0 text-[#C82020]">{icon}</span>
                      <span className="flex-1 text-sm font-medium text-[#1C0A08] sm:flex-none sm:text-xs">
                        {label}
                      </span>
                      <span className="hidden text-xs text-[#4A6A8A] sm:block">
                        {description}
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#C82020]/50 transition-transform group-hover:translate-x-0.5 group-hover:text-[#C82020]" />
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cards — Reprog Moteur & Climatisation */}
          <div>
            <div className="mb-10">
              <Badge variant="secondary" className="mb-3 text-[#C82020]">
                Électronique & Maintenance
              </Badge>
              <h2 className="text-2xl font-bold tracking-tight text-[#1C0A08] sm:text-3xl">
                Reprogrammation Moteur & Climatisation
              </h2>
              <p className="mt-2 max-w-2xl text-[#4A6A8A]">
                Expertise électronique avancée pour optimiser ou maintenir vos
                véhicules professionnels.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {otherServices.map((service) => (
                <Card
                  key={service.slug}
                  className="group flex h-full flex-col border-[#F0D898] transition-all hover:border-[#F0B800]/50 hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-xl bg-[#C82020]/10 text-[#C82020] transition-colors group-hover:bg-[#C82020] group-hover:text-white">
                      {iconMap[service.icon]}
                    </div>
                    <CardTitle className="text-xl text-[#1C0A08]">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-[#4A6A8A]">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <ul className="mb-6 space-y-2">
                      {service.features.slice(0, 4).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-[#4A6A8A]"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F0B800]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/services/${service.slug}`}>
                        En savoir plus
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
