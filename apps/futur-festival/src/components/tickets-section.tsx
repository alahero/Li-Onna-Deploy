import React from 'react';
import { cn } from '@mg/shared-utils';

interface TicketTier {
  name: string;
  price: string;
  description: string;
  features: string;
  soldOut: boolean;
  buyUrl?: string;
  featured?: boolean;
}

interface TicketsSectionProps {
  title: string;
  description: string;
  tiers: TicketTier[];
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4 text-brand-cyan flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function TicketCard({ tier }: { tier: TicketTier }) {
  const features = tier.features
    ? tier.features.split('\n').filter((f) => f.trim())
    : [];

  return (
    <div
      className={cn(
        'relative flex flex-col rounded-2xl border transition-all duration-500 overflow-hidden',
        tier.featured
          ? 'border-brand-purple bg-brand-dark shadow-neon-purple scale-[1.02] z-10'
          : 'border-white/10 bg-white/3 hover:border-brand-purple/30 hover:bg-brand-dark'
      )}
    >
      {/* Featured ribbon */}
      {tier.featured && (
        <div className="absolute top-0 right-0 overflow-hidden">
          <div className="relative bg-brand-purple px-6 py-1 text-right translate-x-2 -translate-y-0 rotate-0">
            <span className="font-display text-[10px] font-black uppercase tracking-[0.2em] text-white">
              Más Popular
            </span>
          </div>
        </div>
      )}

      {/* Sold out overlay */}
      {tier.soldOut && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-brand-black/70 backdrop-blur-sm rounded-2xl">
          <div className="rotate-[-20deg] border-2 border-brand-pink px-8 py-2">
            <span className="font-display text-2xl font-black uppercase tracking-[0.2em] text-brand-pink text-glow-pink">
              Agotado
            </span>
          </div>
        </div>
      )}

      <div className="flex flex-col flex-1 p-6 lg:p-8">
        {/* Header */}
        <div className="mb-6">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white/60 mb-2">
            {tier.name}
          </h3>
          <div className="flex items-baseline gap-2">
            <span
              className={cn(
                'font-display text-4xl font-black',
                tier.featured ? 'text-brand-purple text-glow-purple' : 'text-white'
              )}
            >
              {tier.price}
            </span>
          </div>
          {tier.description && (
            <p className="mt-2 font-body text-sm text-white/50">{tier.description}</p>
          )}
        </div>

        {/* Divider */}
        <div className={cn('divider-neon mb-6', !tier.featured && 'opacity-30')} />

        {/* Features */}
        {features.length > 0 && (
          <ul className="flex-1 flex flex-col gap-3 mb-8">
            {features.map((feat, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckIcon />
                <span className="font-body text-sm text-white/70">{feat}</span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        {!tier.soldOut && (
          <a
            href={tier.buyUrl ?? '#tickets'}
            target={tier.buyUrl ? '_blank' : undefined}
            rel={tier.buyUrl ? 'noopener noreferrer' : undefined}
            className={cn(
              'mt-auto flex items-center justify-center gap-2 rounded-full py-3.5 font-display text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300',
              tier.featured
                ? 'bg-brand-purple text-white hover:shadow-neon-purple hover:scale-105'
                : 'border border-white/20 text-white hover:border-brand-purple hover:text-brand-purple'
            )}
          >
            Comprar
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export function TicketsSection({ title, description, tiers }: TicketsSectionProps) {
  return (
    <section id="tickets" className="py-24 relative overflow-hidden bg-brand-dark">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-20" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-brand-purple/6 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-[clamp(2.5rem,8vw,6rem)] font-black leading-none tracking-[-0.02em] text-white">
            {title}
          </h2>
          <div className="mx-auto mt-4 divider-neon w-24" />
          {description && (
            <p className="mt-6 mx-auto max-w-lg font-body text-base text-white/50">
              {description}
            </p>
          )}
        </div>

        {/* Ticket tiers */}
        {tiers.length === 0 ? (
          <p className="text-center text-white/30 font-body">Boletos disponibles próximamente.</p>
        ) : (
          <div
            className={cn(
              'grid gap-6',
              tiers.length === 1 && 'max-w-sm mx-auto',
              tiers.length === 2 && 'sm:grid-cols-2 max-w-2xl mx-auto',
              tiers.length >= 3 && 'sm:grid-cols-2 lg:grid-cols-3'
            )}
          >
            {tiers.map((tier, i) => (
              <TicketCard key={i} tier={tier} />
            ))}
          </div>
        )}

        {/* Trust signals */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 lg:gap-10">
          {[
            { icon: '🔒', text: 'Pago 100% seguro' },
            { icon: '📱', text: 'Entrada digital' },
            { icon: '↩', text: 'Sin reembolsos' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-white/30">
              <span>{item.icon}</span>
              <span className="font-body text-xs">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
