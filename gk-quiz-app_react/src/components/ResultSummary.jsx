import { RotateCcw, Award } from 'lucide-react';

/** Returns an encouraging message tuned to the score band. */
function getResultMessage(percentage) {
  if (percentage >= 90) return 'Excellent! Great job!';
  if (percentage >= 70) return 'Great work! Keep learning.';
  if (percentage >= 50) return 'Good attempt! You can do even better.';
  return "Don't worry — every expert started somewhere. Try again!";
}

/**
 * ResultSummary
 * The score card at the top of the results page: score, percentage,
 * a correct/incorrect breakdown, an encouraging message, and the
 * Restart Quiz action.
 */
function ResultSummary({ score, total, onRestart }) {
  const percentage = Math.round((score / total) * 100);
  const incorrect = total - score;

  return (
    <section className="result-summary">
      <span className="result-summary__icon">
        <Award size={30} aria-hidden="true" />
      </span>

      <h1 className="result-summary__title">Quiz Completed!</h1>

      <p className="result-summary__score-label">Your Score</p>
      <p className="result-summary__score">
        {score} <span>/ {total}</span>
      </p>
      <p className="result-summary__percentage">{percentage}%</p>

      <p className="result-summary__message">{getResultMessage(percentage)}</p>

      <div className="result-summary__breakdown">
        <div className="result-summary__stat result-summary__stat--correct">
          <span className="result-summary__stat-value">{score}</span>
          <span className="result-summary__stat-label">Correct</span>
        </div>
        <div className="result-summary__stat result-summary__stat--incorrect">
          <span className="result-summary__stat-value">{incorrect}</span>
          <span className="result-summary__stat-label">Incorrect</span>
        </div>
      </div>

      <button type="button" className="nav-button nav-button--submit" onClick={onRestart}>
        Restart Quiz
        <RotateCcw size={18} aria-hidden="true" />
      </button>
    </section>
  );
}

export default ResultSummary;
