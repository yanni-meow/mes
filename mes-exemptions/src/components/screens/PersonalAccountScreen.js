// 2.1 screen

import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import KeyboardNum from './keyboard-num';
// import { ErrorList } from './API-errors';
// import GlobalState, { updateConnectionStatus } from '../pullstate';
// import { identification } from '../utils/API';

const PersonalAccountScreen = () => {
  // const [value, setValue] = useState('');
  // const history = useHistory();
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
  //   await identification(session, countNumber);
  //   console.log(' === ', 'rrrrr');
  //   history.push('/3.1');
  // }
  console.log(' ddd=== ');

  return (
    <div className="lgotPage page">
      <div>
        <h1>Открытие, переоформление льгот</h1>
        <h2>Введите номер лицевого счёта</h2>
      </div>

      {/* { isLoading && 'spinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspiner'}

      { (connectionError || errorCod || errorScan) && <ErrorList fetchData={fetchData} /> }

      { (success !== false)
            && ( */}
      <>
        {/* { (total === 0) && ( */}
        <div>
          <h3 style={{ color: 'red', width: '50vw', textAlign: 'center' }}>Введенный номер лицевого счёта не найден.</h3>
          <h3 style={{ width: '50vw', textAlign: 'center', margin: '0 20vw' }}>Уточнить номер лицевого счёта можно у оперетора Контактного центра или посмотреть в квитанции на оплату электроэнергии.</h3>
        </div>
        {/* )}

              <div className="num__form">
                <div className={`num__box ${(total === 0) ? 'error-box' : 'orange-box'}`}>
                  {
                updateConnectionStatus({ countNumber: value })
                value
                }
                </div> */}
        {/* <div>

                  <KeyboardNum value={value} setValue={setValue} />

                </div> */}
        {/* </div>
              {(total === 0) ? (
                <>
                  <Link to="/videocall" className="btnHalf"><p className="btnText">Связаться с оператором</p></Link>
                  <button onClick={fetchData} className="btnHalf"><p className="btnText">Далее</p></button>
                </>
              ) */}
        {/* :  */}
        <button className="btnWhole"><p className="btnText">Далее</p></button>
        {/* } */}
      </>
      {/* )} */}
    </div>
  );
};

export default PersonalAccountScreen;
