import { Card, CardContent } from "@/components/ui/card";
import { getTestimonials } from "@/lib/queries";
import { Quote, Star } from "lucide-react";

export async function TestimonialsSection() {
  const testimonials = await getTestimonials();

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0A2A4A] sm:text-4xl">
            Ce que disent nos clients
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            La satisfaction de nos clients est notre priorité. Découvrez leurs
            témoignages.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial, i) => (
            <Card key={i} className="border-border/50">
              <CardContent className="pt-6">
                <Quote className="mb-3 h-8 w-8 text-[#3AAFDE]/40" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <div className="mt-3">
                  <p className="text-sm font-semibold text-[#0A2A4A]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.city}
                    {testimonial.vehicle && ` — ${testimonial.vehicle}`}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
