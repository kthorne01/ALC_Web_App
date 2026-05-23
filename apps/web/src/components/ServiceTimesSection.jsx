import React from 'react';
import { Clock, MapPin } from 'lucide-react';

const services = [
  {
    day: 'Sunday',
    time: '11:00 AM',
    name: 'Morning Worship',
    description: 'Our main weekly gathering — worship, Word, and community.',
  },
  {
    day: 'Wednesday',
    time: '7:30 PM',
    name: 'Bible Study & Prayer',
    description: 'Midweek teaching and corporate prayer to keep you grounded.',
  },
];

const ServiceTimesSection = () => {
  return (
    <section className="bg-zinc-950 py-24" id="visit">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.5em] uppercase mb-3 font-medium">
            Join Us
          </p>
          <h2 className="font-heading font-bold text-white uppercase text-4xl md:text-5xl tracking-wider">
            Service Times
          </h2>
          <div className="flex justify-center mt-4">
            <span className="block w-14 h-0.5 bg-gold" />
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto">
          {services.map((service) => (
            <div
              key={service.day}
              className="border border-white/8 bg-black/40 p-8 hover:border-gold/40 transition-colors duration-300 group"
            >
              <div className="flex items-center gap-2 mb-5">
                <Clock size={14} className="text-gold" strokeWidth={1.5} />
                <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
                  {service.day}
                </span>
              </div>
              <div className="font-heading font-bold text-white text-4xl tracking-wider mb-1">
                {service.time}
              </div>
              <div className="font-heading text-white/80 text-lg uppercase tracking-wider mb-4">
                {service.name}
              </div>
              <p className="text-white/45 text-sm leading-relaxed font-sans">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Location Block */}
        <div className="border-t border-white/8 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 border border-gold/40 flex items-center justify-center flex-shrink-0 mt-1">
              <MapPin size={18} className="text-gold" strokeWidth={1.5} />
            </div>
            <div>
              <div className="font-heading font-bold text-white uppercase tracking-wider text-lg mb-1">
                Our Location
              </div>
              <p className="text-white/55 text-sm font-sans leading-relaxed">
                Rock Hill, South Carolina
                <br />
                <span className="text-white/35 text-xs">Address coming soon — contact us for directions</span>
              </p>
            </div>
          </div>

          <a
            href="#visit"
            className="bg-gold text-black px-10 py-4 font-heading font-bold tracking-[0.2em] uppercase text-sm hover:bg-gold-light transition-colors duration-200 flex-shrink-0"
          >
            Plan Your Visit
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceTimesSection;
