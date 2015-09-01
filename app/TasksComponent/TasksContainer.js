import React from 'react';
import Task from './Task.js';
import AddTask from './AddTask.js';
import TaskSchedule from './TaskSchedule.js';

export default class TasksContainer extends React.Component {
	state = {
		tasks: [],
	}

	handleAddTask(newTask) {
		this.setState({
            tasks: this.state.tasks.concat([newTask])
        });
	}

	handleRemoveTask(index) { 
		this.state.tasks.splice(index, 1);
        this.setState({
            tasks: this.state.tasks
        })
	}	

	render() {
		console.log(this)
		const taskList = this.state.tasks.map((task, index) => 
				<li key={index} className="task">
					<span onClick={::this.handleRemoveTask.bind(this, index)}>
						<i className="fa fa-trash-o"></i>
					</span>
					<span>
						<Task title={task} />
					</span>
				</li>
		);
		return (
			<div className="tasks-container">
				<TaskSchedule />
				<div className="task-project-title">
					{this.props.project}
				</div>
				<ul>
					{taskList}
				</ul>
				<AddTask addTask={::this.handleAddTask} />
			</div>
		)
	}
}

