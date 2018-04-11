// modified from MyReads/src/BooksAPI.js :  https://github.com/Aqueum/MyReads/blob/master/src/BooksAPI.js
const api = 'http://localhost:3001';
const uuidv4 = require('uuid/v4');

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

/* /
GET /categories
  USAGE:
    Get all of the categories available for the app. List is found in categories.js.
    Feel free to extend this list as you desire.
*/
export const getCats = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

/* /
GET /:category/posts
  USAGE:
    Get all of the posts for a particular category
*/
export const getCatPosts = category =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data);

/* /
GET /posts
  USAGE:
    Get all of the posts. Useful for the main page when no category is selected.
*/
export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data);

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
export const addPost = (id, timestamp, title, body, author, category) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: uuidv4(),
      timestamp: timestamp,
      title: title,
      body: body,
      author: author,
      category: category
    })
  })
    .then(res => res.json())
    .then(data => data);

/*
GET /posts/:id
  USAGE:
    Get the details of a single post
*/
export const getPost = postId =>
  fetch(`${api}/posts/${postId}`, { headers })
    .then(res => res.json())
    .then(data => data);

/*
POST /posts/:id
  USAGE:
    Used for voting on a post
  PARAMS:
    option - String: Either "upVote" or "downVote"
*/
export const votePost = (postId, vote) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option: vote })
  })
    .then(res => res.json())
    .then(data => data);

/*

PUT /posts/:id
  USAGE:
    Edit the details of an existing post
  PARAMS:
    title - String
    body - String
*/
export const editPost = (id, title, body) =>
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: title,
      body: body
    })
  })
    .then(res => res.json())
    .then(data => data);

/*
DELETE /posts/:id
  USAGE:
    Sets the deleted flag for a post to 'true'.
    Sets the parentDeleted flag for all child comments to 'true'.
*/
export const delPost = postId =>
  fetch(`${api}/posts/${postId}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => data);

/*
GET /posts/:id/comments
  USAGE:
    Get all the comments for a single post
*/
export const getPostComments = id =>
  fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data);

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
export const addComment = (id, timestamp, body, author, parentId) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: id,
      timestamp: timestamp,
      body: body,
      author: author,
      parentID: parentId
    })
  })
    .then(res => res.json())
    .then(data => data);

/*
GET /comments/:id
  USAGE:
    Get the details for a single comment
*/
export const getComment = id =>
  fetch(`${api}/comments/${id}`, { headers })
    .then(res => res.json())
    .then(data => data);

/*
POST /comments/:id
  USAGE:
    Used for voting on a comment.
  PARAMS:
    option - String: Either "upVote" or "downVote"
*/
export const voteComment = (id, vote) =>
  fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option: vote })
  })
    .then(res => res.json())
    .then(data => data);

/*
PUT /comments/:id
  USAGE:
    Edit the details of an existing comment

  PARAMS:
    timestamp: timestamp. Get this however you want.
    body: String
*/
export const editComment = (id, timestamp, body) =>
  fetch(`${api}/comments/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      timestamp: timestamp,
      body: body
    })
  })
    .then(res => res.json())
    .then(data => data);

/*
DELETE /comments/:id
  USAGE:
    Sets a comment's deleted flag to 'true'
*/
export const delComment = id =>
  fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => data);
