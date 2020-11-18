// 1.1 screen

import React, { useEffect, useState } from 'react';
import video from '../../images/video.png';
import card from '../../images/personal-card.png';
import list from '../../images/list.png';
import info from '../../images/info.png';
import education from '../../images/education.png';
// import { authentification } from '../utils/API';
import { updateActiveScreen } from '../../store/globalState';
// import { ErrorList } from './API-errors';

const HomeScreen = (props) => {
  const { setRouteSelection } = props;
  //   const fetchData = async () => {
  //     await authentification();
  //   };
  //   useEffect(() => { fetchData(); }, []);

  const homeBtns = [
    {
      id: 0, img: list, text: 'Открытие, переоформление, закрытие льгот', wayto: 'exemptionsScreen',
    },
    {
      id: 1, img: card, text: 'Изменение данных владельца лицевого счёта', wayto: 'redactionScreen',
    },
    {
      id: 2, img: info, text: 'Информация', wayto: 'infoScreen',
    },
    {
      id: 3, img: education, text: 'Инструкция', wayto: 'instructionScreen',
    },
  ];

  const handleClick = (wayto) => {
    updateActiveScreen('piiScreen');
    setRouteSelection(wayto);
  };

  const toRenderBtns = () => (
    homeBtns.map((el) => (
      <button
        className="btnHome"
        key={el.id}
        onClick={() => { handleClick(el.wayto); }}
      >
        <img className="btnIcon" src={el.img} />
        <p className="btnText">{el.text}</p>
      </button>
    ))
  );

  return (
    <div className="homePage page">

      {/* { isLoading && 'spinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspiner'} */}

      {/* { session
            && ( */}
      <>
        <h1>Выберите услугу</h1>
        <button className="btnVideoCall" onClick={() => { updateActiveScreen('videocallScreen'); }}>
          <img className="btnIcon" src={video} />
          <p className="btnText">Видеозвонок</p>
        </button>
        {toRenderBtns()}
      </>
      {/* ) } */}
      {/*
      { connectionError && (
      <>
        <ErrorList fetchData={fetchData} />
        <button className="btnWhole btnText" onClick={fetchData}>
          Попробовать снова
        </button>
      </>
      )} */}

    </div>
  );
};
export default HomeScreen;
