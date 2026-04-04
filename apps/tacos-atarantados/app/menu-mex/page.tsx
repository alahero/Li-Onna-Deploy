import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menú',
  description: 'Descubre nuestro menú de tacos norteños.',
};

export default function MenuMexPage() {
  return (
    <>
      <div style={{ position: 'relative', minHeight: '100vh', background: '#ffffff' }}>
        {/* Full-bleed hero background */}
        <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
          <Image
            src="/images/hero-bg.png"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.15 }}
          />
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Nav bar */}
          <header
            style={{
              height: '90px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,255,255,0.92)',
              borderBottom: '2px solid #0c7528',
            }}
          >
            <Link href="/">
              <Image src="/images/logo.png" alt="Tacos Atarantados" width={170} height={46} style={{ objectFit: 'contain' }} />
            </Link>
          </header>

          <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px 80px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>
            {/* Menu card — portrait */}
            <Image
              src="/images/menu-card.png"
              alt="Menú Tacos Atarantados"
              width={540}
              height={816}
              style={{ maxWidth: '100%', height: 'auto', boxShadow: '0 16px 64px rgba(0,0,0,0.2)', borderRadius: '8px' }}
            />

            {/* Menu spread */}
            <Image
              src="/images/menu-spread.png"
              alt="Menú Tacos Atarantados"
              width={1000}
              height={667}
              style={{ maxWidth: '100%', height: 'auto', boxShadow: '0 16px 64px rgba(0,0,0,0.2)', borderRadius: '8px' }}
            />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
