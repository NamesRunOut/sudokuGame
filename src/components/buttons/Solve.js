import React from 'react'

import {useTimer} from '../../hooks/Hooks'

const Solve = () => {

    return (
        <button className="navbar_button--solve" onClick={useTimer}>Solve</button>
    )
}

export default Solve;