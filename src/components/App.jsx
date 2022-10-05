import React, { Component } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const result = this.state.good + this.state.neutral + this.state.bad;
    return result;
  };

  countPositiveFeedbackPercentage = () => {
    const result = (this.state.good / this.countTotalFeedback()) * 100;
    return result;
  };

  handleFeedback = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  render() {
    return (
      <>
        <Section
          title="Please leave Feedback"
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        >
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleFeedback}
          ></FeedbackOptions>
        </Section>
        <Section
          title="Statistics"
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        >
          {this.state.good !== 0 ||
          this.state.neutral !== 0 ||
          this.state.bad !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  }
}

// 3 - Зробити стилі
