"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/data/site-config";
import { Menu, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Marques", href: "/marques" },
  { name: "Zone d'intervention", href: "/zone" },
  { name: "À propos", href: "/a-propos" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#D8E4EF] bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10 sm:h-12 sm:w-12">
            <Image
              src="/logo-minimaliste-only.png"
              alt="Clé Performance 66"
              fill
              className="object-contain"
              sizes="96px"
            />
          </div>
          <span className="text-lg font-bold text-[#0A2A4A]">
            Clé Performance 66
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#0A2A4A]/80 transition-colors hover:text-[#1A6FAF]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Phone */}
        <div className="flex items-center gap-3">
          <Button asChild className="hidden sm:inline-flex">
            <a href={siteConfig.phoneHref}>
              <Phone className="mr-2 h-4 w-4" />
              {siteConfig.phone}
            </a>
          </Button>
          <Button asChild size="icon" className="sm:hidden">
            <a href={siteConfig.phoneHref} aria-label="Appeler">
              <Phone className="h-4 w-4" />
            </a>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="inline-flex size-9 items-center justify-center rounded-lg text-[#0A2A4A] hover:bg-[#EBF4FB] lg:hidden"
              aria-label="Ouvrir le menu"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
              <div className="flex h-full flex-col px-2 pt-6">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3"
                >
                  <div className="relative h-10 w-10">
                    <Image
                      src="/logo-minimaliste-only.png"
                      alt="Clé Performance 66"
                      fill
                      className="object-contain"
                      sizes="40px"
                    />
                  </div>
                  <span className="text-lg font-bold text-[#0A2A4A]">
                    Clé Performance 66
                  </span>
                </Link>

                <Separator className="my-5 bg-[#D8E4EF]" />

                <nav className="flex flex-col gap-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-2.5 text-base font-medium text-[#0A2A4A] transition-colors hover:bg-[#EBF4FB] hover:text-[#1A6FAF]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto pb-6">
                  <Separator className="mb-5 bg-[#D8E4EF]" />
                  <Button asChild size="lg" className="w-full">
                    <a href={siteConfig.phoneHref}>
                      <Phone className="mr-2 h-4 w-4" />
                      {siteConfig.phone}
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
