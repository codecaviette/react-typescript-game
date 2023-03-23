import styles from './Keyboard.module.css';

// List of keys to display on screen
let KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// TS
type KeyboardProps = {
  activeLetters: string[];
  disabled?: boolean;
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

// React fxnl comp that is passed 3 props from parent comp that have TS properties specified above
export function Keyboard({
  activeLetters,
  disabled = false,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) {

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
        gap: '.5rem',
        fontFamily: 'monospace',

      }}
    > 

      {/* Determine how to style each key on screen depending on active/inactive status */}
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);

        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ''} ${isInactive ? styles.inactive : ''}`}
            disabled={isActive || isInactive || disabled}
            key={key}
          >
            {' '}
            {key}
          </button>
        );
      })}
    </div>
  );
}
