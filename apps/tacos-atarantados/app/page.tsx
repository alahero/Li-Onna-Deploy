import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../keystatic.config';
import { HeroSection } from '@/components/hero';
import { Ticker } from '@/components/ticker';
import { AboutSection } from '@/components/about-section';
import { MovementSection } from '@/components/movement-section';
import { Footer } from '@/components/footer';

export const revalidate = 3600;

async function getPageData() {
  const reader = createReader(process.cwd(), keystaticConfig);
  const [siteSettings, homepage] = await Promise.all([
    reader.singletons.siteSettings.read().catch(() => null),
    reader.singletons.homepage.read().catch(() => null),
  ]);
  return { siteSettings, homepage };
}

export default async function HomePage() {
  const { siteSettings, homepage } = await getPageData();

  return (
    <>
      <main>
        <HeroSection />
        <Ticker />
        <AboutSection aboutText={homepage?.aboutText} />
        <MovementSection />
      </main>
      <Footer
        facebookUrl={siteSettings?.facebookUrl}
        instagramUrl={siteSettings?.instagramUrl}
        tiktokUrl={siteSettings?.tiktokUrl}
        twitterUrl={siteSettings?.twitterUrl}
      />
    </>
  );
}
