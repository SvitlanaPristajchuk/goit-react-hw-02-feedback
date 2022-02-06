import React, { Component } from 'react';
import Header from './components/Header/Header';
import Statistics from './components/Statistics/Statistics';
import Button from './components/Button/Button';
import PropTypes from 'prop-types';


 class App  extends Component {
  state = {
   good: 0,
   neutral: 0,
   bad: 0
  }
 
  handleAdd1 = () => {
    this.setState((prevState) => {
      return { good: prevState.good + 1 }
    });
  };


  handleAdd2 = () => {
    this.setState((prevState) => {
      return { neutral: prevState.neutral + 1 }
    });
  };

  handleAdd3 = () => {
    this.setState((prevState) => {
      return { bad: prevState.bad + 1 }
    });
  };

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
   //const positivFeedback = this.countPositiveFeedbackPercentage;
   //const totalFeedback = this.countTotalFeedback;
    return (
      <>
      <Header title="Please leave feedback"/>
      <Button onAdd1={this.handleAdd1} onAdd2={this.handleAdd2} onAdd3={this.handleAdd3}/>
      <Header title="Statistics"/>
       <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={good + neutral + bad}
            positiveFeedbackPercentage={(good + neutral + bad) ? Math.round((good / (good + neutral + bad)) * 100) : 0}
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
