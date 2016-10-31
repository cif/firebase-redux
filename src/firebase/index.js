import firebase from 'firebase';

// Replace this with your non hidden credentials or const
import firebaseConfig from '../config/firebaseConfig';

// Connectors
import firebaseAuthConnector from './auth';

firebase.initializeApp(firebaseConfig);

export const firebaseConnector = (store) => {
  firebaseAuthConnector(firebase, store);
  return store;
};

export default firebase;
