'use client';

import React, { useEffect, useState } from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ticketUrl?: string;
  festivalDate: string;
  festivalLocation: string;
  heroImage?: string;
  heroVideoUrl?: string;
  countdownTarget?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function useCountdown(target?: string): TimeLeft | null {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    if (!target) return;
    const targetDate = new Date(target).getTime();
    if (isNaN(targetDate)) return;

    const tick = () => {
      const now = Date.now();
      const diff = targetDate - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return timeLeft;
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="glass-purple rounded-lg px-4 py-3 min-w-[64px] text-center">
        <span className="font-display text-3xl font-black text-brand-cyan text-glow-cyan tabular-nums">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
        {label}
      </span>
    </div>
  );
}

export function Hero({
  title,
  subtitle,
  ctaText,
  ticketUrl,
  festivalDate,
  festivalLocation,
  heroImage,
  heroVideoUrl,
  countdownTarget,
}: HeroProps) {
  const timeLeft = useCountdown(countdownTarget);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-black"
    >
      {/* Background video */}
      {heroVideoUrl && (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          src={heroVideoUrl}
          autoPlay
          muted
          loop
          playsInline
        />
      )}

      {/* Background image */}
      {!heroVideoUrl && heroImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-transparent to-brand-black" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-60" />

      {/* Animated neon orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-brand-purple/10 blur-[120px] animate-glow-pulse" />
        <div className="absolute -bottom-40 -right-20 h-[500px] w-[500px] rounded-full bg-brand-cyan/8 blur-[100px]" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-brand-pink/5 blur-[140px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
        {/* Pre-tag */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/5 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse" />
          <span className="font-display text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-cyan">
            {festivalDate} &nbsp;·&nbsp; {festivalLocation}
          </span>
        </div>

        {/* Main title */}
        <h1 className="font-display text-[clamp(3.5rem,14vw,10rem)] font-black leading-none tracking-[-0.02em] text-white mb-4">
          {title.split(' ').map((word, i) => (
            <span
              key={i}
              className={
                i % 2 === 1
                  ? 'text-gradient-neon inline-block'
                  : 'inline-block'
              }
            >
              {word}
              {i < title.split(' ').length - 1 ? ' ' : ''}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-10 max-w-xl font-body text-lg text-white/60 leading-relaxed">
          {subtitle}
        </p>

        {/* Countdown */}
        {timeLeft && (
          <div className="mb-10 flex items-center justify-center gap-4">
            <CountdownUnit value={timeLeft.days} label="Días" />
            <span className="font-display text-2xl font-black text-brand-purple/60 pb-5">:</span>
            <CountdownUnit value={timeLeft.hours} label="Horas" />
            <span className="font-display text-2xl font-black text-brand-purple/60 pb-5">:</span>
            <CountdownUnit value={timeLeft.minutes} label="Min" />
            <span className="font-display text-2xl font-black text-brand-purple/60 pb-5">:</span>
            <CountdownUnit value={timeLeft.seconds} label="Seg" />
          </div>
        )}

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {ticketUrl ? (
            <a
              href={ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-brand-purple px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:shadow-neon-purple hover:scale-105 active:scale-100"
            >
              <span className="relative z-10">{ctaText}</span>
              <svg
                className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              {/* Shimmer effect */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
          ) : (
            <a
              href="#tickets"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-brand-purple px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:shadow-neon-purple hover:scale-105"
            >
              <span>{ctaText}</span>
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          )}
          <a
            href="#lineup"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.15em] text-white/70 transition-all duration-300 hover:border-brand-cyan/50 hover:text-brand-cyan"
          >
            Ver Lineup
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex flex-col items-center gap-2 opacity-40">
          <span className="font-display text-[10px] uppercase tracking-[0.3em] text-white">Scroll</span>
          <div className="relative h-10 w-px bg-white/20">
            <div className="absolute top-0 left-0 h-4 w-px bg-brand-cyan animate-scan-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
