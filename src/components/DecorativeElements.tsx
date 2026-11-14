import React from 'react';
import styles from './DecorativeElements.module.css';

/**
 * Geometric low-poly crystal triangle cluster
 * Inspired by crystal facets in pastel blue, sky blue, and icy tones
 */
export const CrystalPattern: React.FC<{
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'floating-left' | 'floating-right';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  opacity?: number;
}> = ({ position = 'top-left', className = '', size = 'md', opacity = 0.85 }) => {
  const getDims = () => {
    switch (size) {
      case 'sm':
        return { width: 140, height: 140 };
      case 'lg':
        return { width: 280, height: 280 };
      case 'md':
      default:
        return { width: 200, height: 200 };
    }
  };

  const { width, height } = getDims();

  return (
    <div
      className={`${styles.crystalWrapper} ${styles[position]} ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.crystalSvg}
      >
        {/* Low-poly facet cluster */}
        <polygon points="100,20 150,60 110,90" fill="#C7E5EF" fillOpacity="0.75" />
        <polygon points="100,20 110,90 60,70" fill="#E2F1F8" fillOpacity="0.85" />
        <polygon points="60,70 110,90 80,140" fill="#A7D4E7" fillOpacity="0.65" />
        <polygon points="110,90 150,60 160,120" fill="#7EBCD9" fillOpacity="0.7" />
        <polygon points="110,90 160,120 130,160" fill="#168ED5" fillOpacity="0.4" />
        <polygon points="110,90 130,160 80,140" fill="#426D83" fillOpacity="0.3" />
        <polygon points="80,140 130,160 100,185" fill="#C7E5EF" fillOpacity="0.5" />
        <polygon points="60,70 80,140 30,110" fill="#EAF5F9" fillOpacity="0.6" />
        <polygon points="150,60 185,90 160,120" fill="#B3DCED" fillOpacity="0.5" />

        {/* Delicate geometric accent lines */}
        <line x1="100" y1="20" x2="110" y2="90" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.9" />
        <line x1="110" y1="90" x2="80" y2="140" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.9" />
        <line x1="110" y1="90" x2="150" y2="60" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.8" />
        <line x1="110" y1="90" x2="130" y2="160" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.8" />

        {/* Little twinkle sparkles */}
        <circle cx="100" cy="20" r="2.5" fill="#168ED5" />
        <circle cx="160" cy="120" r="2" fill="#426D83" />
        <circle cx="80" cy="140" r="2" fill="#168ED5" />
      </svg>
    </div>
  );
};

/**
 * Authentic Scrapbook Washi Tape
 * Features serrated semi-transparent paper strips
 */
export const WashiTape: React.FC<{
  variant?: 'cyan' | 'cream' | 'navy' | 'pattern';
  angle?: number;
  width?: number | string;
  className?: string;
  style?: React.CSSProperties;
}> = ({ variant = 'cyan', angle = -2, width = 120, className = '', style }) => {
  return (
    <div
      className={`${styles.washiTape} ${styles[`washi-${variant}`]} ${className}`}
      style={{
        transform: `rotate(${angle}deg)`,
        width: typeof width === 'number' ? `${width}px` : width,
        ...style,
      }}
      aria-hidden="true"
    >
      <div className={styles.washiTapeInner} />
    </div>
  );
};

/**
 * Graduation Cap Illustration
 * High quality vector illustration featuring academic cap, golden tassel, diploma ribbon & crystal facet accents
 */
export const GraduationCapIllustration: React.FC<{
  className?: string;
  size?: number;
}> = ({ className = '', size = 110 }) => {
  return (
    <div className={`${styles.capWrapper} ${className}`} aria-hidden="true">
      <svg
        width={size}
        height={size * 0.85}
        viewBox="0 0 160 136"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.capSvg}
      >
        <defs>
          <linearGradient id="capTopGradient" x1="20" y1="30" x2="140" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1E5C7D" />
            <stop offset="0.5" stopColor="#168ED5" />
            <stop offset="1" stopColor="#426D83" />
          </linearGradient>
          <linearGradient id="capRimGradient" x1="45" y1="65" x2="115" y2="105" gradientUnits="userSpaceOnUse">
            <stop stopColor="#134764" />
            <stop offset="1" stopColor="#2A5972" />
          </linearGradient>
          <linearGradient id="goldTassel" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#F9D976" />
            <stop offset="0.7" stopColor="#E9B738" />
            <stop offset="1" stopColor="#C4911D" />
          </linearGradient>
        </defs>

        {/* Soft shadow below cap */}
        <ellipse cx="80" cy="116" rx="55" ry="10" fill="#426D83" fillOpacity="0.12" />

        {/* Cap skull rim */}
        <path
          d="M48 64C48 64 48 95 80 95C112 95 112 64 112 64L80 77L48 64Z"
          fill="url(#capRimGradient)"
        />
        <path
          d="M52 69C55 86 68 92 80 92C92 92 105 86 108 69L80 79L52 69Z"
          fill="#113B52"
          fillOpacity="0.5"
        />

        {/* Mortarboard Diamond Top */}
        <polygon
          points="80,18 148,46 80,74 12,46"
          fill="url(#capTopGradient)"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeOpacity="0.5"
        />

        {/* Geometric low-poly crystal facets on the mortarboard */}
        <polygon points="80,18 148,46 80,46" fill="#FFFFFF" fillOpacity="0.1" />
        <polygon points="12,46 80,46 80,74" fill="#0E4260" fillOpacity="0.25" />
        <polygon points="80,46 148,46 80,74" fill="#66B3DE" fillOpacity="0.2" />

        {/* Center Button */}
        <ellipse cx="80" cy="46" rx="5.5" ry="3.5" fill="url(#goldTassel)" />

        {/* Gold Tassel Band & Cord */}
        <path
          d="M80 46 C60 48, 38 60, 34 82"
          stroke="url(#goldTassel)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Gold Tassel Ribbon Ring & Fringe */}
        <circle cx="34" cy="82" r="3.5" fill="#E9B738" />
        <path
          d="M31 85 L28 106 C28 108 40 108 40 106 L37 85 Z"
          fill="url(#goldTassel)"
        />

        {/* Tiny decorative star sparkles */}
        <path
          d="M136 28L138 34L144 36L138 38L136 44L134 38L128 36L134 34Z"
          fill="#C7E5EF"
          fillOpacity="0.85"
        />
        <path
          d="M24 24L25 28L29 29L25 30L24 34L23 30L19 29L23 28Z"
          fill="#D4AF37"
          fillOpacity="0.75"
        />
      </svg>
    </div>
  );
};

/**
 * Academic Stamp Seal
 * Vintage embossed alumni seal
 */
export const AcademicSeal: React.FC<{
  className?: string;
  size?: number;
}> = ({ className = '', size = 96 }) => {
  return (
    <div className={`${styles.sealWrapper} ${className}`} aria-hidden="true">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.sealSvg}
      >
        <circle cx="50" cy="50" r="46" stroke="#168ED5" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="41" stroke="#426D83" strokeWidth="1" />
        <circle cx="50" cy="50" r="38" stroke="#168ED5" strokeWidth="1" strokeOpacity="0.4" />

        {/* Text around circle */}
        <path
          id="sealCirclePath"
          d="M 50 16 A 34 34 0 1 1 49.9 16"
          fill="none"
        />
        <text className={styles.sealText}>
          <textPath href="#sealCirclePath" startOffset="50%" textAnchor="middle">
            HCMUT • CLASS OF 2026 • BACHELOR •
          </textPath>
        </text>

        {/* Center monogram or torch */}
        <circle cx="50" cy="50" r="23" fill="#FAF8F5" stroke="#426D83" strokeWidth="0.8" />
        <text
          x="50"
          y="55"
          textAnchor="middle"
          fill="#168ED5"
          fontFamily="Playfair Display, serif"
          fontSize="13"
          fontWeight="700"
          letterSpacing="1"
        >
          NTP
        </text>
      </svg>
    </div>
  );
};

/**
 * Corner Flourish Frame
 * Delicate vintage corner ornament for the letter
 */
export const CornerFlourish: React.FC<{
  position: 'tl' | 'tr' | 'bl' | 'br';
  className?: string;
}> = ({ position, className = '' }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.cornerFlourish} ${styles[`flourish-${position}`]} ${className}`}
      aria-hidden="true"
    >
      <path
        d="M2 30V10C2 5.58172 5.58172 2 10 2H30"
        stroke="#426D83"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeOpacity="0.35"
      />
      <circle cx="2" cy="30" r="2" fill="#168ED5" fillOpacity="0.6" />
      <circle cx="30" cy="2" r="2" fill="#168ED5" fillOpacity="0.6" />
      <polygon points="10,6 14,10 10,14 6,10" fill="#C7E5EF" fillOpacity="0.7" />
    </svg>
  );
};
