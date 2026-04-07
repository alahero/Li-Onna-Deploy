import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../keystatic.config';
import { SpadeHero } from '@/components/spade-hero';

// Revalidate every hour to pick up CMS changes
export const revalidate = 3600;

async function getSiteSettings() {
  const reader = createReader(process.cwd(), keystaticConfig);
  const siteSettings = await reader.singletons.siteSettings.read().catch(() => null);
  return siteSettings;
}

export default async function HomePage() {
  const siteSettings = await getSiteSettings();

  // Extract social URLs from CMS
  const social = siteSettings?.social as Record<string, string> | undefined;
  const instagramUrl = social?.instagram || 'https://instagram.com/spade_gdl';
  const tiktokUrl = social?.tiktok || 'https://tiktok.com/@spade.gdl';

  return (
    <main>
      <SpadeHero instagramUrl={instagramUrl} tiktokUrl={tiktokUrl} />
    </main>
  );
}
