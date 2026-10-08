/**
 * ProgressBar
 * Shows how far through the quiz the user is, as both a fill bar
 * and a percentage, and updates whenever `current` changes.
 */
function ProgressBar({ current, total }) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="progress-bar" role="group" aria-label="Quiz progress">
      <div
        className="progress-bar__track"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="progress-bar__fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="progress-bar__label">{percentage}%</span>
    </div>
  );
}

export default ProgressBar;
