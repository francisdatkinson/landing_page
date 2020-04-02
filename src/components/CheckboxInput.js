import React from 'react';
import PropTypes from 'prop-types';
import '../App.scss';

CheckboxInput.propTypes = {
	label: PropTypes.string,
	isChecked: PropTypes.bool
}

function CheckboxInput(props) {
	return (
		<div className="Input CheckboxInput">
			<span className={`Checkbox ${props.isChecked ? "checked" : ""}`}></span>
			<p className="Label">{props.label}</p>
		</div>
	);
}
  
export default CheckboxInput;