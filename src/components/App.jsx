import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/CreateStore';
import './App.scss';
import DisplayTodo from './controlls/DisplayTodo/DisplayTodo';
import Header from './controlls/Headre/Header';
import WriteTodo from './views/WriteTodo/WriteTodo';
import ChangeColorTodo from './views/ChangeColorTodo/ChangeColorTodo';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faList, faTh, faCheck, faCog } from '@fortawesome/free-solid-svg-icons';

library.add(faList, faTh, faCheck, faCog);

const App = () => (
  <div className='app-container'>
    <Provider store={store}>
      <ChangeColorTodo />
      <WriteTodo />
      <Header />
      <DisplayTodo />
    </Provider>
  </div>
);

export default App;
