import React, { useEffect, useState } from 'react';

/**
 * PulseWaveGraphic component rendering an active pulsating sine/amplitude wave
 * with a Gaussian envelope (matching the uploaded image "The importance of the right Beat").
 */
export default function PulseWaveGraphic({ className = '' }) {
  const [phase, setPhase] = useState(0);

  // Smooth 60fps animation loop for the wave phase
  useEffect(() => {
    let animId;
    const animate = () => {
      setPhase((prev) => (prev + 0.04) % (Math.PI * 2));
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Generate SVG path for modulated amplitude wave
  const width = 800;
  const height = 300;
  const midY = height / 2;
  const midX = width / 2;
  const points = [];

  const totalPoints = 200;
  for (let i = 0; i <= totalPoints; i++) {
    const x = (i / totalPoints) * width;
    const distFromCenter = (x - midX) / 120;
    
    // Gaussian envelope controls the center bulge amplitude
    const envelope = Math.exp(-distFromCenter * distFromCenter);
    
    // High frequency sine wave inside envelope + dynamic phase shift
    const frequency = 0.12;
    const wave = Math.sin((x - midX) * frequency - phase);
    
    const maxAmplitude = 110;
    const y = midY - wave * envelope * maxAmplitude;
    
    points.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
  }

  const pathData = points.join(' ');

  return (
    <div className={`relative w-full max-w-4xl mx-auto flex items-center justify-center ${className}`}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Neon Glow Filter */}
          <filter id="waveGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradient along the wave line */}
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#91BEF0" stopOpacity="0.2" />
            <stop offset="35%" stopColor="#91BEF0" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#F5C430" stopOpacity="1" />
            <stop offset="65%" stopColor="#91BEF0" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#91BEF0" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Outer Background Soft Wave Shadow */}
        <path
          d={pathData}
          stroke="#15317E"
          strokeWidth="6"
          opacity="0.5"
          filter="url(#waveGlow)"
        />

        {/* Primary Pulsating Wave Line */}
        <path
          d={pathData}
          stroke="url(#waveGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#waveGlow)"
        />

        {/* Left & Right Horizon Guide Lines */}
        <line x1="0" y1={midY} x2="150" y2={midY} stroke="#91BEF0" strokeWidth="1" opacity="0.3" />
        <line x1="650" y1={midY} x2="800" y2={midY} stroke="#91BEF0" strokeWidth="1" opacity="0.3" />

        {/* Glowing Pulse Node on Horizon */}
        <circle cx="150" cy={midY} r="3" fill="#F5C430" className="animate-ping" />
        <circle cx="650" cy={midY} r="3" fill="#F5C430" className="animate-ping" />
      </svg>
    </div>
  );
}
