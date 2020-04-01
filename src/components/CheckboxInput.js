import React from 'react';
import PropTypes from 'prop-types';
import '../App.scss';

class CheckboxInput extends React.Component {
	render() {
		return (
			<div className='Input CheckboxInput' >
				<span className={`Checkbox ${this.props.isChecked ? 'checked' : ''}`}></span>
				<p className='Label'>{this.props.label}</p>
			</div>
		);
	}
}

CheckboxInput.propTypes = {
	label: PropTypes.string,
	isChecked: PropTypes.bool
}
  
export default CheckboxInput;