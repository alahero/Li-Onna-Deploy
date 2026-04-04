import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../keystatic.config';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero';
import { ConceptSection } from '@/components/concept-section';
import { ShowsSection } from '@/components/shows-section';
import { MenuSection } from '@/components/menu-section';
import { GallerySection } from '@/components/gallery-section';
import { ReservationsSection } from '@/components/reservations-section';
import { Footer } from '@/components/footer';

// Revalidate every hour to pick up CMS changes
export const revalidate = 3600;

async function getPageData() {
  const reader = createReader(process.cwd(), keystaticConfig);

  try {
    const [
      homepage,
      siteSettings,
      concept,
      reservations,
      shows,
      menuCategories,
      menuItems,
      cocktails,
      gallery,
    ] = await Promise.all([
      reader.singletons.homepage.read(),
      reader.singletons.siteSettings.read(),
      reader.singletons.concept.read(),
      reader.singletons.reservations.read(),
      reader.collections.shows.all(),
      reader.collections.menuCategories.all(),
      reader.collections.menuItems.all(),
      reader.collections.cocktails.all(),
      reader.collections.gallery.all(),
    ]);

    return {
      homepage,
      siteSettings,
      concept,
      reservations,
      shows: shows ?? [],
      menuCategories: menuCategories ?? [],
      menuItems: menuItems ?? [],
      cocktails: cocktails ?? [],
      gallery: gallery ?? [],
    };
  } catch (error) {
    console.error('Failed to load CMS data:', error);
    return {
      homepage: null,
      siteSettings: null,
      concept: null,
      reservations: null,
      shows: [],
      menuCategories: [],
      menuItems: [],
      cocktails: [],
      gallery: [],
    };
  }
}

export default async function HomePage() {
  const {
    homepage,
    siteSettings,
    concept,
    reservations,
    shows,
    menuCategories,
    menuItems,
    cocktails,
    gallery,
  } = await getPageData();

  const socialLinks = siteSettings
    ? [
        { platform: 'instagram', url: siteSettings.social?.instagram ?? '' },
        { platform: 'facebook', url: siteSettings.social?.facebook ?? '' },
        { platform: 'tiktok', url: siteSettings.social?.tiktok ?? '' },
      ].filter((s) => s.url)
    : [];

  return (
    <>
      <Navbar siteName={siteSettings?.siteName ?? 'Houdinni'} />

      <main id="inicio">
        {/* Hero */}
        <HeroSection
          title={homepage?.heroTitle ?? 'Donde la Magia Ocurre'}
          subtitle={
            homepage?.heroSubtitle ??
            'Un speakeasy donde la ilusión y la mixología se funden en una sola experiencia. Bienvenido al otro lado del espejo.'
          }
          heroImage={homepage?.heroImage ?? null}
          heroVideoUrl={homepage?.heroVideoUrl ?? null}
          ctaText={homepage?.ctaText ?? 'Solicitar Acceso'}
          ctaLink={homepage?.ctaLink ?? '#reservaciones'}
        />

        {/* Concept / About */}
        <ConceptSection
          title={concept?.title ?? 'El Secreto Detrás del Telón'}
          tagline={
            concept?.tagline ??
            'No todo lo que ves es real. No todo lo real es visible.'
          }
          description={
            concept?.description ??
            'Houdinni es un speakeasy inspirado en el arte de la ilusión. Un lugar que desafía tus sentidos, donde cada detalle ha sido diseñado para transportarte a una realidad paralela donde la magia existe.\n\nNuestros shows de ilusionismo en vivo, cócteles de autor y una atmósfera única crean una experiencia que va más allá de lo que puedes imaginar. Cada visita es diferente. Cada noche, un nuevo misterio.'
          }
          image={concept?.image ?? null}
        />

        {/* Shows */}
        <ShowsSection
          shows={shows.map((s) => ({
            slug: s.slug,
            title: String(s.entry.title),
            date: s.entry.date ?? '',
            time: s.entry.time ?? '',
            description: s.entry.description ?? '',
            image: s.entry.image ?? null,
            performer: s.entry.performer ?? '',
            ticketUrl: s.entry.ticketUrl ?? '',
            price: s.entry.price ?? '',
            featured: s.entry.featured ?? false,
          }))}
        />

        {/* Menu */}
        <MenuSection
          categories={menuCategories.map((c) => ({
            slug: c.slug,
            name: String(c.entry.name),
            order: c.entry.order ?? 99,
          }))}
          items={menuItems.map((item) => ({
            slug: item.slug,
            name: String(item.entry.name),
            description: item.entry.description ?? '',
            price: item.entry.price ?? '',
            category: item.entry.category ?? null,
            image: item.entry.image ?? null,
          }))}
          cocktails={cocktails.map((c) => ({
            slug: c.slug,
            name: String(c.entry.name),
            description: c.entry.description ?? '',
            ingredients: c.entry.ingredients ?? '',
            image: c.entry.image ?? null,
            featured: c.entry.featured ?? false,
            price: c.entry.price ?? '',
          }))}
        />

        {/* Gallery */}
        <GallerySection
          items={gallery.map((g) => ({
            slug: g.slug,
            title: String(g.entry.title),
            image: g.entry.image ?? null,
            category: g.entry.category ?? 'venue',
            order: g.entry.order ?? 99,
          }))}
        />

        {/* Reservations */}
        <ReservationsSection
          title={reservations?.title ?? 'Solicita Tu Acceso'}
          description={
            reservations?.description ??
            'El acceso a Houdinni es exclusivo y el aforo es limitado. Reserva con anticipación para asegurar tu lugar en el show.'
          }
          whatsappNumber={reservations?.whatsappNumber ?? ''}
          phone={reservations?.phone ?? ''}
          email={reservations?.email ?? ''}
          bookingUrl={reservations?.bookingUrl ?? ''}
        />
      </main>

      <Footer
        siteName={siteSettings?.siteName ?? 'Houdinni'}
        tagline={siteSettings?.tagline ?? 'Donde la magia ocurre'}
        socialLinks={socialLinks}
        phone={reservations?.phone ?? ''}
        email={reservations?.email ?? ''}
      />
    </>
  );
}
