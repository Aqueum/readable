import { api, headers } from '../utils/api.js';

// action structure modified from https://redux.js.org/advanced/async-actions
// import fetch from 'cross-fetch'; - presumed not neccesary

// Actions handling elements of the 'categories' state
// Actions (objects dispatched to the redux store,
// subsequently handled by reducers where they are
// combined with current state to give next state)

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
function requestCategories() {
  return {
    type: REQUEST_CATEGORIES
  };
}

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
function receiveCategories(json) {
  return {
    type: RECEIVE_CATEGORIES,
    categories: json,
    receivedAt: Date.now()
  };
}

export const INVALIDATE_CATEGORIES = 'INVALIDATE_CATEGORIES';
export function invalidateCategories() {
  return {
    type: INVALIDATE_CATEGORIES
  };
}

export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export function selectCategory(category) {
  return {
    type: SELECT_CATEGORY,
    category
  };
}

// API call actions - with documentation from the API

/*
GET /categories
  USAGE:
    Get all of the categories available for the app. List is found in categories.js.
    Feel free to extend this list as you desire.
*/
export function fetchCategories() {
  return function(dispatch) {
    dispatch(requestCategories());
    return fetch(`${api}/categories`, { headers })
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => dispatch(receiveCategories(json)));
  };
}
