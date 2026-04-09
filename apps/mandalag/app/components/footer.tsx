import Link from 'next/link';

interface SocialLinks {
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  twitter?: string;
  whatsapp?: string;
}

interface FooterProps {
  logoImage: string;
  copyright?: string;
  address?: string;
  phone?: string;
  email?: string;
  showSocials?: boolean;
  social?: SocialLinks;
  links: { text: string; url: string }[];
}

/* Tiny inline SVG icons so we don't ship a whole icon lib. */
function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13 22v-8h3l.5-4H13V7.5c0-1.2.3-2 2-2H17V2.1C16.6 2 15.4 2 14.1 2 11.4 2 10 3.7 10 6.8V10H7v4h3v8h3Z" />
    </svg>
  );
}
function IconTikTok() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19 8.6a6.7 6.7 0 0 1-4-1.3V15a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 .9.1v3.1a2.4 2.4 0 1 0 1.6 2.3V2h3a4 4 0 0 0 4 4v2.6Z" />
    </svg>
  );
}
function IconX() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.5 2h3l-6.5 7.4L21.5 22h-5l-4.5-5.9L6.8 22H3.7l7-8-7-12h5.1l4.1 5.4L17.5 2Zm-1 18h1.7L7.6 4H5.8l10.7 16Z" />
    </svg>
  );
}
function IconWhatsApp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20Zm4.5-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1s-.6.8-.8 1c-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.3-.5-.4-.9-1-1.2-1.6-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.3.2-.4 0-.2 0-.3-.1-.4l-.7-1.6c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.8-1.1 2.1-.7 3.3.7 1.9 2.1 3.4 3.9 4.2.8.4 1.6.5 2.4.4.5-.1 1-.4 1.4-.8.3-.3.5-.8.5-1.2v-.6c-.1-.1-.2-.2-.4-.2Z" />
    </svg>
  );
}

function SocialIcons({ social }: { social: SocialLinks }) {
  const items: { href: string; label: string; icon: React.ReactNode }[] = [];
  if (social.instagram) items.push({ href: social.instagram, label: 'Instagram', icon: <IconInstagram /> });
  if (social.facebook) items.push({ href: social.facebook, label: 'Facebook', icon: <IconFacebook /> });
  if (social.tiktok) items.push({ href: social.tiktok, label: 'TikTok', icon: <IconTikTok /> });
  if (social.twitter) items.push({ href: social.twitter, label: 'X (Twitter)', icon: <IconX /> });
  if (social.whatsapp) {
    const href = social.whatsapp.startsWith('http')
      ? social.whatsapp
      : `https://wa.me/${social.whatsapp.replace(/[^0-9]/g, '')}`;
    items.push({ href, label: 'WhatsApp', icon: <IconWhatsApp /> });
  }

  if (items.length === 0) return null;

  return (
    <div style={{ display: 'flex', gap: '12px', color: 'rgba(255,255,255,0.8)' }}>
      {items.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex' }}
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}

export default function Footer({
  logoImage,
  copyright,
  address,
  phone,
  email,
  showSocials,
  social,
  links,
}: FooterProps) {
  const hasContactBlock = Boolean(address || phone || email);

  return (
    <footer
      style={{
        backgroundColor: '#000',
        width: '100%',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'stretch',
        padding: '40px 30px 24px',
        gap: '24px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexFlow: 'row',
          width: '100%',
          maxWidth: '1500px',
          margin: '0 auto',
          gap: '20px',
        }}
      >
        {/* Left: Logo + contact */}
        <div
          style={{
            flex: '1 0 0',
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'flex-start',
            gap: '16px',
          }}
        >
          <div
            role="img"
            aria-label="Mandala Group"
            style={{
              width: '250px',
              height: '44px',
              flexShrink: 0,
              backgroundSize: '100% 100%',
              backgroundImage: `url('${logoImage}')`,
              backgroundRepeat: 'no-repeat',
            }}
          />

          {hasContactBlock ? (
            <address
              className="font-inter"
              style={{
                fontStyle: 'normal',
                fontSize: '13px',
                lineHeight: '1.7em',
                color: 'rgb(170,170,170)',
              }}
            >
              {address ? <div style={{ whiteSpace: 'pre-line' }}>{address}</div> : null}
              {phone ? <div>{phone}</div> : null}
              {email ? (
                <a href={`mailto:${email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {email}
                </a>
              ) : null}
            </address>
          ) : null}

          {showSocials && social ? <SocialIcons social={social} /> : null}
        </div>

        {/* Right: Links */}
        <div
          style={{
            flex: '1 0 0',
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            gap: '4px',
          }}
        >
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

      {copyright ? (
        <div
          className="font-inter"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.07)',
            paddingTop: '16px',
            textAlign: 'center',
            fontSize: '12px',
            color: 'rgb(110, 110, 110)',
          }}
        >
          {copyright}
        </div>
      ) : null}
    </footer>
  );
}
