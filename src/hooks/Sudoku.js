import {useState} from 'react'

const Sudoku = () => {
const [selected, setSelected] = useState(null);

const [sudoku, setSudoku] = useState(
  localStorage.getItem('sudoku')===null ? [
    0,0,1,9,8,4,7,6,0,
    6,0,0,0,5,7,0,0,0,
    8,0,7,0,1,0,0,0,0,
    9,6,0,3,0,8,1,0,5,
    1,8,5,0,2,0,0,7,3,
    3,0,0,0,0,0,2,0,8,
    2,1,0,0,0,0,0,3,6,
    0,0,0,1,0,0,0,0,4,
    0,9,6,0,0,2,5,1,0] : localStorage.getItem('sudoku').split(",").map(Number));

const [board, setBoard] = useState(
  localStorage.getItem('board')===null? [
    0,0,1,9,8,4,7,6,0,
    6,0,0,0,5,7,0,0,0,
    8,0,7,0,1,0,0,0,0,
    9,6,0,3,0,8,1,0,5,
    1,8,5,0,2,0,0,7,3,
    3,0,0,0,0,0,2,0,8,
    2,1,0,0,0,0,0,3,6,
    0,0,0,1,0,0,0,0,4,
    0,9,6,0,0,2,5,1,0] : localStorage.getItem('board').split(",").map(Number));

  return {selected, setSelected, sudoku, setSudoku, board, setBoard}
}

const Solution = () => {
    const [solution, setSolution] = useState(null);

    return {solution, setSolution}
}

export {Sudoku, Solution}