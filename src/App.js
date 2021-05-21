import React from "react";
// import './App.css'

const App = () => {
  const [time, setTime] = React.useState(775990);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);
  return (
    <div className="Timers">
      <h2>Stopwatch</h2>
      <div id="display">
        <p>{time}</p>
        <span>{("0" + Math.floor((time / 6000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 600) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time ) % 60)).slice(-2)}</span>
      </div>

      <div id="buttons">
        {!timerOn && time === 0 && (
          <button onClick={() => setTimerOn(true)}>Start</button>
        )}
        {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTimerOn(true)}>Resume</button>
        )}
      </div>
    </div>
  );
};

export default App;
