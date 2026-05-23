import React, { useState, useEffect } from 'react';

const SLIDES = [
  { src: '/images/hero/jamin.jpg',          fast: true  },
  { src: '/images/hero/alanatab.jpg',       fast: false },
  { src: '/images/hero/bishopmaleah.jpg',   fast: false },
  { src: '/images/hero/jraaron.jpg',        fast: false },
];

const SHOW_MS = 5500;   // how long each slide displays before the next starts fading in
const FADE_MS = 1400;   // crossfade duration

const HeroV4 = () => {
  const [current, setCurrent] = useState(0);
  const [tick, setTick] = useState(0); // bumped each advance so the active img remounts

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(c => (c + 1) % SLIDES.length);
      setTick(prev => prev + 1);
    }, SHOW_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Keyframes injected once — can't do @keyframes in Tailwind inline */}
      <style>{`
        @keyframes kb-fast {
          from { transform: scale(1.0); }
          to   { transform: scale(1.40); }
        }
        @keyframes kb-slow {
          from { transform: scale(1.0); }
          to   { transform: scale(1.10); }
        }
      `}</style>

      <section className="relative min-h-screen overflow-hidden bg-zinc-900" id="hero">

        {/* Photo slides */}
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              opacity: i === current ? 1 : 0,
              transition: `opacity ${FADE_MS}ms ease-in-out`,
              zIndex: i === current ? 1 : 0,
            }}
          >
            {/* Keying the img on tick forces a remount (and animation restart) each time this slide activates */}
            <img
              key={i === current ? tick : -i}
              src={slide.src}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                animation: `${slide.fast ? `kb-fast 2800ms` : `kb-slow 7000ms`} ease-out forwards`,
              }}
            />
          </div>
        ))}

        {/* Gradient — heaviest at bottom so text stays readable */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.18) 45%, rgba(0,0,0,0.72) 100%)',
            zIndex: 2,
          }}
        />

        {/* Slide indicator dots */}
        <div className="absolute bottom-20 right-10 lg:right-16 flex gap-2.5" style={{ zIndex: 4 }}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setTick(t => t + 1); }}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: '6px', height: '6px', borderRadius: '50%',
                backgroundColor: i === current ? '#C4983A' : 'rgba(255,255,255,0.30)',
                transition: 'background-color 0.3s',
                border: 'none', cursor: 'pointer', padding: 0,
              }}
            />
          ))}
        </div>

        {/* Hero text content */}
        <div
          className="relative flex flex-col justify-end min-h-screen px-10 lg:px-16 pb-24 lg:pb-28 pt-32"
          style={{ zIndex: 3 }}
        >
          <p className="text-gold text-[11px] tracking-[0.5em] uppercase mb-6 font-medium">
            <span className="text-gold/50">[ </span>Rock Hill, SC<span className="text-gold/50"> ]</span>
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

        {/* Service times strip pinned to the very bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 border-t border-white/10 py-4 px-10 lg:px-16 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10"
          style={{ zIndex: 4 }}
        >
          {[{ day: 'SUNDAY', time: '11:00 AM' }, { day: 'WEDNESDAY', time: '7:30 PM' }].map((s) => (
            <div key={s.day} className="flex items-center gap-3">
              <span className="text-white/35 text-[10px] tracking-[0.35em] uppercase font-medium">{s.day}</span>
              <span className="text-gold text-[10px] tracking-[0.25em] font-bold">{s.time}</span>
            </div>
          ))}
          <span className="sm:ml-auto text-white/20 text-[10px] tracking-[0.3em] uppercase">Rock Hill, SC</span>
        </div>

      </section>
    </>
  );
};

export default HeroV4;
