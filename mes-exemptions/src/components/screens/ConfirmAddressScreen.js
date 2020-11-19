// 3.1 screen

import React, { useState } from 'react';
import ApiState from '../../api/api';
// import { Link, useHistory } from 'react-router-dom';
import bill from '../../images/bill.png';
import point from '../../images/gps.png';
import video from '../../images/video.png';
// import GlobalState from '../pullstate';

const ConfirmAddressScreen = ({ setActiveScreen }) => {
  // const [wrongData, setWrongData] = useState(false);
  // const { countNumber, userAddress } = ApiState.useState((s) => s.mainApiData);
  const userAddress = ApiState.useState((s) => s.userAddress);
  const lsValue = ApiState.useState((s) => s.lsValue);

  // function errorCheck() {
  //   history.push('/4.1');
  //   // setWrongData(true);
  // }
  console.log('meow');
  return (
    <div className="lgotPage page">
      <h1>Открытие, переоформление льгот</h1>
      <h4>
        Подтвердите правильность адреса.
        <br />
        Если адрес указан верно, нажмите «Далее».
        <br />
        Если адрес указан неверно, нажмите «Назад» и проверьте, правильно ли введен номер лицевого счета.
      </h4>
      <div className="lgot__confirm-address__box">
        <div className="lgot__confirm-address__item">
          <img src={bill} />
          <p className="orange-text">Лицевой счёт: </p>
          <h3>
            { lsValue }
          </h3>
        </div>
        <div className="lgot__confirm-address__item">
          <img src={point} />
          <p className="orange-text">Адрес: </p>
          <h3>
            { userAddress }
          </h3>
        </div>
      </div>
      <button onClick={() => { setActiveScreen('personalAccountScreen'); }} to="/2.1" className="btnHalf"><p className="btnText">Назад</p></button>
      <button onClick={() => { setActiveScreen('userInfoScreen'); }} className="btnHalf"><p className="btnText">Далее</p></button>
    </div>
  );
};

export default ConfirmAddressScreen;
