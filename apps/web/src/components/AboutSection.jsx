import React from 'react';

const AboutSection = () => (
  <section className="bg-black flex flex-col lg:flex-row min-h-[600px]" id="about">

    {/* Photo column — full bleed, fixed parallax background */}
    <div
      className="w-full lg:w-1/2 min-h-[400px] lg:min-h-0 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/church/congregation.jpg')",
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />
      {/* Gold accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />
    </div>

    {/* Text column */}
    <div className="w-full lg:w-1/2 bg-zinc-950 p-10 lg:p-16 flex flex-col justify-center">
      <p className="text-gold text-xs tracking-[0.5em] uppercase mb-4 font-medium">Who We Are</p>
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

  </section>
);

export default AboutSection;
