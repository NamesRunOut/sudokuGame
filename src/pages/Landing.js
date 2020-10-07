import React from 'react'

import '../css/main.css'

import Main from '../layout/Main'
import Navigation from '../layout/Navigation'

import {Sudoku, Solution} from '../hooks/Sudoku.js'

function Landing(){
  //  const {selected, setSelected, sudoku, setSudoku, board, setBoard} = Sudoku()
  //  const {solution, setSolution} = Solution()

    return(
        <Sudoku>
            <Solution>
                <Navigation />
                <Main />
            </Solution>
        </Sudoku>
    )
}

export default Landing