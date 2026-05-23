import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Sermons', href: '#sermons' },
  { label: 'Connect', href: '#connect' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.5)]'
          : 'bg-gradient-to-b from-black/70 to-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Abundant Life Church"
            className="h-9 w-9 object-contain brightness-0 invert"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className="leading-tight">
            <div className="text-white font-heading font-semibold text-sm tracking-[0.2em] uppercase group-hover:text-gold transition-colors">
              Abundant Life
            </div>
            <div className="text-gold text-[10px] tracking-[0.35em] uppercase">Church</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/75 hover:text-gold transition-colors text-sm font-medium tracking-[0.15em] uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#visit"
            className="bg-gold text-black px-7 py-2.5 text-xs font-bold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-200"
          >
            Plan a Visit
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-gold transition-colors p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-black/97 backdrop-blur-md border-t border-white/10">
          <div className="container-custom py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/75 hover:text-gold transition-colors text-sm font-medium tracking-[0.15em] uppercase py-3 border-b border-white/5"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#visit"
              className="bg-gold text-black px-7 py-3 text-xs font-bold tracking-[0.2em] uppercase text-center mt-4 hover:bg-gold-light transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Plan a Visit
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
