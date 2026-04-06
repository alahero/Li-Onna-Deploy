import Link from 'next/link';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

async function getFooterData() {
  try {
    const reader = createReader(process.cwd(), keystaticConfig);
    const settings = await reader.singletons.siteSettings.read();
    return settings;
  } catch {
    return null;
  }
}

export default async function Footer() {
  const settings = await getFooterData();

  return (
    <footer
      style={{
        backgroundColor: '#000',
        width: '100%',
        height: '163px',
        display: 'flex',
        flexFlow: 'row',
        placeContent: 'center',
        alignItems: 'center',
        gap: '10px',
        position: 'relative',
        overflow: 'visible',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexFlow: 'row',
          width: '100%',
          maxWidth: '1500px',
          height: '100%',
          padding: '0',
        }}
      >
        {/* Left: Logo */}
        <div
          style={{
            flex: '1 0 0',
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            gap: '10px',
            height: '100%',
            padding: '30px',
          }}
        >
          <div
            style={{
              width: '250px',
              height: '44px',
              flexShrink: 0,
              backgroundSize: '100% 100%',
              backgroundImage: "url('/assets/images/mandala-logo-white.svg')",
              backgroundRepeat: 'no-repeat',
            }}
            aria-label="Mandala Group"
          />
        </div>

        {/* Right: Legal links */}
        <div
          style={{
            flex: '1 0 0',
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            gap: '2px',
            height: '100%',
            padding: '30px',
          }}
        >
          <Link
            href="/privacy"
            className="font-figtree"
            style={{
              fontSize: '14px',
              color: 'rgb(110, 110, 110)',
              textDecoration: 'none',
            }}
          >
            PRIVACY
          </Link>
          <Link
            href="/terms"
            className="font-figtree"
            style={{
              fontSize: '14px',
              color: 'rgb(110, 110, 110)',
              textDecoration: 'none',
            }}
          >
            TERMS & CONDITIONS
          </Link>
          <Link
            href="/legal"
            className="font-figtree"
            style={{
              fontSize: '14px',
              color: 'rgb(110, 110, 110)',
              textDecoration: 'none',
            }}
          >
            LEGAL
          </Link>
        </div>
      </div>
    </footer>
  );
}
