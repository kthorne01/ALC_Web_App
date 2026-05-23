import React from 'react';
import NavbarV4 from '@/components/v4/NavbarV4';
import HeroV4 from '@/components/v4/HeroV4';
import StatementV4 from '@/components/v4/StatementV4';
import SermonsV4 from '@/components/v4/SermonsV4';
import ConnectV4 from '@/components/v4/ConnectV4';
import FooterV2 from '@/components/v2/FooterV2';

const HomePageV4 = () => (
  <div className="flex flex-col min-h-screen">
    <NavbarV4 />
    <main>
      <HeroV4 />
      <StatementV4 />
      <SermonsV4 />
      <ConnectV4 />
    </main>
    <FooterV2 />
  </div>
);

export default HomePageV4;
