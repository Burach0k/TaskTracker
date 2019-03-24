import React, { Component } from 'react';
import './DisplayStyleTodo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeStyleTodo } from '../../controlls/redux/action';

class DisplayStyleTodo extends Component {
  constructor(props) {
    super(props);
  }

  chooseList() {
    this.props.changeStyleTodo({
      block: false,
      line: true,
    });
  }

  chooseBlock() {
    this.props.changeStyleTodo({
      block: true,
      line: false,
    });
  }

  render() {
    return (
      <div id='list-style'>
        <div onClick={this.chooseList.bind(this)} id='line-list'>
          <FontAwesomeIcon icon='list' />
        </div>
        <div onClick={this.chooseBlock.bind(this)} id='block-list'>
          <FontAwesomeIcon icon='th' />
        </div>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ changeStyleTodo }, dispatch);
}

function mapStateToProps(store) {
  return {
    style: store.displayStyleTodo,
  };
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(DisplayStyleTodo);
