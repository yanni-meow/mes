import React from 'react';
import axios from 'axios';
import qs from 'qs';
// import GlobalState, { isConnectionError, isLoadingToggle, updateSession } from '../store/globalState';
// , { updateConnectionStatus }
import { Store } from 'pullstate';
import bill from '../images/bill.png';

const ApiState = new Store({
  isLoading: false,
  showErrorScreen: false,
  lastAction: null,
  session: '',
});
export default ApiState;

export const isLoadingToggle = () => {
  ApiState.update((s) => {
    s.isLoading = !s.isLoading;
  });
};

export const isConnectionError = (value) => {
  ApiState.update((s) => {
    s.showErrorScreen = value;
  });
};

export const isLastAction = (value) => {
  ApiState.update((s) => {
    s.lastAction = value;
  });
};

export const updateSession = (values) => {
  ApiState.update((s) => {
    s.session = values;
  });
};

export const apiCall = async (name, data, headers = { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' }) => {
  try {
    isLoadingToggle();
    isConnectionError(false);
    isLastAction(name);
    const response = await axios({
      method: 'POST',
      url: 'http://kissh-test.mosenergosbyt.ru/osb_mes_test/ru.tii.crmcom_cnts2.json.ps/json-api',
      data,
      headers,
    });
    isLoadingToggle();
    const { data: { data: { 0: responseData } } } = response;

    if (responseData.ns_kd_result === 0 || response.data.kd_error === 0 || response.data.err_code === 0) {
      isConnectionError(false);
      updateSession(responseData.session);
    } else {
      // updateConnectionStatus({ isLoading: false, errorCod: responseData.ns_kd_result });
    }
  } catch (error) {
    isLoadingToggle();
    isConnectionError(true);
  }
};

export const authentificationSystem = async () => {
  
  apiCall(authentificationSystem, qs.stringify({
    action: 'auth',
    login: process.env.REACT_APP_SYSTEM_LOGIN,
    pwd_password: process.env.REACT_APP_SYSTEM_PASSWORD,
  }));
  // console.log('process.env === ', process.env.REACT_APP_SYSTEM_LOGIN);
  // try {
  //   isLoadingToggle();
  //   isConnectionError(false);
  //   const response = await axios({
  //     method: 'post',
  //     url: 'http://kissh-test.mosenergosbyt.ru/osb_mes_test/ru.tii.crmcom_cnts2.json.ps/json-api',
  //     data: qs.stringify({
  //       action: 'auth',
  //       login: process.env.REACT_APP_SYSTEM_LOGIN,
  //       pwd_password: process.env.REACT_APP_SYSTEM_PASSWORD,
  //     }),
  //     headers: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
  //   });
  //   isLoadingToggle();
  //   console.log('response === ', response);
  //   const { data: { data: { 0: responseData } } } = response;

  //   if (responseData.ns_kd_result === 0) {
  //     isConnectionError(false);
  //     updateSession(responseData.session);
  //   } else {
  //     // updateConnectionStatus({ isLoading: false, errorCod: responseData.ns_kd_result });
  //   }
  // } catch (error) {
  //   isLoadingToggle();
  //   isConnectionError(true);
  // }
};

// export const identification = async (session, countNumber) => {
//   try {
//     updateConnectionStatus({ isLoading: true, connectionError: false });
//     const response = await axios({
//       method: 'POST',
//       url: 'http://kissh-test.mosenergosbyt.ru/osb_mes_test/ru.tii.crmcom_cdb2.json.ps/json-api ',
//       data: qs.stringify({
//         query: 'IdentContractor',
//         id_facility: 1,
//         kd_tp_client: 1,
//         session,
//         nn_ls: '00003-003-00',
//         // nn_ls: countNumber,
//       }),
//       headers: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
//     });

//     if (response.statusText === 'OK') {
//       const { data: { data: { 0: responseData } } } = response;

//       if (responseData.id_entity !== 0) {
//         updateConnectionStatus({
//           isLoading: false,
//           success: true,
//           total: responseData.total,
//           userName: responseData.nm_first,
//           userLastname: responseData.nm_last,
//           userMiddlename: responseData.nm_middle,
//           userAddress: responseData.nm_addr,
//         });
//       } else {
//         updateConnectionStatus({ isLoading: false, errorCod: responseData.ns_kd_result });
//       }
//     } else {
//       updateConnectionStatus({ isLoading: false, connectionError: true });
//     }
//   } catch (error) {
//     console.log(' === ', error);
//     updateConnectionStatus({ isLoading: false, connectionError: true });
//   }
// };

// export const sentScanDocs = async (session, suvkDocId) => {
//   try {
//     updateConnectionStatus({ isLoading: true, connectionError: false });

//     const formData = new FormData();
//     formData.append('vl_doc', new Blob([bill], {
//       type: 'text/csv',
//     }));
//     const response = await axios({
//       method: 'POST',
//       url: `http://kissh-test.mosenergosbyt.ru/osb_mes_test/ru.tii.crmcom_cnts2.json.ps/json-api?action=upload&query=UploadFile&id_doc_type=${suvkDocId}&session=${session}`,
//       data: formData,
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     console.log('formData === ', formData);

//     if (!response.data.err_code) {
//       const { data: { data: { 0: responseData } } } = response;
//       // const { data: responseData } = response;
//       // console.log('responseData === ', responseData);
//       if (response.data.kd_error === 0 || response.data.err_code === 0) {
//         updateConnectionStatus({
//           isLoading: false,
//           success: true,
//           total: response.data.total,
//           idDociment: responseData.id_document,
//           idFile: responseData.id_file,
//         });

//         // } else {
//         //   updateConnectionStatus({ isLoading: false, errorScan: responseData.nm_error });
//         //   setTimeout(() => {
//         //     updateConnectionStatus({ isLoading: false, errorScan: '' });
//         //   }, 5000);
//       }
//     }
//   } catch (error) {
//     console.log(' === ', error);
//     updateConnectionStatus({ isLoading: false, connectionError: true });
//   }
// };
