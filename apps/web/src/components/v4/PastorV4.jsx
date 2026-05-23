import React from 'react';

const PastorV4 = () => (
  <section className="bg-zinc-50 py-24 lg:py-36 px-10 lg:px-16" id="about">
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

      {/* Photo */}
      <div className="w-full lg:w-[42%] flex-shrink-0">
        <div className="overflow-hidden bg-zinc-200" style={{ aspectRatio: '3/4' }}>
          <img
            src="/images/team/pastor.jpg"
            alt="Pastor"
            className="w-full h-full object-cover object-top"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.style.background = '#d4d4d8';
            }}
          />
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center lg:pt-8">
        <p className="text-gold text-[10px] tracking-[0.5em] uppercase mb-6 font-medium">
          <span className="text-gold/50">[ </span>Meet Our Pastor<span className="text-gold/50"> ]</span>
        </p>

        <h2
          className="font-heading font-bold uppercase text-black mb-2"
          style={{ fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: 0.9, letterSpacing: '-0.02em' }}
        >
          PASTOR
        </h2>
        <h2
          className="font-heading font-bold uppercase text-gold mb-10"
          style={{ fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: 0.9, letterSpacing: '-0.02em' }}
        >
          [LAST NAME]
        </h2>

        <div className="border-l-2 border-gold/30 pl-6 mb-10">
          <p className="text-black/50 text-sm tracking-[0.05em] leading-relaxed uppercase">
            Add a short bio or vision statement here.
          </p>
        </div>

        <a
          href="#connect"
          className="inline-block font-heading font-bold text-xs tracking-[0.3em] uppercase text-black/40 hover:text-gold transition-colors group self-start"
        >
          <span className="text-gold/60 group-hover:text-gold">( </span>
          Get Connected ↗
          <span className="text-gold/60 group-hover:text-gold"> )</span>
        </a>
      </div>
    </div>
  </section>
);

export default PastorV4;
