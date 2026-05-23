import React from 'react';

const SermonsV3 = () => (
  <section className="bg-zinc-950 py-20 lg:py-28 px-10 lg:px-16" id="sermons">
    <div className="max-w-6xl mx-auto">

      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-gold text-[10px] tracking-[0.5em] uppercase mb-3 font-medium">
            <span className="text-gold/50">[ </span>Latest Message<span className="text-gold/50"> ]</span>
          </p>
          <h2
            className="font-heading font-bold uppercase text-white"
            style={{ fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: 0.9, letterSpacing: '-0.02em' }}
          >
            WATCH &amp;<br />GROW
          </h2>
        </div>
        <a
          href="#sermons"
          className="hidden sm:block text-white/25 hover:text-gold text-xs tracking-[0.25em] uppercase transition-colors font-medium"
        >
          View All ↗
        </a>
      </div>

      {/* 16:9 YouTube embed */}
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src="https://www.youtube.com/embed/YdjlUysRqN0"
          title="Latest Message"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          style={{ border: 'none' }}
        />
      </div>
    </div>
  </section>
);

export default SermonsV3;
