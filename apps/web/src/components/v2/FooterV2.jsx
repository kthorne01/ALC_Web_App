import React from 'react';

const FooterV2 = () => {
  const year = new Date().getFullYear();

  const links = {
    Visit: ['Plan Your Visit', 'Service Times', 'What to Expect', 'Location & Parking'],
    Grow: ['Watch & Grow', 'Small Groups', 'Serve', 'Give'],
    Connect: ['About ALC', 'Prayer Request', 'Contact Us', 'Leadership'],
  };

  return (
    <footer className="relative bg-transparent border-t border-white/8 overflow-hidden">
      {/* Giant decorative "ALC" watermark */}
      <div
        className="absolute bottom-0 right-0 font-heading font-bold text-white/[0.03] select-none pointer-events-none leading-none"
        style={{ fontSize: 'clamp(120px, 22vw, 340px)', letterSpacing: '-0.05em', lineHeight: 0.85 }}
      >
        ALC
      </div>

      <div className="relative px-10 lg:px-16 pt-16 lg:pt-24 pb-8">
        {/* Top row: logo + links */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="/v2" className="flex items-center gap-3 mb-5">
              <img
                src="/logo.png"
                alt="ALC"
                className="h-7 w-7 object-contain brightness-0 invert"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span className="font-heading font-semibold text-white uppercase tracking-[0.2em] text-sm">
                Abundant Life <span className="text-gold">Church</span>
              </span>
            </a>
            <p className="text-white/30 text-xs tracking-[0.15em] uppercase leading-relaxed mb-5">
              Home of The Living Churches.<br />Rock Hill, SC.
            </p>
            <a
              href="#visit"
              className="inline-block font-heading font-bold text-xs tracking-[0.3em] uppercase text-white/50 hover:text-gold transition-colors group"
            >
              <span className="text-gold/40 group-hover:text-gold transition-colors">( </span>
              Plan Your Visit
              <span className="text-gold/40 group-hover:text-gold transition-colors"> )</span>
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <p className="text-white/20 text-[10px] tracking-[0.4em] uppercase mb-4 font-medium">
                {heading}
              </p>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/40 hover:text-gold text-xs tracking-[0.15em] uppercase transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-white/20 text-[10px] tracking-[0.25em] uppercase">
            © {year} Abundant Life Church — Rock Hill, SC
          </p>
          <p className="text-white/15 text-[10px] tracking-[0.25em] uppercase">
            abundantliferockhill.org
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterV2;
