// API stuff modified from MyReads/src/BooksAPI.js :  https://github.com/Aqueum/MyReads/blob/master/src/BooksAPI.js
const api = 'http://localhost:3001';

// Generate a unique token for storing data on the backend server.
let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  // 'Accept': 'application/json', //guessing this isn't needed
  Authorization: token
};

// action structure modified from https://redux.js.org/advanced/async-actions

// import fetch from 'cross-fetch'; - presumed not neccesary

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

export const REQUEST_POSTS = 'REQUEST_POSTS';
function requestPosts(category) {
  return {
    type: REQUEST_POSTS,
    category
  };
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
function receivePosts(category, json) {
  return {
    type: RECEIVE_POSTS,
    category,
    posts: json, //was json.data.children.map(child => child.data)
    receivedAt: Date.now()
  };
}

export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export function selectCategory(category) {
  return {
    type: SELECT_CATEGORY,
    category
  };
}

// refresh category:
export const INVALIDATE_CATEGORY = 'INVALIDATE_CATEGORY';
export function invalidateCategory(category) {
  return {
    type: INVALIDATE_CATEGORY,
    category
  };
}

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

/*
GET /posts
  USAGE:
    Get all of the posts. Useful for the main page when no category is selected.

GET /:category/posts
  USAGE:
    Get all of the posts for a particular category
*/
export function fetchPosts(category) {
  return function(dispatch) {
    dispatch(requestPosts(category));
    return fetch(
      category === '' ? `${api}/posts` : `${api}/${category}/posts`,
      { headers }
    )
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => dispatch(receivePosts(category, json)));
  };
}
