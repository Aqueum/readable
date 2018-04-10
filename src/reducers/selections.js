import { SELECT_CATEGORY, SELECT_SORT } from '../actions/select';

export function selections(state = '', action) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return action.category;
    case SELECT_SORT:
      return action.sortby;
    default:
      return state;
  }
}
