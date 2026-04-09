import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../keystatic.config';
import { HeroSection } from './components/hero';
import { ReservationsSection } from './components/reservations';
import { Footer } from './components/footer';

// Revalidate every hour to pick up CMS changes
export const revalidate = 3600;

async function getPageData() {
  const reader = createReader(process.cwd(), keystaticConfig);
  const siteSettings = await reader.singletons.siteSettings.read().catch(() => null);
  return { siteSettings };
}

export default async function HomePage() {
  const { siteSettings } = await getPageData();

  const address =
    siteSettings?.address ??
    'São Paulo 2367-int. 6, Providencia, 44630 Guadalajara, Jal.';
  const whatsappUrl =
    siteSettings?.whatsappUrl ?? 'https://wa.me/523320559502';
  const instagramUrl =
    siteSettings?.instagramUrl ?? 'https://www.instagram.com/guepardo.mx/';
  const googleMapsUrl =
    siteSettings?.googleMapsUrl ?? 'https://share.google/5w7rQSpzuIE2nsGY2';
  const mandalaGroupUrl =
    siteSettings?.mandalaGroupUrl ?? 'https://mandalagroup.mx/';
  const copyright =
    siteSettings?.copyright ?? 'Copyright \u00ae 2024 Mandala Group.';
  const reservationUrl =
    siteSettings?.reservationUrl ??
    'https://www.covermanager.com/reserve/module_restaurant/restaurante-guepardo/spanish';

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        width: '100%',
        overflow: 'clip',
      }}
    >
      {/* Section 1: Hero — 85.5vh */}
      <HeroSection />

      {/* Section 2: Reservations — CoverManager embed */}
      <ReservationsSection reservationUrl={reservationUrl} />

      {/* Footer — black background */}
      <Footer
        address={address}
        whatsappUrl={whatsappUrl}
        instagramUrl={instagramUrl}
        googleMapsUrl={googleMapsUrl}
        mandalaGroupUrl={mandalaGroupUrl}
        copyright={copyright}
      />
    </main>
  );
}
