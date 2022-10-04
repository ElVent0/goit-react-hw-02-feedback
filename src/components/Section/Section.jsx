import css from './Section.module.css';
import React, { Component } from 'react';

class Section extends Component {
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </>
    );
  }
}

export default Section;
