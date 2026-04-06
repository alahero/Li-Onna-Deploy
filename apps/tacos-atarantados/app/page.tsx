import { HeroSection } from '@/components/hero';
import { AboutSection } from '@/components/about-section';
import { Ticker } from '@/components/ticker';
import { MovementSection } from '@/components/movement-section';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <Ticker />
        <MovementSection />
      </main>
      <Footer />
    </>
  );
}
