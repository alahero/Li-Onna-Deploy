import { createReader } from '@keystatic/core/reader';
import type { Metadata } from 'next';
import keystaticConfig from '../../keystatic.config';
import { LegalPageLayout } from '../lib/legal-page';

export const revalidate = 3600;

async function getPage() {
  const reader = createReader(process.cwd(), keystaticConfig);
  return reader.singletons.privacyPage.read().catch(() => null);
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage();
  return {
    title: page?.title || 'Privacy Policy',
    robots: { index: true, follow: true },
  };
}

export default async function PrivacyPage() {
  const page = await getPage();
  return <LegalPageLayout page={page} />;
}
