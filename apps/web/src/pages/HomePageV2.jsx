import React from 'react';
import NavbarV2 from '@/components/v2/NavbarV2';
import ScrollEffectsV2 from '@/components/v2/ScrollEffectsV2';
import HeroV2 from '@/components/v2/HeroV2';
import StatementV2 from '@/components/v2/StatementV2';
import MissionV2 from '@/components/v2/MissionV2';
import ConnectV2 from '@/components/v2/ConnectV2';
import FooterV2 from '@/components/v2/FooterV2';

const HomePageV2 = () => (
  <div className="flex flex-col min-h-screen bg-[#080808]">
    <ScrollEffectsV2 />
    <NavbarV2 />

    <main>
      <HeroV2 />
      <StatementV2 />
      <MissionV2 />
      <ConnectV2 />
    </main>

    <FooterV2 />
  </div>
);

export default HomePageV2;
