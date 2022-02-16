import React, { Component } from 'react';
import Header from './components/Header/Header';
import Statistics from './components/Statistics/Statistics';
import s from './App.module.css';
import PropTypes from 'prop-types';



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
      <Header title="Please leave feedback"/>
      {Object.keys(this.state).map(key => (
      <button className={s.button}
      key={key} 
      type="button" 
      onClick={() => this.handleBtnClick(key)}>
        {key}
      </button>
      ))}

 

      <Header title="Statistics"/>
       <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positiveFeedbackPercentage= {positivFeedback}
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
