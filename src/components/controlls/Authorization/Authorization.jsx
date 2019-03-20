import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from '../../firebase';
import { connect } from 'react-redux';
import { userAction } from '../../redux/authAction';
import { bindActionCreators } from 'redux';
import './Authorization.scss';

class Authorization extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    firebase.auth().then((user) => {
     this.props.userAction(user);
     localStorage.setItem({user: user});
    });
  }

  logout(){
     localStorage.clear();
  }

  render() {
    if(this.props.items === null)
    return (
      <button className='login' onClick={this.login}>
        {'sign in'}
      </button>
    );
    return <div>
      <img id = 'user-img' src = {this.props.items.imgUrl} />
      <p id = 'user-name'>{this.props.items.name}</p>
      <button className='logout' onClick={this.logout}>
        {'logout'}
      </button>
    </div>
  }
}

function mapStateToProps(store) {
  return {
    items: store.user,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ userAction: userAction }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Authorization);
