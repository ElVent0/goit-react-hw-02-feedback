import css from './FeedbackOptions.module.css';
import React, { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    const separateObject = obj => {
      const res = [];
      const keys = Object.keys(obj);
      keys.forEach(key => {
        res.push({
          name: key,
          value: obj[key],
        });
      });
      return res;
    };
    const arrayOfData = separateObject(this.props.options);

    return (
      <>
        <ul>
          {arrayOfData.map(item => {
            return (
              <li key={item.name}>
                <button onClick={this.props.onLeaveFeedback}>
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default FeedbackOptions;
