import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './SortTodo.scss';
import { sortAction } from '../../redux/action';

class SortTodo extends Component {
  constructor(props) {
    super(props);
  }

  sortTime() {
    const newSort = {
      timeIncrease: true,
      timeDescending: false,
      priorityIncrease: false,
      priorityDescending: false,
    };

    if (this.props.sort.timeIncrease) {
      newSort.timeIncrease = !newSort.timeIncrease;
      newSort.timeDescending = !newSort.timeDescending;
    }
    this.props.sortAction(newSort);
  }

  sortPriority() {
    const newSort = {
      timeIncrease: false,
      timeDescending: false,
      priorityIncrease: true,
      priorityDescending: false,
    };

    if (this.props.sort.priorityIncrease) {
      newSort.priorityIncrease = !newSort.priorityIncrease;
      newSort.priorityDescending = !newSort.priorityDescending;
    }
    this.props.sortAction(newSort);
  }

  render() {
    return (
      <div id='header-config'>
        <ul className='btn btn-primary'>
          Sort
          <li className='btn btn-primary list-group-item' onClick={this.sortTime.bind(this)}>
            Time
          </li>
          <li className='btn btn-primary list-group-item' onClick={this.sortPriority.bind(this)}>
            priority
          </li>
        </ul>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ sortAction }, dispatch);
}

function mapStateToProps(store) {
  return {
    sort: store.sort,
  };
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(SortTodo);
