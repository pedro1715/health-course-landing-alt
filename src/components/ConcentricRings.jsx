import React from 'react';

/**
 * ConcentricRings component rendering 3D perspective oval rings
 * matching the user's uploaded image (sand ring, white ring, ice blue ring, royal blue ring)
 * with curved callout lines and indicator points.
 */
export default function ConcentricRings({ className = '' }) {
  return (
    <div className={`relative w-full max-w-4xl mx-auto flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 900 600"
        className="w-full h-auto overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Shadows */}
          <filter id="ringShadow1" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#0D0E1C" floodOpacity="0.25" />
          </filter>
          <filter id="ringShadow2" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="16" stdDeviation="12" floodColor="#070814" floodOpacity="0.35" />
          </filter>
          <filter id="ringShadow3" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="20" stdDeviation="16" floodColor="#000000" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* ── 3D Concentric Rings ── */}
        <g transform="translate(450, 420)">
          {/* Ring 1: Sand/Yellow Bottom Base Ring */}
          <ellipse
            cx="0"
            cy="0"
            rx="400"
            ry="140"
            fill="#F5E4C8"
            filter="url(#ringShadow1)"
          />

          {/* Ring 2: White Ring */}
          <ellipse
            cx="0"
            cy="-12"
            rx="330"
            ry="115"
            fill="#FFFFFF"
            filter="url(#ringShadow1)"
          />

          {/* Ring 3: Ice Blue Ring */}
          <ellipse
            cx="0"
            cy="-24"
            rx="250"
            ry="88"
            fill="#91BEF0"
            filter="url(#ringShadow2)"
          />

          {/* Ring 4: Deep Cobalt / Royal Blue Ring */}
          <ellipse
            cx="0"
            cy="-36"
            rx="170"
            ry="60"
            fill="#1D53D8"
            filter="url(#ringShadow3)"
          />

          {/* Inner cutout hole */}
          <ellipse
            cx="0"
            cy="-38"
            rx="95"
            ry="33"
            fill="#0B112C"
          />
        </g>

        {/* ── Curved Callout Connector Lines & Indicator Dots ── */}
        
        {/* Callout Line 1 (Top Left) */}
        <path
          d="M 230 180 L 320 180 Q 370 180 370 240 L 370 380"
          stroke="#FAF4EC"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.6"
        />
        <circle cx="230" cy="180" r="4" fill="#F5C430" />
        <circle cx="370" cy="380" r="5" fill="#FAF4EC" />

        {/* Callout Line 2 (Bottom Left) */}
        <path
          d="M 210 330 L 340 330 Q 400 330 400 395"
          stroke="#FAF4EC"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.6"
        />
        <circle cx="210" cy="330" r="4" fill="#F5C430" />
        <circle cx="400" cy="395" r="5" fill="#FAF4EC" />

        {/* Callout Line 3 (Top Right) */}
        <path
          d="M 680 140 L 520 140 Q 460 140 460 210 L 460 375"
          stroke="#FAF4EC"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.6"
        />
        <circle cx="680" cy="140" r="4" fill="#F5C430" />
        <circle cx="460" cy="375" r="5" fill="#FAF4EC" />

        {/* Callout Line 4 (Bottom Right) */}
        <path
          d="M 660 310 L 560 310 Q 500 310 500 390"
          stroke="#FAF4EC"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.6"
        />
        <circle cx="660" cy="310" r="4" fill="#F5C430" />
        <circle cx="500" cy="390" r="5" fill="#FAF4EC" />
      </svg>
    </div>
  );
}
