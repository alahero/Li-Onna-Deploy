import { readFileSync } from 'fs';
import { join } from 'path';
import Script from 'next/script';

function getFramerHTML() {
  const filePath = join(process.cwd(), 'app', 'framer-body.html');
  return readFileSync(filePath, 'utf-8');
}

export default function HomePage() {
  const html = getFramerHTML();
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
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
