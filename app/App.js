import React from 'react';
import StyleSheet from '../stylesheets/main.css';
import ToDoContainer from './ToDoContainer.js';


class App extends React.Component {
	render() {
		return(
			<div className="app-container">
				<ToDoContainer />
			</div>
		)
	}	
}

React.render(<App />, document.getElementById("app"));