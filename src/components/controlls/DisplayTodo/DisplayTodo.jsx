import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppStyle from '../../views/AppStyle/AppStyle';
import firebase from '../../firebase';
import Task from '../Task/Task';
import './DisplayTodo.scss';
import DisplayStyleTodo from '../../views/DisplayStyleTodo/DisplayStyleTodo';
import { addAction } from '../redux/action';
import SortTodo from '../../views/SortTodo/SortTodo';

class DisplayTodo extends Component {
  constructor(props) {
    super(props);
    this.td = [];
    this.addComponents = this.addComponents.bind(this);
    firebase.getTodo().then((querySnapshot) => {
      [...querySnapshot.docs].map((val) => {
        this.props.addAction(Object.assign({}, val.data(), { id: val.id }));
      });
    });
  }

  comparator(a, b) {
    const argumentA = a.props.data.priority;
    const argumentB = b.props.data.priority;
    if (this.props.sort.timeIncrease)
      return new Date(a.props.data.date) - new Date(b.props.data.date);
    if (this.props.sort.timeDescending)
      return new Date(b.props.data.date) - new Date(a.props.data.date);

    if (this.props.sort.priorityIncrease) {
      if (argumentA === 'Height' && (argumentB === 'Low' || argumentB === 'Medium')) return 1;
      if (argumentA === 'Medium' && argumentB === 'Low') return 1;
      if (argumentA === 'Low' && (argumentB === 'Height' || argumentB === 'Medium')) return -1;
      if (argumentA === 'Medium' && argumentB === 'Height') return -1;
      if (argumentA === argumentB) return 0;
    }
    if (this.props.sort.priorityDescending) {
      if (argumentA === 'Height' && (argumentB === 'Low' || argumentB === 'Medium')) return -1;
      if (argumentA === 'Medium' && argumentB === 'Low') return -1;
      if (argumentA === 'Low' && (argumentB === 'Height' || argumentB === 'Medium')) return 1;
      if (argumentA === 'Medium' && argumentB === 'Height') return 1;
      if (argumentA === argumentB) return 0;
    }
  }

  addComponents() {
    this.complite = [];
    this.noComplite = [];
    this.props.todos.map((todo) => {
      if (todo.status) this.complite.push(<Task key={todo.id} data={todo} />);
      else this.noComplite.push(<Task key={todo.id} data={todo} />);
    });
    if (this.props.style.line) {
      this.style = {
        complite: 'no-complite-todos',
        noComplite: 'complite-todos',
      };
    } else {
      this.style = {
        complite: 'no-complite-todos-block',
        noComplite: 'complite-todos-block',
      };
    }
  }

  render() {
    this.addComponents();
    return (
      <div
        style={{ backgroundColor: this.props.styleApp, filter: 'brightness(130%)' }}
        id='todos-bar'>
        <SortTodo />
        <AppStyle />
        <DisplayStyleTodo />
        <h2>To do ({this.noComplite.length})</h2>
        <div id={this.style.noComplite}>{this.noComplite.sort(this.comparator.bind(this))}</div>
        <h2>Complite ({this.complite.length})</h2>
        <div id={this.style.complite}>{this.complite.sort(this.comparator.bind(this))}</div>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addAction }, dispatch);
}

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
