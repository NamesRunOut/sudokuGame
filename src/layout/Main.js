import React from 'react'

import Timer from '../components/board/Timer'
import Board from '../components/board/Board'
import Numpad from '../components/board/Numpad'

const Main = (props) => {
    return (
        <div className="main">
            <div className="main_timer">
                <Timer time={props.time} />
            </div>

            <div className="main_area">
                <Board />
                <Numpad />
            </div>       
        </div>
    )
}

export default Main;