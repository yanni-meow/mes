import React, { useState } from 'react';
import GlobalState from '../../store/globalState';
import ExemptionsScreen from './ExemptionsScreen';
import HomeScreen from './HomeScreen';
import PersonalAccountScreen from './PersonalAccountScreen';
import PiiScreen from './PiiScreen';
import VideoCallScreen from './VideocallScreen';
// import CheckUpdatesScreen from './CheckUpdatesScreen';
// import LoginScreen from './LoginScreen';
// import CheckDevicesScreen from './CheckDevicesScreen';
// import WaitingScreen from './WaitingScreen';
// import InviteScreen from './InviteScreen';
// import ProcessTicketScreen from './TicketProcessScreen';

const ScreenProvider = () => {
  console.log('rerender screen provider === ');

  const activeScreen = GlobalState.useState((s) => s.activeScreen);
  const [routeSelection, setRouteSelection] = useState('');

  const getContent = () => {
    switch (activeScreen) {
      case 'homeScreen':
        return <HomeScreen setRouteSelection={setRouteSelection} />;
      case 'piiScreen':
        return <PiiScreen routeSelection={routeSelection} />;
      case 'videocallScreen':
        return <VideoCallScreen />;
      case 'exemptionsScreen':
        return <ExemptionsScreen />;
      case 'personalAccountScreen':
        return <PersonalAccountScreen />;
        //   case 'checkDevicesScreen':
        //     return <CheckDevicesScreen />;
      default:
        return <div>default</div>;
    }
  };

  return getContent();
};
export default ScreenProvider;
