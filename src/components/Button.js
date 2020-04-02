import React from 'react';
import PropTypes from 'prop-types';
import '../App.scss';

Button.propTypes = {
	label: PropTypes.string
}

function Button(props) {
  return (
    <div className="Button">
      <p className="Label">{props.label}</p>
    </div>
  );
}
  
  export default Button;