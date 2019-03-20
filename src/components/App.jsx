import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/CreateStore';
import './App.scss';
import Post from './controlls/Post/Post';
import Authorization from './controlls/Authorization/Authorization';
import DropPost from './controlls/DropPost/DropPost';

const App = () => (
  <div className='container'>
    <Provider store={store}>
      <Authorization />
      <DropPost />
      <Post />
    </Provider>
  </div>
);

export default App;
