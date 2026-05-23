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

const MissionV2 = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const photo1Y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const photo2Y = useTransform(scrollYProgress, [0, 1], [20, -120]);

  const pillars = [
    { num: '01', label: 'ENCOUNTER GOD' },
    { num: '02', label: 'GROW IN FAITH' },
    { num: '03', label: 'SERVE YOUR CITY' },
    { num: '04', label: 'REACH THE WORLD' },
  ];

  return (
    <section ref={ref} className="relative py-24 lg:py-36 px-10 lg:px-16 bg-transparent overflow-hidden">
      {/* Left edge word */}
      <span
        className="absolute left-1 top-1/2 -translate-y-1/2 font-heading font-bold text-white/8 text-[11px] tracking-[0.5em] uppercase select-none pointer-events-none"
        style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}
      >
        MISSION
      </span>

      <div className="relative max-w-5xl">
        <p className="text-white/30 text-[11px] tracking-[0.4em] uppercase mb-6 font-medium">
          <span className="text-gold/50">[ </span>
          Why We Exist
          <span className="text-gold/50"> ]</span>
        </p>

        <h2
          className="font-heading font-bold uppercase relative z-10 mb-12"
          style={{ lineHeight: 0.9, letterSpacing: '-0.02em' }}
        >
          <span
            className="block text-white/40"
            style={{ fontSize: 'clamp(28px, 4vw, 56px)' }}
          >
            ALC EXISTS TO
          </span>
          <span
            className="block text-white"
            style={{ fontSize: 'clamp(48px, 7.5vw, 120px)' }}
          >
            HELP PEOPLE
          </span>
          <span
            className="block text-gold"
            style={{ fontSize: 'clamp(48px, 7.5vw, 120px)' }}
          >
            LIVE FULLY.
          </span>
        </h2>

        <div className="border-t border-white/10">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="flex items-center gap-6 py-4 border-b border-white/8 group"
            >
              <span className="font-heading text-white/20 text-xs tracking-[0.3em] w-8 flex-shrink-0">
                {p.num}
              </span>
              <span
                className="font-heading font-bold text-white/70 group-hover:text-gold transition-colors duration-200 tracking-[0.15em] uppercase"
                style={{ fontSize: 'clamp(18px, 2.5vw, 32px)' }}
              >
                {p.label}
              </span>
              <span className="ml-auto text-white/20 group-hover:text-gold/50 transition-colors text-xs">→</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating photo 1 — parallax */}
      <motion.div
        className="absolute z-20 hidden lg:block"
        style={{ top: '8%', right: '2%', width: '22%', y: photo1Y }}
      >
        <PhotoSlot
          src="/images/church/mission.jpg"
          style={{ aspectRatio: '3/4' }}
        />
      </motion.div>

      {/* Floating photo 2 — parallax (faster) */}
      <motion.div
        className="absolute z-20 hidden lg:block"
        style={{ bottom: '6%', right: '26%', width: '14%', y: photo2Y }}
      >
        <PhotoSlot
          src="/images/church/community.jpg"
          style={{ aspectRatio: '1/1' }}
        />
      </motion.div>
    </section>
  );
};

export default MissionV2;
