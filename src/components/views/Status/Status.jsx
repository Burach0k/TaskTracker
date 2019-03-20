import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Status.scss';
import Like from './Like';
import Comments from '../Comments/Comments';

const Status = ({ info }) => (
  <div className='status'>
    <Like />
    <span className='status-repost'>{info.repost}</span>
    <Comments />
    <span className='status-view'>{info.view}</span>
  </div>
);

export default Status;
