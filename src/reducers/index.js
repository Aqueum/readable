import { combineReducers } from 'redux';
import {
  SELECT_CATEGORY,
  INVALIDATE_CATEGORY,
  REQUEST_POSTS,
  RECEIVE_POSTS
} from '../actions';

const categories = (state = {}, action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return {
        name: action.name,
        path: action.path
      };
    default:
      return state;
  }
};

export default combineReducers({
  categories
});
