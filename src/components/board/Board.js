import React, {useState, useEffect} from 'react'

import sudoku from '../../hooks/Hooks.js'

const Board = () => {
const [current, setCurrent] = useState(null);
let i = 0;

const handleChange = (event) => {
    console.log(event.target)
    const {name} = event.target;
    if (name!=null && name!=undefined)
        setCurrent([name]);
    console.log(name, current)
}

const mapping = sudoku.map(data => data.map(
    element => element === 0 ? 
    <span onClick={handleChange} name={i++}></span> 
    : <span>{element}</span>))

  return(
        <div className="main_board"> 
            {mapping}
        </div>
  )
}

export default Board;