import React from 'react';

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

        {/* Left column: headline + photos below */}
        <div className="flex-1 flex flex-col px-10 lg:px-16 py-10 lg:py-14">

          <p className="text-black/35 text-[11px] tracking-[0.4em] uppercase mb-6 font-medium">
            <span className="text-gold">[ </span>
            Abundant Life Church — Rock Hill, SC
            <span className="text-gold"> ]</span>
          </p>

          {/* Headline — clean, no photos overlapping */}
          <h1
            className="font-heading font-bold uppercase"
            style={{ lineHeight: 0.88, letterSpacing: '-0.02em' }}
          >
            <span className="block text-black" style={{ fontSize: 'clamp(60px, 10vw, 160px)' }}>HOME OF</span>
            <span className="block text-black" style={{ fontSize: 'clamp(60px, 10vw, 160px)' }}>THE LIVING</span>
            <span className="block text-gold"  style={{ fontSize: 'clamp(60px, 10vw, 160px)' }}>CHURCHES.</span>
          </h1>

          {/* Photos below the text — side by side, not overlapping words */}
          <div className="hidden lg:flex gap-4 mt-10">
            <PhotoSlot
              src="/images/hero/hero-worship.jpg"
              style={{ width: '38%', aspectRatio: '4/5', flexShrink: 0 }}
            />
            <PhotoSlot
              src="/images/hero/hero-community.jpg"
              style={{ width: '28%', aspectRatio: '1/1', alignSelf: 'flex-end', flexShrink: 0 }}
            />
          </div>
        </div>

        {/* Right column: latest sermon + BIG video */}
        <div className="lg:w-[44%] xl:w-[46%] flex flex-col px-10 lg:px-10 pb-6 lg:pb-10 pt-0 lg:pt-24 gap-4">
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

          {/* Video — fills remaining height of right column */}
          <div className="flex-1 relative" style={{ minHeight: '320px' }}>
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
