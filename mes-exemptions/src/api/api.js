import React from 'react';
import axios from 'axios';
import qs from 'qs';
// import GlobalState, { isConnectionError, isLoadingToggle, updateSession } from '../store/globalState';
// , { updateConnectionStatus }
import { Store } from 'pullstate';
import bill from '../images/bill.png';

const ApiState = new Store({
  isLoading: false,
  lastAction: null,
  lastActionParams: '',
  session: '',
  // '00003-003-00'
  lsValue: '',
  userName: '',
  userLastname: '',
  userMiddlename: '',
  userAddress: '',
  userPhone: 0,

  showErrorScreen: false,
  connectionError: false,
  emptyData: false,

});
export default ApiState;

export const updateApiState = (values) => {
  const updatedValues = (s) => {
    Object.keys(values).forEach((key) => {
      s[key] = values[key];
    });
  };
  ApiState.update(updatedValues);
};

const prepareResponse = (response) => {
  console.log('response === ', response);
  const { data } = response;
  console.log('data === ', data);
  if (data.total === 0) {
    updateApiState({ emptyData: true, isLoading: false });
  } else {
    const { data: axiosData } = data;
    console.log('axiosData === ', axiosData);
    if (axiosData.length === 1) {
      const responseData = axiosData[0];
      if (responseData.ns_kd_result === 0 || responseData.nm_last) {
        return responseData;
      }
    } else {
      return 'jopa';
    }
  }

  // console.log('responseData === ', responseData);

  // if (response.total !== 0 && (responseData.ns_kd_result === 0 || responseData.kd_error === 0 || response.data.err_code === 0 || responseData.id_entity !== 0 || responseData[n].nm_error === null)) {
  //   return responseData;
  // }
  //   updateApiState({ isLoading: false, showErrorScreen: true });
  // };
  // if (responseData.lenght > 1) {
  //   return responseData;
  // } else {
  //   if(response.total !== 0 && (responseData.ns_kd_result === 0 || responseData.kd_error === 0 || response.data.err_code === 0 || responseData.id_entity !== 0 || responseData[n].nm_error === null)) {
  //   return responseData[0];
  // } else {

  // }
};

const requestApi = async (url, data, headers = { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' }, method = 'POST') => {
  updateApiState({ showErrorScreen: false });
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    // updateApiState({ isLoading: false });
    return prepareResponse(response);
  } catch (error) {
    updateApiState({ isLoading: false, showErrorScreen: true, connectionError: true });
  }
};

const authentificationSystem = async () => {
  const responseData = await requestApi(
    'http://kissh-test.mosenergosbyt.ru/osb_mes_test/ru.tii.crmcom_cnts2.json.ps/json-api',
    qs.stringify({
      action: 'auth',
      login: process.env.REACT_APP_SYSTEM_LOGIN,
      pwd_password: process.env.REACT_APP_SYSTEM_PASSWORD,
    }),
  );

  if (responseData) {
    updateApiState({
      showErrorScreen: false, isLoading: false, session: responseData.session,
    });
    // const cState = ApiState.getRawState();
    // console.log(' cState ', cState.session);
  }
};

const userIdentification = async (lsValue) => {
  const { session } = ApiState.getRawState();
  const responseData = await requestApi('http://kissh-test.mosenergosbyt.ru/osb_mes_test/ru.tii.crmcom_cdb2.json.ps/json-api', qs.stringify({
    query: 'IdentContractor',
    id_facility: 1,
    kd_tp_client: 1,
    session,
    nn_ls: lsValue,
  }));

  if (responseData) {
    updateApiState({
      showErrorScreen: false, isLoading: false, lsValue: responseData.nn_ls, userName: responseData.nm_first, userLastname: responseData.nm_last, userAddress: responseData.nm_addr,
    });
    responseData.nm_middle && updateApiState({ userMiddlename: responseData.nm_middle });
    responseData.nn_phone && updateApiState({ userPhone: responseData.nn_phone });
  }
};

const sentScanDocs = async (session, suvkDocId) => {
  const formData = new FormData();
  formData.append('vl_doc', new Blob([bill], {
    type: 'text/csv',
  }));
  const responseData = await requestApi(`http://kissh-test.mosenergosbyt.ru/osb_mes_test/ru.tii.crmcom_cnts2.json.ps/json-api?action=upload&query=UploadFile&id_doc_type=${suvkDocId}&session=${session}`, { formData }, { Accept: 'application/json', 'Content-Type': 'multipart/form-data' });

  updateApiState({
    showErrorScreen: false, isLoading: false,
  });
};

export const apiMethod = async (method, params) => {
  console.log('apiMethod metod === ', method);
  console.log('apiMethod params === ', params);
  updateApiState({ isLoading: true, lastAction: method, lastActionParams: params });
  let response = '';
  if (method === 'authentificationSystem') {
    response = await authentificationSystem();
    console.log('response in apiMethod === ', response);
  } else if (method === 'userIdentification') {
    response = userIdentification(params);
  } else if (method === 'sentScanDocs') {
    response = sentScanDocs(params);
  }
  return (response);
};
