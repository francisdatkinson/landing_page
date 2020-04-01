import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Button from './components/Button.js';
import TextInput from './components/TextInput';
import CheckboxInput from './components/CheckboxInput';

function App() {
  return (
    <div className="App">
			<div className='Card'>
				<img src={logo} className='Logo' alt='logo' />
				<h1>Example login screen</h1>
				<h2>Getting started with Green.</h2>
				<form>
					<TextInput label='Email Address'></TextInput>
					<CheckboxInput label='Remember this device' isChecked={false}></CheckboxInput>
					<Button label='Sign In'></Button>
				</form>				
			</div>			
    </div>
  );
}

export default App;
