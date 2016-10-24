import firebase from 'firebase';
import { updateCounter } from './redux/counter';

// Replace this with your non hidden credentials or const
import firebaseConfig from './config/firebaseConfig';

firebase.initializeApp(firebaseConfig);

export const firebaseConnector = (store) => {
  const { dispatch } = store;
  firebase.database().ref('count').on('value', (count) => {
    dispatch(updateCounter(count.val()));
  });

  return store;
}

export default firebase;
