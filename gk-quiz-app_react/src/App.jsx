import { useMemo, useState } from 'react';
import { questions } from './data/questions';
import QuestionCard from './components/QuestionCard';
import ResultSummary from './components/ResultSummary';
import QuestionReview from './components/QuestionReview';

const TOTAL = questions.length;

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(() => Array(TOTAL).fill(null));
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = questions[currentIndex];
  const userAnswer = answers[currentIndex];

  const score = useMemo(
    () => answers.filter((answer, i) => answer === questions[i].correctIndex).length,
    [answers]
  );

  const handleSelect = (optionIndex) => {
    // Once an answer is saved for this question, further clicks are ignored —
    // AnswerOption also disables itself, this is a second guard against
    // stale closures or fast double-clicks.
    if (answers[currentIndex] !== null) return;

    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = optionIndex;
      return next;
    });
  };

  const handleNext = () => {
    if (currentIndex === TOTAL - 1) {
      setIsCompleted(true);
      return;
    }
    setCurrentIndex((i) => i + 1);
  };

  const handleRestart = () => {
    setAnswers(Array(TOTAL).fill(null));
    setCurrentIndex(0);
    setIsCompleted(false);
  };

  return (
    <div className="app">
      <div className="app__inner">
        <p className="app__eyebrow">Front-End Developer Portfolio</p>
        <h2 className="app__title">General Knowledge Quiz</h2>

        {isCompleted ? (
          <div className="results fade-in-up">
            <ResultSummary score={score} total={TOTAL} onRestart={handleRestart} />

            <div className="results__review">
              <h2 className="results__review-heading">Question Review</h2>
              {questions.map((question, index) => (
                <QuestionReview
                  key={question.id}
                  index={index}
                  question={question}
                  userAnswer={answers[index]}
                />
              ))}
            </div>
          </div>
        ) : (
          <QuestionCard
            key={currentQuestion.id}
            question={currentQuestion}
            questionNumber={currentIndex + 1}
            total={TOTAL}
            userAnswer={userAnswer}
            onSelect={handleSelect}
            onNext={handleNext}
          />
        )}
      </div>
    </div>
  );
}

export default App;
