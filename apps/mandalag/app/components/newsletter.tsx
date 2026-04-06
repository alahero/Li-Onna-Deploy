'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  return (
    <section className="w-full bg-mg-bg py-16 md:py-24">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[10px] bg-black">
          <div className="flex flex-col md:flex-row">
            {/* Left: Phone Collage Image */}
            <div className="relative hidden md:block md:w-1/2" style={{ aspectRatio: '0.5482' }}>
              <Image
                src="/images/hero/phone-collage.png"
                alt="Mandala Group experiences"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>

            {/* Right: Newsletter Form */}
            <div className="flex flex-1 flex-col justify-center gap-6 p-8 md:p-12 lg:p-16">
              <p className="font-inter text-[15px] leading-[2em] tracking-[-0.01em] text-white">
                Subscribe to the ultimate insider&apos;s guide to unforgettable experiences.
              </p>
              <div className="flex flex-col gap-4">
                <label className="font-figtree text-[14px] font-semibold text-white uppercase tracking-wider">
                  Newsletter
                </label>
                <div className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 rounded-lg border border-white/20 bg-transparent px-4 py-3 font-inter text-sm text-white placeholder-mg-gray-dark outline-none focus:border-white/40 transition-colors"
                  />
                  <button className="rounded-lg bg-white px-6 py-3 font-figtree text-sm font-bold text-black transition-colors hover:bg-white/90">
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
