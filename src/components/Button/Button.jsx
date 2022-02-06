import React from 'react';
import s from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ( { onAdd1, onAdd2, onAdd3}) => {
    return (
        <div className={s.container}>
        <button type="button" className ={s.button} onClick={onAdd1}>Good</button>
      <button type="button" className ={s.button} onClick={onAdd2}>Neutral</button>
      <button type="button"className ={s.button} onClick={onAdd3}>Bad</button>
      </div>
    )
}
Button.propTypes = {
  onAdd1: PropTypes.func.isRequired,
  onAdd2: PropTypes.func.isRequired,
  onAdd3: PropTypes.func.isRequired,

 
 };
export default Button;

