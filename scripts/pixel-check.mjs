import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";
import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";

const sites = [
  { slug: "guepardo", local: "http://localhost:3001/", live: "https://guepardo.com.mx/" },
  { slug: "tacos-atarantados", local: "http://localhost:3002/", live: "https://tacosatarantados.mx/" },
  { slug: "futur-festival", local: "http://localhost:3003/", live: "https://futurfestival.mx/" },
  { slug: "tehmplo", local: "http://localhost:3004/", live: "https://www.tehmplo.com/" },
  { slug: "lionna", local: "http://localhost:3005/", live: "https://lionna.es/" },
  { slug: "spade", local: "http://localhost:3006/", live: "https://www.spade.mx/" },
  { slug: "houdinni", local: "http://localhost:3007/", live: "https://houdinni.com/" },
];

const viewport = { width: 1440, height: 900 };

function getRequestedSlugs() {
  const args = process.argv.slice(2);
  const slugArg = args.find((arg) => arg.startsWith("--slug="));
  if (!slugArg) return null;

  const raw = slugArg.split("=")[1]?.trim();
  if (!raw) return null;

  const slugs = raw
    .split(",")
    .map((slug) => slug.trim().toLowerCase())
    .filter(Boolean);

  return slugs.length ? new Set(slugs) : null;
}

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function normalizePage(page) {
  await page.addStyleTag({
    content: `
      *,
      *::before,
      *::after {
        animation: none !important;
        transition: none !important;
        caret-color: transparent !important;
      }
      html {
        scroll-behavior: auto !important;
      }
    `,
  });

  await page.evaluate(() => {
    const selectors = [
      '[id*="cookie"]',
      '[class*="cookie"]',
      '[id*="consent"]',
      '[class*="consent"]',
      '[aria-label*="cookie" i]',
      '[aria-label*="consent" i]',
    ];
    document.querySelectorAll(selectors.join(",")).forEach((node) => {
      if (node instanceof HTMLElement) node.style.display = "none";
    });
  });
}

async function capturePage(browser, url, outputPath) {
  const context = await browser.newContext({ viewport });
  const page = await context.newPage();

  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForTimeout(3000);
    await normalizePage(page);
    await page.waitForTimeout(1000);
    await page.screenshot({ path: outputPath, fullPage: true });
    return null;
  } catch (error) {
    return error instanceof Error ? error.message : String(error);
  } finally {
    await context.close();
  }
}

async function compareImages(localPath, livePath, diffPath) {
  const localPng = PNG.sync.read(await fs.readFile(localPath));
  const livePng = PNG.sync.read(await fs.readFile(livePath));

  const width = Math.min(localPng.width, livePng.width);
  const height = Math.min(localPng.height, livePng.height);

  const localCropped = new PNG({ width, height });
  const liveCropped = new PNG({ width, height });
  PNG.bitblt(localPng, localCropped, 0, 0, width, height, 0, 0);
  PNG.bitblt(livePng, liveCropped, 0, 0, width, height, 0, 0);

  const diff = new PNG({ width, height });
  const mismatchedPixels = pixelmatch(
    localCropped.data,
    liveCropped.data,
    diff.data,
    width,
    height,
    {
      threshold: 0.1,
      includeAA: true,
    }
  );

  await fs.writeFile(diffPath, PNG.sync.write(diff));

  const totalPixels = width * height;
  const mismatchPercent = totalPixels === 0 ? 100 : (mismatchedPixels / totalPixels) * 100;
  return { width, height, mismatchedPixels, totalPixels, mismatchPercent };
}

function toStatus(value) {
  if (value <= 0.5) return "PASS";
  if (value <= 2) return "WARN";
  return "FAIL";
}

async function main() {
  const requestedSlugs = getRequestedSlugs();
  const targets = requestedSlugs
    ? sites.filter((site) => requestedSlugs.has(site.slug))
    : sites;

  if (requestedSlugs && targets.length === 0) {
    throw new Error(
      `No se encontró ningún sitio con --slug. Disponibles: ${sites
        .map((site) => site.slug)
        .join(", ")}`
    );
  }

  const timestamp = new Date().toISOString().replaceAll(":", "-");
  const rootDir = path.resolve(".visual-check", timestamp);
  const shotsDir = path.join(rootDir, "screenshots");
  const diffsDir = path.join(rootDir, "diffs");
  await ensureDir(shotsDir);
  await ensureDir(diffsDir);

  const browser = await chromium.launch();
  const results = [];

  for (const site of targets) {
    const localPath = path.join(shotsDir, `${site.slug}.local.png`);
    const livePath = path.join(shotsDir, `${site.slug}.live.png`);
    const diffPath = path.join(diffsDir, `${site.slug}.diff.png`);

    const localError = await capturePage(browser, site.local, localPath);
    const liveError = await capturePage(browser, site.live, livePath);

    if (localError || liveError) {
      results.push({
        slug: site.slug,
        localError,
        liveError,
      });
      continue;
    }

    const comparison = await compareImages(localPath, livePath, diffPath);
    results.push({
      slug: site.slug,
      ...comparison,
      status: toStatus(comparison.mismatchPercent),
    });
  }

  await browser.close();

  const reportPath = path.join(rootDir, "report.md");
  const lines = [
    "# Pixel Check Report",
    "",
    `Fecha: ${new Date().toISOString()}`,
    `Viewport: ${viewport.width}x${viewport.height}`,
    "",
    "| Marca | Estado | Diferencia | Pixel mismatch | Tamaño comparado |",
    "|---|---:|---:|---:|---:|",
  ];

  for (const item of results) {
    if (item.localError || item.liveError) {
      lines.push(
        `| ${item.slug} | ERROR | - | - | - |`
      );
      lines.push(
        `> ${item.slug}: local=${item.localError ?? "ok"} / live=${item.liveError ?? "ok"}`
      );
      continue;
    }

    lines.push(
      `| ${item.slug} | ${item.status} | ${item.mismatchPercent.toFixed(2)}% | ${item.mismatchedPixels}/${item.totalPixels} | ${item.width}x${item.height} |`
    );
  }

  await fs.writeFile(reportPath, lines.join("\n"), "utf8");
  console.log(`Reporte generado en: ${reportPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
