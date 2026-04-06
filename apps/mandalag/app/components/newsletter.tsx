'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  return (
    <div
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
          justifyContent: 'flex-start',
        }}
      >
        {/* Left: Image + description */}
        <div
          style={{
            flex: '1 0 0',
            display: 'flex',
            flexFlow: 'row',
            gap: '20px',
            alignItems: 'flex-start',
            paddingRight: '20px',
          }}
        >
          <div style={{ position: 'relative', height: '300px', width: '200px', flexShrink: 0 }}>
            <Image
              src="/assets/images/wDCJ6PQEkdOh0itp6dwputtehl4_f0569aea.png"
              alt=""
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <p
            className="font-inter"
            style={{
              fontSize: '15px',
              lineHeight: '2em',
              letterSpacing: '-0.01em',
              color: '#fff',
              flex: '1 0 0',
            }}
          >
            Subscribe to the ultimate insider&apos;s guide to unforgettable experiences.
          </p>
        </div>

        {/* Right: Form */}
        <div
          style={{
            flex: '1 0 0',
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <div style={{ display: 'flex', flexFlow: 'column', gap: '10px', width: '100%' }}>
            <span
              className="font-figtree"
              style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}
            >
              Newsletter
            </span>
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
                style={{
                  borderRadius: '13px',
                  border: '1px solid #d9d9d9',
                  backgroundColor: 'transparent',
                  padding: '10px 20px',
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#fff',
                  cursor: 'pointer',
                  lineHeight: '1.5em',
                  textAlign: 'center',
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
