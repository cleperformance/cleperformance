import { CtaSection } from "@/components/sections/cta-section";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/data/site-config";
import { getBreadcrumbJsonLd } from "@/lib/json-ld";
import { generatePageMetadata } from "@/lib/metadata";
import { getCities } from "@/lib/queries";
import { MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title:
    "Zone d'Intervention Perpignan & Pyrénées-Orientales | Clé Performance 66",
  description:
    "Clé Performance 66 intervient à Perpignan, Canet, Saint-Estève, Rivesaltes, Thuir, Elne, Argelès et dans tout le département des Pyrénées-Orientales (66).",
  path: "/zone",
});

export default async function ZonePage() {
  const cities = await getCities();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbJsonLd([
              { name: "Accueil", url: siteConfig.url },
              {
                name: "Zone d'intervention",
                url: `${siteConfig.url}/zone`,
              },
            ]),
          ),
        }}
      />

      <section className="bg-linear-to-br from-[#0A2A4A] to-[#1A6FAF] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Zone d&apos;intervention
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Nous intervenons à Perpignan et dans toutes les communes des
            Pyrénées-Orientales pour la reprogrammation de vos clés.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Carte */}
          <div className="mb-12 overflow-hidden rounded-xl border border-[#D8E4EF] shadow-sm">
            <iframe
              title="Zone d'intervention Clé Performance 66 - Perpignan et Pyrénées-Orientales"
              src="https://www.openstreetmap.org/export/embed.html?bbox=2.35%2C42.45%2C3.20%2C42.85&layer=mapnik&marker=42.6886%2C2.8948"
              className="h-72 w-full sm:h-96"
              loading="lazy"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <Link key={city.slug} href={`/zone/${city.slug}`}>
                <Card className="group h-full border-border/50 transition-all hover:border-[#3AAFDE]/50 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-[#1A6FAF]" />
                      <CardTitle className="text-lg text-[#0A2A4A]">
                        {city.name}
                      </CardTitle>
                    </div>
                    <CardDescription>
                      {city.postalCode} — à {city.distanceFromPerpignan} de
                      Perpignan
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
