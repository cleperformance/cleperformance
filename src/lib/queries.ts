import { prisma } from "@/lib/db";

type BrandCategory = "auto" | "moto" | "pl" | "agricole";

// --- BRANDS ---

export async function getBrands() {
  return prisma.brand.findMany({ orderBy: { name: "asc" } });
}

export async function getBrandsByCategory(category: BrandCategory) {
  return prisma.brand.findMany({
    where: { category },
    orderBy: { name: "asc" },
  });
}

export async function getBrandBySlug(slug: string) {
  return prisma.brand.findUnique({ where: { slug } });
}

export async function getAllBrandSlugs() {
  const brands = await prisma.brand.findMany({ select: { slug: true } });
  return brands.map((b: { slug: string }) => b.slug);
}

// --- CITIES ---

export async function getCities() {
  return prisma.city.findMany({ orderBy: { name: "asc" } });
}

export async function getCityBySlug(slug: string) {
  return prisma.city.findUnique({ where: { slug } });
}

export async function getAllCitySlugs() {
  const cities = await prisma.city.findMany({ select: { slug: true } });
  return cities.map((c: { slug: string }) => c.slug);
}

// --- SERVICES ---

export async function getServices() {
  return prisma.service.findMany();
}

export async function getServiceBySlug(slug: string) {
  return prisma.service.findUnique({ where: { slug } });
}

export async function getAllServiceSlugs() {
  const services = await prisma.service.findMany({ select: { slug: true } });
  return services.map((s: { slug: string }) => s.slug);
}

// --- FAQ ---

export async function getFaq() {
  return prisma.faqItem.findMany({ orderBy: { order: "asc" } });
}

// --- TESTIMONIALS ---

export async function getTestimonials() {
  return prisma.testimonial.findMany();
}
