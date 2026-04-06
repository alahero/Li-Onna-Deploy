import { readFileSync } from 'fs';
import { join } from 'path';
import Script from 'next/script';
import Footer from './components/footer';

function readHTML(filename: string) {
  return readFileSync(join(process.cwd(), 'app', filename), 'utf-8');
}

export default function HomePage() {
  const beforeFooter = readHTML('framer-before-footer.html');
  const afterFooter = readHTML('framer-after-footer.html');

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: beforeFooter }} />
      <Footer />
      <div dangerouslySetInnerHTML={{ __html: afterFooter }} />
      <Script src="/assets/js/rolldown-runtime.CYC24FXu.mjs" type="module" strategy="afterInteractive" />
      <Script src="/assets/js/react.C31UNSk5.mjs" type="module" strategy="afterInteractive" />
      <Script src="/assets/js/motion.BewZN2YG.mjs" type="module" strategy="afterInteractive" />
      <Script src="/assets/js/framer.BMeUTG1O.mjs" type="module" strategy="afterInteractive" />
      <Script src="/assets/js/shared-lib.C_Z5cBVP.mjs" type="module" strategy="afterInteractive" />
      <Script src="/assets/js/dJTGG6EOX-FUNsI-jZ7QN19opHYHcO5KYGETpWSEZ8w.DwYR7GYs.mjs" type="module" strategy="afterInteractive" />
      <Script src="/assets/js/script_main.Dv_Ysazf.mjs" type="module" strategy="afterInteractive" />
    </>
  );
}
