import { CtaSection } from "@/components/sections/cta-section";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/data/site-config";
import { getBreadcrumbJsonLd } from "@/lib/json-ld";
import { generatePageMetadata } from "@/lib/metadata";
import { getBrandsByCategory } from "@/lib/queries";
import { Bike, Car, Tractor, Truck } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "Reprogrammation Clé Toutes Marques Perpignan | Clé Performance 66",
  description:
    "Reprogrammation de clés pour toutes marques auto, moto, poids lourds et agricole à Perpignan. Renault, Peugeot, VW, Mercedes, John Deere, Fendt. Devis gratuit dans le 66.",
  path: "/marques",
});

const categories = [
  {
    key: "auto" as const,
    title: "Marques Automobile",
    icon: <Car className="h-6 w-6" />,
    description: "Toutes les marques de voitures prises en charge",
  },
  {
    key: "moto" as const,
    title: "Marques Moto & Scooter",
    icon: <Bike className="h-6 w-6" />,
    description: "Motos et scooters de toutes marques",
  },
  {
    key: "pl" as const,
    title: "Poids Lourds & Utilitaires",
    icon: <Truck className="h-6 w-6" />,
    description: "Camions, utilitaires et véhicules professionnels",
  },
  {
    key: "agricole" as const,
    title: "Engins Agricoles & TP",
    icon: <Tractor className="h-6 w-6" />,
    description: "Tracteurs, moissonneuses et engins de travaux publics",
  },
];

export default async function MarquesPage() {
  const [autoBrands, motoBrands, plBrands, agricoleBrands] = await Promise.all([
    getBrandsByCategory("auto"),
    getBrandsByCategory("moto"),
    getBrandsByCategory("pl"),
    getBrandsByCategory("agricole"),
  ]);
  const brandsByCategory = {
    auto: autoBrands,
    moto: motoBrands,
    pl: plBrands,
    agricole: agricoleBrands,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbJsonLd([
              { name: "Accueil", url: siteConfig.url },
              { name: "Marques", url: `${siteConfig.url}/marques` },
            ]),
          ),
        }}
      />

      <section className="bg-linear-to-br from-[#1C0A08] to-[#C82020] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Toutes les marques
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Nous reprogrammons les clés de toutes les marques : auto, moto,
            poids lourds, agricole et engins de chantier à Perpignan et dans les
            Pyrénées-Orientales.
          </p>
        </div>
      </section>

      {categories.map((cat, index) => {
        const catBrands = brandsByCategory[cat.key];
        return (
          <section
            key={cat.key}
            className={
              index % 2 === 0
                ? "bg-white py-16 sm:py-20"
                : "bg-[#FFFBF5] py-16 sm:py-20"
            }
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C82020]/10 text-[#C82020]">
                  {cat.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#1C0A08]">
                    {cat.title}
                  </h2>
                  <p className="text-sm text-[#4A6A8A]">{cat.description}</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {catBrands.map((brand) => (
                  <Link key={brand.slug} href={`/marques/${brand.slug}`}>
                    <Card className="group h-full border-[#F0D898] transition-all hover:border-[#F0B800]/50 hover:shadow-lg">
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between text-lg text-[#1C0A08] group-hover:text-[#C82020]">
                          <span className="flex items-center gap-3">
                            <Image
                              src={`/logos/${brand.slug}.svg`}
                              alt={brand.name}
                              width={28}
                              height={28}
                              className="h-7 w-7 object-contain"
                            />
                            {brand.name}
                          </span>
                          <span className="text-sm font-semibold text-[#C82020]">
                            ~{brand.startingPrice}€
                          </span>
                        </CardTitle>
                        <CardDescription>
                          <span className="mb-2 block text-sm text-[#4A6A8A]">
                            Reprogrammation de clé {brand.name} à Perpignan
                          </span>
                          <span className="flex flex-wrap gap-1">
                            {brand.models.slice(0, 5).map((model) => (
                              <Badge
                                key={model}
                                variant="secondary"
                                className="bg-[#FFF3E0] text-xs text-[#1C0A08]"
                              >
                                {model}
                              </Badge>
                            ))}
                            {brand.models.length > 5 && (
                              <Badge
                                variant="secondary"
                                className="bg-[#FFF3E0] text-xs text-[#4A6A8A]"
                              >
                                +{brand.models.length - 5}
                              </Badge>
                            )}
                          </span>
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CtaSection />
    </>
  );
}
