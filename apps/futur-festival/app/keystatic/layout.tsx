import KeystaticApp from './keystatic-app';

/**
 * Keystatic SPA entry point. The root layout paints the body navy
 * (#224366), which makes the admin UI unreadable. The <style>
 * below forces a light bg + dark text only on the /keystatic route.
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
