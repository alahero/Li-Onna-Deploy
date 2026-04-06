import Image from 'next/image';

const articles = [
  {
    title: "Graziano's se convertirá en el mejor restaurante en Puerta de Hierro",
    source: 'El Heraldo',
    image: '/images/press/graziano-press.jpg',
    url: 'https://heraldodemexico.com.mx/estilo-de-vida/2024/6/17/grazianos-se-convertira-en-el-mejor-restaurante-en-puerta-de-hierro-613161.html',
  },
];

export default function Press() {
  return (
    <section className="w-full bg-mg-bg py-16 md:py-24">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <h2 className="mb-10 font-figtree text-[14px] font-bold uppercase tracking-wider text-white">
          PRESS
        </h2>

        {/* Press Articles */}
        <div className="flex flex-col gap-6">
          {articles.map((article) => (
            <a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row gap-6 rounded-lg transition-colors hover:bg-white/5 p-4 -mx-4"
            >
              {/* Article Image */}
              <div className="relative w-full sm:w-[280px] shrink-0 overflow-hidden rounded-lg" style={{ aspectRatio: '848 / 477' }}>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 280px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Article Text */}
              <div className="flex flex-col justify-center gap-2">
                <h3 className="font-inter text-base text-white group-hover:text-mg-blue transition-colors">
                  {article.title}
                </h3>
                <span className="font-inter text-sm text-mg-gray">
                  {article.source}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
