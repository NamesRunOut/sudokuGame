import React, {useState, useEffect} from 'react'

import '../css/main.css'

import Navbar from '../layout/Navbar'
import Main from '../layout/Main'

import Timer from '../hooks/Timer'

function Landing(){
   // const {time, reset, start, stop} = Timer()
    const [time, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(true);
    Timer(time, setTimer, isActive)

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
        <div>
            <Navbar 
                stop={stop} 
                start={start}
                reset={reset}
                />
            <Main
                time={time} />
        </div>
    )
}

export default Landing