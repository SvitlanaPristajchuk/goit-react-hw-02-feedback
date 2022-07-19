import React, { Component } from 'react'
import Statistics from './components/Statistics/Statistics';
import PropTypes from 'prop-types';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';





 class App  extends Component {
  state = {
   good: 0,
   neutral: 0,
   bad: 0
  }
 
  handleBtnClick = key => {
  this.setState(prevState => {
   return {[key]:prevState[key]+1};
    });
  }
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
      let totalFeedback = this.countTotalFeedback();
      const { good } = this.state;
      return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
    };
  

   render () {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivFeedback = this.countPositiveFeedbackPercentage();
    return (
      <>
      <Section title="Please leave feedback"/>
      <FeedbackOptions 
     options={Object.keys(this.state)} 
     onLeaveFeedback={this.handleBtnClick} />
      <Section title="Statistics"/>
      <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage= {positivFeedback}
          /> 
    </>
    ) 
 }
 }
 Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
 
 };
export default App;
