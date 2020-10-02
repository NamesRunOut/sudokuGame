import React from 'react'

import Contact from '../components/buttons/Contact'
import Regen from '../components/buttons/Regen'
import Solve from '../components/buttons/Solve'
import Check from '../components/buttons/Check'

const Navbar = (props) => {
    //console.log('navbar rendered')
    
    return (
        <div className="navbar">
            <div className="navbar_actions">
            <Check 
                stop={props.stop}
                board={props.board}
                />
            <Regen
                start={props.start}
                reset={props.reset}
                setBoard={props.setBoard}
                setSudoku={props.setSudoku}
                setSolution={props.setSolution}
                />
            <Solve
                stop={props.stop}
                sudoku={props.sudoku}
                setSolution={props.setSolution}
                />
            </div>
            <Contact className="navbar_contact" aclass="navbar_button--contact" />
        </div>
    )
}

export default Navbar;