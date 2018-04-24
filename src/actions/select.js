// Actions handling elements of the 'selections' state
// Actions (objects dispatched to the redux store,
// subsequently handled by reducers where they are
// combined with current state to give next state)

export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export function selectCategory(category) {
  return {
    type: SELECT_CATEGORY,
    selectCat: category
  };
}

export const SELECT_SORT = 'SELECT_SORT';
export function selectSort(sortBy) {
  const lookup = { score: 'voteScore', recency: 'timestamp' };
  return {
    type: SELECT_SORT,
    selectSort: sortBy,
    sortValue: lookup[sortBy]
  };
}
