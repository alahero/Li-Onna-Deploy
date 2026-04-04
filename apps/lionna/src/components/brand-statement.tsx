interface BrandStatementProps {
  statement?: string;
}

export function BrandStatement({ statement }: BrandStatementProps) {
  const defaultStatement = `Donde el rigor del maestro itamae se encuentra con la calidez del alma latina.
En LI-ONNA no servimos sushi: construimos momentos. Cada plato es un diálogo silencioso
entre dos culturas que, contra todo pronóstico, siempre estuvieron destinadas a compartir mesa.`;

  return (
    <section className="relative py-28 px-6 md:px-12 overflow-hidden bg-brand-black">
      {/* Decorative large character */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 select-none pointer-events-none" aria-hidden="true">
        <span
          className="japanese-text text-brand-gold/[0.03] font-light leading-none"
          style={{ fontSize: 'clamp(12rem, 30vw, 36rem)' }}
        >
          魂
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Label */}
        <p className="section-subtitle mb-8 animate-fade-in">
          Nuestra Filosofía
        </p>

        {/* Ornament */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="w-12 h-px bg-brand-gold/40" />
          <span className="japanese-text text-brand-gold text-lg">侘寂</span>
          <span className="w-12 h-px bg-brand-gold/40" />
        </div>

        {/* Statement text */}
        {statement ? (
          <div
            className="font-display font-light text-brand-cream/90 text-xl md:text-2xl lg:text-3xl leading-relaxed tracking-wide prose-invert"
            dangerouslySetInnerHTML={{ __html: statement }}
          />
        ) : (
          <p className="font-display font-light text-brand-cream/90 text-xl md:text-2xl lg:text-3xl leading-relaxed tracking-wide whitespace-pre-line">
            {defaultStatement}
          </p>
        )}

        {/* Tagline */}
        <div className="mt-14 flex flex-col items-center gap-3">
          <div className="ornament-line" />
          <p className="japanese-text text-brand-gold/60 text-sm tracking-widest">
            コシナ・ハポネサ・コン・アルマ・ラティーナ
          </p>
          <p className="section-subtitle text-brand-cream/40">
            Cocina japonesa con alma latina
          </p>
        </div>
      </div>
    </section>
  );
}
