// 2.1 screen

import React, { useState } from 'react';
import ApiState, { apiMethod } from '../../api/api';
import KeyboardNum from '../Keyboard-num';
// import { Link, useHistory } from 'react-router-dom';
// import KeyboardNum from './keyboard-num';
// import { ErrorList } from './API-errors';
// import GlobalState, { updateConnectionStatus } from '../pullstate';
// import { userIdentification } from '../utils/API';

const PersonalAccountScreen = ({ setActiveScreen }) => {
  const lsValue = ApiState.useState((s) => s.lsValue);
  const [value, setValue] = useState(lsValue);
  const emptyData = ApiState.useState((s) => s.emptyData);

  const tryIdent = async () => {
    await apiMethod('userIdentification', value);
    // if (data)
    setActiveScreen('confirmAddressScreen');
  };

  // const {
  //   isLoading, total, success, session,
  // } = GlobalState.useState((s) => s.mainApiData);
  // const {
  //   connectionError, errorCod, errorScan,
  // } = GlobalState.useState((s) => s.errorApi);
  // const {
  //   countNumber, userAddress,
  // } = GlobalState.useState((s) => s.userData);

  // async function fetchData() {
  //   await userIdentification(session, countNumber);
  //   console.log(' === ', 'rrrrr');
  //   history.push('/3.1');
  // }
  console.log(' === ');

  return (
    <div className="lgotPage page">
      <div>
        <h1>Открытие, переоформление льгот</h1>
        <h2>Введите номер лицевого счёта</h2>
      </div>
      { emptyData && (
        <div>
          <h3 style={{ color: 'red', width: '50vw', textAlign: 'center' }}>Введенный номер лицевого счёта не найден.</h3>
          <h3 style={{ width: '50vw', textAlign: 'center', margin: '0 20vw' }}>Уточнить номер лицевого счёта можно у оперетора Контактного центра или посмотреть в квитанции на оплату электроэнергии.</h3>
        </div>
      )}
      <div className="num__form">
        <div className="orange-box">
          <h4>{value}</h4>
        </div>
        <div>
          <KeyboardNum value={value} setValue={setValue} />
        </div>
      </div>
      { emptyData && <button onClick={() => { setActiveScreen('videocallScreen'); }} className="btnHalf"><p className="btnText">Связаться с оператором</p></button> }

      <button className={emptyData ? 'btnHalf' : 'btnWhole'} onClick={tryIdent}><p className="btnText">{emptyData ? 'Попробовать снова' : 'Далее'}</p></button>

    </div>
  );
};

export default PersonalAccountScreen;
