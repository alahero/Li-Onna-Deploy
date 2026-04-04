'use client';

import Image from 'next/image';
import Link from 'next/link';

/**
 * Houdinni Hero Section — pixel-perfect from Framer design.
 *
 * Structure:
 *   - Sticky section (position: sticky, top: 0), height ~14vh on desktop
 *   - Background: desktop PNG + dual MP4 video backgrounds (loop, muted, autoplay)
 *   - Left column: cyan accent box, menu button
 *   - Center column: video player with hover filter
 *   - Right column: 4 nav buttons (Menu, Calendar, Events, Reservations) + Contact button
 */
export function HeroSection() {
  return (
    <section
      id="scroll"
      className="relative w-full overflow-clip"
      style={{
        position: 'sticky',
        top: '34px', /* offset by nav height */
        minHeight: '100vh',
        background: '#050505',
      }}
    >
      {/* Background image — desktop */}
      <div className="absolute inset-0 z-0 hidden tablet:block">
        <Image
          src="/hero-bg-desktop.png"
          alt=""
          fill
          className="object-cover object-top"
          priority
          quality={90}
        />
      </div>
      {/* Background image — mobile */}
      <div className="absolute inset-0 z-0 tablet:hidden">
        <Image
          src="/hero-bg-mobile.png"
          alt=""
          fill
          className="object-cover object-top"
          priority
          quality={90}
        />
      </div>
      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-black/40" />

      {/* ── Hero content ── */}
      <div
        className="relative z-10 w-full h-full flex flex-col items-center justify-center"
        style={{ paddingTop: '49px', paddingBottom: '49px', minHeight: '100vh' }}
      >
        {/* Desktop / Tablet 3-column layout */}
        <div
          className="hidden tablet:flex items-start justify-center gap-4 w-full"
          style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}
        >
          {/* LEFT COLUMN */}
          <div
            className="flex flex-col justify-between shrink-0"
            style={{ width: '315px', height: '530px' }}
          >
            {/* Cyan accent box */}
            <div
              className="accent-cyan flex items-center justify-center"
              style={{ flexShrink: 0 }}
            >
              <span
                className="font-druk text-houdinni-black text-xs text-center px-2"
                style={{ letterSpacing: '0.05em' }}
              >
                HOUDINNI
              </span>
            </div>

            {/* Gap spacer */}
            <div style={{ flex: 1 }} />

            {/* Menu button */}
            <a
              href="https://mandalagroup.menu/es/houdinni"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden group"
              style={{ width: '302px', height: '107px' }}
            >
              <Image
                src="/btn-menu-1.png"
                alt="Menú"
                fill
                className="object-cover group-hover:opacity-0 transition-opacity duration-200"
              />
              <Image
                src="/btn-menu-2.png"
                alt="Menú hover"
                fill
                className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              />
            </a>

            {/* Blue accent bar */}
            <div
              style={{
                background: '#3388ff',
                height: '7px',
                width: '100%',
                marginTop: '8px',
                overflow: 'clip',
              }}
            />
          </div>

          {/* CENTER COLUMN — Video player */}
          <div
            className="relative shrink-0 overflow-hidden"
            style={{ width: '533px', height: '572px' }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover video-hover"
              poster="/videos/hero-poster.jpg"
              style={{ filter: 'drop-shadow(0px 1px 1px rgba(0,0,0,0.25))' }}
            >
              <source src="/videos/hero-video-1.mp4" type="video/mp4" />
              <source src="/videos/hero-video-2.mp4" type="video/mp4" />
            </video>

            {/* Center column buttons overlay */}
            <div
              className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-3 px-4"
            >
              <Link
                href="/events"
                className="block relative overflow-hidden group w-full"
                style={{ height: '52px' }}
              >
                <Image
                  src="/btn-events-1.png"
                  alt="Eventos Privados"
                  fill
                  className="object-cover group-hover:opacity-0 transition-opacity duration-200"
                />
                <Image
                  src="/btn-events-2.png"
                  alt="Eventos Privados hover"
                  fill
                  className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div
            className="flex flex-col gap-2 shrink-0"
            style={{ width: '302px', height: '525px' }}
          >
            {/* Calendar button */}
            <Link
              href="/calendar"
              className="block relative overflow-hidden group"
              style={{ width: '302px', height: '107px', flexShrink: 0 }}
            >
              <Image
                src="/btn-calendar-1.png"
                alt="Calendario"
                fill
                className="object-cover group-hover:opacity-0 transition-opacity duration-200"
                style={{ filter: 'drop-shadow(0px 1px 1px rgba(0,0,0,0.25))' }}
              />
              <Image
                src="/btn-calendar-2.png"
                alt="Calendario hover"
                fill
                className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              />
            </Link>

            {/* Contact button */}
            <Link
              href="/#contact"
              className="block relative overflow-hidden group"
              style={{ width: '302px', height: '100px', flexShrink: 0 }}
            >
              <Image
                src="/btn-contact-1.png"
                alt="Contacto"
                fill
                className="object-cover group-hover:opacity-0 transition-opacity duration-200"
              />
              <Image
                src="/btn-contact-2.png"
                alt="Contacto hover"
                fill
                className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              />
            </Link>

            {/* Reservations button */}
            <a
              href="https://tickets.houdinni.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden group"
              style={{ width: '302px', height: '107px', flexShrink: 0 }}
            >
              <Image
                src="/btn-reservations-1.png"
                alt="Entradas"
                fill
                className="object-cover group-hover:opacity-0 transition-opacity duration-200"
              />
              <Image
                src="/btn-reservations-2.png"
                alt="Entradas hover"
                fill
                className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              />
            </a>

            {/* Spacer */}
            <div style={{ flex: 1 }} />

            {/* Logo accent strip */}
            <Image
              src="/gallery/logo-strip-1.png"
              alt=""
              width={302}
              height={74}
              className="object-contain"
            />
          </div>
        </div>

        {/* ── MOBILE layout ── */}
        <div className="tablet:hidden flex flex-col items-center gap-6 px-4 w-full max-w-sm mx-auto">
          {/* Cyan accent */}
          <div className="accent-cyan flex items-center justify-center">
            <span className="font-druk text-houdinni-black text-xs">HOUDINNI</span>
          </div>

          {/* Video */}
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: '9/16', maxHeight: '60vh' }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster="/videos/hero-poster.jpg"
            >
              <source src="/videos/hero-video-1.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Mobile nav buttons */}
          <div className="grid grid-cols-2 gap-3 w-full">
            <a href="https://mandalagroup.menu/es/houdinni" target="_blank" rel="noopener noreferrer"
              className="relative overflow-hidden group" style={{ height: '80px' }}>
              <Image src="/btn-menu-1.png" alt="Menú" fill className="object-cover" />
            </a>
            <Link href="/calendar" className="relative overflow-hidden group" style={{ height: '80px' }}>
              <Image src="/btn-calendar-1.png" alt="Calendario" fill className="object-cover" />
            </Link>
            <Link href="/events" className="relative overflow-hidden group" style={{ height: '80px' }}>
              <Image src="/btn-events-1.png" alt="Privados" fill className="object-cover" />
            </Link>
            <a href="https://tickets.houdinni.com" target="_blank" rel="noopener noreferrer"
              className="relative overflow-hidden group" style={{ height: '80px' }}>
              <Image src="/btn-reservations-1.png" alt="Tickets" fill className="object-cover" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
