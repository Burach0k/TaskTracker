import React, { Fragment } from 'react';
import './Public.scss';
import PropTypes from 'prop-types';

const Public = ({ name, iconUrl }) => {
  let date = new Date();
  return (
    <div className='post-head'>
      <img className='public-img' src={iconUrl} alt='' />
      <p className='public-name'>{name}</p>
      <p className='public-time'>{date.getHours() +' : '+ date.getMinutes()}</p>
    </div>
  );
};

export default Public;
