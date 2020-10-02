import React, {useState} from 'react'

//import '../sass/main.css'
import '../css/main.css'

import Navbar from '../layout/Navbar'
import Main from '../layout/Main'

import Timer from '../hooks/Timer'
import {Sudoku, Solution} from '../hooks/Sudoku.js'

function Landing(){
   // const {time, reset, start, stop} = Timer()
    const [time, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(true);
    Timer(time, setTimer, isActive)

    const {selected, setSelected, sudoku, setSudoku, board, setBoard} = Sudoku()

    const {solution, setSolution} = Solution()

    // TODO have is so everything doesnt re render every time a timer ticks
    // TODO local storage to save current game progres
    const reset = () => {
        setTimer(0);
        setIsActive(false);
    }

    const start = () => {
        setIsActive(true);
    }

    const stop = () => {
        setIsActive(false);
    }

    return(
        <>
            <Navbar 
                stop={stop} 
                start={start}
                reset={reset}
                sudoku={sudoku}
                setSolution={setSolution}
                setBoard={setBoard}
                setSudoku={setSudoku}
                />
            <Main
                time={time}
                solution={solution}
                selected={selected}
                setSelected={setSelected}
                sudoku={sudoku}
                setSudoku={setSudoku}
                board={board}
                setBoard={setBoard}
                stop={stop}
                />
        </>
    )
}

export default Landing