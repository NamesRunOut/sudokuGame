import React from 'react'

const Regen = ({resetTime, startTime}) => {

    const clickHandler = () => {
        resetTime();
        startTime();
    }

    return (
        <button className="navbar_button--regen" onClick={clickHandler}>Generate</button>
    )
}

export default Regen;