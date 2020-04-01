import React from 'react';
import ReactDOM from 'react-dom';
import '../App.scss';

function CheckboxInput(props) {
	return (
		<div className='Input CheckboxInput'>
			<input type='checkbox'></input>
			<span className='Checkmark' isChecked={props.isChecked}></span>
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

CheckboxInput.propTypes = {
	label: String
}
  
export default CheckboxInput;