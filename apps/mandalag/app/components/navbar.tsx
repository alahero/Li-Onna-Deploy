'use client';

import { useState } from 'react';
import Link from 'next/link';

interface NavbarProps {
  logoImage: string;
  link1Text: string;
  link2Text: string;
  link3Text: string;
}

function ChevronDown() {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 1L5 5L9 1" />
    </svg>
  );
}

export default function Navbar({ logoImage, link1Text, link2Text, link3Text }: NavbarProps) {
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
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none', flexShrink: 0 }}>
          <div
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
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="font-inter"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: 500,
              letterSpacing: '-0.01em',
              lineHeight: '2em',
              color: '#fff',
            }}
          >
            {link1Text} <ChevronDown />
          </button>
          <span
            className="font-inter"
            style={{ fontSize: '15px', fontWeight: 500, letterSpacing: '-0.01em', lineHeight: '2em', color: '#fff', cursor: 'pointer' }}
          >
            {link2Text}
          </span>
          <span
            className="font-inter"
            style={{ fontSize: '15px', fontWeight: 500, letterSpacing: '-0.01em', lineHeight: '2em', color: '#fff', cursor: 'pointer' }}
          >
            {link3Text}
          </span>
        </div>
      </div>
    </nav>
  );
}
