import React from 'react';

/* Replace placeholder testimonials with real ones from church members.
   Add member photos at: public/images/team/ */
const testimonials = [
  {
    quote:
      "ALC didn't just change my Sunday — it changed my life. I came in broken and found a community that actually believed in who I could become.",
    name: 'Marcus T.',
    role: 'Member since 2023',
    initials: 'MT',
    photo: '/images/team/member-1.jpg',
  },
  {
    quote:
      "I'd been to church my whole life but never felt like I belonged anywhere. Here, I found brothers who hold me accountable and a pastor who tells the truth.",
    name: 'Devon W.',
    role: 'Member since 2022',
    initials: 'DW',
    photo: '/images/team/member-2.jpg',
  },
  {
    quote:
      "The Word hits different at ALC. It's not watered down. It's the kind of teaching that gets into your bones and actually changes how you live.",
    name: 'James R.',
    role: 'Member since 2021',
    initials: 'JR',
    photo: '/images/team/member-3.jpg',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-zinc-950 py-24" id="connect">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.5em] uppercase mb-3 font-medium">
            Real Stories
          </p>
          <h2 className="font-heading font-bold text-white uppercase text-4xl md:text-5xl tracking-wider">
            Changed Lives
          </h2>
          <div className="flex justify-center mt-4">
            <span className="block w-14 h-0.5 bg-gold" />
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-black border border-white/8 p-8 flex flex-col hover:border-gold/30 transition-colors duration-300"
            >
              {/* Gold quote mark */}
              <div className="font-heading font-bold text-6xl text-gold/30 leading-none mb-4 select-none">
                "
              </div>

              <p className="text-white/70 text-sm leading-loose font-sans flex-grow mb-8 italic">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/8">
                <div className="w-12 h-12 overflow-hidden flex-shrink-0 bg-zinc-800 flex items-center justify-center">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <span className="font-heading font-bold text-gold text-sm absolute">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <div className="font-heading font-bold text-white uppercase tracking-wider text-sm">
                    {t.name}
                  </div>
                  <div className="text-white/35 text-xs tracking-wider uppercase mt-0.5">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
