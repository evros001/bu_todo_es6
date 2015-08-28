import React from 'react';
import TaskContainer from './TaskContainer.js'

export default class TaskContainer extends React.Component {
	
	handleRemoveTask(index) {
		console.log("remove")
	}

	render() {
		<div>
			<TaskContainer remove={::this.handleRemoveTask} />
		</div>
	}
}