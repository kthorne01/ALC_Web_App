import React, { useRef, useEffect } from 'react';

const PhotoSlot = ({ src, style = {} }) => (
  <div className="overflow-hidden bg-zinc-300" style={{ mixBlendMode: 'multiply', ...style }}>
    <img src={src} alt="" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
  </div>
);

const StatementV2 = () => {
  const photo1Ref = useRef(null);
  const photo2Ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (photo1Ref.current) photo1Ref.current.style.transform = `translateY(${y * -0.08}px)`;
      if (photo2Ref.current) photo2Ref.current.style.transform = `translateY(${y * -0.14}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative py-24 lg:py-36 px-10 lg:px-16 bg-transparent overflow-hidden">
      <span
        className="absolute left-1 top-1/2 font-heading font-bold text-black/10 text-[11px] tracking-[0.5em] uppercase select-none pointer-events-none"
        style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}
      >
        WORD
      </span>

      <div className="relative">
        <p className="text-black/30 text-[11px] tracking-[0.4em] uppercase mb-6 font-medium">
          <span className="text-gold">[ </span>John 10:10<span className="text-gold"> ]</span>
        </p>

        <h2 className="font-heading font-bold uppercase relative z-10" style={{ lineHeight: 0.9, letterSpacing: '-0.02em' }}>
          <span className="block text-black"  style={{ fontSize: 'clamp(52px, 8.5vw, 130px)' }}>I CAME THAT</span>
          <span className="block text-black"  style={{ fontSize: 'clamp(52px, 8.5vw, 130px)' }}>THEY MAY HAVE</span>
          <span className="block text-gold"   style={{ fontSize: 'clamp(52px, 8.5vw, 130px)' }}>LIFE,</span>
          <span className="block text-black/60" style={{ fontSize: 'clamp(28px, 4.5vw, 70px)', marginTop: '0.2em' }}>AND HAVE IT MORE ABUNDANTLY.</span>
        </h2>

        <div ref={photo1Ref} className="absolute z-20 hidden lg:block" style={{ top: '5%', left: '-2%', width: '18%' }}>
          <PhotoSlot src="/images/church/worship.jpg" style={{ aspectRatio: '3/4' }} />
        </div>

        <div ref={photo2Ref} className="absolute z-20 hidden lg:block" style={{ bottom: '-5%', right: '3%', width: '15%' }}>
          <PhotoSlot src="/images/church/congregation.jpg" style={{ aspectRatio: '1/1' }} />
        </div>
      </div>
    </section>
  );
};

export default StatementV2;
