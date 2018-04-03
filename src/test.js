import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as categoryactions from './actions/categoryactions';
import * as postactions from './actions/postactions';
import * as categoryreducers from './reducers/categoryreducers';
import * as postreducers from './reducers/postreducers';
import * as indexreducers from './reducers/index';
import * as api from './utils/api';
