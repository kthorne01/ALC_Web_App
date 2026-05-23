import React from 'react';

/* Fixed page-level visual effects:
   - Blur overlay at the top so content fades as it scrolls under the nav
   - Thin gold vertical line on the right edge (decorative, like 2819's red line) */
const ScrollEffectsV2 = () => (
  <>
    {/* Top scroll blur — content blurs as it approaches the nav */}
    <div
      className="fixed top-0 left-0 right-0 z-40 pointer-events-none"
      style={{
        height: '90px',
        background: 'linear-gradient(to bottom, rgba(8,8,8,0.98) 0%, rgba(8,8,8,0) 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 35%, transparent 100%)',
        maskImage: 'linear-gradient(to bottom, black 35%, transparent 100%)',
      }}
    />

    {/* Right gold accent line */}
    <div
      className="fixed top-0 bottom-0 right-5 z-30 pointer-events-none"
      style={{
        width: '1px',
        background:
          'linear-gradient(to bottom, transparent 0%, rgba(201,168,76,0.2) 15%, rgba(201,168,76,0.2) 85%, transparent 100%)',
      }}
    />
  </>
);

export default ScrollEffectsV2;
