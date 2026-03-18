import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/data/site-config";
import { getBreadcrumbJsonLd } from "@/lib/json-ld";
import { generatePageMetadata } from "@/lib/metadata";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact | Clé Performance 66 Perpignan",
  description:
    "Contactez Clé Performance 66 pour un devis gratuit. Reprogrammation de clés à Perpignan et dans les Pyrénées-Orientales. Appelez-nous ou remplissez le formulaire.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbJsonLd([
              { name: "Accueil", url: siteConfig.url },
              { name: "Contact", url: `${siteConfig.url}/contact` },
            ]),
          ),
        }}
      />

      <section className="bg-linear-to-br from-[#0A2A4A] to-[#1A6FAF] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Contactez-nous
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Devis gratuit et sans engagement. Nous vous répondons dans les
            meilleurs délais.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-2xl font-bold text-[#0A2A4A]">
                  Nos coordonnées
                </h2>
                <div className="space-y-4">
                  <Card className="border-border/50">
                    <CardContent className="flex items-center gap-4 pt-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#1A6FAF]/10 text-[#1A6FAF]">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Téléphone
                        </p>
                        <a
                          href={siteConfig.phoneHref}
                          className="text-lg font-semibold text-[#0A2A4A] hover:text-[#1A6FAF]"
                        >
                          {siteConfig.phone}
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50">
                    <CardContent className="flex items-center gap-4 pt-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#1A6FAF]/10 text-[#1A6FAF]">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="text-lg font-semibold text-[#0A2A4A] hover:text-[#1A6FAF]"
                        >
                          {siteConfig.email}
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50">
                    <CardContent className="flex items-center gap-4 pt-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#1A6FAF]/10 text-[#1A6FAF]">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Adresse</p>
                        <p className="font-semibold text-[#0A2A4A]">
                          {siteConfig.address.city},{" "}
                          {siteConfig.address.postalCode}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {siteConfig.address.department}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50">
                    <CardContent className="flex items-center gap-4 pt-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#1A6FAF]/10 text-[#1A6FAF]">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Horaires
                        </p>
                        <p className="font-semibold text-[#0A2A4A]">
                          {siteConfig.hours.weekdays}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {siteConfig.hours.saturday}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-[#0A2A4A]">
                Demande de devis gratuit
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
