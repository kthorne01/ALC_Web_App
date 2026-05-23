import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-black py-24" id="about">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[500px]">

          {/* Image Column — add photo at: public/images/church/congregation.jpg */}
          <div className="relative overflow-hidden bg-zinc-900 min-h-[360px] lg:min-h-0">
            <img
              src="/images/church/congregation.jpg"
              alt="Abundant Life Church congregation"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />

            {/* Gold accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />
          </div>

          {/* Text Column */}
          <div className="bg-zinc-950 p-10 lg:p-16 flex flex-col justify-center">
            <p className="text-gold text-xs tracking-[0.5em] uppercase mb-4 font-medium">
              Who We Are
            </p>
            <h2 className="font-heading font-bold text-white uppercase text-3xl md:text-4xl tracking-wider leading-tight mb-2">
              More Than a Church —
            </h2>
            <h2 className="font-heading font-bold text-gold uppercase text-3xl md:text-4xl tracking-wider leading-tight mb-8">
              A Family
            </h2>
            <span className="block w-12 h-0.5 bg-gold mb-8" />

            <p className="text-white/65 text-sm leading-loose mb-6 font-sans">
              Abundant Life Church is a Spirit-filled community rooted in the Word of God and
              committed to seeing lives transformed. We believe the abundant life Jesus promised
              isn't just for the afterlife — it starts today.
            </p>
            <p className="text-white/65 text-sm leading-loose mb-10 font-sans">
              Whether you're searching for answers, rebuilding after hardship, or hungry to go
              deeper in your faith, you'll find a home here. Our church is built on authentic
              relationships, bold worship, and uncompromising truth.
            </p>

            <a
              href="#journey"
              className="inline-flex items-center gap-3 text-gold text-xs font-bold tracking-[0.25em] uppercase hover:gap-4 transition-all duration-200 self-start"
            >
              Learn More <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
