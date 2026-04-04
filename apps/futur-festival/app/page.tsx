import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../keystatic.config';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { LineupSection } from '@/components/lineup-section';
import { TicketsSection } from '@/components/tickets-section';
import { ScheduleSection } from '@/components/schedule-section';
import { VenueSection } from '@/components/venue-section';
import { GallerySection } from '@/components/gallery-section';
import { FaqSection } from '@/components/faq-section';
import { Footer } from '@/components/footer';

// Revalidate every hour to pick up CMS changes
export const revalidate = 3600;

async function getPageData() {
  const reader = createReader(process.cwd(), keystaticConfig);

  const [homepage, siteSettings, tickets, venue, sponsors, artists, schedule, gallery, faq] =
    await Promise.all([
      reader.singletons.homepage.read().catch(() => null),
      reader.singletons.siteSettings.read().catch(() => null),
      reader.singletons.tickets.read().catch(() => null),
      reader.singletons.venue.read().catch(() => null),
      reader.singletons.sponsors.read().catch(() => null),
      reader.collections.artists.all().catch(() => []),
      reader.collections.schedule.all().catch(() => []),
      reader.collections.gallery.all().catch(() => []),
      reader.collections.faq.all().catch(() => []),
    ]);

  return { homepage, siteSettings, tickets, venue, sponsors, artists, schedule, gallery, faq };
}

export default async function HomePage() {
  const { homepage, siteSettings, tickets, venue, sponsors, artists, schedule, gallery, faq } =
    await getPageData();

  // ── Hero defaults ─────────────────────────────────────────────────────────
  const heroTitle = homepage?.heroTitle ?? 'FUTUR FESTIVAL';
  const heroSubtitle = homepage?.heroSubtitle ?? 'El futuro del sonido. México.';
  const heroCtaText = homepage?.heroCtaText ?? 'Consigue tus boletos';
  const ticketUrl = homepage?.ticketUrl ?? undefined;
  const festivalDate = homepage?.festivalDate ?? 'PRÓXIMAMENTE';
  const festivalLocation = homepage?.festivalLocation ?? 'Ciudad de México';
  const countdownTarget = homepage?.countdownTarget ?? undefined;

  // ── Artists ───────────────────────────────────────────────────────────────
  const normalizedArtists = artists.map((a) => ({
    name: String(a.entry.name),
    slug: a.slug,
    genre: a.entry.genre,
    country: a.entry.country,
    image: a.entry.image ?? undefined,
    headliner: a.entry.headliner,
    day: a.entry.day,
    performanceTime: a.entry.performanceTime ?? undefined,
    stage: a.entry.stage ?? undefined,
    socialUrl: a.entry.socialUrl ?? undefined,
  }));

  // ── Tickets ───────────────────────────────────────────────────────────────
  const ticketTiers = (tickets?.tiers ?? []).map((t) => ({
    name: t.name,
    price: t.price,
    description: t.description,
    features: t.features ?? '',
    soldOut: t.soldOut,
    buyUrl: t.buyUrl ?? undefined,
    featured: t.featured ?? false,
  }));

  // ── Schedule ──────────────────────────────────────────────────────────────
  const normalizedSchedule = schedule.map((d) => ({
    day: String(d.entry.day),
    stages: (d.entry.stages ?? []).map((stage) => ({
      stageName: stage.stageName,
      sets: (stage.sets ?? []).map((s) => ({
        artistName: s.artistName,
        startTime: s.startTime,
        endTime: s.endTime,
        headliner: s.headliner ?? false,
      })),
    })),
  }));

  // ── Gallery ───────────────────────────────────────────────────────────────
  const normalizedGallery = gallery.map((g) => ({
    title: String(g.entry.title),
    image: g.entry.image ?? undefined,
    edition: g.entry.edition,
    order: g.entry.order ?? 0,
  }));

  // ── FAQ ───────────────────────────────────────────────────────────────────
  const normalizedFaq = faq.map((f) => ({
    question: String(f.entry.question),
    answer: f.entry.answer ?? '',
    order: f.entry.order ?? 0,
  }));

  // ── Social ────────────────────────────────────────────────────────────────
  const social = siteSettings?.social
    ? {
        instagram: siteSettings.social.instagram ?? undefined,
        facebook: siteSettings.social.facebook ?? undefined,
        tiktok: siteSettings.social.tiktok ?? undefined,
        twitter: siteSettings.social.twitter ?? undefined,
        whatsapp: siteSettings.social.whatsapp ?? undefined,
      }
    : undefined;

  // ── Sponsors ──────────────────────────────────────────────────────────────
  const sponsorsData = sponsors
    ? {
        title: sponsors.title,
        tiers: (sponsors.tiers ?? []).map((t) => ({
          tierName: t.tierName,
          logos: (t.logos ?? []).filter((l): l is string => typeof l === 'string'),
        })),
      }
    : undefined;

  return (
    <>
      <Navbar ticketUrl={ticketUrl} />

      <main>
        <Hero
          title={heroTitle}
          subtitle={heroSubtitle}
          ctaText={heroCtaText}
          ticketUrl={ticketUrl}
          festivalDate={festivalDate}
          festivalLocation={festivalLocation}
          heroImage={homepage?.heroImage ?? undefined}
          heroVideoUrl={homepage?.heroVideoUrl ?? undefined}
          countdownTarget={countdownTarget}
        />

        <LineupSection artists={normalizedArtists} />

        <TicketsSection
          title={tickets?.title ?? 'BOLETOS'}
          description={tickets?.description ?? ''}
          tiers={ticketTiers}
        />

        <ScheduleSection schedule={normalizedSchedule} />

        {venue && (
          <VenueSection
            name={venue.name}
            address={venue.address}
            description={venue.description ?? undefined}
            mapUrl={venue.mapUrl ?? undefined}
            image={venue.image ?? undefined}
            transportInfo={venue.transportInfo}
          />
        )}

        <GallerySection items={normalizedGallery} />

        <FaqSection items={normalizedFaq} />
      </main>

      <Footer
        siteName={siteSettings?.siteName ?? 'FUTUR Festival'}
        tagline={siteSettings?.tagline ?? undefined}
        social={social}
        sponsors={sponsorsData}
        ticketUrl={ticketUrl}
      />
    </>
  );
}
