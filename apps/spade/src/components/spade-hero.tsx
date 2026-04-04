'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ENTRANCE_EASE = [0.44, 0, 0.56, 1] as const;

// ─── Nav links ───────────────────────────────────────────────────────────────

const NAV_LEFT = [
  { label: 'INSTAGRAM', href: 'https://instagram.com/spade_gdl', external: true },
  { label: 'TIKTOK', href: 'https://tiktok.com/@spade.gdl', external: true },
];
const NAV_RIGHT = [
  { label: 'ABOUT', href: '#about', external: false },
  { label: 'CONTACT', href: '#contact', external: false },
];

// ─── Hamburger icon ──────────────────────────────────────────────────────────

function Hamburger({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <button
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      onClick={onToggle}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 8,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 36,
        height: 36,
        position: 'relative',
      }}
    >
      <motion.span
        animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        style={{
          display: 'block', width: 20, height: 2,
          backgroundColor: '#999999', position: 'absolute',
          transformOrigin: 'center', borderRadius: 1,
        }}
      />
      <motion.span
        animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        style={{
          display: 'block', width: 20, height: 2,
          backgroundColor: '#999999', position: 'absolute',
          transformOrigin: 'center', borderRadius: 1,
        }}
      />
    </button>
  );
}

function MobileDropdown({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.97 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          style={{
            position: 'absolute', top: 'calc(100% + 8px)', right: 0,
            backgroundColor: 'rgb(17,17,17)', border: '1px solid rgb(34,34,34)',
            borderRadius: 15, padding: '12px 0', minWidth: 200, zIndex: 100,
          }}
        >
          {[...NAV_LEFT, ...NAV_RIGHT].map((link) => (
            <a
              key={link.label} href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              onClick={onClose}
              style={{
                display: 'block', padding: '10px 20px', color: '#ffffff',
                fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500,
                letterSpacing: '0.04em', textDecoration: 'none', textTransform: 'uppercase',
              }}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Nav link style ─────────────────────────────────────────────────────────

const navLinkStyle: React.CSSProperties = {
  color: '#ffffff',
  fontFamily: 'Inter, sans-serif',
  fontSize: 12,
  fontWeight: 500,
  letterSpacing: '0.04em',
  textDecoration: 'none',
  textTransform: 'uppercase',
  transition: 'opacity 0.2s ease',
};

// ─── Top navigation — split left/right with centered wordmark ───────────────

function SpadeNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, zIndex: 50,
        height: 72,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(20px, 4vw, 60px)',
      }}
    >
      {/* Left links */}
      <div className="spade-nav-desktop" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {NAV_LEFT.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" style={navLinkStyle}>
            {link.label}
          </a>
        ))}
      </div>

      {/* Right links */}
      <div className="spade-nav-desktop" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {NAV_RIGHT.map((link) => (
          <a key={link.label} href={link.href} style={navLinkStyle}>
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <div className="spade-nav-mobile" style={{ position: 'relative', marginLeft: 'auto' }}>
        <Hamburger open={menuOpen} onToggle={() => setMenuOpen(!menuOpen)} />
        <MobileDropdown open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </nav>
  );
}

// ─── Root component ──────────────────────────────────────────────────────────

export function SpadeHero() {
  return (
    <>
      <style>{`
        .spade-nav-desktop { display: flex; }
        .spade-nav-mobile  { display: none;  }
        @media (max-width: 639px) {
          .spade-nav-desktop { display: none !important; }
          .spade-nav-mobile  { display: block !important; }
        }
      `}</style>

      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          minHeight: 600,
          overflow: 'hidden',
          backgroundColor: 'rgb(28,28,28)',
        }}
      >
        {/* Hero background — entrance animation */}
        <motion.div
          initial={{ opacity: 0.001, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: ENTRANCE_EASE }}
          style={{ position: 'absolute', inset: 0, zIndex: 0 }}
        >
          <Image
            src="/hero-bg.png"
            alt=""
            fill
            priority
            quality={95}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="100vw"
            aria-hidden
          />
        </motion.div>

        {/* Navigation */}
        <SpadeNav />

        {/* Centered content */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0,
            pointerEvents: 'none',
          }}
        >
          {/* Top wordmark */}
          <motion.div
            initial={{ opacity: 0.001, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3, ease: ENTRANCE_EASE }}
            style={{ marginBottom: 24 }}
          >
            <Image
              src="/wordmark.png"
              alt="SPADE"
              width={177}
              height={60}
              priority
              style={{
                width: 'clamp(114px, 12.3vw, 177px)',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </motion.div>

          {/* GUADALAJARA, MX */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            style={{
              fontFamily: '"Arial Black", Arial, sans-serif',
              fontSize: 14,
              fontWeight: 900,
              letterSpacing: '0.1em',
              color: '#ffffff',
              textTransform: 'uppercase',
              margin: '0 0 32px 0',
            }}
          >
            GUADALAJARA, MX
          </motion.p>

          {/* Metallic spade — static, centered */}
          <motion.div
            initial={{ opacity: 0.001, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3, ease: ENTRANCE_EASE }}
          >
            <Image
              src="/metallic-spade.png"
              alt="SPADE"
              width={393}
              height={237}
              priority
              style={{
                width: 'clamp(214px, 27.3vw, 393px)',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
              sizes="(max-width: 390px) 214px, (max-width: 810px) 340px, 393px"
            />
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.5 }}
            style={{
              marginTop: 32,
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: '"Arial Black", Arial, sans-serif',
                fontSize: 14,
                fontWeight: 900,
                letterSpacing: '0.015em',
                color: '#ffffff',
                lineHeight: 1.6,
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              AV. REAL DE ACUEDUCTO 300,<br />
              PUERTA DE HIERRO 45116
            </p>
          </motion.div>
        </div>

        {/* Bottom inverted wordmark */}
        <motion.div
          initial={{ opacity: 0.001, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: ENTRANCE_EASE }}
          style={{
            position: 'absolute',
            bottom: 36,
            left: '50%',
            transform: 'translateX(-50%) rotate(180deg)',
            zIndex: 30,
          }}
        >
          <Image
            src="/wordmark.png"
            alt=""
            width={177}
            height={60}
            style={{
              width: 'clamp(114px, 12.3vw, 177px)',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
            aria-hidden
          />
        </motion.div>
      </section>
    </>
  );
}
