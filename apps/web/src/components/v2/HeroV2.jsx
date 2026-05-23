import React, { useRef, useEffect } from 'react';

const PhotoSlot = ({ src, style = {}, className = '' }) => (
  <div
    className={`overflow-hidden bg-zinc-300 ${className}`}
    style={{ mixBlendMode: 'multiply', ...style }}
  >
    <img
      src={src}
      alt=""
      className="w-full h-full object-cover"
      onError={(e) => { e.target.style.display = 'none'; }}
    />
  </div>
);

const HeroV2 = () => {
  const photo1Ref = useRef(null);
  const photo2Ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (photo1Ref.current) photo1Ref.current.style.transform = `translateY(${y * -0.15}px)`;
      if (photo2Ref.current) photo2Ref.current.style.transform = `translateY(${y * -0.25}px)`;
    };
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

      <div className="flex-1 flex flex-col lg:flex-row pt-20 relative">

        {/* Left column: massive headline */}
        <div className="flex-1 relative flex flex-col justify-center px-10 lg:px-16 py-12 lg:py-20">

          <p className="text-black/40 text-[11px] tracking-[0.4em] uppercase mb-4 font-medium">
            <span className="text-gold">[ </span>
            Abundant Life Church — Rock Hill, SC
            <span className="text-gold"> ]</span>
          </p>

          {/* Headline — dark text, photos float on top (z-20 > z-10) */}
          <h1
            className="font-heading font-bold uppercase relative z-10"
            style={{ lineHeight: 0.88, letterSpacing: '-0.02em' }}
          >
            <span className="block text-black" style={{ fontSize: 'clamp(64px, 12vw, 190px)' }}>HOME OF</span>
            <span className="block text-black" style={{ fontSize: 'clamp(64px, 12vw, 190px)' }}>THE LIVING</span>
            <span className="block text-gold"  style={{ fontSize: 'clamp(64px, 12vw, 190px)' }}>CHURCHES.</span>
          </h1>

          {/* Photo 1 — overlaps text (z-20) */}
          <div ref={photo1Ref} className="absolute z-20 hidden lg:block" style={{ top: '28%', left: '2%', width: '24%' }}>
            <PhotoSlot src="/images/hero/hero-worship.jpg" style={{ aspectRatio: '4/5' }} />
          </div>

          {/* Photo 2 — overlaps text (z-20) */}
          <div ref={photo2Ref} className="absolute z-20 hidden lg:block" style={{ bottom: '15%', left: '36%', width: '20%' }}>
            <PhotoSlot src="/images/hero/hero-community.jpg" style={{ aspectRatio: '1/1' }} />
          </div>
        </div>

        {/* Right column: latest sermon — wider */}
        <div className="lg:w-80 xl:w-96 flex flex-col justify-center px-10 lg:px-8 pb-10 lg:pb-16 pt-0 lg:pt-24 gap-4">
          <p className="text-gold text-[10px] tracking-[0.55em] uppercase font-bold">
            Latest Sermon
          </p>
          <a href="#sermons" className="text-black/50 hover:text-gold text-xs tracking-[0.15em] uppercase transition-colors flex items-center gap-2 group">
            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[8px] flex-shrink-0">▶</span>
            <span>
              <span className="text-gold/70 group-hover:text-gold">( </span>
              WATCH NOW ↗
              <span className="text-gold/70 group-hover:text-gold"> )</span>
            </span>
          </a>
          {/* Video — full width of column */}
          <div style={{ aspectRatio: '16/9', position: 'relative' }} className="w-full">
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
