import React from 'react';

/**
 * DotMatrixPattern component rendering concentric dotted rings
 * matching the radial dotted circle background in the user's uploaded image.
 */
export default function DotMatrixPattern({ className = '' }) {
  const rings = [100, 160, 220, 280, 340, 400];

  return (
    <div className={`absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 900 900"
        className="w-[850px] h-[850px] opacity-30 animate-pulseGlow"
        fill="none"
      >
        {rings.map((radius, index) => {
          const count = Math.floor(radius * 0.3);
          const dots = Array.from({ length: count });

          return (
            <g key={radius}>
              {dots.map((_, i) => {
                const angle = (i * 360) / count;
                const rad = (angle * Math.PI) / 180;
                const cx = 450 + radius * Math.cos(rad);
                const cy = 450 + radius * Math.sin(rad);

                return (
                  <circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r={index % 2 === 0 ? 1.8 : 1.2}
                    fill="#FAF4EC"
                    opacity={0.4 + (index % 3) * 0.2}
                  />
                );
              })}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
