'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ENTRANCE_EASE = [0.44, 0, 0.56, 1] as const;

// ─── Props ──────────────────────────────────────────────────────────────────

interface SpadeHeroProps {
  instagramUrl?: string;
  tiktokUrl?: string;
  heroImage?: string | null;
  heroTitle?: string | null;
  heroSubtitle?: string | null;
}

// ─── Hamburger icon ─────────────────────────────────────────────────────────

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

// ─── Mobile dropdown ────────────────────────────────────────────────────────

function MobileDropdown({
  open,
  onClose,
  navLeft,
  navRight,
}: {
  open: boolean;
  onClose: () => void;
  navLeft: { label: string; href: string; external: boolean }[];
  navRight: { label: string; href: string; external: boolean }[];
}) {
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
          {[...navLeft, ...navRight].map((link) => (
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

// ─── Top navigation ─────────────────────────────────────────────────────────

function SpadeNav({
  navLeft,
  navRight,
}: {
  navLeft: { label: string; href: string; external: boolean }[];
  navRight: { label: string; href: string; external: boolean }[];
}) {
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
      {/* Left links (INSTAGRAM, TIKTOK) */}
      <div className="spade-nav-desktop" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        {navLeft.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" style={navLinkStyle}>
            {link.label}
          </a>
        ))}
      </div>

      {/* Right links (ABOUT, CONTACT) */}
      <div className="spade-nav-desktop" style={{ display: 'flex', gap: 50, alignItems: 'center' }}>
        {navRight.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            style={navLinkStyle}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <div className="spade-nav-mobile" style={{ position: 'relative', marginLeft: 'auto' }}>
        <Hamburger open={menuOpen} onToggle={() => setMenuOpen(!menuOpen)} />
        <MobileDropdown open={menuOpen} onClose={() => setMenuOpen(false)} navLeft={navLeft} navRight={navRight} />
      </div>
    </nav>
  );
}

// ─── Root component ─────────────────────────────────────────────────────────

export function SpadeHero({
  instagramUrl = 'https://instagram.com/spade_gdl',
  tiktokUrl = 'https://tiktok.com/@spade.gdl',
  heroImage,
  heroTitle,
  heroSubtitle,
}: SpadeHeroProps) {
  const bgSrc = heroImage || '/hero-bg.png';
  const navLeft = [
    { label: 'INSTAGRAM', href: instagramUrl, external: true },
    { label: 'TIKTOK', href: tiktokUrl, external: true },
  ];
  const navRight = [
    { label: 'ABOUT', href: '#about', external: false },
    { label: 'CONTACT', href: '#contact', external: false },
  ];

  return (
    <>
      <style jsx global>{`
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
          overflow: 'hidden',
          backgroundColor: 'rgb(28,28,28)',
          padding: '40px 50px',
        }}
      >
        {/* Hero background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            backgroundImage: `url(${bgSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Navigation */}
        <SpadeNav navLeft={navLeft} navRight={navRight} />

        {/* Top wordmark (centered) */}
        <motion.div
          initial={{ opacity: 0.001, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: ENTRANCE_EASE }}
          style={{
            position: 'absolute',
            top: '5.44%',
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

        {/* GUADALAJARA, MX (left-aligned at padding edge) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          style={{
            position: 'absolute',
            top: '21.56%',
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
          {heroTitle || 'GUADALAJARA, MX'}
        </motion.p>

        {/* Metallic spade icon (centered) */}
        <motion.div
          initial={{ opacity: 0.001, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: ENTRANCE_EASE }}
          style={{
            position: 'absolute',
            top: '34.33%',
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

        {/* Address (centered) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.5 }}
          style={{
            position: 'absolute',
            top: '71.67%',
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
              whiteSpace: 'pre-line',
            }}
          >
            {heroSubtitle || 'AV. REAL DE ACUEDUCTO 300,\nPUERTA DE HIERRO 45116'}
          </p>
        </motion.div>

        {/* Bottom inverted wordmark (centered, rotated 180deg) */}
        <motion.div
          initial={{ opacity: 0.001, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: ENTRANCE_EASE }}
          style={{
            position: 'absolute',
            top: '89.67%',
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
