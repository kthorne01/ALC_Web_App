import React from 'react';

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

const ConnectV2 = () => (
  <section className="relative bg-transparent overflow-hidden" id="connect">
    {/* Thin divider */}
    <div className="border-t border-white/8 mx-10 lg:mx-16" />

    <div className="flex flex-col lg:flex-row">

      {/* Left — In Person */}
      <div className="flex-1 px-10 lg:px-16 py-20 lg:py-28 relative border-b lg:border-b-0 lg:border-r border-white/8">
        {/* Left edge word */}
        <span
          className="absolute left-1 top-1/2 font-heading font-bold text-white/8 text-[11px] tracking-[0.5em] uppercase select-none pointer-events-none"
          style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}
        >
          LOCAL
        </span>

        <p className="text-white/30 text-[11px] tracking-[0.4em] uppercase mb-5 font-medium">
          <span className="text-gold/50">[ </span>
          Join Us
          <span className="text-gold/50"> ]</span>
        </p>

        <h2
          className="font-heading font-bold uppercase mb-6"
          style={{ lineHeight: 0.9, letterSpacing: '-0.02em', fontSize: 'clamp(42px, 6vw, 88px)' }}
        >
          <span className="block text-white">ALC</span>
          <span className="block text-gold">IN-PERSON</span>
        </h2>

        <p className="text-white/40 text-sm tracking-[0.1em] uppercase mb-8 max-w-xs leading-relaxed">
          Real community, real worship, real transformation — every week in Rock Hill, SC.
        </p>

        <div className="space-y-3 mb-10">
          {[
            { day: 'SUNDAY', time: '11:00 AM' },
            { day: 'WEDNESDAY', time: '7:00 PM' },
          ].map((s) => (
            <div key={s.day} className="flex items-center gap-4">
              <span className="font-heading font-bold text-white/60 text-xs tracking-[0.3em] w-28">{s.day}</span>
              <span className="text-gold text-xs tracking-[0.2em] font-medium">{s.time}</span>
            </div>
          ))}
        </div>

        <a
          href="#visit"
          className="inline-block font-heading font-bold text-xs tracking-[0.3em] uppercase text-white/60 hover:text-gold transition-colors group"
        >
          <span className="text-gold/50 group-hover:text-gold transition-colors">( </span>
          Plan Your Visit ↗
          <span className="text-gold/50 group-hover:text-gold transition-colors"> )</span>
        </a>

        {/* Photo */}
        <PhotoSlot
          src="/images/church/in-person.jpg"
          className="mt-10 w-full hidden sm:block"
          style={{ aspectRatio: '16/9' }}
        />
      </div>

      {/* Right — Online */}
      <div className="flex-1 px-10 lg:px-16 py-20 lg:py-28 relative">
        <p className="text-white/30 text-[11px] tracking-[0.4em] uppercase mb-5 font-medium">
          <span className="text-gold/50">[ </span>
          Wherever You Are
          <span className="text-gold/50"> ]</span>
        </p>

        <h2
          className="font-heading font-bold uppercase mb-6"
          style={{ lineHeight: 0.9, letterSpacing: '-0.02em', fontSize: 'clamp(42px, 6vw, 88px)' }}
        >
          <span className="block text-white">ALC</span>
          <span className="block text-gold">ONLINE</span>
        </h2>

        <p className="text-white/40 text-sm tracking-[0.1em] uppercase mb-8 max-w-xs leading-relaxed">
          Sermons, messages, and community — available anywhere, any time.
        </p>

        <div className="space-y-3 mb-10">
          {[
            'Watch Live',
            'Sermon Archive',
            'Daily Devotionals',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 text-white/40 hover:text-gold transition-colors cursor-pointer group">
              <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[7px] flex-shrink-0">▶</span>
              <span className="text-xs tracking-[0.2em] uppercase font-medium">{item}</span>
            </div>
          ))}
        </div>

        <a
          href="#sermons"
          className="inline-block font-heading font-bold text-xs tracking-[0.3em] uppercase text-white/60 hover:text-gold transition-colors group"
        >
          <span className="text-gold/50 group-hover:text-gold transition-colors">( </span>
          Watch Now ↗
          <span className="text-gold/50 group-hover:text-gold transition-colors"> )</span>
        </a>

        {/* Photo */}
        <PhotoSlot
          src="/images/church/online.jpg"
          className="mt-10 w-full hidden sm:block"
          style={{ aspectRatio: '16/9' }}
        />
      </div>
    </div>
  </section>
);

export default ConnectV2;
