import { useState, useEffect, useRef } from 'react';
import type { FormEvent } from 'react';
import HangmanDrawing from './HangmanDrawing';
import WordDisplay from './WordDisplay';

interface GameScreenProps {
  secret: string;
  onRestart: () => void;
}

const MAX_ERRORS = 6;

const GameScreen: React.FC<GameScreenProps> = ({ secret, onRestart }) => {
    
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongCount, setWrongCount] = useState(0);
  const [inputLetter, setInputLetter] = useState('');
  const [message, setMessage] = useState('');
  const messageRef = useRef<HTMLParagraphElement>(null);
  const [wrongGuess, setWrongGuess] = useState(false);

  const normalizedSecret = secret.toLowerCase();

  const handleGuess = (e: FormEvent) => {
    e.preventDefault();
    const letter = inputLetter.trim().toLowerCase();
    if (letter === '' || letter.length !== 1) {
      setMessage('Digite uma única letra');
      setTimeout(() => setMessage(''), 1500);
      return;
    }
    if (guessedLetters.includes(letter)) {
      setMessage('Letra já usada');
      setTimeout(() => setMessage(''), 1500);
      setInputLetter('');
      return;
    }

    setGuessedLetters(prev => [...prev, letter]);
    if (normalizedSecret.includes(letter)) {
      // correct
    } else {
      setWrongCount(prev => prev + 1);
      setWrongGuess(true);
      setTimeout(() => setWrongGuess(false), 300);
    }
    setInputLetter('');
  };

  const status = () => {
    // Filtra apenas as letras, ignorando hífens
    const letters = normalizedSecret
      .split('')
      .filter(ch => ch !== '-');
    const allRevealed = letters.every(ch => guessedLetters.includes(ch));
    if (allRevealed) return 'won';
    if (wrongCount >= MAX_ERRORS) return 'lost';
    return 'playing';
  };

  useEffect(() => {
    const s = status();
    if (s === 'won') {
      setMessage('Você venceu!');
    } else if (s === 'lost') {
      setMessage('Você perdeu!');
    }
  }, [guessedLetters, wrongCount]);

  const usedLetters = guessedLetters.join(', ');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <div
        role="main"
        className="bg-slate-800 rounded-2xl shadow-2xl p-8 w-full max-w-lg border border-slate-700"
      >
        <h2 className="text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
          Forca
        </h2>
        <div className={`${wrongGuess ? 'ring-4 ring-red-500 animate-pulse rounded-lg' : ''} mx-auto mb-6`}> 
          <HangmanDrawing wrongCount={wrongCount} />
        </div>
        <WordDisplay word={normalizedSecret} guessed={guessedLetters} />

        {status() === 'playing' && (
          <form onSubmit={handleGuess} className="mt-6 flex items-center justify-center space-x-3">
            <label htmlFor="letter-input" className="sr-only">
              Digite uma letra
            </label>
            <input
              id="letter-input"
              type="text"
              maxLength={1}
              value={inputLetter}
              onChange={e => setInputLetter(e.target.value.replace(/[^a-zA-Z]/g, ''))}
              className={`w-14 text-center px-3 py-2 text-xl font-semibold border-2 rounded-lg transition-all duration-200 bg-slate-700 text-white
                ${wrongGuess ? 'border-red-500' : 'border-slate-600'}`}
              aria-describedby="game-message"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:shadow-lg hover:shadow-green-500/50 hover:from-green-600 hover:to-emerald-700 transition-all duration-200 disabled:opacity-50 font-semibold"
              disabled={inputLetter.trim() === ''}
            >
              Enviar
            </button>
          </form>
        )}

        {message && status() === 'playing' && (
          <p
            id="game-message"
            ref={messageRef}
            role="status"
            aria-live="polite"
            className="mt-4 text-sm text-yellow-400 text-center h-6"
          >
            {message}
          </p>
        )}
        <p className="mt-3 text-sm text-slate-300 text-center">Letras usadas: {usedLetters || 'nenhuma'}</p>

        {status() !== 'playing' && (
          <div className="mt-8 flex flex-col items-center space-y-4">
            <p
              className={`text-2xl font-bold ${status() === 'won' ? 'text-green-400' : 'text-red-400'}`}
            >
              {message}
            </p>
            {status() === 'lost' && (
              <p className="text-lg font-semibold text-slate-200 text-center">
                A palavra era: <span className="text-cyan-400 font-extrabold">{normalizedSecret}</span>
              </p>
            )}
            <button
              onClick={onRestart}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-semibold"
            >
              Reiniciar Jogo
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameScreen;
