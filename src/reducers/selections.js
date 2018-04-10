import { SELECT_CATEGORY, SELECT_SORT } from '../actions/select';

export function selections(
  state = {
    selectCat: '',
    selectSort: 'voteScore'
  },
  action
) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return Object.assign({}, state, {
        selectCat: action.selectCat
      });
    case SELECT_SORT:
      return Object.assign({}, state, {
        selectSort: action.selectSort
      });
    default:
      return state;
  }
}
