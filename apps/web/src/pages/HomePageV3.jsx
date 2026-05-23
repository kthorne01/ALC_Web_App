import React from 'react';
import NavbarV3 from '@/components/v3/NavbarV3';
import HeroV3 from '@/components/v3/HeroV3';
import StatementV3 from '@/components/v3/StatementV3';
import SermonsV3 from '@/components/v3/SermonsV3';
import ConnectV3 from '@/components/v3/ConnectV3';
import TestimonialsSection from '@/components/TestimonialsSection';
import FooterV2 from '@/components/v2/FooterV2';

const HomePageV3 = () => (
  <div className="flex flex-col min-h-screen">
    <NavbarV3 />
    <main>
      <HeroV3 />
      <StatementV3 />
      <TestimonialsSection />
      <ConnectV3 />
      <SermonsV3 />
    </main>
    <FooterV2 />
  </div>
);

export default HomePageV3;
