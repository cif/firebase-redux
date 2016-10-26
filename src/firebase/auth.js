import {
  userLoggedIn,
  userLoggedOut,
  userInFlight
} from '../redux/user';

export const firebaseAuthConnector = (firebase, store) => {
  // watch for changes in auth status
  firebase.auth().onAuthStateChanged((user) => {
    const { dispatch } = store;
    if (user) {
      dispatch(userLoggedIn(user));
    } else {
      dispatch(userLoggedOut(user));
    }
    dispatch(userInFlight(false));
  });
};

export default firebaseAuthConnector;
