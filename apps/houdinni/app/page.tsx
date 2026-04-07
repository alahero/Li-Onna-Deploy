import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../keystatic.config';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero';
import { MarqueeTicker } from '@/components/marquee-ticker';
import { GallerySection } from '@/components/gallery-section';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';

export const revalidate = 3600;

async function getPageData() {
  const reader = createReader(process.cwd(), keystaticConfig);

  const [siteSettings, contact, marqueeText, eventSlugs, gallerySlugs] =
    await Promise.all([
      reader.singletons.siteSettings.read().catch(() => null),
      reader.singletons.contact.read().catch(() => null),
      reader.singletons.marqueeText.read().catch(() => null),
      reader.collections.events.list().catch(() => [] as string[]),
      reader.collections.gallery.list().catch(() => [] as string[]),
    ]);

  // Read all collection entries in parallel
  const [events, gallery] = await Promise.all([
    Promise.all(
      eventSlugs.map(async (slug) => {
        const entry = await reader.collections.events.read(slug).catch(() => null);
        if (!entry) return null;
        return {
          slug,
          name: entry.name ?? slug,
          date: entry.date ?? '',
          time: entry.time ?? '',
          description: entry.description ?? '',
          image: entry.image ?? null,
          ticketUrl: entry.ticketUrl ?? '',
          featured: entry.featured ?? false,
          tag: entry.tag ?? 'PROXIMAMENTE',
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
    contact,
    marqueeText,
    events: events.filter(Boolean) as NonNullable<(typeof events)[number]>[],
    gallery: (gallery.filter(Boolean) as NonNullable<(typeof gallery)[number]>[]).sort(
      (a, b) => a.order - b.order
    ),
  };
}

/**
 * Houdinni homepage -- subway/metro station aesthetic.
 *
 * Structure:
 *   1. NAV -- 34px marquee ticker, fixed top
 *   2. Hero -- subway station (tile wall, hanging sign, metro nav buttons, tracks)
 *   3. Marquee ticker divider
 *   4. Gallery -- sticky horizontal scroll
 *   5. Marquee ticker divider
 *   6. CTA Section -- tickets link
 *   7. Footer -- contact info, legal, copyright
 */
export default async function HomePage() {
  const { contact, marqueeText } = await getPageData();

  return (
    <>
      <Navbar marqueeText={marqueeText?.mainText} />

      <main
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0px',
          overflow: 'visible',
        }}
      >
        {/* -- Hero (subway station) -- */}
        <HeroSection />

        {/* -- Marquee divider -- */}
        <MarqueeTicker speed="fast" background="#0099ff" />

        {/* -- Gallery: sticky scroll + horizontal pan -- */}
        <GallerySection />

        {/* -- Marquee divider -- */}
        <MarqueeTicker speed="normal" background="#000000" />

        {/* -- CTA Section (sticky, tickets link) -- */}
        <CTASection />
      </main>

      {/* -- Footer -- */}
      <Footer contact={contact} />
    </>
  );
}
