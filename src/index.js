import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import { selectCategory, fetchPosts } from './actions';
import rootReducer from './reducers';
//import { Provider } from 'react-redux';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

store.dispatch(selectCategory('reactjs'));
store.dispatch(fetchPosts('reactjs')).then(() => console.log(store.getState()));
/* was:
ReactDOM.render(
  //<Provider store={createStore(App)}>
  <App store={createStore(reducer)} />,
  //</Provider>,
  document.getElementById('root')
);
registerServiceWorker();
*/
