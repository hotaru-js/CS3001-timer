// Component to set timer
import { useState } from "react";

export default function TimeSetter({ onSetTime }) {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSetTime(Number(minutes), Number(seconds));
  };

  return (
    <form onSubmit={handleSubmit} className="time-setter" aria-label="Set time">
      <div className="time-field">
        <label htmlFor="minutes-input">Minutes</label>
        <input
          id="minutes-input"
          type="number"
          min="0"
          placeholder="Minutes"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          aria-label="Minutes"
        />
      </div>
      <div className="time-field">
        <label htmlFor="seconds-input">Seconds</label>
        <input
          id="seconds-input"
          type="number"
          min="0"
          placeholder="Seconds"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
          aria-label="Seconds"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Set
      </button>
    </form>
  );
}
