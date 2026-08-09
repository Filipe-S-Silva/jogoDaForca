import React from 'react';

interface WordDisplayProps {
  word: string;
  guessed: string[];
}

const WordDisplay: React.FC<WordDisplayProps> = ({ word, guessed }) => {
  return (
    <div className="flex space-x-1 justify-center mb-6 flex-wrap">
      {word.split('').map((ch, idx) => {
        // hífens sempre são mostrados
        if (ch === '-') {
          return (
            <span key={idx} className="text-2xl font-semibold text-white h-12 flex items-center">
              -
            </span>
          );
          if (ch == ' ') {
          return (
            <span key={idx} className="text-2xl font-semibold text-white h-12 flex items-center">
              -
            </span>
          );
        }
        const revealed = guessed.includes(ch);
        return (
          <span
            key={idx}
            className={`w-10 h-12 flex items-center justify-center text-2xl font-semibold border-b-4 transition-all duration-300 
              ${revealed ? 'border-cyan-400 text-cyan-400 scale-105' : 'border-slate-600 text-transparent'}`}
          >
            {revealed ? ch : ''}
          </span>
        );
      })}
    </div>
  );
};

export default WordDisplay;
