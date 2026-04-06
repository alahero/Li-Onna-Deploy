'use client';

import Image from 'next/image';
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
                fontFamily: 'Inter, "Inter Placeholder", sans-serif',
                fontSize: 15, fontWeight: 500,
                letterSpacing: '-0.15px', lineHeight: '30px',
                textDecoration: 'none', textTransform: 'uppercase',
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

// ─── Nav link style (matches live Framer: Inter 15px/500, -0.15px spacing) ──

const navLinkStyle: React.CSSProperties = {
  color: '#ffffff',
  fontFamily: 'Inter, "Inter Placeholder", sans-serif',
  fontSize: 15,
  fontWeight: 500,
  letterSpacing: '-0.15px',
  lineHeight: '30px',
  textDecoration: 'none',
  textTransform: 'uppercase',
  transition: 'opacity 0.2s ease',
};

// ─── Top navigation — split left/right (matches live Framer NAV: h=98, p=20) ─

function SpadeNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, zIndex: 50,
        height: 98,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px',
      }}
    >
      {/* Left links (live gap ~28px between INSTAGRAM and TIKTOK) */}
      <div className="spade-nav-desktop" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        {NAV_LEFT.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" style={navLinkStyle}>
            {link.label}
          </a>
        ))}
      </div>

      {/* Right links (live gap ~50px between ABOUT and CONTACT) */}
      <div className="spade-nav-desktop" style={{ display: 'flex', gap: 50, alignItems: 'center' }}>
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

      <header
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          minHeight: 600,
          maxHeight: 900,
          overflow: 'hidden',
          backgroundColor: 'rgb(28,28,28)',
          padding: '40px 50px',
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

        {/*
          Content layout uses absolute positioning to match the live Framer site exactly.
          Live coordinates (at 1200px viewport, 900px header):
            Top wordmark:      (535, 49,  130, 44)  — centered horizontally
            GUADALAJARA, MX:   y=194                 — left-aligned at x=50 (padding)
            Metallic spade:    (428, 309, 344, 212)  — centered horizontally, z-index 10
            Address line 1:    y=645                 — center-aligned
            Address line 2:    y=662                 — center-aligned
            Bottom wordmark:   (535, 807, 130, 44)  — centered, rotated 180deg
        */}

        {/* Top wordmark (live: 130x44 at y=49, centered) */}
        <motion.div
          initial={{ opacity: 0.001, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: ENTRANCE_EASE }}
          style={{
            position: 'absolute',
            top: '5.44%',    /* 49/900 */
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        >
          <Image
            src="/wordmark.png"
            alt="SPADE"
            width={130}
            height={44}
            priority
            style={{
              width: 'clamp(90px, 10.8vw, 130px)',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </motion.div>

        {/* GUADALAJARA, MX (live: y=194, Arial-Black 14px/400, spacing 0.21px, lh 16.8px, left-aligned at padding edge) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          style={{
            position: 'absolute',
            top: '21.56%',    /* 194/900 */
            left: 50,
            zIndex: 10,
            fontFamily: 'Arial-Black, "Arial Black", sans-serif',
            fontSize: 14,
            fontWeight: 400,
            letterSpacing: '0.21px',
            lineHeight: '16.8px',
            color: '#ffffff',
            textTransform: 'uppercase',
            margin: 0,
            pointerEvents: 'none',
          }}
        >
          GUADALAJARA, MX
        </motion.p>

        {/* Metallic spade (live: 344x212 at y=309, centered, z-index 10) */}
        <motion.div
          initial={{ opacity: 0.001, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: ENTRANCE_EASE }}
          style={{
            position: 'absolute',
            top: '34.33%',    /* 309/900 */
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        >
          <Image
            src="/metallic-spade.png"
            alt="SPADE"
            width={344}
            height={212}
            priority
            style={{
              width: 'clamp(200px, 28.7vw, 344px)',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
            sizes="(max-width: 390px) 200px, (max-width: 810px) 280px, 344px"
          />
        </motion.div>

        {/* Address (live: y=645/662, Arial-Black 14px/400, spacing 0.21px, lh 16.8px, center-aligned) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.5 }}
          style={{
            position: 'absolute',
            top: '71.67%',    /* 645/900 */
            left: 0,
            right: 0,
            zIndex: 10,
            textAlign: 'center',
            pointerEvents: 'none',
          }}
        >
          <p
            style={{
              fontFamily: 'Arial-Black, "Arial Black", sans-serif',
              fontSize: 14,
              fontWeight: 400,
              letterSpacing: '0.21px',
              lineHeight: '16.8px',
              color: '#ffffff',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            AV. REAL DE ACUEDUCTO 300,<br />
            PUERTA DE HIERRO 45116
          </p>
        </motion.div>

        {/* Bottom inverted wordmark (live: 130x44 at y=807, centered, rotated 180deg) */}
        <motion.div
          initial={{ opacity: 0.001, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: ENTRANCE_EASE }}
          style={{
            position: 'absolute',
            top: '89.67%',    /* 807/900 */
            left: '50%',
            transform: 'translateX(-50%) rotate(180deg)',
            zIndex: 30,
            pointerEvents: 'none',
          }}
        >
          <Image
            src="/wordmark.png"
            alt=""
            width={130}
            height={44}
            style={{
              width: 'clamp(90px, 10.8vw, 130px)',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
            aria-hidden
          />
        </motion.div>
      </header>
    </>
  );
}
