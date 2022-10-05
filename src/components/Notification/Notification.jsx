import css from './Notification.module.css';
import React, { Component } from 'react';

class Notification extends Component {
  render() {
    return <p className={css.notification}>{this.props.message}</p>;
  }
}

export default Notification;
