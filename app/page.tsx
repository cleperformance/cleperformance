import { AdvantagesSection } from "@/components/sections/advantages-section";
import { BrandSearchSection } from "@/components/sections/brand-search-section";
import { BrandsSection } from "@/components/sections/brands-section";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { Hero } from "@/components/sections/hero";
import { PricingSection } from "@/components/sections/pricing-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ZoneSection } from "@/components/sections/zone-section";
import { getFaqJsonLd } from "@/lib/json-ld";
import { getFaq } from "@/lib/queries";

export default async function Home() {
  const faqItems = await getFaq();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFaqJsonLd(faqItems)),
        }}
      />
      <Hero />
      <ServicesSection />
      <AdvantagesSection />
      <PricingSection />
      <BrandSearchSection />
      <BrandsSection />
      <ZoneSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
