import React from 'react';

interface HangmanDrawingProps {
  wrongCount: number;
}

const HangmanDrawing: React.FC<HangmanDrawingProps> = ({ wrongCount }) => {
  return (
    <svg width="120" height="160" className="text-white">
      {/* base */}
      <line x1="10" y1="150" x2="90" y2="150" stroke="currentColor" strokeWidth="4" />
      <line x1="50" y1="150" x2="50" y2="20" stroke="currentColor" strokeWidth="4" />
      <line x1="50" y1="20" x2="90" y2="20" stroke="currentColor" strokeWidth="4" />
      <line x1="90" y1="20" x2="90" y2="40" stroke="currentColor" strokeWidth="4" />

      {wrongCount > 0 && (
        <circle cx="90" cy="50" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
      )}
      {wrongCount > 1 && (
        <line x1="90" y1="60" x2="90" y2="100" stroke="currentColor" strokeWidth="4" />
      )}
      {wrongCount > 2 && (
        <line x1="90" y1="70" x2="80" y2="80" stroke="currentColor" strokeWidth="4" />
      )}
      {wrongCount > 3 && (
        <line x1="90" y1="70" x2="100" y2="80" stroke="currentColor" strokeWidth="4" />
      )}
      {wrongCount > 4 && (
        <line x1="90" y1="100" x2="80" y2="120" stroke="currentColor" strokeWidth="4" />
      )}
      {wrongCount > 5 && (
        <line x1="90" y1="100" x2="100" y2="120" stroke="currentColor" strokeWidth="4" />
      )}
    </svg>
  );
};

export default HangmanDrawing;
