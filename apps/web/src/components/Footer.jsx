import React from 'react';

const footerLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Sermons', href: '#sermons' },
  { label: 'Connect', href: '#connect' },
  { label: 'Plan a Visit', href: '#visit' },
  { label: 'Prayer Request', href: '#prayer' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-white/8">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo.png"
                alt="Abundant Life Church"
                className="h-10 w-10 object-contain brightness-0 invert opacity-80"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div>
                <div className="font-heading font-bold text-white uppercase tracking-[0.2em] text-sm">
                  Abundant Life
                </div>
                <div className="text-gold text-[10px] tracking-[0.35em] uppercase">Church</div>
              </div>
            </div>
            <p className="text-white/35 text-xs italic tracking-wide mb-4 font-sans">
              "Home of The Living Churches"
            </p>
            <p className="text-white/40 text-xs leading-relaxed font-sans">
              Rock Hill, South Carolina
              <br />
              abundantliferockhill.org
            </p>
          </div>

          {/* Links Column */}
          <div>
            <div className="font-heading font-bold text-white uppercase tracking-[0.25em] text-xs mb-6">
              Quick Links
            </div>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/40 hover:text-gold transition-colors text-xs tracking-wider uppercase font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact / CTA Column */}
          <div>
            <div className="font-heading font-bold text-white uppercase tracking-[0.25em] text-xs mb-6">
              Connect With Us
            </div>
            <p className="text-white/40 text-xs leading-relaxed font-sans mb-6">
              Have questions? Want to know more before you visit? We'd love to hear from you.
            </p>
            <a
              href="#connect"
              className="inline-block bg-gold text-black px-6 py-3 font-heading font-bold tracking-[0.2em] uppercase text-xs hover:bg-gold/80 transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs font-sans tracking-wide">
            © {year} Abundant Life Church. All rights reserved.
          </p>
          <p className="text-white/15 text-xs font-sans">
            Rock Hill, SC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
