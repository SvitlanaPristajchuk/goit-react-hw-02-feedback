import React from 'react';
import s from './Statistics.module.css';
import Notification from '../Notification/Notification';
import PropTypes from 'prop-types';

const Statistics = ({
    good,
    neutral,
     bad, 
     total, 
     positivePercentage,
   }) => (
 <>
  { total ? (
     <ul className={s.box}>
       <li className={s.options}> Good:{good} </li>
       <li className={s.options}> Neutral:{neutral} </li>
       <li className={s.options}> Bad:{bad} </li>
       <li className={s.options}> Total:{total} </li>
       <li className={s.options}>
         Positive feedback: {positivePercentage}%
       </li>
     </ul>
     ) : (
      <Notification message="No feedback given" />
     )
     }
 </>
);
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
   bad: PropTypes.number,
   total: PropTypes.number,
 };


  export default Statistics;


