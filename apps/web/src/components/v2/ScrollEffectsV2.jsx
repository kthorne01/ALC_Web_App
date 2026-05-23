import React from 'react';

const ScrollEffectsV2 = () => (
  <>
    {/* Blur layer — backdrop-filter blurs content as it scrolls under the nav */}
    <div
      className="fixed top-0 left-0 right-0 pointer-events-none"
      style={{ zIndex: 39 }}
      style={{
        height: '120px',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 30%, transparent 100%)',
        maskImage: 'linear-gradient(to bottom, black 0%, black 30%, transparent 100%)',
      }}
    />

    {/* Dark gradient on top of the blur so it fades to the page background color */}
    <div
      className="fixed top-0 left-0 right-0 z-40 pointer-events-none"
      style={{
        height: '100px',
        background: 'linear-gradient(to bottom, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.4) 60%, rgba(8,8,8,0) 100%)',
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
