// Category reducers - fuunctions that combine the existing state
// with the action to produce the next state for the categories state

// modified from https://redux.js.org/advanced/async-actions

import {
  INVALIDATE_CATEGORIES,
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES
} from '../actions/types';

export function categories(
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
