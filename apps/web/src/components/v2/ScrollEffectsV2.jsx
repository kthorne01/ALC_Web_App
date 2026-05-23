import React from 'react';

const ScrollEffectsV2 = () => (
  <>
    {/* Top fade — cream overlay so content fades into the paper background at the top */}
    <div
      className="fixed top-0 left-0 right-0 z-40 pointer-events-none"
      style={{
        height: '100px',
        background: 'linear-gradient(to bottom, rgba(240,235,224,0.98) 0%, rgba(240,235,224,0.5) 60%, rgba(240,235,224,0) 100%)',
      }}
    />

    {/* Right gold accent line */}
    <div
      className="fixed top-0 bottom-0 right-5 z-30 pointer-events-none"
      style={{
        width: '1px',
        background: 'linear-gradient(to bottom, transparent 0%, rgba(196,152,58,0.3) 15%, rgba(196,152,58,0.3) 85%, transparent 100%)',
      }}
    />
  </>
);

export default ScrollEffectsV2;
