// 1.3 screen
import React from 'react';
import { updateActiveScreen } from '../../store/globalState';

const ExemptionsScreen = () => (
  <div className="persPage page">
    <h1>Открытие, переоформление, закрытие льгот</h1>
    <h2>Выберите интересующую Вас услугу</h2>
    <button className="btnWhole" onClick={() => { updateActiveScreen('personalAccountScreen'); }}><p className="btnText">Открытие, переоформление льгот</p></button>
    <button className="btnWhole"><p className="btnText">Закрытие льгот</p></button>
  </div>
);

export default ExemptionsScreen;
