'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Gallery sticky scroll section.
 *
 * The user scrolls vertically through a 3000px-tall container, but the
 * gallery strip scrolls horizontally within a 900px sticky viewport.
 * This creates the "scroll-jacking" horizontal pan effect.
 */
export function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  /* Map vertical scroll progress to horizontal pan distance.
     The strip is ~1779px wide inside a ~1100px viewport, so we
     need to translate roughly -(1779 + 821 - 1100) = -1500px */
  const x = useTransform(scrollYProgress, [0, 1], [0, -1500]);

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
      {/* Sticky viewport -- stays fixed while user scrolls through 3000px */}
      <div
        style={{
          position: 'sticky',
          top: '34px', /* below nav */
          width: '100%',
          height: '900px',
          overflow: 'hidden',
          zIndex: 1,
          padding: '100px 0px',
        }}
      >
        {/* Background image */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image
            src="/gallery-bg.png"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            quality={85}
          />
        </div>

        {/* Images Wrap -- overflow hidden container */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '700px',
            overflow: 'hidden',
          }}
        >
          {/* Inner container with padding */}
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
            {/* Animated horizontal pan */}
            <motion.div
              style={{
                x,
                display: 'flex',
                gap: 0,
                height: '700px',
                alignItems: 'center',
              }}
            >
              {/* Gallery strip: 1779x464 panoramic image */}
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

              {/* "THE STREETS ARE CALLIN'" text block */}
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
