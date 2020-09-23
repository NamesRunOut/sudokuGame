import React, {useState, useEffect} from 'react'

const state = {
    loading: false,
    userSolving: true,
    machineSolving: false
}

let sudoku = [
    [0,0,1,9,8,4,7,6,0],
    [6,0,0,0,5,7,0,0,0],
    [8,0,7,0,1,0,0,0,0],
    [9,6,0,3,0,8,1,0,5],
    [1,8,5,0,2,0,0,7,3],
    [3,0,0,0,0,0,2,0,8],
    [2,1,0,0,0,0,0,3,6],
    [0,0,0,1,0,0,0,0,4],
    [0,9,6,0,0,2,5,1,0]];
/*
const manageState = () => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(false);
    const [machine, setMachine] = useState(false);

    useEffect(() => {

    })
}*/

const useTimer = () => {
    const [timer, setTimer] = useState({minutes: 0, seconds: 0});
    let interval;
    console.log(1)

    const handleClick = () => {
        console.log(2)
        clearInterval(interval)
        setTimer({minutes: 0, seconds: 0})
    }

    useEffect(() => {
        return interval = setInterval(() => {
            let s = timer.seconds;
            let m = timer.minutes;
            s++;
            if (s>=60) {
                m++; s=0;
            }
            setTimer({minutes: m, seconds: s});
        }, 1000);
      }, []);
    return {timer}
  }
export default sudoku
  module.exports = {
      sudoku: sudoku,
      useTimer: useTimer
  }