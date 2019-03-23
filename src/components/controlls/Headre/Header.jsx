import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import { connect } from 'react-redux';
import Authorization from '../Authorization/Authorization';
import AddTodo from '../../views/AddTodo/AddTodo';
import SortTodo from '../../views/SortTodo/SortTodo';
class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style = {{backgroundColor:this.props.colorApp}} id='header'>
        <ul>
          <li>
            <AddTodo />
          </li>
          <li>
            <Authorization />
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    colorApp: store.colorApp,
  };
}

export default connect(
  mapStateToProps
)(Header);

