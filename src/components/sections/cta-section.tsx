import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import { Mail, Phone } from "lucide-react";

export function CtaSection() {
  return (
    <section className="bg-linear-to-br from-[#0A2A4A] via-[#0F3D6B] to-[#1A6FAF] py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Besoin d&apos;une clé ? Contactez-nous maintenant
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          Devis gratuit et sans engagement. Intervention rapide à Perpignan et
          dans tout le département des Pyrénées-Orientales.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" variant="accent" className="text-base">
            <a href={siteConfig.phoneHref}>
              <Phone className="mr-2 h-5 w-5" />
              {siteConfig.phone}
            </a>
          </Button>
          <Button
            asChild
            variant="outline-light"
            size="lg"
            className="text-base"
          >
            <a href="/contact">
              <Mail className="mr-2 h-5 w-5" />
              Formulaire de contact
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
