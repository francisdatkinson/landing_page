import React from 'react';
import PropTypes from 'prop-types';
import '../App.scss';

CheckboxInput.propTypes = {
	label: PropTypes.string,
	isChecked: PropTypes.bool
}

function CheckboxInput(props) {

	return (
		<div className='Input CheckboxInput'>
			<input type='checkbox'></input>
			<span className={`Checkbox ${props.isChecked ? 'checked' : ''}`}></span>
			<p className='Label'>{props.label}</p>
		</div>
	);
}

// class CheckboxInput extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			isShow: true,
// 		};
// 	}
// 	render() {
// 		return (
// 			<div className='Input CheckboxInput'>
// 			<input type='checkbox'></input>
// 			<span className='Checkmark' isChecked={props.isChecked}></span>
// 			<p className='Label'>{props.label}</p>
// 		</div>
// 		);
// 	}
// }
  
export default CheckboxInput;