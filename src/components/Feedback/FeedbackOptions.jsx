import css from './FeedbackOptions.module.css';
import React, { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    function capitalize(word) {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
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
        <ul className={css.list}>
          {arrayOfData.map(item => {
            return (
              <li key={item.name} className={css.item}>
                <button
                  name={item.name}
                  className={css.button}
                  onClick={this.props.onLeaveFeedback}
                >
                  {capitalize(item.name)}
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
