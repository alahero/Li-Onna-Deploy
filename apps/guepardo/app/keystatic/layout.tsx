import KeystaticApp from './keystatic-app';

/**
 * Keystatic SPA entry point.
 *
 * The root layout paints the site body in burgundy (#3d1010), which
 * bleeds through the Keystatic admin UI and makes it unreadable. The
 * <style> block below overrides body bg to white ONLY under the
 * /keystatic route, and hides any fixed full-screen aria-hidden
 * background divs that some brand layouts add.
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
