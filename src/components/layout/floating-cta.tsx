"use client";

import { siteConfig } from "@/data/site-config";
import { Phone } from "lucide-react";

export function FloatingCta() {
  return (
    <a
      href={siteConfig.phoneHref}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#C82020] text-white shadow-lg transition-transform hover:scale-110 hover:bg-[#1C0A08] sm:hidden"
      aria-label={`Appeler ${siteConfig.name}`}
    >
      <Phone className="h-6 w-6" />
    </a>
  );
}
