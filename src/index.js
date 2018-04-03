// import React from 'react';
// import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
// import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import {
  selectCategory,
  fetchCategories,
  fetchPosts,
  addPost
} from './actions';
import rootReducer from './reducers';
//import { Provider } from 'react-redux';

const loggerMiddleware = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

store.dispatch(selectCategory('react'));
store.dispatch(fetchCategories());
store.dispatch(fetchPosts('')).then(() => console.log(store.getState()));
store.dispatch(
  addPost(
    'testID02',
    1467166873934,
    'More self help',
    'Is this working',
    'Me',
    'udacity'
  )
);
//store.dispatch(fetchPosts('')).then(() => console.log(store.getState()));

/* was:
ReactDOM.render(
  //<Provider store={createStore(App)}>
  <App store={createStore(reducer)} />,
  //</Provider>,
  document.getElementById('root')
);
registerServiceWorker();
*/
