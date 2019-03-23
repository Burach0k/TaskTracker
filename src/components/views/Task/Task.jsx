import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { bindActionCreators } from 'redux';
import {
  deleteAction,
  changeIdAction,
  writeOrChangeAction,
  changeAction,
  statusMenuAction,
} from '../../redux/action';
import './Task.scss';
class Task extends Component {
  constructor(props) {
    super(props);
  }
  delete(id) {
    if (localStorage.getItem('user')) this.props.deleteAction(id);
  }
  change(id) {
    if (localStorage.getItem('user')) {
      const menu = document.getElementById('write');
      menu.style.top = document.documentElement.scrollTop + document.documentElement.clientHeight/5 +'px';
      menu.style.left = '20vw';
      this.props.changeIdAction(id);
      this.props.writeOrChangeAction(false);
    }
  }
  complite(data) {
    if (localStorage.getItem('user')) {
      let newDate = data;
      newDate.status = true;
      this.props.changeAction({ changeItems: newDate, id: data.id });
    }
  }
  changeColor(id) {
    if (localStorage.getItem('user')) {
      const colorMenu = document.getElementById('choose-color');
      colorMenu.style.top = document.documentElement.scrollTop + document.documentElement.clientHeight/2 +'px';
      colorMenu.style.left = '35vw';
      this.props.changeIdAction(id);
      this.props.statusMenuAction({ forTodo: true, forApp: false });
    }
  }

  dragDrop(event) {
    // const targerTodo = event.currentTarget;
    // window.addEventListener('mousemove',move);
    // window.addEventListener('mouseup',up);
    // function up(){
    //   window.removeEventListener('mousemove',move);
    //   window.removeEventListener('mousemove', up)
    // };
    // function move(e){
    //   targerTodo.style.position = 'relative';
    //   targerTodo.style.top = 10 + targerTodo.getBoundingClientRect().top;
    //   targerTodo.style.left = 10 + targerTodo.getBoundingClientRect().left;
    //   console.log(targerTodo.style.left)
    // }
  }
  render() {
    if (this.props.style.line)
      return (
        <div
          style={{ backgroundColor: this.props.data.color }}
          className='task card mb-3'
          onMouseDown={this.dragDrop.bind(this)}>
          <div className='row'>
            <div className='col-md-1'>
              <img src={this.props.data.userImg} className='card-img' alt='..' />
            </div>

            <div className='col-md-10'>
              <div className='card-body'>
                <div className='task-header'>
                  <div className={'task-status ' + this.props.data.status}>
                    <FontAwesomeIcon icon='check' />
                  </div>
                  <h5 className='task-name'>{this.props.data.name}</h5>

                  <ul className='task-ui'>
                    <li>
                      <p className='task-date'>{this.props.data.date}</p>
                    </li>
                    <li>
                      <p className='task-priority'>{this.props.data.priority}</p>
                    </li>
                  </ul>

                  <div className='config'>
                    <ul>
                      <FontAwesomeIcon icon='cog' />
                      <li  className = 'btn btn-primary list-group-item' onClick={this.change.bind(this, this.props.data.id)}>change</li>
                      <li  className = 'btn btn-primary list-group-item' onClick={this.delete.bind(this, this.props.data.id)}>delete</li>
                      <li  className = 'btn btn-primary list-group-item' onClick={this.complite.bind(this, this.props.data)}>complite</li>
                      <li  className = 'btn btn-primary list-group-item' onClick={this.changeColor.bind(this, this.props.data.id)}>color</li>
                    </ul>
                  </div>
                </div>
                <p className='task-discription'>{this.props.data.discription}</p>
              </div>
            </div>
          </div>
        </div>
      );
    if (this.props.style.block)
      return (
        <div  style={{ backgroundColor: this.props.data.color }} className='card card-block'>
          <img src={this.props.data.userImg} className='card-img-top' alt='user photo' />
          <div className='card-body'>
            <div className={'task-status ' + this.props.data.status}>
              <FontAwesomeIcon icon='check' />
            </div>

            <h5 className='card-title'>{this.props.data.name}</h5>
            <ul className='task-ui'>
              <li>
                <p className='task-date'>{this.props.data.date}</p>
              </li>
              <li>
                <p className='task-priority'>{this.props.data.priority}</p>
              </li>
            </ul>
            <p className='task-discription card-text'>{this.props.data.discription}</p>
            <div className='config config-block'>
              <ul>
                <FontAwesomeIcon icon='cog' />
                <li onClick={this.change.bind(this, this.props.data.id)}>change</li>
                <li onClick={this.delete.bind(this, this.props.data.id)}>delete</li>
                <li onClick={this.complite.bind(this, this.props.data)}>complite</li>
                <li onClick={this.changeColor.bind(this, this.props.data.id)}>color</li>
              </ul>
            </div>
            <p className='card-text' />
          </div>
        </div>
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
)(Task);
