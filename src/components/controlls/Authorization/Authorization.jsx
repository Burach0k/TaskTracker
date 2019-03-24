import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '../../firebase';
import './Authorization.scss';

class Authorization extends Component {
  constructor(props) {
    super(props);
    this.state = { user: undefined };
  }

  login() {
    firebase.auth().then((user) => {
      this.setState({ user });
      localStorage.setItem('user', JSON.stringify(user));
    });
  }

  logout() {
    firebase
      .signOut()
      .signOut()
      .then(localStorage.clear(), this.setState({ user: undefined }));
  }

  render() {
    const user = JSON.parse(localStorage.getItem('user'))
      ? JSON.parse(localStorage.getItem('user'))
      : this.state.user;
    if (!user && this.state.user === undefined)
      return (
        <button className='login btn btn-primary' onClick={this.login.bind(this)}>
          {'sign in'}
        </button>
      );
    return (
      <div id='user-login'>
        <img className='mr-3' id='user-img' src={user.user.photoURL} />

        <button className='logout btn btn-primary' onClick={this.logout.bind(this)}>
          {'logout'}
        </button>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    items: store.user,
  };
}

export default connect(mapStateToProps)(Authorization);
