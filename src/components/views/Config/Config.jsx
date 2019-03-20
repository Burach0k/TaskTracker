import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Config.scss';

function doSmth(){
  alert('Пока ничего не делает(');
}

const Config = () => (
  <div className = 'config'>
    <ul onClick = {doSmth}>
    Menu
      <li>{'Это не интересно'}</li>
      <li>{'Сохранить в закладках'}</li>
      <li>{'Пожаловаться'}</li>
      <li>{'Уведомления о записях'}</li>
    </ul>
  </div>
);

export default Config;
