import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#0A2A4A] via-[#0F3D6B] to-[#1A6FAF]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzMuMzEzIDAgNiAyLjY4NyA2IDZzLTIuNjg3IDYtNiA2LTYtMi42ODctNi02IDIuNjg3LTYgNi02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <div className="mb-4 inline-flex items-center rounded-full border border-[#3AAFDE]/30 bg-[#3AAFDE]/10 px-4 py-1.5 text-sm text-[#3AAFDE]">
              Perpignan & Pyrénées-Orientales (66)
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Reproduction & Programmation de clés{" "}
              <span className="text-[#3AAFDE]">à Perpignan et dans le 66</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
              Clés, reprogrammation moteur ECU et climatisation PL & Agricole —
              intervention mobile directement chez vous à Perpignan et dans tout
              le 66. Seul opérateur itinérant à combiner les 3 services.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button asChild size="lg" variant="accent" className="text-base">
                <a href={siteConfig.phoneHref}>
                  <Phone className="mr-2 h-5 w-5" />
                  Appelez-nous
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline-light"
                className="text-base"
              >
                <a href="/contact">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6 lg:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#3AAFDE]">Mobile</div>
                <div className="text-xs text-white/60">
                  Intervention chez vous
                </div>
              </div>
              <div className="h-px w-8 bg-white/20 sm:h-8 sm:w-px" />
              <div className="text-center">
                <div className="text-2xl font-bold text-[#3AAFDE]">Rapide</div>
                <div className="text-xs text-white/60">
                  Dépannage le jour même
                </div>
              </div>
              <div className="h-px w-8 bg-white/20 sm:h-8 sm:w-px" />
              <div className="text-center">
                <div className="text-2xl font-bold text-[#3AAFDE]">-50%</div>
                <div className="text-xs text-white/60">vs concessionnaire</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-center">
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-[#3AAFDE]/10 blur-3xl" />
              <Image
                src="/logo-minimaliste-only.png"
                alt="Clé Performance 66 - Spécialiste reprogrammation clés Perpignan"
                width={320}
                height={320}
                className="relative h-40 w-40 drop-shadow-2xl invert brightness-0 sm:h-56 sm:w-56 lg:h-80 lg:w-80"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
