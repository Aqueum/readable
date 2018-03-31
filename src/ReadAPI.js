// modified from MyReads/src/BooksAPI.js
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

/*
GET /categories
  USAGE:
    Get all of the categories available for the app. List is found in categories.js.
    Feel free to extend this list as you desire.
*/
export const getCats = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

/*
GET /:category/posts
  USAGE:
    Get all of the posts for a particular category
*/
export const getCatPosts = category =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data);

/*
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
*/
export const addPost = (id, timestamp, title, body, author, category) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: id,
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
export const get = postId =>
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
export const postComments = id =>
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

/*
PUT /comments/:id
  USAGE:
    Edit the details of an existing comment

  PARAMS:
    timestamp: timestamp. Get this however you want.
    body: String
*/

/*
DELETE /comments/:id
  USAGE:
    Sets a comment's deleted flag to 'true'
*/

/* unused originals */
export const update = (post, shelf) =>
  fetch(`${api}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json());

export const search = query =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  })
    .then(res => res.json())
    .then(data => data.posts);
