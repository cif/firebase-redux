import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Counter from '../components/Counter';
import { updateCounterAndPersist } from '../redux/counter';

const selector = state => ({
  count: state.counter,
  user: state.user
});

const dispatcher = dispatch => ({
  updateCounter: count => dispatch(updateCounterAndPersist(count))
});

export const App = (props) => {
  const { count, updateCounter } = props;
  return (
    <div>
      <Counter
        count={count}
        onClick={updateCounter}
      />
      <Link to="/testing">Testing out things</Link>
    </div>
  );
};

App.propTypes = {
  count: PropTypes.number,
  updateCounter: PropTypes.func
};

export default connect(selector, dispatcher)(App);
