import React, { useRef, useEffect } from 'react';

const HeroV2 = () => {
  const p1Box = useRef(null);
  const p2Box = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (p1Box.current) p1Box.current.style.transform = `translateY(${y * -0.15}px)`;
      if (p2Box.current) p2Box.current.style.transform = `translateY(${y * -0.26}px)`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const ctaLinks = [
    { label: 'Plan Your Visit', href: '#visit' },
    { label: 'Get Connected', href: '#connect' },
    { label: 'Watch & Grow', href: '#sermons' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col bg-transparent" id="hero">

      <span
        className="absolute left-1 top-1/2 font-heading font-bold text-black/10 text-[11px] tracking-[0.5em] uppercase select-none pointer-events-none z-0"
        style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}
      >
        HOME
      </span>

      {/* Photo 1 — large portrait, floats right behind headline */}
      <div
        ref={p1Box}
        className="absolute hidden lg:block overflow-hidden bg-zinc-300"
        style={{ mixBlendMode: 'multiply', top: '8%', right: '22%', width: '30%', aspectRatio: '3/4', zIndex: 10 }}
      >
        <img
          src="/images/hero/hero-worship.jpg"
          alt=""
          className="w-full h-full object-cover"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </div>

      {/* Photo 2 — smaller, lower left */}
      <div
        ref={p2Box}
        className="absolute hidden lg:block overflow-hidden bg-zinc-300"
        style={{ mixBlendMode: 'multiply', bottom: '18%', left: '8%', width: '18%', aspectRatio: '4/5', zIndex: 10 }}
      >
        <img
          src="/images/hero/hero-community.jpg"
          alt=""
          className="w-full h-full object-cover"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </div>

      {/* Video — smaller, lower-right, absolutely positioned */}
      <div
        className="absolute hidden lg:flex flex-col gap-3"
        style={{ right: '2%', bottom: '10%', width: '19%', zIndex: 20 }}
      >
        <p className="text-gold text-[10px] tracking-[0.55em] uppercase font-bold">Latest Sermon</p>
        <a href="#sermons" className="text-black/40 hover:text-gold text-xs tracking-[0.15em] uppercase transition-colors flex items-center gap-2 group">
          <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[7px] flex-shrink-0">▶</span>
          <span>
            <span className="text-gold/70 group-hover:text-gold">( </span>WATCH NOW ↗<span className="text-gold/70 group-hover:text-gold"> )</span>
          </span>
        </a>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src="https://www.youtube.com/embed/YdjlUysRqN0"
            title="Latest Sermon"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            style={{ border: 'none' }}
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col pt-20">
        <div className="flex-1 px-10 lg:px-16 py-10 lg:py-14">

          <p className="relative text-black/35 text-[11px] tracking-[0.4em] uppercase mb-6 font-medium" style={{ zIndex: 20 }}>
            <span className="text-gold">[ </span>
            Abundant Life Church — Rock Hill, SC
            <span className="text-gold"> ]</span>
          </p>

          <h1
            className="relative font-heading font-bold uppercase"
            style={{ lineHeight: 0.88, letterSpacing: '-0.02em', zIndex: 20 }}
          >
            <span className="block text-black" style={{ fontSize: 'clamp(60px, 10vw, 160px)' }}>HOME OF</span>
            <span className="block text-black" style={{ fontSize: 'clamp(60px, 10vw, 160px)' }}>THE LIVING</span>
            <span className="block text-gold"  style={{ fontSize: 'clamp(60px, 10vw, 160px)' }}>CHURCHES.</span>
          </h1>

          {/* Mobile-only video */}
          <div className="lg:hidden mt-10">
            <p className="text-gold text-[10px] tracking-[0.55em] uppercase font-bold mb-3">Latest Sermon</p>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/YdjlUysRqN0"
                title="Latest Sermon"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: 'none' }}
              />
            </div>
          </div>

        </div>
      </div>

      <div className="relative border-t border-black/10 py-5 px-10 lg:px-16 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-10" style={{ zIndex: 20 }}>
        {ctaLinks.map((cta) => (
          <a key={cta.label} href={cta.href}
            className="text-black/50 hover:text-gold text-xs tracking-[0.2em] uppercase transition-colors duration-200 font-medium group">
            <span className="text-gold/60 group-hover:text-gold">( </span>{cta.label}<span className="text-gold/60 group-hover:text-gold"> )</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default HeroV2;
