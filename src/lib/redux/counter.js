import { createAction } from 'redux-actions';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const incrementCounter = createAction(INCREMENT_COUNTER);

const defaultState = 0;
export default function counterReducer(state = defaultState, action) {
  switch(action.type) {
    case INCREMENT_COUNTER:
      return state += 1;
    default:
      return state;
  }
}
