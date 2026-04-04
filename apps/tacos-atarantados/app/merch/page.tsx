import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Merch',
  description: 'Merch de Tacos Atarantados — muy pronto.',
};

export default function MerchPage() {
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
              muy pronto
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
      <Footer />
    </>
  );
}
