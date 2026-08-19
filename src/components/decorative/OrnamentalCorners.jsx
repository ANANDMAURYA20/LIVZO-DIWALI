import React from 'react';
import './OrnamentalCorners.css';

/**
 * Reusable ornamental gold corner component.
 * Renders decorative gold corner brackets on all 4 corners.
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {string} color - gold color override
 */
const OrnamentalCorners = ({ size = 'md', color }) => {
  const cls = `orn-corners orn-corners--${size}`;
  const style = color ? { '--orn-color': color } : {};

  return (
    <div className={cls} style={style} aria-hidden="true">
      <svg className="orn-corner orn-corner--tl" viewBox="0 0 60 60" fill="none">
        <path d="M2 58 V12 Q2 2 12 2 H58" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <path d="M8 50 V18 Q8 8 18 8 H50" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6"/>
        <circle cx="4" cy="4" r="3" fill="currentColor" opacity="0.8"/>
      </svg>
      <svg className="orn-corner orn-corner--tr" viewBox="0 0 60 60" fill="none">
        <path d="M58 58 V12 Q58 2 48 2 H2" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <path d="M52 50 V18 Q52 8 42 8 H10" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6"/>
        <circle cx="56" cy="4" r="3" fill="currentColor" opacity="0.8"/>
      </svg>
      <svg className="orn-corner orn-corner--bl" viewBox="0 0 60 60" fill="none">
        <path d="M2 2 V48 Q2 58 12 58 H58" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <path d="M8 10 V42 Q8 52 18 52 H50" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6"/>
        <circle cx="4" cy="56" r="3" fill="currentColor" opacity="0.8"/>
      </svg>
      <svg className="orn-corner orn-corner--br" viewBox="0 0 60 60" fill="none">
        <path d="M58 2 V48 Q58 58 48 58 H2" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <path d="M52 10 V42 Q52 52 42 52 H10" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6"/>
        <circle cx="56" cy="56" r="3" fill="currentColor" opacity="0.8"/>
      </svg>
    </div>
  );
};

export default OrnamentalCorners;
