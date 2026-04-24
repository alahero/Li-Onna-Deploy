/**
 * Genera .webp a partir de assets en public/images/ para reducir peso
 * (hero contacto, tarjetas regalo). Ejecución: node scripts/optimize-hero-webp.cjs
 */
const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

const publicDir = path.join(__dirname, '../public/images');

const tareas = [
  {
    input: 'photo-contact.jpg',
    output: 'photo-contact.webp',
    anchoMax: 1920,
    calidad: 70,
  },
  {
    input: 'photo-giftcard-1.png',
    output: 'photo-giftcard-1.webp',
    anchoMax: 800,
    calidad: 82,
  },
  {
    input: 'photo-giftcard-2.png',
    output: 'photo-giftcard-2.webp',
    anchoMax: 800,
    calidad: 80,
  },
];

async function main() {
  for (const t of tareas) {
    const de = path.join(publicDir, t.input);
    if (!fs.existsSync(de)) {
      console.warn('[optimize-webp] omitido, no existe:', t.input);
      continue;
    }
    const estatDe = fs.statSync(de);
    const buf = await sharp(de)
      .rotate()
      .resize({ width: t.anchoMax, withoutEnlargement: true })
      .webp({ quality: t.calidad, effort: 5 })
      .toBuffer();
    const a = path.join(publicDir, t.output);
    fs.writeFileSync(a, buf);
    const estatA = fs.statSync(a);
    console.log(
      t.input,
      '->',
      t.output,
      `${(estatDe.size / 1024).toFixed(1)}KB → ${(estatA.size / 1024).toFixed(1)}KB`,
    );
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
