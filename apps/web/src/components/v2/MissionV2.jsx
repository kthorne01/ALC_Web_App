import React, { useRef, useEffect } from 'react';

const MissionV2 = () => {
  const p1Box = useRef(null);
  const p2Box = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (p1Box.current) p1Box.current.style.transform = `translateY(${y * -0.1}px)`;
      if (p2Box.current) p2Box.current.style.transform = `translateY(${y * -0.18}px)`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const pillars = [
    { num: '01', label: 'ENCOUNTER GOD' },
    { num: '02', label: 'GROW IN FAITH' },
    { num: '03', label: 'SERVE YOUR CITY' },
    { num: '04', label: 'REACH THE WORLD' },
  ];

  return (
    <section className="relative py-24 lg:py-36 px-10 lg:px-16 bg-transparent overflow-hidden">
      <span
        className="absolute left-1 top-1/2 font-heading font-bold text-black/10 text-[11px] tracking-[0.5em] uppercase select-none pointer-events-none"
        style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}
      >
        MISSION
      </span>

      <div className="relative max-w-5xl">
        <p className="text-black/30 text-[11px] tracking-[0.4em] uppercase mb-6 font-medium">
          <span className="text-gold">[ </span>Why We Exist<span className="text-gold"> ]</span>
        </p>

        <h2 className="font-heading font-bold uppercase relative z-20 mb-12" style={{ lineHeight: 0.9, letterSpacing: '-0.02em' }}>
          <span className="block text-black/40" style={{ fontSize: 'clamp(28px, 4vw, 56px)' }}>ALC EXISTS TO</span>
          <span className="block text-black"    style={{ fontSize: 'clamp(48px, 7.5vw, 120px)' }}>HELP PEOPLE</span>
          <span className="block text-gold"     style={{ fontSize: 'clamp(48px, 7.5vw, 120px)' }}>LIVE FULLY.</span>
        </h2>

        <div className="border-t border-black/10">
          {pillars.map((p) => (
            <div key={p.num} className="flex items-center gap-6 py-4 border-b border-black/8 group">
              <span className="font-heading text-black/20 text-xs tracking-[0.3em] w-8 flex-shrink-0">{p.num}</span>
              <span className="font-heading font-bold text-black/60 group-hover:text-gold transition-colors duration-200 tracking-[0.15em] uppercase"
                style={{ fontSize: 'clamp(18px, 2.5vw, 32px)' }}>
                {p.label}
              </span>
              <span className="ml-auto text-black/20 group-hover:text-gold/50 transition-colors text-xs">→</span>
            </div>
          ))}
        </div>
      </div>

      {/* Photo 1 */}
      <div ref={p1Box} className="absolute z-10 hidden lg:block overflow-hidden bg-zinc-300"
        style={{ mixBlendMode: 'multiply', top: '8%', right: '2%', width: '22%', aspectRatio: '3/4' }}>
        <img src="/images/church/mission.jpg" alt=""
          className="w-full h-full object-cover"
          onError={(e) => { e.target.style.display = 'none'; }} />
      </div>

      {/* Photo 2 */}
      <div ref={p2Box} className="absolute z-10 hidden lg:block overflow-hidden bg-zinc-300"
        style={{ mixBlendMode: 'multiply', bottom: '6%', right: '26%', width: '14%', aspectRatio: '1/1' }}>
        <img src="/images/church/community.jpg" alt=""
          className="w-full h-full object-cover"
          onError={(e) => { e.target.style.display = 'none'; }} />
      </div>
    </section>
  );
};

export default MissionV2;
