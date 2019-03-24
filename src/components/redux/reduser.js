import firebase from '../firebase';

export const initialState = {
  todos: [],
  writeOrChange: true,
  changeTodoId: '',
  sort: {
    timeIncrease: true,
    timeDescending: false,
    priorityIncrease: false,
    priorityDescending: false,
  },
  displayStyleTodo: {
    block: false,
    line: true,
  },
  colorMenu: {
    forTodo: false,
    forApp: false,
  },
  colorApp: '#514ED9',
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_TODO':
      firebase.todoCollection()..doc(action.payload.id).set(action.payload);
      return state;

    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos.concat(action.payload)],
      };

    case 'SORT_TODO':
      return {
        ...state,
        sort: action.payload,
      };

    case 'SAVE_TODO_ID':
      return {
        ...state,
        changeTodoId: action.payload,
      };

    case 'WRITE_OR_CHANGE':
      return {
        ...state,
        writeOrChange: action.payload,
      };

    case 'STATUS_MENU_ACTION':
      return {
        ...state,
        colorMenu: action.payload,
      };

    case 'CHANGE_COLOR_APP':
      return {
        ...state,
        colorApp: action.payload,
      };

    case 'DISPLAY_STYLE_TODO':
      return {
        ...state,
        displayStyleTodo: action.payload,
      };

    case 'CHANGE_TODO':
      firebase
        .todoCollection()
        .doc(action.payload.id)
        .update(action.payload.changeItems);
      const changeState = state.todos;

      changeState.map((val, index, mas) => {
        if (action.payload.id === val.id) {
          for (const item in action.payload.changeItems) {
            mas[index][item] = action.payload.changeItems[item];
          }
        }
      });

      return {
        ...state,
        todos: [...changeState],
      };

    case 'DELETE_TODO':
      firebase
        .todoCollection()
        .doc(action.payload)
        .delete();

      const deleteState = state.todos;
      deleteState.map((val, index, mas) => {
        if (action.payload === val.id) mas.splice(index, 1);
      });

      return {
        ...state,
        todos: [...deleteState],
      };

    default:
      return state;
  }
}
