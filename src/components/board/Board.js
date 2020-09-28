import React, {useState, useEffect} from 'react'

import Sudoku from '../../hooks/Sudoku.js'

// timer functs in timer, otherwise whole other components update

const Board = () => {
//const [selected, setSelected] = useState(null);
const {selected, setSelected, sudoku, board, setBoard} = Sudoku()
let i = 0;

const handleClick = (event) => {
    const {name} = event.target;
    if (document.getElementsByName(selected)[0]!=undefined) document.getElementsByName(selected)[0].className="";
    setSelected(name);
    event.target.className="main_board--selected"
}

const handleChange = (event) => {
    const {name, value} = event.target;
    if (name!=null && name!=undefined) {
        let tmp = board;
        tmp[name] = parseInt(value, 10);
        setBoard(tmp);
    }
}

const mapping = sudoku.map(
    element => {
        i++
        if (element === 0) {
            return <input onChange={handleChange} onClick={handleClick} name={i-1} />
        }
        else return <span>{element}</span>
    }
)

useEffect(() => {
    // smh after render, check for win conditions?
    // using numpad doest save to board
    console.log(board, selected)
  }, [selected]);

  return(
        <div className="main_board"> 
            {mapping}
        </div>
  )
}

export default Board;