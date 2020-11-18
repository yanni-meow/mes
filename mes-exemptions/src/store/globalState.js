import { Store } from 'pullstate';

const GlobalState = new Store({
  activeScreen: 'homeScreen',
//   isLoading: false,
//   showErrorScreen: false,
//   lastAction: null,
//   session: '',
});
export default GlobalState;

export const updateActiveScreen = (values) => {
  GlobalState.update((s) => {
    s.activeScreen = values;
  });
};

// export const isLoadingToggle = () => {
//   GlobalState.update((s) => {
//     s.isLoading = !s.isLoading;
//   });
// };

// export const isConnectionError = (value) => {
//   GlobalState.update((s) => {
//     s.showErrorScreen = value;
//   });
// };

// export const updateSession = (values) => {
//   GlobalState.update((s) => {
//     s.session = values;
//   });
// };

// // обновление непосредственного состояния соединения
// export const updateConnectionStatus = (values) => {
//   const updatedValues = (s) => {
//     Object.keys(values).forEach((key) => {
//       s.mainApiData[key] = values[key];
//     });
//   };
//   GlobalState.update(updatedValues);
// };

// // обновление кнопок сканирования
// // ОСНОВНЫХ документов
// export const updateMainButtonsStatus = (key, buttonIndex) => {
//   const cState = GlobalState.getRawState();

//   let ButtonStatus = cState.documentsList[key].mainDocList;

//   const currentButton = { ...ButtonStatus[buttonIndex], scaned: true };
//   const nextButton = { ...ButtonStatus[buttonIndex + 1], disable: false };

//   ButtonStatus = ButtonStatus.map((el) => {
//     if (el.id === currentButton.id) return el = currentButton;
//     if (el.id === nextButton.id) return el = nextButton;
//     return el;
//   });

//   GlobalState.update((s) => {
//     s.documentsList[key].mainDocList = ButtonStatus;
//   });
// };
// // ДОПОЛНИТЕЛЬНОГО документа
// export const updateDopButtonsStatus = (key, buttonIndex) => {
//   const cState = GlobalState.getRawState();

//   let ButtonStatus = cState.documentsList[key].dopDocList;
//   const currentButton = { ...ButtonStatus[buttonIndex], scaned: true };

//   ButtonStatus = ButtonStatus.map((el) => {
//     if (el.id === currentButton.id) return el = currentButton;
//     return el;
//   });

//   GlobalState.update((s) => {
//     s.documentsList[key].dopDocList = ButtonStatus;
//   });
// };
