import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/CreateStore';
import './App.scss';
import AddTodo from './views/AddTodo/AddTodo'
import WriteToDo from './views/WriteTodo/WriteTodo'
import DisplayTodo from './controlls/DisplayTodo/DisplayTodo';

const App = () => (
  <div className='container'>
    <Provider store={store}>
  <WriteToDo />
  <AddTodo />
      <DisplayTodo />
    </Provider>
  </div>
);

export default App;
