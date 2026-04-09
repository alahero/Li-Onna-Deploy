import Link from 'next/link';

export const metadata = {
  title: '404 — Houdinni',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="bg-houdinni-black text-houdinni-white min-h-screen flex flex-col items-center justify-center px-6 text-center gap-6">
      <h1 className="text-[clamp(80px,14vw,200px)] font-bold leading-none tracking-tight m-0">404</h1>
      <p className="text-lg max-w-xl opacity-80 m-0">
        The trick didn&apos;t work. This page has vanished.
      </p>
      <Link
        href="/"
        className="mt-2 inline-flex items-center rounded-full border border-white/30 px-8 py-3 text-xs uppercase tracking-[0.2em] no-underline hover:bg-white hover:text-black transition-colors"
      >
        Back to home
      </Link>
    </main>
  );
}
