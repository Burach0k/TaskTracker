import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import firebase from '../../firebase';
import './DropPost.scss';
import { action } from '../../redux/action';
import { actionNews } from '../../redux/action';
import { bindActionCreators } from 'redux';

class DropPost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
console.log(firebase)
    firebase.getNew()
    .then((querySnapshot) => {
      [...querySnapshot.docs].map( val => this.props.action(val.data()));
      this.i = [...querySnapshot.docs].length;
    })
  }

  render() {
    return (
      <div className='drop-post'>
        <input id='drop-contein' type='text' placeholder='Введите url или текст' />
        <input id='isUrl' type='checkbox' />
        <p>Выберите, если указываете url</p>
        <button
          className='drop-button'
          onClick={() => {
            this.props.actionNews({
              id: this.i++,
              name: this.props.user.name,
              iconUrl: this.props.user.imgUrl,
              contain: document.getElementById('drop-contein').value,
              isUrl: document.getElementById('isUrl').checked,
              info: { like: 10, repost: 0, view: 1 },
            });
          }}>
          {'Добавить пост'}
        </button>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    items: store.item,
    user: store.user,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ action: action, actionNews: actionNews }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(DropPost);
