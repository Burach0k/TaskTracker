import React, { Component } from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import Authorization from '../Authorization/Authorization';
import AddTodo from '../../views/AddTodo/AddTodo';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ backgroundColor: this.props.colorApp }} id='header'>
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

export default connect(mapStateToProps)(Header);
