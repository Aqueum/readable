import { combineReducers } from 'redux';
import { categories } from './category';
import { posts } from './post';
import { selections } from './selections';

const rootReducer = combineReducers({
  categories,
  selections,
  posts
});

export default rootReducer;
