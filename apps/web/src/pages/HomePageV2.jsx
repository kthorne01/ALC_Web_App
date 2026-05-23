import React from 'react';
import NavbarV2 from '@/components/v2/NavbarV2';
import ScrollEffectsV2 from '@/components/v2/ScrollEffectsV2';
import HeroV2 from '@/components/v2/HeroV2';
import StatementV2 from '@/components/v2/StatementV2';
import MissionV2 from '@/components/v2/MissionV2';
import ConnectV2 from '@/components/v2/ConnectV2';
import FooterV2 from '@/components/v2/FooterV2';

// SVG noise for paper texture
const noiseSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E";

const HomePageV2 = () => (
  <div className="flex flex-col min-h-screen relative">

    {/* Fixed paper background — stays put while content scrolls over it. This IS the parallax. */}
    <div
      className="fixed inset-0 -z-10"
      style={{
        backgroundColor: '#f0ebe0',
        backgroundImage: `url("${noiseSrc}")`,
        backgroundSize: '400px 400px',
        backgroundRepeat: 'repeat',
      }}
    />

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
