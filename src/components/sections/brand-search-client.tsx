"use client";

import { siteConfig } from "@/data/site-config";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type BrandCategory = "auto" | "moto" | "pl" | "agricole";

export type BrandSearchData = {
  slug: string;
  name: string;
  category: BrandCategory;
  startingPrice: number;
  models: string[];
};

const categoryLabels: Record<BrandCategory, string> = {
  auto: "Automobile",
  moto: "Moto & Scooter",
  pl: "Poids Lourd",
  agricole: "Agricole",
};

const categoryStyles: Record<BrandCategory, string> = {
  auto: "bg-[#FFF3E0] text-[#C82020]",
  moto: "bg-[#FFF8E6] text-[#F0B800]",
  pl: "bg-[#F5F0EA] text-[#1C0A08]",
  agricole: "bg-[#EDFAED] text-green-700",
};

export function BrandSearchClient({ brands }: { brands: BrandSearchData[] }) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 300);
    return () => clearTimeout(timer);
  }, [query]);

  const normalize = (str: string) =>
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const results = useMemo(() => {
    const q = normalize(debouncedQuery.trim());
    if (q.length < 2) return [];
    return brands
      .filter(
        (b) =>
          normalize(b.name).includes(q) ||
          b.models.some((m) => normalize(m).includes(q)),
      )
      .slice(0, 6);
  }, [debouncedQuery, brands]);

  const showResults = debouncedQuery.trim().length >= 2;

  return (
    <div>
      <div className="relative mx-auto max-w-xl">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#4A6A8A]" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ex : Renault, Golf, Clio, Yaris, BMW..."
          aria-label="Rechercher une marque ou un modèle de véhicule"
          className="w-full rounded-xl border border-[#F0D898] bg-white py-4 pl-12 pr-4 text-[#1C0A08] shadow-sm placeholder:text-[#4A6A8A]/70 focus:border-[#C82020] focus:outline-none focus:ring-2 focus:ring-[#C82020]/20"
        />
      </div>

      {showResults && (
        <div className="mx-auto mt-4 max-w-xl">
          {results.length === 0 ? (
            <p className="py-4 text-center text-sm text-[#4A6A8A]">
              Aucune marque trouvée.{" "}
              <a
                href={siteConfig.phoneHref}
                className="font-medium text-[#C82020] hover:underline"
              >
                Appelez-nous pour un devis gratuit.
              </a>
            </p>
          ) : (
            <div className="space-y-2">
              {results.map((brand) => (
                <Link
                  key={brand.slug}
                  href={`/marques/${brand.slug}`}
                  className="flex items-center justify-between rounded-xl border border-[#F0D898] bg-white p-4 transition-all hover:border-[#C82020] hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={`/logos/${brand.slug}.svg`}
                      alt={brand.name}
                      width={28}
                      height={28}
                      className="h-7 w-7 object-contain"
                      unoptimized
                    />
                    <div>
                      <p className="font-semibold text-[#1C0A08]">
                        {brand.name}
                      </p>
                      <span
                        className={`mt-0.5 inline-block rounded-full px-2 py-0.5 text-xs font-medium ${categoryStyles[brand.category]}`}
                      >
                        {categoryLabels[brand.category]}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-[#C82020]">
                      ~{brand.startingPrice}€
                    </p>
                    <p className="text-xs text-[#4A6A8A]">estimation</p>
                  </div>
                </Link>
              ))}
              <p className="mt-3 text-center text-xs text-[#4A6A8A]">
                * Estimation basée sur les prix moyens du marché. Le tarif
                définitif dépend du modèle, de l&apos;année et du type
                d&apos;intervention.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
