import React from 'react';
import ReactDOM from 'react-dom';
import '../App.scss';

function SelectInput(props) {
	return (
		<div className='Input'>
			<p className='Label'>{props.label}</p>
			<input type='checkbox'></input>
		</div>
	);
}

SelectInput.propTypes = {
	label: String
}
  
export default SelectInput;