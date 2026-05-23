import React from 'react';

const PastorV4 = () => (
  <section className="bg-zinc-950 py-24 lg:py-36 px-10 lg:px-16" id="about">
    <div className="max-w-3xl mx-auto flex flex-col items-center text-center">

      <h2 className="font-heading font-bold uppercase text-white tracking-[0.08em] mb-12"
        style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}>
        Meet Our Pastor
      </h2>

      {/* Photo — centered, portrait */}
      <div className="w-full max-w-lg overflow-hidden bg-zinc-800 mb-10">
        <img
          src="/images/team/pastor.jpg"
          alt="Pastor"
          className="w-full object-cover object-top"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.minHeight = '480px';
          }}
        />
      </div>

      {/* Name */}
      <h3
        className="font-heading font-bold uppercase text-white mb-1"
        style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 0.9, letterSpacing: '-0.02em' }}
      >
        APOSTLE
      </h3>
      <h3
        className="font-heading font-bold uppercase text-gold mb-8"
        style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 0.9, letterSpacing: '-0.02em' }}
      >
        MCCOY
      </h3>

      {/* Bio */}
      <p className="text-white/50 text-sm leading-relaxed max-w-xl mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

      <a
        href="#connect"
        className="inline-block font-heading font-bold text-xs tracking-[0.3em] uppercase text-white/40 hover:text-gold transition-colors group"
      >
        <span className="text-gold/60 group-hover:text-gold">( </span>
        Get Connected ↗
        <span className="text-gold/60 group-hover:text-gold"> )</span>
      </a>

    </div>
  </section>
);

export default PastorV4;
