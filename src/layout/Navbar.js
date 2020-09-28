import React from 'react'

import Contact from '../components/buttons/Contact'
import Regen from '../components/buttons/Regen'
import Solve from '../components/buttons/Solve'

const Navbar = (props) => {
    console.log('navbar rendered')
    return (
        <div className="navbar">
            <Regen
                start={props.start}
                reset={props.reset}
                setBoard={props.setBoard}
                setSudoku={props.setSudoku}
                setSolution={props.setSolution}
                />
            <Solve
                stop={props.stop}
                setSolution={props.setSolution}
                />
            <Contact className="navbar_contact" aclass="navbar_button--contact" />
        </div>
    )
}

export default Navbar;