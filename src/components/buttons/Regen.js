import React from 'react'

import Generator from '../../algorithms/sudokuGenerator'

const Regen = ({reset, start, setSudoku, setBoard, setSolution}) => {
    const clickHandler = () => {
        reset();
        const newBoard = Generator();
        //console.log("new", [...newBoard])
        setSolution(null);
        setSudoku([...newBoard]);
        setBoard([...newBoard]);
        start();
    }

    return (
        <button className="navbar_button--regen" onClick={clickHandler}>Generate</button>
    )
}

export default Regen;