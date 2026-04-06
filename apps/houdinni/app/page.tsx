import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero';
import { GallerySection } from '@/components/gallery-section';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';

export const revalidate = 3600;

/**
 * Houdinni homepage — pixel-perfect from Framer extraction.
 *
 * Structure (from houdinni.json):
 *   1. NAV — 34px marquee ticker, fixed top, bg rgba(0,0,0,0.96)
 *   2. Main container: 1200x4004
 *      a. Hero background (subway-desktop.png, 1200x561)
 *      b. XL section (sticky interactive hero with buttons)
 *      c. Example 1 — Gallery (3000px scroll height, sticky 900px viewport)
 *      d. Example 2 — CTA section (sticky, 683px, link to tickets)
 *   3. Footer — Houdinni/Footer component (1190x441)
 */
export default function HomePage() {
  return (
    <>
      <Navbar />

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
        {/* ── Hero (subway background + interactive elements) ── */}
        <HeroSection />

        {/* ── Gallery: sticky scroll + horizontal pan (Example 1, h:3000) ── */}
        <GallerySection />

        {/* ── CTA Section (Example 2, h:683, sticky) ── */}
        <CTASection />
      </main>

      {/* ── Footer ── */}
      <Footer />
    </>
  );
}
