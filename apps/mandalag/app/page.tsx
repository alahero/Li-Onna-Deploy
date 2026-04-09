import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../keystatic.config';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Divisions from './components/divisions';
import Portfolio from './components/portfolio';
import Newsletter from './components/newsletter';
import Press from './components/press';
import Footer from './components/footer';

export const revalidate = 3600;

const defaultDivisions = [
  { title: 'Daylife', description: 'Transforming normal days into extraordinary experiences.', video: '/assets/videos/OCFeezDYPIb3z0si1RnNiifcK3o.mp4' },
  { title: 'Nightlife', description: 'Immersive experiences crafted for every type of guest.', video: '/assets/videos/7tiqi431R1KYIVCJlrK16dnLdIU.mp4' },
  { title: 'Gastronomic', description: 'Innovative cuisine, captivating atmospheres, and extraordinary flavors.', video: '/assets/videos/eq7W1DDNviB31t2pfiwkBmYaviM.mp4' },
  { title: 'Events', description: 'From roaring festivals to intimate, high-end gatherings.', video: '/assets/videos/aQSesW4Wk7lSRTbI5Fp1zEZArdw.mp4' },
];

const defaultVenues = [
  { name: 'Bagatelle', image: '/assets/images/HSjEBFvbZVDMKm9IX4vwwfW3wlI_e442d74f.jpg', category: 'Gastronomic', url: 'https://bagatelle.com/' },
  { name: 'Tehmplo', image: '/assets/images/JLsOFj6OpVVLpYO6TtJvJ37Kxg_e442d74f.jpg', category: 'Nightlife', url: 'https://www.tehmplo.com' },
  { name: 'Sala de Despecho', image: '/assets/images/sqWnUy1KBncNEwAHNQpAKuaS79g_e442d74f.jpg', category: 'Nightlife', url: 'https://saladedespecho.mx' },
  { name: 'Bonbonniere', image: '/assets/images/WOqCmD0j7ub3dpWN61gmjkukIsQ_e442d74f.jpg', category: 'Nightlife', url: 'https://bonbonniere.mx' },
  { name: 'Houdinni', image: '/assets/images/iVWvmgTWKcKE5IuFp0aARq2xHk_e442d74f.jpg', category: 'Nightlife', url: 'https://www.instagram.com/houdinni.madrid' },
  { name: 'FUTUR Festival', image: '/assets/images/O3DqJlhRNrm9K7rwRhK7x3PiTrw_e442d74f.jpg', category: 'Events', url: 'https://www.instagram.com/futurfestivalmexico' },
];

const defaultPress = [
  {
    title: "Graziano's se convertirá en el mejor restaurante en Puerta de Hierro",
    source: 'El Heraldo',
    image: '/assets/images/aX70cNCEqMI50hfgPTOyEGcE_5d2c854d.jpg',
    url: 'https://heraldodemexico.com.mx/estilo-de-vida/2024/6/17/grazianos-se-convertira-en-el-mejor-restaurante-en-puerta-de-hierro-613161.html',
  },
];

async function getData() {
  try {
    const reader = createReader(process.cwd(), keystaticConfig);

    const [
      siteSettings,
      homepage,
      navbar,
      portfolio,
      newsletter,
      pressSection,
      footer,
    ] = await Promise.all([
      reader.singletons.siteSettings.read().catch(() => null),
      reader.singletons.homepage.read().catch(() => null),
      reader.singletons.navbar.read().catch(() => null),
      reader.singletons.portfolio.read().catch(() => null),
      reader.singletons.newsletter.read().catch(() => null),
      reader.singletons.pressSection.read().catch(() => null),
      reader.singletons.footer.read().catch(() => null),
    ]);

    const [divisionSlugs, venueSlugs, pressSlugs] = await Promise.all([
      reader.collections.divisions.list().catch(() => [] as string[]),
      reader.collections.venues.list().catch(() => [] as string[]),
      reader.collections.press.list().catch(() => [] as string[]),
    ]);

    const divisions = divisionSlugs.length > 0
      ? (await Promise.all(divisionSlugs.map((s) => reader.collections.divisions.read(s).catch(() => null)))).filter(Boolean)
      : null;

    const venues = venueSlugs.length > 0
      ? (await Promise.all(venueSlugs.map((s) => reader.collections.venues.read(s).catch(() => null)))).filter(Boolean)
      : null;

    const press = pressSlugs.length > 0
      ? (await Promise.all(pressSlugs.map((s) => reader.collections.press.read(s).catch(() => null)))).filter(Boolean)
      : null;

    return {
      siteSettings,
      homepage,
      navbar,
      portfolio,
      newsletter,
      pressSection,
      footer,
      divisions,
      venues,
      press,
    };
  } catch {
    return {
      siteSettings: null,
      homepage: null,
      navbar: null,
      portfolio: null,
      newsletter: null,
      pressSection: null,
      footer: null,
      divisions: null,
      venues: null,
      press: null,
    };
  }
}

export default async function HomePage() {
  const data = await getData();

  const hero = {
    line1: data.homepage?.heroLine1 || 'WORLD CLASS',
    line2: data.homepage?.heroLine2 || 'EXPERIENCES',
    line3: data.homepage?.heroLine3 || 'CRAFTERS',
    videoSrc: data.homepage?.heroVideo || '/assets/videos/OCFeezDYPIb3z0si1RnNiifcK3o.mp4',
    posterSrc: data.homepage?.heroPoster || undefined,
    cta1Text: data.homepage?.cta1Text || 'EXPLORE OUR VENUES',
    cta1Link: data.homepage?.cta1Link || '#venues',
    cta2Text: data.homepage?.cta2Text || 'RESERVATIONS',
    cta2Link: data.homepage?.cta2Link || '#reservations',
  };

  const nav = {
    logoImage: data.navbar?.logoImage || '/assets/images/mandala-logo-nav.svg',
    logoAlt: data.navbar?.logoAlt || 'Mandala Group',
    link1Text: data.navbar?.link1Text || 'Venues',
    link1Url: data.navbar?.link1Url || '#venues',
    link2Text: data.navbar?.link2Text || 'Corporate Events',
    link2Url: data.navbar?.link2Url || '/corporate-events',
    link3Text: data.navbar?.link3Text || 'Private Events',
    link3Url: data.navbar?.link3Url || '/private-events',
  };

  const divisions = data.divisions && data.divisions.length > 0
    ? data.divisions.sort((a, b) => ((a as any).order || 0) - ((b as any).order || 0)).map((d: any) => ({ title: d.title, description: d.description, video: d.video }))
    : defaultDivisions;

  const venues = data.venues && data.venues.length > 0
    ? data.venues.sort((a, b) => ((a as any).order || 0) - ((b as any).order || 0)).map((v: any) => ({ name: v.name, image: v.image || '', category: v.category, url: v.url || '#' }))
    : defaultVenues;

  const venueCategories = [...new Set(venues.map(v => v.category))];

  const nl = {
    heading: data.newsletter?.heading || 'Newsletter',
    description: data.newsletter?.description || "Subscribe to the ultimate insider's guide to unforgettable experiences.",
    image: data.newsletter?.image || '/assets/images/wDCJ6PQEkdOh0itp6dwputtehl4_f0569aea.png',
    emailPlaceholder: data.newsletter?.emailPlaceholder || 'your@email.com',
    buttonText: data.newsletter?.buttonText || 'Submit',
    submitUrl: data.newsletter?.submitUrl || undefined,
    successMessage: data.newsletter?.successMessage || undefined,
    errorMessage: data.newsletter?.errorMessage || undefined,
  };

  const press = data.press && data.press.length > 0
    ? data.press.sort((a, b) => ((a as any).order || 0) - ((b as any).order || 0)).map((p: any) => ({ title: p.title, source: p.source || '', image: p.image || '', url: p.url || '#' }))
    : defaultPress;

  const footerLinks = data.footer
    ? [
        { text: data.footer.link1Text || 'PRIVACY', url: data.footer.link1Url || '/privacy' },
        { text: data.footer.link2Text || 'TERMS & CONDITIONS', url: data.footer.link2Url || '/terms' },
        { text: data.footer.link3Text || 'LEGAL', url: data.footer.link3Url || '/legal' },
      ]
    : [
        { text: 'PRIVACY', url: '/privacy' },
        { text: 'TERMS & CONDITIONS', url: '/terms' },
        { text: 'LEGAL', url: '/legal' },
      ];

  return (
    <main>
      <Navbar {...nav} />
      <Hero {...hero} />
      <Divisions divisions={divisions} />
      <Portfolio
        venues={venues}
        categories={venueCategories}
        sectionTitle={data.portfolio?.sectionTitle || undefined}
        allLabel={data.portfolio?.allLabel || 'All'}
        loadMoreLabel={data.portfolio?.loadMoreLabel || 'Load More'}
      />
      <Newsletter {...nl} />
      <Press
        articles={press}
        sectionTitle={data.pressSection?.sectionTitle || undefined}
      />
      <Footer
        logoImage={data.footer?.logoImage || '/assets/images/mandala-logo-white.svg'}
        copyright={data.footer?.copyright || undefined}
        address={data.footer?.address || undefined}
        phone={data.footer?.phone || undefined}
        email={data.footer?.email || undefined}
        showSocials={data.footer?.showSocials ?? true}
        social={data.siteSettings?.social as any}
        links={footerLinks}
      />
    </main>
  );
}
