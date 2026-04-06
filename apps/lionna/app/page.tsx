import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { PhotoGallery } from '@/components/photo-gallery';
import { DishTicker } from '@/components/dish-ticker';
import { BrandStatement } from '@/components/brand-statement';
import { ContactCta } from '@/components/contact-cta';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <>
      {/* Sticky nav bar (z-index: 4, #005BFF, 60px) */}
      <Navbar />

      <main style={{ backgroundColor: '#F7F8F3' }}>
        {/* Full-viewport video hero */}
        <Hero />

        {/* Photo gallery with 7 floating cards */}
        <PhotoGallery />

        {/* Imprescindibles + 3-row dish ticker */}
        <DishTicker />

        {/* Brand statement */}
        <BrandStatement />

        {/* Instagram + contact form CTA */}
        <ContactCta />
      </main>

      <Footer />
    </>
  );
}
