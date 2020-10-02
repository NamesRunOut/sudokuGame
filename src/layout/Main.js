import React from 'react'

import Board from '../components/board/Board'
import Numpad from '../components/board/Numpad'

import Clear from '../components/buttons/Clear'

const Main = (props) => {
    //console.log('main rendered')
    return (
        <>
            <div className="main_area">
                <Board 
                    solution={props.solution}
                    selected={props.selected}
                    setSelected={props.setSelected}
                    sudoku={props.sudoku}
                    board={props.board}
                    setBoard={props.setBoard}
                    />
                <Numpad
                    setBoard={props.setBoard}
                    board={props.board}
                    selected={props.selected}
                />
                <Clear />
            </div> 
        </>     
    )
}

export default Main;