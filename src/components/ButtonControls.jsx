// Component for timer button controls
export default function ButtonControl({ isRunning, onStart, onStop, onReset }) {
  return (
    <div className="controls" role="group" aria-label="Timer controls">
      {!isRunning ? (
        <button className="btn btn-primary" onClick={onStart}>
          Start
        </button>
      ) : (
        <button className="btn btn-stop" onClick={onStop}>
          Stop
        </button>
      )}
      <button className="btn btn-ghost" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
