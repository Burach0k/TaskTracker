import React, { Fragment } from 'react';
import './News.scss';
import PropTypes from 'prop-types';

const News = ({ contain, isUrl }) => {
  if(isUrl){
    return <img className='news-img' src={contain} alt=""/>
  }else{
    return <p className='news-text'>{contain}</p>
  }
};


export default News;
