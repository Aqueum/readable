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
