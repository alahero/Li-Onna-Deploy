import type { Config } from '@keystatic/core';

export interface BrandKeystaticConfig {
  brandName: string;
  brandSlug: string;
  collections?: Config['collections'];
  singletons?: Config['singletons'];
}
