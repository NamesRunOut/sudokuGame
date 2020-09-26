import React from 'react'
import Sudoku from '../../hooks/Sudoku.js'

const Timer = () => {
  const {selected, board, setBoard} = Sudoku()

  return(
    <div className="main_numpad">
            <span onClick={handleClick}>1</span>
            <span onClick={handleClick}>2</span>
            <span onClick={handleClick}>3</span>
            <span onClick={handleClick}>4</span>
            <span onClick={handleClick}>5</span>
            <span onClick={handleClick}>6</span>
            <span onClick={handleClick}>7</span>
            <span onClick={handleClick}>8</span>
            <span onClick={handleClick}>9</span>
    </div>
  )
}

export default Timer;