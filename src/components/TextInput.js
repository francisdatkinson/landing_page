import React from 'react';
import ReactDOM from 'react-dom';
import '../App.scss';

function TextInput(props) {
	return (
		<div className='Input'>
			<p className='Label'>{props.label}</p>
			<input type='text'></input>
		</div>
	);
}

TextInput.propTypes = {
	label: String
}
  
export default TextInput;