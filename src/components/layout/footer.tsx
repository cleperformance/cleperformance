import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/data/site-config";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  { name: "Clé voiture", href: "/services/cle-voiture" },
  { name: "Clé moto", href: "/services/cle-moto" },
  { name: "Clé poids lourd", href: "/services/cle-poids-lourd" },
  { name: "Clé agricole", href: "/services/cle-agricole" },
  { name: "Clé engin de chantier", href: "/services/cle-engin-chantier" },
  { name: "Reprog moteur ECU", href: "/services/reprogrammation-moteur" },
  {
    name: "Climatisation PL & Agri",
    href: "/services/climatisation-pl-agricole",
  },
];

const cityLinks = [
  { name: "Perpignan", href: "/zone/perpignan" },
  { name: "Canet-en-Roussillon", href: "/zone/canet-en-roussillon" },
  { name: "Saint-Estève", href: "/zone/saint-esteve" },
  { name: "Rivesaltes", href: "/zone/rivesaltes" },
  { name: "Cabestany", href: "/zone/cabestany" },
  { name: "Thuir", href: "/zone/thuir" },
];

export function Footer() {
  return (
    <footer className="bg-[#0A2A4A] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Infos entreprise */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8">
                <Image
                  src="/logo-minimaliste-only.png"
                  alt="Clé Performance 66"
                  fill
                  className="object-contain brightness-0 invert"
                  sizes="32px"
                />
              </div>
              <span className="font-bold">Clé Performance 66</span>
            </Link>
            <p className="text-sm text-white/70">
              Clés, reprogrammation moteur ECU et climatisation PL & Agricole —
              intervention mobile à Perpignan et dans les Pyrénées-Orientales.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#3AAFDE]">
              Nos Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zone d'intervention */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#3AAFDE]">
              Zone d&apos;intervention
            </h3>
            <ul className="space-y-2">
              {cityLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/zone"
                  className="text-sm font-medium text-[#3AAFDE] transition-colors hover:text-white"
                >
                  Voir toutes les villes →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#3AAFDE]">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#3AAFDE]" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#3AAFDE]" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#3AAFDE]" />
                <span>
                  {siteConfig.address.city}, {siteConfig.address.postalCode}
                  <br />
                  {siteConfig.address.department}
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#3AAFDE]" />
                <span>
                  {siteConfig.hours.weekdays}
                  <br />
                  {siteConfig.hours.saturday}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {siteConfig.name}. Tous droits
            réservés.
          </p>
          <div className="flex gap-4">
            <Link
              href="/a-propos"
              className="text-xs text-white/50 transition-colors hover:text-white"
            >
              À propos
            </Link>
            <Link
              href="/mentions-legales"
              className="text-xs text-white/50 transition-colors hover:text-white"
            >
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
