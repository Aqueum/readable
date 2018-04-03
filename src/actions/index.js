export const GET_CATEGORIES = 'GET_CATEGORIES';
export function getGategories() {
  return {
    type: GET_CATEGORIES
  };
}

export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export function selectCategoty(category) {
  return {
    type: SELECT_CATEGORY,
    category
  };
}

export const REFRESH_CATEGORY = 'REFRESH_CATEGORY';
export function refreshCategory(category) {
  return {
    type: REFRESH_CATEGORY,
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
