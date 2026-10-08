import { Check, X } from 'lucide-react';

const LETTERS = ['A', 'B', 'C', 'D'];

/**
 * QuestionReview
 * One row in the post-quiz review: the question, what the user
 * answered, the correct answer, and a correct/incorrect status.
 */
function QuestionReview({ index, question, userAnswer }) {
  const isCorrect = userAnswer === question.correctIndex;
  const userAnswerText =
    userAnswer !== null ? `${LETTERS[userAnswer]}. ${question.options[userAnswer]}` : 'Not answered';
  const correctAnswerText = `${LETTERS[question.correctIndex]}. ${
    question.options[question.correctIndex]
  }`;

  return (
    <article
      className={`question-review ${
        isCorrect ? 'question-review--correct' : 'question-review--incorrect'
      }`}
    >
      <div className="question-review__header">
        <span className="question-review__number">Question {index + 1}</span>
        <span
          className={`question-review__status ${
            isCorrect ? 'question-review__status--correct' : 'question-review__status--incorrect'
          }`}
        >
          {isCorrect ? (
            <>
              <Check size={14} strokeWidth={2.5} aria-hidden="true" /> Correct
            </>
          ) : (
            <>
              <X size={14} strokeWidth={2.5} aria-hidden="true" /> Incorrect
            </>
          )}
        </span>
      </div>

      <p className="question-review__text">{question.question}</p>

      <div className="question-review__answers">
        <p>
          <span className="question-review__label">Your Answer</span>
          <span
            className={
              isCorrect
                ? 'question-review__value question-review__value--correct'
                : 'question-review__value question-review__value--incorrect'
            }
          >
            {userAnswerText}
          </span>
        </p>
        {!isCorrect && (
          <p>
            <span className="question-review__label">Correct Answer</span>
            <span className="question-review__value question-review__value--correct">
              {correctAnswerText}
            </span>
          </p>
        )}
      </div>
    </article>
  );
}

export default QuestionReview;
