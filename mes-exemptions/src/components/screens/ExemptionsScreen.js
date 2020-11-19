// 1.3 screen
import React from 'react';

const ExemptionsScreen = ({ setActiveScreen }) => (
  <div className="persPage page">
    <h1>Открытие, переоформление, закрытие льгот</h1>
    <h2>Выберите интересующую Вас услугу</h2>
    <button className="btnWhole" onClick={() => { setActiveScreen('personalAccountScreen'); }}><p className="btnText">Открытие, переоформление льгот</p></button>
    <button className="btnWhole"><p className="btnText">Закрытие льгот</p></button>
  </div>
);

export default ExemptionsScreen;
