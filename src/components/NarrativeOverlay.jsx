import React from 'react';

export const NarrativeOverlay = ({ scene, opacity = 1 }) => {
  if (!scene) return null;

  const textContent = Array.isArray(scene.narrative)
    ? scene.narrative[0]
    : scene.narrative;

  // Dynamic Composition-Aware Safe Area Positioning (Section 04)
  const getAlignmentStyle = () => {
    switch (scene.align) {
      case 'left':
        return {
          left: '28%',
          top: '12%',
          transform: 'translateX(-50%)',
          textAlign: 'left'
        };
      case 'right':
        return {
          left: '72%',
          top: '12%',
          transform: 'translateX(-50%)',
          textAlign: 'right'
        };
      case 'center':
      default:
        return {
          left: '50%',
          top: '12%',
          transform: 'translateX(-50%)',
          textAlign: 'center'
        };
    }
  };

  const alignStyle = getAlignmentStyle();

  return (
    <div
      className="storybook-narrative-overlay"
      style={{
        position: 'absolute',
        width: '90%',
        maxWidth: '680px',
        zIndex: 50,
        pointerEvents: 'none',
        opacity: opacity,
        transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s ease-out',
        ...alignStyle
      }}
    >
      {/* Basquiat Irregular Wide Exclusive Narrative Typography */}
      <h1 className="narrative-basquiat-title" style={{ color: scene.textColor }}>
        "{textContent}"
      </h1>
    </div>
  );
};
