'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  return (
    <section className="w-full bg-mg-bg">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-10">
        <div
          className="relative overflow-hidden rounded-[10px]"
          style={{ backgroundColor: '#000' }}
        >
          <div className="flex flex-col md:flex-row min-h-[400px]">
            {/* Left: Tall vertical phone collage image */}
            <div
              className="relative hidden md:block"
              style={{ width: '50%', aspectRatio: '0.5482' }}
            >
              <Image
                src="/images/hero/phone-collage.png"
                alt=""
                fill
                sizes="50vw"
                className="object-cover"
                style={{ borderRadius: '10px' }}
              />
            </div>

            {/* Right: Newsletter content */}
            <div
              className="flex flex-1 flex-col justify-center px-8 py-12 md:px-12 lg:px-16"
              style={{ gap: '20px' }}
            >
              <p
                className="font-inter text-white"
                style={{
                  fontSize: '15px',
                  lineHeight: '2em',
                  letterSpacing: '-0.01em',
                }}
              >
                Subscribe to the ultimate insider&apos;s guide to unforgettable experiences.
              </p>

              <div className="flex flex-col gap-3">
                <label
                  className="font-inter text-white uppercase"
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
                    className="flex-1 rounded-[8px] border border-white/20 bg-transparent px-4 py-3 font-inter text-[14px] text-white placeholder-[#525252] outline-none focus:border-white/40 transition-colors"
                  />
                  <button
                    className="rounded-[8px] bg-white px-6 py-3 font-inter text-[14px] font-semibold text-black transition-colors hover:bg-white/90"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
