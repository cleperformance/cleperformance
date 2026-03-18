import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getServices } from "@/lib/queries";
import {
  ArrowRight,
  Bike,
  Car,
  HardHat,
  Tractor,
  Truck,
  Wind,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  car: <Car className="h-8 w-8" />,
  bike: <Bike className="h-8 w-8" />,
  truck: <Truck className="h-8 w-8" />,
  tractor: <Tractor className="h-8 w-8" />,
  construction: <HardHat className="h-8 w-8" />,
  wrench: <Wrench className="h-8 w-8" />,
  wind: <Wind className="h-8 w-8" />,
};

export async function ServicesSection() {
  const services = await getServices();

  return (
    <section className="bg-white py-16 sm:py-24" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4 text-[#1A6FAF]">
            Nos services
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-[#0A2A4A] sm:text-4xl">
            Clés, reprogrammation moteur et climatisation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Auto, moto, poids lourd, agricole ou engin de chantier — clés,
            reprog ECU et recharge clim : un seul opérateur mobile dans le 66.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.slug}
              className="group flex h-full flex-col border-border/50 transition-all hover:border-[#3AAFDE]/50 hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1A6FAF]/10 text-[#1A6FAF] transition-colors group-hover:bg-[#1A6FAF] group-hover:text-white">
                  {iconMap[service.icon]}
                </div>
                <CardTitle className="text-xl text-[#0A2A4A]">
                  {service.shortTitle}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href={`/services/${service.slug}`}>
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
