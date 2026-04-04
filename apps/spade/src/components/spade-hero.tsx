'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Cubic ease matching Framer design ──────────────────────────────────────
// ease [0.44, 0, 0.56, 1] — entrance tween 3s
const ENTRANCE_EASE = [0.44, 0, 0.56, 1] as const;

// ─── Word-by-word blur-in ────────────────────────────────────────────────────

function BlurText({
  text,
  startDelay = 0.5,
  style,
}: {
  text: string;
  startDelay?: number;
  style?: React.CSSProperties;
}) {
  const words = text.split(' ');
  return (
    <span aria-label={text} style={{ display: 'block', ...style }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            type: 'spring',
            bounce: 0,
            duration: 2.1,
            delay: startDelay + i * 0.05,
          }}
          style={{ display: 'inline-block', marginRight: '0.3em' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

// ─── Draggable metallic spade ────────────────────────────────────────────────

function DraggableSpade() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    // Constraint layer fills the full hero — pointer-events-none so
    // only the inner draggable element captures events
    <div
      ref={constraintsRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 20,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <motion.div
        drag
        dragMomentum={false}
        dragSnapToOrigin
        dragTransition={{ bounceStiffness: 282, bounceDamping: 49 }}
        dragConstraints={constraintsRef}
        style={{ cursor: 'grab', touchAction: 'none', pointerEvents: 'auto' }}
        // Entrance: opacity 0.001→1, scale 0.9→1, tween 3s
        initial={{ opacity: 0.001, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 3,
            ease: ENTRANCE_EASE,
          },
        }}
        whileDrag={{ cursor: 'grabbing', scale: 1.04 }}
      >
        {/* Float loop wrapper — separate motion.div to avoid conflict with drag */}
        <motion.div
          animate={{ rotate: [0, 3, 0] }}
          transition={{
            rotate: {
              duration: 5,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
              delay: 3,
            },
          }}
        >
          {/* Desktop: 393×237 | Tablet: 340×205 | Mobile: 214×129 */}
          <div
            style={{
              // clamp(214px, …, 393px) width responsive
              width: 'clamp(214px, calc(393px * min(1, (100vw - 390px) / (1440px - 390px) + 0))',
              height: 'auto',
              position: 'relative',
            }}
          >
            <Image
              src="/metallic-spade.png"
              alt="SPADE metallic card"
              width={393}
              height={237}
              priority
              draggable={false}
              style={{
                width: 'clamp(214px, 27.3vw, 393px)',
                height: 'auto',
                objectFit: 'contain',
                userSelect: 'none',
                display: 'block',
              }}
              sizes="(max-width: 390px) 214px, (max-width: 810px) 340px, 393px"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

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
      {/* Top bar */}
      <motion.span
        animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        style={{
          display: 'block',
          width: 20,
          height: 2,
          backgroundColor: '#999999',
          position: 'absolute',
          transformOrigin: 'center',
          borderRadius: 1,
        }}
      />
      {/* Bottom bar */}
      <motion.span
        animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        style={{
          display: 'block',
          width: 20,
          height: 2,
          backgroundColor: '#999999',
          position: 'absolute',
          transformOrigin: 'center',
          borderRadius: 1,
        }}
      />
    </button>
  );
}

// ─── Nav links ───────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: 'INSTAGRAM', href: 'https://instagram.com/spade_gdl', external: true },
  { label: 'TIKTOK', href: 'https://tiktok.com/@spade.gdl', external: true },
  { label: 'ABOUT', href: '#about', external: false },
  { label: 'CONTACT', href: '#contact', external: false },
];

// ─── Mobile dropdown ─────────────────────────────────────────────────────────

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
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            backgroundColor: 'rgb(17,17,17)',
            border: '1px solid rgb(34,34,34)',
            borderRadius: 15,
            padding: '12px 0',
            minWidth: 200,
            zIndex: 100,
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              onClick={onClose}
              style={{
                display: 'block',
                padding: '10px 20px',
                color: '#ffffff',
                fontFamily: 'Inter, sans-serif',
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                textTransform: 'uppercase',
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

// ─── Top navigation bar ──────────────────────────────────────────────────────

function SpadeNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background:
          'linear-gradient(180deg, rgba(0,0,0,0.24) 0%, rgba(0,0,0,0) 100%)',
        height: 72,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(20px, 4vw, 60px)',
      }}
    >
      {/* Wordmark */}
      <Link href="/" aria-label="SPADE" style={{ display: 'block', flexShrink: 0 }}>
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
          sizes="(max-width: 390px) 114px, (max-width: 810px) 130px, 177px"
        />
      </Link>

      {/* Desktop links */}
      <div className="spade-nav-desktop" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            style={{
              color: '#999999',
              fontFamily: 'Inter, sans-serif',
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: '0.04em',
              textDecoration: 'none',
              textTransform: 'uppercase',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = '#ffffff')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = '#999999')
            }
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <div className="spade-nav-mobile" style={{ position: 'relative' }}>
        <Hamburger open={menuOpen} onToggle={() => setMenuOpen(!menuOpen)} />
        <MobileDropdown open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </nav>
  );
}

// ─── Address block ───────────────────────────────────────────────────────────

const ADDRESS_LINES = [
  'GUADALAJARA, MX',
  'AV. REAL DE ACUEDUCTO 300,',
  'PUERTA DE HIERRO 45116',
];

function AddressBlock() {
  const baseStyle: React.CSSProperties = {
    fontFamily: '"Arial Black", Arial, sans-serif',
    fontSize: 14,
    fontWeight: 900,
    letterSpacing: '0.015em',
    color: '#ffffff',
    lineHeight: 1.6,
    textTransform: 'uppercase',
  };

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 40,
        left: 'clamp(20px, 4vw, 60px)',
        zIndex: 30,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      {ADDRESS_LINES.map((line, i) => (
        <BlurText
          key={line}
          text={line}
          startDelay={0.5 + i * 0.15}
          style={baseStyle}
        />
      ))}
    </div>
  );
}

// ─── Bottom inverted wordmark ────────────────────────────────────────────────

function BottomWordmark() {
  return (
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
        sizes="(max-width: 390px) 114px, (max-width: 810px) 130px, 177px"
        aria-hidden
      />
    </motion.div>
  );
}

// ─── Root component ──────────────────────────────────────────────────────────

export function SpadeHero() {
  return (
    <>
      <style>{`
        /* Responsive nav: show desktop links on ≥640px, hamburger on <640px */
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

        {/* Draggable + floating metallic spade */}
        <DraggableSpade />

        {/* Address text — blur word-by-word */}
        <AddressBlock />

        {/* Inverted wordmark — bottom center */}
        <BottomWordmark />
      </section>
    </>
  );
}
