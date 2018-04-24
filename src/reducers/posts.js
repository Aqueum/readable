// Post reducers - fuunctions that combine the existing state
// with the action to produce the next state for the posts state

// modified from https://redux.js.org/advanced/async-actions

import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  REQUEST_ADD_POST,
  RECEIVE_ADD_POST,
  INVALIDATE_CATEGORY,
  REQUEST_VOTE,
  RECEIVE_VOTE,
  REQUEST_POST,
  RECEIVE_POST,
  REQUEST_DELETE_POST,
  RECEIVE_DELETE_POST,
  REQUEST_EDIT_POST,
  RECEIVE_EDIT_POST
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
    case REQUEST_VOTE:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_VOTE:
      return Object.assign({}, state, {
        isFetching: true,
        items: state.items.map(
          item => (item.id === action.post.id ? action.post : item)
        ),
        item: action.post
      });
    case REQUEST_POST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_POST:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        item: action.post,
        lastUpdated: action.receivedAt
      });
    case REQUEST_DELETE_POST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_DELETE_POST:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: state.items.filter(item => item.id !== action.posts.id),
        item: null,
        lastUpdated: action.receivedAt
      });
    case REQUEST_EDIT_POST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_EDIT_POST:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: state.items.map(
          item => (item.id === action.post.id ? action.post : item)
        ),
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

/* decided not to segregate state by category, to avoid duplicate posts in state
when called with & without category.  Previously:
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
