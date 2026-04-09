import KeystaticApp from './keystatic-app';

/**
 * Keystatic SPA entry point. The root layout paints the body
 * #0e0e0f + white text, making the admin UI unreadable. Forces a
 * light bg + dark text only on /keystatic.
 */
export default function Layout() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html, body {
              background-color: #ffffff !important;
              color: #0f172a !important;
            }
            body > div[aria-hidden="true"] {
              display: none !important;
            }
          `,
        }}
      />
      <KeystaticApp />
    </>
  );
}
