import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { firebaseConnector } from './firebase';
import createAppStore from './redux/store';
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
