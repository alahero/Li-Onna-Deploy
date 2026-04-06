import Link from 'next/link';

interface FooterProps {
  logoImage: string;
  links: { text: string; url: string }[];
}

export default function Footer({ logoImage, links }: FooterProps) {
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
      }}
    >
      <div style={{ display: 'flex', flexFlow: 'row', width: '100%', maxWidth: '1500px', height: '100%' }}>
        {/* Left: Logo */}
        <div style={{ flex: '1 0 0', display: 'flex', flexFlow: 'column', alignItems: 'flex-start', gap: '10px', height: '100%', padding: '30px' }}>
          <div
            style={{
              width: '250px',
              height: '44px',
              flexShrink: 0,
              backgroundSize: '100% 100%',
              backgroundImage: `url('${logoImage}')`,
              backgroundRepeat: 'no-repeat',
            }}
            aria-label="Mandala Group"
          />
        </div>

        {/* Right: Links */}
        <div style={{ flex: '1 0 0', display: 'flex', flexFlow: 'column', alignItems: 'flex-end', justifyContent: 'flex-end', gap: '2px', height: '100%', padding: '30px' }}>
          {links.map((link) => (
            <Link
              key={link.text}
              href={link.url}
              className="font-figtree"
              style={{ fontSize: '14px', color: 'rgb(110, 110, 110)', textDecoration: 'none' }}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
