import React, { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

// SVG noise texture rendered as a data URI — gives the background visible grain
const noiseSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const noiseY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0c0a]">

      {/* Photo layer — moves fastest (full parallax when photo is added) */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: "url('/images/hero/hero-bg.jpg')",
          y: bgY,
          scale: 1.2,
        }}
      />

      {/* Texture layer — dark stone/paper grain that visibly moves */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{
          y: noiseY,
          scale: 1.2,
          backgroundImage: `url("${noiseSrc}")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '400px 400px',
          opacity: 0.18,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Warm radial glow — gives depth to the dark background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.07) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 20% 80%, rgba(255,255,255,0.03) 0%, transparent 60%)',
        }}
      />

      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/85" />

      {/* Gold glow at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Watermark lion logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/logo.png"
          alt=""
          className="w-[600px] max-w-[70vw] opacity-[0.04] brightness-0 invert select-none"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center container-custom px-6 py-32">
        <p className="text-gold text-xs font-medium tracking-[0.5em] uppercase mb-8">
          Home of The Living Churches
        </p>

        <h1 className="font-heading font-bold text-white uppercase leading-none mb-8">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[96px] tracking-wider">
            Abundant
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[96px] tracking-wider text-gold">
            Life
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[96px] tracking-wider">
            Church
          </span>
        </h1>

        {/* Gold divider with location */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px bg-gold/60 w-16" />
          <span className="text-white/50 text-xs tracking-[0.4em] uppercase font-medium">
            Rock Hill, SC
          </span>
          <div className="h-px bg-gold/60 w-16" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#visit"
            className="bg-gold text-black px-10 py-4 font-heading font-bold tracking-[0.2em] uppercase text-sm hover:bg-gold-light transition-all duration-200 min-w-[220px]"
          >
            Plan Your Visit
          </a>
          <a
            href="#sermons"
            className="border border-white/35 text-white px-10 py-4 font-heading font-bold tracking-[0.2em] uppercase text-sm hover:border-gold hover:text-gold transition-all duration-200 min-w-[220px]"
          >
            Watch Online
          </a>
        </div>
      </div>

      {/* Scripture verse */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-full text-center px-6 pointer-events-none">
        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="h-px bg-gold/30 w-12" />
          <span className="text-gold/50 text-[9px] tracking-[0.4em] uppercase">John 10:10</span>
          <div className="h-px bg-gold/30 w-12" />
        </div>
        <p className="text-white/40 text-xs sm:text-sm italic font-sans tracking-wide">
          "I came that they may have life, and have it more abundantly."
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-gold/60 transition-colors cursor-pointer">
        <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
