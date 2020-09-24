import { useState, useEffect } from 'react';

const Timer = (time, setTimer, isActive) => {
  //const [time, setTimer] = useState(0);
  //const [isActive, setIsActive] = useState(true);
  /*const [intervalId, setIntervalId] = useState();
  useEffect(() => {
    const id = setInterval(handler, interval);
    setIntervalId(id);
    return () => clearInterval(id);
  }, []);*/

  /*function reset(){
    setTimer(0);
    setIsActive(false);
    console.log(time, isActive)
  }
  
  const start = () => {
    setIsActive(true);
  }
  
  const stop = () => {
    setIsActive(false);
  }*/
  

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer(time => time + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  //return {time, reset, start, stop}
  //return () => clearInterval(intervalId);
};

export default Timer