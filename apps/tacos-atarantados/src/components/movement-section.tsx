import Image from 'next/image';

export function MovementSection() {
  return (
    <section
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        height: '100vh',
        maxHeight: '978px',
        background: '#0c7528',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* ATARANTADOS MOVEMENT image — Framer: x=688, y offset centered, 1602x769, objectFit=cover */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          right: '-33.5%',
          width: '133.5%',
          height: '769px',
        }}
      >
        <Image
          src="/images/atarantados-movement.png"
          alt="ATARANTADOS MOVEMENT"
          width={1602}
          height={769}
          className="movement-image"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </section>
  );
}
