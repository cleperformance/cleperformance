import { CtaSection } from "@/components/sections/cta-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/data/site-config";
import { getBreadcrumbJsonLd, getServiceJsonLd } from "@/lib/json-ld";
import { getAllBrandSlugs, getBrandBySlug, getBrands } from "@/lib/queries";
import { ArrowLeft, Phone } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllBrandSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = await getBrandBySlug(slug);
  if (!brand) return {};

  return {
    title: brand.metaTitle,
    description: brand.metaDescription,
    alternates: { canonical: `${siteConfig.url}/marques/${slug}` },
    openGraph: {
      title: brand.metaTitle,
      description: brand.metaDescription,
      url: `${siteConfig.url}/marques/${slug}`,
      siteName: siteConfig.name,
      locale: "fr_FR",
      type: "website",
    },
  };
}

export default async function BrandPage({ params }: PageProps) {
  const { slug } = await params;
  const [brand, allBrands] = await Promise.all([
    getBrandBySlug(slug),
    getBrands(),
  ]);
  if (!brand) notFound();

  const otherBrands = allBrands.filter((b) => b.slug !== slug).slice(0, 8);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getServiceJsonLd({
              name: `Reprogrammation clé ${brand.name}`,
              description: brand.metaDescription,
              url: `${siteConfig.url}/marques/${slug}`,
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
              { name: "Marques", url: `${siteConfig.url}/marques` },
              { name: brand.name, url: `${siteConfig.url}/marques/${slug}` },
            ]),
          ),
        }}
      />

      <section className="bg-linear-to-br from-[#0A2A4A] to-[#1A6FAF] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/marques"
            className="mb-4 inline-flex items-center text-sm text-white/60 hover:text-white"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Toutes les marques
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 p-2">
              <Image
                src={`/logos/${brand.slug}.svg`}
                alt={brand.name}
                width={40}
                height={40}
                className="h-10 w-10 object-contain brightness-0 invert"
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Reprogrammation clé {brand.name}
            </h1>
          </div>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            {brand.metaDescription}
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none text-muted-foreground">
                {brand.content.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <Separator className="my-8" />

              <h2 className="mb-6 text-2xl font-bold text-[#0A2A4A]">
                Modèles {brand.name} pris en charge
              </h2>
              <div className="flex flex-wrap gap-2">
                {brand.models.map((model) => (
                  <Badge
                    key={model}
                    variant="secondary"
                    className="border border-[#1A6FAF]/20 bg-[#EBF4FB] px-3 py-1.5 text-sm font-medium text-[#0A2A4A]"
                  >
                    {brand.name} {model}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <div className="sticky top-24 space-y-6">
                <div className="rounded-xl bg-linear-to-br from-[#0A2A4A] to-[#1A6FAF] p-6 text-white">
                  <div className="mb-4">
                    <span className="text-sm text-white/60">
                      Prix moyen constaté
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">
                        {brand.startingPrice}€
                      </span>
                      <span className="text-sm text-white/60">TTC</span>
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    Devis clé {brand.name}
                  </h3>
                  <p className="mb-4 text-sm text-white/80">
                    Obtenez un devis gratuit pour votre {brand.name}.
                  </p>
                  <Button asChild variant="accent" className="w-full">
                    <a href={siteConfig.phoneHref}>
                      <Phone className="mr-2 h-4 w-4" />
                      {siteConfig.phone}
                    </a>
                  </Button>
                </div>

                <div className="rounded-xl border border-border/50 bg-[#F8F9FB] p-6">
                  <h3 className="mb-4 text-lg font-semibold text-[#0A2A4A]">
                    Autres marques
                  </h3>
                  <ul className="space-y-2">
                    {otherBrands.map((b) => (
                      <li key={b.slug}>
                        <Link
                          href={`/marques/${b.slug}`}
                          className="text-sm text-[#1A6FAF] hover:underline"
                        >
                          Clé {b.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/marques"
                    className="mt-3 block text-sm font-medium text-[#3AAFDE] hover:underline"
                  >
                    Voir toutes les marques →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
