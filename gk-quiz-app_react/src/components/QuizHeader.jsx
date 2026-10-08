import ProgressBar from './ProgressBar';

/**
 * QuizHeader
 * The blue gradient header: question counter, progress bar and
 * the current question text.
 */
function QuizHeader({ questionNumber, total, questionText }) {
  return (
    <header className="quiz-header">
      <div className="quiz-header__top">
        <span className="quiz-header__counter">
          Question {questionNumber} of {total}
        </span>
        <ProgressBar current={questionNumber} total={total} />
      </div>
      <h1 className="quiz-header__question">{questionText}</h1>
    </header>
  );
}

export default QuizHeader;
