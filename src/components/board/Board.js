import React, {useState, useEffect} from 'react'

import sudoku from '../../hooks/Sudoku.js'

const Board = () => {
const [selected, setSelected] = useState(null);
const [board, setBoard] = useState(null)
let i = 0;

const handleChange = (event) => {
    const {name} = event.target;
    if (name!=null && name!=undefined) {
        event.target.style={"background": "black"}
        setSelected(name);
    }
    console.log(name)
}

useEffect(() => {
    // smh after render, check for win conditions?
    let tmp = board
    tmp===null ? tmp=["0"] : tmp.push(selected)
    setBoard(tmp)
    console.log(board, selected)
  }, [selected]);

const mapping = sudoku.map(data => data.map(
    element => 
        element === 0 ? 
        <input onClick={handleChange} name={i++} />
        : <span>{element}</span>
    ))

  return(
        <div className="main_board"> 
            {mapping}
        </div>
  )
}

export default Board;