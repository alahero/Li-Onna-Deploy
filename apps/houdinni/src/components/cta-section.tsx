'use client';

import Image from 'next/image';

/**
 * CTA Section ("Example 2") — pixel-perfect from Framer extraction.
 *
 * Framer spec:
 *   - Tag: A (link), position sticky, z-index 1
 *   - Rect: x:0, y:3561, w:1200, h:683
 *   - Padding: 100px 0px
 *   - Overflow: clip
 *   - Background image: cta-bg.png (1200x683, objectFit cover)
 *   - Overlay image: cta-overlay.png (1336x469, objectFit contain, x:-68, offset from section top ~76px)
 */
export function CTASection() {
  return (
    <a
      href="https://tickets.houdinni.com"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'block',
        position: 'sticky',
        top: '34px', /* below nav */
        zIndex: 1,
        width: '100%',
        height: '683px',
        padding: '100px 0px',
        overflow: 'clip',
      }}
    >
      {/* Background image — full cover */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <Image
          src="/cta-bg.png"
          alt=""
          fill
          style={{ objectFit: 'cover' }}
          quality={85}
        />
      </div>

      {/* Overlay image — 1336x469, positioned at x:-68, centered vertically with offset */}
      <div
        style={{
          position: 'absolute',
          left: '-68px',
          top: '76px', /* 3637 - 3561 = 76px from section top */
          width: '1336px',
          height: '469px',
        }}
      >
        <Image
          src="/cta-overlay.png"
          alt="Houdinni"
          fill
          style={{ objectFit: 'contain' }}
          quality={90}
        />
      </div>
    </a>
  );
}
