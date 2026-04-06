import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../keystatic.config';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import VipSection from '@/components/vip-section';
import AboutSection from '@/components/about-section';
import LocationSection from '@/components/location-section';
import NewsletterSection from '@/components/newsletter-section';
import Footer from '@/components/footer';

export const revalidate = 3600;

async function getPageData() {
  const reader = createReader(process.cwd(), keystaticConfig);
  const [siteSettings, vipSection, about, location] = await Promise.all([
    reader.singletons.siteSettings.read().catch(() => null),
    reader.singletons.vipSection.read().catch(() => null),
    reader.singletons.about.read().catch(() => null),
    reader.singletons.location.read().catch(() => null),
  ]);
  return { siteSettings, vipSection, about, location };
}

export default async function HomePage() {
  const { siteSettings, vipSection, about, location } = await getPageData();

  return (
    <>
      <Navbar />

      <main>
        {/* Hero — full viewport */}
        <Hero />

        {/* Event Banner Section */}
        <header
          id="events"
          style={{
            width: '100%',
            height: 244,
            backgroundColor: '#0d0e11',
            padding: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Event banner image (e.g. Solomun) */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url(/images/event-banner.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </header>

        {/* VIP Tables */}
        <VipSection data={vipSection} />

        {/* Location */}
        <LocationSection data={location} />

        {/* About */}
        <AboutSection data={about} />

        {/* Newsletter */}
        <NewsletterSection />
      </main>

      <Footer siteSettings={siteSettings} location={location} />
    </>
  );
}
