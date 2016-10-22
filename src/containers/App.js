import React from 'react';
import { connect } from 'react-redux';
import { updateCounterAndPersist } from '../lib/redux/counter';

export const App = (props) => {
  const { count, updateCounter } = props;
  return (
    <div>
      <h1>The count: {count}</h1>
      <button onClick={() => { updateCounter(count + 1) }}>Increment</button>
      <button onClick={() => { updateCounter(count - 1) }}>Decrement</button>
    </div>
  );
}

const selector = (state) => ({
  count: state.counter
});

const dispatcher = (dispatch) => ({
  updateCounter: (count) => dispatch(updateCounterAndPersist(count))
});

export default connect(selector, dispatcher)(App);
