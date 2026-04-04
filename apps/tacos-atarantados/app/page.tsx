import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../keystatic.config';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero';
import { MenuSection } from '@/components/menu-section';
import { AboutSection } from '@/components/about-section';
import { LocationsSection } from '@/components/locations-section';
import { OrderSection } from '@/components/order-section';
import { Footer } from '@/components/footer';

// Revalidate page every 60 seconds (ISR)
export const revalidate = 60;

async function getPageData() {
  const reader = createReader(process.cwd(), keystaticConfig);

  const [homepage, about, orderSection, menuItems, locations] = await Promise.all([
    reader.singletons.homepage.read(),
    reader.singletons.about.read(),
    reader.singletons.orderSection.read(),
    reader.collections.menuItems.all(),
    reader.collections.locations.all(),
  ]);

  return {
    homepage,
    about,
    orderSection,
    menuItems,
    locations,
  };
}

export default async function HomePage() {
  const { homepage, about, orderSection, menuItems, locations } = await getPageData();

  const mappedMenuItems = menuItems.map((m) => ({
    slug: m.slug,
    name: String(m.entry.name),
    description: m.entry.description ?? '',
    price: m.entry.price ?? 0,
    image: m.entry.image ?? null,
    category: m.entry.category ?? null,
    spicyLevel: m.entry.spicyLevel ?? 1,
    vegetarian: m.entry.vegetarian ?? false,
    featured: m.entry.featured ?? false,
  }));

  const mappedLocations = locations.map((l) => ({
    slug: l.slug,
    name: String(l.entry.name),
    address: l.entry.address ?? '',
    phone: l.entry.phone ?? '',
    whatsapp: l.entry.whatsapp ?? '',
    mapUrl: l.entry.mapUrl ?? null,
    hours: l.entry.hours ?? '',
    image: l.entry.image ?? null,
  }));

  const featuredItems = mappedMenuItems.filter((item) => item.featured);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          title={homepage?.heroTitle ?? 'Los Mejores Tacos de la Ciudad'}
          subtitle={homepage?.heroSubtitle ?? 'Sabor auténtico, ingredientes frescos, calidad insuperable.'}
          image={homepage?.heroImage ?? null}
          ctaText={homepage?.heroCtaText ?? 'Ver Menú'}
          ctaLink={homepage?.heroCtaLink ?? '#menu'}
        />

        <MenuSection
          items={featuredItems.length > 0 ? featuredItems : mappedMenuItems.slice(0, 6)}
        />

        <AboutSection
          title={about?.title ?? 'Nuestra Historia'}
          description={about?.description ?? null}
          image={about?.image ?? null}
        />

        <LocationsSection locations={mappedLocations} />

        <OrderSection
          title={orderSection?.title ?? 'Pide a Domicilio'}
          description={
            orderSection?.description ??
            'Recibe tus tacos favoritos sin salir de casa. ¡Entrega rápida garantizada!'
          }
          deliveryUrl={orderSection?.deliveryUrl ?? null}
          uberEatsUrl={orderSection?.uberEatsUrl ?? null}
          rappiUrl={orderSection?.rappiUrl ?? null}
          didiFoodUrl={orderSection?.didiFoodUrl ?? null}
        />
      </main>
      <Footer />
    </>
  );
}
