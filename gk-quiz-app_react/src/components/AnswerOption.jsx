import { Check, X } from 'lucide-react';

const LETTERS = ['A', 'B', 'C', 'D'];

/**
 * AnswerOption
 * One clickable answer card. `status` drives the visual state:
 * - "default"   → not yet answered, fully interactive
 * - "correct"   → this option was selected and is correct
 * - "incorrect" → this option was selected and is wrong
 * - "reveal"    → this wasn't selected, but is the correct answer
 *                 (shown after a wrong pick)
 * - "disabled"  → answered, this option is neither selected nor correct
 */
function AnswerOption({ index, text, status, onSelect }) {
  const letter = LETTERS[index];
  const isInteractive = status === 'default';

  return (
    <button
      type="button"
      className={`answer-option answer-option--${status}`}
      onClick={() => isInteractive && onSelect(index)}
      disabled={!isInteractive}
      aria-pressed={status === 'correct' || status === 'incorrect'}
    >
      <span className="answer-option__letter">{letter}</span>

      <span className="answer-option__body">
        <span className="answer-option__text">{text}</span>

        {status === 'correct' && (
          <span className="answer-option__icon answer-option__icon--correct">
            <Check size={16} strokeWidth={3} aria-hidden="true" />
            <span className="sr-only">Correct answer</span>
          </span>
        )}
        {status === 'incorrect' && (
          <span className="answer-option__icon answer-option__icon--incorrect">
            <X size={16} strokeWidth={3} aria-hidden="true" />
            <span className="sr-only">Incorrect answer</span>
          </span>
        )}
        {status === 'reveal' && (
          <span className="answer-option__icon answer-option__icon--correct">
            <Check size={16} strokeWidth={3} aria-hidden="true" />
            <span className="sr-only">This was the correct answer</span>
          </span>
        )}
      </span>
    </button>
  );
}

export default AnswerOption;
