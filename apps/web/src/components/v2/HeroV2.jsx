import React from 'react';

/* Reusable dark photo slot — shows a dark gradient until a real photo is added.
   Photos load from public/images/ — see public/images/README.txt for instructions. */
const PhotoSlot = ({ src, className = '', style = {} }) => (
  <div
    className={`overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 ${className}`}
    style={style}
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
        className="absolute left-1 top-1/2 -translate-y-1/2 font-heading font-bold text-white/8 text-[11px] tracking-[0.5em] uppercase select-none pointer-events-none z-0"
        style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}
      >
        HOME
      </span>

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:flex-row pt-20 relative">

        {/* Left column: massive headline text */}
        <div className="flex-1 relative flex flex-col justify-center px-10 lg:px-16 py-12 lg:py-20 overflow-visible">

          {/* Headline */}
          <h1
            className="font-heading font-bold uppercase relative z-10"
            style={{ lineHeight: 0.88, letterSpacing: '-0.02em' }}
          >
            <span
              className="block text-white"
              style={{ fontSize: 'clamp(72px, 14vw, 210px)' }}
            >
              ABUNDANT
            </span>
            <span
              className="block text-gold"
              style={{ fontSize: 'clamp(72px, 14vw, 210px)' }}
            >
              LIFE
            </span>
            <span
              className="block text-white"
              style={{ fontSize: 'clamp(72px, 14vw, 210px)' }}
            >
              CHURCH
            </span>
          </h1>

          {/* Floating photo 1 — overlaps "LIFE" from left */}
          <PhotoSlot
            src="/images/hero/hero-worship.jpg"
            className="absolute z-20 hidden lg:block"
            style={{ top: '32%', left: '4%', width: '22%', aspectRatio: '4/5' }}
          />

          {/* Floating photo 2 — overlaps "CHURCH" from right */}
          <PhotoSlot
            src="/images/hero/hero-community.jpg"
            className="absolute z-20 hidden lg:block"
            style={{ bottom: '18%', left: '38%', width: '18%', aspectRatio: '1/1' }}
          />
        </div>

        {/* Right column: latest sermon box */}
        <div className="lg:w-64 xl:w-72 flex flex-col justify-end px-10 lg:px-8 pb-10 lg:pb-16 pt-0 lg:pt-24 gap-4">
          <p className="text-gold text-[10px] tracking-[0.55em] uppercase font-medium">
            Latest Sermon
          </p>
          <a
            href="#sermons"
            className="text-white/60 hover:text-gold text-xs tracking-[0.15em] uppercase transition-colors flex items-center gap-2 group"
          >
            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[8px] flex-shrink-0 group-hover:border-gold group-hover:text-gold transition-colors">
              ▶
            </span>
            <span>
              <span className="text-gold/60 group-hover:text-gold transition-colors">( </span>
              WATCH NOW ↗
              <span className="text-gold/60 group-hover:text-gold transition-colors"> )</span>
            </span>
          </a>
          {/* Sermon thumbnail */}
          <PhotoSlot
            src="/images/hero/sermon-thumb.jpg"
            className="w-full"
            style={{ aspectRatio: '16/9' }}
          />
        </div>
      </div>

      {/* Bottom bracket CTAs */}
      <div className="border-t border-white/8 py-5 px-10 lg:px-16 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-10">
        {ctaLinks.map((cta) => (
          <a
            key={cta.label}
            href={cta.href}
            className="text-white/60 hover:text-gold text-xs tracking-[0.2em] uppercase transition-colors duration-200 font-medium group"
          >
            <span className="text-gold/50 group-hover:text-gold transition-colors">( </span>
            {cta.label}
            <span className="text-gold/50 group-hover:text-gold transition-colors"> )</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default HeroV2;
