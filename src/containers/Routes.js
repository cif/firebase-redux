import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { firebaseConnector } from '../firebase/';
import createAppStore from '../redux/store';
import App from './App';
import Testing from './Testing';

const store = firebaseConnector(createAppStore());
const history = syncHistoryWithStore(browserHistory, store);

export const Routes = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App} />
        <Route path="/test" component={Testing} />
      </Router>
    </Provider>
  );
}

export default Routes;
