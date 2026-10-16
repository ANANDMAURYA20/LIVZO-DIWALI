import React, { forwardRef } from 'react';
import './EntranceText.css';

const EntranceText = forwardRef((props, ref) => {
  return (
    <div className="entrance-text" ref={ref} aria-hidden="true">
      <p className="entrance-text__presents">
        <span className="entrance-text__star">✦</span>
        LIVZO PRESENTS
        <span className="entrance-text__star">✦</span>
      </p>

      <h1 className="entrance-text__title">DIWALI UTSAV</h1>

      <div className="entrance-text__divider" />

      <p className="entrance-text__subtitle">The Royal Festival of Lights Awaits</p>

      <div className="entrance-text__scroll-hint">
        <div className="entrance-text__scroll-line" />
        <span>SCROLL TO ENTER</span>
        <span className="entrance-text__arrow">↓</span>
      </div>
    </div>
  );
});

EntranceText.displayName = 'EntranceText';

export default EntranceText;
