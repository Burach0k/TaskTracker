import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from '../../firebase';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Task from '../../views/Task/Task';

import {addAction} from '../../redux/action'

class DisplayTodo extends Component {
  constructor(props) {
    super(props);
    this.td = [];

    firebase.getTodo().then((querySnapshot) => {
      [...querySnapshot.docs].map((val) => this.props.addAction(Object.assign({}, val.data(), {id:val.id})));
    });
  
  }
componentWillReceiveProps(){
  this.props.todos.map((todo) => {
    this.td.push(<Task key = {this.props.todos[0].id} data={todo} />);
  });
}

componentWillMount() {
  this.props.todos.map((todo) => {
      this.td.push(<Task key = {this.props.todos[0].id} data={todo} />);
    });
  }

  render() {
    return this.td;
  }
}


function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addAction: addAction }, dispatch);
}

// BeginnerControl.propTypes = {
//   name: PropTypes.string.isRequired,
// };

function mapStateToProps(store){
  console.log(store)
  return {
    todos: store.todos,
  }
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(DisplayTodo)
