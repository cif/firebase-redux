import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { updateCounterAndPersist } from '../redux/counter';

export const App = (props) => {
  const { count, updateCounter } = props;
  return (
    <div>
      <Counter
        count={count}
        onClick={updateCounter}
      />
    </div>
  );
}

const selector = (state) => ({
  count: state.counter,
  user: state.user
});

const dispatcher = (dispatch) => ({
  updateCounter: (count) => dispatch(updateCounterAndPersist(count))
});

export default connect(selector, dispatcher)(App);
