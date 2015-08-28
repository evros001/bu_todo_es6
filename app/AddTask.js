import React from 'react';

export default class AddTask extends React.Component {
	
	state = {
		newTask: ''
	}

	handleChange(e) {
		this.setState({
			newTask: e.target.value
		})
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.addTask(this.state.newTask)
		this.setState({
			newTask: ''
		})
	}

	render() {
		return (
			<div className="add-task-container">
				<form onSubmit={::this.handleSubmit}>
					<input type="text" onChange={::this.handleChange} value={this.state.newTask} />
					<button type="submit">Add Task</button>
				</form>
			</div> 
		)
	}
}