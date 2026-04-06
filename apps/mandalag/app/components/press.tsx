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
    <section className="w-full bg-mg-bg py-12">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-10">
        {/* PRESS label */}
        <div className="mb-6 flex items-center gap-[10px] py-[5px]">
          <span
            className="font-inter text-white"
            style={{ fontSize: '14px', fontWeight: 600 }}
          >
            PRESS
          </span>
        </div>

        {/* Articles */}
        <div className="flex flex-col gap-6">
          {articles.map((article) => (
            <a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row gap-[50px] items-start p-6 sm:p-[40px] rounded-[10px] transition-colors hover:bg-white/[0.02]"
            >
              {/* Article Image */}
              <div
                className="relative w-full sm:w-[420px] shrink-0 overflow-hidden rounded-[10px]"
                style={{ aspectRatio: '848 / 477' }}
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 420px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Article Text */}
              <div className="flex flex-col justify-center gap-3">
                <h3
                  className="font-inter text-white group-hover:text-[#0099ff] transition-colors"
                  style={{ fontSize: '16px', lineHeight: '1.6em' }}
                >
                  {article.title}
                </h3>
                <span
                  className="font-inter"
                  style={{ fontSize: '14px', color: '#888' }}
                >
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
