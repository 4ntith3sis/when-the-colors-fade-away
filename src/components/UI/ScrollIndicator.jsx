import React from 'react';

export const ScrollIndicator = ({ scrollProgress = 0, currentSceneId = 1 }) => {
  // Visible throughout the story, only hides when user reaches absolute bottom of document (end of Scene 12 / scrollProgress >= 0.95)
  const isAtBottom = scrollProgress >= 0.95 || currentSceneId === 12;
  const isVisible = !isAtBottom;

  return (
    <div
      className="scroll-indicator-container"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
        transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Minimal Thin-Line Scroll Gesture Icon */}
      <svg
        width="16"
        height="26"
        viewBox="0 0 16 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', flexShrink: 0 }}
      >
        {/* Outer Mouse Shell Outline */}
        <rect
          x="1"
          y="1"
          width="14"
          height="24"
          rx="7"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeOpacity="0.85"
        />
        {/* Inner Moving Scroll Wheel Dot */}
        <circle
          cx="8"
          cy="7"
          r="1.2"
          fill="currentColor"
          className="scroll-indicator-dot"
        />
      </svg>

      {/* Understated UI Text */}
      <span
        style={{
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
          fontSize: '0.72rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          fontWeight: '400',
          whiteSpace: 'nowrap'
        }}
      >
        Scroll to explore
      </span>
    </div>
  );
};
