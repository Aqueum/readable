import { combineReducers } from 'redux';

const categories = (state = {}, action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return {
        name: action.name,
        path: action.path
      };
    default:
      return state;
  }
};

export default combineReducers({
  categories
});
