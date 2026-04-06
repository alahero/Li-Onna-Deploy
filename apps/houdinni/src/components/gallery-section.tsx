'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

/**
 * Gallery sticky scroll section — pixel-perfect from Framer extraction.
 *
 * Framer spec:
 *   - "Example 1" container: y:561, w:1200, h:3000, overflow visible
 *   - "Sticky" div: y:561, w:1200, h:900, position sticky, padding 100px 0px, overflow hidden, z-index 1
 *   - Background image: gallery-bg.png (1200x900), objectFit cover
 *   - "Images Wrap": w:1200, h:700, overflow hidden
 *   - "Images": w:1100, h:700, padding 0px 20px, overflow visible
 *   - "Wrapper" (first): w:1779, h:700, overflow hidden
 *   - "Tren" (strip): w:1779, h:464, the panoramic gallery strip
 *   - "Wrapper" (second): w:821, h:700, overflow hidden — contains "THE STREETS ARE CALLIN'"
 *   - "THE STREETS ARE CALLIN'" text image: w:821, h:163
 *
 * Animation: horizontal pan on scroll, spring config { bounce: 0.2, damping: 60, mass: 1, stiffness: 500 }
 */
export function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  /* Spring config from Framer extraction */
  const springConfig = {
    damping: 60,
    stiffness: 500,
    mass: 1,
    bounce: 0.2,
  };

  /* Images container horizontal pan */
  const rawX = useTransform(scrollYProgress, [0, 1], [0, -1635]);
  const x = useSpring(rawX, springConfig);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '3000px',
        overflow: 'visible',
      }}
    >
      {/* Sticky viewport — 900px tall, sticks at top:34px (below nav) */}
      <div
        style={{
          position: 'sticky',
          top: '34px',
          width: '100%',
          height: '900px',
          overflow: 'hidden',
          zIndex: 1,
          padding: '100px 0px',
        }}
      >
        {/* Background image — full 1200x900 */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image
            src="/gallery-bg.png"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            quality={85}
          />
        </div>

        {/* Images Wrap — 1200x700, overflow hidden */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '700px',
            overflow: 'hidden',
          }}
        >
          {/* Images — padding 0 20px, w:1100, h:700, overflow visible */}
          <div
            style={{
              width: '100%',
              maxWidth: '1100px',
              height: '700px',
              padding: '0px 20px',
              overflow: 'visible',
              margin: '0 auto',
            }}
          >
            {/* Animated container — horizontal pan */}
            <motion.div
              style={{
                x,
                display: 'flex',
                gap: 0,
                height: '700px',
                alignItems: 'center',
              }}
            >
              {/* Wrapper 1 — gallery strip: 1779x700, overflow hidden */}
              <div
                style={{
                  flexShrink: 0,
                  width: '1779px',
                  height: '700px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {/* Tren (strip): 1779x464 */}
                <div
                  style={{
                    position: 'relative',
                    width: '1779px',
                    height: '464px',
                    flexShrink: 0,
                  }}
                >
                  {/* Desktop strip */}
                  <div className="hidden tablet:block" style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image
                      src="/gallery/gallery-strip-desktop.png"
                      alt="Houdinni Gallery"
                      fill
                      style={{ objectFit: 'cover' }}
                      quality={85}
                      priority
                    />
                  </div>
                  {/* Mobile strip */}
                  <div className="tablet:hidden" style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image
                      src="/gallery/gallery-strip-mobile.png"
                      alt="Houdinni Gallery"
                      fill
                      style={{ objectFit: 'cover' }}
                      quality={85}
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Wrapper 2 — "THE STREETS ARE CALLIN'" text: 821x700, overflow hidden */}
              <div
                style={{
                  flexShrink: 0,
                  width: '821px',
                  height: '700px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Streets text image: 821x163 */}
                <div
                  style={{
                    position: 'relative',
                    width: '821px',
                    height: '163px',
                  }}
                >
                  <Image
                    src="/streets-callin.png"
                    alt="THE STREETS ARE CALLIN'"
                    fill
                    style={{ objectFit: 'cover' }}
                    quality={90}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
