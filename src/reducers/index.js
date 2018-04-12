import { combineReducers } from 'redux';
import { categories } from './categories';
import { posts } from './posts';
import { selections } from './selections';

const rootReducer = combineReducers({
  categories,
  selections,
  posts
});

export default rootReducer;
