import React from 'react';
import TasksContainer from './TasksContainer.js';

class App extends React.Component {
	render() {
		return(
			<div>
				<TasksContainer />
			</div>
		)
	}	
}

React.render(<App />, document.getElementById("app"));