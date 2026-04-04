import { DishCard, type DishCardProps } from './dish-card';

interface SignatureDishesProps {
  dishes?: DishCardProps[];
}

const PLACEHOLDER_DISHES: DishCardProps[] = [
  {
    name: 'Toro Tataki con Chimichurri Nikkei',
    description: 'Atún rojo del Mediterráneo sellado en costra de sésamo negro, con chimichurri de cilantro y ají amarillo.',
    category: 'cold-starters',
  },
  {
    name: 'Gyoza de Rabo de Toro',
    description: 'Gyozas crujientes rellenas de rabo de toro estofado con sofrito andaluz, salsa ponzu con manchego curado.',
    category: 'hot-starters',
  },
  {
    name: 'Arroz Cremoso de Bogavante y Wakame',
    description: 'Arroz caldoso al estilo itamae con bogavante gallego, mantequilla de miso blanco y algas wakame.',
    category: 'rice-salads',
  },
  {
    name: 'Wagyu A5 con Salsa de Piparras',
    description: 'Lomo alto de Wagyu japonés A5 a la brasa Josper, con reducción de piparras vascas y maíz morado peruano.',
    category: 'premium-cuts',
  },
  {
    name: 'Sashimi Ibérico de Atún Rojo',
    description: 'Doce piezas de atún rojo de almadraba, aceite de oliva virgen extra y flor de sal Maldon.',
    category: 'sashimi-nigiri',
  },
  {
    name: 'Roll Salamanca',
    description: 'Langostino tigre en tempura, aguacate, tataki de solomillo ibérico, salsa teriyaki y tobiko rojo.',
    category: 'rolls',
  },
];

export function SignatureDishes({ dishes }: SignatureDishesProps) {
  const displayDishes = dishes && dishes.length > 0 ? dishes : PLACEHOLDER_DISHES;

  return (
    <section id="menu" className="relative py-28 px-6 md:px-12 bg-brand-black">
      {/* Background texture */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="section-subtitle mb-6">La Carta</p>

          <h2 className="section-title font-light mb-6">
            Imprescindibles
          </h2>

          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-16 h-px bg-brand-gold/40" />
            <span className="japanese-text text-brand-gold/60 text-sm tracking-widest">必食</span>
            <span className="w-16 h-px bg-brand-gold/40" />
          </div>

          <p className="text-brand-cream/50 font-body font-light max-w-xl mx-auto text-sm leading-relaxed tracking-wide">
            Una selección de platos que definen la identidad de LI-ONNA:
            técnica japonesa, ingredientes ibéricos, alma latinoamericana.
          </p>
        </div>

        {/* Dishes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-gold/5">
          {displayDishes.map((dish, index) => (
            <div key={dish.name ?? index} className="bg-brand-black">
              <DishCard {...dish} />
            </div>
          ))}
        </div>

        {/* View full menu CTA */}
        <div className="text-center mt-16">
          <div className="gold-divider" />
          <p className="text-brand-cream/40 text-xs uppercase tracking-widest font-body mb-8">
            Menú completo disponible en el restaurante
          </p>
          <a
            href="/#reservar"
            className="btn-gold inline-flex"
          >
            Reservar para Degustar
          </a>
        </div>
      </div>
    </section>
  );
}
