import React from 'react';
import '../App.scss';

function Button(props) {
    return (
      <div className="Button" label={props.label}>
        <p className="Label">{props.label}</p>
      </div>
    );
  }
  
  export default Button;