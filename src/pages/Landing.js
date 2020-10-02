import React from 'react'

import '../css/main.css'

import Main from '../layout/Main'
import Navigation from '../layout/Navigation'

import {Sudoku, Solution} from '../hooks/Sudoku.js'

function Landing(){
    const {selected, setSelected, sudoku, setSudoku, board, setBoard} = Sudoku()
    const {solution, setSolution} = Solution()

    // TODO context?
    // TODO local storage to save current game progres

    return(
        <>
            <Navigation
                sudoku={sudoku}
                setSolution={setSolution}
                setBoard={setBoard}
                setSudoku={setSudoku}
                board={board}
                />
            <Main
                solution={solution}
                selected={selected}
                setSelected={setSelected}
                sudoku={sudoku}
                setSudoku={setSudoku}
                board={board}
                setBoard={setBoard}
                />
        </>
    )
}

export default Landing