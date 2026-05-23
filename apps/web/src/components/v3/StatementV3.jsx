import React from 'react';

const StatementV3 = () => (
  <section className="bg-white py-28 lg:py-40 px-10 lg:px-16 relative overflow-hidden">
    {/* Giant watermark word */}
    <div
      className="absolute inset-0 flex items-center justify-center font-heading font-bold text-black/[0.03] select-none pointer-events-none leading-none"
      style={{ fontSize: 'clamp(220px, 45vw, 700px)', letterSpacing: '-0.05em' }}
    >
      LIFE
    </div>

    <div className="relative max-w-5xl mx-auto text-center">
      <p className="text-gold/70 text-[10px] tracking-[0.6em] uppercase mb-12 font-medium">
        John 10 : 10
      </p>

      <h2 className="font-heading font-bold uppercase" style={{ lineHeight: 0.9, letterSpacing: '-0.02em' }}>
        <span className="block text-black" style={{ fontSize: 'clamp(46px, 7.5vw, 120px)' }}>I CAME THAT</span>
        <span className="block text-black" style={{ fontSize: 'clamp(46px, 7.5vw, 120px)' }}>THEY MAY HAVE</span>
        <span className="block text-gold"  style={{ fontSize: 'clamp(46px, 7.5vw, 120px)' }}>LIFE,</span>
        <span className="block text-black/40 mt-5" style={{ fontSize: 'clamp(20px, 3.2vw, 52px)' }}>
          AND HAVE IT MORE ABUNDANTLY.
        </span>
      </h2>
    </div>
  </section>
);

export default StatementV3;
