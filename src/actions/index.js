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
