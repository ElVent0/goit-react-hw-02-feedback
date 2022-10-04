import css from './Statistics.module.css';
import React, { Component } from 'react';

class Statistics extends Component {
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
    const arrayOfData = separateObject(this.props);

    return (
      <>
        <ul>
          {arrayOfData.map(item => {
            return (
              <li key={item.name}>
                {item.name}: {item.value}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Statistics;
