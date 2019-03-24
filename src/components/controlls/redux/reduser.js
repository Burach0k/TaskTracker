import firebase from '../../firebase';

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
      firebase.todoCollection().doc(action.payload.id).set(action.payload);
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
        console.log(action.payload)
      let deleteState = state.todos;
      deleteState.map((val, index, mas) => {
        if (action.payload === val.id) deleteState.splice(index, 1);
      });
      console.log(deleteState)

      return {
        ...state,
        todos: [...deleteState],
      };
      
      // case 'CHANGE_POSITION':
      // let changePosition = state.todos;
      // let newAr;
      // changePosition.map((todo, index, todos)=>{
      //   if(index === action.payload.newIndex){
      //     let m1 = todos.slice(0,index);
      //     let m2 = todos.slice(index);
      //    newAr = m1.concat(todos[action.payload.targetIndex],m2);
         
      //    if(action.payload.vector>0){
      //      m1 = newAr.slice(0,action.payload.targetIndex+1);
      //      m2 = newAr.slice(action.payload.targetIndex+2);
      //      newAr = m1.concat(m2);            
      //     }else{
      //       m1 = newAr.slice(0,action.payload.targetIndex);
      //       m2 = newAr.slice(action.payload.targetIndex+1);
      //       newAr = m1.concat(m2);
      //     }
      //   }
      // });
      // console.log(newAr)
      //         return {
      //           ...state,
      //           todos: [...newAr],
      //         }

    default:
      return state;
  }
}
