# MG Brands — Monorepo

Monorepo con [Turborepo](https://turbo.build/) que agrupa varios sitios de marca, cada uno con **Next.js** y **Keystatic** como CMS basado en archivos. El despliegue previsto es **Vercel**.

## Requisitos previos

- **Node.js** 20 LTS (recomendado) o compatible con Next.js 14
- **pnpm** 9.x (el repo declara `packageManager: pnpm@9.15.0`)

Instalar pnpm globalmente si hace falta:

```bash
npm install -g pnpm@9
```

## Instalación

En la raíz del repositorio:

```bash
pnpm install
```

## Comandos principales

| Comando | Descripción |
|--------|-------------|
| `pnpm dev` | Arranca **todas** las apps en modo desarrollo (Turbo orquesta cada `next dev` en su puerto). |
| `pnpm dev --filter=@mg/<slug>` | Arranca **solo** una marca (ver tabla de slugs abajo). |
| `pnpm build` | Compila todas las apps (`next build`). |
| `pnpm lint` | Ejecuta el linter en el monorepo. |
| `pnpm clean` | Limpia artefactos de build/cache de Turbo. |
| `pnpm new-brand` | Alias de `node scripts/new-brand.js` (ver sección “Nueva marca”). |
| `pnpm check:pixel` | Comparación visual local vs producción con Playwright (ver sección “Pixel check”). |

### Ejecutar una sola marca

Ejemplos:

```bash
pnpm dev --filter=@mg/guepardo
pnpm build --filter=@mg/spade
```

## Estructura del repositorio

```
apps/                    # Sitios Next.js (una carpeta por marca)
packages/
  keystatic-config/      # Campos, tipos y helper createBrandConfig para Keystatic
  ui-primitives/         # Componentes compartidos (layout, SEO, etc.)
  shared-utils/          # Utilidades (cn, fechas, slugify, etc.)
scripts/
  new-brand.js           # Generador de esqueleto para una nueva app de marca
  pixel-check.mjs        # Script de comparación visual entre local y sitio en vivo
```

El contenido editable del CMS vive en cada app, típicamente bajo `content/` y `public/` según la configuración de Keystatic de esa marca.

## Marcas y puertos (desarrollo local)

Cada app usa un puerto fijo en `package.json` para evitar choques al levantar varias a la vez.

| Marca | Slug (`@mg/...`) | Puerto |
|-------|------------------|--------|
| Guepardo | `guepardo` | 3001 |
| Tacos Atarantados | `tacos-atarantados` | 3002 |
| FUTUR Festival | `futur-festival` | 3003 |
| Tehmplo | `tehmplo` | 3004 |
| LI-ONNA | `lionna` | 3005 |
| SPADE | `spade` | 3006 |
| Houdinni | `houdinni` | 3007 |
| Mandalag | `mandalag` | 3008 |

## Keystatic (CMS)

En desarrollo, la UI de administración suele estar en:

`http://localhost:<puerto>/keystatic`

En producción, la ruta es la misma bajo el dominio del sitio, por ejemplo:

`https://<tu-dominio>/keystatic`

La configuración por marca está en `keystatic.config.ts` dentro de cada app; los paquetes compartidos están en `@mg/keystatic-config`.

## Nueva marca

Scaffold desde la raíz (slug en minúsculas y sin espacios, nombre para mostrar entre comillas, puerto libre):

```bash
pnpm new-brand <slug> "<nombre visible>" <puerto>
```

Ejemplo:

```bash
pnpm new-brand la-mansion "La Mansión" 3009
```

Esto crea `apps/<slug>/` con dependencias alineadas al resto del monorepo. Después ejecuta `pnpm install` si agregaste paquetes nuevos.

## Pixel check (regresión visual)

El script `scripts/pixel-check.mjs` compara capturas de la home **local** vs **producción** para las marcas definidas en el propio script. Requiere que los servidores locales estén levantados donde corresponda.

Opciones útiles (revisar el archivo para la lista exacta de sitios y flags): se puede filtrar por slug con `--slug=...`.

```bash
pnpm check:pixel
```

Los artefactos se pueden guardar bajo `.visual-check/` (ignorado en git según `.gitignore`).

## Variables de entorno

Los archivos `.env` y variantes locales están en `.gitignore`. Si una marca necesita secretos (por ejemplo integraciones), créalos en cada app según la documentación de Next.js y **no** los subas al repositorio.

## Despliegue

Las apps están pensadas para desplegarse en **Vercel** (proyecto por app o según la configuración de tu equipo). Asegúrate de que el **build** (`pnpm build`) pase en CI y de configurar dominios y variables de entorno en el panel de Vercel.

## Más ayuda

- Convenciones del monorepo: `CLAUDE.md` en la raíz (resumen de marcas y comandos).
- [Documentación de Next.js](https://nextjs.org/docs)
- [Keystatic](https://keystatic.com/)
