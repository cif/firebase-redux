import React from 'react';
import { connect } from 'react-redux';
import { incrementCounter } from '../lib/redux/counter';
export const App = (props) => {
  const { count, dispatchIncrement } = props;
  return (
    <div>
      <h1>The count: {count}</h1>
      <button onClick={dispatchIncrement}>Increment</button>
    </div>
  );
}

const dispatcher = (dispatch) => ({
  dispatchIncrement: () => dispatch(incrementCounter())
});

export default connect((state) => ({ count: state.counter }), dispatcher)(App);
