import { createAction } from 'redux-actions';
import firebase from '../firebase/';

// Constants
export const UPDATE_COUNTER = 'UPDATE_COUNTER';

// Actions: one for persisting and one for simple
// dispatching via the connetor wrapped store
export const updateCounterAndPersist = createAction(UPDATE_COUNTER, (count) => {
  firebase.database().ref('count').set(count);
  return count;
});
export const updateCounter = createAction(UPDATE_COUNTER);

// Reducer
const defaultState = 0;
export default function counterReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_COUNTER:
      return action.payload;
    default:
      return state;
  }
}
