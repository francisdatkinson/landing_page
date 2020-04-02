import React from 'react';
import PropTypes from 'prop-types';
import '../App.scss';

TextInput.propTypes = {
	label: PropTypes.string
}

function TextInput(props) {
	return (
		<div className="Input">
			<p className="Label">{props.label}</p>
			<input name="input" type="text"></input>
		</div>
	);
}
  
export default TextInput;