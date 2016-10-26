import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './root';

const createAppStore = (initialState = {}) =>
  createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        thunkMiddleware
      ),
      global.devToolsExtension ? global.devToolsExtension() : f => f
    )
  );

export default createAppStore;
