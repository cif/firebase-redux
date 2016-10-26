import test from 'ava';
import { noCallThru } from 'proxyquire';
import { spy } from 'sinon';
import { UPDATE_COUNTER } from './counter';

const proxyquireStrict = noCallThru();

const loadWithMocks = () => {
  const firebaseMock = {
    database: () => ({ ref: () => ({ set: spy() }) })
  };

  const counterReducer = proxyquireStrict('./counter', {
    '../firebase': firebaseMock
  }).default;

  return {
    counterReducer,
    firebaseMock
  };
};

test('should return current state for unknown action type', (t) => {
  const { counterReducer } = loadWithMocks();
  const state = 3;
  const newState = counterReducer(state, { type: 'UNKNOWN_ACTION_TYPE' });
  t.is(newState, state, 'incorrect default state for unknown action');
});

test(`should return a new state matching action payload for ${UPDATE_COUNTER} action`, (t) => {
  const { counterReducer } = loadWithMocks();
  const state = 3;
  const newState = counterReducer(state, { type: 'UPDATE_COUNTER', payload: 4 });
  t.is(newState, 4, `incorrect state for ${UPDATE_COUNTER}`);
});
