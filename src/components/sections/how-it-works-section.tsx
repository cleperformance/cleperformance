import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import { CheckCircle, FileText, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: Phone,
    title: "Contactez-nous",
    description:
      "Appelez-nous ou remplissez le formulaire en ligne. Décrivez votre véhicule et votre besoin. Devis gratuit, sans engagement.",
  },
  {
    icon: FileText,
    title: "Devis immédiat",
    description:
      "Tarif clair établi sur la base de votre véhicule, du type de clé et de l'intervention. Aucune surprise à la facturation.",
  },
  {
    icon: MapPin,
    title: "Intervention sur site",
    description:
      "Nous nous déplaçons directement chez vous, sur votre lieu de travail ou sur la route avec tout l'équipement nécessaire.",
  },
  {
    icon: CheckCircle,
    title: "Clés remises & testées",
    description:
      "Clé découpée, programmée et validée sur place. Vous repartez avec des clés fonctionnelles en main, séance tenante.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-[#FFFBF5] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge
            variant="secondary"
            className="mb-4 bg-[#FFF3E0] text-[#C82020]"
          >
            Comment ça marche
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-[#1C0A08] sm:text-4xl">
            4 étapes, intervention le jour même
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#4A6A8A]">
            Un process simple et transparent, de votre premier appel
            jusqu&apos;à la remise de vos clés.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative flex flex-col items-center text-center"
              >
                {/* Connector line — desktop only */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[calc(50%+2.5rem)] top-8 hidden h-px w-[calc(100%-5rem)] border-t-2 border-dashed border-[#F0D898] lg:block" />
                )}

                {/* Step number + icon */}
                <div className="relative mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C82020] text-white shadow-sm">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#F0B800] text-xs font-bold text-[#1C0A08]">
                    {index + 1}
                  </span>
                </div>

                <h3 className="mb-2 text-lg font-semibold text-[#1C0A08]">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#4A6A8A]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" variant="default" className="text-base">
            <a href={siteConfig.phoneHref}>
              <Phone className="mr-2 h-5 w-5" />
              Appelez-nous
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base">
            <Link href="/contact">
              <Mail className="mr-2 h-5 w-5" />
              Demander un devis gratuit
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
