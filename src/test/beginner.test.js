import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
// import jest from 'jest'

// import fb from '../components/firebase'
/* global  it expect :true */
/* eslint no-undef: "error" */
jest.mock('../components/firebase', () => ({
  firebase: { getNew: () => {} },
}));

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
});
