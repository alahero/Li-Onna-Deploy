import type { ReactElement } from 'react';

/**
 * Renders a JSON-LD <script> tag with a schema.org object.
 *
 * Use this to emit structured data (LocalBusiness, Restaurant, Event, etc.)
 * so search engines can show rich results. The `data` object is serialized
 * as-is and inserted into the document head / body.
 *
 * Example:
 *   <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Restaurant', name: '...' }} />
 */
export interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
  /** Optional id so multiple JSON-LD blocks can coexist. */
  id?: string;
}

export function JsonLd({ data, id }: JsonLdProps): ReactElement {
  return (
    <script
      type="application/ld+json"
      id={id}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}
