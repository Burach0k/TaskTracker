import React, { Component } from 'react';
import './WriteTodo.scss';
import uuid from 'uuid/v1';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addAction, saveAction, changeAction, writeOrChangeAction } from '../redux/action';

class WriteTodo extends Component {
  constructor(props) {
    super(props);
  }

  addInfo() {
    const name = document.getElementById('write-name');
    const discription = document.getElementById('write-discription');
    const priority = document.getElementById('write-priority');
    const status = document.getElementById('write-status');
    const menu = document.getElementById('write');

    menu.style.top = '-80vh';

    const todo = {
      userImg: JSON.parse(localStorage.getItem('user')).user.photoURL,
      userName: JSON.parse(localStorage.getItem('user')).user.displayName,
      name: name.value,
      discription: discription.value,
      priority: priority.value,
      id: uuid(),
      status: status.checked,
      date: `${new Date().toLocaleTimeString('en-US')} ${new Date().toLocaleDateString('en-US')}`,
      color: 'white',
    };

    if (this.props.writeOrChange) {
      this.props.saveAction(todo);
      this.props.addAction(todo);
    } else {
      this.props.writeOrChangeAction(true);
      this.props.changeAction({ changeItems: todo, id: this.props.changeTodoId });
    }
    name.value = '';
    priority.value = '';
    discription.value = '';
    status.checked = false;
  }

  close() {
    const menu = document.getElementById('write');
    menu.style.top = '-80vh';
  }

  render() {
    return (
      <form style={{ backgroundColor: this.props.colorApp }} id='write'>
        <div className='card-body'>
          <div className='btn btn-primary' onClick={this.close.bind(this)}>
            X
          </div>
          <p className='card-title' id='write-title'>
            Введите данные для новой todo
          </p>
          <div className='form-group'>
            <input
              className='form-control'
              type='text'
              id='write-name'
              placeholder='Введите название todo'
            />
            <input
              className='form-control'
              type='text'
              id='write-discription'
              placeholder='Введите описание todo'
            />

            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <div className='input-group-text'>
                  <input
                    id='write-status'
                    type='checkbox'
                    aria-label='Checkbox for following text input'
                  />
                </div>
              </div>
              <input
                type='text'
                className='form-control status-control'
                placeholder='complite'
                aria-label='Text input with checkbox'
                readOnly
              />
            </div>

            <div className='form-group'>
              <select className='form-control' id='write-priority'>
                <option defaultValue='selected'>Medium</option>
                <option>Height</option>
                <option>Low</option>
              </select>
            </div>

            <div className='btn btn-primary' onClick={this.addInfo.bind(this)}>
              Add
            </div>
          </div>
        </div>
      </form>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ saveAction, addAction, changeAction, writeOrChangeAction }, dispatch);
}

function mapStateToProps(store) {
  return {
    todos: store.todos,
    writeOrChange: store.writeOrChange,
    changeTodoId: store.changeTodoId,
    colorApp: store.colorApp,
  };
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(WriteTodo);
