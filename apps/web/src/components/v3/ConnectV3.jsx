import React from 'react';

const ITEMS = [
  {
    num: '01',
    label: 'SUNDAY SERVICE',
    time: '11:00 AM',
    desc: 'Worship, word, and real community every Sunday morning in Rock Hill, SC.',
  },
  {
    num: '02',
    label: 'WEDNESDAY NIGHT',
    time: '7:30 PM',
    desc: 'Mid-week prayer and Bible study — go deeper in the middle of your week.',
  },
  {
    num: '03',
    label: "NEW HERE?",
    time: null,
    desc: "First time visiting? We'd love to welcome you. Find out what to expect.",
    cta: { label: "Plan Your Visit ↗", href: '#visit' },
  },
];

const ConnectV3 = () => (
  <section className="bg-white py-24 lg:py-36 px-10 lg:px-16" id="connect">
    <div className="max-w-6xl mx-auto">

      <p className="text-gold text-[10px] tracking-[0.5em] uppercase mb-4 font-medium">
        <span className="text-gold/50">[ </span>Get Connected<span className="text-gold/50"> ]</span>
      </p>

      <h2
        className="font-heading font-bold uppercase text-black mb-16"
        style={{ fontSize: 'clamp(42px, 6vw, 88px)', lineHeight: 0.9, letterSpacing: '-0.02em' }}
      >
        <span className="block">JOIN US</span>
        <span className="text-gold">IN PERSON.</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 border-t border-black/10 pt-10">
        {ITEMS.map((item) => (
          <div key={item.num} className="flex flex-col">
            <span className="font-heading text-black/20 text-xs tracking-[0.3em] mb-5">{item.num}</span>
            <h3
              className="font-heading font-bold text-black uppercase tracking-[0.08em] mb-2"
              style={{ fontSize: 'clamp(18px, 2vw, 22px)' }}
            >
              {item.label}
            </h3>
            {item.time && (
              <span className="text-gold font-bold text-sm tracking-[0.2em] mb-4">{item.time}</span>
            )}
            <p className="text-black/40 text-xs tracking-[0.1em] leading-relaxed uppercase flex-1">
              {item.desc}
            </p>
            {item.cta && (
              <a
                href={item.cta.href}
                className="mt-5 inline-block text-black/40 hover:text-gold text-xs tracking-[0.2em] uppercase font-bold transition-colors"
              >
                {item.cta.label}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ConnectV3;
