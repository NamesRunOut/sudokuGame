import React from 'react'

const Timer = () => {

  const handleClick = (val) => {
    if (document.querySelector(".main_board--selected")===undefined) return;
    document.querySelector(".main_board--selected").value=val;

    let ev2 = new Event('click');
    document.querySelector(".main_board--selected").dispatchEvent(ev2);
    //if (document.querySelector(".main_board--selected")!=undefined) 
     // document.querySelector(".main_board--selected").value=val;
   // console.log(val, tmp[selected], board)
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

export default Timer;