import React from 'react';
import logo from './logo.svg';
import gren from './img/gren.png';
import './App.scss';
import Card from './components/Card.js';
import Button from './components/Button.js';
import TextInput from './components/TextInput';
import SelectInput from './components/TextInput';

function App() {
  return (
    <div className="App">
			{/* <img src={logo} className="App-logo" alt="logo" />
			<p>
				Edit <code>src/App.js</code> and save to reload.
			</p>
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a> */}

			<div className='Card'>
				<img src={logo} className='App-logo' alt='logo' />
				<h1>Example login screen</h1>
				<h2>Getting started with Green.</h2>
				<form>
					<TextInput label='Email Address'></TextInput>
					<SelectInput label='Remember this device'></SelectInput>
				</form>
				
				
			</div>
			<img class='gren' src={gren} />
    </div>
  );
}

export default App;
