import React, {useState, useEffect} from 'react'

import {Sudoku} from '../../hooks/Sudoku.js'
import check from '../../algorithms/checker.js'

import { motion } from "framer-motion"

// timer functs in timer, otherwise whole other components update

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
}
   
const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
}

const solutionItem = {
    hidden: {
        x: -20, opacity: 0
    },
    visible: {
        x:0, opacity: 1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20
          }
    }
}

const Board = ({selected, setSelected, sudoku, board, setBoard, solution}) => {
//const [selected, setSelected] = useState(null);
//const {selected, setSelected, sudoku, board, setBoard} = Sudoku()
let i = 0;

const handleClick = (event) => {
    const {name} = event.target;
    if (document.getElementsByName(selected)[0]!=undefined && document.getElementsByName(selected)[0].name===name) {
        setSelected(null);
        document.getElementsByName(selected)[0].className="main_board--input";
        return;
    }
    if (document.getElementsByName(selected)[0]!=undefined) document.getElementsByName(selected)[0].className="main_board--input";
    setSelected(name);
    event.target.className="main_board--input-selected"
}

const handleChange = (event) => {
    const {name, value} = event.target;
    if (name!=null && name!=undefined) {
        let tmp = board;
        tmp[name] = parseInt(value%10, 10);
        setBoard(tmp);
    }
}

const mapping = solution===null ?
board.map(
    element => {
        i++;
        if (element === 0 || sudoku[i-1] === 0) {
            return <input onChange={handleChange} onClick={handleClick} className="main_board--input" name={i-1} key={i-1} value={board[i-1] === 0 ? '' : board[i-1]} />
        }
        else return <motion.span variants={item} className="main_board--disabled" name={i-1} key={i-1}>{element}</motion.span>
    }
)
: solution.map(
    element => {
        i++;
        if (sudoku[i-1] === 0) {
            return <motion.input variants={solutionItem} onChange={handleChange} onClick={handleClick} className="main_board--input" name={i-1} key={i-1} value={element} />
        }
        else return <span className="main_board--disabled" name={i-1} key={i-1}>{element}</span>
    }
)

useEffect(() => {
    // smh after render, check for win conditions
    if (check(board)) alert("Congratulations!")
    //console.log(board, sudoku)
  }, [selected]);

  return(
        <motion.div 
            variants={container}
            initial="hidden"
            animate="visible"
            className="main_board"> 
                {mapping}
        </motion.div>
  )
}

export default Board;