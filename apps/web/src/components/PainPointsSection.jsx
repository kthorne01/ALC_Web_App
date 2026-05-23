import React from 'react';

/* Pain points are defined by church leadership — update these 3 to match
   the final pain points decided by Bishop Ron, Elder Jamin, and James. */
const painPoints = [
  {
    number: '01',
    question: 'Feeling Lost or Without Purpose?',
    body: "Life can leave you questioning who you are and where you're headed. We've been there. You were created for more — and there's a community ready to walk that journey with you.",
  },
  {
    number: '02',
    question: "Facing Storms You Can't Carry Alone?",
    body: "Addiction, broken relationships, financial pressure, grief — real life is hard. You don't have to white-knuckle through it. At ALC, no one fights alone.",
  },
  {
    number: '03',
    question: 'Hungry for Something Real?',
    body: "Religion without power is just routine. If you're tired of going through the motions and craving an authentic encounter with God, this is the place for you.",
  },
];

const PainPointsSection = () => {
  return (
    <section className="bg-black py-24">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-gold text-xs tracking-[0.5em] uppercase mb-3 font-medium">
            We See You
          </p>
          <h2 className="font-heading font-bold text-white uppercase text-4xl md:text-5xl tracking-wider leading-tight">
            Whatever You're
            <br />
            <span className="text-gold">Going Through</span>
          </h2>
          <span className="block w-14 h-0.5 bg-gold mt-6 mb-6" />
          <p className="text-white/55 text-sm leading-relaxed font-sans">
            Our doors are open to anyone — no matter where you've been or what you've done. Abundant life isn't earned. It's given.
          </p>
        </div>

        {/* Pain Point Items */}
        <div className="space-y-0 border-t border-white/8">
          {painPoints.map((point) => (
            <div
              key={point.number}
              className="border-b border-white/8 py-10 grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-6 md:gap-12 group hover:bg-white/[0.02] transition-colors px-2"
            >
              <div className="font-heading font-bold text-5xl text-white/10 group-hover:text-gold/20 transition-colors leading-none">
                {point.number}
              </div>
              <h3 className="font-heading font-bold text-white uppercase text-xl md:text-2xl tracking-wide leading-tight self-center">
                {point.question}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed font-sans self-center">
                {point.body}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center md:text-left">
          <a
            href="#visit"
            className="inline-flex items-center gap-3 text-gold text-xs font-bold tracking-[0.3em] uppercase hover:gap-4 transition-all duration-200"
          >
            Take Your First Step <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
