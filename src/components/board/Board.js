import React, {useEffect} from 'react'

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

const solutionItem = (delay) => {
    const item = {
        hidden: {
            y: -100, opacity: 0
        },
        visible: {
            y:0, opacity: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: delay
            }
        }
    }
    return item;
}

const Board = ({selected, setSelected, sudoku, board, setBoard, solution}) => {
//const {selected, setSelected, sudoku, board, setBoard} = Sudoku()
let i = 0;

const handleClick = (event) => {
    const {name} = event.target;
    if (document.getElementsByName(selected)[0]!==undefined && document.getElementsByName(selected)[0].name===name) {
        setSelected(null);
        document.getElementsByName(selected)[0].className="main_board--input";
        return;
    }
    if (document.getElementsByName(selected)[0]!==undefined) document.getElementsByName(selected)[0].className="main_board--input";
    setSelected(name);
    event.target.className="main_board--input-selected"
}

const handleChange = (event) => {
    const {name, value} = event.target;
    if (name!==null && name!==undefined) {
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
            return <input 
                readOnly // TODO replace with something that prevents keyboard popup on mobile
                onChange={handleChange} 
                onClick={handleClick} 
                className="main_board--input" 
                name={i-1} 
                key={i-1} 
                value={board[i-1] === 0 ? '' : board[i-1]} />
        }
        else return <motion.span 
                        variants={item} 
                        className="main_board--disabled" 
                        name={i-1} 
                        key={i-1}>
                            {element}
                    </motion.span>
    }
)
: solution.map(
    element => {
        i++;
        if (sudoku[i-1] === 0) {
            return <motion.input 
                        readOnly
                        variants={solutionItem(i/110)} 
                        onChange={handleChange} 
                        onClick={handleClick} 
                        className="main_board--input" 
                        name={i-1} 
                        key={i-1} 
                        value={element} />
        }
        else return <span 
                        className="main_board--disabled" 
                        name={i-1} 
                        key={i-1}>
                            {element}
                    </span>
    }
)

useEffect(() => {
    // smh after render
    // TODO fix win cons
    // TODO manifest icon prettier on mobile
    // TODO remove active orange borders on inputs
    if (check(board)) alert("Congratulations!")
  }, [selected, board]);

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