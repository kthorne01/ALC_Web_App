import React from 'react';
import { MapPin, Users, HandHeart } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MapPin,
    title: 'Plan a Visit',
    description:
      'New here? We want to make your first visit easy and welcoming. Find service times, location, and what to expect when you arrive.',
    cta: 'Get Directions',
    href: '#visit',
  },
  {
    number: '02',
    icon: Users,
    title: 'Get Connected',
    description:
      'Community is at the heart of everything we do. Find a group, join a ministry, and build relationships that go beyond Sunday morning.',
    cta: 'Find a Group',
    href: '#connect',
  },
  {
    number: '03',
    icon: HandHeart,
    title: 'Submit a Prayer Request',
    description:
      'We believe in the power of prayer. Share what\'s on your heart and let our team stand with you in faith.',
    cta: 'Submit a Request',
    href: '#prayer',
  },
];

const JourneySection = () => {
  return (
    <section className="bg-zinc-950 py-24" id="journey">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.5em] uppercase mb-3 font-medium">
            Start Here
          </p>
          <h2 className="font-heading font-bold text-white uppercase text-4xl md:text-5xl tracking-wider">
            Your Journey
          </h2>
          <div className="flex justify-center mt-4">
            <span className="block w-14 h-0.5 bg-gold" />
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-px bg-white/5">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-zinc-950 p-10 group hover:bg-zinc-900 transition-colors duration-300 flex flex-col"
              >
                {/* Number + Icon row */}
                <div className="flex items-start justify-between mb-6">
                  <span className="font-heading font-bold text-5xl text-white/10 group-hover:text-gold/20 transition-colors leading-none">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 border border-gold/40 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <Icon size={20} className="text-gold" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Text */}
                <h3 className="font-heading font-bold text-white uppercase text-2xl tracking-wider mb-4">
                  {step.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed font-sans mb-8 flex-grow">
                  {step.description}
                </p>

                {/* CTA */}
                <a
                  href={step.href}
                  className="text-gold text-xs font-bold tracking-[0.25em] uppercase flex items-center gap-2 group-hover:gap-3 transition-all duration-200"
                >
                  {step.cta}
                  <span className="text-gold">→</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
