import React from 'react'

import check from '../../algorithms/checker'

const Check = ({stop, board}) => {
    const clickHandler = () => {
        if (check(board)) {
            stop();
            alert("Correct!")
        } else {
            alert("Incorrect")
        }
    }

    return (
        <button className="navbar_button--check" onClick={clickHandler}>Check solution</button>
    )
}

export default Check;