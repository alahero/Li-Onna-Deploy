export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{
        backgroundColor: '#000',
        height: '163px',
      }}
    >
      <div
        className="mx-auto flex h-full max-w-page items-center px-4 sm:px-6 lg:px-10"
        style={{ gap: '10px' }}
      >
        {/* Left: Logo */}
        <div className="flex flex-1 items-start h-full py-[30px]">
          <img
            src="/images/logo/mandala-group-logo.svg"
            alt="Mandala Group"
            style={{ height: '44px', width: 'auto', opacity: 0.6 }}
          />
        </div>

        {/* Right: Legal Links */}
        <div className="flex flex-1 flex-col items-end justify-end h-full py-[30px] gap-[2px]">
          <a
            href="/terms"
            className="font-inter text-[#888] hover:text-white transition-colors"
            style={{ fontSize: '14px', fontWeight: 600 }}
          >
            TERMS & CONDITIONS
          </a>
          <a
            href="/legal"
            className="font-inter text-[#888] hover:text-white transition-colors"
            style={{ fontSize: '14px', fontWeight: 600 }}
          >
            LEGAL
          </a>
        </div>
      </div>
    </footer>
  );
}
