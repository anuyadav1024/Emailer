import QuizHeader from './QuizHeader';
import AnswerOption from './AnswerOption';
import NavigationButton from './NavigationButton';

const LETTERS = ['A', 'B', 'C', 'D'];

/** Resolves the visual status of a single option given the user's pick. */
function getOptionStatus(optionIndex, userAnswer, correctIndex) {
  if (userAnswer === null) return 'default';
  if (optionIndex === userAnswer && optionIndex === correctIndex) return 'correct';
  if (optionIndex === userAnswer && optionIndex !== correctIndex) return 'incorrect';
  if (optionIndex === correctIndex && userAnswer !== correctIndex) return 'reveal';
  return 'disabled';
}

/**
 * QuestionCard
 * Composes the header, the 2x2 answer grid, an inline feedback
 * message once answered, and the Next/Submit button for a single
 * question. Remounted with a `key` on the question id by the parent
 * so its entrance animation replays for every new question.
 */
function QuestionCard({
  question,
  questionNumber,
  total,
  userAnswer,
  onSelect,
  onNext,
}) {
  const isAnswered = userAnswer !== null;
  const isCorrect = userAnswer === question.correctIndex;
  const isLast = questionNumber === total;

  return (
    <section className="question-card" aria-live="polite">
      <QuizHeader
        questionNumber={questionNumber}
        total={total}
        questionText={question.question}
      />

      <div className="question-card__body">
        <div className="answer-grid">
          {question.options.map((text, index) => (
            <AnswerOption
              key={index}
              index={index}
              text={text}
              status={getOptionStatus(index, userAnswer, question.correctIndex)}
              onSelect={onSelect}
            />
          ))}
        </div>

        {isAnswered && (
          <div
            className={`feedback-banner ${
              isCorrect ? 'feedback-banner--correct' : 'feedback-banner--incorrect'
            }`}
          >
            {isCorrect ? (
              <p>✓ Correct Answer</p>
            ) : (
              <p>
                ✕ Incorrect &nbsp;—&nbsp; Correct Answer:{' '}
                <strong>
                  {LETTERS[question.correctIndex]}. {question.options[question.correctIndex]}
                </strong>
              </p>
            )}
          </div>
        )}

        <div className="question-card__footer">
          <NavigationButton isLast={isLast} disabled={!isAnswered} onClick={onNext} />
        </div>
      </div>
    </section>
  );
}

export default QuestionCard;
