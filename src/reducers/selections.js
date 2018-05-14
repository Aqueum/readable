// Selection reducers - fuunctions that combine the existing state
// with the action to produce the next state for the selections state

import { SELECT_CATEGORY, SELECT_SORT } from '../actions/types';

export function selections(
  state = {
    selectCat: '',
    selectSort: 'score',
    sortValue: 'voteScore'
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
        selectSort: action.selectSort,
        sortValue: action.sortValue
      });
    default:
      return state;
  }
}
