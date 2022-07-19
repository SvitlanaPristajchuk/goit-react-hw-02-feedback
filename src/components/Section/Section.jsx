import React from 'react';
import s from './Section.module.css'; 
import PropTypes from 'prop-types';


const Section = ({children, title}) => {

    return(
          <h1 className={s.title}>
            {title}
            {children}
            </h1>
    )
    };

;
Section.propTypes = {
 title: PropTypes.string.isRequired,
};


export default Section;