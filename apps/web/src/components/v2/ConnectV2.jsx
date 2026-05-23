import React from 'react';

const PhotoSlot = ({ src, style = {} }) => (
  <div className="overflow-hidden bg-zinc-300" style={{ mixBlendMode: 'multiply', ...style }}>
    <img src={src} alt="" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
  </div>
);

const ConnectV2 = () => (
  <section className="relative bg-transparent overflow-hidden" id="connect">
    <div className="border-t border-black/10 mx-10 lg:mx-16" />

    <div className="flex flex-col lg:flex-row">
      {/* Left — In Person */}
      <div className="flex-1 flex flex-col px-10 lg:px-16 py-20 lg:py-28 relative border-b lg:border-b-0 lg:border-r border-black/10">
        <p className="text-black/60 text-[11px] tracking-[0.4em] uppercase mb-5 font-medium">
          <span className="text-gold">[ </span>Join Us<span className="text-gold"> ]</span>
        </p>

        <h2 className="font-heading font-bold uppercase mb-6" style={{ lineHeight: 0.9, letterSpacing: '-0.02em', fontSize: 'clamp(42px, 6vw, 88px)' }}>
          <span className="block text-black">ALC</span>
          <span className="block text-gold">IN-PERSON</span>
        </h2>

        <p className="text-black/65 text-sm tracking-[0.1em] uppercase mb-8 max-w-xs leading-relaxed">
          Real community, real worship, real transformation — every week in Rock Hill, SC.
        </p>

        <div className="space-y-3 mb-10">
          {[{ day: 'SUNDAY', time: '11:00 AM' }, { day: 'WEDNESDAY', time: '7:30 PM' }].map((s) => (
            <div key={s.day} className="flex items-center gap-4">
              <span className="font-heading font-bold text-black/65 text-xs tracking-[0.3em] w-28">{s.day}</span>
              <span className="text-gold text-xs tracking-[0.2em] font-bold">{s.time}</span>
            </div>
          ))}
        </div>

        <a href="#visit" className="inline-block font-heading font-bold text-xs tracking-[0.3em] uppercase text-black/65 hover:text-gold transition-colors group">
          <span className="text-gold/60 group-hover:text-gold">( </span>Plan Your Visit ↗<span className="text-gold/60 group-hover:text-gold"> )</span>
        </a>

        <PhotoSlot src="/images/church/in-person.jpg" style={{ aspectRatio: '16/9', marginTop: 'auto', paddingTop: '2.5rem' }} />
      </div>

      {/* Right — Online */}
      <div className="flex-1 flex flex-col px-10 lg:px-16 py-20 lg:py-28 relative">
        <p className="text-black/60 text-[11px] tracking-[0.4em] uppercase mb-5 font-medium">
          <span className="text-gold">[ </span>Wherever You Are<span className="text-gold"> ]</span>
        </p>

        <h2 className="font-heading font-bold uppercase mb-6" style={{ lineHeight: 0.9, letterSpacing: '-0.02em', fontSize: 'clamp(42px, 6vw, 88px)' }}>
          <span className="block text-black">ALC</span>
          <span className="block text-gold">ONLINE</span>
        </h2>

        <p className="text-black/65 text-sm tracking-[0.1em] uppercase mb-8 max-w-xs leading-relaxed">
          Sermons, messages, and community — available anywhere, any time.
        </p>

        <div className="space-y-3 mb-10">
          {['Watch Live', 'Sermon Archive', 'Daily Devotionals'].map((item) => (
            <div key={item} className="flex items-center gap-3 text-black/65 hover:text-gold transition-colors cursor-pointer group">
              <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[7px] flex-shrink-0">▶</span>
              <span className="text-xs tracking-[0.2em] uppercase font-medium">{item}</span>
            </div>
          ))}
        </div>

        <a href="#sermons" className="inline-block font-heading font-bold text-xs tracking-[0.3em] uppercase text-black/65 hover:text-gold transition-colors group">
          <span className="text-gold/60 group-hover:text-gold">( </span>Watch Now ↗<span className="text-gold/60 group-hover:text-gold"> )</span>
        </a>

        <PhotoSlot src="/images/church/online.jpg" style={{ aspectRatio: '16/9', marginTop: '2.5rem' }} />
      </div>
    </div>
  </section>
);

export default ConnectV2;
