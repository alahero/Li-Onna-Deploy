import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../keystatic.config';
import { SpadeHero } from '@/components/spade-hero';
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

  const [siteSettings, about, reservations, cocktailSlugs, menuSlugs, eventSlugs, gallerySlugs] =
    await Promise.all([
      reader.singletons.siteSettings.read().catch(() => null),
      reader.singletons.about.read().catch(() => null),
      reader.singletons.reservations.read().catch(() => null),
      reader.collections.cocktails.list().catch(() => [] as string[]),
      reader.collections.menuItems.list().catch(() => [] as string[]),
      reader.collections.events.list().catch(() => [] as string[]),
      reader.collections.gallery.list().catch(() => [] as string[]),
    ]);

  // Read all collection entries in parallel
  const [cocktails, menuItems, events, gallery] = await Promise.all([
    Promise.all(
      cocktailSlugs.map(async (slug) => {
        const entry = await reader.collections.cocktails.read(slug).catch(() => null);
        if (!entry) return null;
        return {
          slug,
          name: entry.name ?? slug,
          description: entry.description ?? '',
          ingredients: entry.ingredients ?? '',
          image: entry.image ?? null,
          category: entry.category ?? 'signature',
          price: entry.price ?? '',
        };
      })
    ),
    Promise.all(
      menuSlugs.map(async (slug) => {
        const entry = await reader.collections.menuItems.read(slug).catch(() => null);
        if (!entry) return null;
        return {
          slug,
          name: entry.name ?? slug,
          description: entry.description ?? '',
          price: entry.price ?? '',
          category: entry.category ?? 'starters',
          image: entry.image ?? null,
        };
      })
    ),
    Promise.all(
      eventSlugs.map(async (slug) => {
        const entry = await reader.collections.events.read(slug).catch(() => null);
        if (!entry) return null;
        return {
          slug,
          title: entry.title ?? slug,
          date: entry.date ?? '',
          description: entry.description ?? '',
          image: entry.image ?? null,
          djOrPerformer: entry.djOrPerformer ?? '',
          ticketUrl: entry.ticketUrl ?? '',
          coverCharge: entry.coverCharge ?? '',
        };
      })
    ),
    Promise.all(
      gallerySlugs.map(async (slug) => {
        const entry = await reader.collections.gallery.read(slug).catch(() => null);
        if (!entry) return null;
        return {
          slug,
          title: entry.title ?? slug,
          image: entry.image ?? null,
          category: entry.category ?? 'venue',
          order: entry.order ?? 99,
        };
      })
    ),
  ]);

  return {
    siteSettings,
    about,
    reservations,
    cocktails: cocktails.filter(Boolean) as NonNullable<(typeof cocktails)[number]>[],
    menuItems: menuItems.filter(Boolean) as NonNullable<(typeof menuItems)[number]>[],
    events: events.filter(Boolean) as NonNullable<(typeof events)[number]>[],
    gallery: (gallery.filter(Boolean) as NonNullable<(typeof gallery)[number]>[]).sort(
      (a, b) => a.order - b.order
    ),
  };
}

export default async function HomePage() {
  const { siteSettings, about, reservations, cocktails, menuItems, events, gallery } =
    await getPageData();

  // Build social links array for footer
  const socialLinks: { platform: string; url: string }[] = [];
  if (siteSettings?.social) {
    const s = siteSettings.social as Record<string, string>;
    for (const [platform, url] of Object.entries(s)) {
      if (url) socialLinks.push({ platform, url });
    }
  }

  return (
    <main>
      {/* Hero — self-contained with its own nav (matches live Framer site) */}
      <SpadeHero />

      {/* About / Nuestra Historia */}
      <AboutSection
        title={about?.title ?? 'Nuestra Historia'}
        description={about?.description ?? null}
        image={about?.image ?? null}
      />

      {/* Cocktails */}
      <CocktailsSection cocktails={cocktails} />

      {/* Menu */}
      <MenuSection items={menuItems} />

      {/* Events */}
      <EventsSection events={events} />

      {/* Gallery */}
      <GallerySection items={gallery} />

      {/* Reservations */}
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

      {/* Footer */}
      <Footer
        siteName={siteSettings?.siteName ?? 'SPADE'}
        tagline={siteSettings?.tagline ?? 'Premium Cocktail Bar'}
        socialLinks={socialLinks}
        phone={reservations?.phone ?? ''}
        email={reservations?.email ?? ''}
      />
    </main>
  );
}
