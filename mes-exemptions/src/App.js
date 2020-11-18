import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import './styles/nullstyle.css';
import './styles/defoltstyle.css';
import './styles/wrapper.css';
import './styles/screensstyles.css';
import GlobalState, { updateActiveScreen } from './store/globalState';
import logo from './images/logo.png';
import homeIcon from './images/home.png';
import ScreenProvider from './components/screens/ScreenProvider';
import PreLoader from './components/PreLoader';
import { ErrorList } from './components/screens/ErrorScreen';

const App = () => {
  // const url = window.location.href;
  const activeScreen = GlobalState.useState((s) => s.activeScreen);
  const isLoading = GlobalState.useState((s) => s.isLoading);
  const showErrorScreen = GlobalState.useState((s) => s.showErrorScreen);

  return (
    <div className="wrapperBox">
      <section className="wrapperBox__top">
        <div className="wrapperBox__top__logo">
          <img src={logo} />
        </div>
        <div className="wrapperBox__top__clock" />
        { isLoading && <PreLoader /> }
        { showErrorScreen && <ErrorList /> }
      </section>
      <section className="wrapperBox__content">
        {/* { isLoading && <PreLoader /> } */}
        <ScreenProvider />
      </section>
      <section className="wrapperBox__bottom">
        {(activeScreen !== 'homeScreen')
                && (
                <button className="btnHomeRun" onClick={() => { updateActiveScreen('homeScreen'); }}>
                  <img src={homeIcon} />
                </button>
                )}
        <div className="wrapperBox__bottom__contact">
          <p>+7 (499) 550-9-550</p>
          <p>www.mosenergosbyt.ru</p>
        </div>
      </section>
    </div>
  );
};

export default App;
