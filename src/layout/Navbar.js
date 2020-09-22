import React from 'react'

import Contact from '../components/buttons/Contact'
import Regen from '../components/buttons/Regen'
import Solve from '../components/buttons/Solve'

const Navbar = () => {
    return (
        <div className="navbar">
            <Regen />
            <Solve />
            <Contact className="navbar_contact" aclass="navbar_button--contact" />
        </div>
    )
}

export default Navbar;