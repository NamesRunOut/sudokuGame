import React from 'react'

import Solver from '../../algorithms/sudokuSolver'

const Solve = ({stop, sudoku, setSolution}) => {

    const clickHandler = () =>  {
        stop();
        let response = Solver(sudoku);
        if(response!=='error') {
            setSolution(response);        
        }
        else alert("couldn't solve this board")
    }

    return (
        <button className="navbar_button--solve" onClick={clickHandler}>Solve</button>
    )
}

export default Solve;