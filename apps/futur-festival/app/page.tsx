import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../keystatic.config';
import { HomepageClient } from '@/components/homepage-client';

// Revalidate every hour to pick up CMS changes
export const revalidate = 3600;

async function getPageData() {
  const reader = createReader(process.cwd(), keystaticConfig);

  const [homepage, siteSettings, tickets, venue, sponsors, artistSlugs, scheduleSlugs, gallerySlugs, faqSlugs] =
    await Promise.all([
      reader.singletons.homepage.read().catch(() => null),
      reader.singletons.siteSettings.read().catch(() => null),
      reader.singletons.tickets.read().catch(() => null),
      reader.singletons.venue.read().catch(() => null),
      reader.singletons.sponsors.read().catch(() => null),
      reader.collections.artists.list().catch(() => [] as string[]),
      reader.collections.schedule.list().catch(() => [] as string[]),
      reader.collections.gallery.list().catch(() => [] as string[]),
      reader.collections.faq.list().catch(() => [] as string[]),
    ]);

  // Read all collection entries in parallel
  const [artists, scheduleEntries, galleryEntries, faqEntries] = await Promise.all([
    Promise.all(
      artistSlugs.map(async (slug) => {
        const data = await reader.collections.artists.read(slug).catch(() => null);
        return data ? { slug, ...data } : null;
      })
    ),
    Promise.all(
      scheduleSlugs.map(async (slug) => {
        const data = await reader.collections.schedule.read(slug).catch(() => null);
        return data ? { slug, ...data } : null;
      })
    ),
    Promise.all(
      gallerySlugs.map(async (slug) => {
        const data = await reader.collections.gallery.read(slug).catch(() => null);
        return data ? { slug, ...data } : null;
      })
    ),
    Promise.all(
      faqSlugs.map(async (slug) => {
        const data = await reader.collections.faq.read(slug).catch(() => null);
        return data ? { slug, ...data } : null;
      })
    ),
  ]);

  return {
    homepage,
    siteSettings,
    tickets,
    venue,
    sponsors,
    artists: artists.filter(Boolean),
    schedule: scheduleEntries.filter(Boolean),
    gallery: galleryEntries.filter(Boolean),
    faq: faqEntries.filter(Boolean),
  };
}

export default async function HomePage() {
  const data = await getPageData();

  const siteName = data.siteSettings?.siteName ?? 'FUTUR Festival';
  const tagline = data.siteSettings?.tagline ?? 'El futuro del sonido. México.';

  return <HomepageClient {...{
    // Hero
    heroTitle: data.homepage?.heroTitle ?? 'FUTUR FESTIVAL',
    heroSubtitle: data.homepage?.heroSubtitle ?? 'El futuro del sonido. México.',
    heroCtaText: data.homepage?.heroCtaText ?? 'Consigue tus boletos',
    heroVideoUrl: data.homepage?.heroVideoUrl ?? undefined,
    heroImage: data.homepage?.heroImage ?? undefined,
    ticketUrl: data.homepage?.ticketUrl ?? undefined,
    festivalDate: data.homepage?.festivalDate ?? '14–16 NOV 2025',
    festivalLocation: data.homepage?.festivalLocation ?? 'Foro Sol, Ciudad de México',
    countdownTarget: data.homepage?.countdownTarget ?? '2025-11-14T20:00:00',
    // Site
    siteName,
    tagline,
    social: data.siteSettings?.social ?? undefined,
    // Tickets
    ticketsTitle: data.tickets?.title ?? 'BOLETOS',
    ticketsDescription: data.tickets?.description ?? 'Elige tu experiencia. Acceso limitado.',
    ticketTiers: (data.tickets?.tiers ?? []).map((t) => ({
      name: t.name ?? 'General',
      price: t.price ?? '',
      description: t.description ?? '',
      features: t.features ?? '',
      soldOut: t.soldOut ?? false,
      buyUrl: t.buyUrl ?? undefined,
      featured: t.featured ?? false,
    })),
    // Venue
    venueName: data.venue?.name ?? 'Foro Sol',
    venueAddress: data.venue?.address ?? 'Av. Viaducto Río de la Piedad s/n, Ciudad de México',
    venueDescription: data.venue?.description ?? undefined,
    venueMapUrl: data.venue?.mapUrl ?? undefined,
    venueImage: data.venue?.image ?? undefined,
    // Sponsors
    sponsorsTitle: data.sponsors?.title ?? 'PATROCINADORES',
    sponsorTiers: (data.sponsors?.tiers ?? []).map((t) => ({
      tierName: t.tierName ?? '',
      logos: (t.logos ?? []).filter(Boolean) as string[],
    })),
    // Artists (name is a slug field: { name, slug })
    artists: (data.artists ?? []).map((a: any) => ({
      name: typeof a.name === 'object' ? a.name.name : (a.name ?? ''),
      slug: a.slug ?? (typeof a.name === 'object' ? a.name.slug : ''),
      genre: a.genre ?? 'Electronic',
      country: a.country ?? 'México',
      image: a.image ?? undefined,
      headliner: a.headliner ?? false,
      day: a.day ?? 'friday',
      performanceTime: a.performanceTime ?? undefined,
      stage: a.stage ?? undefined,
      socialUrl: a.socialUrl ?? undefined,
    })),
    // Schedule (day is a slug field: { name, slug })
    schedule: (data.schedule ?? []).map((s: any) => ({
      day: typeof s.day === 'object' ? s.day.name : (s.day ?? ''),
      stages: (s.stages ?? []).map((stage: any) => ({
        stageName: stage.stageName ?? 'Escenario Principal',
        sets: (stage.sets ?? []).map((set: any) => ({
          artistName: set.artistName ?? '',
          startTime: set.startTime ?? '',
          endTime: set.endTime ?? '',
          headliner: set.headliner ?? false,
        })),
      })),
    })),
    // Gallery (title is a slug field: { name, slug })
    gallery: (data.gallery ?? []).map((g: any) => ({
      title: typeof g.title === 'object' ? g.title.name : (g.title ?? ''),
      image: g.image ?? undefined,
      edition: g.edition ?? 'FUTUR 2024',
      order: g.order ?? 0,
    })),
    // FAQ (question is a slug field: { name, slug })
    faq: (data.faq ?? []).map((f: any) => ({
      question: typeof f.question === 'object' ? f.question.name : (f.question ?? ''),
      answer: f.answer ?? '',
      order: f.order ?? 0,
    })),
  }} />;
}

export const metadata = {
  title: 'FUTUR Festival — Coming to Mexico',
  description: 'FUTUR Festival is coming to Mexico. Register now to be the first to know.',
  openGraph: {
    title: 'FUTUR Festival — Coming to Mexico',
    description: 'FUTUR Festival is coming to Mexico. Register now.',
    url: 'https://futurfestival.mx',
    siteName: 'FUTUR Festival',
    type: 'website',
  },
};
