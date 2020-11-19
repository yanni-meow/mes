// 2.1 screen

import React, { useState } from 'react';
import ConfirmAddressScreen from './ConfirmAddressScreen';
// import { Store } from 'pullstate';
// import GlobalState from '../../store/globalState';
import ExemptionsScreen from './ExemptionsScreen';
import HomeScreen from './HomeScreen';
import PersonalAccountScreen from './PersonalAccountScreen';
import PiiScreen from './PiiScreen';
import UserInfoScreen from './UserInfoScreen';
import VideoCallScreen from './VideocallScreen';

const ScreenProvider = ({ activeScreen, setActiveScreen }) => {
  console.log('rerender screen provider === ');
  const [routeSelection, setRouteSelection] = useState('');

  const getContent = () => {
    switch (activeScreen) {
      case 'homeScreen':
        return <HomeScreen setActiveScreen={setActiveScreen} setRouteSelection={setRouteSelection} />;
      case 'piiScreen':
        return <PiiScreen setActiveScreen={setActiveScreen} routeSelection={routeSelection} />;
      case 'videocallScreen':
        return <VideoCallScreen setActiveScreen={setActiveScreen} />;
      case 'exemptionsScreen':
        return <ExemptionsScreen setActiveScreen={setActiveScreen} />;
      case 'personalAccountScreen':
        return <PersonalAccountScreen setActiveScreen={setActiveScreen} />;
      case 'confirmAddressScreen':
        return <ConfirmAddressScreen setActiveScreen={setActiveScreen} />;
      case 'userInfoScreen':
        return <UserInfoScreen setActiveScreen={setActiveScreen} />;
      // case 'confirmAddressScreen':
      //   return <ConfirmAddressScreen setActiveScreen={setActiveScreen} />;
      // case 'confirmAddressScreen':
      //   return <ConfirmAddressScreen setActiveScreen={setActiveScreen} />;
      default:
        return <div>default</div>;
    }
  };

  return getContent();
};
export default ScreenProvider;
