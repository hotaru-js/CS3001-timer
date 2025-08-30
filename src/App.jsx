import { useState, useEffect } from "react";
import TimeSetter from "./components/SetTimer";
import TimerDisplay from "./components/DisplayTimer";
import ButtonControl from "./components/ButtonControls";
import "./index.css";

export default function App() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Countdown Implementation
  useEffect(() => {
    let timer = null;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => Math.max(0, prev - 1));
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      alert("Timer has run out!");
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleSetTime = (minutes, seconds) => {
    setTimeLeft(minutes * 60 + seconds);
  };

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => setTimeLeft(0);

  return (
    <div className="app-root">
      <header className="app-header">
        <h1 className="title">Countdown Timer</h1>
      </header>

      <main className="card">
        <TimerDisplay timeLeft={timeLeft} />
        <TimeSetter onSetTime={handleSetTime} />
        <ButtonControl
          isRunning={isRunning}
          onStart={handleStart}
          onStop={handleStop}
          onReset={handleReset}
        />
      </main>
    </div>
  );
}
