import css from './Statistics.module.css';
import React, { Component } from 'react';

class Statistics extends Component {
  render() {
    const separateObject = obj => {
      const res = [];
      const keys = Object.keys(obj);
      keys.forEach(key => {
        let keyName;
        switch (key) {
          case 'good':
            keyName = 'Good';
            break;
          case 'neutral':
            keyName = 'Neutral';
            break;
          case 'bad':
            keyName = 'Bad';
            break;
          case 'total':
            keyName = 'Total';
            break;
          case 'positivePercentage':
            keyName = 'Positive feedback';
            break;
          default:
            console.log('Щось не так');
        }
        res.push({
          name: keyName,
          value: obj[key],
        });
      });
      return res;
    };
    const arrayOfData = separateObject(this.props);

    return (
      <>
        <ul className={css.list}>
          {arrayOfData.map(item => {
            return (
              <li key={item.name} className={css.item}>
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
