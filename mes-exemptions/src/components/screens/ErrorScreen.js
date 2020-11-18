import React, { useState } from 'react';
import GlobalState from '../../store/globalState';
import { getError } from '../../api/api-cod-description';

export const ErrorList = ({ lastAction }) => {
  const showErrorScreen = GlobalState.useState((s) => s.showErrorScreen);

  const [isOpen, setIsOpen] = useState(true);
  async function tryAgain() {
    setIsOpen(false);
    await lastAction();
  }

  const ConnectionError = () => (
    <div style={{ margin: '0 auto' }}>
      <div
        className="error-text"
        style={{ minHeight: '30vh', minWidht: '80vw' }}
      >
        СУВК не оттвечает.
        <br />
        Просьба обратиться позднее.
        <br />
        Приносим свои извинения!
      </div>
      <button className="btnWhole btnText" onClick={tryAgain}>
        Попробовать снова
      </button>
    </div>
  );

  return (
    isOpen && (
      <div className="page modal" style={{ position: 'absolute', marginLeft: '2.5vw', top: '13.5vh' }}>
        <div className="error-text">
          {/* { errorCod !== 0 && (
            <>
              <p>{getError(errorCod)}</p>
              <button className="btnWhole btnText" onClick={() => { setIsOpen(false); }}>Назад</button>
            </>
          )} */}

          { showErrorScreen && ConnectionError()}
        </div>
      </div>
    )
  );
};
