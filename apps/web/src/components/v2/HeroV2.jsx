import React, { useRef, useEffect } from 'react';

const HeroV2 = () => {
  const photo1Ref = useRef(null);
  const photo2Ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (photo1Ref.current) photo1Ref.current.style.transform = `translateY(${y * -0.14}px)`;
      if (photo2Ref.current) photo2Ref.current.style.transform = `translateY(${y * -0.22}px)`;
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

      {/* Left edge word */}
      <span
        className="absolute left-1 top-1/2 font-heading font-bold text-black/10 text-[11px] tracking-[0.5em] uppercase select-none pointer-events-none z-0"
        style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}
      >
        HOME
      </span>

      <div className="flex-1 flex flex-col lg:flex-row pt-20">

        {/* Left column: headline + floating photos */}
        <div className="flex-1 flex flex-col px-10 lg:px-16 py-10 lg:py-14 relative overflow-hidden">

          <p className="text-black/35 text-[11px] tracking-[0.4em] uppercase mb-6 font-medium relative z-20">
            <span className="text-gold">[ </span>
            Abundant Life Church — Rock Hill, SC
            <span className="text-gold"> ]</span>
          </p>

          {/* Headline */}
          <h1
            className="font-heading font-bold uppercase relative z-20"
            style={{ lineHeight: 0.88, letterSpacing: '-0.02em' }}
          >
            <span className="block text-black" style={{ fontSize: 'clamp(60px, 10vw, 160px)' }}>HOME OF</span>

            {/* "THE LIVING" — photo shows through the letter shapes (background-clip: text) */}
            {/* Black fallback underneath so text is never invisible */}
            <span className="block relative" style={{ fontSize: 'clamp(60px, 10vw, 160px)' }}>
              <span className="text-black" aria-hidden="true" style={{ userSelect: 'none' }}>THE LIVING</span>
              <span
                className="absolute inset-0"
                style={{
                  backgroundImage: 'url(/images/hero/hero-worship.jpg)',
                  backgroundSize: '110% auto',
                  backgroundPosition: '55% 35%',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                THE LIVING
              </span>
            </span>

            <span className="block text-gold" style={{ fontSize: 'clamp(60px, 10vw, 160px)' }}>CHURCHES.</span>
          </h1>

          {/* Photo 1 — tall portrait, floats to the right behind the headline */}
          <div
            ref={photo1Ref}
            className="absolute hidden lg:block overflow-hidden bg-zinc-300"
            style={{
              mixBlendMode: 'multiply',
              top: '8%',
              right: '4%',
              width: '26%',
              aspectRatio: '3/4',
              zIndex: 10,
            }}
          >
            <img
              src="/images/hero/hero-worship.jpg"
              alt=""
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>

          {/* Photo 2 — small square, lower, scrolls faster */}
          <div
            ref={photo2Ref}
            className="absolute hidden lg:block overflow-hidden bg-zinc-300"
            style={{
              mixBlendMode: 'multiply',
              bottom: '8%',
              right: '30%',
              width: '16%',
              aspectRatio: '1/1',
              zIndex: 10,
            }}
          >
            <img
              src="/images/hero/hero-community.jpg"
              alt=""
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>

        </div>

        {/* Right column: latest sermon + video (standard 16:9) */}
        <div className="lg:w-[34%] xl:w-[35%] flex flex-col px-10 lg:px-8 pb-6 lg:pb-10 pt-0 lg:pt-24 gap-4">
          <p className="text-gold text-[10px] tracking-[0.55em] uppercase font-bold">
            Latest Sermon
          </p>
          <a href="#sermons" className="text-black/40 hover:text-gold text-xs tracking-[0.15em] uppercase transition-colors flex items-center gap-2 group">
            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[8px] flex-shrink-0">▶</span>
            <span>
              <span className="text-gold/70 group-hover:text-gold">( </span>
              WATCH NOW ↗
              <span className="text-gold/70 group-hover:text-gold"> )</span>
            </span>
          </a>

          {/* Video — 16:9 aspect ratio, naturally proportional to column width */}
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

      {/* Bottom bracket CTAs */}
      <div className="border-t border-black/10 py-5 px-10 lg:px-16 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-10">
        {ctaLinks.map((cta) => (
          <a key={cta.label} href={cta.href}
            className="text-black/50 hover:text-gold text-xs tracking-[0.2em] uppercase transition-colors duration-200 font-medium group">
            <span className="text-gold/60 group-hover:text-gold">( </span>
            {cta.label}
            <span className="text-gold/60 group-hover:text-gold"> )</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default HeroV2;
