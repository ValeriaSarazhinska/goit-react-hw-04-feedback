import React from 'react';
import css from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <div className={css.message}>{message}</div>;
};

export default Notification;
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
