import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-mg-bg border-t border-white/5">
      <div className="mx-auto flex max-w-page flex-col md:flex-row items-center justify-between gap-6 px-4 sm:px-6 lg:px-10 py-8">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/logo/mandala-group-logo.svg"
            alt="Mandala Group"
            style={{ height: '30px', width: 'auto', opacity: 0.6 }}
          />
        </div>

        {/* Legal Links */}
        <div className="flex items-center gap-6">
          <Link
            href="/privacy"
            className="font-inter text-xs uppercase tracking-wider text-mg-gray hover:text-white transition-colors"
          >
            PRIVACY
          </Link>
          <Link
            href="/terms"
            className="font-inter text-xs uppercase tracking-wider text-mg-gray hover:text-white transition-colors"
          >
            TERMS & CONDITIONS
          </Link>
          <Link
            href="/legal"
            className="font-inter text-xs uppercase tracking-wider text-mg-gray hover:text-white transition-colors"
          >
            LEGAL
          </Link>
        </div>
      </div>
    </footer>
  );
}
