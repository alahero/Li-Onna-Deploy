import { fields } from '@keystatic/core';

/** SEO fields reusable across all brands */
export const seoFields = {
  metaTitle: fields.text({
    label: 'Meta Title',
    description: 'Título para SEO (máx 60 caracteres)',
  }),
  metaDescription: fields.text({
    label: 'Meta Description',
    description: 'Descripción para SEO (máx 160 caracteres)',
    multiline: true,
  }),
  ogImage: fields.image({
    label: 'Open Graph Image',
    description: 'Imagen para redes sociales (1200x630px recomendado)',
    directory: 'public/og',
    publicPath: '/og',
  }),
};

/** Social media links */
export const socialFields = {
  instagram: fields.text({ label: 'Instagram URL' }),
  facebook: fields.text({ label: 'Facebook URL' }),
  tiktok: fields.text({ label: 'TikTok URL' }),
  twitter: fields.text({ label: 'X (Twitter) URL' }),
  whatsapp: fields.text({ label: 'WhatsApp número o link' }),
};

/** Standard image field with directory config */
export function imageField(label: string, directory: string) {
  return fields.image({
    label,
    directory: `public/images/${directory}`,
    publicPath: `/images/${directory}`,
  });
}

/** Rich text field for content sections */
export function richTextField(label: string) {
  return fields.markdoc({
    label,
    options: {
      image: {
        directory: 'public/images/content',
        publicPath: '/images/content',
      },
    },
  });
}
