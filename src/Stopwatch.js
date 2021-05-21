import React from 'react';
import './Stopwatch.css';

const Stopwatch = () => {
  const [ time, setTime ] = React.useState(0);
  const [ timerOn, setTimerOn ] = React.useState(false);
  const [ pauseOn, setPauseOn ] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if ( timerOn ) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if ( !timerOn ) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [ timerOn ]);

  return (
    <div className="Stopwatch">
      <h2>Stopwatch</h2>
      <div>
        <span>{ ( '0' + Math.floor(time / 3600)).slice(-2) }:</span>
        <span>{ ( '0' + Math.floor(time % 3600 / 60) ).slice(-2) }:</span>
        <span>{ ( '0' + Math.floor(time % 3600 % 60) ).slice(-2) }</span>
      </div>

      <div>

        { !timerOn && time===0 &&
        ( <button onClick={ () =>
          setTimerOn(true) }>
          Start
        </button> ) }

        { pauseOn &&
        ( <button onClick={ () => {
          setTimerOn(true);
          setPauseOn(!pauseOn);
        } }>
          Start
        </button> ) }

        { timerOn && (
          <button onClick={ () => {
            setTime(0);
            setTimerOn(false);
          } }>
            Stop
          </button> ) }

        { timerOn &&
        ( <button onDoubleClick={ () => {
          setPauseOn(!pauseOn);
          setTimerOn(false);
        } }>
          Wait
        </button> ) }

        { ( pauseOn || timerOn ) &&
        ( <button onClick={ () => {
          setTime(0);
          setTimerOn(true);
          setPauseOn(false);
        } }>
          Reset
        </button> ) }

      </div>
    </div>
  );
};

export default Stopwatch;
