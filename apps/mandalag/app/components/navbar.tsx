'use client';

import { useState } from 'react';
import Link from 'next/link';

interface NavbarProps {
  logoImage: string;
  logoAlt: string;
  link1Text: string;
  link1Url: string;
  link2Text: string;
  link2Url: string;
  link3Text: string;
  link3Url: string;
}

function ChevronDown() {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 1L5 5L9 1" />
    </svg>
  );
}

const linkStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '15px',
  fontWeight: 500,
  letterSpacing: '-0.01em',
  lineHeight: '2em',
  color: '#fff',
  textDecoration: 'none',
  cursor: 'pointer',
} as const;

export default function Navbar({
  logoImage,
  logoAlt,
  link1Text,
  link1Url,
  link2Text,
  link2Url,
  link3Text,
  link3Url,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 2,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.07)',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexFlow: 'row',
          placeContent: 'center',
          alignItems: 'center',
          gap: '20px',
          width: '100%',
          maxWidth: '1200px',
          height: '64px',
          padding: '20px 40px',
          margin: '0 auto',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label={logoAlt}
          style={{ display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none', flexShrink: 0 }}
        >
          <div
            role="img"
            aria-label={logoAlt}
            style={{
              width: '250px',
              height: '44px',
              backgroundSize: '100% 100%',
              backgroundImage: `url('${logoImage}')`,
              backgroundRepeat: 'no-repeat',
              imageRendering: 'auto',
            }}
          />
        </Link>

        {/* Desktop links */}
        <div
          style={{
            flex: '1 0 0',
            display: 'flex',
            flexFlow: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <Link href={link1Url} onClick={() => setMenuOpen(!menuOpen)} className="font-inter" style={linkStyle}>
            {link1Text} <ChevronDown />
          </Link>
          <Link href={link2Url} className="font-inter" style={linkStyle}>
            {link2Text}
          </Link>
          <Link href={link3Url} className="font-inter" style={linkStyle}>
            {link3Text}
          </Link>
        </div>
      </div>
    </nav>
  );
}
