import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Button from './components/Button.js';
import TextInput from './components/TextInput';
import CheckboxInput from './components/CheckboxInput';

export default class App extends React.Component {
	
	state = {
		rememberDevice: true
	}

	handleClick = () => { // I had trouble preventing the click event from being fired on each render, causing an infinite loop
		// the two checkbox states do work however, if you change the prop manually
		console.log("click");
		this.setState({ rememberDevice: !this.state.rememberDevice });
	}

	render() {
		return (
			<div className="App">
				<div className='Card'>
					<img src={logo} className='Logo' alt='logo' />
					<h1>Example login screen</h1>
					<h2>Getting started with Green.</h2>
					<form>
						{/* custom form components to match the design from the image */}
						<TextInput label='Email Address'></TextInput>
						<CheckboxInput label='Remember this device' isChecked={this.state.rememberDevice} /* onClick={this.handleClick()}*/ />
						<Button label='Sign In'></Button>
					</form>				
				</div>			
			</div>
		);
	}
}
