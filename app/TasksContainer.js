import React from 'react';
import Task from './Task.js';
import AddTask from './AddTask.js';

export default class TasksContainer extends React.Component {
	state = {
		tasks: []
	}

	handleAddTask(newTask) {
		this.setState({
            tasks: this.state.tasks.concat([newTask])
        });
	}

	render() {
		const taskList = this.state.tasks.map((task, index) => 
				<li key={index} className="task" style={styles.li}>
					<span>
						<i className="fa fa-trash-o"></i>
					</span>
					<span>
						<Task title={task} />
					</span>
				</li>
		);
		return (
			<div className="tasks-container">
				<ul style={styles.uList}>
					{taskList}
				</ul>
				<AddTask addTask={::this.handleAddTask} />
			</div>
		)
	}
}

const styles = {
	uList : {
		listStyle: "none"
	},
	li: {
		display: "flex"
	}
}

