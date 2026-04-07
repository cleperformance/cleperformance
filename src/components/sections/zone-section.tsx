import { Badge } from "@/components/ui/badge";
import { getCities } from "@/lib/queries";
import { MapPin } from "lucide-react";
import Link from "next/link";

export async function ZoneSection() {
  const cities = await getCities();

  return (
    <section className="bg-[#F8F9FB] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge
            variant="secondary"
            className="mb-4 bg-[#FFF3E0] text-[#C82020]"
          >
            <MapPin className="mr-1 h-3 w-3" />
            Zone d&apos;intervention
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-[#1C0A08] sm:text-4xl">
            Nous intervenons dans tout le 66
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#4A6A8A]">
            Perpignan et toutes les communes des Pyrénées-Orientales.
            Déplacement possible sur site.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          {/* Map - prend 3 colonnes */}
          <div className="overflow-hidden rounded-xl border border-[#F0D898] shadow-sm lg:col-span-3">
            <iframe
              title="Zone d'intervention Clé Performance 66 - Perpignan et Pyrénées-Orientales"
              src="https://www.openstreetmap.org/export/embed.html?bbox=2.35%2C42.45%2C3.20%2C42.85&layer=mapnik&marker=42.6886%2C2.8948"
              className="h-72 w-full sm:h-80 lg:h-full lg:min-h-[500px] pointer-events-none"
              loading="lazy"
            />
          </div>

          {/* Cities grid - prend 2 colonnes */}
          <div className="grid grid-cols-2 gap-2 content-start lg:col-span-2 lg:grid-cols-1">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/zone/${city.slug}`}
                className="group flex items-center gap-2 rounded-lg border border-[#F0D898] bg-white px-3 py-2 transition-all hover:border-[#F0B800]/50 hover:shadow-md"
              >
                <MapPin className="h-4 w-4 shrink-0 text-[#C82020] group-hover:text-[#F0B800]" />
                <span className="text-sm font-medium text-[#1C0A08]">
                  {city.name}
                </span>
                <span className="ml-auto text-xs text-[#C82020]">
                  {city.distanceFromPerpignan}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
