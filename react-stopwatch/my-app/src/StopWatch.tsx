import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import './StopWatch.css';

export function StopWatch() {
  const [elapsedSecs, setElapsedSecs] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  function startTimer() {
    if (!intervalId) {
      const id = setInterval(() => {
        setElapsedSecs((prevElapsedSecs) => prevElapsedSecs + 1);
      }, 1000);
      setIntervalId(id);
    }
  }

  function pauseTimer() {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }

  function resetTimer() {
    if (!intervalId) {
      setElapsedSecs(0);
    }
  }

  function handlePlayClick() {
    startTimer();
  }

  function handlePauseClick() {
    pauseTimer();
  }

  function handleStopwatchClick() {
    resetTimer();
  }

  return (
    <div className="stopwatch">
      <div className="watch-face" onClick={handleStopwatchClick}>
        <span>{elapsedSecs}</span>
      </div>
      {intervalId ? (
        <FaPause
          size="2rem"
          className="start-stop"
          onClick={handlePauseClick}
        />
      ) : (
        <FaPlay size="2rem" className="start-stop" onClick={handlePlayClick} />
      )}
    </div>
  );
}
