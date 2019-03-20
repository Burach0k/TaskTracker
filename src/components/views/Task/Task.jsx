import React, { Fragment } from 'react';

class Task extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    return <div className = 'task'>
      <p className = 'task-name'>{this.props.data.name}</p>
      <p className = 'task-discription'>{this.props.data.discription}</p>
      <p className = 'task-date'>{new Date(this.props.data.date.seconds) + ' '}</p>
      <p className = 'task-priority'>{this.props.data.priority}</p>
    </div>
  }
}

export default Task;