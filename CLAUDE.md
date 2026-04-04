# MG Brands Monorepo

Turborepo monorepo with 7+ brand websites, each running Next.js + Keystatic CMS, deployed on Vercel.

## Structure
- `apps/*` — Individual brand sites (Next.js apps)
- `packages/keystatic-config` — Shared Keystatic fields, types, and `createBrandConfig` helper
- `packages/ui-primitives` — Shared layout/UI components (Container, Section, SocialIcons, SEOHead)
- `packages/shared-utils` — Utilities (cn, formatDate, slugify)
- `scripts/new-brand.js` — CLI to scaffold a new brand site

## Brands
| Brand | Slug | Port | Type |
|-------|------|------|------|
| Guepardo | guepardo | 3001 | Nightclub |
| Tacos Atarantados | tacos-atarantados | 3002 | Restaurant |
| FUTUR Festival | futur-festival | 3003 | Music Festival |
| Tehmplo | tehmplo | 3004 | Jungle Nightclub (Tulum) |
| LI-ONNA | lionna | 3005 | Japanese-Latin Restaurant (Madrid) |
| SPADE | spade | 3006 | Cocktail Bar |
| Houdinni | houdinni | 3007 | Speakeasy/Entertainment |

## Commands
- `pnpm dev` — Run all apps
- `pnpm dev --filter=@mg/<slug>` — Run single brand
- `pnpm build` — Build all
- `node scripts/new-brand.js <slug> "<name>" <port>` — Create new brand

## CMS Access
Each brand has Keystatic at `http://localhost:<port>/keystatic` (local dev) or `https://<domain>/keystatic` (production).

## Content
Content is stored as files in each app's `content/` directory. Keystatic manages these files through its UI.
