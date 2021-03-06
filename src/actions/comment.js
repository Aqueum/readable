import { api, headers } from '../utils/api.js';
import uuid4 from 'uuid/v4';

// Actions handling elements of the 'comments' state
// Actions (objects dispatched to the redux store,
// subsequently handled by reducers where they are
// combined with current state to give next state)

export const REQUEST_COMMENTS = 'REQUEST_COMMENTS';
function requestComments(post) {
  return {
    type: REQUEST_COMMENTS,
    post
  };
}

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
function receiveComments(post, json) {
  return {
    type: RECEIVE_COMMENTS,
    post,
    comments: json,
    receivedAt: Date.now()
  };
}

export const REQUEST_ADD_COMMENT = 'REQUEST_ADD_COMMENT ';
function requestAddComment(id, timestamp, body, author, parentId) {
  return {
    type: REQUEST_ADD_COMMENT,
    id,
    timestamp,
    body,
    author,
    parentId
  };
}

export const RECEIVE_ADD_COMMENT = 'RECEIVE_ADD_COMMENT';
function receiveAddComment(json) {
  return {
    type: RECEIVE_ADD_COMMENT,
    comment: json,
    receivedAt: Date.now()
  };
}

export const REQUEST_VOTE_COMMENT = 'REQUEST_VOTE_COMMENT';
export function requestVoteComment(id, vote) {
  return {
    type: REQUEST_VOTE_COMMENT,
    id,
    vote
  };
}

export const RECEIVE_VOTE_COMMENT = 'RECEIVE_VOTE_COMMENT';
export function receiveVoteComment(json) {
  return {
    type: RECEIVE_VOTE_COMMENT,
    comment: json
  };
}

export const REQUEST_COMMENT = 'REQUEST_COMMENT';
function requestComment(id) {
  return {
    type: REQUEST_COMMENT,
    id
  };
}

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
function receiveComment(id, json) {
  return {
    type: RECEIVE_COMMENT,
    id,
    comment: json,
    receivedAt: Date.now()
  };
}

export const REQUEST_DELETE_COMMENT = 'REQUEST_DELETE_COMMENT';
function requestDeleteComment(id) {
  return {
    type: REQUEST_DELETE_COMMENT,
    id
  };
}

export const RECEIVE_DELETE_COMMENT = 'RECEIVE_DELETE_COMMENT';
function receiveDeleteComment(id, json) {
  return {
    type: RECEIVE_DELETE_COMMENT,
    id,
    comments: json
  };
}

export const REQUEST_EDIT_COMMENT = 'REQUEST_EDIT_COMMENT';
function requestEditComment(id, timestamp, body) {
  return {
    type: REQUEST_EDIT_COMMENT,
    id,
    timestamp,
    body
  };
}

export const RECEIVE_EDIT_COMMENT = 'RECEIVE_EDIT_COMMENT';
function receiveEditComment(id, json) {
  return {
    type: RECEIVE_EDIT_COMMENT,
    id,
    comment: json, //was json.data.children.map(child => child.data)
    receivedAt: Date.now()
  };
}

// API call actions - with documentation from the API

/*
GET /posts/:id/comments
  USAGE:
    Get all the comments for a single post
*/
export function getPostComments(id) {
  return function(dispatch) {
    dispatch(requestComments(id));
    return fetch(`${api}/posts/${id}/comments`, { headers })
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => dispatch(receiveComments(id, json)));
  };
}

/*
POST /comments
  USAGE:
    Add a comment to a post

  PARAMS:
    id: Any unique ID. As with posts, UUID is probably the best here.
    timestamp: timestamp. Get this however you want.
    body: String
    author: String
    parentId: Should match a post id in the database.
*/
export function addComment(body, author, parentId) {
  return function(dispatch) {
    dispatch(requestAddComment(body, author, parentId));
    return fetch(`${api}/comments`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        id: uuid4(),
        timestamp: Date.now(),
        body: body,
        author: author,
        parentId: parentId
      })
    })
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => dispatch(receiveAddComment(json)));
  };
}

/*
POST /comments/:id
  USAGE:
    Used for voting on a comment.
  PARAMS:
    option - String: Either "upVote" or "downVote"
*/
export function voteComment(id, vote) {
  return function(dispatch) {
    dispatch(requestVoteComment(id, vote));
    return fetch(`${api}/comments/${id}`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ option: vote })
    })
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => dispatch(receiveVoteComment(json)));
  };
}

/*
GET /comments/:id
  USAGE:
    Get the details for a single comment
*/
export function getComment(id) {
  return function(dispatch) {
    dispatch(requestComment(id));
    return fetch(`${api}/comments/${id}`, { headers })
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => dispatch(receiveComment(id, json)));
  };
}

/*
DELETE /comments/:id
  USAGE:
    Sets a comment's deleted flag to 'true'
*/
export function delComment(id) {
  return function(dispatch) {
    dispatch(requestDeleteComment(id));
    return fetch(`${api}/comments/${id}`, {
      method: 'DELETE',
      headers
    })
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => dispatch(receiveDeleteComment(id, json)));
  };
}

/*
PUT /comments/:id
  USAGE:
    Edit the details of an existing comment

  PARAMS:
    timestamp: timestamp. Get this however you want.
    body: String
*/
export function editComment(id, body) {
  return function(dispatch) {
    dispatch(requestEditComment(id, body));
    return fetch(`${api}/comments/${id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify({
        timestamp: Date.now(),
        body: body
      })
    })
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => dispatch(receiveEditComment(id, json)));
  };
}
