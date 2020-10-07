import React from 'react'

import Board from '../components/board/Board'
import Numpad from '../components/board/Numpad'

import Clear from '../components/buttons/Clear'

const Main = (props) => {
    //console.log('main rendered')

    return (
        <>
            <div className="main_area">
                <Board />
                <Numpad />
                <Clear />
            </div> 
        </>     
    )
}

export default Main;