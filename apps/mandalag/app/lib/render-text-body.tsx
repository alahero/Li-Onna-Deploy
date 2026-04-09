import React, { type ReactNode } from 'react';

/**
 * Render a plain-text body from Keystatic into a stack of headings and
 * paragraphs.
 *
 * Rules (intentionally simple so marketing can edit without learning markdown):
 *   - Lines starting with `# `  → <h2>
 *   - Lines starting with `## ` → <h3>
 *   - Lines starting with `### ` → <h4>
 *   - Blank lines break paragraphs
 *   - Everything else becomes a paragraph
 */
export function renderTextBody(body?: string | null): ReactNode {
  if (!body) return null;

  const lines = body.replace(/\r\n/g, '\n').split('\n');
  const elements: ReactNode[] = [];
  let buffer: string[] = [];
  let key = 0;

  const flushParagraph = () => {
    if (buffer.length === 0) return;
    const text = buffer.join(' ').trim();
    if (text) {
      elements.push(
        <p
          key={`p-${key++}`}
          style={{ margin: '0 0 20px', fontSize: 'inherit', lineHeight: 'inherit' }}
        >
          {text}
        </p>
      );
    }
    buffer = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushParagraph();
      continue;
    }
    if (line.startsWith('### ')) {
      flushParagraph();
      elements.push(
        <h4
          key={`h4-${key++}`}
          className="font-figtree"
          style={{ fontSize: '18px', fontWeight: 700, margin: '32px 0 12px', color: '#fff' }}
        >
          {line.slice(4)}
        </h4>
      );
    } else if (line.startsWith('## ')) {
      flushParagraph();
      elements.push(
        <h3
          key={`h3-${key++}`}
          className="font-figtree"
          style={{ fontSize: '22px', fontWeight: 700, margin: '40px 0 14px', color: '#fff' }}
        >
          {line.slice(3)}
        </h3>
      );
    } else if (line.startsWith('# ')) {
      flushParagraph();
      elements.push(
        <h2
          key={`h2-${key++}`}
          className="font-figtree"
          style={{
            fontSize: '28px',
            fontWeight: 800,
            margin: '48px 0 16px',
            color: '#fff',
          }}
        >
          {line.slice(2)}
        </h2>
      );
    } else {
      buffer.push(line);
    }
  }
  flushParagraph();

  return <>{elements}</>;
}
