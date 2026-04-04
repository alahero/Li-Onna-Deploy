import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../keystatic.config';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero';
import { EventsSection } from '@/components/events-section';
import { GallerySection } from '@/components/gallery-section';
import { VipSection } from '@/components/vip-section';
import { LocationSection } from '@/components/location-section';
import { Footer } from '@/components/footer';

// Revalidate every hour to pick up CMS changes
export const revalidate = 3600;

async function getPageData() {
  const reader = createReader(process.cwd(), keystaticConfig);

  const [homepage, siteSettings, vipSection, locationSection, events, gallery] =
    await Promise.all([
      reader.singletons.homepage.read(),
      reader.singletons.siteSettings.read(),
      reader.singletons.vipSection.read(),
      reader.singletons.locationSection.read(),
      reader.collections.events.all(),
      reader.collections.gallery.all(),
    ]);

  return { homepage, siteSettings, vipSection, locationSection, events, gallery };
}

export default async function HomePage() {
  const { homepage, siteSettings, vipSection, locationSection, events, gallery } =
    await getPageData();

  const socialLinks = siteSettings
    ? [
        { platform: 'instagram', url: siteSettings.social?.instagram ?? '' },
        { platform: 'facebook', url: siteSettings.social?.facebook ?? '' },
        { platform: 'tiktok', url: siteSettings.social?.tiktok ?? '' },
        { platform: 'twitter', url: siteSettings.social?.twitter ?? '' },
      ].filter((s) => s.url)
    : [];

  return (
    <>
      <Navbar
        siteName={siteSettings?.siteName ?? 'Guepardo'}
        socialLinks={socialLinks}
      />

      <main>
        {/* Hero Section */}
        <HeroSection
          title={homepage?.heroTitle ?? 'La Noche Es Tuya'}
          subtitle={
            homepage?.heroSubtitle ??
            'La experiencia nightlife más exclusiva de México'
          }
          backgroundImage={homepage?.heroBackgroundImage ?? null}
          ctaText={homepage?.heroCtaText ?? 'Ver Eventos'}
          ctaLink={homepage?.heroCtaLink ?? '#eventos'}
          secondaryCtaText={homepage?.heroSecondaryCtaText ?? 'Reservar VIP'}
          secondaryCtaLink={homepage?.heroSecondaryCtaLink ?? '#vip'}
        />

        {/* Events Section */}
        <EventsSection
          events={events.map((e) => ({
            slug: e.slug,
            title: String((e.entry.title as any)?.name ?? e.entry.title),
            date: e.entry.date ?? '',
            time: e.entry.time ?? '',
            description: e.entry.description ?? '',
            image: e.entry.image ?? null,
            djName: e.entry.djName ?? '',
            djGenre: e.entry.djGenre ?? '',
            ticketUrl: e.entry.ticketUrl ?? '',
            ticketPrice: e.entry.ticketPrice ?? '',
            featured: e.entry.featured ?? false,
            status: e.entry.status ?? 'upcoming',
          }))}
        />

        {/* Gallery Section */}
        <GallerySection
          items={gallery.map((g) => ({
            slug: g.slug,
            title: String(g.entry.title),
            image: g.entry.image ?? null,
            category: g.entry.category ?? 'ambiente',
            order: g.entry.order ?? 99,
          }))}
        />

        {/* VIP / Reservations Section */}
        <VipSection
          title={vipSection?.title ?? 'Experiencia VIP'}
          description={
            vipSection?.description ??
            'Vive la noche en otro nivel. Reserva tu mesa VIP y disfruta de atención exclusiva.'
          }
          whatsappLink={
            vipSection?.whatsappLink ?? 'https://wa.me/521234567890'
          }
          whatsappButtonText={
            vipSection?.whatsappButtonText ?? 'Reservar por WhatsApp'
          }
          packages={(vipSection?.packages ?? []).map((pkg) => ({
            name: pkg.name ?? '',
            description: pkg.description ?? '',
            price: pkg.price ?? '',
            includes: pkg.includes ?? '',
            highlighted: pkg.highlighted ?? false,
          }))}
        />

        {/* Location / Contact Section */}
        <LocationSection
          address={locationSection?.address ?? 'Dirección por confirmar'}
          city={locationSection?.city ?? 'México'}
          mapUrl={locationSection?.mapUrl ?? ''}
          mapDirectionsUrl={locationSection?.mapDirectionsUrl ?? ''}
          phone={locationSection?.phone ?? ''}
          email={locationSection?.email ?? ''}
          hours={locationSection?.hours ?? 'Viernes y Sábado: 10 PM – 4 AM'}
          parkingInfo={locationSection?.parkingInfo ?? ''}
        />
      </main>

      <Footer
        siteName={siteSettings?.siteName ?? 'Guepardo'}
        tagline={siteSettings?.tagline ?? 'La noche más exclusiva de México'}
        socialLinks={socialLinks}
        phone={locationSection?.phone ?? ''}
        email={locationSection?.email ?? ''}
        address={locationSection?.address ?? ''}
      />
    </>
  );
}
