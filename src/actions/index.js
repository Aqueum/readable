// modified from https://redux.js.org/advanced/async-actions

export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export function selectCategoty(category) {
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
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  };
}
