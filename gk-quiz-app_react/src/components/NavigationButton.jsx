import { ArrowRight, CheckCircle2 } from 'lucide-react';

/**
 * NavigationButton
 * The single call-to-action at the bottom of a question:
 * "Next Question" for questions 1–9, "Submit Quiz" for question 10.
 */
function NavigationButton({ isLast, disabled, onClick }) {
  return (
    <button
      type="button"
      className={`nav-button ${isLast ? 'nav-button--submit' : ''}`}
      disabled={disabled}
      onClick={onClick}
    >
      {isLast ? (
        <>
          Submit Quiz
          <CheckCircle2 size={18} aria-hidden="true" />
        </>
      ) : (
        <>
          Next Question
          <ArrowRight size={18} aria-hidden="true" />
        </>
      )}
    </button>
  );
}

export default NavigationButton;
