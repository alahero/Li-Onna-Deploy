import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../keystatic.config';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import EventsSection from '@/components/events-section';
import VipSection from '@/components/vip-section';
import AboutSection from '@/components/about-section';
import LocationSection from '@/components/location-section';
import Footer from '@/components/footer';

// Revalidate every hour to pick up CMS changes
export const revalidate = 3600;

async function getPageData() {
  const reader = createReader(process.cwd(), keystaticConfig);

  const [homepage, siteSettings, vipSection, about, location, allEvents] = await Promise.all([
    reader.singletons.homepage.read().catch(() => null),
    reader.singletons.siteSettings.read().catch(() => null),
    reader.singletons.vipSection.read().catch(() => null),
    reader.singletons.about.read().catch(() => null),
    reader.singletons.location.read().catch(() => null),
    reader.collections.events.all().catch(() => []),
  ]);

  // Sort events by date ascending
  const events = allEvents.sort((a, b) => {
    const dateA = a.entry.date ?? '';
    const dateB = b.entry.date ?? '';
    return dateA < dateB ? -1 : dateA > dateB ? 1 : 0;
  });

  return { homepage, siteSettings, vipSection, about, location, events };
}

export default async function HomePage() {
  const { homepage, siteSettings, vipSection, about, location, events } = await getPageData();

  const mappedEvents = events.map((e) => ({
    slug: e.slug,
    entry: {
      title: String(e.entry.title),
      date: e.entry.date ?? null,
      time: e.entry.time ?? '10:00 PM',
      description: e.entry.description ?? '',
      image: e.entry.image ?? null,
      djName: e.entry.djName ?? '',
      djOrigin: e.entry.djOrigin ?? '',
      genre: e.entry.genre ?? '',
      ticketUrl: e.entry.ticketUrl ?? null,
      ticketPrice: e.entry.ticketPrice ?? '',
      featured: e.entry.featured ?? false,
      soldOut: e.entry.soldOut ?? false,
    },
  }));

  return (
    <>
      <Navbar siteSettings={siteSettings} />

      <main>
        <Hero data={homepage} />

        <section id="events">
          <EventsSection events={mappedEvents} />
        </section>

        <section id="viptables">
          <VipSection data={vipSection} />
        </section>

        <section id="about">
          <AboutSection data={about} />
        </section>

        <section id="location">
          <LocationSection data={location} />
        </section>
      </main>

      <Footer siteSettings={siteSettings} location={location} />
    </>
  );
}
