 'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const START_X_PERCENT = -33.5;
const END_X_PERCENT = 0;

export function MovementSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const node = sectionRef.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const totalTravel = viewportHeight + rect.height;
      const traveled = viewportHeight - rect.top;
      const next = Math.min(1, Math.max(0, traveled / totalTravel));

      setProgress(next);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  const xPercent = START_X_PERCENT + (END_X_PERCENT - START_X_PERCENT) * progress;

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        height: '100vh',
        maxHeight: '978px',
        background: '#0c7528',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Se desplaza de izquierda a derecha en función del scroll */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: `translate(${xPercent}%, -50%)`,
          width: '133.5%',
          height: '769px',
          willChange: 'transform',
        }}
      >
        <Image
          src="/images/atarantados-movement.png"
          alt="ATARANTADOS MOVEMENT"
          width={1602}
          height={769}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </section>
  );
}
