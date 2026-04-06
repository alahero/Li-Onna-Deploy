'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Nav links ordered L→R: VIP TABLES → EVENTS → [LOGO] → ABOUT → LOCATION
const navLinks = [
  { label: 'VIP TABLES', href: '#viptables', image: '/images/nav-viptables.png' },
  { label: 'EVENTS', href: '#events', image: '/images/nav-events.png' },
  { label: 'ABOUT', href: '#about', image: '/images/nav-about.png' },
  { label: 'LOCATION', href: '#location', image: '/images/nav-location.png' },
];

const leftLinks = navLinks.slice(0, 2);
const rightLinks = navLinks.slice(2);

interface NavLinkItemProps {
  label: string;
  href: string;
  image: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

function NavLinkItem({ label, href, image, onClick }: NavLinkItemProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative flex items-center justify-center" style={{ width: 106 }}>
      <a
        href={href}
        onClick={(e) => onClick(e, href)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          fontFamily: '"Source Sans 3", sans-serif',
          fontSize: 16,
          fontWeight: 500,
          color: hovered ? '#0088ff' : 'rgb(156, 155, 155)',
          letterSpacing: '0.05em',
          textDecoration: 'none',
          transition: 'color 0.2s ease',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </a>

      {/* Hover thumbnail preview */}
      {hovered && (
        <div
          style={{
            position: 'absolute',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%) translateY(-8px)',
            width: 80,
            height: 90,
            overflow: 'hidden',
            borderRadius: 4,
            pointerEvents: 'none',
            zIndex: 100,
          }}
        >
          <Image
            src={image}
            alt={label}
            fill
            style={{ objectFit: 'cover' }}
            sizes="80px"
            unoptimized
          />
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 30;
        window.scrollTo({ top, behavior: 'smooth' });
      }
      setMenuOpen(false);
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 60,
        zIndex: 6,
        backgroundColor: 'rgba(14, 15, 18, 0.2)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Desktop nav — 1200px max-width, flex row */}
      <nav
        className="hidden lg:flex"
        style={{
          width: '100%',
          maxWidth: 1200,
          height: 60,
          alignItems: 'center',
          justifyContent: 'space-around',
          gap: 116,
          padding: '0 24px',
        }}
      >
        {/* Left links: VIP TABLES, EVENTS */}
        <div style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
          {leftLinks.map((link) => (
            <NavLinkItem
              key={link.href}
              label={link.label}
              href={link.href}
              image={link.image}
              onClick={handleNavClick}
            />
          ))}
        </div>

        {/* Center logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <div style={{ position: 'relative', width: 126, height: 20 }}>
            <Image
              src="/images/logo.png"
              alt="Tehmplo"
              fill
              style={{ objectFit: 'contain' }}
              priority
              unoptimized
            />
          </div>
        </Link>

        {/* Right links: ABOUT, LOCATION */}
        <div style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
          {rightLinks.map((link) => (
            <NavLinkItem
              key={link.href}
              label={link.label}
              href={link.href}
              image={link.image}
              onClick={handleNavClick}
            />
          ))}
        </div>

        {/* Book Now CTA */}
        <a
          href="https://wa.me/+52+529981909288?text=Hi,%20I%20would%20like%20to%20get%20info%20for%20VIP%20Tables%20at%20Tehmplo"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: '"Source Sans 3", sans-serif',
            fontSize: 19,
            fontWeight: 400,
            color: 'rgb(239, 128, 36)',
            letterSpacing: '0.14em',
            lineHeight: '1.5em',
            border: '2px solid rgb(239, 128, 36)',
            borderRadius: 5,
            padding: '0 16px',
            height: 33,
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            transition: 'background-color 0.2s ease',
          }}
        >
          BOOK NOW
        </a>
      </nav>

      {/* Mobile nav */}
      <div
        className="flex lg:hidden"
        style={{
          width: '100%',
          height: 60,
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
        }}
      >
        {/* Logo */}
        <Link href="/">
          <div style={{ position: 'relative', width: 100, height: 16 }}>
            <Image
              src="/images/logo.png"
              alt="Tehmplo"
              fill
              style={{ objectFit: 'contain' }}
              priority
              unoptimized
            />
          </div>
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            width: 46,
            height: 37,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <span
            style={{
              display: 'block',
              width: 24,
              height: 3,
              background: '#ffffff',
              borderRadius: 3,
              transition: 'transform 0.3s ease',
              transform: menuOpen ? 'rotate(45deg) translateY(5.5px)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: 24,
              height: 3,
              background: '#ffffff',
              borderRadius: 3,
              transition: 'opacity 0.3s ease',
              opacity: menuOpen ? 0 : 1,
            }}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        style={{
          position: 'absolute',
          top: 60,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(14, 15, 18, 0.95)',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          overflow: 'hidden',
          maxHeight: menuOpen ? 400 : 0,
          transition: 'max-height 0.4s ease',
        }}
        className="lg:hidden"
      >
        <nav style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                fontFamily: '"Source Sans 3", sans-serif',
                fontSize: 18,
                fontWeight: 500,
                color: 'rgb(156, 155, 155)',
                letterSpacing: '0.14em',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/+52+529981909288?text=Hi,%20I%20would%20like%20to%20get%20info%20for%20VIP%20Tables%20at%20Tehmplo"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: '"Source Sans 3", sans-serif',
              fontSize: 19,
              fontWeight: 400,
              color: 'rgb(239, 128, 36)',
              letterSpacing: '0.14em',
              border: '2px solid rgb(239, 128, 36)',
              borderRadius: 5,
              padding: '8px 20px',
              textDecoration: 'none',
              display: 'inline-block',
              textAlign: 'center',
            }}
          >
            BOOK NOW
          </a>
        </nav>
      </div>
    </header>
  );
}
