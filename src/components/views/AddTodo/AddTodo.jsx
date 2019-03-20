import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from '../../firebase';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo() {
    let menu = document.getElementById('write');
    menu.style.top = '100px';
  }

  render() {
    return <button onClick={this.addTodo}>Add ToDo</button>;
  }
}

export default AddTodo;
