// 1.2 screen

import React from 'react';
import { authentificationSystem } from '../../api/api';
import GlobalState, { updateActiveScreen } from '../../store/globalState';

const PiiScreen = (props) => {
  const { routeSelection } = props;

  const tryAuth = () => {
    authentificationSystem();
    // updateActiveScreen(routeSelection);
  };

  return (
    <div className="persPage page">
      <h1>Обработка персональных данных</h1>
      <h3>
        Нажимая «Далее» вы даёте согласие
        <br />
        на обработку персональных данных в соотвествии с Федеральным законом
        <br />
        "О персональных данных" от 27.07.2006 N 152-ФЗ.
      </h3>
      <button className="btnHalf" onClick={() => { updateActiveScreen('homeScreen'); }}><p className="btnText">Назад</p></button>
      <button className="btnHalf" onClick={tryAuth}><p className="btnText">Далее</p></button>
    </div>
  );
};
export default PiiScreen;
