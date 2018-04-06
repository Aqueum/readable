import { api, headers } from '../utils/api.js';

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
    post: json,
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
export function addPost(id, timestamp, title, body, author, category) {
  return function(dispatch) {
    dispatch(requestAddPost(id, timestamp, title, body, author, category));
    return fetch(`${api}/posts`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        id: id,
        timestamp: timestamp,
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
