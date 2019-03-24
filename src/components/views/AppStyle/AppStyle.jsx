import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  deleteAction,
  changeIdAction,
  writeOrChangeAction,
  changeAction,
  statusMenuAction,
} from '../../redux/action';
import './AppStyle.scss';

class AppStyle extends Component {
  constructor(props) {
    super(props);
  }

  chooseStyle() {
    const colorMenu = document.getElementById('choose-color');
    colorMenu.style.top = `${document.documentElement.scrollTop +
      document.documentElement.clientHeight / 2}px`;
    colorMenu.style.left = '35vw';

    this.props.statusMenuAction({ forTodo: false, forApp: true });
  }

  render() {
    return (
      <button className='btn btn-primary' onClick={this.chooseStyle.bind(this)} id='app-style'>
        App Style
      </button>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { deleteAction, changeIdAction, writeOrChangeAction, changeAction, statusMenuAction },
    dispatch
  );
}

function mapStateToProps(store) {
  return {
    todos: store.todos,
    style: store.displayStyleTodo,
  };
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(AppStyle);
