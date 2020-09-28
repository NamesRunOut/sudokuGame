import React from 'react'

import Solver from '../../algorithms/sudokuSolver'
import Sudoku from '../../hooks/Sudoku.js'

const Solve = ({stop}) => {
    const {sudoku} = Sudoku()

    const clickHandler = () =>  {
        stop();
        if(Solver(sudoku)) console.log('ok')
        else alert("unable to solve this board")
    }

    return (
        <button className="navbar_button--solve" onClick={clickHandler}>Solve</button>
    )
}

export default Solve;