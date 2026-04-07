import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import { ArrowLeft, Phone } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-[#FFFBF5] py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <p className="text-6xl font-bold text-[#C82020]">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#1C0A08] sm:text-4xl">
          Page introuvable
        </h1>
        <p className="mt-4 text-lg text-[#4A6A8A]">
          Cette page n&apos;existe pas ou a été déplacée. Pas de panique —
          retrouvez-nous facilement ci-dessous.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" variant="default">
            <Link href="/">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Retour à l&apos;accueil
            </Link>
          </Button>
          <Button asChild size="lg" variant="accent">
            <a href={siteConfig.phoneHref}>
              <Phone className="mr-2 h-5 w-5" />
              {siteConfig.phone}
            </a>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { href: "/services", label: "Services" },
            { href: "/marques", label: "Marques" },
            { href: "/zone", label: "Zone 66" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl border border-[#F0D898] bg-white p-4 text-sm font-medium text-[#C82020] transition-all hover:border-[#C82020] hover:bg-[#FFF3E0]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
