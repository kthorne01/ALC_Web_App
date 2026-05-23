import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Plan Your Visit', href: '#visit' },
  { label: 'Get Connected', href: '#connect' },
  { label: 'Watch & Grow', href: '#sermons' },
  { label: 'About ALC', href: '#about' },
  { label: 'Prayer Request', href: '#prayer' },
];

const NavbarV2 = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 h-20 pointer-events-none">
        {/* Logo — pointer-events-auto so it's clickable */}
        <a href="/v2" className="flex items-center gap-3 pointer-events-auto">
          <img
            src="/logo.png"
            alt="Abundant Life Church"
            className="h-8 w-8 object-contain brightness-0 invert"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <span className="font-heading font-semibold text-white uppercase tracking-[0.2em] text-sm">
            Abundant Life <span className="text-gold">Church</span>
          </span>
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="text-white hover:text-gold transition-colors p-2 pointer-events-auto"
          aria-label="Open menu"
        >
          <Menu size={22} strokeWidth={1.5} />
        </button>
      </nav>

      {/* Fullscreen overlay menu */}
      {open && (
        <div className="fixed inset-0 z-[200] bg-black flex flex-col px-10 lg:px-16 py-8">
          {/* Close button */}
          <div className="flex items-center justify-between h-20">
            <span className="font-heading font-semibold text-white uppercase tracking-[0.2em] text-sm">
              Abundant Life <span className="text-gold">Church</span>
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-white hover:text-gold transition-colors p-2"
              aria-label="Close menu"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2 mt-12">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-heading font-bold text-white/75 hover:text-gold text-4xl md:text-5xl uppercase tracking-wide transition-colors py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-auto pb-4">
            <a
              href="#visit"
              onClick={() => setOpen(false)}
              className="inline-block bg-gold text-black px-8 py-3 font-heading font-bold tracking-[0.2em] uppercase text-sm hover:bg-gold/80 transition-colors"
            >
              Plan Your Visit
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarV2;
