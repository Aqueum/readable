import { combineReducers } from 'redux';
import { categories, selectedCategory } from './category';
import { posts } from './post';

const rootReducer = combineReducers({
  categories,
  selectedCategory,
  posts
});

export default rootReducer;
