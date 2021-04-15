import React from 'react'

import Board from '../components/board/Board'
import Numpad from '../components/board/Numpad'

import Clear from '../components/buttons/Clear'

const Main = () => {
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