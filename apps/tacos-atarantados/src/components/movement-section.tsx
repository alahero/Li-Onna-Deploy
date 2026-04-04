import Image from 'next/image';

export function MovementSection() {
  return (
    <section
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        height: '958px',
        background: '#0c7528',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 'calc(49.9% - 384.5px)',
          right: '-790px',
          width: '1602px',
          height: '769px',
        }}
      >
        <Image
          src="/images/atarantados-movement.png"
          alt="ATARANTADOS MOVEMENT"
          width={1602}
          height={769}
          className="movement-image"
          style={{ width: '1602px', height: '769px', objectFit: 'contain' }}
        />
      </div>
    </section>
  );
}
