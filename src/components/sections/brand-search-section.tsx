import { Badge } from "@/components/ui/badge";
import { getBrands } from "@/lib/queries";
import { BrandSearchClient, type BrandSearchData } from "./brand-search-client";

export async function BrandSearchSection() {
  const brands = await getBrands();

  const searchData: BrandSearchData[] = brands.map((b) => ({
    slug: b.slug,
    name: b.name,
    category: b.category as BrandSearchData["category"],
    startingPrice: b.startingPrice,
    models: b.models,
  }));

  return (
    <section className="bg-[#F8F9FB] py-16 sm:py-20" id="estimation">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4 text-[#1A6FAF]">
            Estimation rapide
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-[#0A2A4A] sm:text-4xl">
            Quel est le tarif pour votre véhicule ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[#4A6A8A]">
            Recherchez votre marque ou modèle pour obtenir une estimation du
            coût de reprogrammation de clé à Perpignan et dans le 66.
          </p>
        </div>

        <div className="mt-10">
          <BrandSearchClient brands={searchData} />
        </div>

        {/* Liste statique pour le SEO — non visible visuellement */}
        <ul className="sr-only">
          {searchData.map((b) => (
            <li key={b.slug}>
              Reprogrammation clé {b.name} Perpignan — prix moyen ~
              {b.startingPrice}€
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
