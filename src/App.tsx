import { useCallback, useEffect, useState } from 'react';
import { HangmanDrawing } from './HangmanDrawing';
import { HangmanWord } from './HangmanWord';
import { Keyboard } from './Keyboard';
import words from './wordList.json';

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter((letter) => {
    return !wordToGuess.includes(letter);
  });

  const isLoser = incorrectLetters.length >= 6;

  // loop through word, check if letter in guessedletters, if not return false; else return true
  const isWinner = () => {
    for (let letter of wordToGuess) {
      if (!(letter in guessedLetters)) return false;
    }
    return true; 
  } ;
  

  const addGuessedLetter = useCallback(
    (letter: string) => {
      // if letter already guessed, just ignore and do nothing
      if (guessedLetters.includes(letter) || isWinner() || isLoser ) return;
      // else
      setGuessedLetters((guessedLetters) => [...guessedLetters, letter]);
    },
    [guessedLetters, isWinner(), isLoser]
  );

  // handle keyboard events
  useEffect(() => {
    let handler = (e: KeyboardEvent) => {
      let key = e.key;

      // if key is not a letter, just return
      if (!key.match(/^[a-z]$/)) return;

      // otherwise, prevent default pg action and add guessed letter
      e.preventDefault();
      addGuessedLetter(key);
    };

    // add event listener to use, then remove it when we're done
    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [guessedLetters]);

  return (
    <div
      style={{
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: '0 auto',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          fontSize: '2rem',
          textAlign: 'center',
          color: 'blue'
        }}
      >
        {!isWinner() && !isLoser ? `Let's play! ` : ''}
        { isWinner() ? 'Congrats, you won! Refresh to play again.' : ''}
        { isLoser ? 'You lost, but good try! Refresh to play again.' : ''}
      </div>

      <HangmanDrawing numOfGuesses={incorrectLetters.length} />
      <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard
          disabled={ isWinner() || isLoser}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
