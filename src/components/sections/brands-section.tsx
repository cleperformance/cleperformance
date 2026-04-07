import { Badge } from "@/components/ui/badge";
import { getBrandsByCategory } from "@/lib/queries";
import { Bike, Car, Tractor, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { key: "auto" as const, label: "Automobile", icon: Car },
  { key: "moto" as const, label: "Moto & Scooter", icon: Bike },
  { key: "pl" as const, label: "Poids Lourd & Utilitaire", icon: Truck },
  { key: "agricole" as const, label: "Agricole & TP", icon: Tractor },
];

export async function BrandsSection() {
  const [autoBrands, motoBrands, plBrands, agricoleBrands] = await Promise.all([
    getBrandsByCategory("auto"),
    getBrandsByCategory("moto"),
    getBrandsByCategory("pl"),
    getBrandsByCategory("agricole"),
  ]);
  const brandsByCategory = {
    auto: autoBrands,
    moto: motoBrands,
    pl: plBrands,
    agricole: agricoleBrands,
  };

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1C0A08] sm:text-4xl">
            Toutes les marques prises en charge
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#4A6A8A]">
            Nous reprogrammons les clés de toutes les marques : auto, moto,
            poids lourds, agricole et engins de chantier.
          </p>
        </div>

        {categories.map((cat) => {
          const catBrands = brandsByCategory[cat.key];
          const Icon = cat.icon;
          return (
            <div key={cat.key} className="mt-10">
              <div className="mb-4 flex items-center gap-2 text-[#C82020]">
                <Icon className="h-5 w-5" />
                <h3 className="font-semibold">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {catBrands.map((brand) => (
                  <Link key={brand.slug} href={`/marques/${brand.slug}`}>
                    <Badge
                      variant="outline"
                      className="cursor-pointer gap-2 border-[#F0D898] bg-white px-4 py-4 text-sm font-medium text-[#1C0A08] transition-all hover:border-[#C82020] hover:bg-[#FFF3E0]"
                    >
                      <Image
                        src={`/logos/${brand.slug}.svg`}
                        alt={brand.name}
                        width={24}
                        height={24}
                        className="h-6 w-6 object-contain"
                        unoptimized
                      />
                      {brand.name}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}

        <div className="mt-8 text-center">
          <Link
            href="/marques"
            className="text-sm font-medium text-[#C82020] hover:underline"
          >
            Voir toutes les marques et modèles →
          </Link>
        </div>
      </div>
    </section>
  );
}
