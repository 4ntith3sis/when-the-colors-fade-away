import React from 'react';

export const ProgressIndicator = ({ scrollProgress = 0 }) => {
  const progressPercent = Math.min(100, Math.max(0, scrollProgress * 100));

  return (
    <div
      className="progress-indicator-bar"
      style={{ width: `${progressPercent}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progressPercent)}
      aria-valuemin="0"
      aria-valuemax="100"
    />
  );
};


