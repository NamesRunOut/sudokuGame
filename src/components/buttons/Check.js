import React from 'react'

import check from '../../algorithms/checker'

const Check = ({stop, board, solution}) => {
    const clickHandler = () => {
        if (solution!=null) {
            if (check(solution)) {
                stop();
                alert("Little hamsters solved the board correctly")
            } else {
                alert("Error in the solving program. The board is solved incorrectly")
            }
        } else if (check(board)) {
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