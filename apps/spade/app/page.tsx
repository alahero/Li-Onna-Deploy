import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../keystatic.config';
import { SpadeHero } from '@/components/spade-hero';

// Revalidate every hour to pick up CMS changes
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

  // Extract social URLs from CMS
  const social = siteSettings?.social as Record<string, string> | undefined;
  const instagramUrl = social?.instagram || 'https://instagram.com/spade_gdl';
  const tiktokUrl = social?.tiktok || 'https://tiktok.com/@spade.gdl';

  return (
    <main>
      <SpadeHero
        instagramUrl={instagramUrl}
        tiktokUrl={tiktokUrl}
        heroImage={homepage?.heroImage}
        heroTitle={homepage?.heroTitle}
        heroSubtitle={homepage?.heroSubtitle}
      />
    </main>
  );
}
