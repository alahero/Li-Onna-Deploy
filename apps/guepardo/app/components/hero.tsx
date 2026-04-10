'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface HeroSectionProps {
  heroBackgroundImage?: string | null;
  heroLogoImage?: string | null;
  sunburstImage?: string | null;
}

export function HeroSection({
  heroBackgroundImage,
  heroLogoImage,
  sunburstImage,
}: HeroSectionProps = {}) {
  const bgSrc = heroBackgroundImage || '/images/hero-bg-new.png';
  const logoSrc = heroLogoImage || '/images/logo-stamp.png';
  const sunburstSrc = sunburstImage || '/images/sunburst.png';

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '85.5vh',
        overflow: 'clip',
        backgroundColor: '#3d1010',
      }}
    >
      {/* Hero background image */}
      <Image
        src={bgSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />

      {/* Contenedor fijo: centra el sol en X e Y como el logo (el motion interno solo rota) */}
      {/* Sunburst / Sol decoration — Desktop */}
      <div
        className="hidden-mobile"
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: '1219px',
          height: '1241px',
          transform: 'translate(-50%, -50%)',
          overflow: 'visible',
          pointerEvents: 'none',
        }}
      >
        <motion.div
          initial={{ rotate: 180 }}
          animate={{ rotate: 0 }}
          transition={{ type: 'spring', bounce: 0.2, duration: 10 }}
          style={{
            width: '100%',
            height: '100%',
            overflow: 'visible',
            willChange: 'transform',
            mixBlendMode: 'multiply',
          }}
        >
          <Image
            src={sunburstSrc}
            alt=""
            width={1982}
            height={2019}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </motion.div>
      </div>

      {/* Sunburst / Sol decoration — Mobile */}
      <div
        className="hidden-desktop"
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          height: '721px',
          width: 'calc(721px * 0.9817)',
          transform: 'translate(-50%, -50%)',
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <motion.div
          initial={{ rotate: 180 }}
          animate={{ rotate: 0 }}
          transition={{ type: 'spring', bounce: 0.2, duration: 10 }}
          style={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            willChange: 'transform',
            mixBlendMode: 'multiply',
          }}
        >
          <Image
            src={sunburstSrc}
            alt=""
            width={1982}
            height={2019}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </motion.div>
      </div>

      {/* GUEPARDO Logo — centered both axes */}
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', damping: 30, mass: 1, stiffness: 400 }}
        style={{
          position: 'absolute',
          width: '229px',
          height: '229px',
          left: '0',
          right: '0',
          top: '0',
          bottom: '0',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 'auto',
          marginBottom: 'auto',
          overflow: 'visible',
          aspectRatio: '1 / 1',
        }}
      >
        <Image
          src={logoSrc}
          alt="GUEPARDO"
          width={229}
          height={229}
          priority
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
      </motion.div>

      {/* Rotating "RESERVACIONES" circular text ring */}
      <div
        style={{
          position: 'absolute',
          bottom: '-45px',
          height: '140px',
          left: 'calc(49.83% - 70px)',
          width: '140px',
          willChange: 'transform',
          zIndex: 1,
        }}
      >
        <motion.svg
          viewBox="0 0 100 100"
          width="140"
          height="140"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          style={{ overflow: 'visible' }}
        >
          <defs>
            <path
              id="reservaciones-circle"
              d="M 0 50 L 0 50 A 1 1 0 0 1 100 50 L 100 50 L 100 50 A 1 1 0 0 1 0 50 L 0 50"
            />
          </defs>
          <text
            style={{
              fontFamily: '"MADE TOMMY ExtraBold", Arial, sans-serif',
              fontSize: '12px',
              letterSpacing: '0.21em',
              lineHeight: '0.1em',
              fill: 'rgb(253, 230, 186)',
              wordSpacing: '2px',
            }}
          >
            <textPath
              href="#reservaciones-circle"
              startOffset="0"
              dominantBaseline="hanging"
            >
              RESERVACIONES - RESERVACIONES -
            </textPath>
          </text>
        </motion.svg>
      </div>

      {/* Bouncing scroll arrow */}
      <motion.div
        animate={{ y: -8 }}
        transition={{
          duration: 1.6,
          ease: [0.44, 0, 0.56, 1],
          repeat: Infinity,
          repeatType: 'mirror',
        }}
        style={{
          position: 'absolute',
          bottom: '16px',
          height: '32px',
          left: 'calc(49.83% - 16px)',
          width: '32px',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Arrow down icon (Phosphor ArrowDown, weight light) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 256 256"
          fill="none"
        >
          <path
            d="M213.66 101.66l-80 80a8 8 0 0 1-11.32 0l-80-80a8 8 0 0 1 11.32-11.32L128 164.69l74.34-74.35a8 8 0 0 1 11.32 11.32z"
            fill="rgb(253, 230, 186)"
            strokeWidth="0"
          />
        </svg>
      </motion.div>
    </section>
  );
}
