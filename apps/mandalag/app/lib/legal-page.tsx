import React from 'react';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { renderTextBody } from './render-text-body';

interface LegalPageData {
  title?: string | null;
  lastUpdated?: string | null;
  body?: string | null;
}

interface LegalPageLayoutProps {
  page: LegalPageData | null;
}

/**
 * Shared layout used by /privacy, /terms, and /legal. Renders a branded
 * Navbar + article wrapper + Footer and renders the body via renderTextBody.
 */
export async function LegalPageLayout({ page }: LegalPageLayoutProps) {
  const reader = createReader(process.cwd(), keystaticConfig);
  const [siteSettings, navbar, footer] = await Promise.all([
    reader.singletons.siteSettings.read().catch(() => null),
    reader.singletons.navbar.read().catch(() => null),
    reader.singletons.footer.read().catch(() => null),
  ]);

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

      <article
        className="font-inter"
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '80px 24px 120px',
          fontSize: '16px',
          lineHeight: 1.7,
          color: 'rgba(255,255,255,0.9)',
        }}
      >
        <h1
          className="font-figtree"
          style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            margin: '0 0 12px',
            color: '#fff',
          }}
        >
          {page?.title || 'Untitled'}
        </h1>
        {page?.lastUpdated ? (
          <p style={{ fontSize: '13px', opacity: 0.5, margin: '0 0 40px' }}>
            Última actualización: {page.lastUpdated}
          </p>
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
