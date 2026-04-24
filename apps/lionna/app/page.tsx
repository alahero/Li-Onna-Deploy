import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../keystatic.config';
import { Hero } from '@/components/hero';
import { Navbar } from '@/components/navbar';
import { PhotoGallery } from '@/components/photo-gallery';
import { DishTicker } from '@/components/dish-ticker';
import { ContactCta } from '@/components/contact-cta';
import { BrandStatement } from '@/components/brand-statement';
import { BrandMarquee } from '@/components/brand-marquee';
import { Footer } from '@/components/footer';

export const revalidate = 3600;

async function getPageData() {
  const reader = createReader(process.cwd(), keystaticConfig);

  const [siteSettings, homepage, contact, dishSlugs] = await Promise.all([
    reader.singletons.siteSettings.read().catch(() => null),
    reader.singletons.homepage.read().catch(() => null),
    reader.singletons.contact.read().catch(() => null),
    reader.collections.signatureDishes.list().catch(() => [] as string[]),
  ]);

  const signatureDishes = await Promise.all(
    dishSlugs.map(async (slug) => {
      const entry = await reader.collections.signatureDishes.read(slug).catch(() => null);
      if (!entry) return null;
      return {
        slug,
        name: entry.name ?? slug,
        description: entry.description ?? '',
        image: entry.image ?? null,
        category: entry.category ?? 'cold-starters',
        featured: entry.featured ?? false,
        order: entry.order ?? 99,
      };
    })
  );

  return {
    siteSettings,
    homepage,
    contact,
    signatureDishes: signatureDishes
      .filter(Boolean)
      .sort((a, b) => (a!.order ?? 99) - (b!.order ?? 99)) as NonNullable<
      (typeof signatureDishes)[number]
    >[],
  };
}

export default async function HomePage() {
  const { siteSettings, homepage, contact, signatureDishes } = await getPageData();
  return (
    <>
      {/* Full-viewport video hero (100vh, #005BFF) */}
      <Hero heroImage={homepage?.heroImage ?? undefined} />

      {/* Barra sticky pegada al bloque hero (sin franja blur intermedia) */}
      <Navbar />

      {/* Main Content -- bg #F6F6F2 */}
      <main style={{ backgroundColor: '#F6F6F2', position: 'relative', zIndex: 2 }}>
        {/* Photo gallery with floating cards + "hola Madrid" text */}
        <PhotoGallery
          heroTitle={homepage?.heroTitle ?? undefined}
          heroSubtitle={homepage?.heroSubtitle ?? undefined}
        />

        {/* Imprescindibles dish ticker */}
        <DishTicker dishes={signatureDishes} />

        {/* Social CTA + contact form */}
        <ContactCta
          instagramUrl={siteSettings?.social?.instagram ?? undefined}
          email={contact?.email ?? undefined}
        />

        {/* Contact info + map */}
        <BrandStatement contact={contact} />

        {/* Huge scrolling brand marquee */}
        <BrandMarquee />
      </main>

      {/* Footer -- black bg */}
      <Footer
        siteSettings={siteSettings}
        contact={contact}
      />
    </>
  );
}
