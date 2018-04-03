import { combineReducers } from 'redux';
import { categories, selectedCategory } from './categoryreducers';
import { posts } from './postreducers';

const rootReducer = combineReducers({
  categories,
  selectedCategory,
  posts
});

export default rootReducer;
