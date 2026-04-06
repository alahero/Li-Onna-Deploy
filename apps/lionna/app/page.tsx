import { Hero } from '@/components/hero';
import { Navbar } from '@/components/navbar';
import { PhotoGallery } from '@/components/photo-gallery';
import { DishTicker } from '@/components/dish-ticker';
import { ContactCta } from '@/components/contact-cta';
import { BrandStatement } from '@/components/brand-statement';
import { BrandMarquee } from '@/components/brand-marquee';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <>
      {/* Full-viewport video hero (100vh, #005BFF) */}
      <Hero />

      {/* Sticky nav bar appears after hero scroll */}
      <Navbar />

      {/* 8 progressive blur layers -- exact from live site (y=960, h=72) */}
      <div
        aria-hidden
        style={{
          position: 'relative',
          width: '100%',
          height: 72,
          zIndex: 2,
        }}
      >
        {[
          { blur: 0.25, mask: 'linear-gradient(rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 25%, rgba(0,0,0,0) 37.5%)', z: 1 },
          { blur: 0.5,  mask: 'linear-gradient(rgba(0,0,0,0) 12.5%, rgb(0,0,0) 25%, rgb(0,0,0) 37.5%, rgba(0,0,0,0) 50%)', z: 2 },
          { blur: 1,    mask: 'linear-gradient(rgba(0,0,0,0) 25%, rgb(0,0,0) 37.5%, rgb(0,0,0) 50%, rgba(0,0,0,0) 62.5%)', z: 3 },
          { blur: 2,    mask: 'linear-gradient(rgba(0,0,0,0) 37.5%, rgb(0,0,0) 50%, rgb(0,0,0) 62.5%, rgba(0,0,0,0) 75%)', z: 4 },
          { blur: 4,    mask: 'linear-gradient(rgba(0,0,0,0) 50%, rgb(0,0,0) 62.5%, rgb(0,0,0) 75%, rgba(0,0,0,0) 87.5%)', z: 5 },
          { blur: 8,    mask: 'linear-gradient(rgba(0,0,0,0) 62.5%, rgb(0,0,0) 75%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%)', z: 6 },
          { blur: 16,   mask: 'linear-gradient(rgba(0,0,0,0) 75%, rgb(0,0,0) 87.5%, rgb(0,0,0) 100%)', z: 7 },
          { blur: 32,   mask: 'linear-gradient(rgba(0,0,0,0) 87.5%, rgb(0,0,0) 100%)', z: 8 },
        ].map((layer, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              inset: 0,
              backdropFilter: `blur(${layer.blur}px)`,
              WebkitBackdropFilter: `blur(${layer.blur}px)`,
              WebkitMaskImage: layer.mask,
              maskImage: layer.mask,
              zIndex: layer.z,
            }}
          />
        ))}
      </div>

      {/* Main Content -- bg #F6F6F2 */}
      <main style={{ backgroundColor: '#F6F6F2', position: 'relative', zIndex: 2 }}>
        {/* Photo gallery with floating cards + "hola Madrid" text */}
        <PhotoGallery />

        {/* Imprescindibles dish ticker */}
        <DishTicker />

        {/* Social CTA + contact form */}
        <ContactCta />

        {/* Contact info + map */}
        <BrandStatement />

        {/* Huge scrolling brand marquee */}
        <BrandMarquee />
      </main>

      {/* Footer -- black bg */}
      <Footer />
    </>
  );
}
