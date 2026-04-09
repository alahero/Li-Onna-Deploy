import { createReader } from '@keystatic/core/reader';
import type { Metadata } from 'next';
import keystaticConfig from '../../keystatic.config';
import { LegalPageLayout } from '../lib/legal-page';

export const revalidate = 3600;

async function getPage() {
  const reader = createReader(process.cwd(), keystaticConfig);
  return reader.singletons.termsPage.read().catch(() => null);
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage();
  return {
    title: page?.title || 'Terms & Conditions',
    robots: { index: true, follow: true },
  };
}

export default async function TermsPage() {
  const page = await getPage();
  return <LegalPageLayout page={page} />;
}
