import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { firebaseConnector } from './firebase/';
import createAppStore from './redux/store';
import App from './containers/App';
import Testing from './containers/Testing';

(() => {
  const store = firebaseConnector(createAppStore());
  const history = syncHistoryWithStore(browserHistory, store);

  ReactDOM.render(
    (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App} />
          <Route path="/testing" component={Testing} />
        </Router>
      </Provider>
    ),
    global.document.getElementById('app')
  );
})();
