export const saveAction = (post) => {
  return {
    type: 'SAVE_TODO',
    payload: post,
  };
};

export const addAction = (post) => {
  return {
    type: 'ADD_TODO',
    payload: post,
  };
};

export const deleteAction = (post) => {
  return {
    type: 'DELETE_TODO',
    payload: post,
  };
};

export const changeAction = (post) => {
  return {
    type: 'CHANGE_TODO',
    payload: post,
  };
};

export const changeIdAction = (post) => {
  return {
    type: 'SAVE_TODO_ID',
    payload: post,
  };
};

export const writeOrChangeAction = (post) => {
  return {
    type: 'WRITE_OR_CHANGE',
    payload: post,
  };
};

export const sortAction = (post) => {
  return {
    type: 'SORT_TODO',
    payload: post,
  };
};

export const statusMenuAction = (post) => {
  return {
    type: 'STATUS_MENU_ACTION',
    payload: post,
  };
};

export const changeStyleTodo = (post) => {
  return {
    type: 'DISPLAY_STYLE_TODO',
    payload: post,
  };
};

export const changeColorApp = (post) => {
  return {
    type: 'CHANGE_COLOR_APP',
    payload: post,
  };
};

export const dragDropActon = (post) => {
  return {
    type: 'CHANGE_POSITION',
    payload: post,
  };
};