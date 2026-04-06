'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: '#525252',
        padding: '100px 180px 0 0',
      }}
    >
      <div
        className="mx-auto flex flex-col items-center"
        style={{ gap: '40px', maxWidth: '1500px' }}
      >
        {/* Top row: image + text */}
        <div className="flex w-full items-start" style={{ gap: '146px' }}>
          {/* Left: Image */}
          <div className="flex-1 flex items-start gap-[20px] pr-[20px]">
            <div className="relative" style={{ height: '300px', width: 'auto' }}>
              <Image
                src="/images/hero/phone-collage.png"
                alt=""
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
            <p
              className="font-inter text-white flex-1"
              style={{
                fontSize: '15px',
                lineHeight: '2em',
                letterSpacing: '-0.01em',
              }}
            >
              Subscribe to the ultimate insider&apos;s guide to unforgettable experiences.
            </p>
          </div>

          {/* Right: Newsletter form */}
          <div className="flex flex-1 flex-col items-center" style={{ gap: '10px' }}>
            <div className="flex flex-col gap-3 w-full">
              <label
                className="font-inter text-white"
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                }}
              >
                Newsletter
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 rounded-[8px] border border-white/20 bg-transparent px-4 py-3 font-inter text-[14px] text-white placeholder-white/30 outline-none focus:border-white/40 transition-colors"
                />
                <button
                  className="rounded-[13px] border border-[#d9d9d9] bg-transparent px-6 py-3 font-figtree text-[15px] font-bold text-white text-center transition-colors hover:bg-white/10"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
