import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/data/site-config";
import { getBreadcrumbJsonLd, getServiceJsonLd } from "@/lib/json-ld";
import {
  getAllServiceSlugs,
  getServiceBySlug,
  getServices,
} from "@/lib/queries";
import { ArrowLeft, Check, Mail, Phone } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `${siteConfig.url}/services/${slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${siteConfig.url}/services/${slug}`,
      siteName: siteConfig.name,
      locale: "fr_FR",
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const [service, allServices] = await Promise.all([
    getServiceBySlug(slug),
    getServices(),
  ]);
  if (!service) notFound();

  const otherServices = allServices.filter((s) => s.slug !== slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getServiceJsonLd({
              name: service.title,
              description: service.metaDescription,
              url: `${siteConfig.url}/services/${slug}`,
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
              { name: "Services", url: `${siteConfig.url}/services` },
              {
                name: service.shortTitle,
                url: `${siteConfig.url}/services/${slug}`,
              },
            ]),
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-linear-to-br from-[#1C0A08] to-[#C82020] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="mb-4 inline-flex items-center text-sm text-white/60 hover:text-white"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Tous les services
          </Link>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            {service.description}
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

      {/* Content */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-[3fr_2fr]">
            <div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                {service.content.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <Separator className="my-8" />

              <h2 className="mb-6 text-2xl font-bold text-[#1C0A08]">
                Ce que nous proposons
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#F0B800]" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24 space-y-6">
                <div className="rounded-xl bg-linear-to-br from-[#1C0A08] to-[#C82020] p-6 text-white">
                  <h3 className="mb-2 text-lg font-semibold">
                    Besoin d&apos;un devis ?
                  </h3>
                  <p className="mb-4 text-sm text-white/80">
                    Appelez-nous ou envoyez un message pour un devis gratuit.
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
                    Autres services
                  </h3>
                  <ul className="space-y-3">
                    {otherServices.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="text-sm text-[#C82020] hover:underline"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSection />
      <CtaSection />
    </>
  );
}
