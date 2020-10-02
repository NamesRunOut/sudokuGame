import React, {useEffect} from 'react'

import Navbar from '../layout/Navbar'
import Timer from '../components/board/Timer'

import TimerHook from '../hooks/Timer'

function Navigation(props){
    const {time, start, stop, reset} = TimerHook()

    useEffect(() => {
        localStorage.setItem('time', time)
      }, [time]);

    return(
        <div className="main">
            <Navbar 
                stop={stop} 
                start={start}
                reset={reset}
                sudoku={props.sudoku}
                setSolution={props.setSolution}
                setBoard={props.setBoard}
                setSudoku={props.setSudoku}
                board={props.board}
                solution={props.solution}
                />   
            <div className="main_timer">
                <Timer 
                    time={time} 
                    />
            </div>
        </div>
    )
}

export default Navigation