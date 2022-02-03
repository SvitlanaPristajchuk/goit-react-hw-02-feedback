import React, { Component } from 'react';
import Header from './components/Header/Header';
import Button from './components/Button/Button';


 class App  extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClickButtonG = e => {
    this.setState(
     { good: e.currentTarget.value } 
    )
  }
  handleClickButtonN = e => {
    this.setState(
   { neutral: e.currentTarget.value}
      );
    };
    handleClickButtonB = e => {
      this.setState(
     { bad: e.currentTarget.value}
        );
      };

   render() {
    return (
      <>
      <Header title="Please leave feedback"/>
      <Button type="button" onClick={}/>
      <Header title="Statistics"/>
      <ul>
        <li> Good:</li>
        <li> Neutral:</li>
        <li> Bad:</li>
        </ul>
      </>
    )
   
   }

   
  
}

export default App;
