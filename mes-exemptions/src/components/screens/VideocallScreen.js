// videocall screen

import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Errors from './9.3.errors';
// import Modal from './modal';

const VideoCallScreen = () => {
  const [isOperatorError, setIsOperatorError] = useState(false);
  console.log('render video call screen === ');
  return (
    <div className="videocall-page page">

      {/* { isOperatorError && (
      <Modal>
        <Errors isOperatorError={isOperatorError} setIsOperatorError={setIsOperatorError} />
      </Modal>
      ) } */}

      <h1>Видеозвонок</h1>
      <div className="orange-box" id="videocall-window" />
      {/* <Link to="/home" className="btnHalf btnText" style={{ background: 'red' }}>Завершить звонок</Link> */}
    </div>
  );
};

export default VideoCallScreen;
