import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { fetchPosts, addPost } from './actions/post';
import { selectCategory, fetchCategories } from './actions/category';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

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
    1467166873944,
    'Lost?',
    'Where did the redux post go?',
    'Anton',
    'udacity'
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
