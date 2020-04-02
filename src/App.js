import React from 'react';
import logo from './logo.svg';
import './App.scss';
import * as EmailValidator from 'email-validator';

import Button from './components/Button.js';
import TextInput from './components/TextInput';
import CheckboxInput from './components/CheckboxInput';

export default class App extends React.Component {
	
	state = {
		rememberDevice: true,
		email: "",
		submitted: false
	}

	handleClick = () => {
		this.setState({ rememberDevice: !this.state.rememberDevice });
	}

	submitForm = () => {
		let input = document.getElementsByName("input")[0].value;

		if (EmailValidator.validate(input)) { // validates email address
			this.setState( { email: input, submitted: true } ); // updates email address in state and changes button text
		} else {
			alert("Please enter a valid email address");
		}
	}

	render() {
		return (
			<div className="App">
				<div className={`Card ${this.state.submitted ? 'faded' : ''}`}>
					<img src={logo} className="Logo" alt="logo" />
					<h1>Example login screen</h1>
					<h2>Getting started with Green.</h2>
					<form>
						{/* custom form components to match the design from the image */}
						<TextInput label="Email Address" id="InputEmail"></TextInput>
						{/* wrapped in a div as I had trouble getting handleClick to call properly from an external component */}
						<div onClick={ () => this.handleClick() }>
							<CheckboxInput label='Remember this device' isChecked={this.state.rememberDevice}></CheckboxInput>
						</div>
						{/* as above */}
						<div onClick={ () => this.submitForm() }>
							<Button label={this.state.submitted ? 'Signing in...' : 'Sign in'}></Button>
						</div>
					</form>				
				</div>			
			</div>
		);
	}
}
