'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface AboutData {
  title?: string;
  description?: string;
}

interface AboutSectionProps {
  data?: AboutData | null;
}

// "experience the REAL Tulum" — letter by letter animated headline
// "experience the" → Austin Cyr Italic
// "REAL" → Basteleur Moonlight
// "Tulum" → Austin Cyr Italic
const headlineWords = [
  { text: 'experience ', font: 'austin-italic' },
  { text: 'the ', font: 'austin-italic' },
  { text: 'REAL ', font: 'basteleur' },
  { text: 'Tulum', font: 'austin-italic' },
];

function LetterByLetterHeadline({ inView }: { inView: boolean }) {
  // Flatten to individual characters with their font info
  const chars: { char: string; font: string; index: number }[] = [];
  let globalIndex = 0;
  for (const word of headlineWords) {
    for (const char of word.text) {
      chars.push({ char, font: word.font, index: globalIndex });
      globalIndex++;
    }
  }

  return (
    <h2
      style={{
        fontSize: 'clamp(28px, 5vw, 50px)',
        lineHeight: 1.2,
        color: '#ffffff',
        marginBottom: 32,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 0,
      }}
      aria-label="experience the REAL Tulum"
    >
      {chars.map(({ char, font, index }) => {
        const isBasteleur = font === 'basteleur';
        const isAustinItalic = font === 'austin-italic';
        return (
          <span
            key={index}
            aria-hidden="true"
            style={{
              display: 'inline-block',
              fontFamily: isBasteleur
                ? '"Basteleur Moonlight", sans-serif'
                : '"Austin Cyr Italic", serif',
              fontWeight: isBasteleur ? 300 : 400,
              fontStyle: isAustinItalic ? 'italic' : 'normal',
              whiteSpace: 'pre',
              opacity: inView ? 1 : 0.001,
              filter: inView ? 'blur(0px)' : 'blur(5px)',
              transform: inView ? 'translateY(0px)' : 'translateY(10px)',
              transition: inView
                ? `opacity 0.5s ease-out ${index * 0.04}s, filter 0.5s ease-out ${index * 0.04}s, transform 0.5s ease-out ${index * 0.04}s`
                : 'none',
            }}
          >
            {char}
          </span>
        );
      })}
    </h2>
  );
}

const pillars = [
  {
    title: 'EXPERIENCE',
    description:
      'Our venue is designed to blend into the environment, respecting the raw essence of the majestic jungle of Tulum.',
    image: '/images/pillar-experience.png',
  },
  {
    title: 'MUSIC',
    description:
      'Carefully picked artists, showcases and events dedicated to matching with the Tulum essence and community.',
    image: '/images/pillar-music.png',
  },
  {
    title: 'HOSPITALITY',
    description:
      'Our team is thoroughly trained in the F&A industry. They care for our Bars, Tables, & VIP areas, ensuring our guests enjoy their Tulum experience.',
    image: '/images/pillar-hospitality.png',
  },
];

export default function AboutSection({ data }: AboutSectionProps) {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: '#0f0e0c',
      }}
    >
      {/* About background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/about-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          opacity: 0.4,
        }}
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(15, 14, 12, 0.6)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1200,
          margin: '0 auto',
          padding: '100px 24px 80px',
        }}
      >
        {/* Animated headline */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <LetterByLetterHeadline inView={inView} />
        </div>

        {/* WELCOME TO TEHMPLO */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <h3
            style={{
              fontFamily: '"Austin Cyr Roman", serif',
              fontSize: 38,
              fontWeight: 400,
              color: '#ffffff',
              lineHeight: '1em',
              marginBottom: 16,
              textTransform: 'uppercase',
            }}
          >
            WELCOME TO TEHMPLO
          </h3>

          <p
            style={{
              fontFamily: '"Source Sans 3", sans-serif',
              fontSize: 13,
              fontWeight: 400,
              color: '#ffffff',
              lineHeight: 1.6,
              maxWidth: 700,
              margin: '0 auto 8px',
              letterSpacing: '0.05em',
            }}
          >
            MINDFUL CURATED ACTS • CAREFULLY CRAFTED EXPERIENCES • PRISTINE PRODUCTION.
          </p>

          <p
            style={{
              fontFamily: '"Source Sans 3", sans-serif',
              fontSize: 15,
              fontWeight: 400,
              color: '#ffffff',
              lineHeight: 1.7,
              maxWidth: 600,
              margin: '0 auto',
              opacity: 0.8,
            }}
          >
            Hidden in the jungle, this is where music, people, and emotions come together to make Tulum truly one of a kind.
          </p>
        </div>

        {/* Three pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(255px, 1fr))',
            gap: 32,
          }}
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 16,
              }}
            >
              {/* Pillar image */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: 255,
                  aspectRatio: '3/4',
                  overflow: 'hidden',
                  borderRadius: 4,
                }}
              >
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="255px"
                  unoptimized
                />
              </div>

              {/* Pillar heading */}
              <h4
                style={{
                  fontFamily: '"Basteleur Moonlight", sans-serif',
                  fontSize: 22,
                  fontWeight: 400,
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                }}
              >
                {pillar.title}
              </h4>

              {/* Pillar description */}
              <p
                style={{
                  fontFamily: '"Source Sans 3", sans-serif',
                  fontSize: 13,
                  fontWeight: 400,
                  color: '#ffffff',
                  lineHeight: 1.7,
                  textAlign: 'center',
                  maxWidth: 255,
                  opacity: 0.85,
                }}
              >
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
