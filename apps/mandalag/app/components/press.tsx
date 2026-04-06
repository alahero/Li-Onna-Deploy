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
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: 'linear-gradient(#1b1c1d 0%, #373734 100%)',
        height: '100vh',
        padding: '40px',
        display: 'flex',
        flexFlow: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: '10px',
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: '1500px',
          width: '100%',
          height: '381px',
          display: 'grid',
          gap: '20px',
        }}
      >
        {articles.map((article) => (
          <a
            key={article.title}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-[10px]"
            style={{
              width: '100%',
              height: '200px',
              textDecoration: 'none',
            }}
          >
            {/* Card with stripe overlay */}
            <div
              className="relative overflow-hidden flex flex-col justify-end items-start gap-[10px]"
              style={{
                flex: '1 0 0',
                height: '100%',
                borderRadius: '8px',
                padding: '10px',
              }}
            >
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
              {/* Stripe overlay */}
              <div
                className="absolute inset-0 z-[1] bg-stripe-pattern"
                style={{ backgroundSize: '126px 126px', opacity: 0.3 }}
              />
              {/* Dark gradient overlay */}
              <div
                className="absolute inset-0 z-[1]"
                style={{ background: 'linear-gradient(transparent 30%, rgba(0,0,0,0.7) 100%)' }}
              />
              {/* Text overlay */}
              <div className="relative z-[2]">
                <h3
                  className="font-figtree text-white"
                  style={{ fontSize: '20px', fontWeight: 700 }}
                >
                  {article.title}
                </h3>
                <span
                  className="font-inter text-white"
                  style={{ fontSize: '14px', fontWeight: 400 }}
                >
                  {article.source}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
