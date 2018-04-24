import { api, headers } from '../utils/api.js';
import uuid4 from 'uuid/v4';

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

export const REQUEST_ADD_POST = 'REQUEST_ADD_POST';
function requestAddPost(id, timestamp, title, body, author, category) {
  return {
    type: REQUEST_ADD_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category
  };
}

export const RECEIVE_ADD_POST = 'RECEIVE_ADD_POST';
function receiveAddPost(json) {
  return {
    type: RECEIVE_ADD_POST,
    post: json,
    receivedAt: Date.now()
  };
}

export const INVALIDATE_CATEGORY = 'INVALIDATE_CATEGORY'; // refresh category
export function invalidateCategory(category) {
  return {
    type: INVALIDATE_CATEGORY,
    category
  };
}

export const REQUEST_VOTE = 'REQUEST_VOTE';
export function requestVote(id, vote) {
  return {
    type: REQUEST_VOTE,
    id,
    vote
  };
}

export const RECEIVE_VOTE = 'RECEIVE_VOTE';
export function receiveVote(json) {
  return {
    type: RECEIVE_VOTE,
    post: json
  };
}

export const REQUEST_POST = 'REQUEST_POST';
function requestPost(id) {
  return {
    type: REQUEST_POST,
    id
  };
}

export const RECEIVE_POST = 'RECEIVE_POST';
function receivePost(id, json) {
  return {
    type: RECEIVE_POST,
    id,
    post: json, //was json.data.children.map(child => child.data)
    receivedAt: Date.now()
  };
}

export const REQUEST_DELETE_POST = 'REQUEST_DELETE_POST';
function requestDeletePost(id) {
  return {
    type: REQUEST_DELETE_POST,
    id
  };
}

export const RECEIVE_DELETE_POST = 'RECEIVE_DELETE_POST';
function receiveDeletePost(id, json) {
  return {
    type: RECEIVE_DELETE_POST,
    id,
    posts: json
  };
}

export const REQUEST_EDIT_POST = 'REQUEST_EDIT_POST';
function requestEditPost(id, title, body) {
  return {
    type: REQUEST_EDIT_POST,
    id,
    title,
    body
  };
}

export const RECEIVE_EDIT_POST = 'RECEIVE_EDIT_POST';
function receiveEditPost(id, json) {
  return {
    type: RECEIVE_EDIT_POST,
    id,
    post: json, //was json.data.children.map(child => child.data)
    receivedAt: Date.now()
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

/*
POST /posts
  USAGE:
    Add a new post

  PARAMS:
    id - UUID should be fine, but any unique id will work
    timestamp - timestamp in whatever format you like, you can use Date.now() if you like
    title - String
    body - String
    author - String
    category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.
hint from: https://udacity-react.slack.com/archives/C6HMLBTQB/p1508823362000167
*/
export function addPost(title, body, author, category) {
  return function(dispatch) {
    dispatch(requestAddPost(title, body, author, category));
    return fetch(`${api}/posts`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        id: uuid4(),
        timestamp: Date.now(),
        title: title,
        body: body,
        author: author,
        category: category
      })
    })
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => dispatch(receiveAddPost(json)));
  };
}

/*
POST /posts/:id
  USAGE:
    Used for voting on a post
  PARAMS:
    option - String: Either "upVote" or "downVote"
*/

export const votePost = (id, vote) => dispatch => {
  return fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ option: vote })
  })
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    )
    .then(json => dispatch(receiveVote(json)));
};

/*
export function votePost(id, vote) {
  return function(dispatch) {
    dispatch(requestVote(id, vote));
    fetch(`${api}/posts/${id}`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ option: vote })
    })
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => dispatch(receiveVote(json)));
  };
}
*/

/*
GET /posts/:id
  USAGE:
    Get the details of a single post
*/
export function getPost(id) {
  return function(dispatch) {
    dispatch(requestPost(id));
    return fetch(`${api}/posts/${id}`, { headers })
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => dispatch(receivePost(id, json)));
  };
}

/*
DELETE /posts/:id
  USAGE:
    Sets the deleted flag for a post to 'true'.
    Sets the parentDeleted flag for all child comments to 'true'.
*/
export function delPost(id) {
  return function(dispatch) {
    dispatch(requestDeletePost(id));
    return fetch(`${api}/posts/${id}`, {
      method: 'DELETE',
      headers
    })
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => dispatch(receiveDeletePost(id, json)));
  };
}

/*
PUT /posts/:id
  USAGE:
    Edit the details of an existing post
  PARAMS:
    title - String
    body - String
*/
export function editPost(id, title, body) {
  return function(dispatch) {
    dispatch(requestEditPost(id, title, body));
    return fetch(`${api}/posts/${id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify({
        title: title,
        body: body
      })
    })
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => dispatch(receiveEditPost(id, json)));
  };
}
