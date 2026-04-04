export function Ticker() {
  const text = 'tacosatarantados';
  const repeat = 20;

  return (
    <div
      style={{
        width: '100%',
        background: '#ffffff',
        overflow: 'hidden',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        borderTop: '1px solid #0c7528',
        borderBottom: '1px solid #0c7528',
      }}
    >
      <div className="marquee-track">
        {Array.from({ length: repeat }).map((_, i) => (
          <span
            key={i}
            style={{
              fontFamily: '"Gothic Regular", sans-serif',
              fontWeight: 400,
              fontSize: '18px',
              color: '#0c7528',
              whiteSpace: 'nowrap',
              paddingRight: '40px',
            }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
