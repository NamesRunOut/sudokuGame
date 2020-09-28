import React from 'react'

const Numpad = ({selected, board, setBoard}) => {

  const handleClick = (val) => {
    if (document.querySelector(".main_board--selected")===undefined || selected===null || selected===undefined) return;
    document.querySelector(".main_board--selected").value=val;

     let tmp = board;
     tmp[selected] = val;
     setBoard(tmp);
     //console.log(board)

    let ev2 = new Event('click');
    document.querySelector(".main_board--selected").dispatchEvent(ev2);

  }

  return(
    <div className="main_numpad">
            <span onClick={() => handleClick(1)}>1</span>
            <span onClick={() => handleClick(2)}>2</span>
            <span onClick={() => handleClick(3)}>3</span>
            <span onClick={() => handleClick(4)}>4</span>
            <span onClick={() => handleClick(5)}>5</span>
            <span onClick={() => handleClick(6)}>6</span>
            <span onClick={() => handleClick(7)}>7</span>
            <span onClick={() => handleClick(8)}>8</span>
            <span onClick={() => handleClick(9)}>9</span>
    </div>
  )
}

export default Numpad;