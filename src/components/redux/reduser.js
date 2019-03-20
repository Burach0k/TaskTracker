import firebase from '../firebase';

export const initialState = {
  item: [],
  user: null,
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_TYAN':
    let item = state.item;

    // firebase.addNew().add(action.payload);

    return Object.assign({}, state, {
      item: item.concat([action.payload]),
    })

    case 'ADD_USER':
    return Object.assign({}, state, {
      user:{
        name: action.payload.user.displayName,
        imgUrl: action.payload.user.photoURL,
      }
    })

    case 'SAVE_TYAN':
    firebase.addNew().add(action.payload);
    let newitem = state.item;
    return Object.assign({}, state, {
      item: newitem.concat([action.payload]),
    })

    default:
    return state;
  }
}
