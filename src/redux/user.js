import { createAction } from 'redux-actions';
import firebase from '../firebase/';

export const USER_LOGGED_IN = 'USER_LOGED_IN';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';
export const USER_CREATE = 'USER_CREATE';
export const USER_ERROR = 'USER_ERROR';
export const USER_LOGIN_SET_INFLIGHT = 'USER_LOGIN_SET_INFLIGHT';

export const userLoggedIn = createAction(USER_LOGGED_IN);
export const userLoggedOut = createAction(USER_LOGGED_OUT);
export const userError = createAction(USER_ERROR);
export const userInFlight = createAction(USER_LOGIN_SET_INFLIGHT);

export const createNewUser = (email, password) => (dispatch) => {
  const dispatchError = (error) => {
    dispatch(userInFlight(false));
    dispatch(userError(error));
  };

  dispatch(userInFlight(true));
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      // add to database for searchability / admin
      firebase.database().ref('users').push().set({ email: user.email, name: user.displayName });

      // send confirmation
      user.sendEmailVerification()
        .catch(dispatchError);
    })
    .catch(dispatchError);
};

export const logInUser = (email, password) => (dispatch) => {
  dispatch(userInFlight(true));
  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error) => {
      dispatch(userInFlight(false));
      dispatch(userError(error));
    });
};

export const logOutUser = () => (dispatch) => {
  dispatch(userInFlight);
  firebase.auth().signOut()
    .catch((error) => {
      dispatch(userInFlight(false));
      dispatch(userError(error));
    });
};

const defaultState = {
  isInFlight: true,
  uid: null
};

export default function counterReducer(state = defaultState, action) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.payload;

    case USER_LOGGED_OUT:
      return {
        ...state,
        ...{ uid: null }
      };

    case USER_LOGIN_SET_INFLIGHT:
      return {
        ...state,
        ...{ isInFlight: action.payload }
      };

    case USER_ERROR:
      return {
        ...state,
        ...{ error: action.payload }
      };

    default:
      return state;
  }
}
