import React from 'react'

import Solver from '../../algorithms/sudokuSolver'
import {Sudoku} from '../../hooks/Sudoku.js'

const Solve = ({stop, sudoku, setSolution}) => {

    const clickHandler = () =>  {
        stop();
        //console.log("current", sudoku)
        let response = Solver(sudoku);
        if(response!=='error') {
            //console.log('ok')
            setSolution(response)
        }
        else alert("couldn't solve this board")
    }

    return (
        <button className="navbar_button--solve" onClick={clickHandler}>Solve</button>
    )
}

export default Solve;