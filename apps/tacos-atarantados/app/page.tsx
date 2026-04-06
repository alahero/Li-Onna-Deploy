import { HeroSection } from '@/components/hero';
import { Ticker } from '@/components/ticker';
import { AboutSection } from '@/components/about-section';
import { MovementSection } from '@/components/movement-section';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <Ticker />
        <AboutSection />
        <MovementSection />
      </main>
      <Footer />
    </>
  );
}
