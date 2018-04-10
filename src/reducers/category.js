// modified from https://redux.js.org/advanced/async-actions

import {
  INVALIDATE_CATEGORIES,
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES
} from '../actions/category';

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
