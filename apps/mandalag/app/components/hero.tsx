'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        height: '100vh',
        backgroundColor: '#3d3e39',
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-page flex-col items-start gap-10 px-10 md:px-20">
        {/* Main Headline */}
        <div className="flex flex-col">
          <h1 className="font-figtree">
            <span className="block text-hero-mobile md:text-hero text-white opacity-0 animate-fade-in-up">
              WORLD
            </span>
            <span className="block text-hero-mobile md:text-hero text-white opacity-0 animate-fade-in-up-delay-1">
              CLASS
            </span>
          </h1>
          <h1 className="font-figtree">
            <span className="block text-hero-mobile md:text-hero text-white opacity-0 animate-fade-in-up-delay-2">
              EXPERIENCES
            </span>
          </h1>
          <h1 className="font-figtree">
            <span className="block text-hero-mobile md:text-hero text-white opacity-0 animate-fade-in-up-delay-3">
              CRAFTERS
            </span>
          </h1>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-start gap-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.5s_forwards]">
          <a
            href="#venues"
            className="inline-flex items-center justify-center rounded-button border border-mg-gray-border bg-transparent px-6 py-3 font-figtree text-[15px] font-bold text-white transition-all hover:bg-white/10"
          >
            EXPLORE OUR VENUES
          </a>
          <a
            href="#reservations"
            className="inline-flex items-center justify-center rounded-button border border-mg-gray-border bg-transparent px-6 py-3 font-figtree text-[15px] font-bold text-white transition-all hover:bg-white/10"
          >
            RESERVATIONS
          </a>
        </div>
      </div>
    </section>
  );
}
