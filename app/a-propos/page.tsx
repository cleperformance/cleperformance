import { CtaSection } from "@/components/sections/cta-section";
import { siteConfig } from "@/data/site-config";
import { getBreadcrumbJsonLd } from "@/lib/json-ld";
import { generatePageMetadata } from "@/lib/metadata";
import { Clock, Cpu, MapPin, ShieldCheck, Wrench } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "À Propos | Clé Performance 66 Perpignan",
  description:
    "Technicien expérimenté spécialisé en clés auto/moto/PL/agricole, reprogrammation moteur ECU et climatisation PL & Agricole à Perpignan. Seul opérateur itinérant combinant les 3 services dans le 66.",
  path: "/a-propos",
});

const values = [
  {
    icon: <Wrench className="h-8 w-8" />,
    title: "Expertise multi-domaines",
    description:
      "Technicien formé sur les systèmes de verrouillage (OBD, EEPROM, transpondeur), la gestion moteur (ECU) et les circuits de climatisation. Matériel professionnel pour traiter toutes marques et situations.",
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "3 services en un seul déplacement",
    description:
      "Clés, reprogrammation moteur Stage 1 / FAP / EGR / AdBlue, et recharge climatisation PL & Agricole. Seul opérateur itinérant dans les Pyrénées-Orientales à combiner ces trois expertises.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Certifications & habilitations",
    description:
      "Attestation F-Gaz pour la manipulation des fluides frigorigènes (R134a, R1234yf). Compétences validées en programmation électronique OBD / EEPROM et en reprogrammation ECU.",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Réactivité & urgences",
    description:
      "Intervention le jour même dans la plupart des cas, y compris pour les urgences agricoles en période de récolte. Prise en charge directement sur site sans remorquage ni immobilisation.",
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    title: "Couverture totale du 66",
    description:
      "Basé à Perpignan, nous intervenons dans tout le département des Pyrénées-Orientales : particuliers, agriculteurs, transporteurs et garagistes.",
  },
];

export default function AProposPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbJsonLd([
              { name: "Accueil", url: siteConfig.url },
              { name: "À propos", url: `${siteConfig.url}/a-propos` },
            ]),
          ),
        }}
      />

      <section className="bg-linear-to-br from-[#1C0A08] to-[#C82020] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            À propos de Clé Performance 66
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Technicien itinérant spécialisé en clés, reprogrammation moteur et
            climatisation — seul opérateur à combiner les 3 services dans le 66.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              <strong className="text-[#1C0A08]">Clé Performance 66</strong> est
              fondée par un technicien expérimenté spécialisé dans
              l&apos;automobile, les véhicules industriels et le machinisme
              agricole. Formé aux systèmes de diagnostic et de programmation
              électronique, il maîtrise l&apos;ensemble des prestations
              proposées : reproduction et programmation de clés, reprogrammation
              de calculateur moteur (ECU) et maintenance de la climatisation
              pour poids lourds et engins agricoles.
            </p>
            <p>
              Le constat est simple : perdre une clé, avoir besoin
              d&apos;optimiser son moteur ou faire recharger sa climatisation ne
              devrait pas impliquer des délais d&apos;attente en atelier ni des
              tarifs de concession. Clé Performance 66 intervient directement
              chez vous — sur votre parking, votre exploitation ou votre
              chantier — avec tout l&apos;équipement professionnel nécessaire.
            </p>
            <p>
              Notre spécialité PL et Agricole répond à un vrai manque local :
              aucun autre opérateur itinérant dans les Pyrénées-Orientales ne
              couvre à la fois les clés poids lourd, la reprogrammation moteur
              et la recharge climatisation pour engins agricoles. C&apos;est
              cette combinaison unique qui nous permet de proposer un service
              complet aux transporteurs et aux agriculteurs du 66.
            </p>
          </div>

          {/* Avantage concurrentiel */}
          <div className="mt-12 rounded-2xl bg-linear-to-br from-[#1C0A08] to-[#C82020] p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#F0B800]">
              Avantage unique dans le 66
            </p>
            <p className="mt-2 text-xl font-bold">
              Seul opérateur itinérant combinant clés, reprog moteur ECU et
              climatisation PL & Agricole dans les Pyrénées-Orientales.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-white/20 pt-6 text-center">
              <div>
                <div className="text-3xl font-bold text-[#F0B800]">3</div>
                <div className="mt-1 text-sm text-white/70">
                  Services combinés
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#F0B800]">66</div>
                <div className="mt-1 text-sm text-white/70">
                  Communes desservies
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#F0B800]">J+0</div>
                <div className="mt-1 text-sm text-white/70">
                  Intervention le jour même
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFBF5] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-[#1C0A08]">
            Nos engagements
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex gap-4 rounded-xl bg-white p-6 shadow-sm"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#C82020]/10 text-[#C82020]">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1C0A08]">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
