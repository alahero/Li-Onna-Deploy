import { createReader } from '@keystatic/core/reader';
import Image from 'next/image';
import type { Metadata } from 'next';
import keystaticConfig from '../../keystatic.config';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { renderTextBody } from '../lib/render-text-body';

export const revalidate = 3600;

async function getData() {
  const reader = createReader(process.cwd(), keystaticConfig);
  const [page, siteSettings, navbar, footer] = await Promise.all([
    reader.singletons.corporateEventsPage.read().catch(() => null),
    reader.singletons.siteSettings.read().catch(() => null),
    reader.singletons.navbar.read().catch(() => null),
    reader.singletons.footer.read().catch(() => null),
  ]);
  return { page, siteSettings, navbar, footer };
}

export async function generateMetadata(): Promise<Metadata> {
  const { page } = await getData();
  return {
    title: page?.title || 'Corporate Events',
    description: page?.intro || undefined,
  };
}

export default async function CorporateEventsPage() {
  const { page, siteSettings, navbar, footer } = await getData();
  const body = renderTextBody(page?.body);

  return (
    <main style={{ backgroundColor: '#0e0e0f', color: '#fff', minHeight: '100vh' }}>
      <Navbar
        logoImage={navbar?.logoImage || '/assets/images/mandala-logo-nav.svg'}
        logoAlt={navbar?.logoAlt || 'Mandala Group'}
        link1Text={navbar?.link1Text || 'Venues'}
        link1Url={navbar?.link1Url || '#venues'}
        link2Text={navbar?.link2Text || 'Corporate Events'}
        link2Url={navbar?.link2Url || '/corporate-events'}
        link3Text={navbar?.link3Text || 'Private Events'}
        link3Url={navbar?.link3Url || '/private-events'}
      />

      {page?.heroImage ? (
        <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden' }}>
          <Image src={page.heroImage} alt="" fill style={{ objectFit: 'cover' }} priority sizes="100vw" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(0,0,0,0.3), rgba(14,14,15,1))' }} />
        </div>
      ) : null}

      <article
        className="font-inter"
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '80px 24px 120px',
          fontSize: '17px',
          lineHeight: 1.7,
          color: 'rgba(255,255,255,0.9)',
        }}
      >
        <h1
          className="font-figtree"
          style={{
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            margin: '0 0 16px',
            color: '#fff',
          }}
        >
          {page?.title || 'Corporate Events'}
        </h1>
        {page?.intro ? (
          <p style={{ fontSize: '20px', opacity: 0.75, marginBottom: '48px' }}>{page.intro}</p>
        ) : null}
        <div>{body}</div>
      </article>

      <Footer
        logoImage={footer?.logoImage || '/assets/images/mandala-logo-white.svg'}
        copyright={footer?.copyright || undefined}
        address={footer?.address || undefined}
        phone={footer?.phone || undefined}
        email={footer?.email || undefined}
        showSocials={footer?.showSocials ?? true}
        social={siteSettings?.social as any}
        links={[
          { text: footer?.link1Text || 'PRIVACY', url: footer?.link1Url || '/privacy' },
          { text: footer?.link2Text || 'TERMS & CONDITIONS', url: footer?.link2Url || '/terms' },
          { text: footer?.link3Text || 'LEGAL', url: footer?.link3Url || '/legal' },
        ]}
      />
    </main>
  );
}
