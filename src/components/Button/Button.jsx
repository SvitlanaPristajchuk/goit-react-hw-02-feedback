import React, { Component } from 'react';
import s from ''; 
import PropTypes from 'prop-types';

class Button  extends Component {
    render(){
        const {  } = this.props;
        return (
            button type="button" onClick={this.handleClickButtonG}>
            Good {}
             </button>
             <button type="button" onClick={this.handleClickButtonG}>
             Good {}
              </button>
              <button type="button" onClick={this.handleClickButtonN }>
              Neutral {}
              </button>
              <button type="button" onClick={this.handleClickButtonB }>
              Bad {}
              </button>
        );
    };

};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};


export default Button;