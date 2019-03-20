import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Public from '../../views/Public/Public';
import Config from '../../views/Config/Config';
import { bindActionCreators } from 'redux';
import News from '../../views/News/News';
import Status from '../../views/Status/Status';
import './Post.scss'

class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(){
    // console.log(this.props.items, 'will props');
  }

  render() {
    return this.props.items.map((val) => {
     return <div key ={val.id}  className={'post'}>
        <Public name={val.name} iconUrl={val.iconUrl} />
        <Config />
        <News contain={val.contain} isUrl={val.isUrl} />
        <Status info={val.info} />
      </div>;
    });
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ action: '' }, dispatch);
}

// BeginnerControl.propTypes = {
//   name: PropTypes.string.isRequired,
// };

function mapStateToProps(store){
  return {
    items: store.item,
  }
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Post)
