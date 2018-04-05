// modified from https://redux.js.org/advanced/async-actions

import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  REQUEST_ADD_POST,
  RECEIVE_ADD_POST,
  INVALIDATE_CATEGORY
} from '../actions/post';

export function posts(
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
        items: [...state.items, action.post],
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

/* decided not to segregate state by category, to avoid duplicate posts in state
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
