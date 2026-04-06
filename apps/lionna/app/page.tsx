import { Hero } from '@/components/hero';
import { Navbar } from '@/components/navbar';
import { PhotoGallery } from '@/components/photo-gallery';
import { DishTicker } from '@/components/dish-ticker';
import { ContactCta } from '@/components/contact-cta';
import { BrandStatement } from '@/components/brand-statement';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <>
      {/* Full-viewport video hero (100vh, #005BFF) */}
      <Hero />

      {/* Sticky nav bar appears after hero scroll */}
      <Navbar />

      {/* Main Content — bg #F6F6F2 */}
      <main style={{ backgroundColor: '#F6F6F2', position: 'relative', zIndex: 2 }}>
        {/* Photo gallery with floating cards + "hola Madrid" text */}
        <PhotoGallery />

        {/* Imprescindibles dish ticker */}
        <DishTicker />

        {/* Social CTA + contact form */}
        <ContactCta />

        {/* Contact info + map + brand statement card */}
        <BrandStatement />
      </main>

      {/* Footer — black bg */}
      <Footer />
    </>
  );
}
