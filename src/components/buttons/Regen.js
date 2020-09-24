import React from 'react'

const Regen = ({reset, start}) => {

    const clickHandler = () => {
        reset();
        start();
    }

    return (
        <button className="navbar_button--regen" onClick={clickHandler}>Generate</button>
    )
}

export default Regen;