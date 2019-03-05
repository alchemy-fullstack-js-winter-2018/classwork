export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const updateSearchTerm = term => ({
  type: UPDATE_SEARCH_TERM,
  payload: term
});

export const UPDATE_COLOR = 'UPDATE_COLOR';
export const updateColor = color => ({
  type: UPDATE_COLOR,
  payload: color
});
