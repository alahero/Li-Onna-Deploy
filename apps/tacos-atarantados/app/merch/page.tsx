import Image from 'next/image';
import Link from 'next/link';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';
import { Footer } from '@/components/footer';
import type { Metadata } from 'next';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Merch',
  description: 'Merch de Tacos Atarantados — muy pronto.',
};

async function getMerchData() {
  const reader = createReader(process.cwd(), keystaticConfig);
  const [merch, siteSettings] = await Promise.all([
    reader.singletons.merch.read().catch(() => null),
    reader.singletons.siteSettings.read().catch(() => null),
  ]);
  return { merch, siteSettings };
}

export default async function MerchPage() {
  const { merch, siteSettings } = await getMerchData();
  const comingSoonText = merch?.comingSoonText ?? 'muy pronto';
  return (
    <>
      <div style={{ position: 'relative', minHeight: '100vh', background: '#0c7528' }}>
        <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
          <Image
            src="/images/hero-bg.png"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.1 }}
          />
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <header
            style={{
              height: '90px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(12,117,40,0.9)',
            }}
          >
            <Link href="/">
              <Image src="/images/logo.png" alt="Tacos Atarantados" width={170} height={46} style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            </Link>
          </header>

          <main
            style={{
              minHeight: 'calc(100vh - 90px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              padding: '60px 24px',
            }}
          >
            <Image
              src="/images/nav-merch.png"
              alt="MERCH"
              width={468}
              height={202}
              style={{ maxWidth: '100%', height: 'auto', filter: 'brightness(0) invert(1)' }}
            />
            <p
              style={{
                fontFamily: '"Gothic Regular", sans-serif',
                fontWeight: 400,
                fontSize: '64px',
                color: '#ffffff',
                margin: 0,
                textAlign: 'center',
                letterSpacing: '-0.01em',
              }}
            >
              {comingSoonText}
            </p>
            <Image
              src="/images/nav-gif.gif"
              alt=""
              width={160}
              height={160}
              unoptimized
              style={{ width: '160px', height: '160px' }}
            />
          </main>
        </div>
      </div>
      <Footer
        facebookUrl={siteSettings?.facebookUrl}
        instagramUrl={siteSettings?.instagramUrl}
        tiktokUrl={siteSettings?.tiktokUrl}
        twitterUrl={siteSettings?.twitterUrl}
      />
    </>
  );
}
