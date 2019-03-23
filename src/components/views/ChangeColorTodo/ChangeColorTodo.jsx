import React, { Component } from 'react';
import './ChangeColorTodo.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {changeAction, changeColorApp } from '../../redux/action';

class ChangeColorTodo extends Component {
  constructor(props) {
    super(props);
  }

  changeColor(e){
    let targetElement =  e.target;
    if(targetElement.id){
      let color = getComputedStyle(e.target).backgroundColor;
      if(this.props.colorMenu.forTodo){
        this.props.changeAction({ changeItems: {color: color,}, id: this.props.id});
      }
      if(this.props.colorMenu.forApp){
        this.props.changeColorApp(color);
        const footer = document.getElementsByTagName('footer')[0];
        footer.style.backgroundColor = color; 
      }
    }
  }
  close() {
    const menu = document.getElementById('choose-color');
    menu.style.top = '-80vh';
  }

  render() {
    return (
      <div id = 'choose-color' className = 'list-group list-group-horizontal-sm'>
        <ul onClick = {this.changeColor.bind(this)}>
          <li className = 'btn-primary list-group-item'><div onClick={this.close.bind(this)}>Close</div></li>
          <li className = 'btn btn-primary list-group-item'><div id = 'red-color-todo'></div></li>
          <li className = 'btn btn-primary list-group-item'><div id = 'blue-color-todo'></div></li>
          <li className = 'btn btn-primary list-group-item'><div id = 'green-color-todo'></div></li>
          <li className = 'btn btn-primary list-group-item'><div id = 'white-color-todo'></div></li>
        </ul>
      </div>
    )
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ changeAction, changeColorApp }, dispatch);
}

function mapStateToProps(store) {
  return {
    colorMenu: store.colorMenu,
    id: store.changeTodoId,
  };
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(ChangeColorTodo);