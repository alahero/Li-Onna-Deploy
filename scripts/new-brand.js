#!/usr/bin/env node

/**
 * Scaffold a new brand site inside the monorepo.
 *
 * Usage:
 *   node scripts/new-brand.js <brand-slug> <brand-display-name> <port>
 *
 * Example:
 *   node scripts/new-brand.js la-mansion "La Mansión" 3008
 */

const fs = require('fs');
const path = require('path');

const [, , slug, displayName, port] = process.argv;

if (!slug || !displayName || !port) {
  console.error('Usage: node scripts/new-brand.js <slug> <display-name> <port>');
  process.exit(1);
}

const appDir = path.join(__dirname, '..', 'apps', slug);

if (fs.existsSync(appDir)) {
  console.error(`Error: ${appDir} already exists`);
  process.exit(1);
}

// Helper to create directory and write file
function writeFile(relativePath, content) {
  const fullPath = path.join(appDir, relativePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`  Created ${relativePath}`);
}

console.log(`\nScaffolding brand: ${displayName} (${slug})\n`);

// package.json
writeFile(
  'package.json',
  JSON.stringify(
    {
      name: `@mg/${slug}`,
      version: '0.0.1',
      private: true,
      scripts: {
        dev: `next dev --port ${port}`,
        build: 'next build',
        start: 'next start',
        lint: 'next lint',
      },
      dependencies: {
        '@keystatic/core': '^0.5.36',
        '@keystatic/next': '^5.0.1',
        '@mg/keystatic-config': 'workspace:*',
        '@mg/ui-primitives': 'workspace:*',
        '@mg/shared-utils': 'workspace:*',
        next: '^14.2.0',
        react: '^18.3.0',
        'react-dom': '^18.3.0',
      },
      devDependencies: {
        '@types/node': '^20.0.0',
        '@types/react': '^18.3.0',
        '@types/react-dom': '^18.3.0',
        autoprefixer: '^10.4.0',
        postcss: '^8.4.0',
        tailwindcss: '^3.4.0',
        typescript: '^5.7.0',
      },
    },
    null,
    2
  )
);

// next.config.js
writeFile(
  'next.config.js',
  `/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@mg/keystatic-config', '@mg/ui-primitives', '@mg/shared-utils'],
  images: { domains: [] },
};
module.exports = nextConfig;
`
);

// tsconfig.json
writeFile(
  'tsconfig.json',
  JSON.stringify(
    {
      compilerOptions: {
        target: 'ES2017',
        lib: ['dom', 'dom.iterable', 'esnext'],
        allowJs: true,
        skipLibCheck: true,
        strict: true,
        noEmit: true,
        esModuleInterop: true,
        module: 'esnext',
        moduleResolution: 'bundler',
        resolveJsonModule: true,
        isolatedModules: true,
        jsx: 'preserve',
        incremental: true,
        plugins: [{ name: 'next' }],
        paths: { '@/*': ['./src/*'] },
      },
      include: ['next-env.d.ts', '**/*.ts', '**/*.tsx', '.next/types/**/*.ts'],
      exclude: ['node_modules'],
    },
    null,
    2
  )
);

// tailwind.config.ts
writeFile(
  'tailwind.config.ts',
  `import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#000000',
          secondary: '#333333',
          accent: '#C9A84C',
          light: '#FAFAFA',
          muted: '#888888',
        },
      },
    },
  },
  plugins: [],
};
export default config;
`
);

// postcss.config.js
writeFile(
  'postcss.config.js',
  `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`
);

// keystatic.config.ts
writeFile(
  'keystatic.config.ts',
  `import { collection, singleton, fields } from '@keystatic/core';
import { createBrandConfig, seoFields, imageField } from '@mg/keystatic-config';

export default createBrandConfig({
  brandName: '${displayName}',
  brandSlug: '${slug}',
  singletons: {
    homepage: singleton({
      label: 'Página Principal',
      path: 'content/homepage',
      schema: {
        heroTitle: fields.text({ label: 'Hero - Título' }),
        heroSubtitle: fields.text({ label: 'Hero - Subtítulo' }),
        heroImage: imageField('Hero - Imagen', 'hero'),
        heroCta: fields.text({ label: 'Hero - Texto del botón' }),
        heroCtaLink: fields.text({ label: 'Hero - Link del botón' }),
      },
    }),
  },
  collections: {},
});
`
);

// app/layout.tsx
writeFile(
  'app/layout.tsx',
  `import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '${displayName}',
  description: '${displayName} - Sitio Oficial',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-brand-primary text-brand-light antialiased">
        {children}
      </body>
    </html>
  );
}
`
);

// app/globals.css
writeFile(
  'app/globals.css',
  `@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  min-height: 100vh;
}
`
);

// app/page.tsx
writeFile(
  'app/page.tsx',
  `export default function HomePage() {
  return (
    <main>
      <section className="flex min-h-screen items-center justify-center">
        <h1 className="text-5xl font-bold">${displayName}</h1>
      </section>
    </main>
  );
}
`
);

// Keystatic admin routes
writeFile(
  'app/keystatic/layout.tsx',
  `import KeystaticApp from './keystatic-app';

export default function Layout() {
  return <KeystaticApp />;
}
`
);

writeFile(
  'app/keystatic/keystatic-app.tsx',
  `'use client';

import { makePage } from '@keystatic/next/ui/app';
import keystaticConfig from '../../keystatic.config';

export default makePage(keystaticConfig);
`
);

writeFile(
  'app/api/keystatic/[...params]/route.ts',
  `import { makeRouteHandler } from '@keystatic/next/route-handler';
import keystaticConfig from '../../../../keystatic.config';

export const { POST, GET } = makeRouteHandler({ config: keystaticConfig });
`
);

// Content directory
writeFile('content/.gitkeep', '');

console.log(`\n✓ Brand "${displayName}" scaffolded at apps/${slug}/`);
console.log(`  Run: pnpm install && pnpm dev --filter=@mg/${slug}`);
console.log(`  CMS: http://localhost:${port}/keystatic\n`);
