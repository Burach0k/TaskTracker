import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);
  }

  addTodo() {
    if (localStorage.getItem('user')) {
      const menu = document.getElementById('write');
      menu.style.top = '100px';
      menu.style.left = '20vw';
    }
  }

  render() {
    return (
      <button className='btn btn-primary' onClick={this.addTodo.bind(this)}>
        Add ToDo
      </button>
    );
  }
}

export default AddTodo;
