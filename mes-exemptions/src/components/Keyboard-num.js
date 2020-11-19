import React from 'react';
import ArrowL from '../images/arrowL.png';

const KeyboardNum = (props) => {
  const { value, setValue } = props;

  function letNumb(numb) {
    if (typeof numb !== 'object') {
      setValue(value + numb);
    }
  }

  function delNumb() {
    setValue(value.substring(0, value.length - 1));
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, <img src={ArrowL} onClick={() => delNumb()} />];

  function makeButtons() {
    return (
      numbers.map((number, index) => (
        <button key={index} className="btnKey" onClick={() => letNumb(number)}>
          {number}
        </button>
      ))
    );
  }

  return (

    <div className="numbers">
      {makeButtons()}
    </div>
  );
};

export default KeyboardNum;
