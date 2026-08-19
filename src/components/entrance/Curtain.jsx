import React, { forwardRef } from 'react';
import './Curtain.css';

const Curtain = forwardRef(({ side = 'left' }, ref) => {
  const isLeft = side === 'left';

  return (
    <div
      className={`curtain curtain--${side}`}
      ref={ref}
      aria-hidden="true"
    >
      {/* Velvet fabric — layered CSS gradients */}
      <div className="curtain__fabric">
        {/* Gold trim on inner edge */}
        <div className={`curtain__trim curtain__trim--${side}`} />

        {/* Fabric fold highlights */}
        <div className="curtain__fold curtain__fold--1" />
        <div className="curtain__fold curtain__fold--2" />
        <div className="curtain__fold curtain__fold--3" />
      </div>

      {/* Depth shadow at the split seam */}
      <div className={`curtain__shadow curtain__shadow--${side}`} />

      {/* Bottom drape weight */}
      <div className="curtain__drape" />

      {/* Top gathering */}
      <div className="curtain__gather" />
    </div>
  );
});

Curtain.displayName = 'Curtain';

export default Curtain;
