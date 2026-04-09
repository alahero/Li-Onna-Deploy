import KeystaticApp from './keystatic-app';

/**
 * Keystatic SPA entry point. The root layout uses a position:fixed
 * aria-hidden div to paint blue (rgb(0,91,255)) behind the content,
 * which bleeds through the Keystatic admin UI. We hide that div
 * and force a light bg + dark text only on the /keystatic route.
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
