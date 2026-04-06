import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero';
import { MarqueeTicker, EventsTicker } from '@/components/marquee-ticker';
import { ConceptSection } from '@/components/concept-section';
import { GallerySection } from '@/components/gallery-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export const revalidate = 3600;

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main style={{ paddingTop: '34px' /* offset fixed nav */ }}>
        {/* ── Hero (sticky, position sticky top: 34px) ── */}
        <HeroSection />

        {/* ── Marquee Ticker 1 — brand manifesto ── */}
        <MarqueeTicker background="#000000" color="#ffffff" speed="normal" />

        {/* ── Events teaser ticker ── */}
        <EventsTicker />

        {/* ── Marquee Ticker 2 — slower, cyan accent ── */}
        <MarqueeTicker
          background="#050505"
          color="#99eeff"
          speed="slow"
          text="HOUDINNI // 一 會兒你看見我 一 會兒你看不見我 // NOW YOU SEE ME, NOW YOU DON'T // LA MÚSICA VA PRIMERO // HOUDINNI OR NOWHERE"
        />

        {/* ── Brand Manifesto + Streets + DJ Booth ── */}
        <ConceptSection />

        {/* ── Gallery: sticky scroll + horizontal pan ── */}
        <GallerySection />

        {/* ── Marquee Ticker 3 — between gallery and contact ── */}
        <MarqueeTicker
          background="#000000"
          color="#3388ff"
          speed="fast"
          text="HOUDINNI OR NOWHERE // MUSIC IS THE ANSWER // AUTHENTICITY, COMMUNITY, AND IRREVERENCE // CRAFTING A COMMUNITY OF LOUD MUSIC-LOVERS FREAKS"
        />

        {/* ── Contact / Info ── */}
        <ContactSection />
      </main>

      {/* ── Footer ── */}
      <Footer />
    </>
  );
}
