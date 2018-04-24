// Constants required for the api to run,
// including a function to generate a random token for the header

// API stuff modified from MyReads/src/BooksAPI.js :  https://github.com/Aqueum/MyReads/blob/master/src/BooksAPI.js
export const api = 'http://localhost:3001';

// Generate a unique token for storing data on the backend server.
let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

export const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: token
};
