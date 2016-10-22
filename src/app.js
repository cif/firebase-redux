import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createAppStore from './lib/redux/store';
import App from './containers/App';
(() => {
  ReactDOM.render(
    (
      <Provider store={createAppStore()}>
        <App />
      </Provider>
    ),
    document.getElementById("app")
  );
})();
