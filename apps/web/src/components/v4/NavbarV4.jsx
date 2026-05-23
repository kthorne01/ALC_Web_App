import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Sermons', href: '#sermons' },
  { label: 'Connect', href: '#connect' },
  { label: 'Give', href: '#give' },
];

const VERSION_LINKS = [
  { label: 'V1', href: '/' },
  { label: 'V2', href: '/v2' },
  { label: 'V3', href: '/v3' },
  { label: 'V4', href: '/v4' },
];

const NavbarV4 = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 lg:px-12 h-20">
          <a href="/v4" className="flex items-center gap-3">
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

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/75 hover:text-gold transition-colors text-xs tracking-[0.2em] uppercase font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-1 border border-white/15 px-2 py-1">
              <span className="text-white/25 text-[9px] tracking-[0.3em] uppercase mr-1">Preview</span>
              {VERSION_LINKS.map((v) => (
                <a
                  key={v.label}
                  href={v.href}
                  className="text-white/40 hover:text-gold text-[10px] font-bold tracking-[0.1em] uppercase px-1.5 py-0.5 hover:bg-gold/10 transition-colors"
                >
                  {v.label}
                </a>
              ))}
            </div>
            <a
              href="#visit"
              className="bg-gold text-black px-7 py-2.5 text-xs font-bold tracking-[0.2em] uppercase hover:bg-gold/80 transition-colors"
            >
              Plan a Visit
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white hover:text-gold transition-colors p-2"
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[200] bg-black flex flex-col px-8 py-8">
          <div className="flex items-center justify-between h-12 mb-12">
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
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-heading font-bold text-white/75 hover:text-gold text-4xl uppercase tracking-wide transition-colors py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-auto pb-4 flex flex-col gap-4">
            <a
              href="#visit"
              onClick={() => setOpen(false)}
              className="bg-gold text-black px-8 py-4 font-heading font-bold tracking-[0.2em] uppercase text-sm hover:bg-gold/80 transition-colors text-center"
            >
              Plan Your Visit
            </a>
            <div className="flex items-center gap-2">
              <span className="text-white/25 text-[9px] tracking-[0.3em] uppercase">Preview:</span>
              {VERSION_LINKS.map((v) => (
                <a
                  key={v.label}
                  href={v.href}
                  className="text-white/40 hover:text-gold text-xs font-bold tracking-[0.1em] uppercase px-2 py-1 border border-white/10 hover:border-gold/30 transition-colors"
                >
                  {v.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarV4;
