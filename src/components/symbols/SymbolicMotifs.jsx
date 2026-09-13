import React from 'react';

// 1. CANDLE MOTIF (Section 19: Primary Narrative Symbol Evolution)
export const CandleMotif = () => {
  return null;
};

// 2. THREAD MOTIF (Symbol of Connection & Separation)
export const ThreadMotif = ({
  state = 'connected', // 'connected' | 'loosening' | 'snapped'
  manX = -100,
  womanX = 100
}) => {
  if (state === 'connected' || state === 'loosening') return null;
  if (state === 'snapped') {
    return (
      <svg
        style={{
          position: 'absolute',
          bottom: '25vh',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1000px',
          height: '60px',
          pointerEvents: 'none',
          zIndex: 25
        }}
        viewBox="-500 -30 1000 60"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d={`M ${manX} 0 Q ${manX + 60} 15, ${manX + 120} 25`}
          stroke="#E8A048"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
          opacity="0.5"
        />
        <path
          d={`M ${womanX} 0 Q ${womanX - 60} 15, ${womanX - 120} 25`}
          stroke="#E8A048"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
          opacity="0.5"
        />
      </svg>
    );
  }

  const isLoosening = state === 'loosening';
  const midX = (manX + womanX) / 2;
  const sagY = isLoosening ? 40 : 8;

  return (
    <svg
      style={{
        position: 'absolute',
        bottom: '25vh',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '1200px',
        height: '100px',
        pointerEvents: 'none',
        zIndex: 25
      }}
      viewBox="-600 -20 1200 100"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="threadGlowGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E8A048" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#F4E2AC" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#E8A048" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <path
        d={`M ${manX} 0 Q ${midX} ${sagY * 1.5}, ${womanX} 0`}
        stroke="#E8A048"
        strokeWidth="4"
        strokeOpacity="0.25"
        fill="none"
      />
      <path
        d={`M ${manX} 0 Q ${midX} ${sagY}, ${womanX} 0`}
        stroke="url(#threadGlowGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

// 3. STYLIZED FLOWERS MOTIF (Symbol of Love & Fragility)
export const FlowersMotif = ({ color = '#E8A048', opacity = 0.8, scale = 1 }) => {
  return (
    <svg
      width="120"
      height="140"
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `scale(${scale})`, opacity }}
    >
      <path d="M 40 140 C 35 100, 50 60, 30 20" stroke="#343D2E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M 38 100 Q 20 90 28 80 C 35 85 38 95 38 100 Z" fill="#343D2E" />
      <path d="M 44 80 Q 60 70 54 60 C 46 65 44 75 44 80 Z" fill="#343D2E" />
      <g transform="translate(30, 20)">
        <circle cx="0" cy="-10" r="8" fill={color} opacity="0.9" />
        <circle cx="10" cy="0" r="8" fill={color} opacity="0.9" />
        <circle cx="0" cy="10" r="8" fill={color} opacity="0.9" />
        <circle cx="-10" cy="0" r="8" fill={color} opacity="0.9" />
        <circle cx="0" cy="0" r="6" fill="#F4E2AC" />
      </g>
      <path d="M 70 140 C 75 110, 65 70, 85 35" stroke="#2B3023" strokeWidth="2" strokeLinecap="round" fill="none" />
      <g transform="translate(85, 35)">
        <circle cx="0" cy="-8" r="6" fill={color} opacity="0.8" />
        <circle cx="8" cy="0" r="6" fill={color} opacity="0.8" />
        <circle cx="0" cy="8" r="6" fill={color} opacity="0.8" />
        <circle cx="-8" cy="0" r="6" fill={color} opacity="0.8" />
        <circle cx="0" cy="0" r="4.5" fill="#F4E2AC" />
      </g>
    </svg>
  );
};

// 4. BRANCHES MOTIF (Symbol of Shadow Encroachment)
export const BranchesMotif = ({ opacity = 0.85, isMonochrome = false }) => {
  const color = isMonochrome ? '#222222' : '#141A15';
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1400 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity }}
      preserveAspectRatio="none"
    >
      <path
        d="M -20 -20 C 150 80, 280 40, 420 180 M 180 85 C 240 180, 320 220, 390 280 M 310 50 C 400 10, 520 80, 600 120"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 420 180 C 460 210, 490 200, 530 250 M 390 280 C 430 320, 470 310, 500 360"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 1420 -20 C 1250 100, 1120 60, 980 220 M 1200 85 C 1140 190, 1050 230, 960 300 M 1100 40 C 1000 20, 880 90, 800 130"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};
