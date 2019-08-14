import React, { useEffect, useState, useRef } from "react";
import CountdownClock from "./CountdownClock";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function Countdown() {
  const initDateTime = useRef(Date.now()); // since we don't need to change this value, we can use a ref
  const [countdownDuration, setCountdownDuration] = useState(
    initDateTime.current + 123456789 // Random number choosen for this
  );

  const [isRunning, setIsRunning] = useState(true);

  useInterval(
    () => {
      setCountdownDuration(countdownDuration - 1000);
    },
    isRunning ? 1000 : null
  );

  useInterval(() => {
    if (countdownDuration < 1000) {
      setIsRunning(false);
    }
  }, 1000);

  function handleChangeCountdown() {
    setIsRunning(!isRunning);
  }

  return (
    <div>
      <h1>Learning React Hooks</h1>
      <CountdownClock
        countdownDuration={countdownDuration}
        initDateTime={initDateTime.current}
      />
      {countdownDuration < 1000 && <h2>Countdown Reached!</h2>}
      <button onClick={handleChangeCountdown}>
        {isRunning ? "Pause Countdown" : "Continue Countdown"}
      </button>
    </div>
  );
}

export default Countdown;
