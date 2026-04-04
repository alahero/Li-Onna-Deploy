'use client';

import React, { useState } from 'react';
import { cn } from '@mg/shared-utils';

interface FaqItem {
  question: string;
  answer: string;
  order: number;
}

interface FaqSectionProps {
  items: FaqItem[];
}

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        'rounded-2xl border transition-all duration-300 overflow-hidden',
        isOpen
          ? 'border-brand-purple/40 bg-brand-dark'
          : 'border-white/8 bg-white/2 hover:border-white/15'
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            'font-display text-sm font-bold leading-snug transition-colors duration-200',
            isOpen ? 'text-brand-purple' : 'text-white'
          )}
        >
          {item.question}
        </span>
        <span
          className={cn(
            'flex-shrink-0 h-7 w-7 rounded-full border flex items-center justify-center transition-all duration-300',
            isOpen
              ? 'border-brand-purple bg-brand-purple/20 rotate-45'
              : 'border-white/20 bg-transparent'
          )}
        >
          <svg
            className={cn('h-3 w-3 transition-colors', isOpen ? 'text-brand-purple' : 'text-white/50')}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </span>
      </button>

      {/* Answer */}
      <div
        className={cn(
          'overflow-hidden transition-all duration-400',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-6 pb-5">
          <div className="h-px bg-brand-purple/20 mb-4" />
          <p className="font-body text-sm text-white/60 leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FaqSection({ items }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const sorted = [...items].sort((a, b) => a.order - b.order);

  return (
    <section id="faq" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-brand-purple/8 blur-[100px]" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-[clamp(2.5rem,8vw,6rem)] font-black leading-none tracking-[-0.02em] text-white">
            FAQ
          </h2>
          <div className="mx-auto mt-4 divider-neon w-24" />
          <p className="mt-6 font-body text-white/50">
            Preguntas frecuentes sobre FUTUR Festival
          </p>
        </div>

        {sorted.length === 0 ? (
          <p className="text-center text-white/30 font-body">Próximamente.</p>
        ) : (
          <div className="space-y-3">
            {sorted.map((item, i) => (
              <FaqAccordionItem
                key={i}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="font-body text-sm text-white/40">
            ¿No encontraste tu respuesta?{' '}
            <a
              href="mailto:hola@futurfestival.mx"
              className="text-brand-cyan hover:underline"
            >
              Escríbenos
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
