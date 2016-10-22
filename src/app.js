import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { firebaseConnector } from './lib/firebase';
import createAppStore from './lib/redux/store';
import App from './containers/App';
(() => {

  const store = firebaseConnector(createAppStore());

  ReactDOM.render(
    (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    document.getElementById("app")
  );
})();
