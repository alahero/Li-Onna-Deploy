'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

/**
 * Gallery sticky scroll section — pixel-perfect from Framer.
 *
 * Animation spec (from design extraction §12):
 *   - "Images" container scroll-triggered horizontal pan: x: 0 → x: -1635px
 *   - Spring: { bounce: 0.2, damping: 60, delay: 0, duration: 0.1, mass: 1, stiffness: 500, type: "spring" }
 *   - Outer wrapper: x: -270 → x: -716 (desktop)
 *   - Background image: gallery-bg.png (1440×783)
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

  const rawX = useTransform(scrollYProgress, [0, 1], [0, -1635]);
  const x = useSpring(rawX, springConfig);

  const rawOuterX = useTransform(scrollYProgress, [0, 1], [-270, -716]);
  const outerX = useSpring(rawOuterX, springConfig);

  return (
    <section
      id="gallery"
      className="relative w-full overflow-hidden"
      style={{ minHeight: '80vh' }}
    >
      {/* Section background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gallery-bg.png"
          alt=""
          fill
          className="object-cover object-center"
          quality={85}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Sticky wrapper */}
      <div
        ref={containerRef}
        className="relative z-10 w-full"
        style={{ height: '300vh' }}
      >
        <div className="sticky top-[34px] w-full overflow-hidden" style={{ height: '100vh' }}>
          {/* Outer wrapper — animates x: -270 → -716 */}
          <motion.div
            style={{ x: outerX }}
            className="absolute top-0 bottom-0 flex items-center"
          >
            {/* Images container — animates x: 0 → -1635 */}
            <motion.div
              style={{ x }}
              className="flex items-center gap-0"
            >
              {/* Desktop panoramic strip */}
              <div className="hidden tablet:block shrink-0">
                <Image
                  src="/gallery/gallery-strip-desktop.png"
                  alt="Houdinni Gallery"
                  width={5339}
                  height={1503}
                  className="h-[80vh] w-auto object-cover"
                  quality={85}
                  priority
                />
              </div>
              {/* Mobile panoramic strip */}
              <div className="tablet:hidden shrink-0">
                <Image
                  src="/gallery/gallery-strip-mobile.png"
                  alt="Houdinni Gallery"
                  width={5765}
                  height={1503}
                  className="h-[70vh] w-auto object-cover"
                  quality={85}
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Gallery label overlay */}
          <div className="absolute bottom-8 left-8 z-20">
            <h2
              className="font-druk text-white text-5xl tablet:text-7xl opacity-90"
              style={{ letterSpacing: '0.02em' }}
            >
              GALLERY
            </h2>
          </div>
        </div>
      </div>

      {/* Content photo grid below strip */}
      <div
        className="relative z-10 bg-houdinni-black"
        style={{ padding: '80px 24px' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* 2-col × 3-row grid — exact Framer spec: gap 35px, height 361px */}
          <div
            className="grid"
            style={{
              display: 'grid',
              gap: '0px 35px',
              gridTemplateColumns: 'repeat(2, minmax(50px, 1fr))',
              gridTemplateRows: 'repeat(3, minmax(0, 1fr))',
              height: '361px',
              overflow: 'clip',
              marginBottom: '35px',
            }}
          >
            {['/gallery/photo-2.png', '/gallery/photo-3.png', '/gallery/photo-4.png', '/gallery/photo-5.png', '/gallery/photo-6.png', '/gallery/photo-1.png'].map((src, i) => (
              <div key={i} className="relative overflow-hidden">
                <Image
                  src={src}
                  alt={`Houdinni ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  quality={80}
                  sizes="(max-width: 810px) 50vw, 600px"
                />
              </div>
            ))}
          </div>

          {/* 3-col × 3-row grid — exact Framer spec: gap 35px, height 199px */}
          <div
            style={{
              display: 'grid',
              gap: '0px 35px',
              gridTemplateColumns: 'repeat(3, minmax(50px, 1fr))',
              gridTemplateRows: 'repeat(3, minmax(0, 1fr))',
              height: '199px',
              overflow: 'clip',
              marginBottom: '35px',
            }}
          >
            {['/gallery/logo-lightbox-1.png', '/gallery/logo-lightbox-2.png', '/gallery/photo-5.png', '/gallery/photo-4.png', '/gallery/photo-3.png', '/gallery/photo-2.png', '/gallery/photo-1.png', '/gallery/photo-6.png', '/gallery/logo-strip-1.png'].map((src, i) => (
              <div key={i} className="relative overflow-hidden">
                <Image
                  src={src}
                  alt={`Houdinni venue ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  quality={75}
                  sizes="(max-width: 810px) 33vw, 400px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
