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
  car: <Car className="h-10 w-10" />,
  bike: <Bike className="h-10 w-10" />,
  truck: <Truck className="h-10 w-10" />,
  tractor: <Tractor className="h-10 w-10" />,
  construction: <HardHat className="h-10 w-10" />,
  wrench: <Wrench className="h-10 w-10" />,
  wind: <Wind className="h-10 w-10" />,
};

const serviceGroups = [
  {
    badge: "Serrurerie automobile",
    title: "Reproduction & Programmation de Clés",
    description:
      "Toutes situations prises en charge : double, clé perdue, transpondeur, keyless. Intervention mobile dans le 66.",
    slugs: [
      "cle-voiture",
      "cle-moto",
      "cle-poids-lourd",
      "cle-agricole",
      "cle-engin-chantier",
    ],
  },
  {
    badge: "Électronique & Maintenance",
    title: "Reprogrammation Moteur & Climatisation",
    description:
      "Expertise électronique avancée pour optimiser ou maintenir vos véhicules professionnels.",
    slugs: ["reprogrammation-moteur", "climatisation-pl-agricole"],
  },
];

export default async function ServicesPage() {
  const services = await getServices();
  const bySlug = Object.fromEntries(services.map((s) => [s.slug, s]));

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
          {serviceGroups.map((group) => {
            const groupServices = group.slugs
              .map((slug) => bySlug[slug])
              .filter(Boolean);

            return (
              <div key={group.title}>
                <div className="mb-10">
                  <Badge variant="secondary" className="mb-3 text-[#C82020]">
                    {group.badge}
                  </Badge>
                  <h2 className="text-2xl font-bold tracking-tight text-[#1C0A08] sm:text-3xl">
                    {group.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-[#4A6A8A]">
                    {group.description}
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {groupServices.map((service) => (
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
            );
          })}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
