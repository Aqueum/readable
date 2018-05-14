import { SELECT_CATEGORY, SELECT_SORT } from './types';

// Actions handling elements of the 'selections' state
// Actions (objects dispatched to the redux store,
// subsequently handled by reducers where they are
// combined with current state to give next state)

export function selectCategory(category) {
  return {
    type: SELECT_CATEGORY,
    selectCat: category
  };
}

export function selectSort(sortBy) {
  const lookup = { score: 'voteScore', recency: 'timestamp' };
  return {
    type: SELECT_SORT,
    selectSort: sortBy,
    sortValue: lookup[sortBy]
  };
}
