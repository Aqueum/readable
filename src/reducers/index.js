// modified from https://redux.js.org/advanced/async-actions

import { combineReducers } from 'redux';
import {
  INVALIDATE_CATEGORIES,
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES,
  SELECT_CATEGORY,
  INVALIDATE_CATEGORY,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  REQUEST_ADD_POST,
  RECEIVE_ADD_POST
} from '../actions';

function selectedCategory(state = '', action) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return action.category;
    default:
      return state;
  }
}

function categories(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_CATEGORIES:
      return Object.assign({}, state, { didInvalidate: true });
    case REQUEST_CATEGORIES:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_CATEGORIES:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.categories,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

function posts(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_CATEGORY:
      return Object.assign({}, state, { didInvalidate: true });
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      });
    case REQUEST_ADD_POST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_ADD_POST:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

/* decided not to segregate state by category, to void duplicate posts in state
when called with & without category.
function postsByCategory(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_CATEGORY:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.category]: posts(state[action.category], action)
      });
    default:
      return state;
  }
}
*/

const rootReducer = combineReducers({
  categories,
  selectedCategory,
  posts
});

export default rootReducer;
