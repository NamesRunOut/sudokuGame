import React from 'react'

import Generator from '../../algorithms/sudokuGenerator'

const Regen = ({reset, start, setSudoku, setBoard, setSolution}) => {

    const clickHandler = () => {
        reset();
        setSolution(null)
        console.log(Generator())
        setSudoku([
                     5,0,1,9,8,4,7,6,0,
                     6,0,0,0,5,7,0,0,0,
                     8,0,7,0,1,0,0,0,0,
                     9,6,0,3,0,8,1,0,5,
                     1,8,5,0,2,0,0,7,3,
                     3,0,0,0,0,0,2,0,8,
                     2,1,0,0,0,0,0,3,6,
                     0,0,0,1,0,0,0,0,4,
                     0,9,6,0,0,2,5,1,0]);
        setBoard([
                                     5,0,1,9,8,4,7,6,0,
                                     6,0,0,0,5,7,0,0,0,
                                     8,0,7,0,1,0,0,0,0,
                                     9,6,0,3,0,8,1,0,5,
                                     1,8,5,0,2,0,0,7,3,
                                     3,0,0,0,0,0,2,0,8,
                                     2,1,0,0,0,0,0,3,6,
                                     0,0,0,1,0,0,0,0,4,
                                     0,9,6,0,0,2,5,1,0]);
        start();
    }

    return (
        <button className="navbar_button--regen" onClick={clickHandler}>Generate</button>
    )
}

export default Regen;