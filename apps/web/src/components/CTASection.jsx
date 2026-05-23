import React from 'react';

const CTASection = () => {
  return (
    <section className="relative bg-black overflow-hidden py-28">
      {/* Background image — add photo at: public/images/church/worship.jpg */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/images/church/worship.jpg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gold top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <p className="text-gold text-xs tracking-[0.5em] uppercase mb-4 font-medium">
          Don't Wait
        </p>
        <h2 className="font-heading font-bold text-white uppercase text-4xl md:text-5xl lg:text-6xl tracking-wider leading-tight mb-6">
          Ready to Take the
          <br />
          <span className="text-gold">Next Step?</span>
        </h2>
        <span className="block w-14 h-0.5 bg-gold mx-auto mb-8" />
        <p className="text-white/55 text-sm leading-relaxed font-sans max-w-xl mx-auto mb-12">
          Join us this Sunday. Come as you are. Experience worship, community, and the Word
          that changes everything. Abundant life starts now.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#visit"
            className="bg-gold text-black px-12 py-4 font-heading font-bold tracking-[0.2em] uppercase text-sm hover:bg-gold-light transition-colors duration-200 min-w-[220px]"
          >
            Plan Your Visit
          </a>
          <a
            href="#connect"
            className="border border-white/30 text-white px-12 py-4 font-heading font-bold tracking-[0.2em] uppercase text-sm hover:border-gold hover:text-gold transition-all duration-200 min-w-[220px]"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Gold bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
};

export default CTASection;
