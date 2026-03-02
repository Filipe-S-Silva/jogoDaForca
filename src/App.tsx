import { useState } from 'react';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';

function App() {
  const [secretWord, setSecretWord] = useState<string | null>(null);

  const startGame = (word: string) => {
    setSecretWord(word);
  };

  const restart = () => {
    setSecretWord(null);
  };

  return (
    <>
      {secretWord === null ? (
        <StartScreen onStart={startGame} />
      ) : (
        <GameScreen secret={secretWord} onRestart={restart} />
      )}
    </>
  );
}

export default App;
