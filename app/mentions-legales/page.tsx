import { siteConfig } from "@/data/site-config";
import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Mentions Légales | Clé Performance 66",
  description:
    "Mentions légales du site cleperformance66.fr — éditeur, hébergeur, propriété intellectuelle et protection des données personnelles.",
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold text-[#0A2A4A]">
          Mentions légales
        </h1>

        <div className="space-y-10 text-[#4A6A8A]">
          {/* Éditeur */}
          <div>
            <h2 className="mb-3 text-xl font-semibold text-[#0A2A4A]">
              Éditeur du site
            </h2>
            <p className="leading-relaxed">
              <strong className="text-[#0A2A4A]">{siteConfig.name}</strong>
              <br />
              Forme juridique : Société par Actions Simplifiée Unipersonnelle
              (SASU)
              <br />
              SIRET :{" "}
              <span className="italic text-[#4A6A8A]/60">[À compléter]</span>
              <br />
              Siège social :{" "}
              <span className="italic text-[#4A6A8A]/60">
                [À compléter — adresse du siège social]
              </span>
              <br />
              Téléphone : {siteConfig.phone}
              <br />
              Email :{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[#1A6FAF] hover:underline"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>

          {/* Responsable de publication */}
          <div>
            <h2 className="mb-3 text-xl font-semibold text-[#0A2A4A]">
              Responsable de publication
            </h2>
            <p className="leading-relaxed">
              Loïc Chaleyssin, en qualité de représentant légal de{" "}
              {siteConfig.name}.
            </p>
          </div>

          {/* Hébergement */}
          <div>
            <h2 className="mb-3 text-xl font-semibold text-[#0A2A4A]">
              Hébergement
            </h2>
            <p className="leading-relaxed">
              Ce site est hébergé par :
              <br />
              <strong className="text-[#0A2A4A]">Vercel Inc.</strong>
              <br />
              340 Pine Street, Suite 701
              <br />
              San Francisco, CA 94104 — États-Unis
              <br />
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1A6FAF] hover:underline"
              >
                vercel.com
              </a>
            </p>
          </div>

          {/* Propriété intellectuelle */}
          <div>
            <h2 className="mb-3 text-xl font-semibold text-[#0A2A4A]">
              Propriété intellectuelle
            </h2>
            <p className="leading-relaxed">
              L&apos;ensemble du contenu de ce site (textes, images, logos,
              structure) est la propriété exclusive de {siteConfig.name} et est
              protégé par les dispositions du Code de la propriété
              intellectuelle français. Toute reproduction, représentation,
              modification ou exploitation, même partielle, sans autorisation
              écrite préalable est strictement interdite et constituerait une
              contrefaçon sanctionnée par les articles L.335-2 et suivants du
              Code de la propriété intellectuelle.
            </p>
          </div>

          {/* Protection des données personnelles */}
          <div>
            <h2 className="mb-3 text-xl font-semibold text-[#0A2A4A]">
              Protection des données personnelles (RGPD)
            </h2>
            <p className="leading-relaxed">
              Les données personnelles collectées via le formulaire de contact
              (nom, téléphone, email, message) sont traitées par{" "}
              {siteConfig.name} dans le seul but de répondre à vos demandes de
              devis ou d&apos;information. Elles ne sont transmises à aucun
              tiers, à l&apos;exception du service d&apos;envoi d&apos;emails{" "}
              <strong className="text-[#0A2A4A]">Resend</strong> (Resend Inc.,
              San Francisco, USA), utilisé exclusivement pour
              l&apos;acheminement technique des messages, dans le respect du
              RGPD.
            </p>
            <p className="mt-3 leading-relaxed">
              Conformément au Règlement Général sur la Protection des Données
              (RGPD — UE 2016/679) et à la loi Informatique et Libertés, vous
              disposez d&apos;un droit d&apos;accès, de rectification,
              d&apos;effacement et de portabilité de vos données. Pour exercer
              ces droits, contactez-nous à :{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[#1A6FAF] hover:underline"
              >
                {siteConfig.email}
              </a>
              . Vous disposez également du droit d&apos;introduire une
              réclamation auprès de la{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1A6FAF] hover:underline"
              >
                CNIL
              </a>
              .
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="mb-3 text-xl font-semibold text-[#0A2A4A]">
              Cookies
            </h2>
            <p className="leading-relaxed">
              Ce site n&apos;utilise aucun cookie de suivi, de profilage ou
              publicitaire. Aucun outil d&apos;analyse de trafic (Google
              Analytics, etc.) n&apos;est installé. Seuls des cookies techniques
              strictement nécessaires au fonctionnement du site peuvent être
              déposés par le navigateur.
            </p>
          </div>

          {/* Liens externes */}
          <div>
            <h2 className="mb-3 text-xl font-semibold text-[#0A2A4A]">
              Liens hypertextes
            </h2>
            <p className="leading-relaxed">
              Ce site peut contenir des liens vers des sites tiers.{" "}
              {siteConfig.name} n&apos;exerce aucun contrôle sur ces sites et
              décline toute responsabilité quant à leur contenu ou leur
              politique de confidentialité.
            </p>
          </div>

          {/* Droit applicable */}
          <div>
            <h2 className="mb-3 text-xl font-semibold text-[#0A2A4A]">
              Droit applicable
            </h2>
            <p className="leading-relaxed">
              Les présentes mentions légales sont régies par le droit français.
              En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </div>

          <p className="border-t border-[#D8E4EF] pt-6 text-sm text-[#4A6A8A]/60">
            Dernière mise à jour : mars 2026
          </p>
        </div>
      </div>
    </section>
  );
}
