'use client';

import { useState } from 'react';
import Image from 'next/image';

interface NewsletterProps {
  description: string;
  buttonText: string;
  image: string;
}

export default function Newsletter({ description, buttonText, image }: NewsletterProps) {
  const [email, setEmail] = useState('');

  return (
    <section
      style={{
        backgroundColor: '#525252',
        width: '100%',
        display: 'flex',
        flexFlow: 'column',
        placeContent: 'center',
        alignItems: 'center',
        gap: '40px',
        padding: '100px 180px 0 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexFlow: 'row',
          gap: '146px',
          width: '100%',
          maxWidth: '1500px',
          alignItems: 'flex-start',
        }}
      >
        {/* Left: Image + text */}
        <div style={{ flex: '1 0 0', display: 'flex', flexFlow: 'row', gap: '20px', alignItems: 'flex-start', paddingRight: '20px' }}>
          <div style={{ position: 'relative', height: '300px', width: '200px', flexShrink: 0 }}>
            <Image src={image} alt="" fill style={{ objectFit: 'contain' }} />
          </div>
          <p className="font-inter" style={{ fontSize: '15px', lineHeight: '2em', letterSpacing: '-0.01em', color: '#fff', flex: '1 0 0' }}>
            {description}
          </p>
        </div>

        {/* Right: Form */}
        <div style={{ flex: '1 0 0', display: 'flex', flexFlow: 'column', gap: '10px' }}>
          <span className="font-figtree" style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>Newsletter</span>
          <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              style={{
                flex: '1 0 0',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.2)',
                backgroundColor: 'transparent',
                padding: '10px 14px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: '#fff',
                outline: 'none',
              }}
            />
            <button
              className="font-figtree"
              style={{
                borderRadius: '13px',
                border: '1px solid #d9d9d9',
                backgroundColor: 'transparent',
                padding: '10px 20px',
                fontSize: '15px',
                fontWeight: 700,
                color: '#fff',
                cursor: 'pointer',
                lineHeight: '1.5em',
              }}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
