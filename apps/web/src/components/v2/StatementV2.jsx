import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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

const StatementV2 = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const photo1Y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const photo2Y = useTransform(scrollYProgress, [0, 1], [30, -100]);

  return (
    <section ref={ref} className="relative py-24 lg:py-36 px-10 lg:px-16 bg-transparent overflow-hidden">
      {/* Left edge word */}
      <span
        className="absolute left-1 top-1/2 -translate-y-1/2 font-heading font-bold text-white/8 text-[11px] tracking-[0.5em] uppercase select-none pointer-events-none"
        style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}
      >
        OF
      </span>

      <div className="relative">
        <p className="text-white/30 text-[11px] tracking-[0.4em] uppercase mb-6 font-medium">
          <span className="text-gold/50">[ </span>
          Home of The Living Churches
          <span className="text-gold/50"> ]</span>
        </p>

        <h2
          className="font-heading font-bold uppercase relative z-10"
          style={{ lineHeight: 0.9, letterSpacing: '-0.02em' }}
        >
          <span
            className="block text-white"
            style={{ fontSize: 'clamp(56px, 9vw, 140px)' }}
          >
            THE ABUNDANT LIFE.
          </span>
          <span
            className="block text-gold"
            style={{ fontSize: 'clamp(56px, 9vw, 140px)' }}
          >
            FOR ALL.
          </span>
        </h2>

        {/* Floating photo 1 — parallax */}
        <motion.div
          className="absolute z-20 hidden lg:block"
          style={{ top: '10%', left: '-4%', width: '20%', y: photo1Y }}
        >
          <PhotoSlot
            src="/images/church/worship.jpg"
            style={{ aspectRatio: '3/4' }}
          />
        </motion.div>

        {/* Floating photo 2 — parallax (faster) */}
        <motion.div
          className="absolute z-20 hidden lg:block"
          style={{ bottom: '-10%', right: '2%', width: '16%', y: photo2Y }}
        >
          <PhotoSlot
            src="/images/church/congregation.jpg"
            style={{ aspectRatio: '1/1' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default StatementV2;
