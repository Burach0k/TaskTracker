import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppStyle from '../../views/AppStyle/AppStyle'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import firebase from '../../firebase';
import Task from '../../views/Task/Task';
import './DisplayTodo.scss';
import DisplayStyleTodo from '../../views/DisplayStyleTodo/DisplayStyleTodo';
import { addAction } from '../../redux/action';
import SortTodo from '../../views/SortTodo/SortTodo'

class DisplayTodo extends Component {
  constructor(props) {
    super(props);
    this.td = [];

    firebase.getTodo().then((querySnapshot) => {
      [...querySnapshot.docs].map((val) => {
        this.props.addAction(Object.assign({}, val.data(), { id: val.id }));
      });
    });
  }
  comparator(a, b) {
    if (this.props.sort.timeIncrease)
      return new Date(a.props.data.date) - new Date(b.props.data.date);
    if (this.props.sort.timeDescending)
      return new Date(b.props.data.date) - new Date(a.props.data.date);

    if (this.props.sort.priorityIncrease) {
      if (
        a.props.data.priority === 'Height' &&
        (b.props.data.priority === 'Low' || b.props.data.priority === 'Medium')
      )
        return 1;
      if (a.props.data.priority === 'Medium' && b.props.data.priority === 'Low') return 1;
      if (
        a.props.data.priority === 'Low' &&
        (b.props.data.priority === 'Height' || b.props.data.priority === 'Medium')
      )
        return -1;
      if (a.props.data.priority === 'Medium' && b.props.data.priority === 'Height') return -1;
      if (a.props.data.priority === b.props.data.priority) return 0;
    }
    if (this.props.sort.priorityDescending) {
      if (
        a.props.data.priority === 'Height' &&
        (b.props.data.priority === 'Low' || b.props.data.priority === 'Medium')
      )
        return -1;
      if (a.props.data.priority === 'Medium' && b.props.data.priority === 'Low') return -1;
      if (
        a.props.data.priority === 'Low' &&
        (b.props.data.priority === 'Height' || b.props.data.priority === 'Medium')
      )
        return 1;
      if (a.props.data.priority === 'Medium' && b.props.data.priority === 'Height') return 1;
      if (a.props.data.priority === b.props.data.priority) return 0;
    }
  }

  render() {
    this.complite = [];
    this.noComplite = [];
    this.props.todos.map((todo) => {
      if (todo.status) this.complite.push(<Task key={todo.id} data={todo} />);
      else this.noComplite.push(<Task key={todo.id} data={todo} />);
    });
    let style;
    if (this.props.style.line) {
      style = {
        complite: 'no-complite-todos',
        noComplite: 'complite-todos',
      };
    } else {
      style = {
        complite: 'no-complite-todos-block',
        noComplite: 'complite-todos-block',
      };
    }

    return (
      <div style={{backgroundColor: this.props.styleApp, filter: 'brightness(130%)'}} id='todos-bar'>
        <SortTodo />
        <AppStyle />
        <DisplayStyleTodo />
        <h2>To do ({this.noComplite.length})</h2>
        <div id={style.noComplite}>{this.noComplite.sort(this.comparator.bind(this))}</div>
        <h2>Complite ({this.complite.length})</h2>
        <div id={style.complite}>{this.complite.sort(this.comparator.bind(this))}</div>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addAction }, dispatch);
}

// BeginnerControl.propTypes = {
//   name: PropTypes.string.isRequired,
// };

function mapStateToProps(store) {
  return {
    todos: store.todos,
    sort: store.sort,
    style: store.displayStyleTodo,
    styleApp: store.colorApp,
  };
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(DisplayTodo);
