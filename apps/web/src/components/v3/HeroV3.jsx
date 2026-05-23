import React from 'react';

const HeroV3 = () => (
  <section className="relative min-h-screen flex flex-col" id="hero">

    {/* Video / image background */}
    <div className="absolute inset-0 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero/hero-bg.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        {/* Drop a hero.mp4 file in apps/web/public/videos/ to activate video background */}
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      {/* Fallback color if no image/video loads */}
      <div className="absolute inset-0 bg-zinc-900" style={{ zIndex: -1 }} />
      {/* Gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/85" />
    </div>

    {/* Hero content — anchored to lower portion */}
    <div className="relative flex-1 flex flex-col justify-end px-10 lg:px-16 pb-16 lg:pb-24 pt-32">
      <p className="text-gold text-[11px] tracking-[0.5em] uppercase mb-6 font-medium">
        <span className="text-gold/50">[ </span>
        Rock Hill, SC
        <span className="text-gold/50"> ]</span>
      </p>

      <h1
        className="font-heading font-bold uppercase text-white mb-10"
        style={{ lineHeight: 0.88, letterSpacing: '-0.02em' }}
      >
        <span className="block" style={{ fontSize: 'clamp(60px, 10vw, 160px)' }}>HOME OF</span>
        <span className="block" style={{ fontSize: 'clamp(60px, 10vw, 160px)' }}>THE LIVING</span>
        <span className="block text-gold" style={{ fontSize: 'clamp(60px, 10vw, 160px)' }}>CHURCHES.</span>
      </h1>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#visit"
          className="inline-block bg-gold text-black px-8 py-4 font-heading font-bold tracking-[0.25em] uppercase text-xs hover:bg-gold/80 transition-colors"
        >
          Plan Your Visit
        </a>
        <a
          href="#sermons"
          className="inline-block border border-white/40 text-white px-8 py-4 font-heading font-bold tracking-[0.25em] uppercase text-xs hover:border-gold hover:text-gold transition-colors"
        >
          Watch Online ↗
        </a>
      </div>
    </div>

    {/* Service times bar at the very bottom */}
    <div className="relative border-t border-white/10 py-4 px-10 lg:px-16 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10">
      {[
        { day: 'SUNDAY', time: '11:00 AM' },
        { day: 'WEDNESDAY', time: '7:30 PM' },
      ].map((s) => (
        <div key={s.day} className="flex items-center gap-3">
          <span className="text-white/35 text-[10px] tracking-[0.35em] uppercase font-medium">{s.day}</span>
          <span className="text-gold text-[10px] tracking-[0.25em] font-bold">{s.time}</span>
        </div>
      ))}
      <span className="sm:ml-auto text-white/20 text-[10px] tracking-[0.3em] uppercase">Rock Hill, SC</span>
    </div>
  </section>
);

export default HeroV3;
