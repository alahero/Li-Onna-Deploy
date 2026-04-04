import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../keystatic.config';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero';
import { AboutSection } from '@/components/about-section';
import { CocktailsSection } from '@/components/cocktails-section';
import { MenuSection } from '@/components/menu-section';
import { EventsSection } from '@/components/events-section';
import { GallerySection } from '@/components/gallery-section';
import { ReservationsSection } from '@/components/reservations-section';
import { Footer } from '@/components/footer';

// Revalidate every hour to pick up CMS changes
export const revalidate = 3600;

async function getPageData() {
  const reader = createReader(process.cwd(), keystaticConfig);

  const [
    homepage,
    siteSettings,
    about,
    reservations,
    cocktails,
    menuItems,
    events,
    gallery,
  ] = await Promise.all([
    reader.singletons.homepage.read(),
    reader.singletons.siteSettings.read(),
    reader.singletons.about.read(),
    reader.singletons.reservations.read(),
    reader.collections.cocktails.all(),
    reader.collections.menuItems.all(),
    reader.collections.events.all(),
    reader.collections.gallery.all(),
  ]);

  return {
    homepage,
    siteSettings,
    about,
    reservations,
    cocktails,
    menuItems,
    events,
    gallery,
  };
}

export default async function HomePage() {
  const {
    homepage,
    siteSettings,
    about,
    reservations,
    cocktails,
    menuItems,
    events,
    gallery,
  } = await getPageData();

  const socialLinks = siteSettings
    ? [
        { platform: 'instagram', url: siteSettings.social?.instagram ?? '' },
        { platform: 'facebook', url: siteSettings.social?.facebook ?? '' },
        { platform: 'tiktok', url: siteSettings.social?.tiktok ?? '' },
        { platform: 'twitter', url: siteSettings.social?.twitter ?? '' },
      ].filter((s) => s.url)
    : [];

  const featuredCocktails = cocktails
    .filter((c) => c.entry.featured)
    .slice(0, 6);

  const displayCocktails = featuredCocktails.length > 0
    ? featuredCocktails
    : cocktails.slice(0, 6);

  const sortedGallery = [...gallery].sort(
    (a, b) => (a.entry.order ?? 99) - (b.entry.order ?? 99),
  );

  return (
    <>
      <Navbar
        siteName={siteSettings?.siteName ?? 'SPADE'}
        socialLinks={socialLinks}
      />

      <main>
        <HeroSection
          title={homepage?.heroTitle ?? 'DONDE LA NOCHE TOMA FORMA'}
          subtitle={
            homepage?.heroSubtitle ??
            'Cocktails de autor, ambiente sofisticado y una noche que no olvidarás.'
          }
          backgroundImage={homepage?.heroImage ?? null}
          ctaText={homepage?.ctaText ?? 'Reservar Mesa'}
          ctaLink={homepage?.ctaLink ?? '#reservaciones'}
        />

        <AboutSection
          title={about?.title ?? 'Nuestra Historia'}
          description={about?.description ?? null}
          image={about?.image ?? null}
        />

        <CocktailsSection
          cocktails={displayCocktails.map((c) => ({
            slug: c.slug,
            name: c.entry.name ?? c.slug,
            description: c.entry.description ?? '',
            ingredients: c.entry.ingredients ?? '',
            image: c.entry.image ?? null,
            category: c.entry.category ?? 'signature',
            price: c.entry.price ?? '',
          }))}
        />

        <MenuSection
          items={menuItems.map((m) => ({
            slug: m.slug,
            name: m.entry.name ?? m.slug,
            description: m.entry.description ?? '',
            price: m.entry.price ?? '',
            category: m.entry.category ?? 'starters',
            image: m.entry.image ?? null,
          }))}
        />

        <EventsSection
          events={events.map((e) => ({
            slug: e.slug,
            title: e.entry.title ?? e.slug,
            date: e.entry.date ?? '',
            description: e.entry.description ?? '',
            image: e.entry.image ?? null,
            djOrPerformer: e.entry.djOrPerformer ?? '',
            ticketUrl: e.entry.ticketUrl ?? '',
            coverCharge: e.entry.coverCharge ?? '',
          }))}
        />

        <GallerySection
          items={sortedGallery.map((g) => ({
            slug: g.slug,
            title: g.entry.title ?? g.slug,
            image: g.entry.image ?? null,
            category: g.entry.category ?? 'venue',
            order: g.entry.order ?? 99,
          }))}
        />

        <ReservationsSection
          title={reservations?.title ?? 'Reserva Tu Mesa'}
          description={
            reservations?.description ??
            'Vive una noche memorable en SPADE. Reserva tu mesa y recibe atención personalizada.'
          }
          whatsappNumber={reservations?.whatsappNumber ?? '521234567890'}
          phone={reservations?.phone ?? ''}
          email={reservations?.email ?? ''}
          bookingUrl={reservations?.bookingUrl ?? ''}
        />
      </main>

      <Footer
        siteName={siteSettings?.siteName ?? 'SPADE'}
        tagline={siteSettings?.tagline ?? 'Premium Cocktail Bar'}
        socialLinks={socialLinks}
        phone={reservations?.phone ?? ''}
        email={reservations?.email ?? ''}
      />
    </>
  );
}
