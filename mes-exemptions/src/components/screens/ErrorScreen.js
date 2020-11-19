import React from 'react';
import ApiState, { apiMethod, updateApiState } from '../../api/api';
// import GlobalState from '../../store/globalState';
import { getError } from '../../api/api-cod-description';

export const ErrorList = () => {
  const lastAction = ApiState.useState((s) => s.lastAction);
  const lastActionParams = ApiState.useState((s) => s.lastActionParams);
  // const emptyData = ApiState.useState((s) => s.emptyData);
  const connectionError = ApiState.useState((s) => s.connectionError);

  const getContent = () => {
    // if (emptyData) {
    //   return (
    //     <div style={{ margin: '0 auto' }}>
    //       <div
    //         className="error-text"
    //         style={{ minHeight: '30vh', minWidht: '80vw' }}
    //       >
    //         Проверьте правильность введённых данных
    //       </div>
    //       <button className="btnWhole btnText" onClick={() => { updateApiState({ showErrorScreen: false, emptyData: false }); }}>
    //         Назад
    //       </button>
    //     </div>
    //   );
    // }
    if (connectionError) {
      return (
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
          <button className="btnWhole btnText" onClick={() => { apiMethod(lastAction, lastActionParams); }}>
            Попробовать снова
          </button>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="page modal" style={{ position: 'absolute', marginLeft: '2.5vw', top: '13.5vh' }}>
      <div className="error-text">
        {/* { errorCod !== 0 && (
            <>
              <p>{getError(errorCod)}</p>
              <button className="btnWhole btnText" onClick={() => { setIsOpen(false); }}>Назад</button>
            </>
          )} */}
        { getContent() }
      </div>
    </div>
  );
};
