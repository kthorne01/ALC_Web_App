import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import JourneySection from '@/components/JourneySection';
import AboutSection from '@/components/AboutSection';
import ServiceTimesSection from '@/components/ServiceTimesSection';
import PainPointsSection from '@/components/PainPointsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Helmet>
        <title>Abundant Life Church | Home of The Living Churches</title>
        <meta
          name="description"
          content="Abundant Life Church in Rock Hill, SC — a community of faith, hope, and purpose. Join us for worship and discover the abundant life God has for you."
        />
      </Helmet>

      <Navbar />
      <main>
        <HeroSection />
        <JourneySection />
        <AboutSection />
        <ServiceTimesSection />
        <PainPointsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
