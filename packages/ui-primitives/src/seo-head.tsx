import React from 'react';

interface SEOHeadProps {
  title: string;
  description?: string;
  ogImage?: string;
  url?: string;
  siteName?: string;
}

/**
 * Returns meta tag props for Next.js metadata API.
 * Use this in your layout.tsx or page.tsx generateMetadata function.
 */
export function generateSEOMetadata({
  title,
  description,
  ogImage,
  url,
  siteName,
}: SEOHeadProps) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName,
      ...(url && { url }),
      ...(ogImage && {
        images: [{ url: ogImage, width: 1200, height: 630 }],
      }),
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
      ...(ogImage && { images: [ogImage] }),
    },
  };
}

/** Simple component wrapper if needed in client components */
export function SEOHead(_props: SEOHeadProps) {
  return null; // Use generateSEOMetadata in server components instead
}
