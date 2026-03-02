import { useState } from 'react';
import type { FormEvent } from 'react';

interface StartScreenProps {
  onStart: (secret: string) => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const [word, setWord] = useState('');

  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedWord = word.trim();
    if (trimmedWord.length === 0) {
      setError('Digite uma palavra válida');
      setTimeout(() => setError(''), 2000);
      return;
    }
    if (/\d/.test(trimmedWord)) {
      setError('A palavra não pode conter números');
      setTimeout(() => setError(''), 2000);
      setWord('');
      return;
    }
    onStart(trimmedWord.toLowerCase());
    setWord('');
  };

  return (
    <div
      role="main"
      className="flex items-center justify-center min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-4"
    >
      <div className="bg-slate-800 rounded-2xl shadow-2xl p-8 w-full max-w-md border border-slate-700">
        <h1 className="text-5xl font-extrabold pb-3 mb-6 text-center bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Jogo da Forca
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-5">
          <label htmlFor="secret-input" className="sr-only">
            Palavra secreta
          </label>
          <input
            id="secret-input"
            type="password"
            value={word}
            onChange={e => setWord(e.target.value)}
            placeholder="Digite a palavra secreta"
            className="w-full px-4 py-3 border-2 border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-slate-700 text-white placeholder-slate-400"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 font-semibold"
            disabled={word.trim().length === 0}
          >
            Iniciar Jogo
          </button>
        </form>
        <p
          role="alert"
          aria-live="polite"
          className="mt-4 text-sm text-red-400 h-5"
        >
          {error}
        </p>
      </div>
    </div>
  );
};

export default StartScreen;
