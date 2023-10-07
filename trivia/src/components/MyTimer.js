import React from "react";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="timer">
      <p>Time Yourself:</p>
      <div className="clock">
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <div className="timerButtons">
        <button
          className="timerButton"
          onClick={() => {
            // Restarts to 5 minutes timer
            const time = new Date();
            time.setSeconds(time.getSeconds() + 600);
            restart(time);
          }}
        >
          Start
        </button>
        <button className="timerButton" onClick={pause}>
          Pause
        </button>
        <button className="timerButton" onClick={resume}>
          Resume
        </button>
        <button
          className="timerButton"
          onClick={() => {
            // Restarts to 5 minutes timer
            const time = new Date();
            time.setSeconds(time.getSeconds() + 600);
            restart(time);
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export { MyTimer };
