export const saveAction = post => {
  return {
    type: 'SAVE_TODO',
    payload: post,
  }
}

export const addAction = post => {
  return {
    type: 'ADD_TODO',
    payload: post,
  }
}