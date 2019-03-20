import React, { Fragment } from 'react';
import './WriteTodo.scss';
import {saveAction} from '../../redux/action';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class WriteTodo extends React.Component {
  constructor(props) {
    super(props);
    this.addInfo = this.addInfo.bind(this);

  }
  
  addInfo(){
    let name = document.getElementById('write-name');
    let discription = document.getElementById('write-discription');
    let priority = document.getElementById('write-priority');
    
    this.props.saveAction({
      name: name.value,
      discription: discription.value,
      priority: priority.value,
      date: new Date(),
    });
  }

  render() {
    return (
      <div id='write'>
        <p id='write-title'>Введите данные для новой todo</p>
        <input type='text' id='write-name' placeholder='Введите название todo' />
        <input type='text' id='write-discription' placeholder='Введите описание todo' />
        <select id='write-priority'>
          <option defaultValue={'selected'}>Выберите приоритет</option>
          <option>Height</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <button onClick = {this.addInfo}>Add</button>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ saveAction: saveAction }, dispatch);
}

// BeginnerControl.propTypes = {
//   name: PropTypes.string.isRequired,
// };

function mapStateToProps(store){
  return {
    todos: store.todos,
  }
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(WriteTodo)
