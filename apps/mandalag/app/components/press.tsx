import Image from 'next/image';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

const defaultArticles = [
  {
    title: "Graziano's se convertirá en el mejor restaurante en Puerta de Hierro",
    source: 'El Heraldo',
    image: '/assets/images/aX70cNCEqMI50hfgPTOyEGcE_5d2c854d.jpg',
    url: 'https://heraldodemexico.com.mx/estilo-de-vida/2024/6/17/grazianos-se-convertira-en-el-mejor-restaurante-en-puerta-de-hierro-613161.html',
  },
];

async function getPressData() {
  try {
    const reader = createReader(process.cwd(), keystaticConfig);
    const slugs = await reader.collections.press.list();
    if (slugs.length === 0) return null;
    const articles = await Promise.all(
      slugs.map(async (slug) => {
        const article = await reader.collections.press.read(slug);
        return article ? { ...article, slug } : null;
      })
    );
    return articles.filter(Boolean);
  } catch {
    return null;
  }
}

export default async function Press() {
  const cmsArticles = await getPressData();
  const articles = cmsArticles && cmsArticles.length > 0
    ? cmsArticles.map((a: any) => ({
        title: a.title,
        source: a.source || '',
        image: a.image || defaultArticles[0].image,
        url: a.url || '#',
      }))
    : defaultArticles;

  return (
    <div
      style={{
        background: 'linear-gradient(#1b1c1d 0%, #373734 100%)',
        width: '100%',
        height: '100vh',
        padding: '40px',
        display: 'flex',
        flexFlow: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: '10px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          flex: '1 0 0',
          maxWidth: '1500px',
          height: '381px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          width: '100%',
        }}
      >
        {/* PRESS label column */}
        <div style={{ display: 'flex', flexDirection: 'column', rowGap: '20px', width: '100%' }}>
          {articles.map((article, i) => (
            <a
              key={i}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexFlow: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '10px',
                width: '100%',
                height: '200px',
                textDecoration: 'none',
              }}
            >
              <div
                style={{
                  borderRadius: '8px',
                  flex: '1 0 0',
                  display: 'flex',
                  flexFlow: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-start',
                  gap: '10px',
                  width: '1px',
                  height: '100%',
                  padding: '10px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Background image */}
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="33vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
                {/* Stripe overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 1,
                    backgroundRepeat: 'repeat',
                    backgroundPosition: 'left top',
                    backgroundSize: '64px auto',
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='126' height='126'%3E%3Cpath d='M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z' fill='rgba(136,136,136,0.2)' fill-rule='evenodd'/%3E%3C/svg%3E\")",
                  }}
                />
                {/* Dark gradient */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 1,
                    background: 'linear-gradient(transparent 30%, rgba(0,0,0,0.7) 100%)',
                  }}
                />
                {/* Text */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <h3
                    className="font-figtree"
                    style={{ fontSize: '20px', fontWeight: 700, color: '#fff', lineHeight: '1.3em' }}
                  >
                    {article.title}
                  </h3>
                  <span
                    className="font-inter"
                    style={{ fontSize: '14px', color: '#fff' }}
                  >
                    {article.source}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
