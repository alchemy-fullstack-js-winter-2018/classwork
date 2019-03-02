export const UPDATE_TITLE = 'UPDATE_TITLE';
export const updateTitle = title => ({
  type: UPDATE_TITLE,
  payload: title
});

export const UPDATE_SUBTITLE = 'UPDATE_SUBTITLE';
export const updateSubtitle = subtitle => ({
  type: UPDATE_SUBTITLE,
  payload: subtitle
});
