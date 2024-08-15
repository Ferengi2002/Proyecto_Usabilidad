import React, { useEffect, useState } from 'react';
import '../styles/Timer.css'


const Timer = ({ isGameFinished, onGameFinish }) => {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });

  useEffect(() => {
    if (!isGameFinished) {
      const timer = setInterval(() => {
        setTime(prevTime => {
          if (prevTime.seconds === 59) {
            return { minutes: prevTime.minutes + 1, seconds: 0 };
          }
          return { ...prevTime, seconds: prevTime.seconds + 1 };
        });
      }, 1000);

      return () => clearInterval(timer);
    } else if (isGameFinished && onGameFinish) {
      onGameFinish(time);
    }
  }, [isGameFinished, onGameFinish, time]);

  const formatTime = (time) => time < 10 ? `0${time}` : time;

  return (
    <div>
    <h3 tabindex="0">Tiempo:</h3>
    <h3 className='text-timer' tabindex="0">
      {formatTime(time.minutes)}:{formatTime(time.seconds)}
    </h3>
  </div>
  );
};

export default Timer;