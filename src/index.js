import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={createStore(App)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
