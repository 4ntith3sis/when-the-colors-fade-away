import React from 'react';
import { CandleMotif, ThreadMotif, FlowersMotif, BranchesMotif } from '../symbols/SymbolicMotifs';

// SCENE 01 — THE TWO: DISTANCE -> CONNECTION
// Visual Metaphor: Thin thread & small warm candle flame between far-apart characters
export const Scene1Environment = () => (
  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    <svg viewBox="0 0 1440 900" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0 }}>
      {/* Dark Forest Glade Background */}
      <rect width="1440" height="900" fill="#23261F" />
      
      {/* Subtle Warm Moonlight / Candlelight Vignette Glow */}
      <radialGradient id="s1WarmGlow" cx="50%" cy="65%" r="45%">
        <stop offset="0%" stopColor="#E8A048" stopOpacity="0.25" />
        <stop offset="60%" stopColor="#23261F" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#141713" stopOpacity="1" />
      </radialGradient>
      <rect width="1440" height="900" fill="url(#s1WarmGlow)" />

      {/* Layered Editorial Dark Forest Silhouettes */}
      <path d="M-100 680 Q 250 520 600 620 T 1300 560 T 1600 680 L 1600 900 L -100 900 Z" fill="#1B1E18" opacity="0.85" />
      <path d="M-50 740 Q 350 630 800 710 T 1500 670 L 1500 900 L -50 900 Z" fill="#141612" opacity="0.95" />

      {/* Hand-crafted Tree Silhouettes */}
      <g opacity="0.75" fill="#11130E">
        <path d="M 120 700 C 110 580 180 540 160 440 C 220 460 260 560 220 700 Z" />
        <path d="M 1300 700 C 1280 570 1360 530 1330 430 C 1390 450 1420 570 1380 700 Z" />
      </g>

      {/* Ground Path */}
      <path d="M-20 780 Q 720 720 1460 780 L 1460 900 L -20 900 Z" fill="#10110D" />
    </svg>


    {/* Small Warm Candle Flame between them */}
    <div style={{ position: 'absolute', bottom: '26vh', left: '50%', transform: 'translateX(-50%)', zIndex: 20 }}>
      <CandleMotif state="lit" scale={0.7} />
    </div>
  </div>
);

// SCENE 02 — TOGETHER: CONNECTION -> WARMTH
// Visual Metaphor: Warm atmospheric sanctuary, stable candle, stylized flowers
export const Scene2Environment = () => (
  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    <svg viewBox="0 0 1440 900" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0 }}>
      <rect width="1440" height="900" fill="#2B2820" />
      
      {/* Warm Golden Sanctuary Glow */}
      <radialGradient id="s2WarmGlow" cx="50%" cy="60%" r="55%">
        <stop offset="0%" stopColor="#F4E2AC" stopOpacity="0.32" />
        <stop offset="50%" stopColor="#E8A048" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#1A1813" stopOpacity="1" />
      </radialGradient>
      <rect width="1440" height="900" fill="url(#s2WarmGlow)" />

      {/* Soft Layered Hills */}
      <path d="M-100 640 Q 400 520 850 590 T 1540 570 L 1540 900 L -100 900 Z" fill="#201E17" opacity="0.8" />
      <path d="M-50 710 Q 300 610 750 670 T 1500 640 L 1500 900 L -50 900 Z" fill="#171510" opacity="0.9" />

      {/* Ground */}
      <path d="M-20 760 Q 600 730 1460 750 L 1460 900 L -20 900 Z" fill="#11100D" />
    </svg>

    {/* Flowers in Bloom Motif */}
    <div style={{ position: 'absolute', bottom: '22vh', left: '22%', zIndex: 15 }}>
      <FlowersMotif color="#E8A048" opacity={0.85} scale={0.9} />
    </div>
    <div style={{ position: 'absolute', bottom: '22vh', right: '22%', zIndex: 15 }}>
      <FlowersMotif color="#F4E2AC" opacity={0.85} scale={0.85} />
    </div>


    {/* Stable Candle Motif */}
    <div style={{ position: 'absolute', bottom: '26vh', left: '50%', transform: 'translateX(-50%)', zIndex: 20 }}>
      <CandleMotif state="lit" scale={0.75} />
    </div>
  </div>
);

// SCENE 03 — THE ARGUMENT: WARMTH -> DISTANCE
// Visual Metaphor: Flickering flame, encroaching dark branches, loosening thread
export const Scene3Environment = () => (
  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    <svg viewBox="0 0 1440 900" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0 }}>
      <rect width="1440" height="900" fill="#1E221D" />

      {/* Shadowy Cold Ambient Tint */}
      <radialGradient id="s3DarkGlow" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#343D2E" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#121512" stopOpacity="1" />
      </radialGradient>
      <rect width="1440" height="900" fill="url(#s3DarkGlow)" />

      {/* Distant Cold Shadow Hills */}
      <path d="M-50 670 Q 500 580 1000 640 T 1500 620 L 1500 900 L -50 900 Z" fill="#141713" opacity="0.85" />

      {/* Central Dividing Tree Silhouette */}
      <g opacity="0.9">
        <path d="M 720 900 C 710 600 690 450 660 250 C 680 220 760 210 780 250 C 750 450 740 600 760 900 Z" fill="#0D0F0D" />
        <path d="M 700 380 C 600 340 520 360 440 310" stroke="#0D0F0D" strokeWidth="12" strokeLinecap="round" fill="none" />
        <path d="M 750 350 C 850 310 940 330 1020 280" stroke="#0D0F0D" strokeWidth="10" strokeLinecap="round" fill="none" />
      </g>

      {/* Ground */}
      <path d="M-20 770 Q 720 730 1460 770 L 1460 900 L -20 900 Z" fill="#0A0C0A" />
    </svg>

    {/* Encroaching Top/Side Branches Framing Motif */}
    <BranchesMotif opacity={0.85} />


    {/* Unstable Flickering Candle Motif */}
    <div style={{ position: 'absolute', bottom: '26vh', left: '50%', transform: 'translateX(-50%)', zIndex: 20 }}>
      <CandleMotif state="flickering" scale={0.7} />
    </div>
  </div>
);

// SCENE 04 — THE SEPARATION: CONNECTION -> SEPARATION
// Visual Metaphor: Snapped thread, extinguished candle smoke, empty diverging paths
export const Scene4Environment = () => (
  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    <svg viewBox="0 0 1440 900" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0 }}>
      <rect width="1440" height="900" fill="#1A1B1A" />

      {/* Forked Road Silhouette */}
      <path d="M 720 900 L 200 620 L -100 620 L -100 900 Z" fill="#131413" opacity="0.8" />
      <path d="M 720 900 L 1240 620 L 1540 620 L 1540 900 Z" fill="#131413" opacity="0.8" />

      {/* Distant Stark Mountain Silhouettes */}
      <path d="M-100 620 L 500 500 L 1000 540 L 1600 470 L 1600 900 L -100 900 Z" fill="#111211" opacity="0.9" />

      {/* Ground */}
      <path d="M-20 780 Q 720 750 1460 780 L 1460 900 L -20 900 Z" fill="#0C0D0C" />
    </svg>

    {/* Heavy Encroaching Dark Branches */}
    <BranchesMotif opacity={0.95} />

    {/* Snapped Broken Thread Motif */}
    <ThreadMotif state="snapped" manX={-100} womanX={100} />

    {/* Extinguished Candle Motif (Flame Disappears) */}
    <div style={{ position: 'absolute', bottom: '26vh', left: '50%', transform: 'translateX(-50%)', zIndex: 20 }}>
      <CandleMotif state="extinguished" scale={0.7} />
    </div>
  </div>
);

// SCENE 05 — THE EMPTY SPACE: PRESENCE -> ABSENCE
// Visual Metaphor: No characters, empty room, empty chair, window beam, extinguished candle
export const Scene5Environment = () => (
  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    <svg viewBox="0 0 1440 900" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0 }}>
      <rect width="1440" height="900" fill="#15181C" />

      {/* Architectural Room Window Silhouette */}
      <rect x="250" y="150" width="380" height="500" rx="190" fill="#20262E" opacity="0.85" />
      <line x1="440" y1="150" x2="440" y2="650" stroke="#15181C" strokeWidth="8" />
      <line x1="250" y1="400" x2="630" y2="400" stroke="#15181C" strokeWidth="8" />

      {/* Soft Moonlight Beam */}
      <polygon points="250,650 630,650 900,900 100,900" fill="#2B3440" opacity="0.22" />

      {/* Empty Chair Silhouette */}
      <g opacity="0.9">
        <path d="M 780 620 L 780 480 C 780 450 840 450 840 480 L 840 620 Z" fill="#0D0F12" />
        <rect x="760" y="620" width="100" height="15" fill="#0D0F12" />
        <rect x="770" y="635" width="12" height="120" fill="#0D0F12" />
        <rect x="838" y="635" width="12" height="120" fill="#0D0F12" />
      </g>

      {/* Floor */}
      <rect x="0" y="750" width="1440" height="150" fill="#0A0B0E" />
    </svg>

    {/* Extinguished Candle on Table nearby */}
    <div style={{ position: 'absolute', bottom: '28vh', left: '42%', zIndex: 20 }}>
      <CandleMotif state="extinguished" scale={0.7} />
    </div>

    {/* Scattered Petals on Floor */}
    <div style={{ position: 'absolute', bottom: '15vh', left: '55%', zIndex: 15 }}>
      <FlowersMotif color="#D87A46" opacity={0.4} scale={0.5} />
    </div>
  </div>
);

// SCENE 06 — SHE'S GONE: LIGHT -> DISAPPEARANCE
// Visual Metaphor: Dark night road, moon, headlight sweep, extinguished candle
export const Scene6Environment = ({ sweepProgress = 0 }) => (
  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    <svg viewBox="0 0 1440 900" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0 }}>
      <rect width="1440" height="900" fill="#111419" />

      {/* Moon Silhouette */}
      <circle cx="1150" cy="220" r="45" fill="#E5DDD0" opacity="0.25" />

      {/* Distant Road & Forest Silhouettes */}
      <path d="M-100 620 L 200 580 L 350 600 L 600 540 L 900 580 L 1200 520 L 1600 600 L 1600 900 L -100 900 Z" fill="#191F28" />

      {/* Street Lamp Silhouette */}
      <g>
        <rect x="300" y="320" width="8" height="430" fill="#202834" />
        <path d="M 280 320 C 280 290 320 290 320 320 Z" fill="#202834" />
        <polygon points="280,320 320,320 480,750 120,750" fill="#F4E2AC" opacity="0.08" />
      </g>

      {/* Vehicle Headlight Sweep Cone */}
      <g style={{ transform: `translateX(${(sweepProgress - 0.5) * 600}px)`, transition: 'transform 0.1s linear' }}>
        <polygon points="1200,600 1600,450 1600,750" fill="#F4E2AC" opacity={0.3 * (1 - Math.abs(sweepProgress - 0.5))} />
        <rect x="1220" y="580" width="120" height="40" rx="8" fill="#0A0D11" />
      </g>

      {/* Road Surface */}
      <rect x="0" y="750" width="1440" height="150" fill="#090B0E" />
    </svg>

    {/* Extinguished Candle Silhouette */}
    <div style={{ position: 'absolute', bottom: '22vh', right: '35%', zIndex: 20 }}>
      <CandleMotif state="extinguished" scale={0.65} />
    </div>
  </div>
);

// SCENE 07 — THE SEARCH: LOST -> SEARCHING
// Visual Metaphor: Continuous layered journey through dark forest, monumental gate, floating guide lights
export const Scene7Environment = ({ journeyOffset = 0 }) => (
  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    <svg viewBox="0 0 1440 900" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0 }}>
      <rect width="1440" height="900" fill="#131820" />

      {/* Panning World Layer */}
      <g style={{ transform: `translateX(${-journeyOffset * 800}px)`, transition: 'transform 0.1s linear' }}>
        {/* Section A: Monumental Gate Silhouette */}
        <path d="M 200 750 L 200 300 L 450 300 L 450 750 Z M 240 340 L 410 340 L 410 750 L 240 750 Z" fill="#1C2430" />

        {/* Section B: Bridge Silhouette */}
        <path d="M 700 750 Q 950 550 1200 750 Z" stroke="#222C3A" strokeWidth="24" fill="none" />
        <line x1="750" y1="700" x2="750" y2="750" stroke="#222C3A" strokeWidth="6" />
        <line x1="950" y1="620" x2="950" y2="750" stroke="#222C3A" strokeWidth="6" />

        {/* Section C: Layered Search Forest */}
        <path d="M 1300 750 L 1360 420 L 1420 750 Z" fill="#19202B" />
        <path d="M 1450 750 L 1520 380 L 1600 750 Z" fill="#151A23" />

        {/* Floating Guide Lights (Points of Candle Hope) */}
        <circle cx="500" cy="500" r="6" fill="#F4E2AC" opacity="0.8" />
        <circle cx="950" cy="450" r="5" fill="#E8A048" opacity="0.7" />
        <circle cx="1400" cy="480" r="7" fill="#F4E2AC" opacity="0.9" />
      </g>

      {/* Ground */}
      <rect x="0" y="750" width="1440" height="150" fill="#0B0E13" />
    </svg>
  </div>
);

// SCENE 08 — TOO LATE: JOURNEY -> VOID
// Visual Metaphor: Cliff/pier threshold, huge negative space, single extinguished candle, man tiny
export const Scene8Environment = () => (
  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    <svg viewBox="0 0 1440 900" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0 }}>
      <rect width="1440" height="900" fill="#16171B" />

      {/* Cold Horizon */}
      <line x1="0" y1="680" x2="1440" y2="680" stroke="#25272F" strokeWidth="2" />
      
      {/* Pier Posts */}
      <g opacity="0.7">
        <rect x="680" y="680" width="8" height="70" fill="#101114" />
        <rect x="740" y="680" width="8" height="70" fill="#101114" />
        <rect x="800" y="680" width="8" height="70" fill="#101114" />
        <rect x="660" y="675" width="160" height="10" fill="#1D1F26" />
      </g>

      {/* Cold Still Water */}
      <rect x="0" y="685" width="1440" height="215" fill="#0D0E11" />
    </svg>

    {/* Extinguished Candle Motif at Pier Edge */}
    <div style={{ position: 'absolute', bottom: '26vh', left: '56%', zIndex: 20 }}>
      <CandleMotif state="extinguished" scale={0.65} />
    </div>
  </div>
);

// SCENE 09-12 — MONOCHROME WORLD ENVIRONMENTS
// Visual Metaphor: Color -> Absence, Movement -> Stillness, Memory Fragments, Everything -> Nothing
export const SceneMonoEnvironment = ({ sceneId }) => (
  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    <svg viewBox="0 0 1440 900" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0 }}>
      <rect width="1440" height="900" fill="#121315" />

      {/* Stark Minimalist Echoes */}
      {sceneId === 10 && (
        <g opacity="0.35">
          <path d="M -100 650 Q 400 600 900 640 T 1600 620 L 1600 900 L -100 900 Z" fill="#252628" opacity="0.5" />
          <path d="M -50 720 Q 500 680 1000 710 T 1500 700 L 1500 900 L -50 900 Z" fill="#191A1C" opacity="0.8" />
        </g>
      )}

      {sceneId === 11 && (
        <g opacity="0.2">
          <path d="M 680 900 C 670 600 650 450 620 250 C 640 220 720 210 740 250 C 710 450 700 600 720 900 Z" fill="#333" />
        </g>
      )}

      {sceneId === 12 && (
        <g opacity="0.15">
          <circle cx="720" cy="450" r="300" stroke="#2A2A2A" strokeWidth="1" fill="none" />
        </g>
      )}

      {/* Ground */}
      <rect x="0" y="740" width="1440" height="160" fill="#0A0B0B" />
    </svg>

    {/* Scene 10 Monochrome Candle (No Flame) */}
    {sceneId === 10 && (
      <div style={{ position: 'absolute', bottom: '24vh', left: '48%', zIndex: 20 }}>
        <CandleMotif state="monochrome" scale={0.6} />
      </div>
    )}

    {/* Scene 11 Ghost Memory Candle Outline */}
    {sceneId === 11 && (
      <div style={{ position: 'absolute', bottom: '24vh', left: '48%', zIndex: 20 }}>
        <CandleMotif state="ghost" scale={0.6} />
      </div>
    )}

    {/* Scene 12 Candle Disappears Completely (Section 19: Ending -> Gone) */}
  </div>
);
