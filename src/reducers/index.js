// the root reducer - that combines all reducers into one
// that can be called by the main index.js

import { combineReducers } from 'redux';
import { categories } from './categories';
import { posts } from './posts';
import { selections } from './selections';
import { comments } from './comments';

const rootReducer = combineReducers({
  categories,
  selections,
  posts,
  comments
});

export default rootReducer;
