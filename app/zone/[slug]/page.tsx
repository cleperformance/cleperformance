import { CtaSection } from "@/components/sections/cta-section";
import { ServicesSection } from "@/components/sections/services-section";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/data/site-config";
import { getBreadcrumbJsonLd, getServiceJsonLd } from "@/lib/json-ld";
import { getAllCitySlugs, getCities, getCityBySlug } from "@/lib/queries";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllCitySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = await getCityBySlug(slug);
  if (!city) return {};

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: `${siteConfig.url}/zone/${slug}` },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `${siteConfig.url}/zone/${slug}`,
      siteName: siteConfig.name,
      locale: "fr_FR",
      type: "website",
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { slug } = await params;
  const [city, allCities] = await Promise.all([
    getCityBySlug(slug),
    getCities(),
  ]);
  if (!city) notFound();

  const otherCities = allCities.filter((c) => c.slug !== slug).slice(0, 8);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getServiceJsonLd({
              name: `Reprogrammation de clés à ${city.name}`,
              description: city.metaDescription,
              url: `${siteConfig.url}/zone/${slug}`,
            }),
          ),
        }}
      />
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
              {
                name: city.name,
                url: `${siteConfig.url}/zone/${slug}`,
              },
            ]),
          ),
        }}
      />

      <section className="bg-linear-to-br from-[#1C0A08] to-[#C82020] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/zone"
            className="mb-4 inline-flex items-center text-sm text-white/60 hover:text-white"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Zone d&apos;intervention
          </Link>
          <div className="flex items-center gap-3">
            <MapPin className="h-8 w-8 text-[#F0B800]" />
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Reprogrammation de clés à {city.name}
            </h1>
          </div>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            {city.postalCode} — à {city.distanceFromPerpignan} de Perpignan
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="accent">
              <a href={siteConfig.phoneHref}>
                <Phone className="mr-2 h-5 w-5" />
                Devis gratuit
              </a>
            </Button>
            <Button asChild size="lg" variant="outline-light">
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Demander un devis
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-[3fr_2fr]">
            <div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                {city.content.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <Separator className="my-8" />

              <h2 className="mb-4 text-2xl font-bold text-[#1C0A08]">
                Nos services à {city.name}
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  Reproduction & programmation de clé voiture toutes marques
                </li>
                <li>Double de clé avec télécommande et systèmes keyless</li>
                <li>Remplacement de clé perdue ou volée</li>
                <li>Clé moto et scooter (HISS, YIM, KIPASS...)</li>
                <li>Clé utilitaire et poids lourd</li>
                <li>Clé engin agricole et de chantier</li>
                <li>Reprogrammation moteur ECU (Stage 1, FAP, EGR, AdBlue)</li>
                <li>Recharge & diagnostic climatisation PL & Agricole</li>
              </ul>
            </div>

            <div>
              <div className="sticky top-24 space-y-6">
                <div className="rounded-xl bg-linear-to-br from-[#1C0A08] to-[#C82020] p-6 text-white">
                  <h3 className="mb-2 text-lg font-semibold">
                    Intervention à {city.name}
                  </h3>
                  <p className="mb-4 text-sm text-white/80">
                    À seulement {city.distanceFromPerpignan} de notre atelier.
                    Intervention rapide !
                  </p>
                  <div className="flex flex-col gap-3">
                    <Button asChild variant="accent" className="w-full">
                      <a href={siteConfig.phoneHref}>
                        <Phone className="mr-2 h-4 w-4" />
                        {siteConfig.phone}
                      </a>
                    </Button>
                    <Button asChild variant="outline-light" className="w-full">
                      <Link href="/contact">
                        <Mail className="mr-2 h-4 w-4" />
                        Demander un devis
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="rounded-xl border border-border/50 bg-[#FFFBF5] p-6">
                  <h3 className="mb-4 text-lg font-semibold text-[#1C0A08]">
                    Autres villes
                  </h3>
                  <ul className="space-y-2">
                    {otherCities.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/zone/${c.slug}`}
                          className="flex items-center gap-1 text-sm text-[#C82020] hover:underline"
                        >
                          <MapPin className="h-3 w-3" />
                          {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/zone"
                    className="mt-3 block text-sm font-medium text-[#F0B800] hover:underline"
                  >
                    Voir toutes les villes →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <CtaSection />
    </>
  );
}
