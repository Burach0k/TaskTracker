import firebase from '../firebase';

export const initialState = {
  todos: []
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_TYAN':
    let item = state.item;

    return Object.assign({}, state, {
      item: item.concat([action.payload]),
    })

    case 'SAVE_TODO':

      firebase.addTodo().add(action.payload);
  
      const newState2 = [].concat([state]);
      // console.log(newState2)
      newState2[0].todos.push(action.payload);
    return newState2;


    case 'ADD_TODO':

    const newTodos = Object.assign({}, state.todos)
    console.log(newTodos)
//     const newState = newTodos
//     newState.todos = newState.todos.concat([action.payload]);
// console.log(newState)
// // console.log(newState)
    return //newState;

    // return Object.assign({}, state, {
    //   todos: newState.concat([action.payload]),
    // })

    default:
    return state;
  }
}
