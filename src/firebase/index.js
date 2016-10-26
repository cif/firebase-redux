import firebase from 'firebase';
import firebaseAuthConnector from './auth';

// Replace this with your non hidden credentials or const
import firebaseConfig from '../config/firebaseConfig';

firebase.initializeApp(firebaseConfig);

export const firebaseConnector = (store) => {
  firebaseAuthConnector(firebase, store);
  return store;
};

export default firebase;
