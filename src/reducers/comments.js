// Comment reducers - fuunctions that combine the existing state
// with the action to produce the next state for the categories state

import {
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS,
  REQUEST_ADD_COMMENT,
  RECEIVE_ADD_COMMENT,
  REQUEST_VOTE_COMMENT,
  RECEIVE_VOTE_COMMENT,
  REQUEST_COMMENT,
  RECEIVE_COMMENT,
  REQUEST_DELETE_COMMENT,
  RECEIVE_DELETE_COMMENT,
  REQUEST_EDIT_COMMENT,
  RECEIVE_EDIT_COMMENT
} from '../actions/types';

export function comments(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_COMMENTS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_COMMENTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.comments,
        lastUpdated: action.receivedAt
      });
    case REQUEST_ADD_COMMENT:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_ADD_COMMENT:
      return Object.assign({}, state, {
        isFetching: false,
        items: [...state.items, action.comment],
        lastUpdated: action.receivedAt
      });
    case REQUEST_VOTE_COMMENT:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_VOTE_COMMENT:
      return Object.assign({}, state, {
        isFetching: true,
        items: state.items.map(
          item => (item.id === action.comment.id ? action.comment : item)
        ),
        item: action.comment
      });
    case REQUEST_COMMENT:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_COMMENT:
      return Object.assign({}, state, {
        isFetching: false,
        item: action.comment,
        lastUpdated: action.receivedAt
      });
    case REQUEST_DELETE_COMMENT:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_DELETE_COMMENT:
      return Object.assign({}, state, {
        isFetching: false,
        items: state.items.filter(item => item.id !== action.comments.id),
        item: null,
        lastUpdated: action.receivedAt
      });
    case REQUEST_EDIT_COMMENT:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_EDIT_COMMENT:
      return Object.assign({}, state, {
        isFetching: false,
        items: state.items.map(
          item => (item.id === action.comment.id ? action.comment : item)
        ),
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}
