import React, { useRef, useEffect } from 'react';

const StatementV2 = () => {
  const p1Box = useRef(null);
  const p1Img = useRef(null);
  const p2Box = useRef(null);
  const p2Img = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (p1Box.current) p1Box.current.style.transform = `translateY(${y * -0.08}px)`;
      if (p2Box.current) p2Box.current.style.transform = `translateY(${y * -0.14}px)`;
      if (p1Img.current) p1Img.current.style.transform = `translateY(${y * 0.05}px)`;
      if (p2Img.current) p2Img.current.style.transform = `translateY(${y * 0.09}px)`;
    };
    onScroll();
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

        <h2 className="font-heading font-bold uppercase relative z-20" style={{ lineHeight: 0.9, letterSpacing: '-0.02em' }}>
          <span className="block text-black"   style={{ fontSize: 'clamp(52px, 8.5vw, 130px)' }}>I CAME THAT</span>
          <span className="block text-black"   style={{ fontSize: 'clamp(52px, 8.5vw, 130px)' }}>THEY MAY HAVE</span>
          <span className="block text-gold"    style={{ fontSize: 'clamp(52px, 8.5vw, 130px)' }}>LIFE,</span>
          <span className="block text-black/60" style={{ fontSize: 'clamp(28px, 4.5vw, 70px)', marginTop: '0.2em' }}>AND HAVE IT MORE ABUNDANTLY.</span>
        </h2>

        {/* Photo 1 */}
        <div ref={p1Box} className="absolute z-10 hidden lg:block overflow-hidden bg-zinc-300"
          style={{ mixBlendMode: 'multiply', top: '5%', left: '-2%', width: '18%', aspectRatio: '3/4' }}>
          <img ref={p1Img} src="/images/church/worship.jpg" alt=""
            className="w-full object-cover" style={{ height: '130%', marginTop: '-15%' }}
            onError={(e) => { e.target.style.display = 'none'; }} />
        </div>

        {/* Photo 2 */}
        <div ref={p2Box} className="absolute z-10 hidden lg:block overflow-hidden bg-zinc-300"
          style={{ mixBlendMode: 'multiply', bottom: '-5%', right: '3%', width: '15%', aspectRatio: '1/1' }}>
          <img ref={p2Img} src="/images/church/congregation.jpg" alt=""
            className="w-full object-cover" style={{ height: '130%', marginTop: '-15%' }}
            onError={(e) => { e.target.style.display = 'none'; }} />
        </div>
      </div>
    </section>
  );
};

export default StatementV2;
